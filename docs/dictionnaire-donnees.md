# Dictionnaire des données

> Un champ par ligne, d'après `SUJET.md` et le fichier de `donnees/`. La première ligne sert de modèle.

| Champ | Signification | Type | Règle de validation | Unité | Exemple |
| --- | --- | --- | --- | --- | --- |
| `id` | Identifiant unique | Texte | non vide, absent des données | — | N01 |
| nomCommun | Nom commun de l'espèce végétale|Texte| Nom vid, absent des données | — | cacao |
| Groupe | Groupe botanique de l'espèce  | Texte | Doit être angiosperme ou gymnosperme| — | angiosperme|
| nombrePlants | Quantité de plants disponibles dans la pépinière | Nombre entier | Doit être positive ou égale à zéro | plants | 30 |
| dateReleve | Date à laquelle la quantité a été relevée | la date au format AAA-MM-JJ | Date réelle et format valide | — | 2026-10-24|

**Listes de valeurs autorisées** : Groupe botanique : angiosperme ou gymnosperme.
                                   Nombre de plants : un nombre entier supérieur ou égal à zéro.
                                   Date : une date réelle au format AAAA-MM-JJ.

**Sources** : donnees-json.md // servi pour remplir les champs et les exemples.
              fiches/3-ajouter-lister.md // servir pour les règles de validation.
              fiches/1-concevoir.md // servir pour definir les termes agronomiques.
