/* day46.js */
 
 // HTML 요소 (Element) 1개 검색/찾기
 const boxEls = document.querySelectorAll('.box');
 console.log(boxEls);
 
 // 찾은 요소들 반복해서 함수 실행 - 익명함수 추가
 // boxEl.forEach(function(1, 2, 3){})   // 1: 반복중인 요소값, 2: 인덱스, 3: 전체요소
 boxEls.forEach(function(item, index){
	item.classList.add(`order-${index+1}`);
	console.log(index, item);	
});

 const boxEl = document.querySelector('.box');
 console.log(boxEl);
 
 // HTML 요소에 적용할 수 있는 메소드
 // 인수 (Arguments)를 추가 기능
 // boxEl.addEventListener(1,2); // 1: event ,  2: 할일
 boxEl.addEventListener('click', function(){
	
	console.log('Click~~~');	
	boxEl.classList.add('active');
	console.log(
		
		boxEl.classList.contains('active')
	);
	
	boxEl.classList.remove('active');

	console.log(
		
		boxEl.classList.contains('active')
	);
});
 
 let isShow = true;
 let checked = false;
 
 if(isShow){
	console.log('Show!');
}
 
 if(checked){
	console.log('checked!');
}
 
 if(isShow){
	
	console.log('Show!');
	
}else{
	
	console.log('Hide?');
}
 
