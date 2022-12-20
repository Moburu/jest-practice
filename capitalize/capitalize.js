export const capitalize = (str) => {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (i === 0) {
            newStr += str.charAt(i).toUpperCase();
        }
        else {
            newStr += str.charAt(i);
        }
    }
    return newStr;
}
