// Inventaire de la pépinière — point d'entrée : le menu.
// Comportement et textes imposés : fiches/3-ajouter-lister.md.
// Lancer : node app.js
import { demander, fermerSaisie, ouvrirSaisie } from './src/saisie.js';
import { chargerJson, enregistrerJson } from './src/stockage.js';
import { GROUPES, ajouterPlant, formaterPlant, listerPlants, trouverParId } from './src/registre.js';
import { filtrerParGroupe, rechercherParNom, trierParNombrePlants } from './src/recherche.js';
import {
  groupeLePlusFourni,
  modifierPlant,
  supprimerPlant,
  trierParNombrePlantsDecroissant
} from './src/bonus.js';
import {
  SEUIL_STOCK_FAIBLE,
  especeLaPlusAbondante,
  stocksFaibles,
  syntheseParGroupe,
  totalPlants
} from './src/synthese.js';

const FICHIER_DONNEES = 'donnees/plants.json';

function messageErreur(erreur) {
  return erreur instanceof Error ? erreur.message : String(erreur);
}

async function main() {
  ouvrirSaisie();

  try {
    console.log('==================================================');
    console.log('   INVENTAIRE DE LA PÉPINIÈRE');
    console.log('   Pépinière pédagogique');
    console.log('==================================================');

    let plants = [];
    try {
      plants = await chargerJson(FICHIER_DONNEES);
      console.log(`${plants.length} espèce(s) chargée(s) depuis ${FICHIER_DONNEES}.`);
    } catch (erreur) {
      console.log(
        `Impossible de lire ${FICHIER_DONNEES} : ${messageErreur(erreur)}. L'inventaire démarre vide.`
      );
    }

    let continuer = true;

    while (continuer) {
      console.log('\n--------------------- MENU ---------------------');
      console.log('1. Ajouter un plant');
      console.log("2. Lister l'inventaire");
      console.log('3. Rechercher (code, nom, groupe)');
      console.log('4. Trier (nombre de plants)');
      console.log('5. Synthèse des quantités');
      console.log('6. Supprimer un plant');
      console.log('7. Modifier un plant');
      console.log('0. Quitter');

      const choix = await demander('Votre choix : ');

      if (choix === null || choix === '0') {
        console.log('Au revoir !');
        continuer = false;
        continue;
      }

      try {
        if (choix === '1') {
          console.log('\n--- Ajouter un plant ---');
          console.log(`Groupes autorisés : ${GROUPES.join(' ou ')}`);

          const id = await demander('Code du plant (ex. N11) : ');
          const nomCommun = await demander('Nom commun (ex. papayer) : ');
          const groupe = await demander('Groupe botanique (angiosperme ou gymnosperme) : ');
          const nombrePlants = await demander('Nombre de plants (entier) : ');
          const dateReleve = await demander('Date du relevé (AAAA-MM-JJ) : ');

          if (
            id === null ||
            nomCommun === null ||
            groupe === null ||
            nombrePlants === null ||
            dateReleve === null
          ) {
            continue;
          }

          const saisie = {
            id: id.toUpperCase(),
            nomCommun: nomCommun.toLowerCase(),
            groupe: groupe.toLowerCase(),
            nombrePlants,
            dateReleve
          };
          const erreurs = ajouterPlant(plants, saisie);

          if (erreurs.length > 0) {
            console.log('Ajout refusé :');
            for (const erreur of erreurs) {
              console.log(`  - ${erreur}`);
            }
            console.log(`L'inventaire compte toujours ${plants.length} espèce(s).`);
          } else {
            try {
              await enregistrerJson(FICHIER_DONNEES, plants);
            } catch (erreur) {
              plants.pop();
              throw erreur;
            }
            console.log(`Plant ${saisie.id} ajouté. L'inventaire compte ${plants.length} espèce(s).`);
          }
        } else if (choix === '2') {
          console.log(`\n--- Inventaire (${plants.length} espèce(s)) ---`);
          console.log(listerPlants(plants));
        } else if (choix === '3') {
          console.log('\n--- Rechercher ---');
          console.log('1. Par code');
          console.log('2. Par nom commun');
          console.log("3. Les espèces d'un groupe botanique");
          const sousChoix = await demander('Votre choix : ');

          if (sousChoix === null) {
            continue;
          } else if (sousChoix === '1') {
            const code = await demander('Code : ');
            if (code === null) {
              continue;
            }

            const codeNormalise = code.toUpperCase();
            const plant = trouverParId(plants, codeNormalise);
            if (plant === undefined) {
              console.log(`Plant ${codeNormalise} introuvable.`);
            } else {
              console.log(formaterPlant(plant));
            }
          } else if (sousChoix === '2') {
            const nom = await demander('Nom ou partie du nom : ');
            if (nom === null) {
              continue;
            }

            const nomNormalise = nom.toLowerCase();
            const resultats = rechercherParNom(plants, nomNormalise);
            console.log(
              `${resultats.length} espèce(s) dont le nom contient « ${nomNormalise} » :`
            );
            console.log(listerPlants(resultats));
          } else if (sousChoix === '3') {
            const groupe = await demander(`Groupe (${GROUPES.join(' ou ')}) : `);
            if (groupe === null) {
              continue;
            }

            const groupeNormalise = groupe.toLowerCase();
            const resultats = filtrerParGroupe(plants, groupeNormalise);
            console.log(`${resultats.length} espèce(s) du groupe ${groupeNormalise} :`);
            console.log(listerPlants(resultats));
          } else {
            console.log('Choix inconnu : retour au menu.');
          }
        } else if (choix === '4') {
          console.log('\n--- Trier ---');
          console.log('1. Par nombre de plants croissant');
          console.log('2. Par nombre de plants décroissant');
          const sousChoix = await demander('Votre choix : ');

          if (sousChoix === null) {
            continue;
          } else if (sousChoix === '1') {
            console.log(listerPlants(trierParNombrePlants(plants)));
          } else if (sousChoix === '2') {
            console.log(listerPlants(trierParNombrePlantsDecroissant(plants)));
          } else {
            console.log('Choix inconnu : retour au menu.');
          }
        } else if (choix === '5') {
          console.log("\n--- Synthèse de l'inventaire ---");
          console.log(`Nombre d'espèces : ${plants.length}`);
          console.log(`Stock total : ${totalPlants(plants)} plants`);
          console.log('Par groupe botanique :');

          const synthese = syntheseParGroupe(plants);
          for (const [groupe, valeurs] of Object.entries(synthese)) {
            console.log(`  ${groupe} : ${valeurs.especes} espèce(s), ${valeurs.plants} plants`);
          }

          const groupePlusFourni = groupeLePlusFourni(plants);
          if (groupePlusFourni === null) {
            console.log('Groupe le plus fourni : aucune donnée');
          } else {
            console.log(`Groupe le plus fourni : ${groupePlusFourni.groupe} (${groupePlusFourni.plants} plants)`);
          }

          const abondante = especeLaPlusAbondante(plants);
          console.log(
            `Espèce la plus abondante : ${abondante ? formaterPlant(abondante) : 'aucune donnée'}`
          );

          const faibles = stocksFaibles(plants, SEUIL_STOCK_FAIBLE);
          console.log(`Stocks faibles (≤ ${SEUIL_STOCK_FAIBLE} plants) : ${faibles.length}`);
          for (const plant of faibles) {
            console.log(`  ${formaterPlant(plant)}`);
          }
          console.log(
            `Rappel : le seuil de ${SEUIL_STOCK_FAIBLE} plants est un repère pédagogique de suivi, pas une recommandation de production.`
          );
        } else if (choix === '6') {
          const id = await demander('Identifiant : ');
          if (id === null) {
            continue;
          }
          const idNormalise = id.toUpperCase();
          const plantSupprime = supprimerPlant(plants, idNormalise);
          if (plantSupprime === undefined) {
            console.log(`Plant ${idNormalise} introuvable.`);
          } else {
            try {
              await enregistrerJson(FICHIER_DONNEES, plants);
            } catch (erreur) {
              plants.push(plantSupprime);
              throw erreur;
            }
            console.log(`Plant ${idNormalise} supprimé. L'inventaire compte ${plants.length} espèce(s).`);
          }
        } else if (choix === '7') {
          const id = await demander('Identifiant : ');
          if (id === null) {
            continue;
          }
          const champ = await demander('Champ à modifier (nomCommun, groupe, nombrePlants, dateReleve) : ');
          if (champ === null) {
            continue;
          }
          const valeur = await demander('Nouvelle valeur : ');
          if (valeur === null) {
            continue;
          }

          const erreurs = modifierPlant(plants, id.toUpperCase(), champ, valeur);
          if (erreurs.length > 0) {
            console.log('Modification refusée :');
            for (const erreur of erreurs) {
              console.log(`  - ${erreur}`);
            }
          } else {
            try {
              await enregistrerJson(FICHIER_DONNEES, plants);
            } catch (erreur) {
              throw erreur;
            }
            console.log(`Plant ${id.toUpperCase()} modifié.`);
          }
        } else {
          console.log(`Choix inconnu : « ${choix} ». Tapez un chiffre du menu.`);
        }
      } catch (erreur) {
        const message = messageErreur(erreur);
        if (message.startsWith('TODO')) {
          console.log(`À compléter : ${message}`);
        } else {
          console.log(`Erreur inattendue : ${message}`);
        }
      }
    }
  } finally {
  fermerSaisie();
  }
}

main();
