/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code 
    
    document.getElementById("run").addEventListener("click", () =>{

        let pass1 = document.getElementById("pass-one");
        let pass2 = document.getElementById("pass-two");
        
            if (pass1.value !== pass2.value) {
                pass1.classList.add("error");
                pass2.classList.add("error");
            } 

    })();
   
})();
