function generateRandomNumber() {
  return Math.trunc(Math.random() * 8);
}

function createRandomArray() {
  let numbersCount = {};
  let resultArray = [];

  for (let i = 0; i < 16; i++) {
    let randomNumber = generateRandomNumber();
    while (randomNumber === resultArray[i - 1]) {
      randomNumber = generateRandomNumber();
    }
    while (numbersCount[randomNumber] >= 2) {
      randomNumber = generateRandomNumber();
    }

    while (resultArray.filter((num) => num === randomNumber).length >= 2) {
      randomNumber = generateRandomNumber();
    }

    resultArray.push(randomNumber);
    numbersCount[randomNumber] = (numbersCount[randomNumber] || 0) + 1;
  }

  return resultArray;
}

function createTemplData(randomArray, imagePaths) {
  const templData = [];

  for (let i = 0; i < randomArray.length; i++) {
    const id = randomArray[i];
    const position = i;
    const img = imagePaths[id];

    templData.push({ id, position, img, open: false });
  }

  return templData;
}

let randomArray = createRandomArray();

let imagePaths = [
  "./images/003-flamingo.svg",
  "./images/008-hedgehog.svg",
  "./images/016-panda%20bear.svg",
  "./images/023-rabbit.svg",
  "./images/025-fox.svg",
  "./images/036-zebra.svg",
  "./images/038-elephant.svg",
  "./images/040-hippopotamus.svg",
];

export function randomArrPicture() {
  return createTemplData(createRandomArray(), imagePaths);
}

let templData = createTemplData(randomArray, imagePaths);
export default templData;
