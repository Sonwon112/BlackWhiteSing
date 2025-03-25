<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>흑백싱어 오버레이</title>
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script
	src='http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.5/jquery-ui.min.js'></script>
<script src="/js/overlay.js"></script>
<script src="/js/overlay_roullet.js"></script>
<script src="/js/overlay_Theme.js"></script>
<script src="/js/overlay_show.js"></script>
<link href="/css/overlay.css" rel="stylesheet" />
</head>
<body>
	<!-- 로고 표시 -->
	<div id="screen0">
		<video class="bg-wait-video" src="/img/background/background_wait.mp4"
			autoplay muted loop></video>
		<img id="logo" alt="로고" src="/img/logo/logo.png" />
	</div>
	
	<div id="screen9" class="contentBody">
		<div class="contentTitle">
			<img alt="수식언 타이틀" src="/img/part/black_title.png"/>
		</div>
		<div class="flex around">
			<div class="showNameCard opacity1 border" id="blackCard0">&nbsp;</div>
			<div class="showNameCard opacity1 border" id="blackCard1">&nbsp;</div>
			<div class="showNameCard opacity1 border" id="blackCard2">&nbsp;</div>
			<div class="showNameCard opacity1 border" id="blackCard3">&nbsp;</div>
			<div class="showNameCard opacity1 border" id="blackCard4">&nbsp;</div>
			<div class="showNameCard opacity1 border" id="blackCard5">&nbsp;</div>
		</div>
		<div class="flex around">
			<div class="showNameCard opacity1 border" id="blackCard6">&nbsp;</div>
			<div class="showNameCard opacity1 border" id="blackCard7">&nbsp;</div>
			<div class="showNameCard opacity1 border" id="blackCard8">&nbsp;</div>
			<div class="showNameCard opacity1 border" id="blackCard9">&nbsp;</div>
			<div class="showNameCard opacity1 border" id="blackCard10">&nbsp;</div>
			<div class="showNameCard opacity1 border" id="blackCard11">&nbsp;</div>
		</div>
		
	</div>
	
	<!-- 1라운드 대진표 추첨 -->
	<div id="screen1" class="contentBody">
		<!-- title -->
		<div class="contentTitle">
			<img alt="1라운드 대진표 추첨 타이틀" src="/img/part/braket_title_r1.png" />
		</div>
		<div class="matchTxt flex center">
			<div class="txtStroke" id="r1Match">Match1</div>
		</div>
		<!-- 메인 컨텐츠 -->
		<div class="mainContent">
			<div class="drawNameCard" id="r11Profile" style="margin-top: -90%">
				<!-- 먼저 추첨 된 참여자 -->
				&nbsp;
			</div>
			<div id="VS">
				<img alt="vs" src="/img/logo/vs.png" />
			</div>
			<div class="drawNameCard" id="r12Profile" style="margin-top: -90%">
				<!-- 먼저 추첨 된 참여자 -->
				&nbsp;
			</div>
		</div>
		<div class="flex center">
			<img alt="vs" src="/img/logo/arrowpoint.png" style="width: 2%" />
		</div>
		<!-- 이미지 룰렛 -->
		<div class="flex center">
			<div class="flex mask" id="r1_mask">
				<div class="imageRoullet" id="r1RoulletOutter" style="margin-left:-0.5em">
					<%
					for (int i = 0; i < 12; i++) {
						if (i != 5) {
					%>
					<img id="r1_roulletProfile<%=i %>" class="roulletProfile"
						alt="참여자프로필<%=i %>" src="/img/none_profile.png" />
					<%
					} else {
					%>
					<img id="r1_roulletProfile<%=i %>" class="roulletProfile"
						alt="참여자프로필<%=i %>" src="/img/none_profile.png" />
					<%
					}
					}
					%>
				</div>
			</div>
		</div>

	</div>
	<!-- 1라운드 대진표 -->
	<div id="screen2" class="contentBody">
		<div class="contentTitle">
			<img alt="1라운드 대진표 타이틀" src="/img/part/round1_title.png"></>
		</div>
		<div class="braketColumn">
			<div class="match">
				<div class="matchTitle">MATCH1</div>
				<div class="braketParticipant">
					<div class="braketNameCard" id="r1m11">&nbsp;</div>
					<div class="braketName">VS</div>
					<div class="braketNameCard" id="r1m12">&nbsp;</div>
				</div>
			</div>

			<div class="match">
				<div class="matchTitle">MATCH2</div>
				<div class="braketParticipant">
					<div class="braketNameCard" id="r1m21">&nbsp;</div>
					<div class="braketName">VS</div>
					<div class="braketNameCard" id="r1m22">&nbsp;</div>
				</div>
			</div>

			<div class="match">
				<div class="matchTitle">MATCH3</div>
				<div class="braketParticipant">
					<div class="braketNameCard" id="r1m31">&nbsp;</div>
					<div class="braketName">VS</div>
					<div class="braketNameCard" id="r1m32">&nbsp;</div>
				</div>
			</div>
		</div>
		<br>
		<div class="braketColumn">
			<div class="match">
				<div class="matchTitle">MATCH4</div>
				<div class="braketParticipant">
					<div class="braketNameCard" id="r1m41">&nbsp;</div>
					<div class="braketName">VS</div>
					<div class="braketNameCard" id="r1m42">&nbsp;</div>
				</div>
			</div>

			<div class="match">
				<div class="matchTitle">MATCH5</div>
				<div class="braketParticipant">
					<div class="braketNameCard" id="r1m51">&nbsp;</div>
					<div class="braketName">VS</div>
					<div class="braketNameCard" id="r1m52">&nbsp;</div>
				</div>
			</div>

			<div class="match">
				<div class="matchTitle">MATCH6</div>
				<div class="braketParticipant">
					<div class="braketNameCard" id="r1m61">&nbsp;</div>
					<div class="braketName">VS</div>
					<div class="braketNameCard" id="r1m62">&nbsp;</div>
				</div>
			</div>
		</div>
	</div>
	<!-- 2라운드 대진표 추첨 -->
	<div id="screen3" class="contentBody">
		<!-- title -->
		<div class="contentTitle">
			<img alt="2라운드 대진표 추첨 타이틀" src="/img/part/braket_title_r2.png"></>
		</div>
		<div class="matchTxt flex center" >
			<div class="txtStroke" id="r2Match">Match1</div>
		</div>
		
		<!-- 메인 컨텐츠 -->
		<div class="mainContent">
			<div class="drawNameCard" id="r21Profile"
				style="margin-right: 14em; margin-top: -90%">&nbsp;</div>
			<div id="VS">
				<img alt="vs" src="/img/logo/vs.png">
			</div>
			<div class="drawNameCard" id="r22Profile"
				style="margin-left: 14em; margin-top: -90%">&nbsp;</div>
		</div>
		
		<div class="flex around">
			<img alt="vs" src="/img/logo/arrowpoint.png" style="width: 2%" />
			<img alt="vs" src="/img/logo/arrowpoint.png" style="width: 2%" />
		</div>
		
		<!-- 이미지 룰렛 -->
		<div class="flex" style="justify-content: space-around;">
			<div class="flex center mask2" id="r2b_mask" >
				<div class="r2ImageRoullet" id="r2bRoulletOutter"
					style="margin-left: -11em;">
					<%
					for (int i = 0; i < 6; i++) {
						if (i == 2) {
					%>
					<img class="roulletProfile" alt="참여자프로필<%=i%>"
						src="/img/none_profile.png" id="r2b_roulletProfile<%=i %>" />
					<%
					} else {
					%>
					<img class="roulletProfile" alt="참여자프로필<%=i%>"
						src="/img/none_profile.png" id="r2b_roulletProfile<%=i %>" />
					<%
					}
					}
					%>
				</div>
			</div>
			<div class="flex center mask2" id="r2w_mask">
				<div class="r2ImageRoullet" id="r2wRoulletOutter" style="margin-left:-11em">
					<%
					for (int i = 0; i < 6; i++) {
						if (i == 2) {
					%>
					<img class="roulletProfile" alt="참여자프로필<%=i%>"
						src="/img/none_profile.png" id="r2w_roulletProfile<%=i %>" />
					<%
					} else {
					%>
					<img class="roulletProfile" alt="참여자프로필<%=i%>"
						src="/img/none_profile.png" id="r2w_roulletProfile<%=i %>" />
					<%
					}
					}
					%>
				</div>
			</div>
		</div>

	</div>
	<!-- 2라운드 대진표 -->
	<div id="screen4" class="contentBody">
		<div class="contentTitle">
			<img alt="2라운드 대진표 타이틀" src="/img/part/round2_title.png"></>
		</div>
		<div class="braketColumn">
			<div class="match">
				<div class="matchTitle">MATCH1</div>
				<div class="braketParticipant">
					<div class="braketNameCard" id="r2m11">&nbsp;</div>
					<div class="braketName">VS</div>
					<div class="braketNameCard" id="r2m12">&nbsp;</div>
				</div>
			</div>

			<div class="match">
				<div class="matchTitle">MATCH2</div>
				<div class="braketParticipant">
					<div class="braketNameCard" id="r2m21">&nbsp;</div>
					<div class="braketName">VS</div>
					<div class="braketNameCard" id="r2m22">&nbsp;</div>
				</div>
			</div>

			<div class="match">
				<div class="matchTitle">MATCH3</div>
				<div class="braketParticipant">
					<div class="braketNameCard" id="r2m31">&nbsp;</div>
					<div class="braketName">VS</div>
					<div class="braketNameCard" id="r2m32">&nbsp;</div>
				</div>
			</div>
		</div>
		<br>
		<div class="braketColumn">
			<div class="match">
				<div class="matchTitle">MATCH4</div>
				<div class="braketParticipant">
					<div class="braketNameCard" id="r2m41">&nbsp;</div>
					<div class="braketName">VS</div>
					<div class="braketNameCard" id="r2m42">&nbsp;</div>
				</div>
			</div>

			<div class="match">
				<div class="matchTitle">MATCH5</div>
				<div class="braketParticipant">
					<div class="braketNameCard" id="r2m51">&nbsp;</div>
					<div class="braketName">VS</div>
					<div class="braketNameCard" id="r2m52">&nbsp;</div>
				</div>
			</div>

			<div class="match">
				<div class="matchTitle">MATCH6</div>
				<div class="braketParticipant">
					<div class="braketNameCard" id="r2m61">&nbsp;</div>
					<div class="braketName">VS</div>
					<div class="braketNameCard" id="r2m62">&nbsp;</div>
				</div>
			</div>
		</div>
	</div>
	
	<div id="screen10" class="contentBody">
		<div class="contentTitle">
			<img alt="결승 진출 타이틀" src="/img/part/part_title.png"/>
		</div>
		<div class="flex center">
			<div class="showNameCard opacity1 border" id="r3_partCard0">&nbsp;</div>
			<div class="showNameCard opacity1 border" id="r3_partCard1">&nbsp;</div>
			<div class="showNameCard opacity1 border" id="r3_partCard2">&nbsp;</div>
		</div>
		<div class="flex center">
			<div class="showNameCard opacity1 border" id="r3_partCard3">&nbsp;</div>
			<div class="showNameCard opacity1 border" id="r3_partCard4">&nbsp;</div>
			<div class="showNameCard opacity1 border" id="r3_partCard5">&nbsp;</div>
		</div>
		
	</div>
	
	<!-- 3라운드 테마추첨 -->
	<div id="screen5" class="contentBody">
		<div class="contentTitle">
			<img alt="테마추첨 타이틀" src="/img/theme/theme_title.png"></>
		</div>
		<div class="themeCard" id="themeCard0">&nbsp;</div>
		<div class="themeCard" id="themeCard1">&nbsp;</div>
		<div class="themeCard" id="themeCard2">&nbsp;</div>
		<div class="themeCard" id="themeCard3">&nbsp;</div>
		<div class="themeCard" id="themeCard4">&nbsp;</div>
		<div class="themeCard" id="themeCard5">&nbsp;</div>
	</div>
	<!-- 3라운드 팀 편성표 -->
	<div id="screen6" class="contentBody">
		<div class="contentTitle">
			<img alt="3라운드 대진표 타이틀" src="/img/part/final_title.png"></>
		</div>
		<div class="rpsColumn">
			<div id="rps0" class="rps">&nbsp;</div>
			<div id="rps1" class="rps">&nbsp;</div>
		</div>
		<div class="finalcolumn">
			<%
			for (int i = 0; i < 3; i++) {
			%>
			<div class="finalBraketNameCard" id="finalProfile0<%=i%>">&nbsp;</div>
			<%
			}
			%>
			<div id="VS">
				<img alt="vs" src="/img/logo/vs.png">
			</div>
			<%
			for (int i = 0; i < 3; i++) {
			%>
			<div class="finalBraketNameCard" id="finalProfile1<%=i%>">&nbsp;</div>
			<%
			}
			%>
		</div>
	</div>
	<!-- 3라운드 대진표 -->
	<div id="screen7" class="contentBody">
		<div class="contentTitle">
			<img alt="3라운드 대진표 타이틀" src="/img/part/final_title.png"></>
		</div>
		<div class="braketColumn" style="margin-top: 10em">
			<div class="match">
				<div id="themeTitle0" class="matchTitle">Theme1</div>
				<div class="braketParticipant">
					<div class="braketNameCard" id="r3m11">&nbsp;</div>
					<div class="braketName">VS</div>
					<div class="braketNameCard" id="r3m12">&nbsp;</div>
				</div>
			</div>

			<div class="match">
				<div id="themeTitle1" class="matchTitle">Theme2</div>
				<div class="braketParticipant">
					<div class="braketNameCard" id="r3m21">&nbsp;</div>
					<div class="braketName">VS</div>
					<div class="braketNameCard" id="r3m22">&nbsp;</div>
				</div>
			</div>

			<div class="match">
				<div id="themeTitle2" class="matchTitle">Theme3</div>
				<div class="braketParticipant">
					<div class="braketNameCard" id="r3m31">&nbsp;</div>
					<div class="braketName">VS</div>
					<div class="braketNameCard" id="r3m32">&nbsp;</div>
				</div>
			</div>
		</div>
		<div class="braketColumn">
			<div class="match flex center" style="height:8vh">
				<div class="score" id="s11"></div>
				<div class="score" id="s12"></div>
			</div>
			<div class="match flex center" style="height:8vh">
				<div class="score" id="s21"></div>
				<div class="score" id="s22"></div>
			</div>
			<div class="match flex center" style="height:8vh">
				<div class="score" id="s31"></div>
				<div class="score" id="s32"></div>
			</div>
		</div>
	</div>
	
	<div id="screen8" class="winnerBody">
		
		<div class="flex center" id="txtWinner" style="opacity:0;margin-top:2vh;padding:0;margin-left:0;flex-direction:column">
			 <div class="winTeam winTeam-shadow" style="margin-top:15vh;">
				우승
			</div>
			
			
			<div id="w0" class="winner winner-shadow">
				팀원1
			</div>
			<div id="w1" class="winner winner-shadow">
				팀원2
			</div>
			<div id="w2" class="winner winner-shadow">
				팀원3
			</div> 
			<!-- <div class="braketNameCard" id="w1" style="opacity:1;background-image:url('/img/part/participant/namecard0.png');border:1px solid #888888">&nbsp;</div>
			<div class="braketNameCard" id="w2" style="opacity:1;background-image:url('/img/part/participant/namecard12.png');border:1px solid #888888">&nbsp;</div>
			<div class="braketNameCard" id="w3" style="opacity:1;background-image:url('/img/part/participant/namecard8.png');border:1px solid #888888">&nbsp;</div>
			 -->
		</div>
	</div>
</body>
</html>