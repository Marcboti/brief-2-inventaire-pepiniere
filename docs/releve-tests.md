# Relevé des tests

> Écrivez le résultat attendu avant d'essayer. Un écart n'est pas une faute : notez-le, corrigez, refaites le test.

**Calculs à la main** : refaites à la main les résultats de référence de `SUJET.md`, puis comparez avec votre programme. ✏️
** 30+45+20+50+25+18+12+22+8+10+15 = 255 **

**Essais dans le menu** : un ajout valide (encore là après redémarrage), chaque règle refusée, une recherche introuvable, chaque tri, la synthèse, un choix inconnu.

| Action | Attendu | Obtenu | Testeur |
| --- | --- | --- | --- |
| Vérification de l'application (nmp test) | que les tests s'exécutent | les tests reuissis apparaissent en vert | RODRIGUE |
| lancement de l'applicement de l'application (node app.js) | verifier que le menu principal s'execute sans erreur| le menu affiche 11 espèces chargées | RODRIGUE |
| Supprimer O02 | Plant O02 introuvable | OK | Marc Boti |
| Recherche nom "cacao" | 1 espèce (N01 \| cacao \| angiosperme \| 30 plants) | OK | Marc Boti |

**Sur un autre poste** (`git clone`, `node app.js`, `npm test`, en suivant le README) : Marc BOTI
