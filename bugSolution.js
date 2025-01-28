function foo(a,b){
if(typeof a === 'number' && typeof b === 'number'){
  return a + b; // Numerical addition
} else {
  return String(a) + String(b); // String concatenation
}
}
console.log(foo(1,2)); // Output: 3
console.log(foo(1, "2")); // Output: 12
console.log(foo("1", 2)); // Output: 12
console.log(foo("1","2")); // Output: 12