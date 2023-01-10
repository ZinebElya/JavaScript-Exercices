/* becode/javascript
 *
 * /11-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    let input = document.querySelector("#hero-id");

    document.getElementById("run").addEventListener("click", () => {
       
        let id = input.value ;

        if (isNaN(id)) {
            alert("Invalide id!")
            return;
        }

        fetch('http://localhost:3000/heroes/'+id,{
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        })
        .then(response => response.json())
        .then(deleteHero => {
            console.log("Héro supprimé: ", deleteHero);
        })
        .catch(error => {                                  
            console.error("Héro inconnu: ", error); 
        });
    });
})();
