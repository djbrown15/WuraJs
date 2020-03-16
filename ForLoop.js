function InsertArray(array, index, num)
{

    
    for (var x = array.length; x > index; x--) {

        console.log( 'Value of x is now: ' + x, ', loop will continue \n')
        console.log('Passed Array before copy operation by next code ' + array )  

        array[x] = array[ x-1]   
        console.log('Array after copy operation ' + array +'\n')      
              
    }
    
    array[x] = num; 

    console.log('Final Operation after index reaches: ' + index, 'and \n ' + num,' is pushed to index position ' + index, '\n')

    return  array

   
}

// This function uses Linear time complexity, steps = size of array.

module.exports.InsertArray = InsertArray;