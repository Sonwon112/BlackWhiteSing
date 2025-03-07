/**
 * 
 */
let R1_participantDiv = [];
let R2_participantDiv = [];
let staffName;
let sseConnectState = false;

$("document").ready(()=>{
	for(let i = 0; i < 12; i++){
		let R1_id = "#r1Txt"+i;
		let R2_id = "#r2Txt"+i;
		R1_participantDiv.push($(R1_id));
		R2_participantDiv.push($(R2_id));		
	}
});

function connectSSE(){
	staffName = $("#staffName").val();
	if(staffName === ""){
		alert("닉네임을 입력해주세요");
		return;
	}
	
	const eventSource = new EventSource("/sse?target="+staffName);
	
	eventSource.addEventListener("connect",(event)=>{
		console.log("connectSSE");
		$("#connectSSE").attr("disabled",true);
		sseConnectState = true;
	});
	eventSource.addEventListener("updateMatch",(event)=>{
		let [round,index,name] = event.data.split(";");
		
		switch(round){
			case 1:
				
				break;
			case 2:
				
				break;
			case 3:
				
				break;
		}
		
	});
}

function changeMode(index){
	if(!sseConnectState){
		alert("서버에 먼저 접속해주세요");
		return;	
	}
	
	
	let postData = {
		type:1,
		tag:""+index,
		name:staffName
	}
	
	$.ajax({
		type: "post",
		url: "/control/change",
		data:JSON.stringify(postData),
		headers:{
			"content-type":"application/json; cahrset=utf-8"
		},
		dataType:"json"
	})
	.done((res)=>{
		console.log("success send")
	})
	.fail((err)=>{
		console.log(err)
	});
}