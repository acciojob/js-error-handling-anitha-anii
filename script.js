class OutOfRangeError extends Error {
  constructor() {
    super();
    this.name = this.constructor.name;
    this.message = 'Expression should only consist of integers and +-/* characters';
  }
}

class InvalidExprError extends Error {
  constructor() {
    super();
    this.name = this.constructor.name;
    this.message = 'Expression should not have an invalid combination of expression';
  }
}

function evalString(expression) {
  try {
    if (/(\+{2,}|\-{2,}|\*{2,}|\/{2,})/.test(expression)) {
      throw new InvalidExprError();
    }
    
    if (/^[\/*+]/.test(expression)) {
      throw new SyntaxError('Expression should not start with an invalid operator');
    }
    
    if (/[\/*+\-]$/.test(expression)) {
      throw new SyntaxError('Expression should not end with an invalid operator');
    }
    
    // Rest of your evaluation logic goes here
    
    return 'Valid expression'; // Placeholder return value for demonstration
    
  } catch (error) {
    if (error instanceof OutOfRangeError || error instanceof InvalidExprError) {
      throw error;
    } else {
      throw new OutOfRangeError();
    }
  }
}

// Example usage:
try {
  evalString('2+3'); // Valid expression
  evalString('2+3+'); // Throws SyntaxError: Expression should not end with an invalid operator
  evalString('2++3'); // Throws InvalidExprError: Expression should not have an invalid combination of expression
} catch (error) {
  console.log(error.name + ': ' + error.message);
}

   
