/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    document.getElementById("run").addEventListener("click", () => {
 
 
        let inputYear = parseInt(document.getElementById("year").value);
        let date = new Date(inputYear+"-01"+"-01");
    
        const months = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];
        let vendredi13 = [];

        while (date.getFullYear() < inputYear+1) {
            if (date.getDay() == 5 && date.getDate() == 13) {
                vendredi13.push(months[date.getMonth()]);
            }
            date.setDate(date.getDate()+1);
        }
        alert("Vendredi 13 pour " +inputYear+ " : " + vendredi13);
      
    });  
})();
