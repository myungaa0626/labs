/*js*/

const imageUrls = ["../images/gosum.jpg","../images/neoguri.jpg","../images/samak.jpg",];
const nextBtn = document.querySelector("button#next");
const prevBtn = document.querySelector("button#prev");
const topImgContainer = document.querySelector("div.topImgContainer");
let imageEls = topImgContainer.querySelectorAll("img");

const LEN = 4;
let start = 0;
let end = 3;

nextBtn.addEventListener("click", moveNext);
prevBtn.addEventListener("click", movePrev);

function moveNext(){
	topImgContainer.querySelector("img.gosum").remove();
	imageEls.forEach((el) => {
		
		el.classList.replace("koala","gosum");
		el.classList.replace("neoguri","koala");
		el.classList.replace("owl","neoguri");
		el.classList.replace("quaka","owl");
		el.classList.replace("samak","quaka");
		el.classList.replace("wonsung","samak");
		

	})
	
	start = (start + 1) % LEN;
	end = (end + 1) % LEN;
	
	const newImg = document.createElement("img");
	newImg.width = 200;
	newImg.height = 200;
	newImg.src = imageUrls[start];
	newImg.classList.add("");
	imgContainer.appendChild(newImg);

}

function movePrev(){
	topImgContainer.querySelector("img.wonsung").remove();
	imageEls = imgContainer.querySelectorAll("img");
	imageEls.forEach((el) => {
		el.classList.replace("wonsung","samak");
		el.classList.replace("samak","quaka");
		el.classList.replace("quaka","owl");
		el.classList.replace("owl","neoguri");
		el.classList.replace("neoguri","koala");
		el.classList.replace("koala","gosum");
		
	})
	
	start = (start - 1 + LEN) % LEN;
	end = (end -1 + LEN) % LEN;
	
	const newImg = document.createElement("img");
	newImg.width = 200;
	newImg.height = 200;
	newImg.src = imageUrls[end];
	newImg.classList.add("");
	topImgContainer.appendChild(newImg);
}

setInterval(moveNext, 1000);

const bottomDiv = document.querySelector("div.bottom");
const leftDiv = document.querySelector("div.left");
const leftImgs = leftDiv.querySelectorAll("img");
const bigImg = bottomDiv.querySelector("img#big");

leftImgs.forEach((imgEl) => {
	imgEl.addEventListener("click",() => {
		bigImg.src = imgEl.src;
	})
})
