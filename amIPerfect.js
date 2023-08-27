// Find perfect number
const findPerfect = (number) => {
  const factors = [];

  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      factors.push(i);
    }
  }
  let sum = factors.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  if (sum === number) {
    return `${number} is perfect number`;
  } else if (sum > number) {
    return `${number} is Abundant number`;
  } else {
    return `${number} is Deficient number`;
  }
};

const number = 8;

console.log(findPerfect(8));