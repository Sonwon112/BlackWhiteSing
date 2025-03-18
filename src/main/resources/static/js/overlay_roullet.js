
let isFullPick = false;
let isFullPick2B = false;
let isFullPick2W = false;

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

async function r2checkIsFull(){
	if(!(isFullPick2B && isFullPick2W))return;
	let element = document.querySelector("#r21Profile");
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
	
	element = document.querySelector("#r22Profile");
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
		isFullPick2B = false;
		isFullPick2W = false;
	});
}


function checkR2PickMatchEnd(round){
	if(r2bPick.length == r2wPick.length && r2bPick.length != 0){
		r2BlackImgs = r2BlackImgs.filter((e)=>e!=r2bPickProfile);
		r2WhiteImgs = r2WhiteImgs.filter((e)=>e!=r2wPickProfile);
		r2bPickProfile.remove();
		r2wPickProfile.remove();
	}
	
	if(round == 2){
		pickIndex = r2bRoulletIndex.length%2 == 0 ? (r2bRoulletIndex.length/2) - 1 : Math.floor(r2bRoulletIndex.length/2);
		r2bRoullet.style.marginLeft = r2bRoulletIndex.length%2 == 1 ? "1.2em" : "11em";
	}else{
		pickIndex = r2wRoulletIndex.length%2 == 0 ? (r2wRoulletIndex.length/2) - 1 : Math.floor(r2wRoulletIndex.length/2);
		r2wRoullet.style.marginLeft = r2wRoulletIndex.length%2 == 1 ? "1.2em" : "11em";
	}
	
	if(round == 2 && r2bRoulletIndex.length == 1){
		move(round, 1);
		console.log(r2bRoulletIndex);
		r2bPickProfile = r2BlackImgs[pickIndex];
		r2bPickProfile.className = "roulletPick";
		PickPart(round);
		return false;
	}
	
	if(round == 3 && r2wRoulletIndex.length == 1){
		move(round, 1);
		r2wPickProfile = r2WhiteImgs[pickIndex];
		r2wPickProfile.className = "roulletPick";
		PickPart(round);
		return false;
	}
	
	return true;
}

let time=100;
let dura;
let isLast = false;

function roulletRotate(round){
	
	let cycle = Math.floor(Math.random()*20+20);
	
	switch(round){
		case 1:
			pickProfile.className="roulletProfile";
			if(r1Pick.length != 0){
				r1RoulletImgs = r1RoulletImgs.filter((e)=>e!=pickProfile);
				pickProfile.remove();
				r1Roullet.style.marginLeft = r1RoulletImgs.length%2 == 0 ? "5.5em" : "0em";
			}
			pickIndex = r1RoulletImgs.length%2 == 0 ? (r1RoulletImgs.length/2) - 1 : Math.floor(r1RoulletImgs.length/2);
			if(r1RoulletIndex.length == 1){
				move(round, 1);
				pickProfile = r1RoulletImgs[pickIndex];
				pickProfile.className = "roulletPick";
				PickPart(round);
				return;
			}
			
			break;
		case 2:{
			let con = checkR2PickMatchEnd(round)
			if(!con) return;
			break;
			}
		case 3:{
			let con = checkR2PickMatchEnd(round)
			if(!con) return;
			break;
			}
			
	}
	
	
	move(round, cycle);

}


let cloneArr=[];
function move(round, total){
	switch (round){
		case 1:
			let remain = total % r1RoulletIndex.length;
			let count = Math.floor(total/r1RoulletIndex.length);
			//console.log(remain+", "+count);
			
			for(let i = 0; i < count; i++){
				for(let j = r1RoulletIndex.length-1; j>=0; j--){
					let clone = r1RoulletImgs[j].cloneNode(true);
					
					r1Roullet.appendChild(clone);
					
					r1RoulletImgs.push
				}
			}
			
			for(let i = r1RoulletIndex.length-1; i < r1RoulletIndex.length-1-remain; i-- ){
				let clone = r1RoulletImgs[j].cloneNode(true);
					
				r1Roullet.appendChild(clone);
					
			}
			
			r1Roullet.animate({
				transform:[
					`translateX(0em)`,
					`translateX(${0.2*(count*r1RoulletIndex.length+remain)})`]
				},
				{
					duration: 2000,
					fill: 'forwards',
					easing: 'ease-in-out'
				});
			
			break;
		case 2:
			break;
		case 3:
			break;
	}
	
	
	
	/*if(total == currCnt){
		setTimeout(()=>{
			//console.log("");
			switch(round){
				case 1 : 
					pickProfile = r1RoulletImgs[pickIndex];
					pickProfile.className = "roulletPick";
					PickPart(round);
					break;
				case 2 : 
					r2bPickProfile = r2BlackImgs[pickIndex];
					//console.log(r2bPickProfile);
					r2bPickProfile.className = "roulletPick";
					PickPart(round);
					break;
				case 3 : 
					r2wPickProfile = r2WhiteImgs[pickIndex];
					r2wPickProfile.className = "roulletPick";
					//console.log(r2wPickProfile);
					PickPart(round);
					break;
			}
			//console.log(pickProfile);
			
				
		}, changeTime[idx]+500);	
		return;
	} 
	
	dura = changeTime[idx];
	switch(round){
		case 1:
			requestAnimationFrame(r1Anim);
			break;
		case 2:
			// 2라운드 흑
			r2Team = 0;
			requestAnimationFrame(r2Anim);
			break;
		case 3:
			// 2라운드 백
			r2Team = 1;
			requestAnimationFrame(r2Anim);
			break;
	}
	
	if(total == 1) return;*/

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
		
		/*test.finished.then(()=>{
			r1RoulletImgs[i].style.transform = 'translateX(0em)';
		});*/
	}
	
}

let r2Team = 0; // 0 : 흑팀 // 1 : 백팀
function r2Anim(){
	let term = dura-16.82;
	if(isLast) term = dura;
	
	//console.log(targetImgs+","+targetRoullet+","+targetIndex);
	
	// 1라운드
	setTimeout(()=>{
		
		let clone = r2Team == 0 ? r2BlackImgs[0].cloneNode(true) : r2WhiteImgs[0].cloneNode(true) ;
		switch(r2Team){
			case 0 :
				r2bRoullet.insertAdjacentElement('beforeend',clone);
				r2BlackImgs[0].remove();
				
				r2BlackImgs = r2BlackImgs.slice(1);
				r2BlackImgs.push(clone);
				break;
			case 1 : 
				r2wRoullet.insertAdjacentElement('beforeend',clone);
				r2WhiteImgs[0].remove();
				
				r2WhiteImgs = r2WhiteImgs.slice(1);
				r2WhiteImgs.push(clone);
				break;
		}
		
	}, term);
	//let roullet = "#r1_roulletProfile";
	switch(r2Team){
		case 0:
			for(let i = 0; i < r2bRoulletIndex.length;i++){
				r2BlackImgs[i].animate({
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
			break;
		case 1:
			for(let i = 0; i < r2wRoulletIndex.length;i++){
				r2WhiteImgs[i].animate({
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
			break;
	}
	
	
}

function pickAnim(picked){
	picked.animate(
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
	
	let pickImg = picked.src;
	pickImg = pickImg.split("/");
	pickImg = pickImg[pickImg.length-1].split(".")[0];
	pickImg = pickImg.slice(7);
	
	return pickImg;
}

function PickPart(round){
	let pickImg;
	switch(round){
			case 1:
				pickImg = pickAnim(pickProfile);
				// 1라운드
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
				//console.log(pickIndex+","+r2bPickProfile);
				pickImg = pickAnim(r2bPickProfile);
				
				r2bPick.push(pickImg);
				console.log("black"+r2bPick);
				r2bRoulletIndex = r2bRoulletIndex.filter((e)=> e!=r2bPick[r2bPick.length - 1]);

				// 2라운드 흑
				setTimeout(()=>{
						// 첫번째
					const element = document.querySelector("#r21Profile");
					element.style.backgroundImage = "url(/img/part/participant/namecard" + r2bPick[r2bPick.length - 1] + ".png)";
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
					isFullPick2B = true;	
				},2400);			
				
				break;
			case 3:
				pickImg = pickAnim(r2wPickProfile);
				
				// 2라운드 백
				r2wPick.push(pickImg);
				console.log("white"+r2wPick);
				r2wRoulletIndex = r2wRoulletIndex.filter((e)=> e!=r2wPick[r2wPick.length - 1]);

				// 2라운드 흑
				setTimeout(()=>{
						// 첫번째
					const element = document.querySelector("#r22Profile");
					element.style.backgroundImage = "url(/img/part/participant/namecard" + r2wPick[r2wPick.length - 1] + ".png)";
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
					isFullPick2W = true;
				},2400);
				
				break;
		}
}

function resetRoullet(round){
	let tmpImg;
	switch(round){
		case 0:
			// 1라운드
			r1Roullet.innerText='';
			
			isFullPick = true;
			checkIsFull();
			r1RoulletImgs = [];
			r1Pick = [];
			
			for(let i = 0; i < backup_r1RuolletIndex.length; i++){
				tmpImg = document.createElement("img");
				tmpImg.id = `r1_roulletProfile${i}`;
				tmpImg.className = "roulletProfile";
				tmpImg.src = "/img/roullet/roullet" + backup_r1RuolletIndex[i]+".webp"
				
				r1RoulletIndex = backup_r1RuolletIndex;
				r1RoulletImgs.push(tmpImg);
				r1Roullet.appendChild(tmpImg);
			}
			break;
		case 2:
			// 2라운드
			isFullPick2B = true;
			isFullPick2W = true;
			r2checkIsFull();
			r2BlackImgs = [];
			r2bPick=[];
			r2WhiteImgs=[];
			r2wPick = [];
			
			r2bRoullet.innerText='';
			r2wRoullet.innerText='';
			
			for(let i = 0; i < backup_r2bRoulletIndex.length; i++){
				tmpImg = document.createElement("img");
				tmpImg.id = `r2b_roulletProfile${i}`;
				tmpImg.className = "roulletProfile";
				tmpImg.src = "/img/roullet/roullet" + backup_r2bRoulletIndex[i]+".webp"
				
				r2bRoulletIndex = backup_r2bRoulletIndex;
				r2BlackImgs.push(tmpImg);
				r2bRoullet.appendChild(tmpImg);
			}
			
			for(let i = 0; i < backup_r2wRoulletIndex.length; i++){
				tmpImg = document.createElement("img");
				tmpImg.id = `r2b_roulletProfile${i}`;
				tmpImg.className = "roulletProfile";
				tmpImg.src = "/img/roullet/roullet" + backup_r2wRoulletIndex[i]+".webp"
				
				r2wRoulletIndex = backup_r2wRoulletIndex;
				r2WhiteImgs.push(tmpImg);
				r2wRoullet.appendChild(tmpImg);
			}
			break;
	}
}
