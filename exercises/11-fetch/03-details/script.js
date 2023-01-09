/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    
    const target = document.getElementById("target");
    let input = document.querySelector("#hero-id");

    document.getElementById("run").addEventListener("click", () => {
       
        let id = input.value ;

        fetch('http://localhost:3000/heroes/'+id)
        .then(response => response.json())
        .then(showHero => {
            console.log(showHero)

            const template = document.querySelector("template");
            let clon = template.content.cloneNode(true);

            clon.querySelector(".name").innerHTML = showHero.name;
            clon.querySelector(".alter-ego").innerHTML = showHero.alterEgo;
            clon.querySelector(".powers").innerHTML = showHero.abilities;

            target.appendChild(clon);
        });
    });
})();   



