function toReadable(number) {
	let answer = '';
  
  if ( number === 0 ) {
  	return 'zero';
  }
  
  //last digit
  let lastDigit = number - Math.floor(number / 10)*10;
  
  switch (lastDigit) {
  	case 0:
    answer = '';
    break;
  	case 1:
    answer = 'one';
    break;
    case 2:
    answer = 'two';
    break;
    case 3:
    answer = 'three';
    break;
    case 4:
    answer = 'four';
    break;
    case 5:
    answer = 'five';
    break;
    case 6:
    answer = 'six';
    break;
    case 7:
    answer = 'seven';
    break;
    case 8:
    answer = 'eight';
    break;
    case 9:
    answer = 'nine';
    break;
  }
  if ( number < 10 ) {
  return answer;
  }
  
  
  let middleDigit = number - Math.floor(number / 100)*100;
  
  if ( middleDigit > 9 && middleDigit < 20 ) {
  switch (middleDigit) {
  	case 10:
    answer = 'ten';
    break;
  	case 11:
    answer = 'eleven';
    break;
    case 12:
    answer = 'twelve';
    break;
    case 13:
    answer = 'thirteen';
    break;
    case 14:
    answer = 'fourteen';
    break;
    case 15:
    answer = 'fifteen';
    break;
    case 16:
    answer = 'sixteen';
    break;
    case 17:
    answer = 'seventeen';
    break;
    case 18:
    answer = 'eighteen';
    break;
    case 19:
    answer = 'nineteen';
    break;
  }
  } else {
  	let answer1 = '';
  	switch ( middleDigit - lastDigit) {
    case 20:
    answer1 = 'twenty';
    break;
    case 30:
    answer1 = 'thirty';
    break;
    case 40:
    answer1 = 'forty';
    break;
    case 50:
    answer1 = 'fifty';
    break;
    case 60:
    answer1 = 'sixty';
    break;
    case 70:
    answer1 = 'seventy';
    break;
    case 80:
    answer1 = 'eighty';
    break;
    case 90:
    answer1 = 'ninety';
    break;
    }
    if ( lastDigit === 0 ) {
    	answer = answer1;
    } else {
    	answer = answer1 + ' ' + answer;
    }
  }
  if ( number < 100 ) {
  return answer;
  }
  
  let firstDigit = Math.floor(number / 100);
  
  let answer2 = '';
  switch (firstDigit) {
  	case 1:
    answer2 = 'one hundred';
    break;
    case 2:
    answer2 = 'two hundred';
    break;
    case 3:
    answer2 = 'three hundred';
    break;
    case 4:
    answer2 = 'four hundred';
    break;
    case 5:
    answer2 = 'five hundred';
    break;
    case 6:
    answer2 = 'six hundred';
    break;
    case 7:
    answer2 = 'seven hundred';
    break;
    case 8:
    answer2 = 'eight hundred';
    break;
    case 9:
    answer2 = 'nine hundred';
    break;
  }
  if ( middleDigit === 0 ) {
    	answer = answer2;
    } else {
    	answer = answer2 + ' ' + answer;
    }
  
  return answer;
}