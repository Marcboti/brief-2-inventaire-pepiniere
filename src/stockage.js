// Lire et écrire les données dans un fichier JSON. À coder EN PREMIER : le menu en a besoin pour démarrer.
// Fiche : fiches/2-donnees-json.md · Vérifier : npm run test:stockage
import { readFile, writeFile } from 'node:fs/promises';

// Lit le fichier JSON et renvoie le tableau qu'il contient.
// Si le fichier n'existe pas ou n'est pas du JSON valide, laissez l'erreur remonter : le menu l'affichera.
export async function chargerJson(chemin) {
  const contenu = await readFile(chemin, 'utf8');// Le contenu est une chaîne de caractères, on la convertit en tableau d'objets.
  return JSON.parse(contenu); // JSON.parse transform: le texte en données JavaScript.
}

// Écrit le tableau dans le fichier, au format JSON indenté de 2 espaces.
export async function enregistrerJson(chemin, enregistrements) {
  const contenu = JSON.stringify(enregistrements, null, 2); // JSON.stringify transform: les données JavaScript en texte.
  await writeFile(chemin, contenu, 'utf8'); // Écrit le texte dans le fichier.
}
