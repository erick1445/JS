// controle de fluxo

// if...else

/*
let temperature = 36



if (temperature >=37.5) {
console.log('febre alta')
}else if(temperature < 37.5 && temperature >=37) {
console.log('febre moderada');
} else {
    console.log('saudável')
}
*/

// switch


/*
switch (expression) {
    case 'a':
        // codigo 
        console.log('a');
        break
    case 'b':
        // codigo para a expressao b
        console.log('b')    
        break
    default:
        console.log('default')
        break    
}
*/

/*
function calculate(number1, operator, number2) {
    let result

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
            default:
                console.log('não implementado')
                break        
    }

    return result
}

console.log(calculate(7, '*', 8))
*/


// throw
/*
function sayMyName(name = '') {
    if (name === '') {
        throw 'nome é obrigatório'
    }
    
    console.log('depois do erro')
}

// try...catch

try {
sayMyName()
} catch(e) {
console.log(e);
}
*/