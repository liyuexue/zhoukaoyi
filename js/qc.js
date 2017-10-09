var arr = [1,3,2,4,4,3,5,7];
var brr = [];
for(var i=0;i<arr.length;i++){
    if(brr.indexOf(arr[i]) === -1){
        brr.push(arr[i])
    }
}
console.log(brr);