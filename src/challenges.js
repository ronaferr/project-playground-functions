// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let split = string.split(' ');
  return split;
}

// Desafio 4
function concatName(palavras) {
  // seu código aqui
  return `${palavras[palavras.length - 1]}, ${palavras[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pointVictory = wins * 3;
  let pointTies = ties * 1;
  let totalPoints = pointVictory + pointTies;
  return totalPoints;
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let bigNumber = numbers[0];
  let repeticoes = [];
  for (let elements of numbers) {
    if (bigNumber <= elements) {
      bigNumber = elements;
    } 
  }for (let valors of numbers) {
    if (bigNumber === valors) {
      repeticoes.push(valors);
    }
  }
    return repeticoes.length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanciaCat1 = mouse - cat2;
  let distanciaCat2 = mouse - cat1;
  if (distanciaCat2 + distanciaCat1 === 0) {
    return 'os gatos trombam e o rato foge';
  } else if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  } else if (distanciaCat2 < distanciaCat1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  // seu código aqui
  let resposta = [];
  for (let elements of numbers) {
    if (elements % 3 === 0 && elements % 5 === 0) {
      resposta.push('fizzBuzz');
    } else if (elements % 3 === 0) {
      resposta.push('fizz');
    } else if (elements % 5 === 0) {
      resposta.push('buzz');
    } else {
      resposta.push('bug!');
    }
  }
  return resposta;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
