const schedule = $('.schedule-container');
const todaysDate = $('todays-date');

// when screen loads

// show accurate time

function showTodaysDate() {
    todaysDate.text(moment().format("MMM Do YY"));
}
showTodaysDate();

// show 8 rows (9:00 - 17:00), with 3 columns - time, details (text field), save button
// user can add text to the details section
function makeTimeRow(timeHour) {
    const timeLabel = timeHour + ':00';

    const row = $("<div>").attr('class', 'row border');
    const timeCol = $("<div>").attr('class', 'col-1 timesection').text(timeLabel);
    row.append(timeCol);

    const detailsCol = $("<div>").attr('class', 'col-10');

    // if there is an 

    const details = $("<textarea>").attr('type', 'text').attr('class', 'text-details');

    detailsCol.append(details);
    row.append(detailsCol);

    const buttonCol = $("<div>").attr('class', 'col-1-save');
    const saveButton = $("<button>").attr('class', 'saveBtn').text('Save');

    buttonCol.append(saveButton);
    row.append(buttonCol);

    return row;
}

for (let timeHour = 9; timeHour < 18; timeHour++) {
    const row = makeTimeRow(timeHour);
    schedule.append(row);
}

// when user clicks on the save button, save time + details to the local storage


function saveDetails(timeHour, details) {
    localStorage.setItem(timeHour, details)
}

$("button").on('click', document, function (event) {

    const textAreaInput = $('textarea').val();
    const inputDetails = $(event.target);
    const hourTime = inputDetails.parent().prev().prev().text();

    const userDetails = inputDetails.val();

    saveDetails(userDetails, hourTime);
    console.log(hourTime, '--', textAreaInput);
})

setBackgroundColor();

function setBackgroundColor() {
    var objDate = new Date();
    var currentHour = objDate.getHours();
    var hour = $('.timesection').text();
    if (hour === currentHour) {
        $(".row").addClass("present");
    }
    else if (hour < currentHour) {
        $(".row").addClass("past");

    }
    else {
        $(".row").addClass("future");

        console.log(hour, currentHour)
    }
}


    // $('.row').addClass(backgroundClass);
// when the it's currently that time, make the background light green

// when the time hasn't been reached yet, make the background light blue