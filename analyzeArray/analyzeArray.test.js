import { analyzeArray } from "./analyzeArray";

test('the average is correct', () => {
    expect(analyzeArray([0, 1, 2, 3, 4]).average).toBe(2)
})

test('the min is correct', () => {
    expect(analyzeArray([4, 6, 2, 1, 5]).min).toBe(1);
})

test('the max is correct', () => {
    expect(analyzeArray([4, 6, 2, 1, 5]).max).toBe(6);
})

test('the length is correct', () => {
    expect(analyzeArray([4, 6, 2, 1, 5]).length).toBe(5);
})
