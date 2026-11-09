function update(){
    const  time = new Date();
    document.getElementById("time").innerHTML = time.toLocaleTimeString();
    document.getElementById("date").innerHTML = time.toLocaleDateString();
}
update();
setInterval(update, 1000);

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return String(hours).padStart(2, '0') + ':' +
           String(minutes).padStart(2, '0') + ':' +
           String(remainingSeconds).padStart(2, '0');   
}

let seconds = 0;
let secondsalert = null;
function startStopwatch(){
 if(secondsalert !== null)
    return;

    secondsalert = setInterval(function(){seconds++;
        document.getElementById("time2").innerHTML = formatTime(seconds);
    }, 1000);
}
function stopStopwatch(){
    clearInterval(secondsalert);
    secondsalert = null;
}
function resetStopwatch(){
    stopStopwatch();
    seconds = 0;
    document.getElementById("time2").innerHTML = formatTime(seconds);
}

let tinput=0;
let tid = null;
function Timer(){
clearInterval(tid);
tinput=document.getElementById("timeip").value;
document.getElementById("time3").textContent=formatTime(tinput);
 tid =  setInterval(function(){tinput--;document.getElementById("time3").innerHTML = formatTime(tinput);
    if(tinput<=0){
        clearInterval(tid);
        document.getElementById("time3").textContent=formatTime(0);
        tid=null;
        alert("timer is up");
    }
 },1000)
} 



 let alarmInterval = null;

function Alarmstart() {
    const alarmValue = document.getElementById("alarmip").value;
    const [hours, minutes] = alarmValue.split(":").map(Number);
    
    if (!alarmValue || Number.isNaN(hours) || Number.isNaN(minutes)) {
        alert("Please choose an alarm time.");
        return;
    }

    clearInterval(alarmInterval);

    function checkAlarm() {
        const now = new Date();

        if (now.getHours() === hours && now.getMinutes() === minutes) {
            console.log(now.getHours());
            clearInterval(alarmInterval);
            alarmInterval = null;
            alert("Alarm!");
        }
    }

    checkAlarm();
    
   
}
