
/*
wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 20)

Lorem ipsum dolor
sit eu amet, elit na
magna sem amet nulla
vel purus ac ligula.

String.prototype.indexOf
String.prototype.lastIndexOf

Steps for writing a sepc:
    - Create a failing spec
    - Write minimal code to pass spec
    - Repeat

- Insert the a break in the line (\n) at the index provided by the user (ie maxLen)
- Split the string (ie line) by ' ' (ie line.split(' ')) -> have an array of words
- Loop through the array and if the max length is <= the word's length
    -> append the word to a new string and add a line break (ie \n)


*/



const wrap = (line, maxLen) => {
  let arrOfLine = line.split(' ');
  let count = 0;

  for (let i = 0; i < arrOfLine.length; i++) {
    if (maxLen < line.length) {
      return line
    }
    break;
  }

}

if (line.length <= maxLen) {
  return line;


module.exports = wrap;
