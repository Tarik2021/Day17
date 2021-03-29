const range = {
  max: 100.0,
  min: -25.0,
  num1: 17.5,
  num2: 88.8,
  average: 45.325,
};
const middle = ({max, min}) => {
  var average = (max + min) / 2;
  return average;
};

console.log(middle(range));
module.exports = middle;
