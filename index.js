function refreshTime() {
    const timeDisplay = document.getElementById("time");
    const dayDisplay = document.getElementById("day");
    const dateDisplay = document.getElementById("date");
    const dayNum = new Date().getDay();
    let dayString = '';
    switch(dayNum) {
        case 0:
            dayString = "SUNDAY";
            break;
        case 1:
            dayString = "MONDAY";
            break;
        case 2:
            dayString = "TUESDAY";
            break;
        case 3:
            dayString = "WEDNESDAY";        
            break;
        case 4:
            dayString = "THURSDAY";
            break;
        case 5:
            dayString = "FRIDAY";
            break;
        case 6:
            dayString = "SATURDAY";
            break;
    }
    const dateString = new Date().toLocaleString();
    const formattedString = dateString.replace(", ", " - ");
    let dateArr = formattedString.split(" - ")
    dateDisplay.textContent = dateArr[0];
    timeDisplay.textContent = dateArr[1].slice(0, -6);
    dayDisplay.textContent = dayString;
}

setInterval(refreshTime, 1000);




