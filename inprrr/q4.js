let pontuacoes = [70, 110, 85, 95, 120];
pontuacoes = pontuacoes.map(ponto => ponto < 100 ? ponto + 10 : ponto);
console.log(`Pontuações: ${pontuacoes}`);