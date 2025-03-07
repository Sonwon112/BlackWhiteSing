<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>흑백싱어 오버레이</title>
<script src="//code.jquery.com/jquery-3.3.1.min.js"></script>
<script src="/js/overlay.js"></script>
<link href="/css/overlay.css" rel="stylesheet"/>
</head>
<body>
	<!-- 로고 표시 -->
	<div id="screen0" class="contentBody">
		<img id="logo" alt="로고" src="/img/none_profile.png"/>
	</div >
	<!-- 1라운드 대진표 추첨 -->
	<div id="screen1" class="contentBody">
		<!-- title -->
		<div class="contentTitle">1라운드 대진표 추첨</div>
		<!-- 메인 컨텐츠 -->
		<div class="mainContent">
			<div class="drawNameCard">
				<!-- 먼저 추첨 된 참여자 -->
				<img class="drawnProfile" id="r11Profile" alt="첫번째 당첨자" src="/img/none_profile.png">
				<div class="drawnName" >
					<div id="r11Name">ㅇㅇㅇ</div>
				</div>
			</div>
			<div id="VS">VS</div>
			<div class="drawNameCard">
				<!-- 먼저 추첨 된 참여자 -->
				<img class="drawnProfile" id="r12Profile" alt="첫번째 당첨자" src="/img/none_profile.png">
				<div class="drawnName" >
					<div id="r12Name">ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ</div>
				</div>
			</div>
		</div>
		<!-- 이미지 룰렛 -->
		<div class="imageRoullet">
			<%for(int i = 0; i < 12; i++){ 
				if(i == 5){%>
				<img class="roulletPick" alt="참여자프로필${i}" src="/img/none_profile.png"/>
				<%}else{ %>
				<img class="roulletProfile" alt="참여자프로필${i}" src="/img/none_profile.png"/>
			<%}
			} %>
		</div>
	</div>
	<!-- 1라운드 대진표 -->
	<div id="screen2" class="contentBody">
		<div class="contentTitle">1ROUND</div>
		<div class="braketColumn">
			<div class="match">
				<div class="matchTitle">MATCH1</div>
				<div class="braketParticipant">
					<div class="braketNameCard">
						<img class="braketProfile" id="r1m11p" alt="매치1,1번 참가자" src="/img/none_profile.png"/>
						<div class="braketName" id="r1m11n">ㅇㅇㅇ</div>
					</div>
					<div class="braketName">VS</div>
					<div class="braketNameCard">
						<img class="braketProfile" id="r1m12p"  alt="매치1,2번 참가자" src="/img/none_profile.png"/>
						<div class="braketName" id="r1m12n">ㅇㅇㅇ</div>
					</div>
				</div>
			</div>
			
			<div class="match">
				<div class="matchTitle">MATCH2</div>
				<div class="braketParticipant">
					<div class="braketNameCard">
						<img class="braketProfile" id="r1m21p" alt="매치2,1번 참가자" src="/img/none_profile.png"/>
						<div class="braketName" id="r1m21n">ㅇㅇㅇ</div>
					</div>
					<div class="braketName">VS</div>
					<div class="braketNameCard">
						<img class="braketProfile" id="r1m22p"  alt="매치2,2번 참가자" src="/img/none_profile.png"/>
						<div class="braketName" id="r1m22n">ㅇㅇㅇ</div>
					</div>
				</div>
			</div>
			
			<div class="match">
				<div class="matchTitle">MATCH3</div>
				<div class="braketParticipant">
					<div class="braketNameCard">
						<img class="braketProfile" id="r1m31p" alt="매치3,1번 참가자" src="/img/none_profile.png"/>
						<div class="braketName" id="r1m31n">ㅇㅇㅇ</div>
					</div>
					<div class="braketName">VS</div>
					<div class="braketNameCard">
						<img class="braketProfile" id="r1m32p"  alt="매치3,2번 참가자" src="/img/none_profile.png"/>
						<div class="braketName" id="r1m32n">ㅇㅇㅇ</div>
					</div>
				</div>
			</div>
		</div>
		<br>
		<div class="braketColumn">
			<div class="match">
				<div class="matchTitle">MATCH4</div>
				<div class="braketParticipant">
					<div class="braketNameCard">
						<img class="braketProfile" id="r1m41p" alt="매치4,1번 참가자" src="/img/none_profile.png"/>
						<div class="braketName" id="r1m11n">ㅇㅇㅇ</div>
					</div>
					<div class="braketName">VS</div>
					<div class="braketNameCard">
						<img class="braketProfile" id="r1m42p"  alt="매치4,2번 참가자" src="/img/none_profile.png"/>
						<div class="braketName" id="r1m12n">ㅇㅇㅇ</div>
					</div>
				</div>
			</div>
			
			<div class="match">
				<div class="matchTitle">MATCH5</div>
				<div class="braketParticipant">
					<div class="braketNameCard">
						<img class="braketProfile" id="r1m51p" alt="매치5,1번 참가자" src="/img/none_profile.png"/>
						<div class="braketName" id="r1m21n">ㅇㅇㅇ</div>
					</div>
					<div class="braketName">VS</div>
					<div class="braketNameCard">
						<img class="braketProfile" id="r1m52p"  alt="매치5,2번 참가자" src="/img/none_profile.png"/>
						<div class="braketName" id="r1m22n">ㅇㅇㅇ</div>
					</div>
				</div>
			</div>
			
			<div class="match">
				<div class="matchTitle">MATCH6</div>
				<div class="braketParticipant">
					<div class="braketNameCard">
						<img class="braketProfile" id="r1m61p" alt="매치6,1번 참가자" src="/img/none_profile.png"/>
						<div class="braketName" id="r1m61n">ㅇㅇㅇ</div>
					</div>
					<div class="braketName">VS</div>
					<div class="braketNameCard">
						<img class="braketProfile" id="r1m62p"  alt="매치6,2번 참가자" src="/img/none_profile.png"/>
						<div class="braketName" id="r1m62n">ㅇㅇㅇ</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- 2라운드 대진표 추첨 -->
	<div id="screen3" class="contentBody">
		<!-- title -->
		<div class="contentTitle">대진표 추첨</div>
		<!-- 메인 컨텐츠 -->
		<div class="mainContent">
			<div class="drawNameCard" style="margin-right:280px">
				<!-- 먼저 추첨 된 참여자 -->
				<img class="drawnProfile" id="r21Profile" alt="첫번째 당첨자" src="/img/none_profile.png">
				<div class="drawnName" >
					<div id="r11Name">ㅇㅇㅇ</div>
				</div>
			</div>
			<div id="VS">VS</div>
			<div class="drawNameCard" style="margin-left:280px">
				<!-- 먼저 추첨 된 참여자 -->
				<img class="drawnProfile" id="r22Profile" alt="첫번째 당첨자" src="/img/none_profile.png">
				<div class="drawnName" >
					<div id="r12Name">ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ</div>
				</div>
			</div>
		</div>
		<!-- 이미지 룰렛 -->
		<div class="flex" style="margin-left:1.4%">
			<div class="r2ImageRoullet" style="margin-left:1.2em;">
			<%for(int i = 0; i < 12; i++){ 
				if(i == 2){ %>
				<img class="roulletPick" alt="참여자프로필<%=i%>" src="/img/none_profile.png"/>
				<%}else{%>
				<img class="roulletProfile" alt="참여자프로필<%=i%>" src="/img/none_profile.png"/>
			<%}
			} %>
		</div>
		<div class="r2ImageRoullet" style="margin-left:1em;">
			<%for(int i = 0; i < 12; i++){ 
				if(i == 2){ %>
				<img class="roulletPick" alt="참여자프로필<%=i%>" src="/img/none_profile.png"/>
				<%}else{%>
				<img class="roulletProfile" alt="참여자프로필<%=i%>" src="/img/none_profile.png"/>
			<%}
			} %>
		</div>
		</div>
		
	</div>
	<!-- 2라운드 대진표 -->
	<div id="screen4" class="contentBody">
		<div class="contentTitle">2ROUND</div>
		<div class="braketColumn">
			<div class="match">
				<div class="matchTitle">MATCH1</div>
				<div class="braketParticipant">
					<div class="braketNameCard">
						<img class="braketProfile" id="r2m11p" alt="매치1,1번 참가자" src="/img/none_profile.png"/>
						<div class="braketName" id="r2m11n">ㅇㅇㅇ</div>
					</div>
					<div class="braketName">VS</div>
					<div class="braketNameCard">
						<img class="braketProfile" id="r2m12p"  alt="매치1,2번 참가자" src="/img/none_profile.png"/>
						<div class="braketName" id="r2m12n">ㅇㅇㅇ</div>
					</div>
				</div>
			</div>
			
			<div class="match">
				<div class="matchTitle">MATCH2</div>
				<div class="braketParticipant">
					<div class="braketNameCard">
						<img class="braketProfile" id="r2m21p" alt="매치2,1번 참가자" src="/img/none_profile.png"/>
						<div class="braketName" id="r2m21n">ㅇㅇㅇ</div>
					</div>
					<div class="braketName">VS</div>
					<div class="braketNameCard">
						<img class="braketProfile" id="r2m22p"  alt="매치2,2번 참가자" src="/img/none_profile.png"/>
						<div class="braketName" id="r2m22n">ㅇㅇㅇ</div>
					</div>
				</div>
			</div>
			
			<div class="match">
				<div class="matchTitle">MATCH3</div>
				<div class="braketParticipant">
					<div class="braketNameCard">
						<img class="braketProfile" id="r2m31p" alt="매치3,1번 참가자" src="/img/none_profile.png"/>
						<div class="braketName" id="r2m31n">ㅇㅇㅇ</div>
					</div>
					<div class="braketName">VS</div>
					<div class="braketNameCard">
						<img class="braketProfile" id="r2m32p"  alt="매치3,2번 참가자" src="/img/none_profile.png"/>
						<div class="braketName" id="r2m32n">ㅇㅇㅇ</div>
					</div>
				</div>
			</div>
		</div>
		<br>
		<div class="braketColumn">
			<div class="match">
				<div class="matchTitle">MATCH4</div>
				<div class="braketParticipant">
					<div class="braketNameCard">
						<img class="braketProfile" id="r2m41p" alt="매치4,1번 참가자" src="/img/none_profile.png"/>
						<div class="braketName" id="r2m11n">ㅇㅇㅇ</div>
					</div>
					<div class="braketName">VS</div>
					<div class="braketNameCard">
						<img class="braketProfile" id="r2m42p"  alt="매치4,2번 참가자" src="/img/none_profile.png"/>
						<div class="braketName" id="r2m12n">ㅇㅇㅇ</div>
					</div>
				</div>
			</div>
			
			<div class="match">
				<div class="matchTitle">MATCH5</div>
				<div class="braketParticipant">
					<div class="braketNameCard">
						<img class="braketProfile" id="r2m51p" alt="매치5,1번 참가자" src="/img/none_profile.png"/>
						<div class="braketName" id="r2m21n">ㅇㅇㅇ</div>
					</div>
					<div class="braketName">VS</div>
					<div class="braketNameCard">
						<img class="braketProfile" id="r2m52p"  alt="매치5,2번 참가자" src="/img/none_profile.png"/>
						<div class="braketName" id="r2m22n">ㅇㅇㅇ</div>
					</div>
				</div>
			</div>
			
			<div class="match">
				<div class="matchTitle">MATCH6</div>
				<div class="braketParticipant">
					<div class="braketNameCard">
						<img class="braketProfile" id="r2m61p" alt="매치6,1번 참가자" src="/img/none_profile.png"/>
						<div class="braketName" id="r2m61n">ㅇㅇㅇ</div>
					</div>
					<div class="braketName">VS</div>
					<div class="braketNameCard">
						<img class="braketProfile" id="r2m62p"  alt="매치6,2번 참가자" src="/img/none_profile.png"/>
						<div class="braketName" id="r2m62n">ㅇㅇㅇ</div>
					</div>
				</div>
			</div>
		</div>
	</div>	
	<!-- 3라운드 테마추첨 -->
	<div id="screen5" class="contentBody">
		<div class="contentTitle">테마 추첨</div>
		<div class="themeCard" id="themeCard0">
			<img alt="카드 뒷면" x class="braketProfile" src="/img/none_profile.png"/>
			<div class="theme" hidden="hidden">ㅇㅇㅇ</div>
		</div>
		<div class="themeCard" id="themeCard1">
			<img alt="카드 뒷면"  class="braketProfile" src="/img/none_profile.png"/>
			<div class="theme"  hidden="hidden">ㅇㅇㅇ</div>
		</div>
		<div class="themeCard"  id="themeCard2">
			<img alt="카드 뒷면" class="braketProfile" src="/img/none_profile.png"/>
			<div class="theme"  hidden="hidden">ㅇㅇㅇ</div>
		</div>
		<div class="themeCard"  id="themeCard3">
			<img alt="카드 뒷면" class="braketProfile" src="/img/none_profile.png"/>
			<div class="theme"  hidden="hidden">ㅇㅇㅇ</div>
		</div>
		<div class="themeCard"  id="themeCard4" >
			<img alt="카드 뒷면"class="braketProfile" src="/img/none_profile.png"/>
			<div class="theme"  hidden="hidden">ㅇㅇㅇ</div>
		</div>
		<div class="themeCard" id="themeCard5">
			<img alt="카드 뒷면" class="braketProfile" src="/img/none_profile.png"/>
			<div class="theme"  hidden="hidden">ㅇㅇㅇ</div>
		</div>
	</div>	
	<!-- 3라운드 대진표 및 테마 -->
	<div id="screen6" class="contentBody">
		<div class="contentTitle">FINAL</div>
		<div class="finalcolumn">
			<%for(int i = 0; i < 3; i++){%>
				<div class="finalBraketNameCard">
					<img alt="" src="/img/none_profile.png" id="finalProfile<%=i%>" class="finalNameCardProfile"/>
					<div class="drawnName" id="finalName<%=i%>">ㅇㅇㅇ</div>
				</div>
			<%}%>
			<div id="VS">VS</div>
			<%for(int i = 3; i < 6; i++){%>
				<div class="finalBraketNameCard">
					<img alt="" src="/img/none_profile.png" id="finalProfile<%=i%>" class="finalNameCardProfile"/>
					<div class="drawnName" id="finalName<%=i%>">ㅇㅇㅇ</div>
				</div>
			<%}%>
		</div>
		<
	</div>
</body>
</html>