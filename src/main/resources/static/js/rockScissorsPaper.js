/**
 * 
 */

// 0 : 흑 1 : 백
// 0 : 바위, 1 : 가위, 2 : 보
 function sendHand(team, hand){
	 let postData={
		 team:team,
		 hand:hand
	 }
	 
	 $.ajax({
		type: "post",
		url: "/send_hand",
		data: JSON.stringify(postData),
		headers: {
			"content-type": "application/json; cahrset=utf-8"
		},
		dataType: "json"
	})
 }