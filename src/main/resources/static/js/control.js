/**
 * 
 */
let R1_participantDiv = [];
let R2_participantDiv = [];

let Participant = ["니야", "그나로","뮬","나츠키","히미캉","꾸이링",
				     "레드","퀸슈아","이신","루나밍","햄쿠비","코오리", // 여기까지 흑팀
			   		 "레드","퀸슈아","이신","루나밍","햄쿠비","코오리"];

let ThemeArr = ["테마1", "테마2", "테마3", "테마4", "테마5", "테마6"];
				   
let staffName;
let sseConnectState = false;

$("document").ready(() => {
	for (let i = 0; i < 12; i++) {
		let R1_id = "#r1Txt" + i;
		let R2_id = "#r2Txt" + i;
		R1_participantDiv.push($(R1_id));
		R2_participantDiv.push($(R2_id));
	}
	
	for(let i = 0; i < Participant.length; i++){
		let id = "#pInput"+i;
		$(id).val(Participant[i]);
	}
});

function connectSSE() {
	staffName = $("#staffName").val();
	if (staffName === "") {
		alert("닉네임을 입력해주세요");
		return;
	}

	const eventSource = new EventSource("/sse?target=" + staffName);

	eventSource.addEventListener("connect", (event) => {
		//console.log("connectSSE");
		$("#connectSSE").attr("disabled", true);
		sseConnectState = true;
	});
	eventSource.addEventListener("updateMatch", (event) => {
		let [round, arr] = event.data.split(";");
		arr = arr.split(",");
		for(let i = 0; i < arr.length; i++){
			let id = "#r"+round+"Txt"+i;
			$(id).text(Participant[arr[i]]);
		}
	});
	eventSource.addEventListener("rsp",(event)=>{
		console.log(event.data);
		let [team,hand] = event.data.split(";");
		text = hand =="0" ? "바위" : hand=="1" ? "가위" : "보";
				
		let handId = "#hand"+team;
		$(handId).text(text);
	});
	eventSource.addEventListener("changeName", (event)=>{
		let [index, name] = event.data.split(";");
		//console.log(event.data);
		Participant[Number(index)] = name;
		let id = "#pInput"+index;
		$(id).val(Participant[index]);
	});
	
	eventSource.addEventListener("setTeam", (event)=>{
		let [team,teamOrder,partIndex] = event.data.split(";");
		let id="#t"+team+teamOrder;
		$(id).val(Participant[Number(partIndex)]);
	});
	
	eventSource.addEventListener("setTheme", (event)=>{
		let [order, idx] = event.data.split(";");
		let id = "#theme"+order;
		$(id).text(ThemeArr[idx]);
		
	});
	eventSource.addEventListener("leavingOut",(event)=>{
		let [round, match, pos] = event.data.split(";");
		applyLeavingOut(round,match,pos);
	});
	eventSource.addEventListener("resetLeavingOut",(event)=>{
		let [round, match] = event.data.split(";");
		applyResetLeavingOut(round,match);
	});
	
}

function changeMode(index) {
	if (!sseConnectState) {
		alert("서버에 먼저 접속해주세요");
		return;
	}


	let postData = {
		type: 1,
		tag: "" + index,
		name: staffName
	}

	sendServer("change",postData)
}

// 0 : 1라운드 대진표, 1 : 2라운드 흑팀, 2 : 2라운드 백팀, 3 : 3라운드 테마 추첨
function shuffle(index) {
	if (!sseConnectState) {
		alert("서버에 먼저 접속해주세요");
		return;
	}

	let postData = {
		type: 2,
		tag: "" + index,
		name: staffName
	}

	sendServer("shuffle",postData)
}

function changeName(index){
	let inputId = "#pInput"+index;
	let changedName = $(inputId).val();
	
	Participant[index] = changedName;
	
	let postData = {
		type : index,
		tag : changedName,
		name : staffName
	}
	
	sendServer("change_name",postData)
}

// 0 : 흑팀, 1 : 백팀
function setTeam(team, index){
	let inputId = "#t"+team+""+index;
	let inputName = $(inputId).val();
	
	let arrIndex = Participant.indexOf(inputName);
	
	
	let postData = {
		type : team,
		tag : index+";"+arrIndex,
		name : staffName
	}
	
	sendServer("setTeam",postData)
}

function setLeavingOut(round,match,pos){
	let postData = {
		type : 10,
		tag : round+";"+match+";"+pos,
		name : staffName
	}
	sendServer("leaving_out",postData);
}
function applyLeavingOut(round,match,pos){
	posVal = pos % 2 == 1 ? (match-1)*2 : (match-1)*2+1;
	let id = `#r${round}Txt${posVal}`
	
	console.log(id);
	$(id).css("text-decoration","line-through");
	let btnClass = `.r${round}m${match}`;
	$(btnClass).attr("disabled",true);
}

function resetLeavingOut(round,match){
	let postData={
		type : 11,
		tag : round+";"+match,
		name : "staffName"
	}
	sendServer("leaving_out",postData);
}

function applyResetLeavingOut(round,match){
	let id1 = `#r${round}Txt${(match-1)*2}`
	let id2 = `#r${round}Txt${(match-1)*2+1}`
	
	$(id1).css("text-decoration","none");
	$(id2).css("text-decoration","none");
	let btnClass = `.r${round}m${match}`;
	$(btnClass).attr("disabled",false);
}


function sendServer(endPoint, postData){
	
	$.ajax({
			type: "post",
			url: `/control/${endPoint}`,
			data: JSON.stringify(postData),
			headers: {
				"content-type": "application/json; cahrset=utf-8"
			},
			dataType: "json"
		})
		.done((res) => {
			console.log("success send")
		})
		.fail((err) => {
			console.log(err)
		});
}


