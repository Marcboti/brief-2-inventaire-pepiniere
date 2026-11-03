// Ajouter et lister les plants.
// Fiche : fiches/3-ajouter-lister.md · Vérifier : npm run test:registre
import { estDateValide, versNombre } from './outils.js';

// Liste fermée des groupes botaniques acceptés, fournie et validée par le coach agronomie.
export const GROUPES = ['angiosperme', 'gymnosperme'];

// Renvoie une ligne de texte qui décrit le plant.
// Exemple : 'N09 | pin | gymnosperme | 8 plants | 2026-10-24'
export function formaterPlant(plant) {
  return `${plant.id} | ${plant.nomCommun} | ${plant.groupe} | ${plant.nombrePlants} plants | ${plant.dateReleve}`;
}


// Renvoie un texte avec un plant par ligne (lignes séparées par '\n'),
// ou 'Aucun plant enregistré.' si la liste est vide.
export function listerPlants(plants) {
  if (plants.length === 0) {
    return 'Aucun plant enregistré.';
  }
  return plants.map(formaterPlant).join('\n'); // rassemble les ressultats en separant chaque plants par un retour à la ligne.
}

// Renvoie le plant qui a ce code (identifiant), ou undefined s'il n'existe pas.
export function trouverParId(plants, id) {
  return plants.find((plant) => plant.id === id); // find() permet de parcourir le tableau et ===id permet de faire la comparaison.
}

// Contrôle une saisie AVANT de l'ajouter. Tous les champs arrivent sous forme de TEXTE :
// { id: 'N11', nomCommun: 'papayer', groupe: 'angiosperme', nombrePlants: '15', dateReleve: '2026-10-27' }
// Renvoie un tableau de messages d'erreur, un message par règle non respectée ;
// un tableau vide signifie « saisie valide ».
// Règles : id obligatoire et unique · nomCommun obligatoire · groupe présent dans GROUPES
// · nombrePlants nombre ENTIER positif ou nul · dateReleve réelle au format AAAA-MM-JJ.

export function verifierPlant(saisie, plants) {
  const erreurs = [];// l'erreur est un tableau vide qui va recevoir les problèmes détectés

  if (!saisie.id || saisie.id.trim() === '') { // ! SAISIE.ID verifie si l'id est absent
    erreurs.push('L’identifiant est obligatoire.');
  } else if (trouverParId(plants, saisie.id.trim())) { // recherche l'id dans l'inventaire
    erreurs.push(` Cet Identifiant existe déjà.`); // ajoute un message d'erreurs dans le tableau
  }

  if (!saisie.nomCommun || saisie.nomCommun.trim() === ``) {
    erreurs.push('Le nom commun est obligatoire.');
  }
  if (!GROUPES.includes(saisie.groupe)) { // verification si une valeur est presente dans ce tableau
    erreurs.push('Le groupe botanique est invalide.');
  }
  const nombre = versNombre(saisie.nombrePlants);

  if (!Number.isInteger(nombre) || nombre < 0 || String(saisie.nombrePlants ?? '').trim() === '') { // refus des nombres décimaux et les valeurs qui ne sont pas des nombres.
    erreurs.push('Le nombre plant doit être un entier positif ou nul.');
  }

  if (!estDateValide(saisie.dateReleve)) {
    erreurs.push('La doit être une date réelle au format AAAA-MM-JJ.');
  }
  return erreurs;
}

// Fabrique le plant à enregistrer à partir d'une saisie VALIDE : nombrePlants devient un nombre.
export function creerPlant(saisie) {
  const nouveauPlant = {
    id: saisie.id.trim(), nomCommun: saisie.nomCommun.trim(),
    groupe: saisie.groupe,
    nombrePlants: versNombre(saisie.nombrePlants), dateReleve: saisie.dateReleve
  };
  return nouveauPlant;
}

// Ajoute la saisie à l'inventaire si elle est valide (verifierPlant, puis creerPlant).
// Renvoie les erreurs : [] si le plant a été ajouté ; sinon les messages, et rien n'est ajouté.
export function ajouterPlant(plants, saisie) {
  const erreurs = verifierPlant(saisie, plants);

  if (erreurs.length > 0) {
    return erreurs;
  }

  const nouveauPlant = creerPlant(saisie);
  plants.push(nouveauPlant);
  return [];

}
