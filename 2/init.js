const fs = require('fs');

splitOnLineBreaksAndTabs = data => {
  return data.split('\n').map(line => line.split('\t'));
};

arrValuesToInts = arr => {
  return arr.map(internalArr => internalArr.map(x => parseInt(x)));
};

mapInput = data => {
  return arrValuesToInts(splitOnLineBreaksAndTabs(data));
};

readFile = file => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (!err) {
        resolve(mapInput(data));
      }
    });
  });
};

getSumOfArray = arr => {
  return arr.reduce((total, current) => total + current);
};

getDivision = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] % arr[j] === 0) {
        return arr[i] / arr[j];
      }
    }
  }
};

calculateMaxAndMin = input => {
  readFile(input).then(matrix => {
    const checkSum = getSumOfArray(matrix.map(arr => Math.max(...arr) - Math.min(...arr)));
    console.log('first solution', checkSum);
  });
};

calculateDivisible = input => {
  readFile(input).then(matrix => {
    const checkSum = getSumOfArray(matrix.map(arr => getDivision(arr)));
    console.log('second solution', checkSum);
  });
};

calculateMaxAndMin('input.txt');
calculateDivisible('input.txt');
