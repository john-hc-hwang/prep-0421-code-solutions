var languagesArray = ['html', 'css', 'javascript', 'react', 'node.js'];
console.log('Languages array ', languagesArray);
console.log('Array length ', languagesArray.length);

languagesArray.push('C#');
languagesArray.push('php');
console.log('Updated array ', languagesArray);

languagesArray.pop();
console.log('Last index removed ', languagesArray);

languagesArray.splice(0, 0, 'C++');
console.log('Added element to front ', languagesArray);

languagesArray.splice(0, 1);
console.log('Removed first element ', languagesArray);

var thirdElement = languagesArray[2];
console.log('3rd element in languagesArray ', thirdElement);

var arrayLength = languagesArray.length;
console.log('The final length of the array is ', arrayLength);

var lastItem = languagesArray[languagesArray.length - 1];
console.log('The last item in the array is ', lastItem);
