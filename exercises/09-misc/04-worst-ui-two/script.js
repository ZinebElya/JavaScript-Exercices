/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    const target = document.getElementById("target");
    const buttons = Array.from(document.querySelectorAll("button"));

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            let value = parseFloat(button.innerText); //parseFloat()méthode analyse une valeur sous forme de chaîne et renvoie le premier nombre.

            value++;     //La fonction récupère la valeur actuelle du contenu du bouton, l'incrémente de 1

            if (value > parseFloat(button.getAttribute("data-max"))) {  // puis vérifie si la nouvelle valeur dépasse la valeur maximale autorisée ("data-max" du bouton).
                value = button.getAttribute("data-min");          //Si c'est le cas, la valeur est réinitialisée à la valeur minimale autorisée ("data-min" du bouton).
            }

            button.innerText = `${value}`.padStart(2, "0");  
            // la fonction met à jour le contenu du bouton avec la nouvelle valeur, en utilisant la méthode "padStart" pour ajouter un zéro devant la valeur si celle-ci a une longueur inférieure à 2.

            target.innerText = `+${buttons.map(btn => btn.innerText).join("")}`; 
            //Enfin, la fonction met à jour le contenu de target en concaténant les contenus de tous les boutons, séparés par des espaces.
        });
    });
})();
