const schedule = $('#schedule-container');

// when screen loads

// show accurate time

// show 8 rows (9:00 - 17:00), with 3 columns - time, details (text field), save button
function makeTimeRow(timeHour) {
const timeLabel = timeHour + ':00';

const row = $("<div>").attr('class', 'row border');
const timeCol = $("<div>").attr('class', 'col-2').text(timeLabel);
console.log('2012')
row.append(timeCol);


const detailsCol = $("<div>").attr('class','col-8');
const details = $("<textarea>").attr('type', 'text');

detailsCol.append(details);
row.append(detailsCol);

const buttonCol = $("<div>").attr('class','col-2');
const saveButton = $("<button>").attr('class', 'btn btn-primary').text('Save');

buttonCol.append(saveButton);
row.append(buttonCol);

return row;
}

for (let timeHour = 9; timeHour < 18; timeHour++) {
    const row = makeTimeRow(timeHour);
    schedule.append(row);
}

// user can add text to the details section

// when the user clicks on save button, save time + details to the local storage

// when the time has passed for the day make the background grey

// when the it's currently that time, make the background light green

// when the time hasn't been reached yet, make the background light blue