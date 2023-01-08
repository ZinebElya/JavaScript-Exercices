/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    let table = document.createElement("table");
    let tbody = document.createElement("tbody");
    table.appendChild (tbody);

    function monTableau(colonne, ligne) {

        for (let i = 0; i < ligne; i++) {
            tr = document.createElement("tr");
            tbody.appendChild (tr);

            for (let i = 0; i < colonne; i++) {
                td = document.createElement("td");
                tr.appendChild (td);
                td.style.height = "30px";
                
            }
        }
    }

    document.getElementById("target").appendChild(table);

    monTableau(1,10); 
    

})();
