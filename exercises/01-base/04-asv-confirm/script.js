/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let age = prompt("Votre age?");
    let sexe = prompt("Votre sexe?");
    let ville = prompt("Votre ville");

    let info = confirm(age +","+ sexe +","+ ville);


   while (info === false) {
    let age = prompt("Votre age?");
    let sexe = prompt("Votre sexe?");
    let ville = prompt("Votre ville");
    let info = confirm(age +","+ sexe +","+ ville);
     if (info === true) {
        break; 
     }
   }


})();
