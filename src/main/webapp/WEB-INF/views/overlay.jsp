<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>흑백싱어 오버레이</title>
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script src='http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.5/jquery-ui.min.js'></script>
<script src="/js/overlay.js"></script>
<link href="/css/overlay.css" rel="stylesheet" />
</head>
<body>
	<!-- 로고 표시 -->
	<div id="screen0">
		<video class="bg-wait-video" src="/img/background/background_wait.mp4" autoplay muted loop></video>
		<img id="logo" alt="로고" src="/img/logo/logo.png" />
	</div>
	<!-- 1라운드 대진표 추첨 -->
	<div id="screen1" class="contentBody">
		<!-- title -->
		<div class="contentTitle">
			<img alt="1라운드 대진표 추첨 타이틀" src="/img/part/braket_title.png"></>
		</div>
		<!-- 메인 컨텐츠 -->
		<div class="mainContent">
			<div class="drawNameCard" id="r11Profile" style="margin-top:-80%">
				<!-- 먼저 추첨 된 참여자 -->
				&nbsp;
			</div>
			<div id="VS">
				<img alt="vs" src="/img/logo/vs.png"/>
			</div>
			<div class="drawNameCard" id="r12Profile" style="margin-top:-80%">
				<!-- 먼저 추첨 된 참여자 -->
				&nbsp;
			</div>
		</div>
		<!-- 이미지 룰렛 -->
		<div class="imageRoullet">
			<%
			for (int i = 0; i < 12; i++) {
				if (i != 5) {
			%>
			<img id="r1_roulletProfile<%=i %>" class="roulletProfile" alt="참여자프로필<%=i %>" src="/img/none_profile.png"/>
			<%
			} else {
			%>
			<img id="r1_roulletProfile<%=i %>" class="roulletPick" alt="참여자프로필<%=i %>" src="/img/none_profile.png"/>
			<%
			}
			}
			%>
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
					<div class="braketNameCard">
						<img class="braketProfile" id="r1m11p" alt="매치1,1번 참가자"
							src="/img/none_profile.png" />
						<div class="braketName" id="r1m11n">ㅇㅇㅇ</div>
					</div>
					<div class="braketName">VS</div>
					<div class="braketNameCard">
						<img class="braketProfile" id="r1m12p" alt="매치1,2번 참가자"
							src="/img/none_profile.png" />
						<div class="braketName" id="r1m12n">ㅇㅇㅇ</div>
					</div>
				</div>
			</div>

			<div class="match">
				<div class="matchTitle">MATCH2</div>
				<div class="braketParticipant">
					<div class="braketNameCard">
						<img class="braketProfile" id="r1m21p" alt="매치2,1번 참가자"
							src="/img/none_profile.png" />
						<div class="braketName" id="r1m21n">ㅇㅇㅇ</div>
					</div>
					<div class="braketName">VS</div>
					<div class="braketNameCard">
						<img class="braketProfile" id="r1m22p" alt="매치2,2번 참가자"
							src="/img/none_profile.png" />
						<div class="braketName" id="r1m22n">ㅇㅇㅇ</div>
					</div>
				</div>
			</div>

			<div class="match">
				<div class="matchTitle">MATCH3</div>
				<div class="braketParticipant">
					<div class="braketNameCard">
						<img class="braketProfile" id="r1m31p" alt="매치3,1번 참가자"
							src="/img/none_profile.png" />
						<div class="braketName" id="r1m31n">ㅇㅇㅇ</div>
					</div>
					<div class="braketName">VS</div>
					<div class="braketNameCard">
						<img class="braketProfile" id="r1m32p" alt="매치3,2번 참가자"
							src="/img/none_profile.png" />
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
						<img class="braketProfile" id="r1m41p" alt="매치4,1번 참가자"
							src="/img/none_profile.png" />
						<div class="braketName" id="r1m11n">ㅇㅇㅇ</div>
					</div>
					<div class="braketName">VS</div>
					<div class="braketNameCard">
						<img class="braketProfile" id="r1m42p" alt="매치4,2번 참가자"
							src="/img/none_profile.png" />
						<div class="braketName" id="r1m12n">ㅇㅇㅇ</div>
					</div>
				</div>
			</div>

			<div class="match">
				<div class="matchTitle">MATCH5</div>
				<div class="braketParticipant">
					<div class="braketNameCard">
						<img class="braketProfile" id="r1m51p" alt="매치5,1번 참가자"
							src="/img/none_profile.png" />
						<div class="braketName" id="r1m21n">ㅇㅇㅇ</div>
					</div>
					<div class="braketName">VS</div>
					<div class="braketNameCard">
						<img class="braketProfile" id="r1m52p" alt="매치5,2번 참가자"
							src="/img/none_profile.png" />
						<div class="braketName" id="r1m22n">ㅇㅇㅇ</div>
					</div>
				</div>
			</div>

			<div class="match">
				<div class="matchTitle">MATCH6</div>
				<div class="braketParticipant">
					<div class="braketNameCard">
						<img class="braketProfile" id="r1m61p" alt="매치6,1번 참가자"
							src="/img/none_profile.png" />
						<div class="braketName" id="r1m61n">ㅇㅇㅇ</div>
					</div>
					<div class="braketName">VS</div>
					<div class="braketNameCard">
						<img class="braketProfile" id="r1m62p" alt="매치6,2번 참가자"
							src="/img/none_profile.png" />
						<div class="braketName" id="r1m62n">ㅇㅇㅇ</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- 2라운드 대진표 추첨 -->
	<div id="screen3" class="contentBody">
		<!-- title -->
		<div class="contentTitle">
			<img alt="2라운드 대진표 추첨 타이틀" src="/img/part/braket_title.png"></>
		</div>
		<!-- 메인 컨텐츠 -->
		<div class="mainContent">
			<div class="drawNameCard" style="margin-right: 280px">
				&nbsp;
			</div>
			<div id="VS">
				<img alt="vs" src="/img/logo/vs.png">
			</div>
			<div class="drawNameCard" style="margin-left: 280px">
				&nbsp;
			</div>
		</div>
		<!-- 이미지 룰렛 -->
		<div class="flex" style="margin-left: 1.4%">
			<div class="r2ImageRoullet" style="margin-left: 1.2em;">
				<%
				for (int i = 0; i < 6; i++) {
					if (i == 2) {
				%>
				<img class="roulletPick" alt="참여자프로필<%=i%>"
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
			<div class="r2ImageRoullet" style="margin-left: 1em;">
				<%
				for (int i = 0; i < 6; i++) {
					if (i == 2) {
				%>
				<img class="roulletPick" alt="참여자프로필<%=i%>"
					src="/img/none_profile.png"  id="r2w_roulletProfile<%=i %>" />
				<%
				} else {
				%>
				<img class="roulletProfile" alt="참여자프로필<%=i%>"
					src="/img/none_profile.png"  id="r2w_roulletProfile<%=i %>" />
				<%
				}
				}
				%>
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
					<div class="braketNameCard">
						<img class="braketProfile" id="r2m11p" alt="매치1,1번 참가자"
							src="/img/none_profile.png" />
						<div class="braketName" id="r2m11n">ㅇㅇㅇ</div>
					</div>
					<div class="braketName">VS</div>
					<div class="braketNameCard">
						<img class="braketProfile" id="r2m12p" alt="매치1,2번 참가자"
							src="/img/none_profile.png" />
						<div class="braketName" id="r2m12n">ㅇㅇㅇ</div>
					</div>
				</div>
			</div>

			<div class="match">
				<div class="matchTitle">MATCH2</div>
				<div class="braketParticipant">
					<div class="braketNameCard">
						<img class="braketProfile" id="r2m21p" alt="매치2,1번 참가자"
							src="/img/none_profile.png" />
						<div class="braketName" id="r2m21n">ㅇㅇㅇ</div>
					</div>
					<div class="braketName">VS</div>
					<div class="braketNameCard">
						<img class="braketProfile" id="r2m22p" alt="매치2,2번 참가자"
							src="/img/none_profile.png" />
						<div class="braketName" id="r2m22n">ㅇㅇㅇ</div>
					</div>
				</div>
			</div>

			<div class="match">
				<div class="matchTitle">MATCH3</div>
				<div class="braketParticipant">
					<div class="braketNameCard">
						<img class="braketProfile" id="r2m31p" alt="매치3,1번 참가자"
							src="/img/none_profile.png" />
						<div class="braketName" id="r2m31n">ㅇㅇㅇ</div>
					</div>
					<div class="braketName">VS</div>
					<div class="braketNameCard">
						<img class="braketProfile" id="r2m32p" alt="매치3,2번 참가자"
							src="/img/none_profile.png" />
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
						<img class="braketProfile" id="r2m41p" alt="매치4,1번 참가자"
							src="/img/none_profile.png" />
						<div class="braketName" id="r2m11n">ㅇㅇㅇ</div>
					</div>
					<div class="braketName">VS</div>
					<div class="braketNameCard">
						<img class="braketProfile" id="r2m42p" alt="매치4,2번 참가자"
							src="/img/none_profile.png" />
						<div class="braketName" id="r2m12n">ㅇㅇㅇ</div>
					</div>
				</div>
			</div>

			<div class="match">
				<div class="matchTitle">MATCH5</div>
				<div class="braketParticipant">
					<div class="braketNameCard">
						<img class="braketProfile" id="r2m51p" alt="매치5,1번 참가자"
							src="/img/none_profile.png" />
						<div class="braketName" id="r2m21n">ㅇㅇㅇ</div>
					</div>
					<div class="braketName">VS</div>
					<div class="braketNameCard">
						<img class="braketProfile" id="r2m52p" alt="매치5,2번 참가자"
							src="/img/none_profile.png" />
						<div class="braketName" id="r2m22n">ㅇㅇㅇ</div>
					</div>
				</div>
			</div>

			<div class="match">
				<div class="matchTitle">MATCH6</div>
				<div class="braketParticipant">
					<div class="braketNameCard">
						<img class="braketProfile" id="r2m61p" alt="매치6,1번 참가자"
							src="/img/none_profile.png" />
						<div class="braketName" id="r2m61n">ㅇㅇㅇ</div>
					</div>
					<div class="braketName">VS</div>
					<div class="braketNameCard">
						<img class="braketProfile" id="r2m62p" alt="매치6,2번 참가자"
							src="/img/none_profile.png" />
						<div class="braketName" id="r2m62n">ㅇㅇㅇ</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- 3라운드 테마추첨 -->
	<div id="screen5" class="contentBody">
		<div class="contentTitle">
			<img alt="테마추첨 타이틀" src="/img/theme/theme_title.png"></>
		</div>
		<div class="themeCard" id="themeCard0">
			&nbsp;
		</div>
		<div class="themeCard" id="themeCard1">
			&nbsp;
		</div>
		<div class="themeCard" id="themeCard2">
			&nbsp;
		</div>
		<div class="themeCard" id="themeCard3">
			&nbsp;
		</div>
		<div class="themeCard" id="themeCard4">
			&nbsp;
		</div>
		<div class="themeCard" id="themeCard5">
			&nbsp;
		</div>
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
			<div class="finalBraketNameCard" id="finalProfile<%=i%>">&nbsp;</div>
			<%
			}
			%>
			<div id="VS"><img alt="vs" src="/img/logo/vs.png"></div>
			<%
			for (int i = 3; i < 6; i++) {
			%>
			<div class="finalBraketNameCard" id="finalProfile<%=i%>">&nbsp;</div>
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
		<div class="flex" style="justify-content:center;align-item:center;">
			<div class="braketColumn">
				<div class="match" style="margin:120px 25px 0px 25px;">
					<div id="themeTitle0" class="matchTitle">Theme1</div>
					<div class="braketParticipant">
						<div class="braketNameCard">
							<img class="braketProfile" id="r3m11p" alt="매치1,1번 참가자"
								src="/img/none_profile.png" />
							<div class="braketName" id="r3m11n">ㅇㅇㅇ</div>
						</div>
						<div class="braketName">
							<img alt="vs" src="/img/logo/vs.png"/>
						</div>
						<div class="braketNameCard">
							<img class="braketProfile" id="r3m12p" alt="매치1,2번 참가자"
								src="/img/none_profile.png" />
							<div class="braketName" id="r3m12n">ㅇㅇㅇ</div>
						</div>
					</div>
				</div>

				<div class="match" style="margin:120px 25px 0px 25px;">
					<div  id="themeTitle1" class="matchTitle">Theme2</div>
					<div class="braketParticipant">
						<div class="braketNameCard">
							<img class="braketProfile" id="r3m21p" alt="매치2,1번 참가자"
								src="/img/none_profile.png" />
							<div class="braketName" id="r3m21n">ㅇㅇㅇ</div>
						</div>
						<div class="braketName">
							<img alt="vs" src="/img/logo/vs.png"/>
						</div>
						<div class="braketNameCard">
							<img class="braketProfile" id="r3m22p" alt="매치2,2번 참가자"
								src="/img/none_profile.png" />
							<div class="braketName" id="r3m22n">ㅇㅇㅇ</div>
						</div>
					</div>
				</div>

				<div class="match" style="margin:120px 25px 0px 25px;">
					<div id="themeTitle2" class="matchTitle">Theme3</div>
					<div class="braketParticipant">
						<div class="braketNameCard">
							<img class="braketProfile" id="r3m31p" alt="매치3,1번 참가자"
								src="/img/none_profile.png" />
							<div class="braketName" id="r3m31n">ㅇㅇㅇ</div>
						</div>
						<div class="braketName">VS</div>
						<div class="braketNameCard">
							<img class="braketProfile" id="r3m32p" alt="매치3,2번 참가자"
								src="/img/none_profile.png" />
							<div class="braketName" id="r3m32n">ㅇㅇㅇ</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</body>
</html>