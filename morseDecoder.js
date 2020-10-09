function decode(str) {
    let decoded = [];
    
    let reverseMorseCode = {
        '.-': 'a',
     '-...': 'b',
     '-.-.': 'c',
     '-..': 'd',
     '.': 'e',
     '..-.': 'f',
     '--.': 'g',
     '....': 'h',
     '..': 'i',
     '.---': 'j',
     '-.-': 'k',
     '.-..': 'l',
     '--': 'm',
     '-.': 'n',
     '---': 'o',
     '.--.': 'p',
     '--.-': 'q',
     '.-.': 'r',
     '...': 's',
     '-': 't',
     '..-': 'u',
     '...-': 'v',
     '.--': 'w',
     '-..-': 'x',
     '-.--': 'y',
     '--..': 'z',
     
     '.----': '1',
     '..---': '2',
     '...--': '3',
     '....-': '4',
     '.....': '5',
     '-....': '6',
     '--...': '7',
     '---..': '8',
     '----.': '9',
     '-----': '0'
    };
    
    let splitToWords = str.split('**********');
    
    for (let i = 0; i < splitToWords.length; i++ ) {
     let word = (splitToWords[i]).match(/.{1,10}/g);
     for ( let j = 0; j < word.length; j++ ) {
     let letter = word[j].match(/.{1,2}/g);
       for ( let k = 0; k < letter.length; k++ ) {
         switch (letter[k]) {
           case '00':
           letter[k] = '';
           break;
           case '10':
           letter[k] = '.';
           break;
           case '11':
           letter[k] = '-';
           break;
         }
       }
       letter = letter.join('');
       letter = reverseMorseCode[letter];
       word[j] = letter;
     }
     word = word.join('');
     splitToWords[i] = word;
    }
   
   decoded = splitToWords.join(' ');
    
    
    return decoded;
   }