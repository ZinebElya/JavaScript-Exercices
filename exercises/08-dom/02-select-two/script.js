/* becode/javascript
 *
 * /08-dom/02-select-two/script.js - 8.2: sélection par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    
    document.getElementsByClassName("target")[0].innerHTML = "owned";

    //2eme manière
    
   // document.querySelector(".target").innerHTML = "owned"; 

    //3eme manière

  // document.querySelector(".target").textContent = "owned";

})();
