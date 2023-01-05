/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let reponse1 = "oui";
    let reponse2 = "non";

    let question = prompt("Voulez-vous un gâteau?");

    if (question == reponse1){
        alert("Félicitations");
    }
        else {
            alert("du gâteau, ça ne se refuse pas !");
        }
    

})();
