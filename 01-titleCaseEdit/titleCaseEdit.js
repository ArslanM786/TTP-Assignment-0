function titleCaseEdit(title) {
  // Insert code here;
let arr = title.split(" ");

//let result="";

for (let i = 0; i < arr.length; i += 1) {
 arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
// result+=arr[i] + " "; 
}
//result = arr.toString(); 
return arr.join(" ");

}

// Do not edit this line;
module.exports = titleCaseEdit;