import { caesarCipher } from "./caesarCipher";

test('it shifts the given string', () => {
    expect(caesarCipher("Hello world!")).toBe("Ifmmp xpsme!")
});

test('z wraps around to a', () => {
    expect(caesarCipher('Z')).toBe('A')
});
