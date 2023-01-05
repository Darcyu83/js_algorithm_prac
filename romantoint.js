const _1994 = "MCMXCIV";
const _58 = "LVIII";

function romanToInt(romanStr) {
  const romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < romanStr.length; i++) {
    const currNum = romans[romanStr[i]];
    const nextNum = romans[romanStr[i + 1]];

    if (nextNum && currNum < nextNum) {
      result -= currNum;
    } else {
      result += currNum;
    }
  }

  console.log("input=== ", romanStr, "result=== ", result);
  return result;
}

romanToInt(_1994);
romanToInt(_58);
