module.exports = function toReadable(number) {
   let numberToString = number.toString();

    let numberToword = {
        0: 'zero',
        1: "one",
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'hundred'
    }



    if (number < 21) return numberToword[number];
    if (number > 20 && number < 100 && numberToString[1] == 0) return numberToword[number];
    if (number > 20 && number < 100 && numberToString[1] != 0) return numberToword[numberToString[0] + 0] + ' ' + numberToword[numberToString[1]];
    if (number >= 100 && numberToString[1] == 0 && numberToString[2] == 0) return numberToword[numberToString[0]] + ' hundred';
    if (number > 100 && number < 1000 && numberToString[1] == 0) return numberToword[numberToString[0]] + ' hundred ' + numberToword[numberToString[2]];
    if (number > 100 && number < 1000 && numberToString[1] == 1) return numberToword[numberToString[0]] + ' hundred ' + numberToword[numberToString[1] + numberToString[2]];
    if (number > 100 && number < 1000 && numberToString[2] == 0) return numberToword[numberToString[0]] + ' hundred ' + numberToword[numberToString[1] + 0];
    if (number < 1000) return numberToword[numberToString[0]] + ' hundred ' + numberToword[numberToString[1] + 0] + ' ' + numberToword[numberToString[2]];

}
