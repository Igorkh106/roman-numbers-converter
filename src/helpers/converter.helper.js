export function toRoman(input) {
  const conversionMap = {
    M: 1000,
    CM:900,
    D: 500,
    CD:400,
    C: 100,
    XC:90,
    L: 50,
    XL:40,
    X: 10,
    IX:9,
    V: 5,
    IV:4,
    I: 1
  };

  let roman ='';
  for(let i in conversionMap){
    while(input >= conversionMap[i]){
      roman += i;
      input -= conversionMap[i];
    }
  }

  return roman;
}

export function toInteger(input) {
  const conversionMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let intResult = 0;
  for (let i = 0; i < input.length; i++) {
    if (conversionMap[input[i]] < conversionMap[input[i+1]]) {
      intResult-=conversionMap[input[i]]
    }
    else {
      intResult+=conversionMap[input[i]]
    }
  }
  return intResult;
}
