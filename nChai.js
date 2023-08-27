function nChai(n, k, g, b) {
  let result = [];
  let pushGreen = Array(k).fill("Green")
  
  let pushBlack = Array(k).fill("Black")
  
  while (n > 0) {
      if (g > 0 && (result.length < k || result.slice(-k).every(type => type === "Black"))) {
          result = result.concat(pushGreen);
          g -= k;
          n -= k;
      } else if (b > 0 && (result.length < k || result.slice(-k).every(type => type === "Green"))) {
          result = result.concat(pushBlack);
          b -= k;
          n -= k;
      } else {
          // It's impossible to fulfill the conditions
          return [];
      }
    
  }
  
  return result;
}


// Example 1
const output1 = nChai(5, 1, 3, 2);
console.log(output1); 

const output2 = nChai(14, 2, 8, 6);
console.log(output2); 

// Example 2
const output3 = nChai(4, 3, 4, 0);
console.log(output3); // Output: []
