
// Encoding Function
function encodeString(input) {
  let encoded = '';
  let count = 1;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1]) {
      count++;
    } else {
      encoded += count + input[i];
      count = 1;
    }
  }
  return encoded;
}
let str = 'AAAAAAAAAAABWWWWWWWWWWWBB';
console.log(encodeString(str));
// Decoding Function
function decodeString(encodedStr) {
  let decoded = '';
  let count = '';

  for (let char of encodedStr) {
    if (Number.isNaN(Number(char))) {
      decoded += char.repeat(parseInt(count) || 1);
      count = '';
    } else {
      count += char;
    }
  }

  return decoded;
}

console.log(decodeString('11A1B11W2B'));
