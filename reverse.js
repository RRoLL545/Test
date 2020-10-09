function reverse(number) {
	
	number = parseInt(number.toString().split('').reverse().join(''));
  
  return number;
}