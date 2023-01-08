/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    let img = document.querySelector("img");

    let urlDataHover = img.getAttribute("data-hover");  // Récupèrer la valeur de l'attribut "data-hover"

    img.addEventListener("mouseover", ()=> {
        img.src = urlDataHover;

    })   //Créer l'évenement mouseover

    let srcOriginal = img.getAttribute("src");

    img.addEventListener("mouseout", () => {
        img.src = srcOriginal; 
    })  //Créer l'évenement mouseout, pour remettre l'image à son état original


    
})();
