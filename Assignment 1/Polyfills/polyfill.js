let arr = [1, 2, 3, 4, 5]


// Reduce PolyFill
function reducePoly(arr, cb, initial = arr[0]) {

    let acc = initial

    for (let i = 1; i < arr.length; i++) {
        acc = cb(arr[i], acc)
    }
    return acc;
}

function sum(x, acc) {
    return x + acc
}

console.log(reducePoly(arr, sum));




// Filter PolyFill
function filterPoly(arr, cb) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            newArr.push((arr[i]));
        }

    }
    return newArr
}
function square(x) {

    if (x % 2 == 0) {
        return x;
    }
}

console.log(filterPoly(arr,square));




// Map Polyfill
function mapPoly(arr, cb) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(cb(arr[i]))
    }
    return newArr
}
function square(x) {
    return x*x
}
console.log(mapPoly(arr, square));