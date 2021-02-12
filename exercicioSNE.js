// transformar notas escolares 

/* crie im algoritimo que transforme as notas do sistema numerico para sistema de nontas em caracteres tipo A B C

- 90 para cima - A
- entre 80 - 89 - B
- entre 70 - 79 - C
- entre 60 - 69 - D
- menor que 60 - F
*/

let nota = 15

if (nota >= 90) {
    console.log('Nota = A')
}else if (nota <= 89 && nota >= 80) {
    console.log('Nota = B')
}else if (nota <= 79 && nota >= 70) {
    console.log('Nota = C')
}else if (nota <= 69 && nota >= 60) {
    console.log('Nota = D')
}else if (nota < 60 && nota >= 0) {
    console.log('Nota = E')
}

console.log(nota)
