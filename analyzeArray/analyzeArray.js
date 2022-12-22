const averageArray = (arr) => {
    const sum = arr.reduce((accumulator, currentValue) =>
        accumulator + currentValue,
        0
    );
    const average = sum / arr.length;
    return average;
}

const minArray = (arr) => {
    let min;
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            min = arr[i];
        } else {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
    }
    return min;
}

const maxArray = (arr) => {
    let max;
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            max = arr[i];
        } else {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
    }
    return max;
}

export const analyzeArray = (arr) => {
    const arrayInfo = {
        average: averageArray(arr),
        min: minArray(arr),
        max: maxArray(arr),
        length: arr.length
    }
    return arrayInfo;
}
