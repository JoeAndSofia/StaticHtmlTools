/**
 * Created by imaginato on 20-2-20.
 */
const getDateUpper = (year, month) => {
  if ([1,3,5,7,8,10,12].indexOf(month) !== -1) {
    return 31;
  } else if ([4,6,9,11].indexOf(month) !== -1) {
    return 30;
  } else if (month === 2) {
    return (year % 4 === 0 && year % 100 !== 0) ? 29 : 28;
  }
};


const a = 'Green Pramuka Square';
const b = 'Green Pramuka Square';
const compare = (a, b) => {
  for(let i=0; i<a.length; i++) {
    if(a[i] !== b[i]) {
      console.log(i, a[i], a.charCodeAt(i), b[i], b.charCodeAt(i));
    }
  }
};

const slackStr = 'Green Pramuka Square';
const dbStr = 'Green Pramuka Square';
const originStr = 'Green Pramuka Square';

compare(slackStr, originStr);

console.log('Green Pramuka Square'.charCodeAt(13));