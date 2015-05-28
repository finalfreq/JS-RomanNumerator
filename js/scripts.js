var roman = function(number) {
  var output = []
  var ones = []
  var tens = []
  var fifties = []
  var hundreds = []
  var fivehundreds = []
  var thousands = []

  while (number >= 1000) {
    thousands.push("M")
    number -= 1000;
  }


  while (number >= 900) {
    fivehundreds.push("CM")
    number -= 900;
  }

  while (number >= 500) {
    fivehundreds.push("D")
    number -= 500;

  }

  while (number >= 400) {
    hundreds.push("CD")
    number -= 400;

  }

  while (number >= 100) {
    hundreds.push("C")
    number -= 100 ;
  }

  while (number >= 90) {
    fifties.push("XC")
    number -= 90 ;
  }

  while (number >= 50) {
    fifties.push("L")
    number -= 50 ;
  }

  while (number >= 40) {
    tens.push("XL")
    number -= 40 ;
  }

  while (number >= 10) {
    tens.push("X")
    number -= 10 ;
  }

  while (number >= 9) {
    ones.push("IX")
    number -= 9 ;
  }

  while (number >= 5) {
    ones.push("V")
    number -= 5 ;
  }
  while (number >= 4) {
    ones.push('IV')
    number -= 4 ;
  }
  while (number >= 1) {
    ones.push('I')
    number -= 1 ;
  }
  output.push(thousands.join(""), fivehundreds.join(""), hundreds.join(""), fifties.join(""), tens.join(""), ones.join(""))
  output = output.join("");
  return output;
};
