var roman = function(number) {
  var output = []
  // if (number + 1 % 5 != 0)

  while (number === 4) {
    output.push('IV')
    number -= 4 ;
  }
  while (number >= 1) {
    output.push('I')
    number -= 1 ;
  }

  output = output.join("");
  return output;
};
