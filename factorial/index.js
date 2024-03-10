const findFactorial = (num) => {
  if (num == 0 || num == 1) {
    return 1;
  } else {
    return num * findFactorial(num - 1);
  }
};

console.log("USING FUNCTION--> " + findFactorial(5));

// ================== OR =======================

const findFactorialUsingTernary = (n) => {
  const result = n == 0 || n == 1 ? 1 : n * findFactorialUsingTernary(n - 1);
  return result;
};

console.log("USING Ternary Opertor--> " + findFactorialUsingTernary(5));

// ================== OR ========================

const findFactUsingLoop = (num) => {
  let result = 1;
  if (num == 0 || num == 1) {
    result = 1;
  } else {
    for (let i = 2; i <= num; i++) {
      result = result * num[i];
    }
  }
  return result;
};

console.log("USING For LOOP--> " + findFactorialUsingTernary(5));
