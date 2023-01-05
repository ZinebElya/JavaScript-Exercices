/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    document.getElementById("run").addEventListener("click", () => {

        const randomArray = [];
        const arrayLength = 10;
        let somme = 0

        for (let i = 0; i < arrayLength; i++) {
            randomArray.push(Math.floor(Math.random() * 100) + 1); 
            somme += randomArray[i];
          }

        console.log(randomArray)
        console.log(somme);

        document.getElementById("n-1").innerHTML = randomArray[0];
        document.getElementById("n-2").innerHTML = randomArray[1];
        document.getElementById("n-3").innerHTML = randomArray[2];
        document.getElementById("n-4").innerHTML = randomArray[3];
        document.getElementById("n-5").innerHTML = randomArray[4];
        document.getElementById("n-6").innerHTML = randomArray[5];
        document.getElementById("n-7").innerHTML = randomArray[6];
        document.getElementById("n-8").innerHTML = randomArray[7];
        document.getElementById("n-9").innerHTML = randomArray[8];
        document.getElementById("n-10").innerHTML = randomArray[9];

        document.getElementById("min").innerHTML =  Math.min.apply(null, randomArray); 
        document.getElementById("max").innerHTML =  Math.max.apply(null, randomArray);
        document.getElementById("sum").innerHTML =  somme;
        document.getElementById("average").innerHTML = somme / arrayLength;

    }); 

})();
