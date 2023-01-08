/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    let inputPass = document.getElementById("pass-one");
    let validity = document.getElementById("validity");

    inputPass.addEventListener("input",() => {

        let nombreCaractere = value.length >= 8;
        let nombreChiffre = /\d/.test(value) && /\d/.test(value.replace(/\d/, ''));

        if (nombreCaractere && nombreChiffre) {
            alert("ok");
        }
    });

})();
