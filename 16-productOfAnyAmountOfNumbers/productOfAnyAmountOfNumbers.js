function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
let prod = 1;
    for (let i = 0; i < arguments.length; i++) {
        prod = prod*arguments[i];
    }
    return prod;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;