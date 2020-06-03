function countOfAllBooleansAndStrings(arr) {
  // Insert code here;
let count=0;
for(let i=0; i < arr.length; i+=1){
	if(((typeof arr[i]) == 'string') || ((typeof arr[i]) == 'boolean'))
		count+=1;
}
return count;

}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;