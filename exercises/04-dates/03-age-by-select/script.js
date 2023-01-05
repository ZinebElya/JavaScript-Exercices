/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {

        let inputNaiss = new Date(document.getElementById("dob-year").value, document.getElementById("dob-month").value, document.getElementById("dob-day").value)
        
    function calculAge() {
    
        let today = new Date(); // chercher la date d'aujourd'hui
        let dateNaiss = new Date(inputNaiss); // récuperer la date de naissance introuduite 

        let age = today.getFullYear() - dateNaiss.getFullYear();
        let ageM = today.getMonth() - dateNaiss.getMonth(); // calcul des mois pour donner l'age exacte

        if (ageM < 0 || (ageM === 0 && (today.getDate() < dateNaiss.getDate()))) {
            age = age -1 ;
        }
        return age;
    }

    alert("Vous avez:" +" " + calculAge()+" "+ "ans");

    });
})();


