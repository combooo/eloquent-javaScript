function min(a, b) {
    return a < b ? a : b;
}

function isEven(numb) {
    if (numb == 0) return true;
    if (numb == 1) return false;
    if (numb < 0) return isEven(0 - numb);
    return isEven(numb - 2);
}

function countBs(str) {
    return countChar(str, 'B');
}

function countChar(str, char) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if(str[i] === char) {
            counter++;
        }
    }
    return counter;
}