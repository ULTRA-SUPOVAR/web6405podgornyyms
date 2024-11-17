function isInteger(n) {
    return (n | 0) === n;
}

function even() {
    const result = [];
    for (let i = 2; i <= 20; i += 2) {
        result.push(i);
    }
    return result;
}

function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function recSumTo(n) {
    if (n === 1) return 1;
    return n + recSumTo(n - 1);
}

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

function isBinary(n) {
    if (n <= 0) return false;
    return (n & (n - 1)) === 0;
}

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function getOperationFn(initialValue, operatorFn) {
    let storedValue = initialValue;
    return function(newValue) {
        if (!operatorFn) return initialValue;
        storedValue = operatorFn(storedValue, newValue);
        return storedValue;
    };
}

function sequence(start = 0, step = 1) {
    let current = start - step;
    return function() {
        current += step;
        return current;
    };
}

function deepEqual(firstObject, secondObject) {

// Проверка на NaN значения
    if (Number.isNaN(firstObject) && Number.isNaN(secondObject)) {
        return true;
    }

    
    if (firstObject === secondObject) return true;
    
    if (typeof firstObject !== 'object' || firstObject === null ||
        typeof secondObject !== 'object' || secondObject === null) {
        return false;
    }
    
    const keys1 = Object.keys(firstObject);
    const keys2 = Object.keys(secondObject);
    
    if (keys1.length !== keys2.length) return false;
    
    for (const key of keys1) {
        if (!keys2.includes(key)) return false;
        if (!deepEqual(firstObject[key], secondObject[key])) return false;
    }
    
    return true;
}

module.exports = {
    isInteger,
    even,
    sumTo,
    recSumTo,
    factorial,
    isBinary,
    fibonacci,
    getOperationFn,
    sequence,
    deepEqual,
};