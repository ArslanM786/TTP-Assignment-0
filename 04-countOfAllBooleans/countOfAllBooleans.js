function countOfAllBooleans(arr) {
  // Insert code here;
let counter =0;
for(let i=0; i < arr.length; i+=1){
	if((typeof arr[i]) == 'boolean')
		counter = counter + 1;
}
return counter;

}

// Do not edit this line;
module.exports = countOfAllBooleans;