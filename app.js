// let tag = ['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div'];
// let div = "div";
// let li = "li"
// let span = "span";
// let h3 = "h3";
// let a = "a";
//
// ////////////////////////////////
// let div_sum = 0;
// let li_sum = 0;
// let a_sum = 0;
// let span_sum = 0;
// let h3_sum = 0;
//
// for (const i of tag) {
//     if (i === div) {
//         div_sum += 1;
//     } else if (i === h3) {
//         h3_sum += 1;
//     } else if (i === a) {
//         a_sum += 1;
//     } else if (i === span) {
//         span_sum += 1;
//     } else if (i === li) {
//         li_sum =li_sum+ 1;
//     }
// }
// console.log("div = " + div_sum);
// console.log("h3 = " + h3_sum);
// console.log("a = " + a_sum);
// console.log("span = " + span_sum);
// console.log("li = " + li_sum);
//
//
// let arr = [div_sum, h3_sum, a_sum, span_sum, li_sum];
// let array = arr.sort();
// let arrRevers = array.reverse();
// console.log(arrRevers);

///////////////////////////////////////////////////////////////////////////////////////////////////

var array = ['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div'];
var arr = {};
for (var i = 0; i < array.length; i++) {
    let a = array[i];
    if (arr[a]) arr[a] += 1;
    else arr[a] = 1;
}
console.log(arr);
let arrMas = Object.values(arr);
let newArr = Object.keys(arr);

for (let i = 0; i < arrMas.length; i++) {
    newArr[i] = newArr[i] + ": " + arrMas[i];
}
let arrObj = { ...newArr };
console.log(arrObj);