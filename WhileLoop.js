function InsertArray(array, index, number){

    var x = array.length;
    while (x > index)
    {
        array[x] = array[x-1];
        x--
    }

    array[x] = number;

    return 'This is your modified Array \n' + array    
    
}

module.exports.InsertArray = InsertArray;