<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>흑백싱어 컨트롤 페이지</title>
<script src="//code.jquery.com/jquery-3.3.1.min.js"></script>
<script src="/js/control.js"></script>
<link href="/css/control.css" rel="stylesheet"/>
</head>
<body>
<h3>컨트롤 페이지</h3>
<hr>
<div class="outerBox">
	<details>
		<summary class="title">연결</summary>
		<hr>
		<div class="flex">
			<input id="staffName" type="text" placeholder="스태프 명을 입력해주세요"/>
			<button id="connectSSE" onclick="connectSSE()">연결</button>
			<div></div>
		</div>
	</details>
</div>
<!-- 화면 전환 키 -->
<div class="outerBox">
	<div class="title">화면전환</div>
	<hr/>
	<button onclick="changeMode(0)">로고 표시</button><br/>
	<div class="innerBox">
		1라운드
		<button onclick="changeMode(1)">1라운드 추첨</button>
		<button onclick="changeMode(2)">1라운드 대진표</button>
	</div>
	<div class="innerBox">
		2라운드
		<button onclick="changeMode(3)">2라운드 추첨</button>
		<button onclick="changeMode(4)">2라운드 대진표</button>
	</div>
	<div class="innerBox">
		3라운드
		<button onclick="changeMode(5)">테마 추첨</button>
		<button onclick="changeMode(6)">3라운드 팀편성</button>
		<button onclick="changeMode(7)">3라운드 팀편성</button>
	</div>
</div>
<!-- 추첨 박스 -->
<div class="outerBox">
	<div class="title">추첨</div>
	<hr/>
	<div class="innerBox">
		1라운드[대진표]
		<button onclick="shuffle(0)">추첨</button>
		<button>리셋</button>
	</div>
	<div class="innerBox">
		2라운드[대진표]
		<button onclick="shuffle(1)">흑팀 추첨</button>
		<button>흑팀 리셋</button>
		&nbsp;
		<button onclick="shuffle(2)">백팀 추첨</button>
		<button>백팀 리셋</button>
	</div>
	<div class="innerBox">
		3라운드[테마]
		<button onclick="shuffle(3)">추첨</button>
		<button onclick="changeTheme(0)">리셋</button>
		<button onclick="changeTheme(1)">뽑기</button>
	</div>
	
</div>
<!-- 1라운드 대진표 -->
<div class="outerBox">
	<details>
		<summary class="title">
			1R 대진표
		</summary>
		<hr/>
		<div class="flex">
			1. <p id="r1Txt0">참여자1</p>&nbsp;<button>탈락</button>&nbsp;vs&nbsp;<p id="r1Txt1">참여자2</p>&nbsp;<button>탈락</button>
		</div>
		<div class="flex">
			2. <p id="r1Txt2">참여자1</p>&nbsp;<button>탈락</button>&nbsp;vs&nbsp;<p id="r1Txt3">참여자2</p>&nbsp;<button>탈락</button>
		</div>
		<div class="flex">
			3. <p id="r1Txt4">참여자1</p>&nbsp;<button>탈락</button>&nbsp;vs&nbsp;<p id="r1Txt5">참여자2</p>&nbsp;<button>탈락</button>
		</div>
		<div class="flex">
			4. <p id="r1Txt6">참여자1</p>&nbsp;<button>탈락</button>&nbsp;vs&nbsp;<p id="r1Txt7">참여자2</p>&nbsp;<button>탈락</button>
		</div>
		<div class="flex">
			5. <p id="r1Txt8">참여자1</p>&nbsp;<button>탈락</button>&nbsp;vs&nbsp;<p id="r1Txt9">참여자2</p>&nbsp;<button>탈락</button>
		</div>
		<div class="flex">
			6. <p id="r1Txt10">참여자1</p>&nbsp;<button>탈락</button>&nbsp;vs&nbsp;<p id="r1Txt11">참여자2</p>&nbsp;<button>탈락</button>
		</div>
	</details>
</div>
<!-- 2라운드 대진표 -->
<div class="outerBox">
	<details>
		<summary class="title">2R 대진표</summary>
		<hr/>
		<div class="flex">
			1.<p id="r2Txt0">참여자1</p>&nbsp;<button>탈락</button>&nbsp;vs&nbsp;<p id="r2Txt1">참여자2</p>&nbsp;<button>탈락</button>
		</div>
		<div class="flex">
			2.<p id="r2Txt2">참여자1</p>&nbsp;<button>탈락</button>&nbsp;vs&nbsp;<p id="r2Txt3">참여자2</p>&nbsp;<button>탈락</button>
		</div>
		<div class="flex">
			3.<p id="r2Txt4">참여자1</p>&nbsp;<button>탈락</button>&nbsp;vs&nbsp;<p id="r2Txt5">참여자2</p>&nbsp;<button>탈락</button>
		</div>
		<div class="flex">
			4.<p id="r2Txt6">참여자1</p>&nbsp;<button>탈락</button>&nbsp;vs&nbsp;<p id="r2Txt7">참여자2</p>&nbsp;<button>탈락</button>
		</div>
		<div class="flex">
			5.<p id="r2Txt8">참여자1</p>&nbsp;<button>탈락</button>&nbsp;vs&nbsp;<p id="r2Txt9">참여자2</p>&nbsp;<button>탈락</button>
		</div>
		<div class="flex">
			6.<p id="r2Txt10">참여자1</p>&nbsp;<button>탈락</button>&nbsp;vs&nbsp;<p id="r2Txt11">참여자2</p>&nbsp;<button>탈락</button>
		</div>
	</details>
</div>
<!-- 3라운드 대진표 -->
<div class="outerBox">
	<details>
		<summary class="title">3R 대진표</summary>
		<hr/>
		<div class="flex">
			흑팀&nbsp;
			<input type="text" placeholder="팀장">&nbsp;<button>입력</button>&nbsp;
			<input type="text" placeholder="팀원1">&nbsp;<button>입력</button>&nbsp;
			<input type="text" placeholder="팀원2">&nbsp;<button>입력</button>&nbsp;
		</div>
		<div class="flex">
			백팀&nbsp;
			<input type="text" placeholder="팀장">&nbsp;<button>입력</button>&nbsp;
			<input type="text" placeholder="팀원1">&nbsp;<button>입력</button>&nbsp;
			<input type="text" placeholder="팀원2">&nbsp;<button>입력</button>&nbsp;
		</div>
		<hr>
		<div class="flex">
			1.<p>테마 1</p>&ensp;
			<!-- Match1의 흑 -->
			<input type="text" placeholder="흑"/>&nbsp;
			<button>입력</button>&nbsp;
			<!-- Match1의 백 -->
			<input type="text" placeholder="백"/>&nbsp;
			<button>입력</button>&nbsp;
		</div>
		<div class="flex">
			2.<p>테마 2</p>&ensp; 
			<!-- Match2의 흑 -->
			<input type="text" placeholder="흑"/>&nbsp;
			<button>입력</button>&nbsp;
			<!-- Match2의 백 -->
			<input type="text" placeholder="백"/>&nbsp;
			<button>입력</button>&nbsp;
		</div>
		<div class="flex">
			3.<p>테마 3</p>&ensp;
			<!-- Match3의 흑 -->
			<input type="text" placeholder="흑"/>&nbsp;
			<button>입력</button>&nbsp;
			<!-- Match3의 백 -->
			<input type="text" placeholder="백"/>&nbsp;
			<button>입력</button>&nbsp;
		</div>
	</details>
</div>


</body>
</html>