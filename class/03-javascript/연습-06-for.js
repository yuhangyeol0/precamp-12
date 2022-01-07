let students = ['철수', '영희', '도우너', '말포이', '도비', '그루트']
undefined
for (let count = 0; count<students.length; count++) {
    console.log(students[count]+'님 안녕하세요')
}
// VM1490:2 철수님 안녕하세요
// VM1490:2 영희님 안녕하세요
// VM1490:2 도우너님 안녕하세요
// VM1490:2 말포이님 안녕하세요
// VM1490:2 도비님 안녕하세요
// VM1490:2 그루트님 안녕하세요


let persons = [
    {name: '철수', age:18},
    {name: '영희', age:22},
    {name: '도우너', age:5},
    {name: '말포이', age:14},
    {name: '도비', age:3},
  ]

//   내 답
for(let count = 0; count<persons.length; count++){
    if (persons[count].age >= 20){
        console.log("성인입니다")
    } else if (persons[count].age >=8 ){
        console.log("학생입니다")
    } else {
        console.log("유아입니다")
    }
}
// 학생입니다
// VM2153:3 성인입니다
// VM2153:7 유아입니다
// VM2153:5 학생입니다
// VM2153:7 유아입니다


// 모범답안

for (let i=0;i<persons.length;i++){
    if(persons[i].age > 18){
        console.log(persons[i].name + "님은 성인입니다")
    } else{
        console.log(`${persons[i].name}님은 미성년자입니다`)
    }
}