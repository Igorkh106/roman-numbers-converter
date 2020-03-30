export function toRoman(input) {
  console.log('to roman');

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

export function toInteger(val) {
  console.log('to int');
  return val;
}
