let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let dig = document.getElementById('digi-time');
let mer = document.getElementById('digi-mer');

function displayTime(){
    let date = new Date();

    let day = date.getDay();

    switch(day){
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";

    }

    // Getting hour, mins, secs from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let ms = date.getMilliseconds();

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
    dig.innerHTML =  (hh < 10 ? "0"+hh : hh)  + " : " + (mm < 10 ? "0"+mm : mm) + " : " +( ss < 10 ? "0" +ss : ss) + " "+ day; 
    mer.innerHTML = hh >= 12 ? "PM" : "AM"
    // dig.innerHTML = hh + " : " + (mm < 10 ? "0"+mm : mm) + " : " + ss + " "+ day;


}

setInterval(displayTime, 10);
