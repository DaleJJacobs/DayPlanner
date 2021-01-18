// 'use strict';

// $(function () {
//     console.log("doc is ready for jquery!");

//     var usTime = ["10am", "11am", "12pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm"];
//     var $schedule = $('.schedule');
//     var $scheduleDay = $('.schedule-day');
//     var $taskInput = $('.form-control');
//     var $save = $(".save")
//     const $tasks = [];

//     usTime.forEach(function (time, index) {
//         var newDay = $scheduleDay.clone();
//         newDay.find('.schedule-time').text(time);
//         var inputName = `task-${index + 1}`;
//         newDay.find("input").attr("id", inputName);
//             /* newDay.find("input").add("name") */;
//         newDay.find("input").attr("name", inputName);
//         $('.schedule').append(newDay);

//         // var task_id = $('#task').last().attr('id');
//         // var split_id = task_id.split('_');
//         // for (let i = 0; i <= usTime.length; i++) {
//         // { var index = usTime.length + 1;
//         // $(newDay).find('#task').attr("id", "task_" + length);

//         // newDay.find("#task").attr("id", "task-" + length++);
//         // newDay.find("input").add("name");
//         // newDay.find("input").attr("name", "task-" + length++);
//         // $('.schedule').append(newDay);

//     });
//     $(".complete").click(function (e) {
//         console.log('complete has been clicked');
//         // $('.form-control').css('background-color', 'blue');
//         // var parentofList = $this.parent();
//         // console.log($(this).closest(".form-control"));
//         // $(this).closest(".form-control").css('background-color', 'blue');

//         // console.log($(this).closest('ul').siblings('input'));
//         // var getFormControl = $(this).closest('ul').siblings('input').attr('id')
//         $(this).closest('ul').siblings('input').css('background-color', 'blue')
//         // console.log(getFormControl)
//     });

//     $(".working").click(function (a) {

//         console.log('working on has been clicked');

//         $(this).closest('ul').siblings('input').css('background-color', 'yellow');

//     })

//     // renderTask();
//     // function renderTask() {
//     // $save.click((f) => {
//     //     var task = $("input:selected").val();
//     // var task = document.querySelector(".form-control").value;
//     // var getTask = JSON.parse(localStorage.getItem("input"));
//     // var setTask = JSON.stringify(localStorage.setItem("input"));

//     //     localStorage.setItem("task ", JSON.stringify(task));
//     // console.log("text input has been saved");



//     $save.click((f) => {
//         f.preventDefault();
//         var input = $(f.target).closest('.dropdown-menu').next();
//         var task = input.val();
//         var key = input.attr('name');
//         console.log(task, key);
//         localStorage.setItem(key, task);
//         console.log("text input has been saved");
//         $("input").each(function () {
//             var id = $(this).attr('id');
//             var getTask = localStorage.getItem(task);
//             // $(this).val(getTask);
//         })

var htmlElem = document.querySelector('html');
var pElem = document.querySelector('p');
var imgElem = document.querySelector('img');

var bgcolorForm = document.getElementById('bgcolor');
var fontForm = document.getElementById('font');
var imageForm = document.getElementById('image');

if (!localStorage.getItem('bgcolor')) {
    populateStorage();
} else {
    setStyles();
}

function populateStorage() {
    localStorage.setItem('bgcolor', document.getElementById('bgcolor').value);
    localStorage.setItem('font', document.getElementById('font').value);
    localStorage.setItem('image', document.getElementById('image').value);

    setStyles();
}

function setStyles() {
    var currentColor = localStorage.getItem('bgcolor');
    var currentFont = localStorage.getItem('font');
    var currentImage = localStorage.getItem('image');

    document.getElementById('bgcolor').value = currentColor;
    document.getElementById('font').value = currentFont;
    document.getElementById('image').value = currentImage;

    htmlElem.style.backgroundColor = '#' + currentColor;
    pElem.style.fontFamily = currentFont;
    imgElem.setAttribute('src', currentImage);
}

// bgcolorForm.onchange = populateStorage;
// fontForm.onchange = populateStorage;
// imageForm.onchange = populateStorage;


//     });
// }






// );





























