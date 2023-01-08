/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    let target = document.getElementById("target")

    let table = document.createElement("table");
    let tbody = document.createElement ("tbody");
    table.appendChild(tbody);

    let tr = document.createElement("tr");
    let td = document.createElement("td");

    for (let x = 1; x <= 10; x++) {
        tr = document.createElement("tr");
        tbody.appendChild (tr);

        for (let y = 1; y <= 10; y++) {
            td = document.createElement("td");
            tr.appendChild (td);
            td.innerHTML= x * y;  
        }
    }

    target.appendChild(table);  

})();
