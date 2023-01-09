/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    document.getElementById("run").addEventListener("click", async() => {
        let response = await fetch("http://localhost:3000/heroes");
        let heroes = await response.json();

        heroes.forEach(showHero => {
            const template = document.querySelector("template");
            const target = document.getElementById("target");
            let clon = template.content.cloneNode(true);

            clon.querySelector(".name").innerHTML = showHero.name;
            clon.querySelector(".alter-ego").innerHTML = showHero.alterEgo;
            clon.querySelector(".powers").innerHTML = showHero.abilities;
   
            target.appendChild(clon);
            
        });

    });

})();


