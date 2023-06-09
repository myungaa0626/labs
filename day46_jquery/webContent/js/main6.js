/* main6.js */

// 타이머 함수

//setTimeout(함수, 시간) : 일정 시간 후 함수 실행
//setInterval(함수, 시간) : 시간 간격마다 함수 실행
//clearTimeout() : 설정된 Timeout 함수 종료
//clearInterval() : 설정된 Interval 함수를 종료

function timeout(callback){
	setTimeout(() => {
		console.log('DeaBo!')
		callback()
	}, 3000)
}

timeout(()=>{
	
	console.log('Done!!!')
	
})

/*
setTimeout(() => {
	console.log('DeaBo!')
}, 3000)


console.log('Done!!!')

*/


/*
const timer = setInterval( () => {
	console.log('DeaBo!')
},1000);




const h3El = document.querySelector('h3')
h3El.addEventListener('click',() => {
	// alert('deabo');
	//clearTimeout(timer);
	clearInterval(timer);
})

*/

setTimeout(() => {console.log('DeaBo!') }, 3000);


console.log('-------------------------------')















// 호이스팅 (Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

const a = 7

method(); // 함수호출
function method(){ // 함수 정의부
	
	console.log( a * 5)
	
}

 //method(); // 함수 호출



//method(); // 함수호출 - 함수표현식 형태에서는 호이스팅 안됨
//method();

method = function() {
	console.log(a*3)
}
//method();





