function calculate() {
  $("#output").val(Math.round(Number($("#from").val()) * from / to * 10000) / 10000);
}

function calculate_reverse() {
  $("#from").val(Math.round(Number($("#output").val()) * to / from * 10000) / 10000);
}

function engine() {
  $("input#from").on("keyup", function() {
    calculate();
  });
  $("input#output").on("keyup", function() {
    calculate_reverse();
  });

  $("section").on("click", function() {
    // console.log("click");
  });
  console.log("loaded");
  $("body").click(function() {
    // console.log("click");

  });
  $("#target").click(function() {
    alert("Handler for .click() called.");
  });
  $("p").click(function() {
    $(this).slideUp();
  });
}
