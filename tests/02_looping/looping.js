/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
function factorial(num) {
let total = 1;
  for (let i = 1 ; i <= num ; i++) {
    total *= i ;
  }
  return total ;
}

function stringReverse(str) {
let rev = '';

  for (let i = str.length -1 ; i >= 0 ; i--){
    rev += str[i];
  }
  return rev
}

// do not use built in slice method.
function slicer(originalString, startIdx, endIdx) {

}

function addTheEvens(num) {

}

module.exports = {
  factorial, stringReverse, slicer, addTheEvens,
};
