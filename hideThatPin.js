function hideThatPin(n) {
  const dic = {
      1: "pop",
      10: "double rip",
      100: "hide your mints",
      1000: "fall"
  };

  let s = "";
  while (n >= 1) {
      s = (n % 2) + s;
      n = Math.floor(n / 2);
  }

  const bin_number = parseInt(s);

  const l = [];
  let i = 0;

  let tempBinNumber = bin_number;
  while (tempBinNumber > 0) {
      const x = tempBinNumber % 10;
      const v = x * Math.pow(10, i);
      i++;

      tempBinNumber = Math.floor(tempBinNumber / 10);
      if (v !== 0) {
          l.push(v);
      } else {
          continue;
      }
  }

  const final = [];
  for (const x of l) {
      if (x === 10000) {
          final.reverse();
      } else {
          final.push(dic[x]);
      }
  }

  return final;
}

console.log(hideThatPin(19))
