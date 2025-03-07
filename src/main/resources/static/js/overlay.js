/**
 * 
 */
let drawScreen = []; // 0 : 로고 표시, 1 : 1라운드, 2 : 1라운드, 3 : 2라운드, 4 : 2라운드, 5 : 테마 추첨, 6 : 파이널
let currScreen;
let themePos=[
	["0%","24%"],
	["0%","44%"],
	["0%","64%"],
	["19%","24%"],
	["19%","44%"],
	["19%","64%"]
]



$("document").ready(()=>{
	currScreen = $("#scene0");
	
	for(let i = 0; i < 7; i++){
		let id = "#screen"+i
		drawScreen.push($(id));
	}
	
	const eventSource = new EventSource("/sse?target=overlay");
	
	eventSource.addEventListener("connect",(event)=>{
		//연결
		console.log("connect success");
	});
	
	eventSource.addEventListener("changeScreen",(event)=>{
		let screenIndex = Number(event.data);
		if(currScreen != null)
			currScreen.css("visibility","hidden");
		
		drawScreen[screenIndex].css("visibility","visible");
		currScreen = drawScreen[screenIndex];
	});
	
	eventSource.addEventListener("drawParticipant",(event)=>{
		//대진표 뽑기
	});
	
	eventSource.addEventListener("drawCard",(event)=>{
		// 카드 뽑기
	});
	
	eventSource.addEventListener("setTeam",(event)=>{
		// 3라운드 팀원지정
	});
	
	for(let i = 0; i < 6; i++){
		let cardID = "#themeCard"+i;
		$(cardID).css("margin-top",""+themePos[i][0]);
		$(cardID).css("margin-left",""+themePos[i][1]);
	}
	
	//$("#screen5").css("visibility","visible");
});