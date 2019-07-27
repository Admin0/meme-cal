var is_mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

var inventory;

function load_demension(demension, unit) {
  $("<button/>", {
    "class": demension + " demension key",
    "onclick": "$('#select_area__from, #select_area__to').empty(); $.each(inventory." + demension + ", function(index, element) { load_unit(index, element) });",
    html: demension
  }).appendTo("#select_area__dementions");
}

function load_unit(id, unit) {
  // from part
  $("<button/>", {
    "class": id + " unit key",
    "title": unit.description != undefined ? unit.description : null,
    "onclick": '$("#select_area__from button").removeClass("on"); $(this).addClass("on"); $("#selected__from").text("' + id + '"); from = ' + unit.val + '; calculate();',
    html: id + "(" + unit.name + ")"
  }).appendTo("#select_area__from");

  // to part
  $("<button/>", {
    "class": id + " unit key",
    "title": unit.description != undefined ? unit.description : null,
    "onclick": '$("#select_area__to button").removeClass("on"); $(this).addClass("on"); $("#selected__to").text("' + id + '"); to = ' + unit.val + '; calculate();',
    html: id + "(" + unit.name + ")"
  }).appendTo("#select_area__to");
}

function initialize() {
  $.getJSON("index.json", function(data) {
    inventory = data;
    // console.log(inventory);
    $.each(data, function(key, val) {
      load_demension(key, val);
      // $.each(val, function(index, element) {
      //   load_unit(index, element)
      // });
    });
  });

}

$(document).ready(function() {
  initialize();
  engine();
});

$(window).on('load', function() {
  $("div#splash").fadeOut();
})
