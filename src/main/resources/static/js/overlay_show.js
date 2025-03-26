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
					element.style.backgroundImage = "url(/img/part/participant/namecard" +i+ "_2.webp)";
					
					//sendServer("pickTheme", 0, themeCard[themePickIndex[0]].slice(10));
					//$(id).text(ThemeArr[themeCard[themePickIndex[0]].slice(10)]);
				}, 100);
			}

			break;
		// 닉네임 공개
		case 1:
			if(r3Part.length < 6) break;
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
					let imgId = r3Part[i] < 12 ? r3Part[i]+"_1" : r3Part[i];
					element.style.backgroundImage = "url(/img/part/participant/namecard" +imgId+ ".webp)";
					element.style.transform="scaleX(-1)";
					//sendServer("pickTheme", 0, themeCard[themePickIndex[0]].slice(10));
					//$(id).text(ThemeArr[themeCard[themePickIndex[0]].slice(10)]);
				}, 130);
			}
			break;
	}
}

function hideName(screen){
	switch (screen) {
			// 수식어 공개
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
			// 닉네임 공개
			case 1:
				if(r3Part.length < 6) break;
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
						let imgId = r3Part[i] < 12 ? r3Part[i]+"_1" : r3Part[i];
						element.style.backgroundImage = "url(/img/theme/theme_back_reverse.webp)";
						//sendServer("pickTheme", 0, themeCard[themePickIndex[0]].slice(10));
						//$(id).text(ThemeArr[themeCard[themePickIndex[0]].slice(10)]);
					}, 130);
				}
				break;
		}
}