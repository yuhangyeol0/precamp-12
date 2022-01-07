//3:00 에서 1초씩 줄어드는 타이머

let time = 180 

setInterval(function(){
    if (time >= 0){ //0이 될 때 까지

        const min = String(Math.floor(time/60)).padStart(2,"0") //분 : 180에서 60으로 나누면 3분
        const sec = String(time%60).padStart(2,"0") //초 : 180에서 60으로 나누고 그 나머지가 초

        console.log(min + ":" + sec)
        time = time - 1
    }
},1000)