//Dream Team
function createDreamTeam(members) {
	let teamName = '';
	for ( let i = 0; i < members.length; i++) {
  	if (typeof members[i] === 'string') {
    	teamName = teamName + members[i][0];
    }
  }

  if (teamName === '') {
    return false;
}

  teamName=teamName.toUpperCase();
  teamName=teamName.split('').sort().join('');

  
  
  return teamName;
}


//What season?
function getSeason(theDate) {

	if (theDate === undefined) {
  	return 'Unable to determine the time of year!';
  }
  
	if (Object.prototype.toString.call(theDate) !== '[object Date]') {
  	const x = Error('Wrong argument');
  	throw x;
  }
  
	let day = theDate.getDate();
  let month = theDate.getMonth();
  
  let currentDate = day + month*100;
  
  if ( (currentDate >= 1 && currentDate <= 129) || (currentDate >= 1101 && currentDate <= 1131) ) {
  	return 'winter';
  } else if ( currentDate >= 201 && currentDate <= 431 ) {
  	return 'spring';
  } else if ( currentDate >= 501 && currentDate <= 731 ) {
  	return 'summer';
  } else if ( currentDate >= 801 && currentDate <= 1030 ) {
  	return 'autmn';
  }
}

//Tower Hanoi
function calculateHanoi (diskNumber, turnsSpeed) {
	let turns = 2 ** diskNumber - 1;
  
  let seconds = Math.floor( turns / turnsSpeed * 60 * 60 );
  
  let answer ={
  	turns: turns,
    seconds: seconds
  };
  
  return answer;
}

//Transform array
function transform(arr) {
	if (Object.prototype.toString.call(arr) !== "[object Array]") {
  	const x = Error('Argument is not Array');
  	throw x;
  }
  
  let answer =[];
  let j = 0;
  
  for ( let i = 0; i < arr.length; i++) {
  	if ( typeof arr[i] === 'number' ) {
    	answer[j] = arr[i];
      j++;
    } else if (arr[i] === '--discard-next') {
    	i++;
    } else if (arr[i] === '--discard-prev') {
    	if ( i > 0 ) {
      	j--;
      }
      if ( i === arr.length - 1) {
      	answer.pop();
      }
    } else if (arr[i] === '--double-next') {
    	if ( i < arr.length - 1 ) {
      	answer[j] = arr[i+1];
      	j++;
      }
    } else if (arr[i] === '--double-prev') {
    	if ( i > 0 ) {
      	answer[j] = arr[i-1];
        j++;
      }
    }
  }
  
  return answer;
}

//Chain maker
chainMaker = {
	currentChain: '~~',
  chainLength: 0,
  
	getLength() {
    return this.chainLength;
  },
	addLink(value) {
  let toInput;
  if ( value === undefined ) {
  toInput = ' ';
  } else {
  toInput = ' ' + value + ' ';
  }
  	this.currentChain += '(' + toInput + ')~~';
    this.chainLength++;
    
    return this;
  
  },
	removeLink(position) {
  	let tempChain = this.currentChain;
    let toRemove;
    if ( position === undefined ) {
    	toRemove = '( )';
    } else {
    	toRemove = '( ' + position + ' )';
    }
    this.currentChain = this.currentChain.split(toRemove).join('').split('~~~~').join('~~');
    if ( tempChain === this.currentChain) {
    	const x = Error('Wrong position to remove');
  		throw x;
    } else {
    	this.chainLength--;
      return this;
    }
	},
	reverseChain() {
  	let tempChain = this.currentChain.split('').reverse();
    for (let i = 0; i < tempChain.length; i++ ) {
    	if ( tempChain[i] === '(' ) {
      	tempChain[i] = ')';
        continue;
      }
      if ( tempChain[i] === ')' ) {
      	tempChain[i] = '(';
        continue;
      }
    }
    this.currentChain = tempChain.join('');
  	return this;
	},
	finishChain() {
    let tempChain = this.currentChain.split('~~');
    tempChain.pop();
    tempChain.shift();
    this.currentChain = tempChain.join('~~');
	}
};

//Recursive depth calculator
function calculateDepth(arr) {
	
    if (Array.isArray(arr) === true) {
        for ( i = 0; i < arr.length; i++ ) {
          if (Array.isArray(arr[i]) === true) {
            return 1 + calculateDepth(arr[i]);
        } else {
            //return 1;
        }
      }
      //return 1;
    } else {
        return 0;
    }
    
  }
  /*
  a = calculateDepth([1, 2, 3, 4, 5]);
  b = calculateDepth(3);
  c = calculateDepth([1, 2, 3, [4, 5]]);
  console.log(c);
  */
 