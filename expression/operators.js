/* expressões e operadores 

- expressions 

- operators 
    binary
    unary
    ternary
*/

// new 
//  left-hand-side expreession 
//  criar um novo objeto

//let date = new Date('2020-12-01')
//console.log(date);

/*
       operadore unarios 
       typeof 
       delete
*/
/*const person = {
   name: 'Mayke',
   age: 25, 
}
delete person.age

console.log(person);
*/

//Operadores aritimeticos 

//multiplicação *
//console.log(2.4 * 3.5)

//divisao /
//console.log(12 / 4);

//soma +
//console.log(7 + 6)

//subtração - 
//console.log(328 - 60);

//resto da divisão %
//let remainder 
//remainder = 11 % 9
//console.log(remainder)

//incremento ++
//let increment = 0
//console.log(increment++)
//console.log(increment);

//decremento --
//let decrement = 0
//console.log(--decrement);

//exponencial **
//console.log(3 ** 5);


// grouping operator ()
 
//let total = (2 + 3) * 5
//console.log(total);


//operadores de comparação

//ira comparar valores e retornar um boolean como resposta a comparação 

let one = 1
let two = 2

//  ==   igual
//console.log( one == 1)// true 
//console.log( one == "1")// true

//  !=   diferente 
//console.log(one != two)// true
//console.log(one != 1)// false
//console.log(one != "1")// false

//  ===  estritamente igual
//console.log(one === "1")// false 
//console.log(one === 1 )// true

//  !==  estritamente diferente
//console.log(two !== "2")// true 
//console.log(two !== 2)// false

//  >    maior
//console.log(one > two)// false

//  >=   maior igual
//console.log(one >= 1 )// true 
//console.log(two >= 1)// true 

//  <    menor
//console.log(one < two)// true 

//  <    menor igual 
//console.log( one <= two)// true 
//console.log( two <= 1)// false


// operadores de atribuição (assignment) 
//let x



// assignment
//x = 1

// additional assignment
// x = x + 2
//x += 2

// subtraction assignment
// x = x - 1
//x -= 1

// multiplication assigniment 
// x = x * 2
//x *= 2 

// division assignment 
// x = x / 2
//x /= 2

// remainder, exponetiation
// x %= 2
// x **= 2
//console.log(x)


// operadores logicos ( logical operators)

// - 2 valores booleans,  quando verificados, resultara em verdadeiro ou falso


// let pao = false
// let queijo = true

// and && todos verdadeiros 
// console.log(pao && queijo);

// or || pelo menos 1 verdadeiro 
// console.log(pao || queijo) 

// not ! transforma false em true e true em false
//console.log(!pao);


// operador condicional (ternario)

// dependendo da condição , nos receberemos valores diferentes 

// condição entao valor 1 se nao valor 2 
// condition ? value1 : value2 

// exemplos
// cafe da manhã top 
//let pao = true
//let queijo = false 

//const niceBreakfast = pao || queijo ? 'cafe top' : 'cafe ruim'

//console.log(niceBreakfast)

// maior de 18

//let age = 21
//const canDrive = age >= 18 ? 'can drive' : "can't drive"
//console.log(canDrive);


// operador de string (string operator)

// comparision (comparação)
//console.log('a' == 'b')

// concatenation (concatenação)
// retorna a união de duas strings 
//let alpha = 'alpha'
//alpha += 'bet'
//console.log(alpha + 345);



// type conversion (typcasting) vs type coersion 

//console.log('9' + 5)


/*
    Falsy
    quando um valor é considerado false em contextos onde um booleano é obrigatorio (condicionais e loops)
    
    false
    0
    -0
    ""
    null
    undefined
    NaN
*/

//console.log(true ? 'verdadeiro' : 'falso')

/*
    Truthy
    quando um valor é considerado true em contextos onde um booleano é obrigatorio (condicionais e loops)

    true 
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    infinity
    -infinity
*/

//console.log("false" ? 'verdadeiro' : 'falso')



/*  operator precedence
      precedencia de operadores 

* grouping                  (  )
* negação e incremento      ! ++ --
* multiplicação e divisao   * /
* adição e subtração        + -
* relacional                < <= > >=c
* igualdade                 == != === !==
* and                       &&
* or                        ||
* condicional               ?:
assignment (atribuição)     = += -= *=

*/

