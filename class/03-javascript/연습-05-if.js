if(1+1 ===2){
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// 711-17b0a195537095b60ea5.js:1 정답입니다
// undefined
if(true){
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// 711-17b0a1955370?95b60ea5.js:1 정답입니다
// undefined
let password1 = "123"
// undefined
let password2 = "345"
// undefined
password1 === password2
// false
if (password1 === password2) {
    alert("비밀번호가 확인되었습니다")
} else{
    alert("비밀번호가 틀립니다")
}

const profile = {
    name :"철수",
    age : 12,
    school:"다람쥐초등학교"
}
// undefined

if(profile.age>=20){
    alert("성인입니다")
}
else if(8<=profile.age<=19) {
    alert("학생입니다")
}
else {
    alert("어린이입니다")
}

if(profile.age>=20){
    alert("성인입니다")
}
else if(8<=profile.age && profile.age <=19) {
    alert("학생입니다")
}
else {
    alert("어린이입니다")
}

if(profile.age>=20){
    alert("성인입니다")
}
else if(profile.age>=8) {
    alert("학생입니다")
}
else if(profile.age >= 1){
    alert("어린이입니다")
}
else {
    alert("다시 입력해 주세요")
}