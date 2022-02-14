// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let elemento;
  let contador;
  for (let i = 0; i < array.length; i += 1) {
    elemento = array[i];
    contador = 0;
    for (let j = 0; j < array.length; j += 1) {
      if (elemento === array[j]) {
        contador++;
      }
    } if (contador > 2 || elemento < 0 || elemento > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let n = array.join('');
  let ddd = n.slice(0, 2);
  let parte1 = n.slice(2, 7);
  let parte2 = n.slice(7, 11);
  let numeroCerto = `(${ddd}) ${parte1}-${parte2}`
  return numeroCerto;
}

// Desafio 12
function triangleCheck(lineaA, lineaB, lineaC) {
  // seu código aqui
  let isTriangle = true;
  let somaBC = lineaB + lineaC;
  let somaBA = lineaB + lineaA;
  let somaAC = lineaA + lineaC;
  if (lineaA > somaBC || lineaA < Math.abs(lineaB-lineaC)) {
    isTriangle = false;
    } else if (lineaB > somaAC || lineaB < Math.abs(lineaA-lineaC)) {
      isTriangle = false;
      } else if (lineaC > somaBA || lineaC < Math.abs(lineaA-lineaB)) {
        isTriangle = false;
        }
    return isTriangle;
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
