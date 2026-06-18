#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   add        - Addition:         adds two numbers together (a + b)
 *   subtract   - Subtraction:      subtracts the second number from the first (a - b)
 *   multiply   - Multiplication:   multiplies two numbers together (a × b)
 *   divide     - Division:         divides the first number by the second (a ÷ b)
 *   modulo     - Modulo:           returns the remainder of a divided by b (a % b)
 *   power      - Exponentiation:   raises base to the given exponent (base ^ exponent)
 *   squareRoot - Square Root:      returns the square root of n (√n)
 *
 * Usage:
 *   node calculator.js <operation> <number1> [number2]
 *
 * Examples:
 *   node calculator.js add 3 5          → 8
 *   node calculator.js subtract 10 4    → 6
 *   node calculator.js multiply 6 7     → 42
 *   node calculator.js divide 20 4      → 5
 *   node calculator.js modulo 10 3      → 1
 *   node calculator.js power 2 8        → 256
 *   node calculator.js squareRoot 25    → 5
 */

// Addition: returns the sum of a and b
function add(a, b) {
  return a + b;
}

// Subtraction: returns the difference of a minus b
function subtract(a, b) {
  return a - b;
}

// Multiplication: returns the product of a and b
function multiply(a, b) {
  return a * b;
}

// Division: returns a divided by b; throws an error if b is zero
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed.');
  }
  return a / b;
}

// Modulo: returns the remainder of a divided by b; throws an error if b is zero
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed.');
  }
  return a % b;
}

// Exponentiation: returns base raised to the power of exponent
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Square Root: returns the square root of n; throws an error for negative numbers
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Square root of a negative number is not allowed.');
  }
  return Math.sqrt(n);
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

// Run as CLI only when executed directly (not when required by tests)
if (require.main === module) {
  const [, , operation, arg1, arg2] = process.argv;

  // Validate that an operation and at least one number were provided
  if (!operation || arg1 === undefined) {
    console.error('Usage: node calculator.js <operation> <number1> [number2]');
    console.error('Operations: add, subtract, multiply, divide, modulo, power, squareRoot');
    process.exit(1);
  }

  const a = parseFloat(arg1);

  // Validate the first argument is a valid number
  if (isNaN(a)) {
    console.error('Error: Both arguments must be valid numbers.');
    process.exit(1);
  }

  try {
    let result;

    // squareRoot only needs one argument
    if (operation === 'squareRoot') {
      result = squareRoot(a);
    } else {
      if (arg2 === undefined) {
        console.error('Usage: node calculator.js <operation> <number1> <number2>');
        process.exit(1);
      }
      const b = parseFloat(arg2);
      if (isNaN(b)) {
        console.error('Error: Both arguments must be valid numbers.');
        process.exit(1);
      }
      switch (operation) {
        case 'add':      result = add(a, b);      break;
        case 'subtract': result = subtract(a, b); break;
        case 'multiply': result = multiply(a, b); break;
        case 'divide':   result = divide(a, b);   break;
        case 'modulo':   result = modulo(a, b);   break;
        case 'power':    result = power(a, b);    break;
        default:
          console.error(`Error: Unknown operation "${operation}".`);
          console.error('Supported operations: add, subtract, multiply, divide, modulo, power, squareRoot');
          process.exit(1);
      }
    }

    console.log(result);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}
