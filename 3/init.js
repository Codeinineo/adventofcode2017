const input = 312051;

getRingNumber = input => {
  let ringNumber = Math.ceil(Math.sqrt(input));

  if (ringNumber % 2 === 0) {
    ringNumber++;
  }

  return ringNumber;
};

createArray = (start, end) => {
  let arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }

  return arr;
};

sliceArrayInEqualPieces = (arr, number) => {
  let matrix = [];
  for (let i = 0; i < 4; i++) {
    start = 0 + i * number;
    matrix.push(arr.slice(start, start + number));
  }

  return matrix;
};

getArrayWithInput = (matrix, input) => {
  const filtered = matrix.filter(arr => arr.indexOf(input) > -1);
  return filtered[0];
};

calculate = input => {
  const ringNumber = getRingNumber(input);
  const startingValue = Math.pow(ringNumber - 2, 2) + 1;
  const endingValue = Math.pow(ringNumber, 2);
  const arr = createArray(startingValue, endingValue);
  const matrix = sliceArrayInEqualPieces(arr, ringNumber - 1);
  let subArr = getArrayWithInput(matrix, input);
  subArr.unshift('placeholder');

  const distanceToCenterOfArray = Math.floor(Math.abs(subArr.length / 2 - subArr.indexOf(input)));
  const distanceToCenterOfPuzzle = Math.floor(ringNumber / 2);

  return distanceToCenterOfArray + distanceToCenterOfPuzzle;
};

console.log(calculate(input));
