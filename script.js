const timer=document.getElementById("Timer");
var clock_sec=0
var clock_min=0;
var clock_hour=0;
var sec=0;
var hour=0;
var setInt;
function start(){
    if(setInt){
        return;
    }
    setInt=setInterval(()=>{
        sec++;
        if(sec==60){
            clock_min++;
            sec=0;
        }
        clock_sec=sec%60;
        if(clock_min==60){
            hour++;
            clock_min=clock_min%60;
        }
        clock_hour=hour%60;
        timer.innerText=`${clock_hour.toString().padStart(2,'0')}:${clock_min.toString().padStart(2,'0')}:${clock_sec.toString().padStart(2,"0")}`;
    },100);
}
function stop(){
    clearInterval(setInt);
    setInt = null;
}
function reset(){
    clock_sec=0;
    clock_min=0;
    clock_hour=0;
    hour=0;
    sec=0;
    timer.innerText=`${clock_hour.toString().padStart(2,'0')}:${clock_min.toString().padStart(2,'0')}:${clock_sec.toString().padStart(2,"0")}`;
    stop()
}
