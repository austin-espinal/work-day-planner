// var timeBlock = $("<div>").addClass("time-block");
// var hour = $("<div>").addClass("hour").text("9am");
// var text =$(this).text().trim();
// var timeEvent = $("<text-area>").addClass("textarea").val(text);
// var saveBtn = $("<button>").addClass("saveBtn").text("<i class="far fa-save"></i>");

// timeBlock.append(hour, timeEvent, saveBtn);
//Decided to use LUXON instead of Moment due to Moment being legacy code
const now = DateTime.toLocaleString(DateTime.DATETIME_MED);
$("#currentDay").append(now);
console.log(now);