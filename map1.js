const words=["spray","elite","present","destruction"];
const result= words.map((word) => word.length>6);
const result1=words.filter((word) => word.length>6);
console.log(result);
console.log(result1);

Array.prototype.mapReplica=function(logic){
    let outputArr = [];
    for (let i = 0; i < this.length; i++) {
        outputArr.push(logic(this[i]));
    }
    return outputArr;
}
const result2 = words.mapReplica((word) => word.length > 6);
console.log(result2);    