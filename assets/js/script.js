const nineAM = $('#9AM');
const tenAM = $("#10AM");
// tenAM.value = 10;
const elevenAM = $("#11AM");
// elevenAM.value = 11;
const twelvePM = $("#12PM");
// twelvePM.value = 12;
const onePM = $("#1PM");
// onePM.value = 13;
const twoPM = $("#2PM");
// twoPM.value = 14;
const threePM = $("#3PM");
// threePM.value = 15;
const fourPM = $("#4PM");
// fourPM.value = 16;
const fivePM = $("#5PM");
// fivePM.value = 17;

// var nineAMTextInput = nineAM.text;
// var workHourArr = [9, 10, 11, 12, 13, 14, 15, 16, 17]

//Decided to use LUXON instead of Moment due to Moment being legacy code
var DateTime = luxon.DateTime;
const now = DateTime.now();

$("#currentDay").text(now.toLocaleString());


//checks timeblocks and assigns them colors based on if the block is in the past(#d3d3d3), present(#ff6961), or future(#77dd77)
function timeColorChange() {
    const currentHour = DateTime.local().hour;

    console.log(currentHour);
    if (currentHour < 9) {
        nineAM.addClass("future");
            tenAM.addClass("future");
            elevenAM.addClass("future");
            twelvePM.addClass("future");
            onePM.addClass("future");
            twoPM.addClass("future");
            threePM.addClass("future");
            fourPM.addClass("future");
            fivePM.addClass("future");
    }
    if (currentHour === 9) {
        nineAM.addClass("present");
            tenAM.addClass("future");
            elevenAM.addClass("future");
            twelvePM.addClass("future");
            onePM.addClass("future");
            twoPM.addClass("future");
            threePM.addClass("future");
            fourPM.addClass("future");
            fivePM.addClass("future");
    }
    
    if (currentHour === 10) {
        nineAM.addClass("past");
            tenAM.addClass("present");
            elevenAM.addClass("future");
            twelvePM.addClass("future");
            onePM.addClass("future");
            twoPM.addClass("future");
            threePM.addClass("future");
            fourPM.addClass("future");
            fivePM.addClass("future");
    }
            
    if (currentHour === 11) {
        nineAM.addClass("past");
            tenAM.addClass("past");
            elevenAM.addClass("present");
            twelvePM.addClass("future");
            onePM.addClass("future");
            twoPM.addClass("future");
            threePM.addClass("future");
            fourPM.addClass("future");
            fivePM.addClass("future");
    }
    if (currentHour === 12) {
        nineAM.addClass("past");
            tenAM.addClass("past");
            elevenAM.addClass("past");
            twelvePM.addClass("present");
            onePM.addClass("future");
            twoPM.addClass("future");
            threePM.addClass("future");
            fourPM.addClass("future");
            fivePM.addClass("future");
    }
    if (currentHour === 13) {
        nineAM.addClass("past");
            tenAM.addClass("past");
            elevenAM.addClass("past");
            twelvePM.addClass("past");
            onePM.addClass("present");
            twoPM.addClass("future");
            threePM.addClass("future");
            fourPM.addClass("future");
            fivePM.addClass("future");
    }
    if (currentHour === 14) {
        nineAM.addClass("past");
            tenAM.addClass("past");
            elevenAM.addClass("past");
            twelvePM.addClass("past");
            onePM.addClass("past");
            twoPM.addClass("present");
            threePM.addClass("future");
            fourPM.addClass("future");
            fivePM.addClass("future");
    }
    if (currentHour === 15) {
        nineAM.addClass("past");
            tenAM.addClass("past");
            elevenAM.addClass("past");
            twelvePM.addClass("past");
            onePM.addClass("past");
            twoPM.addClass("past");
            threePM.addClass("present");
            fourPM.addClass("future");
            fivePM.addClass("future");
    }
    if (currentHour === 16) {
        nineAM.addClass("past");
            tenAM.addClass("past");
            elevenAM.addClass("past");
            twelvePM.addClass("past");
            onePM.addClass("past");
            twoPM.addClass("past");
            threePM.addClass("past");
            fourPM.addClass("present");
            fivePM.addClass("future");
    }
    if (currentHour === 17) {
        nineAM.addClass("past");
            tenAM.addClass("past");
            elevenAM.addClass("past");
            twelvePM.addClass("past");
            onePM.addClass("past");
            twoPM.addClass("past");
            threePM.addClass("past");
            fourPM.addClass("past");
            fivePM.addClass("present");
    }
    if (currentHour > 17) {
        nineAM.addClass("past");
            tenAM.addClass("past");
            elevenAM.addClass("past");
            twelvePM.addClass("past");
            onePM.addClass("past");
            twoPM.addClass("past");
            threePM.addClass("past");
            fourPM.addClass("past");
            fivePM.addClass("past");
    }
};

setInterval(timeColorChange(), (1000 * 60) * 30);

// //able to create unique ids
// newTextAreaEl.id = "textarea-" + i;

// save task button click eventlistener
$("#9AMBtn").on("click", nineSaveTask);
$("#10AMBtn").on("click", tenSaveTask);
$("#11AMBtn").on("click", elevenSaveTask);
$("#12PMBtn").on("click", twelveSaveTask);
$("#1PMBtn").on("click", oneSaveTask);
$("#2PMBtn").on("click", twoSaveTask);
$("#3PMBtn").on("click", threeSaveTask);
$("#4PMBtn").on("click", fourSaveTask);
$("#5PMBtn").on("click", fiveSaveTask);

//save task function
function nineSaveTask() {
    alert("9AM button was clicked");
    var nineText = $(this).siblings(".description").val();
    localStorage.setItem("9AMTask", nineText);
};
function tenSaveTask() {
    alert("10AM button was clicked");
    var tenText = $(this).siblings(".description").val();
    localStorage.setItem("10AMTask", tenText);
};
function elevenSaveTask() {
    alert("11AM button was clicked");
    var elevenText = $(this).siblings(".description").val();
    localStorage.setItem("11AMTask", elevenText);
};
function twelveSaveTask() {
    alert("12PM button was clicked");
    var twelveText = $(this).siblings(".description").val();
    localStorage.setItem("12PMTask", twelveText);
};
function oneSaveTask() {
    alert("1PM button was clicked");
    var oneText = $(this).siblings(".description").val();
    localStorage.setItem("1PMTask", oneText);
};
function twoSaveTask() {
    alert("2PM button was clicked");
    var twoText = $(this).siblings(".description").val();
    localStorage.setItem("2PMTask", twoText);
};
function threeSaveTask() {
    alert("3PM button was clicked");
    var threeText = $(this).siblings(".description").val();
    localStorage.setItem("3PMTask", threeText);
};
function fourSaveTask() {
    alert("4PM button was clicked");
    var fourText = $(this).siblings(".description").val();
    localStorage.setItem("4PMTask", fourText);
};
function fiveSaveTask() {
    alert("5PM button was clicked");
    var fiveText = $(this).siblings(".description").val();
    localStorage.setItem("5PMTask", fiveText);
};
// event.preventDefault();
//   var loadTasks = function() {
    //     tasks = JSON.parse(localStorage.getItem("tasks"));
    // event.preventDefault();
    
    function nineLoadTask() {
        // var nineSavedText = localStorage.getItem("9AMTask");
        $("#9AM .description").val(localStorage.getItem("9AMTask"));
    };
$("#9AM .description").val(localStorage.getItem("9AMTask"));