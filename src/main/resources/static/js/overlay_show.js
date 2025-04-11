function showName(screen) {
	switch (screen) {
		// 수식어 공개
		case 0:
			for (let i = 0; i < 12; i++) {
				let id = `#blackCard${i}`;
				const element = document.querySelector(id);
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
					element.style.backgroundImage = "url(/img/part/participant/namecard" + i + "_2.webp)";

					//sendServer("pickTheme", 0, themeCard[themePickIndex[0]].slice(10));
					//$(id).text(ThemeArr[themeCard[themePickIndex[0]].slice(10)]);
				}, 100);
			}

			break;
		// 닉네임 공개
		case 1:
			if (r3Part.length < 6) break;
			for (let i = 0; i < 6; i++) {
				let id = `#r3_partCard${i}`;
				const element = document.querySelector(id);

				element.animate(
					{
						transform: [
							'rotateY(180deg)',
							'rotateY(0deg)',
						]
					},
					{
						duration: 300,
						fill: 'forwards',
						easing: 'ease'
					}
				);

				setTimeout(() => {
					let imgId = r3Part[i];
					// < 12 ? r3Part[i] + "_1" : r3Part[i];
					element.style.backgroundImage = "url(/img/part/participant/namecard" + imgId + ".webp)";
					element.style.transform = "scaleX(-1)";
					//sendServer("pickTheme", 0, themeCard[themePickIndex[0]].slice(10));
					//$(id).text(ThemeArr[themeCard[themePickIndex[0]].slice(10)]);
				}, 130);
			}
			break;
		// 백팀 공개
		case 2:
			for (let i = 0; i < 6; i++) {
				let id = `#whiteCard${i}`;
				const element = document.querySelector(id);

				element.animate(
					{
						transform: [
							'rotateY(180deg)',
							'rotateY(0deg)',
						]
					},
					{
						duration: 300,
						fill: 'forwards',
						easing: 'ease'
					}
				);

				setTimeout(() => {
					let imgId = 11 + i;
					element.style.backgroundImage = "url(/img/part/participant/namecard" + imgId + ".webp)";
					element.style.transform = "scaleX(-1)";
					//sendServer("pickTheme", 0, themeCard[themePickIndex[0]].slice(10));
					//$(id).text(ThemeArr[themeCard[themePickIndex[0]].slice(10)]);
				}, 130);
			}
			break;
		case 3:
			let totalScoreBlack = document.querySelector("#s41");

			totalScoreBlack.animate({
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
			break;
		case 4:
			let totalScoreWhite = document.querySelector("#s42");

			totalScoreWhite.animate({
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
			break;
		case 5:
			$("#scoerGuide").hide();
			let totalScoreGroup = document.querySelector("#totalScore");

			totalScoreGroup.animate({
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
			break;
	}
}

function hideName(screen) {
	switch (screen) {
		// 수식어 숨기기
		case 0:
			for (let i = 0; i < 12; i++) {
				let id = `#blackCard${i}`;
				const element = document.querySelector(id);
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
					element.style.backgroundImage = "url(/img/theme/theme_back_reverse.webp)";

					//sendServer("pickTheme", 0, themeCard[themePickIndex[0]].slice(10));
					//$(id).text(ThemeArr[themeCard[themePickIndex[0]].slice(10)]);
				}, 100);
			}

			break;
		// 닉네임 숨기기
		case 1:
			if (r3Part.length < 6) break;
			for (let i = 0; i < 6; i++) {
				let id = `#r3_partCard${i}`;
				const element = document.querySelector(id);

				element.animate(
					{
						transform: [
							'rotateY(0deg)',
							'rotateY(180deg)',
						]
					},
					{
						duration: 300,
						fill: 'forwards',
						easing: 'ease'
					}
				);

				setTimeout(() => {
					element.style.backgroundImage = "url(/img/theme/theme_back_reverse.webp)";
					//sendServer("pickTheme", 0, themeCard[themePickIndex[0]].slice(10));
					//$(id).text(ThemeArr[themeCard[themePickIndex[0]].slice(10)]);
				}, 130);
			}
			break;
		// 백팀 숨기기
		case 2:
			for (let i = 0; i < 6; i++) {
				let id = `#whiteCard${i}`;
				const element = document.querySelector(id);

				element.animate(
					{
						transform: [
							'rotateY(0deg)',
							'rotateY(180deg)',
						]
					},
					{
						duration: 300,
						fill: 'forwards',
						easing: 'ease'
					}
				);

				setTimeout(() => {
					element.style.backgroundImage = "url(/img/theme/theme_back_reverse.webp)";
					//sendServer("pickTheme", 0, themeCard[themePickIndex[0]].slice(10));
					//$(id).text(ThemeArr[themeCard[themePickIndex[0]].slice(10)]);
				}, 130);
			}
			break;
		case 3:
			let totalScoreBlack = document.querySelector("#s41");

			totalScoreBlack.animate({
				opacity: [
					1,
					0
				]
			},
				{
					duration: 10,
					fill: 'forwards',
					easing: 'ease'
				});
			break;
		case 4:
			let totalScoreWhite = document.querySelector("#s42");

			totalScoreWhite.animate({
				opacity: [
					1,
					0
				]
			},
				{
					duration: 10,
					fill: 'forwards',
					easing: 'ease'
				});
			break;
		case 5:
			let totalScoreGroup = document.querySelector("#totalScore");

			totalScoreGroup.animate({
				opacity: [
					1,
					0
				]
			},
				{
					duration: 10,
					fill: 'forwards',
					easing: 'ease'
				});
				
			$("#scoerGuide").show();
			break;
	}
}

function showFace(match) {
	let e1 = document.querySelector(`#r1m${match}1`);
	let e2 = document.querySelector(`#r1m${match}2`);

	let e1Anim = e1.animate({ opacity: [0] }, { duration: 300, fill: "forwards", easing: "ease" });
	let e2Anim = e2.animate({ opacity: [0] }, { duration: 300, fill: "forwards", easing: "ease" });

	e1Anim.finished.then(() => {
		e1.style.backgroundImage = "url(/img/part/participant/namecard" + r1Pick[(match * 2) - 2] + "_1.webp)"
		e1.animate({ opacity: [1] }, { duration: 300, fill: "forwards", easing: "ease" });
	});

	e2Anim.finished.then(() => {
		e2.style.backgroundImage = "url(/img/part/participant/namecard" + r1Pick[(match * 2) - 1] + "_1.webp)"
		e2.animate({ opacity: [1] }, { duration: 300, fill: "forwards", easing: "ease" });
	});
}