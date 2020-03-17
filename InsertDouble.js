function InsertDouble(num1, num2, arrayList){

    //custom array 
    var array = [num1, num2];
    var z = arrayList.length;
    
    for(var x = 0, y = array.length; x < z ; x++, y++)
    { 
        
        console.log("value of x: " + x)
        console.log("value of y: " + y)
        array[y] = arrayList[x];
       

        console.log("Array After Insertion " + array)
        
    }

    return array
}

//This function's time complexity is linear O(n) where n the size of the array that is passed to the method.

module.exports.InsertDouble = InsertDouble;