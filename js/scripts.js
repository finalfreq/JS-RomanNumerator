var roman = function(number) {
  var output = []
  var ones = []
  var tens = []
  // if (number + 1 % 5 != 0)

  while (number >= 10) {
    tens.push("X")
    number -= 10 ;
  }

  while (number === 9) {
    ones.push("IX")
    number -= 9 ;
  }

  while (number >= 5) {
    ones.push("V")
    number -= 5 ;
  }
  while (number === 4) {
    ones.push('IV')
    number -= 4 ;
  }
  while (number >= 1) {
    ones.push('I')
    number -= 1 ;
  }
  output.push(tens.join(""), ones.join(""))
  output = output.join("");
  return output;
};
