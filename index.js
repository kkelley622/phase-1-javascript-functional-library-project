// iterates over the collection of elements, passing each element in turn
// to the callback function. Returns the original, unmodified, collection.

function myEach(collection, callback) {
    for (let accessor in collection) {
        callback(collection[accessor]) 
    }

    return collection;
}

// produces a new array of values by mapping each value in collection 
// through a tranformation function, callback. Return the new array 
// without modifying the original

function myMap(collection, callback) {
    let modifiedArray = []


    for (let accessor in collection) {
        modifiedArray.push(callback(collection[accessor])) 
    }

    return modifiedArray;
}

// Iterates through a collection of values and boils it down into a single
// value. acc (short for accumulator) starts at the value thats passed in
// as an argument, and with each successive step is updated to the return
// value of the callback. If a start value is not passed to myReduce,
// the first value in the collection should be used as the start value

// The callback is passed three arguments: the current value of acc, the
// current element/value in our iteration, and a reference to the entire
// collection.

function myReduce(collection, callback, acc) {
    let copy = Object.values(collection)
    // let callback = Object.values();
    acc = acc || copy.shift();
    for (let accessor in copy) {
       acc = callback(acc, copy[accessor], copy) 
    }
    console.log("my reduce value", copy)
    return acc;
}

// Looks through each value in the collection, returning the first one
// that passes a truth test (predicate) or undefined if no value passes
// the test. The function should return as soon as it finds an acceptable
// element without traversing the rest of the collection

function myFind(collection, callback) {
    for (let accessor in collection) {
        let element = collection[accessor];
        if(callback(element)) {
            return element;
        }
    }

}

// Looks through each value in the collection, returning an array of all
// the values that pass a truth test (predicate). If no matching values
// are found, it should return an empty array.

function myFilter(collection, callback) {
    let selectedArray = [];
    for (let accessor in collection) {
        let element = collection[accessor];
        if(callback(element)) {
            selectedArray.push(element);
        }
    }
    return selectedArray;
}

// return the number of values in collection

function mySize(collection) {
    return Object.keys(collection).length;
}

// returns the first element of an array. Passing n will return the first
// elements of an array

function myFirst(collection, n = 1) {
    let count = 1;
    let array = [];

    for (let accessor in collection) {
        if(count <= n) {
            array.push(collection[accessor])
            count ++
        }
    }

    return array.length > 1 ? array : array[0];
}

// returns the last element of an array. Passing n will return the last n
// elements of the array

function myLast(collection, n =1) {
    let startingIndex = collection.length - n;
    return n > 1 ? collection.slice(startingIndex, collection.length) : collection[startingIndex];
}

// retrieve all the names of the object's enumerable properties

function myKeys(object) {
    return Object.keys(object);
}

// return all of the values of the objects's properties

function myValues(object) {
    return Object.values(object);
}