var roman = function(number) {
  var output = []

  while (number >= 1) {
    output.push('I')
    number -= 1 ;
  }

  output = output.join("");
  return output;
};
