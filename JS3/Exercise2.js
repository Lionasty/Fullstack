difference = (arr1, arr2) => {
    var array = [];
    if (arr1.length > arr2.length) {
        array = arr1;
        arr1 = arr2;
        arr2 = array;
    }

    for (i in arr1) {
        for (j in arr2) {
            if (arr1[i] === arr2[j]) {
                array.push(arr1[i].toString());
                break;
            }
        }
    }
    return array;
}
console.log(difference([1, 2, 3], [100, 2, 1, 10]));