	document.write('\
		<section class="side">\
			<section class="sideTop">\
				<ul class="sideMenu">\
					<li class="sideMenuList">\
						<a href="javascript:onClick=sideMenu(&#39sideMenu1&#39);">공지사항</a>\
						<ul id="sideMenu1">\
							<li><a id="sideMenu1-1" href="menu1-1.html">활동규칙</a></li>\
							<li><a id="sideMenu1-2" href="menu1-2.html">공지사항</a></li>\
						</ul>\
					</li>\
					<li class="sideMenuList">\
						<a href="javascript:onClick=sideMenu(&#39sideMenu2&#39);">강의실</a>\
						<ul id="sideMenu2">\
							<li><a id="sideMenu2-1" href="menu2-1.html">Python</a></li>\
							<li><a id="sideMenu2-2" href="menu2-2.html">C/C#/C++</a></li>\
							<li><a id="sideMenu2-3" href="menu2-3.html">Java</a></li>\
							<li><a id="sideMenu2-4" href="menu2-4.html">HTML/JavaScript</a></li>\
							<li><a id="sideMenu2-5" href="menu2-5.html">기타</a></li>\
						</ul>\
					</li>\
					<li class="sideMenuList">\
						<a href="javascript:onClick=sideMenu(&#39sideMenu3&#39);">커뮤니티</a>\
						<ul id="sideMenu3">\
							<li><a id="sideMenu3-1" href="menu3-1.html">자유게시판</a></li>\
							<li><a id="sideMenu3-2" href="menu3-2.html">질문/답변</a></li>\
							<li><a id="sideMenu3-3" href="menu3-3.html">자료실</a></li>\
							<li><a id="sideMenu3-4" href="menu3-4.html">건의게시판</a></li>\
							<li><a id="sideMenu3-5" href="menu3-5.html">신고게시판</a></li>\
						</ul>\
					</li>\
					<li class="sideMenuList">\
						<a href="javascript:onClick=sideMenu(&#39sideMenu4&#39);">소스공유</a>\
						<ul id="sideMenu4">\
							<li><a id="sideMenu4-1" href="menu4-1.html">오픈소스</a></li>\
							<li><a id="sideMenu4-2" href="menu4-2.html">라이브러리</a></li>\
						</ul>\
					</li>\
					<li class="sideMenuList">\
						<a href="javascript:onClick=sideMenu(&#39sideMenu5&#39);">제작의뢰</a>\
						<ul id="sideMenu5">\
							<li><a id="sideMenu5-1" href="menu5-1.html">제작의뢰</a></li>\
							<li><a id="sideMenu5-2" href="menu5-2.html">구인/구직</a></li>\
						</ul>\
					</li>\
					<li class="sideMenuList">\
						<a href="javascript:onClick=sideMenu(&#39sideMenu6&#39);">포럼</a>\
						<ul id="sideMenu6">\
							<li><a id="sideMenu6-1" href="menu6-1.html">국내소식</a></li>\
							<li><a id="sideMenu6-2" href="menu6-2.html">해외소식</a></li>\
						</ul>\
					</li>\
				</ul>\
			</section>\
			<section class="sideTime">\
				<p id="sideTime"></p>\
			</section>\
			<section class="sideGoogle">\
				<div>구글링하기</div>\
				<form>\
					<input id="inputGoogle" class="inputGoogle" type="text" placeholder="검색어">\
					<input class="clickGoogle" type="button" value="검색" onclick="google()">\
				</form>\
			</section>\
			<section class="linkGoogle">\
				<a href="http://www.google.co.kr" target="blank"><img src="include/google.png"></a>\
			</section>\
			<section class="linkYoutube">\
				<a href="http://www.youtube.com" target="blank"><img src="include/youtube.png"></a>\
			</section>\
			<section class="linkNaver">\
				<a href="http://www.naver.com" target="blank"><img src="include/naver.png"></a>\
			</section>\
			<section class="sideBot">\
				<div><a href="p4rum.html" target="blank">P4RUM</a></div>\
			</section>\
		</section>\
	')