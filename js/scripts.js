var roman = function(number) {
  var output = []
  if (number > 3999) {
    alert("This program doesn't support numbers over 3999!");
  } else {
  while (number >= 1000) {
    output.push("M")
    number -= 1000;
  }

  while (number >= 900) {
    output.push("CM")
    number -= 900;
  }

  while (number >= 500) {
    output.push("D")
    number -= 500;
  }

  while (number >= 400) {
    output.push("CD")
    number -= 400;
  }

  while (number >= 100) {
    output.push("C")
    number -= 100 ;
  }

  while (number >= 90) {
    output.push("XC")
    number -= 90 ;
  }

  while (number >= 50) {
    output.push("L")
    number -= 50 ;
  }

  while (number >= 40) {
    output.push("XL")
    number -= 40 ;
  }

  while (number >= 10) {
    output.push("X")
    number -= 10 ;
  }

  while (number >= 9) {
    output.push("IX")
    number -= 9 ;
  }

  while (number >= 5) {
    output.push("V")
    number -= 5 ;
  }

  while (number >= 4) {
    output.push('IV')
    number -= 4 ;
  }

  while (number >= 1) {
    output.push('I')
    number -= 1 ;
  }
}

  output = output.join("");
  return output;
};

$(document).ready(function() {
  $("form#calculator").submit(function(event) {
    $("#result").show();
    var number = $("input#number").val();
    var result = roman(number);

    $(".result").text(result);

    event.preventDefault();

  });


});
