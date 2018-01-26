function quickSort(array){
    // base case //
// check if array is empty //
    if (array.length === 0){
        return [];
    }
// make three variables: pivot, left, right //
    let pivot = array[0];
    let left = [];
    let right = [];
// loop through array starting at second index //
    for (var i = 1; i < array.length; i++){ 
        // any indexes smaller than pivot will push to left array //
        if (pivot > arr[i]){
           // push indexes into the left array // 
           left.push(array[i]);     
        }else{
           // any indexes larger than or equal to pivot will push to right array // 
           right.push(array[i]);
        }
    }
    console.log("pivot", pivot);
    console.log("left", left);
    console.log("right", right);
// concat left array with pivot, right array //
// console.log(quickSort(left).concat(pivot, quickSort(right)));
    return quickSort(left).concat(pivot, quickSort(right));
}
// return assorted indexes into new array //
console.log(quickSort(array.slice()));
