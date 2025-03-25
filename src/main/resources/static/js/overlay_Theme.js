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



			//console.log($(themeCard[i]));

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
					'rotateY(180deg)',
					'rotateY(0deg)'
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
			sendServer("pickTheme",0,themeCard[themePickIndex[0]].slice(10));
			$("#themeTitle0").text(ThemeArr[themeCard[themePickIndex[0]].slice(10)]);
		}, 130);
		
	}, 1800);

	setTimeout(() => {
		const element = document.querySelector(themeCard[themePickIndex[1]]);
		$(themeCard[themePickIndex[1]]).css("margin-top", pickPos[1][0]);
		$(themeCard[themePickIndex[1]]).css("margin-left", pickPos[1][1]);
		element.animate(
			{
				transform: [
					'rotateY(180deg)',
					'rotateY(0deg)'
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
			sendServer("pickTheme",1,themeCard[themePickIndex[1]].slice(10));
			$("#themeTitle1").text(ThemeArr[themeCard[themePickIndex[1]].slice(10)]);
		}, 130);
	}, 2400);

	setTimeout(() => {
		const element = document.querySelector(themeCard[themePickIndex[2]]);
		$(themeCard[themePickIndex[2]]).css("margin-top", pickPos[2][0]);
		$(themeCard[themePickIndex[2]]).css("margin-left", pickPos[2][1]);
		element.animate(
			{
				transform: [
					'rotateY(180deg)',
					'rotateY(0deg)'
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
			sendServer("pickTheme",2,themeCard[themePickIndex[2]].slice(10));
			$("#themeTitle2").text(ThemeArr[themeCard[themePickIndex[2]].slice(10)]);
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
