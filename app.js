const schedule = $('#schedule-container');

// when screen loads

// show accurate time

// show 8 rows (9:00 - 17:00), with 3 columns - time, details (text field), save button
function makeTimeRow(timeHour) {
const timeLabel = timeHour + ':00';

// <div class="row">
// <div id="time" class="col-2"></div>
// <div id="notes" class="col-8">
// <input>Notes to go here</input>

// </div>
//       <div id="save" class="col-2">
//   <button class="btn btn-primary">Save</button>
// </div>
// </div>

const row = $("<div>").attr('class', 'row border');
const timeCol = $("<div>").attr('class', 'col-2').text(timeLabel);

row.append(timeCol);


const detailsCol = $("<div>").attr('class', 'col-8')
const details = $("<div>").attr('type', 'text').text

detailsCol.append(details);
row.append(detailsCol);

const buttonCol = $("<div>").attr('class', 'col-2');
const saveButton = $("<button>").attr('class', 'btn btn-primary')

buttonCol.append(saveButton);
row.append(saveButton);
}

for (let timeHour = 9; timeHour < 18; timeHour++) {
    makeTimeRow();
    
    
}

// user can add text to the details section

// when the user clicks on save button, save time + details to the local storage

// when the time has passed for the day make the background grey

// when the it's currently that time, make the background light green

// when the time hasn't been reached yet, make the background light blue