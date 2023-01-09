/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    let nbRandom = Math.floor(Math.random() * 100) + 1;
    let nbEssais = 0; // compteur d'essais

    function guess() {
        nbEssais++;
        const nbSaisi = prompt("Entrez un nombre entre 1 et 100 :");
        if (nbSaisi == nbRandom) {
            alert("Félicitation, vous avez trouvé le nombre en ${nbEssais} essai(s) !");
        } else if (nbSaisi > nbRandom) {
            alert("Le nombre à trouver est plus petit.");
        } else {
            alert("Le nombre à trouver est plus grand.");
        }
}

    window.onload = guess; // appelle la fonction guess() au chargement de la page

})();
