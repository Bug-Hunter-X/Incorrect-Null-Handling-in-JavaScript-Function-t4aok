function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed'); // Throw an error for null values
  }
  return a + b;
}
console.log(foo(null, 5)); // Output: Error: Null values are not allowed

//Alternative Solution (Handling nulls):
function foo(a, b) {
  a = a === null ? 0 : a; // Assign 0 if null
  b = b === null ? 0 : b; // Assign 0 if null
  return a + b;
}
console.log(foo(null, 5)); // Output: 5