function foo(a, b) {
  if (a === null || b === null) {
    return 0; // This line is incorrect
  }
  return a + b;
}
console.log(foo(null, 5)); // Output: 0 (incorrect, should be an error or 5)