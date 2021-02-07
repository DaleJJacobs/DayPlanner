"use strict";

$(function () {
  // Function to display the current time and date
  function update() {
    $("#currentDay").html(moment().format("MMMM D YYYY H:mm:ss"));
  }
  setInterval(update, 1000);
  // Variables for an array and for the time of day in the input group and selecting the input group itself for cloning
  var usTime = ["10am", "11am", "12pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm"];
  var $scheduleDay = $(".schedule-day");
  // Function to clone the input group and increment a new id and name for each element and add the time of day
  usTime.forEach(function (time, index) {
    var newDay = $scheduleDay.clone();
    newDay.find(".schedule-time").text(time);
    var inputID = `task-${index + 1}`;
    newDay.find("input").attr("id", inputID);
    var inputName = `name-${index + 1}`;
    newDay.find("input").attr("name", inputName);
    $(".schedule").append(newDay);
  });
  // Function that selects the complete button 'click' and changes the color of input box
  $(".complete").click(function (e) {
    $(this).closest("ul").siblings("input").css({
      "background-color": "#f6f0c4",
      "background-image": "linear-gradient(315deg, #f6f0c4 0%, #d99ec9 74%)",
    });
  });

  $(".working").click(function (g) {
    console.log("working on has been clicked");
    var workingVar = $(this).closest("ul").siblings("input").css({
      "background-color": "#f2cf07",
      "background-image": "linear-gradient(315deg, #f2cf07 0%, #55d284 74%)",
    });
    console.log(workingVar);
  });

  $(".save").click((f) => {
    f.preventDefault();
    console.log(f.target);
    console.log("this is ", $(this));
    var input = $(f.target).closest(".dropdown-menu").next();
    var key = input.attr("id");
    var task = input.val();
    var workingStyle = input.css("background-color");
    var workingImage = input.css("background-image");
    var elementInfo = { input: task, color: workingStyle, image: workingImage };
    localStorage.setItem(key, JSON.stringify(elementInfo));
    console.log(workingStyle, workingImage, elementInfo);
  });

  $("input").each(function () {
    console.log("What is ", $(this));
    var taskID = $(this).attr("id");
    console.log(taskID);
    // var id = $(this).attr('id');
    var getValue = JSON.parse(localStorage.getItem(taskID));
    console.log(getValue ? getValue["input"] : "does not work"); //getValue.input
    document.getElementById(taskID).value = getValue ? getValue.input : "";
    document.getElementById(taskID).style.backgroundColor = getValue
      ? getValue.color
      : "white";
    document.getElementById(taskID).style.backgroundImage = getValue
      ? getValue.image
      : "white";
  });
  $(".btn-danger").click(() => {
    localStorage.clear();
    location.reload();
  });
});
