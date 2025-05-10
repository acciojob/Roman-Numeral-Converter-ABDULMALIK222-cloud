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

    const specials = [
        ['CM', 900],
        ['CD', 400],
        ['XC', 90],
        ['XL', 40],
        ['IX', 9],
        ['IV', 4]
    ];

    let result = '';

    // Handle special subtractive notation first
    for (const [symbol, value] of specials) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    // Now handle the rest using the provided obj
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
// console.log(convertToRoman(36)); // Should output: XXXVI

// Do not edit below this line
module.exports = convertToRoman;
