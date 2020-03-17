function ReturnObject(number, array){


    index = number - 1;

    if (number <= array.length)
    {

    return array[index]

    };
}


//The time complexity for this function is Constant O(1)
module.exports.ReturnObject = ReturnObject;