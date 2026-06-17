const sumPositive = require('../src/index');

describe('sumPositive', () => {
  test('складывает два положительных числа', () => {
    expect(sumPositive(2, 3)).toBe(5);
  });

  test('учитывает только первое число, если второе отрицательное', () => {
    expect(sumPositive(2, -1)).toBe(2);
  });

  test('учитывает только второе число, если первое отрицательное', () => {
    expect(sumPositive(-2, 5)).toBe(5);
  });

  test('возвращает 0, если оба числа не положительные', () => {
    expect(sumPositive(-2, -5)).toBe(0);
    expect(sumPositive(0, 0)).toBe(0);
  });

  test('0 не считается положительным', () => {
    expect(sumPositive(0, 7)).toBe(7);
  });
});