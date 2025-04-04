const celsiusArray = [0, 20, 38];
const tempConverted = celsiusArray.map(c => ({
  celsius: c,
  fahrenheit: (c * 9 / 5) + 32
}));
console.log(tempConverted);

