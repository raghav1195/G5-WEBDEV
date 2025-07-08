const array1 = [1, 2, 3, 4, 5];

Array.prototype.reduceReplica = function (logic, initialValue) {
    let result = initialValue;
    for (let i = 0; i < this.length; i++) {
        result = logic(result, this[i]);
    }
    return result;
};

const finalAnswer = array1.reduceReplica((acc, curr) => acc + curr, 10);
console.log(finalAnswer);