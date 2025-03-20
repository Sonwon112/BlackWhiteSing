<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>흑백싱어 가위바위 보 페이지</title>
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script src='http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.5/jquery-ui.min.js'></script>
<script src="/js/rockScissorsPaper.js"></script>
<link href="/css/rockScissorsPaper.css" rel="stylesheet" />
</head>
<body>
	<div class="flex">
		<img alt="로고" id="logo" src="/img/logo/logo.png" />
	</div>
	<div class="flex">
		<button id="rock" class="hand" onclick="sendHand(${team}, 0)">&nbsp;</button>
		<button id="scissors" class="hand" onclick="sendHand(${team}, 1)">&nbsp;</button>
		<button id="paper" class="hand" onclick="sendHand(${team}, 2)">&nbsp;</button>
	</div>	
</body>
</html>