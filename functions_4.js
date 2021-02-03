//function hoisting

/*sayMyName()

const sayMyName = function () {
    console.log('mayk')
}
*/

//arrow function

 /*const sayMyName = () => {
    console.log('mayk')
}

sayMyName()
*/

//callback function

/*function sayMyName(name) {
    console.log(name)
}

sayMyName(
    () => {
        console.log('estou em um callback');
    }
)
*/

/*
 *function() constructor
 
 * expressão new
 * criar um novo projeto 
 * this keyword
 */
function Person(name) {
    this.name = name 
    this.walk = function() {
        return this,name +" está andando"
    }
}
const mayk = new Person("myke")
const joao = new Person("joao")
console.log(mayk.walk())
console.log(joao.walk())
