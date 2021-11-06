function array_analyze(arr1, arr2) {
	if (!Array.isArray(arr1) || !Array.isArray(arr1)) {
		return null;
	}
	let result = true;

	if (arr1.length !== arr2.length) {
		result = false;
		return result;
	}

	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) {
			result = false;
			return result;
		}
	}
	return result;
}
array_1 = [1, 3, 5, 16, 'we'];
array_2 = [1, 3, 5, 16, 'wes'];
console.log(array_analyze(array_1, array_2));

function arr_filter(arr, filtered_array) {
	if (!Array.isArray(arr) || !Array.isArray(filtered_array)) {
		return null;
	}
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		result.push(arr[i]);
	}
	console.log(result);

	for (let j = 0; j < filtered_array.length; j++) {
		let filtered_element = filtered_array[j];
		result = result.filter( (result_element) => {
			return result_element !== filtered_element;
		});
		console.log(`промежуточный результат после фильтра по ${filtered_element}`);		
	}

	return result;
}
array_3 = [1, 3, 5, 3, 5, 7, 14, null, undefined, null, false,];
array_4 = [undefined, null, false,];
console.log(arr_filter(array_3, array_4), array_3);