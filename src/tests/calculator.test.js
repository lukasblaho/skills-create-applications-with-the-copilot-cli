/**
 * Unit tests for calculator.js
 *
 * Covers all arithmetic operations:
 *   - Addition (add)
 *   - Subtraction (subtract)
 *   - Multiplication (multiply)
 *   - Division (divide)
 *   - Modulo (modulo)
 *   - Exponentiation (power)
 *   - Square Root (squareRoot)
 *
 * Includes edge cases: division/modulo by zero, negative square roots, negatives, decimals.
 */

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

// ─── Addition ────────────────────────────────────────────────────────────────
describe('add', () => {
  // Example from image: 2 + 3 = 5
  test('2 + 3 = 5', () => expect(add(2, 3)).toBe(5));

  test('adds two positive numbers', () => expect(add(10, 20)).toBe(30));
  test('adds a positive and a negative number', () => expect(add(10, -4)).toBe(6));
  test('adds two negative numbers', () => expect(add(-3, -7)).toBe(-10));
  test('adds zero to a number', () => expect(add(5, 0)).toBe(5));
  test('adds two zeros', () => expect(add(0, 0)).toBe(0));
  test('adds decimal numbers', () => expect(add(1.5, 2.5)).toBeCloseTo(4.0));
});

// ─── Subtraction ─────────────────────────────────────────────────────────────
describe('subtract', () => {
  // Example from image: 10 - 4 = 6
  test('10 - 4 = 6', () => expect(subtract(10, 4)).toBe(6));

  test('subtracts two positive numbers', () => expect(subtract(20, 5)).toBe(15));
  test('subtracts a larger number from a smaller one (negative result)', () =>
    expect(subtract(3, 10)).toBe(-7));
  test('subtracts a negative number (effectively adds)', () =>
    expect(subtract(5, -3)).toBe(8));
  test('subtracts zero from a number', () => expect(subtract(7, 0)).toBe(7));
  test('subtracts a number from itself', () => expect(subtract(9, 9)).toBe(0));
  test('subtracts decimal numbers', () => expect(subtract(5.5, 2.2)).toBeCloseTo(3.3));
});

// ─── Multiplication ──────────────────────────────────────────────────────────
describe('multiply', () => {
  // Example from image: 45 * 2 = 90
  test('45 * 2 = 90', () => expect(multiply(45, 2)).toBe(90));

  test('multiplies two positive numbers', () => expect(multiply(6, 7)).toBe(42));
  test('multiplies a positive and a negative number', () =>
    expect(multiply(4, -3)).toBe(-12));
  test('multiplies two negative numbers (positive result)', () =>
    expect(multiply(-5, -6)).toBe(30));
  test('multiplies by zero', () => expect(multiply(100, 0)).toBe(0));
  test('multiplies by one (identity)', () => expect(multiply(8, 1)).toBe(8));
  test('multiplies decimal numbers', () => expect(multiply(2.5, 4)).toBeCloseTo(10.0));
});

// ─── Division ────────────────────────────────────────────────────────────────
describe('divide', () => {
  // Example from image: 20 / 5 = 4
  test('20 / 5 = 4', () => expect(divide(20, 5)).toBe(4));

  test('divides two positive numbers', () => expect(divide(10, 2)).toBe(5));
  test('divides resulting in a decimal', () => expect(divide(7, 2)).toBeCloseTo(3.5));
  test('divides a negative number', () => expect(divide(-12, 3)).toBe(-4));
  test('divides two negative numbers (positive result)', () =>
    expect(divide(-15, -3)).toBe(5));
  test('divides zero by a number', () => expect(divide(0, 5)).toBe(0));
  test('divides a number by one (identity)', () => expect(divide(9, 1)).toBe(9));

  // Edge case: division by zero must throw
  test('throws an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero is not allowed.');
  });

  test('throws an error when dividing zero by zero', () => {
    expect(() => divide(0, 0)).toThrow('Division by zero is not allowed.');
  });
});

// ─── Modulo ──────────────────────────────────────────────────────────────────
describe('modulo', () => {
  // Example from image: 5 % 2 = 1
  test('5 % 2 = 1', () => expect(modulo(5, 2)).toBe(1));

  test('returns zero when a is exactly divisible by b', () => expect(modulo(10, 5)).toBe(0));
  test('returns remainder for larger dividend', () => expect(modulo(17, 4)).toBe(1));
  test('works with a negative dividend', () => expect(modulo(-7, 3)).toBe(-1));
  test('works with a negative divisor', () => expect(modulo(7, -3)).toBe(1));
  test('returns zero when dividend is zero', () => expect(modulo(0, 5)).toBe(0));
  test('works with decimal numbers', () => expect(modulo(5.5, 2)).toBeCloseTo(1.5));

  // Edge case: modulo by zero must throw
  test('throws an error when modulo by zero', () => {
    expect(() => modulo(10, 0)).toThrow('Modulo by zero is not allowed.');
  });
});

// ─── Power (Exponentiation) ──────────────────────────────────────────────────
describe('power', () => {
  // Example from image: 2 ^ 3 = 8
  test('2 ^ 3 = 8', () => expect(power(2, 3)).toBe(8));

  test('raises a number to the power of 0 (always 1)', () => expect(power(5, 0)).toBe(1));
  test('raises a number to the power of 1 (identity)', () => expect(power(7, 1)).toBe(7));
  test('raises a number to a larger exponent', () => expect(power(3, 4)).toBe(81));
  test('raises a negative base to an even exponent (positive result)', () =>
    expect(power(-2, 4)).toBe(16));
  test('raises a negative base to an odd exponent (negative result)', () =>
    expect(power(-2, 3)).toBe(-8));
  test('handles fractional exponent (square root equivalent)', () =>
    expect(power(9, 0.5)).toBeCloseTo(3));
  test('handles zero base', () => expect(power(0, 5)).toBe(0));
});

// ─── Square Root ─────────────────────────────────────────────────────────────
describe('squareRoot', () => {
  // Example from image: √16 = 4
  test('√16 = 4', () => expect(squareRoot(16)).toBe(4));

  test('√25 = 5', () => expect(squareRoot(25)).toBe(5));
  test('√0 = 0', () => expect(squareRoot(0)).toBe(0));
  test('√1 = 1', () => expect(squareRoot(1)).toBe(1));
  test('√2 returns irrational result', () => expect(squareRoot(2)).toBeCloseTo(1.41421));
  test('√9 = 3', () => expect(squareRoot(9)).toBe(3));
  test('√100 = 10', () => expect(squareRoot(100)).toBe(10));

  // Edge case: square root of a negative number must throw
  test('throws an error for square root of a negative number', () => {
    expect(() => squareRoot(-1)).toThrow('Square root of a negative number is not allowed.');
  });

  test('throws an error for square root of a large negative number', () => {
    expect(() => squareRoot(-100)).toThrow('Square root of a negative number is not allowed.');
  });
});
