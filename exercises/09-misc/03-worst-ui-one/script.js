/* becode/javascript
 *
 * /09-misc/03-worst-ui-one/script.js - 9.3: la pire interface (1) : phone slider
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    const target = document.getElementById("target");

    /*Lorsque l'utilisateur modifie la valeur du curseur du "slider", 
    l'événement "input" est déclenché et la fonction est exécutée.*/

    document.getElementById("slider").addEventListener("input", event => {
        target.innerText = `+${event.currentTarget.value}`;             //currentTarget renvoie l'élément dont event listeners ont déclenché l'événement.
    });

    /*Cette fonction utilise la propriété "innerText" de l'élément targrt pour mettre à jour son contenu 
    avec la valeur actuelle du "slider", préfixée par un "+".*/
})();
