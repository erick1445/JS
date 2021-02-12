let familia = {
    receitas: [1000, 1400, 490, 715],
    despesas: [415, 320, 120, 580, 2500]
}

function sum(array){
    let total= 0;

    for(let value of array){
        total += value
    }
    return total
}

function calculateBalance() {
    const calcularReceitas = sum(familia.receitas)
    const calcularDespesas = sum (familia.despesas)

    const total = calcularReceitas - calcularDespesas

    const itsOk = total >= 0

    let balanceText = "negativo"

    if (itsOk) {
        balanceText = "positivo"
    }

    console.log(`seu saldo é ${balanceText}:R$${total.toFixed(2)}`)

}

calculateBalance()