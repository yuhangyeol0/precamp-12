let isStarted = false



const pressedBtn = () => {

    
    if(isStarted===false){
        document.getElementById("finish").disabled = false;
        isStarted = true

        const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
        document.getElementById("auth").innerText = token

        let time = 10
        let timer = null

        timer = setInterval(function(){

            if (time >= 0){
                document.getElementById("time").innerText= time
                time = time -1           
            } else {
                // finish.disabled = true
                document.getElementById("finish").disabled = true
                isStarted = false
                clearInterval(timer)            
            }        
        },1000)
    }
       
    else{
        alert("타이머가 이미 동작중입니다")
    }
    
}

