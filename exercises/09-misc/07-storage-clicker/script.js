/* becode/javascript
 *
 * /09-misc/07-storage-clicker/script.js - 9.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    let count = 0;  // initialise le compteur à 0


    if (localStorage.getItem("increment")) {  //// récupère la valeur du compteur dans le localStorage s'il existe, sinon valeur 0
        count = localStorage.getItem("increment");
    }


    function updateCount() {        // met à jour l'affichage du compteur
        document.getElementById("target").innerHTML = count;
    }

    function incrementCount() {
        count++;                    // incrémente le compteur 
        updateCount();              // et met à jour l'affichage du compteur
        localStorage.setItem("increment", count); //// enregistre la nouvelle valeur du compteur dans le localStorage
    }

    
    document.getElementById("increment").addEventListener("click", incrementCount);

    updateCount(); //// met à jour l'affichage du compteur au chargement de la page




/*
    document.getElementById("target").innerText = count; 

    document.getElementById("increment").addEventListener("click", () => { 
        
        document.getElementById("target").innerText = ++count;
      
        localStorage.setItem("increment",count); 

    });
    */
    
})();
