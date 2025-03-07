/**
 * 
 */
let drawScreen = []; // 0 : 로고 표시, 1 : 1라운드, 2 : 1라운드, 3 : 2라운드, 4 : 2라운드, 5 : 테마 추첨, 6 : 파이널
let currScreen;

$("document").ready(()=>{
	
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
	
	$("#screen2").css("visibility","visible");
});