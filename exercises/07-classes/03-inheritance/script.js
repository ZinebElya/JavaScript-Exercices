/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here

    class Dog extends Animal {
        constructor(name){
            super(name);
            this.name = name;
        }
        static greeting = "wofwof"
      }

      class Cat extends Animal {
        constructor(name){
            super(name);
            this.name = name;
        }
        static greeting = "miyaw"
      }


      document.getElementById("run").addEventListener("click", () => {

        const cat1 = new Cat("mimi");
        const dog1 = new Dog("boby");
        
        console.log(cat1.sayHello());
        console.log(dog1.sayHello());
    });


})();


const dog = new Dog('Milo');