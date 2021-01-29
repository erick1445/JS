// 1. declare uma variavel de nome weight 
//let weight 

// 2. que tipo de dado é a variavel acima 
//console.log(typeof weight)

/*
    3.declare uma variavel e atribua valores para cada um dos dados:
              * name: string 
              * age: number (integer)
              * stars: number (float) = numero quebrado
              * isSubscribed: boolean
              
 */

 //let name = 'Geraldo'
 //let age = 56
 //let stars = 7.1
 //let isSubscribed = true

 /* 
    4. a variavel student abaixo é de que tipo de dados?

    4.1 atribua a ela as mesmas propriedades do exercicio 3.

    4.2 mostre no console a seguinte mensagem:

    o nome 
    atenção, substitua <name> <age> e <weight> pelos 
    valores de cada propriedade do objeto 
*/
 let student = {
  name: "Nathan",
  age: 17,
  stars: 9.1,
  isSubscribed: true,
}

//console.log(`o ${student.name} tem ${student.age} anos com uma avaliação de ${student.stars}`)


//5. declare uma variavel do tipo array, de nome students e atribiua a ela nenhum valor, ou seja, array vazion 
//let students = []

/*
  6. teribua valor para a variavel acima, colocando dentro dela o objeto student da questão 4,
*/
students = [
    student
]
//console.log(students)
// 7. coloque no console o valor da posição 0 do array acima 
//console.log(students[0])

const jonatan = {
    name: "jhon",
    age: 15,
    stars: 9.9,
    isSubscribed: true,
}

students[1] = jonatan
console.log(students)
 