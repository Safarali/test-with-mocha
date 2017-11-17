let add = (a, b) => {
    return a + b;
}

let asyncAdd = (a, b, cb) => {
    setTimeout(() => {
        cb(a + b);
    }, 1000)
}



let square = a => a * a;

let asyncSquare = (a, cb) => {
    setTimeout(() => {
        cb(a * a)
    }, 1000);
}

module.exports = {
    add,
    square,
    asyncAdd,
    asyncSquare
}
