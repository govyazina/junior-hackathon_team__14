function generateRandomNumber() {
    return Math.trunc(Math.random() * 8);
}

function createRandomArray() {
    let numbersCount = {};
    let resultArray = [];

    for (let i = 0; i < 16; i++) {
        let randomNumber = generateRandomNumber();

        while (numbersCount[randomNumber] >= 2) {
            randomNumber = generateRandomNumber();
        }

        while (resultArray.filter(num => num === randomNumber).length >= 2) {
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

        templData.push({ id, position, img });
    }

    return templData;
}

let randomArray = createRandomArray();
console.log(randomArray);
let imagePaths = [
    '../../public/images/003-flamingo.svg',
    '../../public/images/008-hedgehog.svg',
    '../../public/images/016-panda bear.svg',
    '../../public/images/023-rabbit.svg',
    '../../public/images/025-fox.svg',
    '../../public/images/036-zebra.svg',
    '../../public/images/038-elephant.svg',
    '../../public/images/040-hippopotamus.sv',
];

let templData = createTemplData(randomArray, imagePaths);
export default templData;