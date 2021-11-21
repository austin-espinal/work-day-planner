$(document).ready(function () {
    const nineAM = $('#9AM');
    const tenAM = $("#10AM");
    const elevenAM = $("#11AM");
    const twelvePM = $("#12PM");
    const onePM = $("#1PM");
    const twoPM = $("#2PM");
    const threePM = $("#3PM");
    const fourPM = $("#4PM");
    const fivePM = $("#5PM");

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

    //sets 30 minute interval refresh for timeColorCange function in case site is still up for extend period of time
    setInterval(timeColorChange(), (1000 * 60) * 30);

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

    //save task functions
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

    //load tasks
    $("#nine-block .description").val(localStorage.getItem("9AMTask"));
    $("#ten-block .description").val(localStorage.getItem("10AMTask"));
    $("#eleven-block .description").val(localStorage.getItem("11AMTask"));
    $("#twelve-block .description").val(localStorage.getItem("12PMTask"));
    $("#one-block .description").val(localStorage.getItem("1PMTask"));
    $("#two-block .description").val(localStorage.getItem("2PMTask"));
    $("#three-block .description").val(localStorage.getItem("3PMTask"));
    $("#four-block .description").val(localStorage.getItem("4PMTask"));
    $("#five-block .description").val(localStorage.getItem("5PMTask"));
});