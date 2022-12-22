const isUppercase = (char) => {
    console.log((65 <= char.charCodeAt(0)) && (char.charCodeAt(0) <= 90));
    if ((65 <= char.charCodeAt(0)) && (char.charCodeAt(0) <= 90)) {
        return true;
    }
    return false;
}

const isLowercase = (char) => {
    if ((97 <= char.charCodeAt(0)) && (char.charCodeAt(0) <= 122)) {
        return true;
    }
    return false;
}

const translateUppercase = (char) => {
    const charCode = char.charCodeAt(0);
    let newCode = charCode + 1;
    if (newCode === 91) {
        return 'A';
    }
    return String.fromCharCode(newCode);
}

const translateLowercase = (char) => {
    const charCode = char.charCodeAt(0);
    let newCode = charCode + 1;
    if (newCode === 123) {
        return 'a'
    }
    return String.fromCharCode(newCode);
}

export const caesarCipher = (str) => {
    let newStr = "";
    let char = "";
    for (let i = 0; i < str.length; i++) {
        char = str[i].charAt();
        if (isUppercase(char)) {
            newStr += translateUppercase(char);
        } else if (isLowercase(char)) {
            newStr +=  translateLowercase(char);
        } else {
            newStr += char;
        }
    }
    return newStr;
}
