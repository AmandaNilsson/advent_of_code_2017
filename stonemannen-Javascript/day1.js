var number = process.argv[2];
var stDigits = (""+number).split("");
var digits = stDigits.map(Number);
var match = [];

for (var i = 0; i < digits.length; i++) {
  var x = digits[0];
  var y = digits[1];
  if(x == y){
    match[match.length] = x;
  }
  digits.push(digits.shift());

}
if (match[0] != null) {
  var sum = match.reduce(function(previousValue, currentValue){
      return currentValue + previousValue;
  });
  console.log(sum);
}else {
  console.log(0);
}
