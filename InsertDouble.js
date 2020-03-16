function InsertDouble(num1, num2, arrayList){

    //custom array 
    var array = [num1, num2];
    

    for(var x = 0, y = array.length; x < arrayList.length; x++, y++)
    {
        array[y+x] = arrayList[x];
    }

    return array;

}

module.exports.InsertDouble = InsertDouble;