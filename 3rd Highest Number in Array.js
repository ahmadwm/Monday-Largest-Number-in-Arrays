//const array=[5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31,]
//array.sort()
//function byValue(a,b){
//    return a - b;
//}
//array.sort(byValue)
//console.log(array[array.length-3])

// second//
const array=[5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31,]
var a=0;
var b=0;
var c=0;
for (let i = 0; i < array.length; i++) {
    if (array[i]>a){
        a=array[i]
    } 
}
for (let i = 0; i < array.length; i++) {
    if (array[i]>b && array[i]<a){
        b=array[i]
    } 
}
for (let i = 0; i < array.length; i++) {
    if (array[i]>c && array[i]<b){
        c=array[i]
    } 
}
console.log(c)