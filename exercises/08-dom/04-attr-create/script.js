/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    let source = document.getElementById("source");
    let urlImage = source.getAttribute("data-image");   //Récupèrer la valeur de l'attribut "data-image"
    let img = document.createElement("img");            // Créer une balise image
    img.src = urlImage ;                                // afficher la valeur récupèré

    let target = document.getElementById("target");
    target.appendChild(img);                            //Mettre la nouvelle balise image dans la balise d'id "target"
 
    source.remove();                                    //supprimer la balise source

})();
