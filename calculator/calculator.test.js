import { calculator } from "./calculator";

test('two plus three is 5', () => {
    expect(calculator.add(2, 3)).toBe(5);
});

test('five minus three is two', () => {
    expect(calculator.subtract(5, 3)).toBe(2)
});

test('four times six is twenty-four', () => {
    expect(calculator.multiply(4, 6)).toBe(24)
});

test('fifteen divided by six is two and a half', () => {
    expect(calculator.divide(15, 6)).toBe(2.5)
});
