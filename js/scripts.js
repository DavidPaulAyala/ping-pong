var pong = function(input) {
  var output = " ";
  for (var i = 1; i <= input; i++) {
    if (i % 15 === 0){
      output += "PingPong" + " - ";
    } else if (i % 5 === 0){
      output += "Pong" + " - ";
    } else if (i % 3 === 0) {
      output += "Ping" + " - ";
    } else {
      output += i + " - ";
    }
  }
  return output;
};



$(document).ready(function() {
  $("#input form").submit(function(event) {
    event.preventDefault();
    var countUpTo = parseInt($("input#number").val());
    output = [pong(countUpTo)]
    $("#result").text(output);
  });
});
