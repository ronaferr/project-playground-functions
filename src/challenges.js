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
  } for (let valors of numbers) {
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
function encode(string) {
  // seu código aqui
  let splits = string.split('');
  for (let i = 0; i < splits.length; i += 1) {
    if (splits[i] === 'a') {
      splits[i] = 1;
    } else if (splits[i] === 'e') {
      splits[i] = 2;
    } else if (splits[i] === 'i') {
      splits[i] = 3;
    } else if (splits[i] === 'o') {
      splits[i] = 4;
    } else if (splits[i] === 'u') {
      splits[i] = 5;
    }
  }
     return splits.join('');
}

function decode(string) {
  // seu código aqui
  let splits = string.split('');
  for (let i = 0; i < splits.length; i += 1) {
    if (splits[i] === '1') {
      splits[i] = 'a';
    } else if (splits[i] === '2') {
      splits[i] = 'e';
    } else if (splits[i] === '3') {
      splits[i] = 'i';
    } else if (splits[i] === '4') {
      splits[i] = 'o';
    } else if (splits[i] === '5') {
      splits[i] = 'u';
    }
  }
    return splits.join('');
}

// Desafio 10
function techList(technologies, name) {
  // seu código aqui
  let sorts = technologies.sort();
  let infos = [];
  for (let techs of sorts) {
    infos.push({ tech: techs, name: name });
  }
  if (infos.length === 0) {
    return 'Vazio!';
  } else {
    return infos;
  }
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
