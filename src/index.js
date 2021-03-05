const arr = ['zero',
'one',
'two',
'three',
'four',
'five',
'six',
'seven',
'eight',
'nine',
'ten',
'eleven',
'twelve',
'thirteen',
'fourteen',
'fifteen',
'sixteen',
'seventeen',
'eighteen',
'nineteen',
'twenty',//20
'thirty',//21
'forty',//22
'fifty',//23
'sixty',//24
'seventy',//25
'eighty',//26
'ninety',//27
'hundred'//28
];

function number_1_19(n) {
    return arr[n];
}

function hundred(n) {
  if (n) {
    return arr[n] + ' ' + arr[28];
  } return '';
}

function isZero(n) {
  if (n !== 0) {
    return ' ' + arr[n];
  } return '';
}

module.exports = function toReadable (number) {

  HRN = '';
  arr2 = number.toString().split('');

  if (arr2.length > 2) {
    x100 = arr2.shift();
    HRN = hundred(x100);    
  }

  x10 = +arr2[0];
  x1 = +arr2[1]; 
  xx = x10 * 10 + x1;

  if (number < 10)  {
    HRN = number_1_19(number, 0);
  }
  else if (xx > 19) {    
    if (x10 !== 0) x10 = x10 + 18;
    HRN = HRN + isZero(x10) + isZero(x1);      
  } else if (xx !== 0){
    HRN = HRN + ' ' + number_1_19(xx);
  }    
  return HRN.trim();
 
}
