// Create the test input array
//////////////////////////////////////////////////////////////////////////////////
var testInputs = []
// Create an input class with a randomized integer value
function inputObj (value){
	this.name = 'Vivek T.',
	this.value = value !== undefined ? value : Math.floor(Math.random() * 10)
};
// Run a loop to create an array of input objects 
var createTestInput = function () {
	for (var i = 0; i < 10000000; i++) {
		testInputs[i] = new inputObj();
	}
	return testInputs;
};
//////////////////////////////////////////////////////////////////////////////////
createTestInput();

// Algorithm to sort an array of objects by its 'value' prop
//////////////////////////////////////////////////////////////////////////////////
var countArray = [];
var sortedResult = [];
var resultIdx = 0;

var sortByCounts = function (input) {
	// Initialize all occurrences of the integer value to 0
	for(var i=0; i < input.length; i++){
		countArray[i] = 0;
	}
	// First create an array to keep track of the frequency of each integer value
	// from 0 to 1023 using the array index to represent the value.
	for(var j=0; j < input.length; j++) {
		countArray[input[j].value] += 1;
	}

	for(var k=0; k < countArray.length; k++) {
		var count = countArray[k];
		
		// Add the number of times this integer occurs (count) into the result
		for(var l=0; l < count; l++) {
			
			// Since we don't care about the string value, we can just create a new array of
			// objects with the corresponding integer value
			sortedResult[resultIdx] = new inputObj(k);
			resultIdx++;
		}
	}
	// Although we use a nested loop, we only iterate through each unique number and then again by
	// its frequency. Because of this split, we end up with the same length in our sorted array as the
	// number of inputs making it O(n) time complexity.

	return sortedResult;
};

//////////////////////////////////////////////////////////////////////////////////
sortByCounts(testInputs);
