let temperaturas = [25, 32, 28, 31, 29];
let resultado = [];

for (let i = 0; i < temperaturas.length; i++) {
    resultado.push(temperaturas[i] > 30 ? 'Quente' : 'Agradável');
}

console.log(`Condição de temperatura: ${resultado}`);