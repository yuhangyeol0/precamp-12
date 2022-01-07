function changeFocus1(){
    const phone1 = document.getElementById("phone1").value
    if (phone1.length===3){
        document.getElementById("phone2").focus()
    }
}


function changeFocus2(){
    const phone2 = document.getElementById("phone2").value
    if (phone2.length===4){
        document.getElementById("phone3").focus()
    }
}


function changeFocus3(){
    const phone3 = document.getElementById("phone3").value
}


function checkValidation(){
    const email = document.getElementById("email").value
    const pw1 = document.getElementById("password1").value
    const pw2 = document.getElementById("password2").value

    if(email !== "" && pw1 !== "" && pw2 !==""){
        document.getElementById("submit").disabled = false
        document.getElementById("submit").setAttribute("style","background-color:yellow")
    } else{
        document.getElementById("submit").disabled = true
        document.getElementById("submit").setAttribute("style","background-color:none")
    }

}

let isStarted = false

const pressedBtn = () => {

    if(isStarted===false){
        document.getElementById("finish").disabled = false;
        isStarted = true

        const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
        document.getElementById("auth").innerText = token

        let time = 180000
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

