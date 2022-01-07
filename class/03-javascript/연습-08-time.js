setTimeout(function(){
    console.log("3초가 지났씁니다")
},3000)
// 3
// VM959:2 3초가 지났씁니다
setTimeout(function(){
    console.log("5초가 지났씁니다")
},5000)
// 4
// VM983:2 5초가 지났씁니다
setInterval(function(){
    console.log("1초가 지났습니다")
},1000)
// 5
// 57VM1115:2 1초가 지났습니다


let time = 10
undefined
setInterval(function(){
//     1.콘솔에 타임 찍어주기 2.타임에서 재할당해주기
    console.log(time)
    time = time - 1
},1000)


setInterval(function(){
    //     조건 걸어주기
        if(time >= 0) {
            console.log(time)
            time = time - 1
        }
    },1000)