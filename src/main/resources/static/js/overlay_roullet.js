
let isFullPick = false;
let isFullPick2B = false;
let isFullPick2W = false;

let pickIndex=5;


let cardDownDura = 800;
let cardWaitDura = 1600;
let cardMoveDistance = 170;

// 1라운드에서 인원 2명이 모드 골라졌을 때 네임카드를 위로 올리는 애니메이션 실행 함수
async function checkIsFull(){
	if(!isFullPick)return;
	let element = document.querySelector("#r11Profile");
	element.animate({
		transform: [
			`translateY(${cardMoveDistance}%)`,
			'translateY(0%)',
		]
	},
	{
		duration: cardDownDura,
		fill: 'forwards',
		easing: 'ease'
	});
	
	element = document.querySelector("#r12Profile");
	element.animate({
		transform: [
			`translateY(${cardMoveDistance}%)`,
			'translateY(0%)',
		]
	},
	{
		duration: cardDownDura,
		fill: 'forwards',
		easing: 'ease'
	});
	
	
	
	return new Promise((r)=>{
		setTimeout(r,1200);
		
		isFullPick = false;
	});
}

// 2라운드에서 1개 매치에 모든 인원이 선택이 완료되었을 때 카드를 위로 올리는 애니메이션 실행 함수
async function r2checkIsFull(){
	if(!(isFullPick2B && isFullPick2W))return;
	let element = document.querySelector("#r21Profile");
	element.animate({
		transform: [
			`translateY(${cardMoveDistance}%)`,
			'translateY(0%)',
		]
	},
	{
		duration: cardDownDura,
		fill: 'forwards',
		easing: 'ease'
	});
	
	element = document.querySelector("#r22Profile");
	element.animate({
		transform: [
			`translateY(${cardMoveDistance}%)`,
			'translateY(0%)',
		]
	},
	{
		duration: cardDownDura,
		fill: 'forwards',
		easing: 'ease'
	});
	
	
	return new Promise((r)=>{
		setTimeout(r,1200);
		isFullPick2B = false;
		isFullPick2W = false;
	});
	
}

// 2라운드에서 마지막 남은 항목인지 아닌지 판단하고 맞다면 남은 하나를 고르고 아니면 룰렛을 돌리는 함수
// 룰렛을 돌릴때 margin-left 값과 pickIndex가 항목의 수에 따라 바뀌기 때문에 값 변경도 수행
function checkR2PickMatchEnd(round){
	
	if(r2bPick.length > 2 && (r2bPick.length == r2wPick.length)){
		$("#r2b_mask").animate({width:`${16*11*(6-r2bPick.length)}px`},800);
		$("#r2w_mask").animate({width:`${16*11*(6-r2wPick.length)}px`},800);
		
	}
		
	
	if(r2bPick.length == r2wPick.length && r2bPick.length != 0){
		//console.log(r2bPickProfile+", "+r2wPickProfile);
		
		r2bPickProfile.remove();
		r2wPickProfile.remove();
		
		r2BlackImgs = r2BlackImgs.filter((e)=>e!=r2bPickProfile);
		r2WhiteImgs = r2WhiteImgs.filter((e)=>e!=r2wPickProfile);
		$("#r2Match").text(`Match${r2bPick.length+1}`);
	}
	
	if(round == 2){
		pickIndex = r2bRoulletIndex.length%2 == 0 ? (r2bRoulletIndex.length/2) - 1 : Math.floor(r2bRoulletIndex.length/2);
		
		if(r2bPick.length < 3)
			r2bRoullet.style.marginLeft = r2bRoulletIndex.length%2 == 1 ? "-11em" : "11em";
		else
			r2bRoullet.style.marginLeft = r2bRoulletIndex.length%2 == 1 ? "0em" : "11em";
	}else{
		pickIndex = r2wRoulletIndex.length%2 == 0 ? (r2wRoulletIndex.length/2) - 1 : Math.floor(r2wRoulletIndex.length/2);
		
		if(r2wPick.length < 3)
			r2wRoullet.style.marginLeft = r2wRoulletIndex.length%2 == 1 ? "-11em" : "11em";
		else
			r2wRoullet.style.marginLeft = r2wRoulletIndex.length%2 == 1 ? "0em" : "11em";
	}
	
	if(round == 2 && r2bPick.length == 5){
		//console.log(r2BlackImgs);
		for(let i = 0; i < r2BlackImgs.length-1; i++){
			r2BlackImgs[i].remove();
		}
		r2BlackImgs = r2BlackImgs.slice(r2BlackImgs.length-1)
		r2bRoullet.animate({transform:[`translateX(0em)`]},{duration: 100,fill: 'forwards',easing: 'linear'});
		
		//console.log(r2BlackImgs);
		
		//move(round, 1);
		
		r2bPickProfile = r2BlackImgs[0];
		r2bPickProfile.className = "roulletPick";
		PickPart(round);
		return false;
	}
	
	if(round == 3 && r2wPick.length == 5){
		//console.log(r2WhiteImgs);
		for(let i = 0; i < r2WhiteImgs.length-1; i++){
			r2WhiteImgs[i].remove();
		}
		r2WhiteImgs = r2WhiteImgs.slice(r2WhiteImgs.length-1)
		r2wRoullet.animate({transform:[`translateX(0em)`]},{duration: 100,fill: 'forwards',easing: 'linear'});
		
		//console.log(r2wRoulletIndex);
		
		//move(round, 1);
		r2wPickProfile = r2WhiteImgs[0];
		r2wPickProfile.className = "roulletPick";
		PickPart(round);
		return false;
	}
	
	
	
	return true;
}

let time=100;
let dura;
let isLast = false;
// 마지막 남은 항목인지 아닌지 판단하고 맞다면 남은 하나를 고르고 아니면 룰렛을 돌리는 함수
// 룰렛을 돌릴때 margin-left 값과 pickIndex가 항목의 수에 따라 바뀌기 때문에 값 변경도 수행
function roulletRotate(round){
	
	let cycle = Math.floor(Math.random()*30+40);
	
	switch(round){
		case 1:
			$("#r1Match").text(`Match${Math.floor(r1Pick.length/2) + 1}`);
			$("#r1_mask").animate({width:`${16*11*(12-r1Pick.length)}px`},800);
			pickProfile.className="roulletProfile";
			if(r1Pick.length != 0){
				r1RoulletImgs = r1RoulletImgs.filter((e)=>e!=pickProfile);
				pickProfile.remove();
				if(r1Pick.length < 2) r1Roullet.style.marginLeft = "-1em"; 
				else r1Roullet.style.marginLeft = r1Pick.length%2 == 0 ? "5.5em" : "-0.5em";
			}
			if(r1RoulletIndex.length == 1){
				//move(round, 1);
				for(let i = 0; i < r1RoulletImgs.length-1; i++){
					r1RoulletImgs[i].remove();
				}
				r1RoulletImgs = r1RoulletImgs.slice(r1RoulletImgs.length-1)
				r1Roullet.animate({transform:[`translateX(0em)`]},{duration: 100,fill: 'forwards',easing: 'linear'});
				
				pickProfile = r1RoulletImgs[0];
				//console.log(pickProfile);
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
	
	//console.log("spin");
	move(round, cycle);

}


let cloneArr=[];
let cloneBArr = [];
let cloneWArr = [];
// 실제로 회전을 구현하는 함수
function move(round, total){
	//console.log(total);
	let partLen = 0;
	let remain = 0;
	let count  = 0;
	let partLength = 0;
	switch (round){
		case 1:
			partLen = (12-r1Pick.length);
			if(cloneArr.length != 0){
				//console.log(r1RoulletImgs)
				r1RoulletImgs.forEach((e,i)=>{
				if(i > r1RoulletImgs.length - (partLen*2-1) && i < r1RoulletImgs.length-(partLen)) return;
				e.remove();
				});
				
				r1RoulletImgs = r1RoulletImgs.slice(r1RoulletImgs.length - (partLen*2), r1RoulletImgs.length-partLen)
				//console.log(r1RoulletImgs)
				r1Roullet.animate({transform:[`translateX(0em)`]},{duration: 0,fill: 'forwards',easing: 'linear'});
				cloneArr = [];
			}
			
			
			remain = total % r1RoulletIndex.length;
			count = Math.floor(total/r1RoulletIndex.length);
			//console.log(remain+", "+count);
			
			for(let i = 0; i < count+1; i++){
				for(let j = 0; j < r1RoulletIndex.length; j++){
					let clone = r1RoulletImgs[j].cloneNode(true);
					r1Roullet.appendChild(clone);
					r1RoulletImgs.push(clone);
					cloneArr.push(clone);
				}
			}
			
			for(let i = 0; i < remain ; i++ ){
				let clone = r1RoulletImgs[i].cloneNode(true);
				r1Roullet.appendChild(clone);
				r1RoulletImgs.push(clone);
				cloneArr.push(clone);
			}
			
			partLength = (-11*(count*partLen+remain))/10;
			
			let r1Anims = r1Roullet.animate(
				[{transform:`translateX(0em)`, offset : 0},
				{transform:`translateX(${partLength * 4}em)`, offset : 0.1},
				{transform:`translateX(${partLength * 6}em)`, offset : 0.3},
				{transform:`translateX(${partLength * 8}em)`, offset : 0.6},
				{transform:`translateX(${partLength * 10}em)`, offset : 1}],
				{duration: 100*total,fill: 'forwards',easing: 'ease'}
				);
			
			r1Anims.finished.then(()=>{
				setTimeout(()=>{
					if(r1Pick.length == 0) pickIndex = r1RoulletImgs.length - (7+partLen) ;
					else pickIndex = partLen%2 == 0 ? r1RoulletImgs.length - ((partLen/2)+partLen-1) : r1RoulletImgs.length - (Math.floor(partLen/2)+(partLen)-1);
					//console.log(pickIndex);
					pickProfile = r1RoulletImgs[pickIndex];
					pickProfile.className = "roulletPick";
					PickPart(round);	
				}, 500);
				
			});
				
			break;
		case 2:
			let partbLen = (6-r2bPick.length);
			if(cloneBArr.length != 0){
				//console.log(r2BlackImgs)
				r2BlackImgs.forEach((e,i)=>{
					if(i > r2BlackImgs.length - (partbLen*2-1) && i < r2BlackImgs.length-(partbLen)) return;
					e.remove();
				});
				
				r2BlackImgs = r2BlackImgs.slice(r2BlackImgs.length - (partbLen*2), r2BlackImgs.length-partbLen);
				//console.log(r2BlackImgs)
				r2bRoullet.animate({transform:[`translateX(0em)`]},{duration: 0,fill: 'forwards',easing: 'linear'});
				cloneBArr = [];
			}
			
			
			remain = total % r2bRoulletIndex.length;
			count = Math.floor(total/r2bRoulletIndex.length);
			
			
			for(let i = 0; i < count+1; i++){
				for(let j = 0; j < r2bRoulletIndex.length; j++){
					let clone = r2BlackImgs[j].cloneNode(true);
					r2bRoullet.appendChild(clone);
					r2BlackImgs.push(clone);
					cloneBArr.push(clone);
				}
			}
			
			for(let i = 0; i < remain ; i++ ){
				let clone = r2BlackImgs[i].cloneNode(true);
				r2bRoullet.appendChild(clone);
				r2BlackImgs.push(clone);
				cloneBArr.push(clone);
			}
			
			partLength = (-11*(count*partbLen+remain))/10;
			//console.log(total+","+remain+", "+count);
			//console.log(partbLen+", "+partLength);
			
			let r2Anims = r2bRoullet.animate(
				[{transform:`translateX(0em)`, offset : 0},
				{transform:`translateX(${partLength * 1}em)`, offset : 0.1},
				{transform:`translateX(${partLength * 5}em)`, offset : 0.3},
				{transform:`translateX(${partLength * 8}em)`, offset : 0.6},
				{transform:`translateX(${partLength * 10}em)`, offset : 1}],
				{duration: 100*total,fill: 'forwards',easing: 'ease'}
				);
			
			r2Anims.finished.then(()=>{
				setTimeout(()=>{
					if(r2bPick.length == 0) pickIndex = r2BlackImgs.length - (5+partbLen) ;
					else pickIndex = partbLen%2 == 0 ? r2BlackImgs.length - ((partbLen/2)+partbLen-1) : r2BlackImgs.length - (Math.floor(partbLen/2)+partbLen-1);
					//console.log(pickIndex);
					r2bPickProfile = r2BlackImgs[pickIndex];
					r2bPickProfile.className = "roulletPick";
					PickPart(round);	
				}, 500);
				
			});
			
			break;
		case 3:
			let parWtLen = (6-r2wPick.length);
			if(cloneWArr.length != 0){
				//console.log(r2WhiteImgs)
				r2WhiteImgs.forEach((e,i)=>{
				if(i > r2WhiteImgs.length - (parWtLen*2-1) && i < r2WhiteImgs.length-(parWtLen)) return;
				e.remove();
				});
				
				r2WhiteImgs = r2WhiteImgs.slice(r2WhiteImgs.length - (parWtLen*2), r2WhiteImgs.length-partLen)
				//console.log(r2WhiteImgs)
				r2wRoullet.animate({transform:[`translateX(0em)`]},{duration: 0,fill: 'forwards',easing: 'linear'});
				cloneWArr = [];
			}
			
			
			remain = total % r2wRoulletIndex.length;
			count = Math.floor(total/r2wRoulletIndex.length);
			
			//console.log(r2WhiteImgs);
			for(let i = 0; i < count+1; i++){
				for(let j = 0; j < r2wRoulletIndex.length; j++){
					let clone = r2WhiteImgs[j].cloneNode(true);
					r2wRoullet.appendChild(clone);
					r2WhiteImgs.push(clone);
					cloneWArr.push(clone);
				}
			}
			
			for(let i = 0; i < remain ; i++ ){
				let clone = r2WhiteImgs[i].cloneNode(true);
				r2wRoullet.appendChild(clone);
				r2WhiteImgs.push(clone);
				cloneWArr.push(clone);
			}
			
			partLength = (-11*(count*parWtLen+remain))/10;
			//console.log(total+","+remain+", "+count);
			//console.log(partLen+", "+partLength);
			
			let r3Anims = r2wRoullet.animate(
				[{transform:`translateX(0em)`, offset : 0},
				{transform:`translateX(${partLength * 1}em)`, offset : 0.1},
				{transform:`translateX(${partLength * 5}em)`, offset : 0.3},
				{transform:`translateX(${partLength * 8}em)`, offset : 0.6},
				{transform:`translateX(${partLength * 10}em)`, offset : 1}],
				{duration: 100*total,fill: 'forwards',easing: 'ease'}
				);
			
			r3Anims.finished.then(()=>{
				setTimeout(()=>{
					if(r2wPick.length == 0) pickIndex = r2WhiteImgs.length - (5+parWtLen) ;
					else pickIndex = parWtLen%2 == 0 ? r2WhiteImgs.length - ((parWtLen/2)+parWtLen-1) : r2WhiteImgs.length - (Math.floor(parWtLen/2)+(parWtLen)-1);
					//console.log(pickIndex);
					r2wPickProfile = r2WhiteImgs[pickIndex];
					r2wPickProfile.className = "roulletPick";
					PickPart(round);	
				}, 500);
				
			});
			
			
			break;
	}

}

// 카드가 선택 되었을 때 강조하는 애니메이션 실행하고 골라진 카드의 인덱스 추출 수행
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


// 중앙에 위치한 이미지를 골라서 네임카드에 이미지 반영후 화면에 표시하는 함수
function PickPart(round){
	let pickImg;
	let element;
	switch(round){
			case 1:
				pickImg = pickAnim(pickProfile);
				// 1라운드
				r1Pick.push(pickImg.split("_")[0]);
				//console.log(r1Pick);
				r1RoulletIndex = r1RoulletIndex.filter((e)=> e!=r1Pick[r1Pick.length - 1]);
				if(r1Pick.length % 2 == 1){
					element = document.querySelector("#r11Profile");
					element.style.backgroundImage = "url(/img/part/participant/namecard" + pickImg + ".webp)";
				}else{
					element = document.querySelector("#r12Profile");
					element.style.backgroundImage = "url(/img/part/participant/namecard" + pickImg + ".webp)";
					isFullPick = true;
				}
				
				
				setTimeout(()=>{
					element.animate(
						{
							transform: [
								'translateY(0)',
								`translateY(${cardMoveDistance}%)`,
							]
						},
						{
							duration: cardDownDura,
							fill: 'forwards',
							easing: 'ease'
						}
					);
				
				},cardWaitDura);				
				break;
			case 2:
				//console.log(pickIndex+","+r2bPickProfile);
				pickImg = pickAnim(r2bPickProfile);
				
				r2bPick.push(pickImg);
				//console.log("black"+r2bPick);
				r2bRoulletIndex = r2bRoulletIndex.filter((e)=> e!=r2bPick[r2bPick.length - 1]);
				element = document.querySelector("#r21Profile");
				element.style.backgroundImage = "url(/img/part/participant/namecard" + r2bPick[r2bPick.length - 1] + ".webp)";
									
				// 2라운드 흑
				setTimeout(()=>{
					element.animate(
						{
							transform: [
								'translateY(0)',
								`translateY(${cardMoveDistance}%)`,
							]
						},
						{
							duration: cardDownDura,
							fill: 'forwards',
							easing: 'ease'
						}
					);
					isFullPick2B = true;	
				},cardWaitDura);			
				
				break;
			case 3:
				pickImg = pickAnim(r2wPickProfile);
				
				// 2라운드 백
				r2wPick.push(pickImg);
				//console.log("white"+r2wPick);
				r2wRoulletIndex = r2wRoulletIndex.filter((e)=> e!=r2wPick[r2wPick.length - 1]);
				element = document.querySelector("#r22Profile");
				element.style.backgroundImage = "url(/img/part/participant/namecard" + r2wPick[r2wPick.length - 1] + ".webp)";
				
				setTimeout(()=>{		
					element.animate(
						{
							transform: [
								'translateY(0)',
								`translateY(${cardMoveDistance}%)`,
							]
						},
						{
							duration: cardDownDura,
							fill: 'forwards',
							easing: 'ease'
						}
					);
					isFullPick2W = true;
				},cardWaitDura);
				
				break;
		}
}

// 리셋 함수
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
			cloneArr = [];
			
			for(let i = 0; i < backup_r1RuolletIndex.length; i++){
				tmpImg = document.createElement("img");
				tmpImg.id = `r1_roulletProfile${i}`;
				tmpImg.className = "roulletProfile";
				tmpImg.src = "/img/roullet/roullet" + backup_r1RuolletIndex[i]+".webp"
				
				r1RoulletIndex = backup_r1RuolletIndex;
				r1RoulletImgs.push(tmpImg);
				r1Roullet.appendChild(tmpImg);
			}
			r1Roullet.style.marginLeft = "-1em"; 
			r1Roullet.animate({transform:[`translateX(0em)`]},{duration: 0,fill: 'forwards',easing: 'linear'});
			$("#r1_mask").animate({width:`${16*11*12}px`},800);
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
			
			r2bRoullet.style.marginLeft = "-11em"; 
			r2bRoullet.animate({transform:[`translateX(0em)`]},{duration: 0,fill: 'forwards',easing: 'linear'});
			$("#r2b_mask").animate({width:`${16*11*4}px`},800);
			cloneBArr = [];
			
			r2wRoullet.style.marginLeft = "-11em"; 
			r2wRoullet.animate({transform:[`translateX(0em)`]},{duration: 0,fill: 'forwards',easing: 'linear'});
			$("#r2w_mask").animate({width:`${16*11*4}px`},800);
			cloneWArr = [];
			
			break;
	}
}
