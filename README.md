# Inventaire de la pépinière

> Projet individuel du SAS DFS, brief 2 (sujet : [SUJET.md](SUJET.md)). Remplacez chaque ✏️ par votre texte, puis supprimez cette ligne.

## Contexte

✏️ *L'outil est destiné au responsable d'une pépinière pédagogique chargé de suivre et de gérer les stocks de plants. Il doit identifier les différentes espèces végétales et connaître les quantités disponibles. Il a besoin d'un outil simple pour organiser les informations et faciliter la gestion de son inventaire. Il saisit l'identifiant de l'espèce, son nom commun, son groupe botanique, le nombre de plants et la date du relevé. Le programme lui permet d'afficher la liste des espèces, d'ajouter de nouveaux plants, de rechercher une espèce et de trier les stocks selon les quantités. Il lui fournit également une synthèse des quantités disponibles et signale les espèces dont le stock est faible. Cependant, l'outil ne produit pas de plants, ne diagnostique pas les maladies des végétaux et ne surveille pas automatiquement leur croissance.*

## Prérequis et lancement

- Node.js 20 ou plus récent, Git ; aucune bibliothèque à installer.

```bash
git clone https://github.com/VOTRE-COMPTE/brief-2-inventaire-pepiniere.git
cd brief-2-inventaire-pepiniere
node app.js
npm test
```

Sous PowerShell, si `npm` est bloqué : `npm.cmd test`.

## Fonctionnalités

✏️ *Cochez seulement ce qui marche : `- [x]`.*

- [ ] Données lues et enregistrées dans `donnees/plants.json`
- [ ] Ajouter un plant, saisies invalides refusées sans arrêter le programme
- [ ] Lister l'inventaire, message si l'inventaire est vide
- [ ] Rechercher par code ou par nom ; filtrer par groupe botanique
- [ ] Trier par nombre de plants
- [ ] Synthèse : stock total, espèces et plants par groupe, espèce la plus abondante, stocks faibles (≤ 10 plants)
- [ ] Bonus : supprimer et modifier un plant (choix 6 et 7)
- [ ] Bonus : tri décroissant, groupe le plus fourni

## Données

✏️ *Le fichier, le nombre de lignes, les champs (voir [docs/dictionnaire-donnees.md](docs/dictionnaire-donnees.md)), l'unité. Rappelez qu'elles sont fictives et que les groupes sont fournis par le coach.*

## Limites

✏️ *Au moins trois. Par exemple : le seuil de 10 plants est un repère de suivi, pas une recommandation de production.*

## Documents

[Dictionnaire des données](docs/dictionnaire-donnees.md) · [Tâches](docs/taches.md) · [Relevé des tests](docs/releve-tests.md) · [Journal de recherche](docs/journal-recherche.md) · [Fiche agronomique](docs/fiche-agronomique.md) · [Fiche individuelle](docs/fiche-individuelle.md)

## Auteur

✏️ *Prénom NOM, compte GitHub. Entraide : avec qui, sur quoi.*
