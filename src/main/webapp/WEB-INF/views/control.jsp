<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>흑백싱어 컨트롤 페이지</title>
<script src="//code.jquery.com/jquery-3.3.1.min.js"></script>
<script src="/js/control.js"></script>
<link href="/css/control.css" rel="stylesheet" />
</head>
<body>
	<h3>컨트롤 페이지</h3>
	<hr>
	<div class="outerBox">
		<details>
			<summary class="title">연결</summary>
			<hr>
			<div class="flex">
				<input id="staffName" type="text" placeholder="스태프 명을 입력해주세요" />
				<button id="connectSSE" onclick="connectSSE()">연결</button>
				<div></div>
			</div>
		</details>
	</div>
	<div class="outerBox">
		<details>
			<summary class="title">명단</summary>
			<h5>흑팀</h5>
			<hr />
			<div class="flex">
				1.<input class="inputName" type="text" id="pInput0">
				<button onclick="changeName(0)">입력</button>
				&ensp; 2.<input class="inputName" type="text" id="pInput1">
				<button onclick="changeName(1)">입력</button>
				&ensp; 3.<input class="inputName" type="text" id="pInput2">
				<button onclick="changeName(2)">입력</button>
				&ensp; 4.<input class="inputName" type="text" id="pInput3">
				<button onclick="changeName(3)">입력</button>
				&ensp;
			</div>
			<div class="flex">
				5.<input class="inputName" type="text" id="pInput4">
				<button onclick="changeName(4)">입력</button>
				&ensp; 6.<input class="inputName" type="text" id="pInput5">
				<button onclick="changeName(5)">입력</button>
				&ensp; 7.<input class="inputName" type="text" id="pInput6">
				<button onclick="changeName(6)">입력</button>
				&ensp; 8.<input class="inputName" type="text" id="pInput7">
				<button onclick="changeName(7)">입력</button>
				&ensp;
			</div>
			<div class="flex">
				9.<input class="inputName" type="text" id="pInput8">
				<button onclick="changeName(8)">입력</button>
				&ensp; 10.<input class="inputName" type="text" id="pInput9">
				<button onclick="changeName(9)">입력</button>
				&ensp; 11.<input class="inputName" type="text" id="pInput10">
				<button onclick="changeName(10)">입력</button>
				&ensp; 12.<input class="inputName" type="text" id="pInput11">
				<button onclick="changeName(11)">입력</button>
				&ensp;
			</div>
			<h5>백팀</h5>
			<hr />
			<div class="flex">
				1.<input class="inputName" type="text" id="pInput12">
				<button onclick="changeName(12)">입력</button>
				&ensp; 2.<input class="inputName" type="text" id="pInput13">
				<button onclick="changeName(13)">입력</button>
				&ensp; 3.<input class="inputName" type="text" id="pInput14">
				<button onclick="changeName(14)">입력</button>
				&ensp;
			</div>
			<div class="flex">
				4.<input class="inputName" type="text" id="pInput15">
				<button onclick="changeName(15)">입력</button>
				&ensp; 5.<input class="inputName" type="text" id="pInput16">
				<button onclick="changeName(16)">입력</button>
				&ensp; 6.<input class="inputName" type="text" id="pInput17">
				<button onclick="changeName(17)">입력</button>
				&ensp;
			</div>
			
			<!-- 2라운드 진출자 -->
			<div class="flex">			
				<label for="r2CheckBox0">토다기</label><input type="checkbox" id="r2CheckBox0" value="0">
				<label for="r2CheckBox1">햄쿠비</label><input type="checkbox" id="r2CheckBox1" value="1">
				<label for="r2CheckBox2">꾸이링</label><input type="checkbox" id="r2CheckBox2" value="2">
				<label for="r2CheckBox3">펩코이</label><input type="checkbox" id="r2CheckBox3" value="3">
				<label for="r2CheckBox4">체리</label><input type="checkbox" id="r2CheckBox4" value="4">
				<label for="r2CheckBox5">엘라</label><input type="checkbox" id="r2CheckBox5" value="5">
				<label for="r2CheckBox6">앵보</label><input type="checkbox" id="r2CheckBox6" value="6">
				<label for="r2CheckBox7">린시</label><input type="checkbox" id="r2CheckBox7" value="7">
				<label for="r2CheckBox8">맹숙</label><input type="checkbox" id="r2CheckBox8" value="8">
				<label for="r2CheckBox9">타츠메 유키</label><input type="checkbox" id="r2CheckBox9" value="9">
				<label for="r2CheckBox10">아오키 레이</label><input type="checkbox" id="r2CheckBox10" value="10">
				<label for="r2CheckBox11">모로</label><input type="checkbox" id="r2CheckBox11" value="11">
				<button onclick="setR2Participant()">입력</button>
			</div>
		</details>
	</div>
	<!-- 화면 전환 키 -->
	<div class="outerBox">
		<div class="title">화면전환</div>
		<hr />
		<button onclick="changeMode(0)">로고 표시</button>
		<br />
		<button onclick="changeMode(12)">전체 안내</button>
		<div class="innerBox">
			1라운드 이전 수식어 공개
			<button onclick="changeMode(9)">수식어 공개 화면</button>
			<button onclick="showName(0)">수식어 공개</button>
			<button onclick="hideName(0)">수식어 리셋</button>
		</div>
		<div class="innerBox">
			1라운드
			<button onclick="changeMode(13)">1라운드 안내</button>
			<button onclick="changeMode(1)">1라운드 추첨</button>
			<button onclick="changeMode(2)">1라운드 대진표</button>
		</div>
		<div class="innerBox">
			2라운드 이전 백팀 공개
			<button onclick="changeMode(11)">백팀 공개 화면</button>
			<button onclick="showName(2)">백팀 카드 공개</button>
			<button onclick="hideName(2)">백팀 카드 리셋</button>
		</div>

		<div class="innerBox">
			2라운드
			<button onclick="changeMode(14)">2라운드 안내</button>
			<button onclick="changeMode(3)">2라운드 추첨</button>
			<button onclick="changeMode(4)">2라운드 대진표</button>
		</div>
		<br />
		<div class="innerBox">
			3라운드 이전 닉네임 공개
			<button onclick="changeMode(10)">닉네임 공개 화면</button>
			<button onclick="showName(1)">닉네임 공개</button>
			<button onclick="hideName(1)">닉네임 리셋</button>
		</div>
		<div class="innerBox">
			3라운드
			<button onclick="changeMode(15)">3라운드 안내</button>
			<button onclick="changeMode(5)">테마 공개</button>
			<button onclick="changeMode(6)">3라운드 팀편성</button>
			<button onclick="changeMode(7)">3라운드 대진표</button>
		</div>
		<div class="innerBox">
			점수
			<button onclick="showName(5)">점수 표시</button>
			<button onclick="hideName(5)">점수 숨기기</button>
		</div>
		<div class="innerBox">
			<input class="r3Input" type="text" placeholder="흑" id="si41"
				oninput="setScore(4,1)" />&nbsp;
			<button onclick="showName(3)">흑팀 합계</button>
			<button onclick="hideName(3)">흑팀 합계 숨기기</button>
			<input class="r3Input" type="text" placeholder="백" id="si42"
				oninput="setScore(4,2)" />&nbsp;
			<button onclick="showName(4)">백팀 합계</button>
			<button onclick="hideName(4)">백팀 합계 숨기기</button>
		</div>
		<div class="innerBox">
			우승자 발표
			<button onclick="changeMode(8)">우승자화면 표시</button>
			<button onclick="showWinner()">우승자 표시</button>
			<label for="op0">흑팀</label> <input type="radio" id="op0"
				name="winTeam" value="0"> <label for="op1">백팀</label> <input
				type="radio" id="op1" name="winTeam" value="1">
		</div>
	</div>
	<!-- 추첨 박스 -->
	<div class="outerBox">
		<div class="title">추첨</div>
		<hr />
		<div class="innerBox c1">
			1라운드[대진표]
			<button onclick="shuffle(0)">추첨</button>
			<button onclick="resetRoullet(0)">리셋</button>
		</div>
		<div class="innerBox c2">
			2라운드[대진표]
			<button id="pickBlack" onclick="shuffle(1)">흑팀 추첨</button>
			&nbsp;
			<button id="pickWhite" onclick="shuffle(2)">백팀 추첨</button>
			<button id="resetWhite" onclick="resetRoullet(2)">2라운드 리셋</button>
		</div>
		<div class="innerBox c3">
			3라운드[테마]
			<button onclick="shuffle(3)">테마공개</button>
			<button onclick="pickTheme(0)">리셋</button>
		</div>

	</div>
	<!-- 1라운드 대진표 -->
	<div class="outerBox c1">
		<details>
			<summary class="title"> 1R 대진표 </summary>
			<hr />
			<div class="flex">
				1.
				<p id="r1Txt0">참여자1</p>
				&nbsp;
				<button class="r1m1" onclick="setLeavingOut(1,1,1)">탈락</button>
				&nbsp;vs&nbsp;
				<p id="r1Txt1">참여자2</p>
				&nbsp;
				<button class="r1m1" onclick="setLeavingOut(1,1,2)">탈락</button>
				&nbsp;
				<button onclick="resetLeavingOut(1,1)">리셋</button>
				&nbsp;
				<button onclick="showFace(1)">얼굴공개</button>
			</div>
			<div class="flex">
				2.
				<p id="r1Txt2">참여자1</p>
				&nbsp;
				<button class="r1m2" onclick="setLeavingOut(1,2,1)">탈락</button>
				&nbsp;vs&nbsp;
				<p id="r1Txt3">참여자2</p>
				&nbsp;
				<button class="r1m2" onclick="setLeavingOut(1,2,2)">탈락</button>
				&nbsp;
				<button onclick="resetLeavingOut(1,2)">리셋</button>
				&nbsp;
				<button onclick="showFace(2)">얼굴공개</button>
			</div>
			<div class="flex">
				3.
				<p id="r1Txt4">참여자1</p>
				&nbsp;
				<button class="r1m3" onclick="setLeavingOut(1,3,1)">탈락</button>
				&nbsp;vs&nbsp;
				<p id="r1Txt5">참여자2</p>
				&nbsp;
				<button class="r1m3" onclick="setLeavingOut(1,3,2)">탈락</button>
				&nbsp;
				<button onclick="resetLeavingOut(1,3)">리셋</button>
				&nbsp;
				<button onclick="showFace(3)">얼굴공개</button>
			</div>
			<div class="flex">
				4.
				<p id="r1Txt6">참여자1</p>
				&nbsp;
				<button class="r1m4" onclick="setLeavingOut(1,4,1)">탈락</button>
				&nbsp;vs&nbsp;
				<p id="r1Txt7">참여자2</p>
				&nbsp;
				<button class="r1m4" onclick="setLeavingOut(1,4,2)">탈락</button>
				&nbsp;
				<button onclick="resetLeavingOut(1,4)">리셋</button>
				&nbsp;
				<button onclick="showFace(4)">얼굴공개</button>
			</div>
			<div class="flex">
				5.
				<p id="r1Txt8">참여자1</p>
				&nbsp;
				<button class="r1m5" onclick="setLeavingOut(1,5,1)">탈락</button>
				&nbsp;vs&nbsp;
				<p id="r1Txt9">참여자2</p>
				&nbsp;
				<button class="r1m5" onclick="setLeavingOut(1,5,2)">탈락</button>
				&nbsp;
				<button onclick="resetLeavingOut(1,5)">리셋</button>
				&nbsp;
				<button onclick="showFace(5)">얼굴공개</button>
			</div>
			<div class="flex">
				6.
				<p id="r1Txt10">참여자1</p>
				&nbsp;
				<button class="r1m6" onclick="setLeavingOut(1,6,1)">탈락</button>
				&nbsp;vs&nbsp;
				<p id="r1Txt11">참여자2</p>
				&nbsp;
				<button class="r1m6" onclick="setLeavingOut(1,6,2)">탈락</button>
				&nbsp;
				<button onclick="resetLeavingOut(1,6)">리셋</button>
				&nbsp;
				<button onclick="showFace(6)">얼굴공개</button>
			</div>
		</details>
	</div>
	<!-- 2라운드 대진표 -->
	<div class="outerBox c2">
		<details>
			<summary class="title">2R 대진표</summary>
			<hr />
			<div class="flex">
				1.
				<p id="r2Txt0">참여자1</p>
				&nbsp;
				<button class="r2m1" onclick="setLeavingOut(2,1,1)">탈락</button>
				&nbsp;vs&nbsp;
				<p id="r2Txt1">참여자2</p>
				&nbsp;
				<button class="r2m1" onclick="setLeavingOut(2,1,2)">탈락</button>
				&nbsp;
				<button onclick="resetLeavingOut(2,1)">리셋</button>
			</div>
			<div class="flex">
				2.
				<p id="r2Txt2">참여자1</p>
				&nbsp;
				<button class="r2m2" onclick="setLeavingOut(2,2,1)">탈락</button>
				&nbsp;vs&nbsp;
				<p id="r2Txt3">참여자2</p>
				&nbsp;
				<button class="r2m2" onclick="setLeavingOut(2,2,2)">탈락</button>
				&nbsp;
				<button onclick="resetLeavingOut(2,2)">리셋</button>
			</div>
			<div class="flex">
				3.
				<p id="r2Txt4">참여자1</p>
				&nbsp;
				<button class="r2m3" onclick="setLeavingOut(2,3,1)">탈락</button>
				&nbsp;vs&nbsp;
				<p id="r2Txt5">참여자2</p>
				&nbsp;
				<button class="r2m3" onclick="setLeavingOut(2,3,2)">탈락</button>
				&nbsp;
				<button onclick="resetLeavingOut(2,3)">리셋</button>
			</div>
			<div class="flex">
				4.
				<p id="r2Txt6">참여자1</p>
				&nbsp;
				<button class="r2m4" onclick="setLeavingOut(2,4,1)">탈락</button>
				&nbsp;vs&nbsp;
				<p id="r2Txt7">참여자2</p>
				&nbsp;
				<button class="r2m4" onclick="setLeavingOut(2,4,2)">탈락</button>
				&nbsp;
				<button onclick="resetLeavingOut(2,4)">리셋</button>
			</div>
			<div class="flex">
				5.
				<p id="r2Txt8">참여자1</p>
				&nbsp;
				<button class="r2m5" onclick="setLeavingOut(2,5,1)">탈락</button>
				&nbsp;vs&nbsp;
				<p id="r2Txt9">참여자2</p>
				&nbsp;
				<button class="r2m5" onclick="setLeavingOut(2,5,2)">탈락</button>
				&nbsp;
				<button onclick="resetLeavingOut(2,5)">리셋</button>
			</div>
			<div class="flex">
				6.
				<p id="r2Txt10">참여자1</p>
				&nbsp;
				<button class="r2m6" onclick="setLeavingOut(2,6,1)">탈락</button>
				&nbsp;vs&nbsp;
				<p id="r2Txt11">참여자2</p>
				&nbsp;
				<button class="r2m6" onclick="setLeavingOut(2,6,2)">탈락</button>
				&nbsp;
				<button onclick="resetLeavingOut(2,6)">리셋</button>
			</div>
		</details>
	</div>
	<!-- 3라운드 대진표 -->
	<div class="outerBox c3">
		<details>
			<summary class="title">3R 대진표</summary>
			<hr />
			<div class="flex">
				흑팀&nbsp; <input type="text" placeholder="팀장" id="t01">&nbsp;
				<button onclick="setTeam(0,1)">입력</button>
				&nbsp; <input type="text" placeholder="팀원1" id="t00">&nbsp;
				<button onclick="setTeam(0,0)">입력</button>
				&nbsp; <input type="text" placeholder="팀원2" id="t02">&nbsp;
				<button onclick="setTeam(0,2)">입력</button>
				&nbsp;
				<div id="hand0">흑팀 가위바위보 결과</div>
			</div>
			<div class="flex">
				백팀&nbsp; <input type="text" placeholder="팀장" id="t11">&nbsp;
				<button onclick="setTeam(1,1)">입력</button>
				&nbsp; <input type="text" placeholder="팀원1" id="t10">&nbsp;
				<button onclick="setTeam(1,0)">입력</button>
				&nbsp; <input type="text" placeholder="팀원2" id="t12">&nbsp;
				<button onclick="setTeam(1,2)">입력</button>
				&nbsp;
				<div id="hand1">백팀 가위바위보 결과</div>
			</div>
			<hr>
			<div class="flex">
				1.
				<p id="theme0">눈물</p>
				&ensp;
				<!-- Match1의 흑 -->
				<input class="r3Input" type="text" placeholder="흑" id="mi11" />&nbsp;
				<input class="r3Input" type="text" placeholder="점수" id="si11"
					oninput="setScore(1,1)" />&nbsp;
				<button onclick="setR3Match(1,1)">입력</button>
				&nbsp;
				<button class="r3m1" onclick="setLeavingOut(3,1,1)">탈락</button>
				&nbsp;
				<!-- Match1의 백 -->
				<input class="r3Input" type="text" placeholder="백" id="mi12" />&nbsp;
				<input class="r3Input" type="text" placeholder="점수" id="si12"
					oninput="setScore(1,2)" />&nbsp;
				<button onclick="setR3Match(1,2)">입력</button>
				&nbsp;
				<button class="r3m1" onclick="setLeavingOut(3,1,2)">탈락</button>
				&nbsp;
				<button onclick="resetLeavingOut(3,1)">리셋</button>
			</div>
			<div class="flex">
				2.
				<p id="theme1">설렘</p>
				&ensp;
				<!-- Match2의 흑 -->
				<input class="r3Input" type="text" placeholder="흑" id="mi21" />&nbsp;
				<input class="r3Input" type="text" placeholder="점수" id="si21"
					oninput="setScore(2,1)" />&nbsp;
				<button onclick="setR3Match(2,1)">입력</button>
				&nbsp;
				<button class="r3m2" onclick="setLeavingOut(3,2,1)">탈락</button>
				&nbsp;
				<!-- Match2의 백 -->
				<input class="r3Input" type="text" placeholder="백" id="mi22" />&nbsp;
				<input class="r3Input" type="text" placeholder="점수" id="si22"
					oninput="setScore(2,2)" />&nbsp;
				<button onclick="setR3Match(2,2)">입력</button>
				&nbsp;
				<button class="r3m2" onclick="setLeavingOut(3,2,2)">탈락</button>
				&nbsp;
				<button onclick="resetLeavingOut(3,2)">리셋</button>
			</div>
			<div class="flex">
				3.
				<p id="theme2">도파민</p>
				&ensp;
				<!-- Match3의 흑 -->
				<input class="r3Input" type="text" placeholder="흑" id="mi31" />&nbsp;
				<input class="r3Input" type="text" placeholder="점수" id="si31"
					oninput="setScore(3,1)" />&nbsp;
				<button onclick="setR3Match(3,1)">입력</button>
				&nbsp;
				<button class="r3m3" onclick="setLeavingOut(3,3,1)">탈락</button>
				&nbsp;
				<!-- Match3의 백 -->
				<input class="r3Input" type="text" placeholder="백" id="mi32" />&nbsp;
				<input class="r3Input" type="text" placeholder="점수" id="si32"
					oninput="setScore(3,2)" />&nbsp;
				<button onclick="setR3Match(3,2)">입력</button>
				&nbsp;
				<button class="r3m3" onclick="setLeavingOut(3,3,2)">탈락</button>
				&nbsp;
				<button onclick="resetLeavingOut(3,3)">리셋</button>
			</div>
			<div class="flex">
				<button onclick="setResetScore()">점수 지우기</button>
			</div>

		</details>
	</div>


</body>
</html>