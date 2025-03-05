<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>흑백싱어 컨트롤 페이지</title>
<link href="/css/control.css" rel="stylesheet"/>
</head>
<body>
<h2>컨트롤 페이지</h2>
<hr>
<!-- 화면 전환 키 -->
<div class="outerBox">
	<div class="title">화면전환</div>
	<hr/>
	<button>로고 표시</button><br/>
	<div class="innerBox">
		1라운드
		<button>1라운드 추첨</button>
		<button>1라운드 대진표</button>
	</div>
	<div class="innerBox">
		2라운드
		<button>2라운드 추첨</button>
		<button>2라운드 대진표</button>
	</div>
	<div class="innerBox">
		3라운드
		<button>테마 추첨</button>
		<button>3라운드 팀편성</button>
	</div>
</div>
<!-- 추첨 박스 -->
<div class="outerBox">
	<div class="title">추첨</div>
	<hr/>
	<div class="innerBox">
		1라운드[대진표]
		<button>추첨</button>
		<button>리셋</button>
	</div>
	<div class="innerBox">
		2라운드[대진표]
		<button>흑팀 추첨</button>
		<button>흑팀 리셋</button>
		&nbsp;
		<button>백팀 추첨</button>
		<button>백팀 리셋</button>
	</div>
	<div class="innerBox">
		3라운드[테마]
		<button>추첨</button>
		<button>리셋</button>
	</div>
	
</div>
<!-- 1라운드 대진표 -->
<div class="outerBox">
	<div class="title">1R 대진표</div>
	<hr/>
</div>
<!-- 2라운드 대진표 -->
<div class="outerBox">
	<div class="title">2R 대진표</div>
	<hr/>
</div>
<!-- 3라운드 대진표 -->
<div class="outerBox">
	<div class="title">3R 대진표</div>
	<hr/>
</div>


</body>
</html>