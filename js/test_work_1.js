let arr1 = [1, 15, 7, 'exs'];
let arr2 = [1, 15, 7, 'exs2'];
let result;
function arr_analyze(array_1, array_2) {
	if (array_1.length !== array_2.length) {
		result = false;
		console.log(result);
		return false;
	}
 		for (i = 0; i < array_1.length; i++) {
 		if (array_1[i] === array_2[i]){
 			result = true
 			console.log(result);
 		} else {
  		result = false;
 		console.log(false);			
 		}
 	}
}
arr_analyze(arr1, arr2);
