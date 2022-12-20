import { capitalize } from './capitalize.js';

test('first character is capitalized', () => {
    expect(capitalize("hello world!")).toEqual("Hello world!")
});
