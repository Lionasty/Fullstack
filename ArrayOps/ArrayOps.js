var pos, array1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
console.log(array1);
function remove(pos, array) {
    for (var i = pos + 1; i < array.length; i++) {
        array[i - 1] = array[i];
    }
    array.length--;
    return array;
}
pos = 4;
console.log(remove(pos, array1));

var array2 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5];
console.log(array2);
for (var j = 1; j < array2.length; j++) {
    if (array2[j] === array2[j - 1]) {
        remove(j, array2);
        j--;
    }
}
console.log(array2);