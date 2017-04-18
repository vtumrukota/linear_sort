//////////////////////////////////////////////////////////////////////////////////
// Algorithm to sort an array of objects by its 'value' prop
//////////////////////////////////////////////////////////////////////////////////

// inputType can be either 'array' or if nothing is passed, it will become an object 
// with a name and value prop, and the sort will be on the value.
var sortByCounts = function (inputSize, inputType) {

	// Run a loop to create an array of input objects 
	var createTestInput = function (inputModel, inputSize, inputType) {
		var testInputs = [];

		for (var i = 0; i < inputSize; i++) {
			if (inputType === 'array') {
				testInputs[i] = Math.floor(Math.random() * inputSize);
			} else {
				testInputs[i] = new inputModel(undefined, inputSize);
			}
		}

		return testInputs;
	};

	// Create an input class with a randomized integer value
	function inputModel (value, inputSize){
		this.name = 'Vivek T.',
		this.value = value !== undefined ? value : Math.floor(Math.random() * inputSize)
	};

	var testInput = createTestInput(inputModel, inputSize, inputType);
	console.log('Test Input :', testInput);
	var countArray = [];
	var sortedResult = [];
	var resultIdx = 0;

	// Initialize all occurrences of the integer value to 0
	for(var i=0; i <= testInput.length; i++){
		countArray[i] = 0;
	}
	// First create an array to keep track of the frequency of each integer value
	// from 0 to 1023 using the array index to represent the value.
	for(var j=0; j < testInput.length; j++) {
		if (inputType === 'array') {
			countArray[testInput[j]] += 1;
		} else {
			countArray[testInput[j].value] += 1;
		}
	}

	for(var k=0; k < countArray.length; k++) {
		var count = countArray[k];
		
		// Add the number of times this integer occurs (count) into the result
		for(var l=0; l < count; l++) {
			
			// Since we don't care about the string value, we can just create a new array of
			// objects with the corresponding integer value
			if(inputType === 'array') {
				sortedResult[resultIdx] = k;
			} else {
				sortedResult[resultIdx] = new inputModel(k);
			}
			resultIdx++;
		}
	}
	// Although we use a nested loop, we only iterate through each unique number and then again by
	// its frequency. Because of this split, we end up with the same length in our sorted array as the
	// number of inputs making it O(n) time complexity.
	console.log('Sorted Result: ', sortedResult, 'length', sortedResult.length);
	return sortedResult;
};

//////////////////////////////////////////////////////////////////////////////////
sortByCounts(10000000, 'array');

