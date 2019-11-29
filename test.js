const arr = [[1, 2, 3],[4, 5, 6], [7, 8, 9]];

print2DimArray();
print2DimArray2();

function print2DimArray(arr) {
    let result = '';

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        for (let j = 0; j < arr[i].length; j++) {
            result += arr[i][j] + ' ';
            //console.log(arr[i][j]);
        }
        result += '\n';
    }
}

let result = '';

console.log(result);

let print2DimArray2 = function() {
    console.log('it не works');
}



