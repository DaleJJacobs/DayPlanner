'use strict';

$(function () {
    console.log("doc is ready for jquery!");

    let DateTime = luxon.DateTime;
    let today = DateTime.local();
    let luxonOutput = document.getElementById('currentDay');
    luxonOutput.textContent = today.toLocaleString(DateTime.DATETIME_HUGE_WITH_SECONDS);

    //     static get DATETIME_MED_WITH_WEEKDAY() {
    //     return Formats.DATETIME_MED_WITH_WEEKDAY;

    //     static get DATETIME_HUGE() {
    //         return Formats.DATETIME_HUGE;
    //       }
    // }

    // var dt = luxon.DateTime;
    // let luxonOutput = document.getElementById('currentDay');
    // luxonOutput.textContent = JSON.stringify(dt.toLocaleString(DateTime.DATETIME_MED));
    // luxonOutput.textContent = luxon.DateTime.DATETIME_MED;
    // luxonOutput.textContent = dt.toLocaleString(DateTime.DATETIME_MED);

    // document.addEventListener("DOMContentLoaded", function () {
    //     document.getElementById("input") = store;
    //     document.getElementById("input").onload = getValue();
    // });

    var usTime = ["10am", "11am", "12pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm"];
    // var $schedule = $('.schedule');
    var $scheduleDay = $('.schedule-day');
    // var $taskInput = $('.form-control');
    // var $save = $(".save");
    // const $tasks = [];

    usTime.forEach(function (time, index) {
        var newDay = $scheduleDay.clone();
        newDay.find('.schedule-time').text(time);
        var inputName = `task-${index + 1}`;
        newDay.find("input").attr("id", inputName);
        // newDay.find("input").attr("name", inputName);
        $('.schedule').append(newDay);
    });

    $(".complete").click(function (e) {
        console.log('complete has been clicked');
        $(this).closest('ul').siblings('input').css('background-color', 'blue')
    });

    $(".working").click(function (index) {
        console.log('working on has been clicked');
        var workingVar = $(this).closest('ul').siblings('input').css('background-color', 'yellow');
        console.log(workingVar);
        var workingID = $('form-control').find("input").attr("id");
        localStorage.setItem(workingID, 'yellow');
        // var workingGet = localStorage.getItem(id);
        // document.getElementById(workingVar).value = workingGet;
    })

    $(".save").click((f) => {
        f.preventDefault();
        // f.stopPropagation();
        console.log(f.target);
        console.log("this is ", $(this));
        var input = $(f.target).closest('.dropdown-menu').next();
        var task = input.val();
        var key = input.attr('id');
        console.log(task, key);
        localStorage.setItem(key, task);
        console.log("text input has been saved");



    });

    $("input").each(function () {
        console.log("What is ", $(this));
        var taskID = $(this).attr('id');
        console.log(taskID);
        // var id = $(this).attr('id');
        var getValue = localStorage.getItem(taskID);
        console.log(getValue);
        document.getElementById(taskID).value = getValue;
        // if (getValue != null) {
        //     // $(this).value = getValue
        //     document.getElementById(taskID).value = getValue;
        // }

    })

    // $(document).click((f) => {
    //     f.preventDefault();
    //     console.log(f.target);
    //     // if (f.target.matches('.savebtn')) {
    //     // console.log("You clicked me!", this);
    //     var input = $(f.target).closest('.dropdown-menu').next();
    // var input = $("input")
    // var input = $(f.target).closest('.savebtn').next();
    // var task = input.val();
    // var key = input.attr('name');
    // console.log(key, task);
    // localStorage.setItem(key, task);
    // console.log("text input has been saved");
    // $("input").each(function () {
    //     var id = $(this).attr('id');
    //     var getTask = localStorage.getItem(task);
    // $(input).val(getTask);




    // document.getElementById('buttons')
    // .addEventListener('click', event => { // Step 2
    //   if (event.target.className === 'buttonClass') { // Step 3
    //     console.log('Click!');
    //   }
    // });


})
        // }
        // })

