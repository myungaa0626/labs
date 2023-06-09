/* main.js*/

const Person = {
	name: 'Yuna'
   ,age : 22
   ,email: 'kingsmile@sjcu.ac.kr'		
   ,address: 'Busan'
}

// const [] = []
//const{ name, age, email, address, phone } = Person // phone (undefined)
const{ name, age, email, address, phone='010-9999-8877' } = Person
console.log(`user Name : ${name} 입니다`)
console.log(`user 나이 : ${age} 입니다`)
console.log(`user 이메일주소 : ${email} 입니다`)
console.log(`user 주소 : ${address} 입니다`)
console.log(`user 전화번호 : ${phone} 입니다`) // undefined

// const { name, age } = Person
const { irum, nae } = Person
console.log(irum)
console.log(Person.address)

console.log('==================================================')

const keys = Object.keys(Person)
console.log(keys)  // ['name', 'age', 'email']
console.log(Person['name'])
console.log(Person['age'])
console.log(Person['email'])
console.log(Person.email)

const values = keys.map(key => Person[key])
console.log(values) // [ 'Yuna', 22, 'kingsmile@sjcu.ac.kr' ]

const numbers = [1,2,3,4,5,6]
const fruits = ['Apple', 'Banana','Cherry', 'Orange']

let[x,y] = [10,20] // 구조분해할당
let[x1,y2,...rest] = [10,20,3,4,5,6,7]

console.log('==================================================')
const[ff,g,h,i,j] = fruits

const [, z] = fruits // apple banana
//const [,,z] = fruits // apple cherry

console.log(fruits)
console.log(...fruits);

console.log('*************************************************')


/*
function toObject(xx,yy, ...zz){
	return{
		xx: xx
	   ,yy: yy
	   ,zz: zz
	}
}
*/

// arrow function
const toObject = (xx,yy, ...zz) => ({xx, yy, zz})
console.log(toObject(...fruits));  // { xx: 'Apple', yy: 'Banana', zz: [ 'Cherry', 'Orange' ] }

//console.log(toObject(fruits[0],fruits[1],fruits[2]));

console.log('*************************************************')

console.log(ff,z)

console.log(i) // undefines

console.log('==================================================')

// .splice()

fruits.splice(2,0, 'Orange')
console.log(fruits)

numbers.splice(2,0,99)
console.log(numbers)
numbers.splice(2,1,99)
//numbers.splice(2,1) // 3번째에 숫자 잘라옴
console.log(numbers)

// .push() .unshift()
// 원본 수정됨.

numbers.push(7)
console.log(numbers)

numbers.unshift(0)
console.log(numbers)

numbers.reverse()
fruits.reverse()
console.log(numbers)
console.log(fruits)

console.log('-----------------------------------------')

// .includes()
const e = numbers.includes(3)
console.log(e)

const f = fruits.includes('DoYeon')
console.log(f)

console.log('-----------------------------------------')

// .find(), .findIndex()

const c = fruits.find(item => {
	
	return /^C/.test(item)    // c 로 시작하는 아이템 찾기
//	return item
	
})

console.log(c);

const d = fruits.findIndex(item => {
	return /^C/.test(item)    // c 로 시작하는 아이템 찾기
})

console.log(d);

console.log('-----------------------------------------')

// .filter()

//const a = numbers.map(function(num){
//	
//	console.log(num)
//	
//})

const a = numbers.map(num => {
	//console.log(num)
	return num < 3
})
console.log(a)
	
//const b = numbers.filter(num => {
//	//console.log(num)
//	return num < 3
//})
//console.log(b)

const b = numbers.filter(num => num > 3)
console.log(b)
console.log(numbers)


