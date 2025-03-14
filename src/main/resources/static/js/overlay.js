/**
 * 
 */
let drawScreen = []; // 0 : 로고 표시, 1 : 1라운드, 2 : 1라운드, 3 : 2라운드, 4 : 2라운드, 5 : 테마 추첨, 6 : 파이널
let currScreen;
let r1RoulletIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let r1RoulletHideArr = [0,1,2,3,4,5,6,7,8,9,10,11];
let r1HideOrder = [11,0,10,1,9,2,8,3,7,4,6,5];
let r1Pick = [];
let r2BlackRoulletIndex = [];
let r2WhiteRoulletIndex = [0, 1, 2, 3, 4, 5];
let themeCard = [];

let pickProfile;

let r1Roullet;
let r2bRoullet;
let r2wRoullet;

let r1RoulletImgs = [];
let r2BlackImgs = [];
let r2WhiteImgs = [];

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
	for (let i = 0; i < 8; i++) {
		let id = "#screen" + i
		drawScreen.push($(id));
	}

	// 1라운드 흑팀 룰렛 이미지 삽입
	for (let i = 0; i < r1RoulletIndex.length; i++) {
		let roulletProfileId = "#r1_roulletProfile" + i;
		let img = new Image();
		img.src = "/img/roullet/black/roullet" + r1RoulletIndex[i]+".webp";
		
		let element = document.querySelector(roulletProfileId);
		element.src= img.src;

		r1RoulletImgs.push(element);
	}
	r1Roullet = document.querySelector("#r1RoulletOutter");
	
	// 2라운드 백팀 룰렛 이미지 삽입
	for (let i = 0; i < r2WhiteRoulletIndex.length; i++) {
		let roulletProfileId = "#r2w_roulletProfile" + i;
		let blackRoulletProfileId = "r2b_roulletProfile"+i;
		let img = new Image();
		img.src = "/img/roullet/white/roullet" + r1RoulletIndex[i]+".webp";
			
		let element1 = document.querySelector(roulletProfileId);
		element1.src= img.src;
		r2WhiteImgs.push(element1);
		
		let element2 = document.querySelector(blackRoulletProfileId);
		r2BlackImgs.push(element2);
	}
	pickProfile = r1RoulletImgs[5];

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
	});

	eventSource.addEventListener("drawParticipant", (event) => {
		//대진표 뽑기
	});

	eventSource.addEventListener("drawCard", (event) => {
		// 카드 뽑기
		if (event.data == "0") {
			// 리셋
		} else {			
			checkIsFull().then(()=>roulletRotate(Number(event.data)));
		}
	});

	eventSource.addEventListener("drawTheme", (event) => {
		// 테마 뽑기

		if (event.data === "1") {
			// 카드 고르기
			PickTheme();
		} else if (event.data === "0") {
			console.log("theme : " + event.data);
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
	});

	eventSource.addEventListener("rsp", (event) => {
		console.log(event.data);
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

	//$("#screen5").css("visibility", "visible");
});

function setBraketNameCard(tag){
	
	let idx = 0;
	switch(tag){
		case "2":
			if(r1Pick.length != 12){
				// 테스트 데이터
				r1Pick = [2,3,4,1,5,8,7,6,9,10,11,0];
			}
			// 1라운드
			let id = "#r1m";
			let match = 6;
			let i = 1;
			
			let r1Braket = setInterval(()=>{
				let e1 = document.querySelector(id+i+"1");
				let e2 = document.querySelector(id+i+"2");
				//console.log(e1+", "+""+e2);
				$(id+i+"1").css("background-image","url(/img/part/black/namecard"+r1Pick[idx++]+".png)");
				$(id+i+"2").css("background-image","url(/img/part/black/namecard"+r1Pick[idx++]+".png)");
				e1.animate({
					transform:[
						'translateY(20px)',
						'translateY(0px)'	
					],
					opacity:[
						0,
						1
					]
				},
				{
					duration: 300,
					fill: 'forwards',
					easing: 'ease'
				});
				e2.animate({
					transform:[
						'translateY(20px)',
						'translateY(0px)'	
					],
					opacity:[
						0,
						1
					]
				},
				{
					duration: 300,
					fill: 'forwards',
					easing: 'ease'
				});
				
				i++;
				if(i > match)clearInterval(r1Braket);
			},600);
				
			
			break;
		case "4":
			// 2라운드
			
			break;
			
	}
}

function drawn1RoundProfile() {
	let cycle = Math.floor(Math.random() * 15 + 20);
	let count = 1;

	let roullet = setInterval(() => {

	});

}

// 테마 섞는 함수
function drawnTheme() {
	let shuffleCount = Math.floor(Math.random() * 10 + 10);
	let count = 0;

	let timer = setInterval(() => {
		count++;
		let target1 = Math.floor(Math.random() * themeCard.length);
		let target2 = Math.floor(Math.random() * themeCard.length);
		while (target1 == target2)
			target2 = Math.floor(Math.random() * themeCard.length);

		//console.log(themeCard);
		let tmp = themeCard[target1];
		themeCard[target1] = themeCard[target2];
		themeCard[target2] = tmp;

		//console.log(themeCard);

		//console.log(themeCard[target1] + ", " + themeCard[target2]);

		let element1 = document.querySelector(themeCard[target1]);
		let element2 = document.querySelector(themeCard[target2]);

		const element1Top = themePos[target1][0];
		const element1Left = themePos[target1][1];

		const element2Top = themePos[target2][0];
		const element2Left = themePos[target2][1];

		let distance1Y = element1Top - element2Top;
		let distance1X = element1Left - element2Left;
		let distance2Y = element2Top - element1Top;
		let distance2X = element2Left - element1Left;

		//console.log(element1Top + ',' + element1Left + '   ' + element2Top + ',' + element2Left);

		element1.animate(
			{
				transform: [
					'translate(0px,0px)',
					'translate(' + distance1X + 'px,' + distance1Y + 'px)'
				]
			},
			{
				duration: 300,
				fill: 'forwards',
				easing: 'ease'
			}
		)
		$(themeCard[target1]).css("margin-top", themePos[target2][0]);
		$(themeCard[target1]).css("margin-left", themePos[target2][1]);
		element2.animate(
			{
				transform: [
					'translate(0px,0px)',
					'translate(' + distance2X + 'px,' + distance2Y + 'px)'
				]
			},
			{
				duration: 300,
				fill: 'forwards',
				easing: 'ease'
			}
		);
		$(themeCard[target2]).css("margin-top", themePos[target1][0]);
		$(themeCard[target2]).css("margin-left", themePos[target1][1]);
		if (count >= shuffleCount)
			clearInterval(timer);

	}, 300);

}
// 카드 뽑는 함수
function PickTheme() {
	let themePickIndex = [0, 1, 2, 3, 4, 5];

	let currSelect = 0;

	for (let i = 0; i < 3; i++) {
		let target = themePickIndex[Math.floor(Math.random() * themePickIndex.length)];
		themePickIndex = themePickIndex.filter((e) => e != target);
		//console.log(target);
		//console.log(themePickIndex);
	}


	let i = 0;
	let open = setInterval(() => {
		const element = document.querySelector(themeCard[i]);

		if (themePickIndex.includes(i)) {

			let fromTop = Number(element.style.marginTop.split('p')[0]);
			let fromLeft = Number(element.style.marginLeft.split('p')[0]);
			//console.log(themeCard[i]+":"+fromTop+","+fromLeft);

			let toTop = pickPos[currSelect][0];
			let toLeft = pickPos[currSelect][1];
			//console.log(pickPos[currSelect]);
			let distanceY = fromTop - toTop;
			let distanceX = fromLeft - toLeft;

			//console.log("X : " + distanceX + ", Y : " + distanceY)
			element.animate(
				{
					transform: [
						'translate(0px, 0px)',
						'translate(' + distanceX * -1 + 'px,' + distanceY * -1 + 'px)'
					]
				},
				{
					duration: 300,
					fill: 'forwards',
					easing: 'ease'
				}
			);



			console.log($(themeCard[i]));

			currSelect++;
		} else {
			$(themeCard[i]).fadeOut('fast');
		}
		i++;
		if (i >= 6) clearInterval(open);
	}, 100);


	setTimeout(() => {
		const element = document.querySelector(themeCard[themePickIndex[0]]);
		$(themeCard[themePickIndex[0]]).css("margin-top", pickPos[0][0]);
		$(themeCard[themePickIndex[0]]).css("margin-left", pickPos[0][1]);

		element.animate(
			{
				transform: [
					'rotateY(0deg)',
					'rotateY(180deg)'
				]
			},
			{
				duration: 300,
				fill: 'forwards',
				easing: 'ease'
			}
		);
		setTimeout(() => {
			element.style.backgroundImage = "url(/img/theme/" + themeCard[themePickIndex[0]].slice(1) + ".png)";
		}, 130);
	}, 1800);

	setTimeout(() => {
		const element = document.querySelector(themeCard[themePickIndex[1]]);
		$(themeCard[themePickIndex[1]]).css("margin-top", pickPos[1][0]);
		$(themeCard[themePickIndex[1]]).css("margin-left", pickPos[1][1]);
		element.animate(
			{
				transform: [
					'rotateY(0deg)',
					'rotateY(180deg)'
				]
			},
			{
				duration: 300,
				fill: 'forwards',
				easing: 'ease'
			}
		);
		setTimeout(() => {
			element.style.backgroundImage = "url(/img/theme/" + themeCard[themePickIndex[1]].slice(1) + ".png)";
		}, 130);
	}, 2400);

	setTimeout(() => {
		const element = document.querySelector(themeCard[themePickIndex[2]]);
		$(themeCard[themePickIndex[2]]).css("margin-top", pickPos[2][0]);
		$(themeCard[themePickIndex[2]]).css("margin-left", pickPos[2][1]);
		element.animate(
			{
				transform: [
					'rotateY(0deg)',
					'rotateY(180deg)'
				]
			},
			{
				duration: 300,
				fill: 'forwards',
				easing: 'ease'
			}
		);
		setTimeout(() => {
			element.style.backgroundImage = "url(/img/theme/" + themeCard[themePickIndex[2]].slice(1) + ".png)";
		}, 130);
	}, 3000);
}

// 테마 리셋하는 테마
function resetThemeCard() {
	themeCard.length = 0;
	for (let i = 0; i < 6; i++) {
		let cardID = "#themeCard" + i;
		$(cardID).css("margin-top", themePos[i][0] + "px");
		$(cardID).css("margin-left", themePos[i][1] + "px");
		$(cardID).css("display", "");


		const element = document.querySelector(cardID);
		element.animate(
			{
				transform: [
					'rotateY(0deg)',
				]
			},
			{
				duration: 10,
				fill: 'forwards',
				easing: 'ease'
			}
		);

		$(cardID).css("background-image", "url(/img/theme/theme_back.png)");

		themeCard.push(cardID);

	}

}

let isFullPick = false;
let pickIndex=5;

async function checkIsFull(){
	if(!isFullPick)return;
	let element = document.querySelector("#r11Profile");
	element.animate({
		transform: [
			'translateY(150%)',
			'translateY(0%)',
		]
	},
	{
		duration: 1000,
		fill: 'forwards',
		easing: 'ease'
	});
	
	element = document.querySelector("#r12Profile");
	element.animate({
		transform: [
			'translateY(150%)',
			'translateY(0%)',
		]
	},
	{
		duration: 1000,
		fill: 'forwards',
		easing: 'ease'
	});
	
	return new Promise((r)=>{
		setTimeout(r,1200)
		isFullPick = false;
	});
}


function roulletRotate(round){
	pickProfile.className="roulletProfile";
	
	if(r1Pick.length != 0){
		r1RoulletImgs = r1RoulletImgs.filter((e)=>e!=pickProfile);
		pickProfile.remove();
		r1Roullet.style.marginLeft = r1RoulletImgs.length%2 == 0 ? "5.5em" : "0em";
		if(r1RoulletImgs.length == 8){
			$("#r1_mask").animate({width:"650px"},800);
		}else if(r1RoulletImgs.length == 4){
			$("#r1_mask").animate({width:"200px"},800);
		}
	}
	pickIndex = r1RoulletImgs.length%2 == 0 ? (r1RoulletImgs.length/2) - 1 : Math.floor(r1RoulletImgs.length/2);
	if(r1RoulletIndex.length == 1){
		move(round);
		pickProfile = r1RoulletImgs[pickIndex];
		pickProfile.className = "roulletPick";
		PickPart(round);
		return;
	}
	
	
	let cycle = Math.floor(Math.random()*20+20);
	let count = 0;
	let time=90;
	
	let rotateRoullet = setInterval(()=>{
		move(round,time);
		count++;
		if(cycle - count <= 10){
			let rotateRoullet2 = setInterval(()=>{
				move(round, time*2);
				count++;
				if(cycle - count <= 3){
					
					clearInterval(rotateRoullet2);
					rotateRoullet = setInterval(()=>{
						move(round, time*4);
						count++;
						if(cycle == count){
							clearInterval(rotateRoullet);
							setTimeout(()=>{
								pickProfile = r1RoulletImgs[pickIndex];
								pickProfile.className = "roulletPick";
								PickPart(round);	
							}, time * 4 + 500);	
						}
						
					},time*4);
				}
				
			},time*2);
			clearInterval(rotateRoullet);	
		}
		
	},time+10);

}

let dura;

function move(round, duration){
	
	switch(round){
		case 1:
			dura = duration;
			requestAnimationFrame(r1Anim);
			break;
		case 2:
			// 2라운드
			break;
		case 3:
			// 3라운드
			break;
	}
}

function r1Anim(){
	let roullet = "#r1_roulletProfile";
	for(let i = 0; i < r1RoulletIndex.length;i++){
		r1RoulletImgs[i].animate({
			transform: [
				'translateX(0em)',
				'translateX(-11em)',
			]
		},
		{
			duration: dura,
			fill: 'none',
			easing: 'linear'
		});
	}
	// 1라운드
	setTimeout(()=>{
		let clone =  r1RoulletImgs[0].cloneNode(true);
		r1Roullet.insertAdjacentElement('beforeend',clone);
		/*r1Roullet.appendChild(clone);
		r1RoulletImgs[0].remove();
		
		r1RoulletImgs = r1RoulletImgs.slice(1);
		r1RoulletImgs.push(clone);*/
		//console.log(r1RoulletImgs);
	}, dura-10);
}


function PickPart(round){
	switch(round){
			case 1:
				pickProfile.animate(
					{
						transform: [
							'scale(1)',
							'scale(1.2)',
							'scale(1)'
						]
					},
					{
						duration: 1000,
						fill: 'forwards',
						easing: 'ease'
				});
				
				let pickImg = pickProfile.src;
				pickImg = pickImg.split("/");
				pickImg = pickImg[pickImg.length-1].split(".")[0];
				pickImg = pickImg.slice(7);
				
				r1Pick.push(pickImg);
				//console.log(r1Pick);
				r1RoulletIndex = r1RoulletIndex.filter((e)=> e!=r1Pick[r1Pick.length - 1]);
				
				setTimeout(()=>{
					if (r1Pick.length % 2 == 1) {
						// 첫번째
						const element = document.querySelector("#r11Profile");
						element.style.backgroundImage = "url(/img/part/black/namecard" + r1Pick[r1Pick.length - 1] + ".png)";
						element.animate(
							{
								transform: [
									'translateY(0)',
									'translateY(150%)',
								]
							},
							{
								duration: 1000,
								fill: 'forwards',
								easing: 'ease'
							}
						);
					} else {
						// 두번째
						const element = document.querySelector("#r12Profile");
						element.style.backgroundImage = "url(/img/part/black/namecard" + r1Pick[r1Pick.length - 1] + ".png)";
						element.animate(
							{
								transform: [
									'translateY(0)',
									'translateY(150%)',
								]
							},
							{
								duration: 1000,
								fill: 'forwards',
								easing: 'ease'
							}
						);
						isFullPick = true;
					}
					
				},2400);				
				break;
			case 2:
				
				break;
			case 3:
				
				break;
		}
}
