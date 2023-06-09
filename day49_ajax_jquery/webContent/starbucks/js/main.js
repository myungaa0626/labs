/* main.js*/
// 검색창 제어 - 요소 (.search) 찾기
const searchEI = document.querySelector('.search')
const searchInputEI = searchEI.querySelector('input')

// 검색창 클릭 이벤트 발생시 실행

searchEI.addEventListener('click',function(){
	searchInputEI.focus()
})
// 검색창 요소 내부 실제 input 요소에 포커스되면 실행될 내용
searchInputEI.addEventListener('focus',function(){
	searchEI.classList.add('focused')
	searchInputEI.setAttribute('placeholder','검색어 입력')
})

// 포커스가 해제(블러) 되면 실행
searchInputEI.addEventListener('blur',function(){
	searchEI.classList.remove('focused')
	searchInputEI.setAttribute('placeholder','')
})

// 페이지 스크롤에 따른 요소 제어 - badges 제어
const badgeEI = document.querySelector('header .badges')
const toTopEI = document.querySelector('#to-top')
// 스크롤이 지나치게 자주 발생하는 것을 조절(throttle)
window.addEventListener('scroll', _.throttle(function(){
	if(window.scrollY > 500){
		// Badge 요소 숨기기
		gsap.to(badgeEI, .6, {
		 	opacity:0,
		 	display:'none'
		})
		// 상단으로 스코롤 버튼 보이기
		gsap.to(toTopEI, .2, {
			x:0
		})
	}else{
		// Badge 요소 보이기
		gsap.to(badgeEI, .6, {
		 	opacity:1,
		 	display:'block'
		})
		// 상단으로 스코롤 버튼 보이기
		gsap.to(toTopEI, .2, {
			x:100
		})
	}
},300))

// ↑ 상단으로 가는 스크롤 모양 클릭하면 
toTopEI.addEventListener('click',function(){
	gsap.to(window, .7, {
		scrollTo: 0
	})
})

// 순서대로 나타나는 기능 - 나타날 요소 찾기 (.fade-in)
const fadeEls = document.querySelectorAll('.visual .fade-in')

//이미지를 하나씩 반복해서 처리
fadeEls.forEach(function(fadeEls, index){
	
	gsap.to(fadeEls, 1, {
		delay: (index + 1) * .7,
		opacity: 1
	})
})

// 슬라이드 요소 관리
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',  // 수직 슬라이드
    autoplay: true, // 자동 재생
    loop: true  // 반복 재생
})

new Swiper('.promotion .swiper-container', {
    direction: 'horizontal',    // 수평 슬라이드
    autoplay: {
        delay: 5000 // 5초마다 슬라이드 변경
    },
    loop: true,
    slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
    spaceBetween: 10,
    centeredSlides: true,
    pagination: {
        el: '.promotion .swiper-pagination',
        clickable: true
    }
})

new Swiper('.awards .swiper-container', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }

})

const promotionEl = document.querySelector('.promotion')
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false
promotionToggleBtn.addEventListener('click', () => {
    isHidePromotion = !isHidePromotion
    if (isHidePromotion) {
        promotionEl.classList.add('hide')
    } else {
        promotionEl.classList.remove('hide')
    }
})

























