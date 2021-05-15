// current time variables
var todaysDate = moment().format('dddd') + ' -- ' + moment().format('MMM Do, YYYY');
var currentHour = moment().hours();

// variables for each time slot
var eight = $('#8');
var nine = $('#9');
var ten = $('#10');
var eleven = $('#11');
var twelve = $('#12');
var thirteen = $('#13');
var fourteen = $('#14');
var fifteen = $('#15');
var sixteen = $('#16');
var seventeen = $('#17');

// display day, date, and time at top of page
var timeRespone = setInterval(function() {
    var now = moment().format('h:mm:ss a');
    $('#currentDay').html( todaysDate + " -- " + now);
}, 1000);

// background colors match past = gray, present = red, or future = green
function backgroundColor() {
    $('.form-control').each(function () {
        var formHour = parseInt($(this).attr('id'));
        var curHr = parseInt(currentHour);
        if (curHr < formHour) {
            $(this).addClass('future');
        } else if (curHr > formHour) {
            $(this).addClass('past');
        } else {
            $(this).addClass('present');
        }
    });
}

// get saved data from localStorage
function getData() {
    var data8 = JSON.parse(localStorage.getItem('08:00 am'))
    eight.text(data8);
    var data9 = JSON.parse(localStorage.getItem('09:00 am'))
    nine.text(data9);
    var data10 = JSON.parse(localStorage.getItem('10:00 am'))
    ten.text(data10);
    var data11 = JSON.parse(localStorage.getItem('11:00 am'))
    eleven.text(data11);
    var data12 = JSON.parse(localStorage.getItem('12:00 pm'))
    twelve.text(data12);
    var data13 = JSON.parse(localStorage.getItem('1:00 pm'))
    thirteen.text(data13);
    var data14 = JSON.parse(localStorage.getItem('2:00 pm'))
    fourteen.text(data14);
    var data15 = JSON.parse(localStorage.getItem('3:00 pm'))
    fifteen.text(data15);
    var data16 = JSON.parse(localStorage.getItem('4:00 pm'))
    sixteen.text(data16);
    var data17 = JSON.parse(localStorage.getItem('5:00 pm'))
    seventeen.text(data17);
};

// save user input by clicking save button
$('.saveBtn').on('click', function() {
    var userInput = $(this).siblings('.form-control').val().trim();
    var timeSlot = $(this).siblings('.input-group-text').text().trim();
    localStorage.setItem(timeSlot, JSON.stringify(userInput));
});

// save user input by clicking anywhere else on page
$('.form-control').blur(function() {
    var userInput = $(this).val().trim();
    var timeSlot = $(this).siblings('.input-group-text').text().trim();
    localStorage.setItem(timeSlot, JSON.stringify(userInput));
});

// start page
getData();
backgroundColor();