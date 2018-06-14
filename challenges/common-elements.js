// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input

  // var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
  // var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
  // var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
  // var array4 = ['ferret',12,12,45,9,66,77,78,2000];

// your output would be [ 12, 'ferret']

// if there are no common numbers or strings return the string "Nothing in Common!"

function commonElements(array1, array2, array3, array4) {
  const uniq1 = new Set(array1);
  const uniq2 = new Set(array2);
  const uniq3 = new Set(array3);
  const uniq4 = new Set(array4);
  const result = [];
  uniq1.forEach((el) => {
    if (uniq2.has(el) && uniq3.has(el) && uniq4.has(el)) result.push(el);
  });
  return result.length === 0 ? 'Nothing in Common!' : result.reverse();
}


var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
var array4 = ['ferret',12,12,45,9,66,77,78,2000];

// const array1 = [1, 2, 3, 4];
// const array2 = [1, 2, 3];
// const array3 = [1, 2];
// const array4 = [1];

// const array1 = ['poop', 'stand'];
// const array2 = ['poop', 'standing'];
// const array3 = ['poop', 'wat'];
// const array4 = ['fred', 'poop'];
// const a = new Set(array1);
// console.log(commonElements(array1, array2, array3, array4));
module.exports = commonElements;
