/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    document.getElementById("run").addEventListener("click", () => {

        const inputs = document.querySelectorAll("input");  //récupérer les valeurs des champs de formulaire
        
       for (let input of inputs){                           //"for" pour parcourir tous les champs de formulaire et vérifier leur propriété "value"
        if (input.value === "") {
            alert("Vous devez remplir tous les champs.");
            return;
        }
       }

       const hero = [];
        inputs.forEach(input => {                   // Cela parcours chaque element de inputs 
            hero.push(input.value);                 //et utilise la propriété value de chaque élément pour ajouter une nouvelle valeur au tableau hero.
        });

        const name = hero[0];
        const alterEgo = hero[1];
        const powers = hero.slice(2);
                                                    //La fonction fetch est utilisée pour envoyer une requête HTTP à l'API
        fetch("//localhost:3000/heroes", {          // le 1er argument est l'URL de l'API et le 2e argument est un objet contenant des options pour la requête.
        method: "POST",                             //  requête de type POST
        body: JSON.stringify({                      // JSON.stringify pour convertir l'objet hero en chaîne de caractères JSON.
            name,
            alterEgo,
            abilities: powers,                      //pour que les pouvoirs soient stockés sous forme d'un tableau.
        }),
        headers: { "Content-Type": "application/json" } //Les en-têtes de la requête sont définis pour indiquer que le corps de la requête est en format JSON 
        })
        .then(response => response.json())           // Le premier then utilise la méthode json pour convertir la réponse en un objet JavaScript
        .then(data => {                                 //Le second then utilise une fonction de callback pour afficher un message dans la console,
            console.log("Nouveau héro créé: ", data);   //indiquant que le nouveau héro a été créé avec les informations reçues en retour.
        })
        .catch(error => {                                   ////La méthode catch est utilisée pour gérer les erreurs de la requête.
            console.error("Erreur lors de la création du héro: ", error); //console.error indiquant qu'une erreur s'est produite lors de la création du héro.
        });

    });

})();
