/*day46_2.js */

import getType, {urandom} from './getType.js'   
// default 때문에 중괄호를 사용해야됨

// 산술 연산자
console.log(1+2);
console.log(5-7);
console.log(3*4);
console.log(10/2);
console.log(7 % 3);

//할당 연산
let x = 2;
x += 1; //x = x + 1;
console.log(x);

//비교 연산자
const y = 1;
const z = 1;  // '1'  << 문자열로 비교하면 === 에서는 false로 나온다
console.log(y == z);   // 동등 
console.log(y === z);  // 일치 (자료형까지 비교)

function isEqual(x,y){
	
	return x === y;
	
}


console.log(isEqual(1, 1));
console.log(isEqual(1, 2));
console.log(isEqual(2, '2'));
console.log(y !== z);
// >,<, <= , >=


//논리 연산자
const c = 1 === 1;
const d = 'AB' === 'AB';
const e = true;


console.log(c);
console.log(d);
console.log(e);
console.log('&&: ', c && d && e); // and
console.log('||: ', c || d || e); // or

// 삼항연산자
const f = 1 < 2;
if( f ) console.log('참');
else console.log('거짓');
console.log(f ? '참' : '거짓');

console.log(Math.random()*10);

const func = urandom();
console.log(func);

if(func === 0 ){
	
	console.log('func is 0');
	
}else if(func === 9){
	
	console.log('func is 9');
	
}else {
	
	console.log('rest...');
	
}







//----------------------------------------------------

console.log(typeof 'Hello World!'); // string
console.log(typeof 123); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); //object
console.log(typeof {}); // object
console.log(typeof []); // object



console.log(getType(123)); // [object Number]
console.log(getType(false)); // []object Boolean]
console.log(getType({}));    // [object Object]
console.log(getType([]));	 // [object Array]
console.log(getType(null));  // [object Null]

//--------------------------------------------------------------------







const a = 'DeaBo!';
// split : 문자를 인수 기준으로 쪼개서 배열로 반환
// reverse : 배열을 뒤집기
// join : 배열을 인수 기준으로 문자로 병합해 반환


const b = a.split('').reverse().join(''); // 메소드 체이닝

 console.log(a); // DeaBo!
 console.log(b); // !oBaeD



 const boxEl = document.querySelector('.box');
 console.log(boxEl);

// Getter, 값을 얻는 용도
console.log(boxEl.textContent);

// Setter, 값을 셋팅 (지정) 하는 용도

boxEl.textContent = 'Yuna!!'
console.log(boxEl.textContent);















