/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    const fontSizes = [2.1, 2.5, 3.1, 1.2, 3.8, 2.6, 2.8, 2.1, 3.2, 2.5];
    let target = document.getElementById("target"); 
    let targetText = target.innerText;
    let letters = targetText.split("");   //Divise les caractères, et split(" "): sépare les mots.

    let shift = 0;

    setInterval(() => {                                  // setInterval() répète l'exécution de la fonction en continu.
        target.innerHTML = letters
            .map((letter, i) => {                       //map()appelle une fonction une fois pour chaque élément d'un tableau
                if (++shift >= fontSizes.length) {
                    shift = 0;
                }
                return `<span style="font-size: ${
                    fontSizes[(i + shift) % fontSizes.length]
                }rem">${letter}</span>`;
            })
            .join("");                                      // join() renvoie un tableau sous forme de chaîne.
    }, 250);
    
})();
