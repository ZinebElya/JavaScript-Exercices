/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code he

    document.getElementById("run").addEventListener("click", () =>{

        let pass1 = document.getElementById("pass-one");
        let pass2 = document.getElementById("pass-two");
       

        if (pass1.value === pass2.value) {
            alert("Mot de passe accepté");
        } else {
            pass1.style.borderColor = "red";
            pass2.style.borderColor = "red";
            alert("Les mots de passe ne sont pas identiques!");
            
        }
        
    })();
})();
