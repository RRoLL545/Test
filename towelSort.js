function towelSort(matrix) {
	//matrix to array
    let newArr = [];
    for (let i = 0; i < matrix.length; i++) {
  	    newArr = newArr.concat(matrix[i]);    
    }
    
    //sort
    return newArr.sort();
}