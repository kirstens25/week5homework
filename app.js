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

    const row = $("<div>").attr('class', 'row border').attr('id', `${timeHour}row`);
    const timeCol = $("<div>").attr('class', 'col-1 timesection').text(timeLabel);
    row.append(timeCol);

    const detailsCol = $("<div>").attr('class', 'col-10');
    const details = $("<textarea>").attr('type', 'text').attr('class', 'text-details').attr('id', `${timeHour}ta`);
    // if there is an existing value saved in the local storage, show it
    
    const savedValue = getNote(timeHour);
    if (savedValue) {
        details.val(savedValue);
        console.log('hello123')
    }


    detailsCol.append(details);
    row.append(detailsCol);

    const buttonCol = $("<div>").attr('class', 'col-1-save');
    const saveButton = $("<button>").attr('class', 'saveBtn').attr('id', timeHour).text('Save');

    buttonCol.append(saveButton);
    row.append(buttonCol);

    return row;
}

for (let timeHour = 9; timeHour < 18; timeHour++) {
    const row = makeTimeRow(timeHour);
    schedule.append(row);

    setBackgroundColor(timeHour);
}

// when user clicks on the save button, save time + details to the local storage


function saveDetails(timeHour, details) {
    localStorage.setItem(timeHour, details)
}

$("button").on('click', document, function (event) {

    const timeHour = $(event.currentTarget).attr('id');
    const textAreaInput = $(`#${timeHour}ta`).val();

    console.log(timeHour);

    saveDetails(timeHour, textAreaInput);
    console.log(timeHour, '--', textAreaInput);
})

function getNote(timeHour) {
    const timeLabel = timeHour + ':00'
    return localStorage.getItem(timeLabel)
}

getNote();

// when the it's currently that time, make the background light green
// when the time hasn't been reached yet, make the background light blue

setBackgroundColor();

function setBackgroundColor(timeHour) {
    var objDate = new Date();
    var currentHour = objDate.getHours();
    var hour = $('.timesection').text();
    if (timeHour === currentHour) {
        $(`#${timeHour}row`).addClass("present")
    }
    else if (timeHour < currentHour) {
        $(`#${timeHour}row`).addClass("past")
    }
    else {
        $(`#${timeHour}row`).addClass("future")
    }
    console.log('timeHour', timeHour, 'currentHour', currentHour)
}



