//your code here
class OutOfRangeError extends Error {
  constructor() {
    super();
    this.name = "OutOfRangeError";
    this.message = "Expression should only consist of integers and +-/* characters";
  }
}

class InvalidExprError extends Error {
  constructor() {
    super();
    this.name = "InvalidExprError";
    this.message = "Expression should not have an invalid combination of expressions";
  }
}

function evalString(expression) {
  try {
    if (/[\+\-\*\/]{2,}/.test(expression)) {
      throw new InvalidExprError();
    }

    if (/^[\+\*\/]/.test(expression)) {
      throw new SyntaxError("Expression should not start with an invalid operator");
    }

    if (/[\+\-\*\/]$/.test(expression)) {
      throw new SyntaxError("Expression should not end with an invalid operator");
    }
function evalString(expression) {
  try {
    if (/[\+\-\*\/]{2,}/.test(expression)) {
      throw new InvalidExprError();
    }

    if (/^[\+\*\/]/.test(expression)) {
      throw new SyntaxError("Expression should not start with an invalid operator");
    }

    if (/[\+\-\*\/]$/.test(expression)) {
      throw new SyntaxError("Expression should not end with an invalid operator");
    }

   
    expression = expression.replace(/\s/g, "");

    
    const result = eval(expression);

    
    return result;
  } catch (error) {
    if (error instanceof OutOfRangeError || error instanceof InvalidExprError) {
      throw error;
    } else {
      throw new Error("Syntax Error: " + error.message);
    }
  }
}


    return "Valid expression";
  } catch (error) {
    if (error instanceof OutOfRangeError || error instanceof InvalidExprError) {
      throw error;
    } else {
      throw new Error("Syntax Error: " + error.message);
    }
  }
}
