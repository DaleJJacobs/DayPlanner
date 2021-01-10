$(function () {
    console.log("doc is ready for jquery!");

    var usTime = ["10am", "11am", "12pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm"];
    var militaryTime = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    var $schedule = $('.schedule');
    var $scheduleDay = $('.schedule-day');

    usTime.forEach(function (time) {
        var newDay = $scheduleDay.clone();
        newDay.find('.schedule-time').text(time);
        // var count = $('.form-control').length;
        // console.log("What is", count);
        // $('input.form-control:last').attr('id', count);
        $('.schedule').append(newDay);

        // var $form = $('input[id^="form-control"]');

        // var num = parseInt($form.prop("id").match(/\d+/g), 10) + 1;
        // $(newDay).find('.form-control').attr("id", "form-control");
    });
    $(".complete").click(function (e) {
        console.log('complete has been clicked');
        // $('.form-control').css('background-color', 'blue');
        // var parentofList = $this.parent();
        // console.log($(this).closest(".form-control"));
        // $(this).closest(".form-control").css('background-color', 'blue');

        // console.log($(this).closest('ul').siblings('input'));
        // var getFormControl = $(this).closest('ul').siblings('input').attr('id')
        $(this).closest('ul').siblings('input').css('background-color', 'blue')
        // console.log(getFormControl)
    });

    $(".working").click(function (a) {

        console.log('working on has been clicked');

        $(this).closest('ul').siblings('input').css('background-color', 'yellow')

    })
})







