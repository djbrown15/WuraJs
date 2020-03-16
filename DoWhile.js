
function InsertArray(array, index, number){

    var x = array.length;
    do {       
        console.log( 'Value of x is now: ' + x, ', loop will continue \n')
        console.log('Passed Array before copy operation by next code ' + array ) 
        
        array[x] = array[x-1];        
        console.log('Array after copy operation ' + array +'\n') 

        x--;
    }
    while (x > index);

    array[x] = number; 

    
    return array
}


module.exports.InsertArray = InsertArray;

