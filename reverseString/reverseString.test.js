import { reverseString } from './reverseString.js'

test('the string is reversed', () => {
    expect(reverseString("Hello world!")).toBe("!dlrow olleH");
});
