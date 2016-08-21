$(document).ready(function() {
  $("form#numberEntered").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#inputNumber").val());
    $("#output").text(number1);
  });
});
