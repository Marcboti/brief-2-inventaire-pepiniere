import { pathToFileURL } from 'node:url';
import { demander, ouvrirSaisie, fermerSaisie } from './src/saisie.js';

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
    async function tester() {
        ouvrirSaisie();

        const reponse = await demander('Tape le chiffre 2 :');

        console.log(`Reponse récupérée :`, reponse);

        fermerSaisie();
    }

    tester();
}