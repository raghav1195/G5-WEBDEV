let arr=[2,3,4,5,6];
const newArr=arr.map((x)=>x*2);
console.log(newArr);

function doubleData(x){
    return x * x;
}

Array.prototype.mapReplica=function(logic){
    let outputArr = [];
    for (let i = 0; i < this.length; i++) {
        outputArr.push(logic(this[i]));
    }
    return outputArr;
}
const myProtoData=arr.mapReplica(doubleData);
console.log(myProtoData);