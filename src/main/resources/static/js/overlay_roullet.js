
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

let time=100;
let dura;
let isLast = false;

function roulletRotate(round){
	pickProfile.className="roulletProfile";
	let cycle = Math.floor(Math.random()*20+20);
	
	
	if(r1Pick.length != 0){
		r1RoulletImgs = r1RoulletImgs.filter((e)=>e!=pickProfile);
		pickProfile.remove();
		r1Roullet.style.marginLeft = r1RoulletImgs.length%2 == 0 ? "5.5em" : "0em";
		if(r1RoulletImgs.length == 9){
			$("#r1_mask").animate({width:"650px"},800);
		}else if(r1RoulletImgs.length == 6){
			$("#r1_mask").animate({width:"180px"},800);
		}
	}
	pickIndex = r1RoulletImgs.length%2 == 0 ? (r1RoulletImgs.length/2) - 1 : Math.floor(r1RoulletImgs.length/2);
	if(r1RoulletIndex.length == 1){
		move(round, 1, 0, 0, [10, 3], [time, time*2, time*4]);
		pickProfile = r1RoulletImgs[pickIndex];
		pickProfile.className = "roulletPick";
		PickPart(round);
		return;
	}
	
	move(round, cycle, 0, 0, [10, 3], [time, time*2, time*4]);

}


function move(round, total, currCnt,idx, changeCnt, changeTime){
	
	if(total == currCnt){
		setTimeout(()=>{
			//console.log("");
			pickProfile = r1RoulletImgs[pickIndex];
			pickProfile.className = "roulletPick";
			PickPart(round);	
		}, changeTime[idx]+500);	
		return;
	} 
	if(total - currCnt <= changeCnt[idx]){
		idx++;
	}
	dura = changeTime[idx];
	switch(round){
		case 1:
			requestAnimationFrame(r1Anim);
			break;
		case 2:
			// 2라운드
			break;
		case 3:
			// 3라운드
			break;
	}
	
	if(total == 1) return;
	setTimeout(()=>{
		if(total-1 == currCnt) isLast = true;
		move(round, total, ++currCnt, idx, changeCnt, changeTime);
	},dura);
}

function r1Anim(){
	let term = dura-16.82;
	if(isLast) term = dura;
	// 1라운드
	setTimeout(()=>{
		let clone =  r1RoulletImgs[0].cloneNode(true);
		r1Roullet.insertAdjacentElement('beforeend',clone);
		r1RoulletImgs[0].remove();
		
		r1RoulletImgs = r1RoulletImgs.slice(1);
		r1RoulletImgs.push(clone);
	}, term);
	//let roullet = "#r1_roulletProfile";
	for(let i = 0; i < r1RoulletIndex.length;i++){
		let test = r1RoulletImgs[i].animate({
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
		
		/*test.finished.then(()=>{
			r1RoulletImgs[i].style.transform = 'translateX(0em)';
		});*/
	}
	
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
						element.style.backgroundImage = "url(/img/part/participant/namecard" + r1Pick[r1Pick.length - 1] + ".png)";
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
						element.style.backgroundImage = "url(/img/part/participant/namecard" + r1Pick[r1Pick.length - 1] + ".png)";
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