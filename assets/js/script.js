const nineAM = $("#9AM");
// nineAM.value = 9;
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


var workHourArr = [9, 10, 11, 12, 13, 14, 15, 16, 17]

//Decided to use LUXON instead of Moment due to Moment being legacy code
var DateTime = luxon.DateTime;
const now = DateTime.now();
const currentHour = DateTime.local().hour;
$("#currentDay").text(now.toLocaleString());

//checks timeblocks and assigns them colors based on if the block is in the past(#d3d3d3), present(#ff6961), or future(#77dd77)
function timeColorChange() {
    for (var i = 9; i < 18; i++) {
        if (currentHour > i) {
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
        if (i === currentHour) {
            nineAM.addClass("present");
            tenAM.addClass("present");
            elevenAM.addClass("present");
            twelvePM.addClass("present");
            onePM.addClass("present");
            // twoPM.addClass("present");
            // threePM.addClass("present");
            // fourPM.addClass("present");
            // fivePM.addClass("present");
        }
        if (currentHour <i) {
            nineAM.addClass("future");
            tenAM.addClass("future");
            elevenAM.addClass("future");
            twelvePM.addClass("future");
            onePM.addClass("future");
            console.log(i);
            // twoPM.addClass("future");
            // threePM.addClass("future");
            // fourPM.addClass("future");
            // fivePM.addClass("future");
        }
    }
};

setInterval(timeColorChange(), (1000 * 60) * 30);

// //able to create unique ids
// newTextAreaEl.id = "textarea-" + i;

//save task
