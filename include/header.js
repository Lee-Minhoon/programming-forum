	document.write('\
		<audio id="bgm" autoplay="1" src="include/music1.mp3" onended="nextBgm()"></audio>\
		<div class="topMenu">\
			<div>\
				<a href="javascript:onClick=bookmark();">즐겨찾기</a>\
			</div>\
			<div class="topMenuGap">&nbsp</div>\
			<div>\
				<a id="bgmButton" href="javascript:onClick=bgm();">BGM OFF</a>\
			</div>\
			<div>\
				<a href="javascript:onClick=theme();">테마변환</a>\
			</div>\
			<div>\
				<p id="time"></p>\
			</div>\
		</div>\
		<div class="topMain">\
			<div class="logo">\
				<a href="p4rum.html">\
					Welcome to\
					<br>\
					&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspProgramming Forum\
				</a>\
			</div>\
			<form class="search">\
				<input id="inputSearch" class="inputSearch" type="text" placeholder="검색어">\
				<input class="clickSearch" type="button" value="검색" onclick="naver()">\
			</form>\
		</div>\
		<div class="botMenu">\
			<ul class="botMenuListAll">\
				<li class="botMenuList">\
					<a href="menu1-1.html">공지사항</a>\
					<ul>\
						<li><a href="menu1-1.html">활동규칙</a></li>\
						<li><a href="menu1-2.html">공지사항</a></li>\
					</ul>\
				</li>\
				<li class="botMenuList">\
					<a  href="menu2-1.html">강의실</a>\
					<ul>\
						<li><a href="menu2-1.html">Phython</a></li>\
						<li><a href="menu2-2.html">C/C#/C++</a></li>\
						<li><a href="menu2-3.html">Java</a></li>\
						<li><a href="menu2-4.html">HTML/JavaScript</a></li>\
						<li><a href="menu2-5.html">기타</a></li>\
					</ul>\
				</li>\
				<li class="botMenuList">\
					<a href="menu3-1.html">커뮤니티</a>\
					<ul>\
						<li><a href="menu3-1.html">자유게시판</a></li>\
						<li><a href="menu3-2.html">질문/답변</a></li>\
						<li><a href="menu3-3.html">자료실</a></li>\
						<li><a href="menu3-4.html">건의게시판</a></li>\
						<li><a href="menu3-5.html">신고게시판</a></li>\
					</ul>\
				</li>\
				<li class="botMenuList">\
					<a href="menu4-1.html">소스공유</a>\
					<ul>\
						<li><a href="menu4-1.html">오픈소스</a></li>\
						<li><a href="menu4-2.html">라이브러리</a></li>\
					</ul>\
				</li>\
				<li class="botMenuList">\
					<a href="menu5-1.html">제작의뢰</a>\
					<ul>\
						<li><a href="menu5-1.html">제작의뢰</a></li>\
						<li><a href="menu5-2.html">구인/구직</a></li>\
					</ul>\
				</li>\
				<li class="botMenuListEnd">\
					<a href="menu6-1.html">포럼</a>\
					<ul>\
						<li><a href="menu6-1.html">국내소식</a></li>\
						<li><a href="menu6-2.html">해외소식</a></li>\
					</ul>\
				</li>\
			</ul>\
		</div>\
	');