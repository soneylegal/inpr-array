let despesas = [25, 40, 20, 35, 50];
let diasAcimaDe30 = 0;
for (let i = 0; i < despesas.length; i++) {
    if (despesas[i] > 30) {
        diasAcimaDe30++;
    }
}
console.log(`Número de dias com despesas acima de 30 reais: ${diasAcimaDe30}`)