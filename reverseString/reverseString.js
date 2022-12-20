export const reverseString = (str) => {
    let strReverse = "";
    for (let i = 0; i < str.length; i++) {
        strReverse += str.charAt(str.length - i - 1);
    }
    return strReverse;
}
