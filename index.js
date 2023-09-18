// creating the variables 
const timer = document.getElementById("stopwatch");
var hour = 0;
var minute = 0;
var second = 0;
var stoptime = true;


// creating the start function to start the stopwatch
function startTime() {
  if (stoptime == true) {
    stoptime = false;
    timeLoop();
  }
}
// creating the stop function to stop/pause the stopwatch 
function stopTime() {
  if (stoptime == false) {
    stoptime = true;
  }
}

// function to make the stopwatch time to be an loop 
function timeLoop() {
  if (stoptime == false) {
    second = parseInt(second); //converting the string to integers as JS accept data as string 
    minute = parseInt(minute); //converting the string to integers as JS accept data as string 
    hour = parseInt(hour); //converting the string to integers as JS accept data as string 

    second = second + 1;  //increasing the timer as seconds become 0 to 1 and so on....

    if (second == 60) {  //as we can know "60 sec=1 min" , we are turnig that logic into code 
      minute = minute + 1;
      second = 0;//after second reach 60 again we are intializing as 0 , because we need another minute to go.... 
    }
    if (minute == 60) {   //same 60 min == 1 hour
      hour = hour + 1;
      minute = 0;   //making min =0 and sec =0 for another round of hour
      second = 0;
    }


    //these conditions are for displaying the 2 digits with "0".
    if (second < 10 ) {
      second = "0" + second;
    }
    if (minute < 10 ) {
      minute = "0" + minute;
    }
    if (hour < 10 ) {
      hour = "0" + hour;
    }

    timer.innerHTML = hour + ":" + minute + ":" + second; //for displaying with colon

    setTimeout("timeLoop()", 1000); //time loop for  1000ms/1second
  }
}
function resetTime() {  //function for reset timer
  timer.innerHTML = "00:00:00";
  stoptime = true;
  hour = 0;
  second = 0;
  minute = 0;
}