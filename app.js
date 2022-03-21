const schedule = $('.schedule-container');
const todaysDate = $('#todays-date');

// show accurate date
var today = moment();
$(todaysDate).text(today.format("dddd, DD MMMM YYYY"));



// show row with 3 columns - time, details (text field), save button
// user can add text to the details section
function makeTimeRow(timeHour) {
    const timeLabel = timeHour + ':00';

    const row = $("<div>").attr('class', 'row border').attr('id', `${timeHour}row`);
    const timeCol = $("<div>").attr('class', 'col-1 timesection').text(timeLabel);
    row.append(timeCol);

    const detailsCol = $("<div>").attr('class', 'col-10');
    const details = $("<textarea>").attr('type', 'text').attr('class', 'text-details').attr('id', `${timeHour}ta`);
    
    detailsCol.append(details);
    row.append(detailsCol);

    const buttonCol = $("<div>").attr('class', 'col-1-save');
    const saveButton = $("<button>").attr('class', 'saveBtn').attr('id', timeHour).text('Save');

    buttonCol.append(saveButton);
    row.append(buttonCol);

    // if there is an existing value saved in the local storage, show it
    const savedValue = getNote(timeHour);
    if (savedValue) {
        details.val(savedValue); 
    }

    return row;
}

// create rows for each hour between 9am and 5pm (24 hour time)
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

    saveDetails(timeHour, textAreaInput);
})

// when there is a value saved in the local storage, show it
function getNote(timeHour) {
    return localStorage.getItem(timeHour)
}
getNote();

// when the time hasn't been reached yet, make the background grey
// when the it's currently that time, make the background to red
// when the time hasn't been reached yet, make the background green

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
}



