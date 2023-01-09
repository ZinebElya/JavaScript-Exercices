/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    let target = document.getElementById("target"); 
    let letters = target.innerText.split("");             // //Séparer les lettres et créer un tableau.
    
    target.innerText = "";                                // le contenu de target est vide 

    const addcharacter = (a) => {
        target.innerHTML += letters[a];

        if (a < letters.length) {
            setTimeout(()=> {
                addcharacter(a+=1) }, Math.floor(Math.random()* 200-100)+100); 
        }
    }

    addcharacter(0);

})();
