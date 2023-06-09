/*youtube.js*/


 // Youtube IFrame API 를 비동기로 로드한다.
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  var player;
  function onYouTubeIframeAPIReady() {
    new YT.Player('player', {
	  videoId: 'UzvocvCHnz8', // 유튜브상에 있는 실행 유튜브의 id 영상으로 띄운다.
	  playerVars:{
		
		autoplay: true,
		loop: true,
		playlist: 'UzvocvCHnz8'
		
	  },

      events: {
        onReady: function(e){
			e.target.mute() // 음소거
		}  
      }
    });
  }
