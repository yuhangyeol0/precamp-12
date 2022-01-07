const email= 'codecamp@gmail.com'
// undefined
email.includes('@')
// true
email.split('@')
// (2) ['codecamp', 'gmail.com']
let usermail = email.split('@')
// undefined
let usermail = email.split('@')[0]
// undefined
usermail
'codecamp'
let company = email.split('@)[1]
VM2325:1 Uncaught SyntaxError: Invalid or unexpected token
let company = email.split('@')[1]
// undefined
let maskingMail = []
// undefined
maskingMail.push(usermail[0])
// 1
maskingMail.push(usermail[1])
// 2
maskingMail.pop()
// 'o'
maskingMail.push(usermail[2])
// 2
maskingMail.push(usermail[3])
// 3
maskingMail
// (3) ['c', 'd', 'e']0: "c"1: "d"2: "e"3: "*"4: "*"5: "*"6: "*"length: 7[[Prototype]]: Array(0)
maskingMail.push('*')
// 4
maskingMail.push('*')
// 5
maskingMail.push('*')
// 6
maskingMail.push('*')
// 7
maskingMail
// (7) ['c', 'd', 'e', '*', '*', '*', '*']
maskingMail.join("")
// 'cde****'
let userId = maskingMail.join("")
// undefined