module.exports = function check(str, bracketsConfig) { 
// your solution
  let bracketsStack = [];
  let currentLen = str.length;
  let newLen = str.length;
  let newArr = [];
  let newStr = str;
  for (let i = 0; i < bracketsConfig.length; i++) {
    newArr.push(bracketsConfig[i][0] + bracketsConfig[i][1]);
  }
  do {
    currentLen = newLen;
    for (let i = 0; i < newArr.length; i++)
    {
      newStr = newStr.replace(newArr[i],"");
    }
    newLen = newStr.length;
  } while (newLen < currentLen);
  return (newStr.length === 0);
}