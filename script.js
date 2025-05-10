function convertToRoman(num) {
    const obj = {
        0: ['M', 1000],
        1: ['D', 500],
        2: ['C', 100],
        3: ['L', 50],
        4: ['X', 10],
        5: ['V', 5],
        6: ['I', 1]
    };

    // Special subtractive cases like 900, 400, etc.
    const specials = [
        ['CM', 900],
        ['CD', 400],
        ['XC', 90],
        ['XL', 40],
        ['IX', 9],
        ['IV', 4]
    ];

    let result = '';

    // First process subtractive notation
    for (let i = 0; i < specials.length; i++) {
        const [symbol, value] = specials[i];
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    // Then process the rest using obj
    for (let i = 0; i <= 6; i++) {
        const [symbol, value] = obj[i];
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
}

// Example test
// console.log(convertToRoman(36)); // Output: XXXVI

// Do not edit below this line
module.exports = convertToRoman;
