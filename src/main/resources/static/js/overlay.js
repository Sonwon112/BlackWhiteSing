/**
 * 
 */
let drawScreen = []; // 0 : 로고 표시, 1 : 1라운드, 2 : 1라운드, 3 : 2라운드, 4 : 2라운드, 5 : 테마 추첨, 6 : 파이널
let currScreen;
let r1RoulletIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let r1Pick = [];

let r2BlackRoulletIndex = [];
let r2WhiteRoulletIndex = [0, 1, 2, 3, 4, 5];
let themeCard = [];

// 1라운드
let r1_roulletMask;
let r1_imageRoullet;
let r1_profileWidth;
let r1_roulletWidth;
let cloneList;

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
		let imgName = "roullet/black/roullet" + r1RoulletIndex[i];
		$(roulletProfileId).attr("src", "/img/" + imgName + ".webp");
	}
	
	// 자연스러운 회전 룰렛을 위해 복제
	r1_imageRoullet = document.querySelector("#r1_imageRoullet");
	r1_roulletMask = document.querySelector("#r1_roulletMask");
	cloneList = document.querySelectorAll("#r1_imageRoullet img");
	for(let i = 0; i < 12; i++){
		let clone = cloneList[i].cloneNode(true);
		r1_imageRoullet.appendChild(clone);	
	}
	
	

	// 2라운드 백팀 룰렛 이미지 삽입
	for (let i = 0; i < r2WhiteRoulletIndex.length; i++) {
		let roulletProfileId = "#r2w_roulletProfile" + i;
		let imgName = "roullet/white/roullet" + r2WhiteRoulletIndex[i];
		$(roulletProfileId).attr("src", "/img/" + imgName + ".webp");
	}



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

		switch (screenIndex) {
			case 1:
				
				break;

		}

		drawScreen[screenIndex].fadeIn(1500);
		currScreen = drawScreen[screenIndex];
	});

	eventSource.addEventListener("drawParticipant", (event) => {
		//대진표 뽑기
	});

	eventSource.addEventListener("drawCard", (event) => {
		let index = Number(event.data);
		
		switch(index){
			case 0 :
				// 리셋
				
				break;
			case 1 :
				// 1라운드
				
				

				//console.log(`1라운드 룰렛 ${r1_imageRoullet}, 프로필 폭 ${r1_profileWidth}, 전체 길이 ${r1_roulletWidth}`)
				
				checkIsFull().then(() => roulletRotate(Number(index)));
				break;
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

// 테마 리셋하는 함수
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

async function checkIsFull() {
	if (!isFullPick) return;
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

	return new Promise((r) => {
		setTimeout(r, 1200)
		isFullPick = false;
	});
}
let currIdx = 12;
let translate = 0;
const speed = 150;
let pickId = "";
let appendIdx = 0;

function move(timing_func){
	currIdx += -1;
	translate += r1_profileWidth*-1;
	r1_imageRoullet.style.transform = `translateX(${translate}px)`;
	r1_imageRoullet.style.transition = `all ${speed}ms ${timing_func}`;
	
	let first = r1RoulletIndex[0];
	r1RoulletIndex = r1RoulletIndex.slice(1);
	r1RoulletIndex.push(first);

	if (currIdx === 0) {
		setTimeout(() => {
			r1_imageRoullet.style.transition = 'none 0ms ease';
			currIdx = r1RoulletIndex.length;
			translate = 0;
			r1_imageRoullet.style.transform = `translateX(${translate}px)`;
		}, speed*0.8);
	}
}

function roulletRotate(round) {
	switch (round) {
		case 1:
			if(pickId != ""){
				let targets = document.querySelectorAll(pickId);
				targets.forEach((e)=>{
					e.remove();
				})
			}
			let tmp = cloneList[0]
			r1_profileWidth = tmp.clientWidth;
			r1_roulletWidth = r1_profileWidth * r1RoulletIndex.length;
			r1_imageRoullet.style.width = `${r1_roulletWidth}px`;
			
			let maskWidth = r1_roulletMask.clientWidth;
			
			r1_roulletMask.style.width = maskWidth-(r1_profileWidth*r1Pick.length)+"px";
			console.log(r1_roulletMask.style.width+", "+r1_profileWidth*r1Pick.length);
			
			let cycle = Math.floor(Math.random() * 20 + 30);
			let count = 0;
			
			r1_imageRoullet.style.transform = `translateX(${translate+(r1_profileWidth)}px)`;
			r1_imageRoullet.style.transition = `all 400ms ease-in-out`;
			
			let r1_roullet = setInterval(() => {
				//console.log(`${cycle} 중 ${count}번 도는중 ${currIdx}`)
				move('ease-in')

				count++;
				if (cycle - count < 8){
					clearInterval(r1_roullet);
					r1_roullet = setInterval(() => {
					//console.log(`${cycle} 중 ${count}번 도는중 ${currIdx}`)
					move('ease-in')
					count++;
					if (cycle - count < 5) {
						clearInterval(r1_roullet);
						r1_roullet = setInterval(() => {
						console.log(`${cycle} 중 ${count}번 도는중 ${currIdx}`)
						move('ease-in')
						count++;
						if (count == cycle+1){
							clearInterval(r1_roullet);
							setTimeout(()=>PickPart(round),1000);
						}
						}, speed * 4);
					}
				}, speed*1.5);
				} 

			}, speed);
			
			

			break;

	}
}

let pos = 5;
function PickPart(round) {
	switch (round) {
		case 1:
			pickId ="#r1_roulletProfile"+r1RoulletIndex[pos];
			
			if(r1RoulletIndex[pos] >=5 )pos--;
			console.log(r1RoulletIndex+", "+pickId);
			
			const pickProfile = document.querySelectorAll(pickId);
			pickProfile.forEach((e)=>{
				e.className = "roulletPick"
				e.animate(
				{
					transform: [
						'scale(1)',
						'scale(1.2)',
						'scale(1)'
					]
				},
				{
					duration: 1200,
					fill: 'forwards',
					easing: 'ease'
				});
			});
			

			let pickImg = $(pickId).attr("src").split("/")[4];
			pickImg = pickImg.split(".")[0];
			pickImg = pickImg.slice(7);

			r1Pick.push(pickImg);
			//console.log(r1Pick);
			r1RoulletIndex = r1RoulletIndex.filter((e) => e != r1Pick[r1Pick.length - 1]);

			setTimeout(() => {
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

			}, 2400);
			
			break;
		case 2:

			break;
		case 3:

			break;
	}
}
