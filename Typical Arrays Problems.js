function min(...args) {
    
    if ( args[0] === undefined ) {
        return 0;
      }
    if ( args[0].length === 0 ) {
        return 0;
    }
        
    let tempMin = args[0];
    
    for ( let i = 1; i < args.length; i++) {
        if ( args[i] < tempMin ) {
            tempMin = args[i];
        }
    }
      
    return tempMin;
    //Of course I know Math.min =) 
}
    
function max(...args) {
        
    if ( args[0] === undefined ) {
        return 0;
    }
    if ( args[0].length === 0 ) {
        return 0;
    }
      
    let tempMax = args[0];
      
    for ( let i = 1; i < args.length; i++) {
        if ( args[i] > tempMax ) {
            tempMax = args[i];
        }
    }
      
    return tempMax;
      //Of course I know Math.max =)
}
    
function avg(...args) {
        
    if ( args[0] === undefined ) {
        return 0;
    }
    if ( args[0].length === 0 ) {
        return 0;
    }
    
    let sum = 0;
    for ( let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    
    return sum / args.length;
}