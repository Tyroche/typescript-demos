const obj = {
    a: 1,
    b: 2,
    c: 3
}

const obj2 = {
    c: 4,
    d: 5
}

// -----------------

const assignCopy = Object.assign({}, obj);
console.log("Assigned:", assignCopy);

const spreadCopy = { ...obj };
console.log("Spread:", spreadCopy);

// -----------------

const mergedCopy = { ...obj, ...obj2 };
console.log("Merged:", mergedCopy);

// -----------------

let { a, b, ...restObj } = mergedCopy;
console.log("Rest:", restObj);