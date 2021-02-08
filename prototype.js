/* 
   type conversion (typecasting) vs type coersion 

   * alteração de um tipo de dado para outro tipo

*/

//console.log(Number('9') + 5)
 
//let string = "123"
//console.log(Number(string))
//let number = 321
//console.log(String(number))


//manipulando numeros e strings

// contar quantos caracteres tem uma palavra e quantos digitos to um numero

//let word = "paralelepipedo"
//console.log(word.length)
//let number = 1234
//console.log(String(number).length)
 

//transformar um numero quebrado com 2 casas decimais e trocar ponto por virgula

//let number = 55.878454577
//console.log(number.toFixed(2).replace(".", ","));

//manipulando strings 

//transforme letra minusculas em maiusculas. faça o contrario tambem 

//let word = "programar é muito legal!"
//console.log(word.toUpperCase().toLowerCase());


//verificar se o texto contem a palavra amor (precisa escrever exatamente igual a palavra para achar)

//let phrase = "eu quero viver o amor!"
//console.log(phrase.includes("amor"));


//manipulando strings e arrays 

// separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. depois disso, transforme o array  em um texto e onde era os espaços, coloque _

//let phrase = "eu quero viver o amor!"
//let myArrey = phrase.split(" ")
//let phraseWithUnderscore = myArrey.join("_")
//console.log(phraseWithUnderscore);


//manipulando array 

// criar array com constructor

//let myArrey = new Array('a', 'b', 'c')
//console.log(myArrey);


//contar elementos array 

//console.log(["a", "b", "c"].length)

//transformar uma cadeia de caracteres em elementos de um array 

//let word = "manipulação"
//console.log(Array.from(word));


let techs = ["html", "css", "js"]

//adicionar um itme no fim
techs.push("nodejs");

//adicionar um começo
techs.unshift("sql")

//remover do fim
//techs.pop()

//remover do começo
//techs.shift()

//pegar somente alguns elementos do Array
//console.log(techs.slice(1, 3));

//remover 1 oumais itens de qualquer posição do array 
//techs.splice(index, 1)
//encontrar a posição de um elemento do array 
let index = techs.indexOf('css')
techs.splice(index, 1)
console.log(techs)