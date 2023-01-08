/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    let inputPass = document.getElementById("pass-one");
    let counter = document.getElementById("counter");

    inputPass.addEventListener("input",() => {

        counter.innerHTML = inputPass.value.length + "/10";


      if (inputPass.value.length >= 10) {
        this.onkeypress = function () {
            return false;
        };
        
      }

    });

})();
