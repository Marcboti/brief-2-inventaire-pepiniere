# Inventaire de la pépinière

> Projet individuel du SAS DFS, brief 2 (sujet : [SUJET.md](SUJET.md)). Remplacez chaque ✏️ par votre texte, puis supprimez cette ligne.

## Contexte

*L'outil est destiné au responsable d'une pépinière pédagogique chargé de suivre et de gérer les stocks de plants. Il doit identifier les différentes espèces végétales et connaître les quantités disponibles. Il a besoin d'un outil simple pour organiser les informations et faciliter la gestion de son inventaire. Il saisit l'identifiant de l'espèce, son nom commun, son groupe botanique, le nombre de plants et la date du relevé. Le programme lui permet d'afficher la liste des espèces, d'ajouter de nouveaux plants, de rechercher une espèce et de trier les stocks selon les quantités. Il lui fournit également une synthèse des quantités disponibles et signale les espèces dont le stock est faible. Cependant, l'outil ne produit pas de plants, ne diagnostique pas les maladies des végétaux et ne surveille pas automatiquement leur croissance.*

## Prérequis et lancement

- Node.js 20 ou plus récent, Git ; aucune bibliothèque à installer.

```bash
git clone https://github.com/techsene/brief-2-inventaire-pepiniere
cd brief-2-inventaire-pepiniere
node app.js
npm test
```

Sous PowerShell, si `npm` est bloqué : `npm.cmd test`.

## Fonctionnalités

✏️ *Cochez seulement ce qui marche : `- [x]`.*

- [X] Données lues et enregistrées dans `donnees/plants.json`
- [X] Ajouter un plant, saisies invalides refusées sans arrêter le programme
- [X] Lister l'inventaire, message si l'inventaire est vide
- [X] Rechercher par code ou par nom ; filtrer par groupe botanique
- [X] Trier par nombre de plants
- [X] Synthèse : stock total, espèces et plants par groupe, espèce la plus abondante, stocks faibles (≤ 10 plants)
- [X] Bonus : supprimer et modifier un plant (choix 6 et 7)
- [X] Bonus : tri décroissant, groupe le plus fourni

## Données

✏️ *Le fichier, le nombre de lignes, les champs (voir [docs/dictionnaire-donnees.md](docs/dictionnaire-donnees.md)), l'unité. Rappelez qu'elles sont fictives et que les groupes sont fournis par le coach.*
Les données sont enregistrées dans le fichier donnees/plants.json.
code : id;
nom : nom commun;
groupe : groupe botanique;
nombrePlants : quantité de plants disponibles;
date : date du relevé.
il n'y a pas d'unité.
les données sont fictives et
les groupes botaniques ont été fournis par le caoch dans le cadre du brief.

## Limites

✏️ *Au moins trois. Par exemple : le seuil de 10 plants est un repère de suivi, pas une recommandation de production.*
- les sont fictives donc ne represente pas réellement les stocks d'une pépinière
- le seuil de 10 est trop peut pour une recommandation agronomique de production
- l'application fonction à partir de données saisies manuellement et ne dispose pas de capteurs pour suivre automatiquement l'évolution les plants
- l'application ne diagnostic pas les maladies ni ne propose des traitement phytosanitaire.
## Documents

[Dictionnaire des données](docs/dictionnaire-donnees.md) · [Tâches](docs/taches.md) · [Relevé des tests](docs/releve-tests.md) · [Journal de recherche](docs/journal-recherche.md) · [Fiche agronomique](docs/fiche-agronomique.md) · [Fiche individuelle](docs/fiche-individuelle.md)

## Auteur

✏️ *Prénom NOM, compte GitHub. Entraide : avec qui, sur quoi.*
Prénom NOM : Rodrigue SENE
compte GitHub : https://github.com/techsene
Entraide : j'ai echangé avec les autres membres du SAS  et aussi le caoch sur la comprehension du sujet , des consignes, la programmation Javascript, sur les syntaxes, les tests à éffectuers. 
