import Validator from '../app';

const person1 = new Validator('Claudia');
const person2 = new Validator('Claudia_47prprpr');
const person3 = new Validator('Claudia-47prprpr');
const person4 = new Validator('Claudia_47');
const person5 = new Validator('__Claudia');
const person6 = new Validator('Claudia-');
const person7 = new Validator('Cla%}}dia');
const person8 = new Validator('24Claudia');
const person9 = new Validator('Iam2489Claudia');

test('Should return true when a-zA-Z, 0-9, -, _ used only', () => {
  expect(person1.validateUsername()).toBe(true);
});

test('Should return true when a-zA-Z, 0-9, -, _ used only', () => {
  expect(person2.validateUsername()).toBe(true);
});

test('Should return true when a-zA-Z, 0-9, -, _ used only', () => {
  expect(person3.validateUsername()).toBe(true);
});

test('Should return false when not only a-zA-Z, 0-9, -, _ used', () => {
  expect(person7.validateUsername()).toBe(false);
});

test('Should return false when used number or any symbol in start position of the name', () => {
  expect(person5.validateUsername()).toBe(false);
});

test('Should return false when used number or any symbol in start position of the name', () => {
  expect(person8.validateUsername()).toBe(false);
});

test('Should return false when used number or any symbol in the end of the name', () => {
  expect(person4.validateUsername()).toBe(false);
});

test('Should return false when used number or any symbol in the end of the name', () => {
  expect(person6.validateUsername()).toBe(false);
});

test('Should not use more than 3 numbers in a row', () => {
  expect(person9.validateUsername()).toBe(false);
});
