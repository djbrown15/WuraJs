function ReturnObject(number, array){


    index = number - 1;

    if (number <= array.length)
    {
    return array[index]
    };
}

module.exports.ReturnObject = ReturnObject;