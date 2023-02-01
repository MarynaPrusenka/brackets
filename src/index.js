module.exports = function check(str, bracketsConfig) { 
  let bracket = [];
  let count = 0;
  let map = {
    ')': '(',
    ']': '[',
    '}': '{',
    '|': '|',
    '2': '1',
    '7': '7',
    '8': '8',
  };
  
  for (let i = 0; i < str.length; i++) {
      if(str[i] === '(' || str[i] === '[' || str[i] === '{' || str[i] === '1' ) {
        bracket.push(str[i]);
      } else if(str[i] === '|' || str[i] === '7' || str[i] === '8') {
        count++;
        if (bracket[bracket.length - 1] === map[str[i]]) {
          bracket.pop();
        } else {
          bracket.push(str[i]);
        }
      } else if (bracket[bracket.length - 1] === map[str[i]]) {
        bracket.pop();
      } else return false
  }
  return (bracket.length || count % 2 !== 0) ? false: true;
}