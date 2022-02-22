// 問題①
const arr = [2, 4, 7, 5, 4, 3, 8];

const new_arr = arr.filter((val, i, array) => {
  console.log(array.indexOf(val), i);
	return (array.indexOf(val) === i);
});

console.log(new_arr);


// 問題②
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}

const checkYearOne = 2020;
const checkYearTwo = 2021;

if(isLeapYear(checkYearOne)) {
  console.log(checkYearOne + '年はうるう年です');
} else {
  console.log(checkYearOne + '年はうるう年ではありません');
}

if(isLeapYear(checkYearTwo)) {
  console.log(checkYearTwo + '年はうるう年です');
} else {
  console.log(checkYearTwo + '年はうるう年ではありません');
}