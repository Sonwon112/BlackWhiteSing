/**
 * 
 */
let drawScreen = []; // 0 : 로고 표시, 1 : 1라운드, 2 : 1라운드, 3 : 2라운드, 4 : 2라운드, 5 : 테마 추첨, 6 : 파이널
let currScreen;
let backup_r1RuolletIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let r1RoulletIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let r1LeaveArr = []

let backup_r2bRoulletIndex = [];
let r2bRoulletIndex = []
let backup_r2wRoulletIndex = [12,13,14,15,16,17];
let r2wRoulletIndex = [12,13,14,15,16,17];

let themeCard = [];

let pickProfile;
let r2bPickProfile;
let r2wPickProfile;

let r1Roullet;
let r2bRoullet;
let r2wRoullet;

let r1RoulletImgs = [];
let r2BlackImgs = [];
let r2WhiteImgs = [];

let r1Pick = [];

let r2bPick = [];
let r2wPick = [];
let r2Pick = [];

let r3Part = [];

let themePick = [];

let ThemeArr = ["테마1", "테마2", "테마3", "테마4", "테마5", "테마6"];

let themePos = [
	[20, 460],
	[20, 844],
	[20, 1228],
	[400, 460],
	[400, 844],
	[400, 1228]
]

let pickPos = [
	[200, 460],
	[200, 844],
	[200, 1228]
];

$("document").ready(() => {
	currScreen = $("#screen0");

	// 화면 제어를 위한 배열에 삽입
	for (let i = 0; i < 11; i++) {
		let id = "#screen" + i
		drawScreen.push($(id));
	}

	// 1라운드 흑팀 룰렛 이미지 삽입
	for (let i = 0; i < r1RoulletIndex.length; i++) {
		let roulletProfileId = "#r1_roulletProfile" + i;
		let img = new Image();
		img.src = "/img/roullet/roullet" + r1RoulletIndex[i]+"_2.webp";
		
		let element = document.querySelector(roulletProfileId);
		element.src= img.src;

		r1RoulletImgs.push(element);
	}
	r1Roullet = document.querySelector("#r1RoulletOutter");
	
	// 2라운드 백팀 룰렛 이미지 삽입
	for (let i = 0; i < r2wRoulletIndex.length; i++) {
		let whiteRoulletProfileId = "#r2w_roulletProfile" + i;
		let blackRoulletProfileId = "#r2b_roulletProfile"+i;
		let img = new Image();
		img.src = "/img/roullet/roullet" + r2wRoulletIndex[i]+".webp";
			
		let element1 = document.querySelector(whiteRoulletProfileId);
		element1.src= img.src;
		r2WhiteImgs.push(element1);
		
		let element2 = document.querySelector(blackRoulletProfileId);
		r2BlackImgs.push(element2);
	}
	pickProfile = r1RoulletImgs[5];
	
	r2bRoullet = document.querySelector("#r2bRoulletOutter");
	r2wRoullet = document.querySelector("#r2wRoulletOutter");

	resetThemeCard();

	const eventSource = new EventSource("/sse?target=overlay");

	eventSource.addEventListener("connect", (event) => {
		//연결
		//console.log("connect success");
	});

	eventSource.addEventListener("changeScreen", (event) => {
		let screenIndex = Number(event.data);
		//console.log("change Scene");
		if (currScreen != null)
			currScreen.fadeOut(1500);

		drawScreen[screenIndex].fadeIn(1500);
		currScreen = drawScreen[screenIndex];
		
		// 대진표 갱신
		if(event.data == "2" || event.data == "4"){
			setBraketNameCard(event.data);
		}
		
		// 2라운드 대진표 추첨
		if(event.data=="3"){
			if(r2bRoulletIndex.length == 6){
				backup_r2bRoulletIndex = [...r2bRoulletIndex]
				for(let i = 0; i < r2bRoulletIndex.length; i++){
					let img = new Image();
					img.src = "/img/roullet/roullet" + r2bRoulletIndex[i]+".webp";
					r2BlackImgs[i].src = img.src;
				}	
			}
			
		}
	});


	eventSource.addEventListener("drawCard", (event) => {
		// 카드 뽑기
		if (event.data == "0") {
			// 리셋
		} else if(event.data == "1") {			
			checkIsFull().then(()=>roulletRotate(Number(event.data)));
		}else{
			r2checkIsFull().then(()=>roulletRotate(Number(event.data)));
		}
	});

	eventSource.addEventListener("drawTheme", (event) => {
		// 테마 뽑기

		if (event.data === "1") {
			// 카드 고르기
			PickTheme();
		} else if (event.data === "0") {
			//console.log("theme : " + event.data);
			// 리셋
			resetThemeCard();
		} else {
			// 테마 섞기
			//console.log("테마추첨 시작");
			drawnTheme();
		}
	});

	eventSource.addEventListener("setTeam", (event) => {
		// 3라운드 팀원지정
		let [team,teamOrder,partIndex] = event.data.split(";");
		
		setR3TeamNameCard(team,teamOrder,partIndex);
	});

	eventSource.addEventListener("rsp", (event) => {
		//console.log(event.data);
		// 가위 바위 보
		let [team, hand] = event.data.split(";");
		let imgUrl = "";
		switch (hand) {
			case "0":
				imgUrl = "url(/img/rock.png)"
				break;
			case "1":
				imgUrl = "url(/img/scissors.png)"
				break;
			case "2":
				imgUrl = "url(/img/paper.png)"
				break;
		}
		let rpsId = "#rps" + team;
		$(rpsId).css("background-image", imgUrl);

		$(rpsId).css("visibillity", "visible");
	});
	
	eventSource.addEventListener("leavingOut",(event)=>{
		let [round, match, pos] = event.data.split(";");
		
		setLeavingOut(round,match,pos);
	});
	eventSource.addEventListener("resetLeavingOut",(event)=>{
		let [round, match] = event.data.split(";");
		
		unsetLeavingOut(round,match);
	});
	eventSource.addEventListener("setR3Match",(event)=>{
		let [match,team,partIdx] = event.data.split(";");
		setR3BraketNameCard(match,team,partIdx);
	});
	eventSource.addEventListener("setScore",(event)=>{
		let [match, pos, score] = event.data.split(";");
		applyScore(match, pos, score);
	});
	eventSource.addEventListener("showWinner",showWinner);
	eventSource.addEventListener("setWinTeam", (event)=>{
		let winTeam = event.data.split(",");
		setWinTeam(winTeam);
	});
	
	eventSource.addEventListener("resetRoullet", (event)=>{
		resetRoullet(Number(event.data));
	});
	
	eventSource.addEventListener("showName",(event)=>{
		showName(Number(event.data));
	});
	
	//$("#screen5").css("visibility", "visible");
});

// 탈락자 반영
function setLeavingOut(round,match,pos){
	let id = `#r${round}m${match}${pos}`
	let e = document.querySelector(id);
	
	r1LeaveArr.push(e);
	
	if(round == 1){
		posVal = pos % 2 == 1 ? (match-1)*2+1 : (match-1)*2;	
		
		r2bRoulletIndex.push(r1Pick[posVal]);
		//console.log(r2bRoulletIndex);
	}else if(round == 2){
		posVal = pos % 2 == 1 ? (match-1)*2+1 : (match-1)*2;
		r3Part.push(r2Pick[posVal]);
	}

	e.style.backgroundColor="#000000";
	
	e.animate({opacity:[0.2]},{duration:300,fill:"forwards",easing:"ease"});
}

// 탈락 취소
function unsetLeavingOut(round,match){
	let e1 = document.querySelector(`#r${round}m${match}1`);
	let e2 = document.querySelector(`#r${round}m${match}2`);
	let pv1 = (match-1)*2;
	let pv2 = (match-1)*2+1;
	
	
	if(round == 1){
		r1LeaveArr = r1LeaveArr.filter((e)=>{e!=e1 && e!=e2});
		r2bRoulletIndex = r2bRoulletIndex.filter((e)=>{e!=r1Pick[pv1] && e!=r1Pick[pv2]});	
	}else if(round == 2){
		r3Part = r3Part.filter((e)=>{e!=r2Pick[pv1] && e!=r2Pick[pv2]});		
	}
	

	//console.log(r2bRoulletIndex);
	
	e1.animate({opacity:1},{duration:300,fill:"forwards",easing:"ease"});
	e2.animate({opacity:1},{duration:300,fill:"forwards",easing:"ease"});
}

// 3라운드에서 컨트롤 창에서 3라운드 팀편성 정보 변경시 반영하는 함수
function setR3TeamNameCard(team, teamOrder, partIdx){
	let id="#finalProfile"+team+teamOrder;
	let idx = Number(partIdx) > 11 ? partIdx : partIdx+"_1";
	//console.log(partIdx+", :"+idx);
	//console.log(id);
	$(id).css("background-image",`url(/img/part/participant/namecard${idx}.png)`)
	
	const e = document.querySelector(id);
	e.animate({
		transform: [
			'translateY(20px)',
			'translateY(0px)'
		],
		opacity: [
			0,
			1
		]
	},
	{
		duration: 800,
		fill: 'forwards',
		easing: 'ease'
	});
}

// 컨트롤 창에서 입력한 3라운드 대진표 정보를 반영하는 함수
function setR3BraketNameCard(match, team, partIdx){
	let id = `#r3m${match}${team}`

	let idx = Number(partIdx) > 11 ? partIdx : partIdx+"_1";
	//console.log(partIdx+", :"+idx);
	$(id).css("background-image",`url(/img/part/participant/namecard${idx}.png)`);
	//console.log(id);
	const e = document.querySelector(id);
	
	e.animate({
		transform: [
			'translateY(20px)',
			'translateY(0px)'
		],
		opacity: [
			0,
			1
		]
	},
	{
		duration: 800,
		fill: 'forwards',
		easing: 'ease'
	});
}

// 대진표 구성을 반영하는 함수
function setBraketNameCard(tag){
	
	let idx = 0;
	let targetArr = [];
	//console.log(targetArr);
	// 1라운드
	let id = "#r1m"; // #r라운드m
	let match = 6; // 전체 매치 수
 	let i = 1; // 현재 매지
	
	switch(tag){
		case "2":
			// 1라운드
			id = "#r1m";
			match = 6;
			i = 1;
			//console.log(r1Pick.length);
			if(r1Pick.length < 12){
				// 테스트 데이터
				//targetArr = [2,3,4,1,5,8,7,6,9,10,11,0];
				//r1Pick = targetArr;
				//return;
			}else{
				targetArr = r1Pick;
			}
			
			
			sendServer("pick",1,targetArr);
			break;
		case "4":
			// 2라운드
			id = "#r2m";
			match = 6;
			i = 1;
			
			
			if(r2bPick.length < 6){
				// 테스트 데이터
				targetArr = [2,12,4,16,5,2,7,1,2,15,11,0];
				r2Pick = targetArr;
				//return;
			}else{
				for(let i =0; i < r2bPick.length; i++){
					//console.log(r2bPick[i]+","+r2wPick);
					r2Pick.push(r2bPick[i]);
					r2Pick.push(r2wPick[i]);
				}
				targetArr = r2Pick;
			}
			
			sendServer("pick",2,targetArr);
			break;
	}
	
	let tmp1 = "";
	let tmp2 = "";
	let e1;
	let e2;
	
	for(let j = 1; j <= match; j++){
		tmp1 = id+j+1;
		tmp2 = id+j+2;
		e1 = document.querySelector(tmp1);
		e2 = document.querySelector(tmp2);
		
		e1.animate({opacity:[0]},{duration:0,fill:"forwards"});
		e2.animate({opacity:[0]},{duration:0,fill:"forwards"});
	}
	
	let Braket = setInterval(() => {
		let e1 = document.querySelector(id + i + "1");
		let e2 = document.querySelector(id + i + "2");
		let op1 = 1;
		let op2 = 1;
		
		if(r1LeaveArr.includes(e1)) op1 = 0.2;
		else if(r1LeaveArr.includes(e2)) op2 = 0.2;
		
		//console.log(e1+", "+""+e2);
		$(id + i + "1").css("background-image", "url(/img/part/participant/namecard" + targetArr[idx++] + ".png)");
		$(id + i + "2").css("background-image", "url(/img/part/participant/namecard" + targetArr[idx++] + ".png)");
		e1.animate({
			transform: [
				'translateY(20px)',
				'translateY(0px)'
			],
			opacity: [
				0,
				op1
			]
		},
			{
				duration: 800,
				fill: 'forwards',
				easing: 'ease'
			});
		e2.animate({
			transform: [
				'translateY(20px)',
				'translateY(0px)'
			],
			opacity: [
				0,
				op2
			]
		},
			{
				duration: 800,
				fill: 'forwards',
				easing: 'ease'
			});

		i++;
		if (i > match) clearInterval(Braket);
	}, 600);	
}

// 컨트롤 창에서 입력한 점수 반영
function applyScore(match,pos,score){
	let id = `#s${match}${pos}`;
	$(id).text(score);
}

// 서버로 점수를 보내는 함수
function sendServer(endPoint, type, data) {

	let postData = {
		type: type,
		tag: data+"",
		name: "overlay"
	}

	$.ajax({
		type: "post",
		url: `/overlay/${endPoint}`,
		data: JSON.stringify(postData),
		headers: {
			"content-type": "application/json; cahrset=utf-8"
		},
		dataType: "json"
	})
		.done((res) => {
			//console.log("success send")
		})
		.fail((err) => {
			//console.log(err)
		});

}

// 승리한 팀 닉네임 정보를 반영하는 함수
function setWinTeam(teamName){
	teamName.forEach((e,i)=>{
		let id = `#w${i}`;
		$(id).text(e);
	});
}

// 우승자 닉네임을 표시하는 함수
function showWinner(){
	let e = document.querySelector("#txtWinner");
	e.animate({
			transform: [
				'translateY(20px)',
				'translateY(0px)'
			],
			opacity: [
				0,
				1
			]
		},
			{
				duration: 1500,
				fill: 'forwards',
				easing: 'ease'
			});
}

