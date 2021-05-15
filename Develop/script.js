// current time variables
var todaysDate = moment().format('dddd') + ',' + moment().format('MMM Do, YYYY');
var currentTime = moment().format('h:mm:ss a');

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

var curHr = moment().hours();

// save user input
$('.saveBtn').on('click', function() {
    var userInput = $('.form-control').val().trim();
    var time = $('.input-group-text').text().trim();
    localStorage.setItem(time, JSON.stringify(userInput));
})