		function unknown()
		{
			alert("구현되지 않은 기능입니다.");
		}
		/*───────────────────────────────────Header───────────────────────────────────!*/
		function bookmark()
		{
			alert("Ctrl + D키를 누르시면 즐겨찾기에 추가하실 수 있습니다.");
		}
		function bgm()
		{
			var bgm = document.getElementById("bgm");

			if(bgm.paused)
			{
				bgm.play();
				document.getElementById("bgmButton").text = "BGM OFF";
			}
			else
			{
				bgm.pause();
				document.getElementById("bgmButton").text = "BGM ON";
			}
		}
		function nextBgm()
		{
			var audio = document.getElementById("bgm");
			var bgmList = ["/music1.mp3", "/music2.mp3", "/music3.mp3", "/music4.mp3"]
			var value = audio.src.split("include");

			for(i = 0; i < bgmList.length; i++)
			{
				if(value[1] == bgmList[bgmList.length - 1])
				{
					var src = "include" + bgmList[0];
					audio.src = src;
				}
				else if(value[1] == bgmList[i])
				{
					var src = "include" + bgmList[i + 1];
					audio.src = src;
				}
			}
		}
		function theme()
		{
			var bodyColor = $("body").css("backgroundColor");
			bodyColor = rgb2hex(bodyColor).toUpperCase();
			var colorList = ["#F2F4F7", "#FFFFFF", "#F15F5F", "#F29661", "#F2CB61", "#BCE55C", "#6799FF", "#6B66FF", "#A566FF", "#000000"];
			
			if(bodyColor == "#000000")
				document.body.style.backgroundColor = "#F2F4F7";
			else
			{
				for(i = 0; i < colorList.length; i++)
				{
					if(bodyColor == colorList[i])
						document.body.style.backgroundColor = colorList[i + 1];
				}
			}
		}
		function rgb2hex(rgb)
		{
			if(rgb.search("rgb") == -1)
				return rgb;
			else
			{
				rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
				function hex(x)
				{
					return ("0" + parseInt(x).toString(16)).slice(-2);
				}
				return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
			}
		}
		function homeClock()
		{
			var time = document.getElementById("time");
			var date = new Date();
			var hms = [date.getHours(), date.getMinutes(), date.getSeconds()];
			var value = 'AM';

			if(hms[0] >= 12)
			{
				value = 'PM';
				hms[0] = hms[0] - 12;
			}
			for(i = 0; i < hms.length; i++)
			{
				hms[i] = hms[i].toString();
				hms[i] = plusZero(hms[i]);
			}
			time.innerHTML = hms[0] + ":" + hms[1] + ":" + hms[2] + " " + value;
			setTimeout('homeClock()', 1000);
		}
		function clock()
		{
			var time = document.getElementById("time");
			var sideTime = document.getElementById("sideTime");
			var date = new Date();
			var hms = [date.getHours(), date.getMinutes(), date.getSeconds()];
			var value = 'AM';

			if(hms[0] >= 12)
			{
				value = 'PM';
				hms[0] = hms[0] - 12;
			}
			for(i = 0; i < hms.length; i++)
			{
				hms[i] = hms[i].toString();
				hms[i] = plusZero(hms[i]);
			}
			time.innerHTML = hms[0] + ":" + hms[1] + ":" + hms[2] + " " + value;
			sideTime.innerHTML = hms[0] + ":" + hms[1] + ":" + hms[2] + " " + value;
			setTimeout('clock()', 1000);
		}
		function plusZero(value)
		{
			var time = '';

			if(value.length < 2)
				time += '0';

			return time + value;
		}
		function naver()
		{
			var search = document.getElementById("inputSearch");
			var address = "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=" + search.value;

			search.value = "";
			window.open(address, 'blank');
		}
		/*─────────────────────────────────Home Main─────────────────────────────────!!*/
		/*─────────────────────────────────Left Main─────────────────────────────────!!*/
		/*─────────────────────────────────Right Main─────────────────────────────────!*/
		function login()
		{
		}
		function mine(id)
		{
			var idList = ["miniMenu1", "miniMenu2", "miniMenu3", "miniMenu4"];
			var idList2 = ["miniSection1", "miniSection2", "miniSection3", "miniSection4"];

			for(i = 0; i < idList.length; i++)
			{
				if(idList[i] == id)
					document.getElementById(idList2[i]).style.display = "block";
				else
					document.getElementById(idList2[i]).style.display = "none";
			}
		}
		/*─────────────────────────────────Menu Main─────────────────────────────────!!*/
		/*────────────────────────────────────Side────────────────────────────────────!*/
		function sideMenu(id)
		{
			var idList = ["sideMenu1", "sideMenu2", "sideMenu3", "sideMenu4", "sideMenu5", "sideMenu6"];

			for(i = 0; i < idList.length; i++)
			{
				if(idList[i] == id)
					document.getElementById(idList[i]).style.display = "block";
				else
					document.getElementById(idList[i]).style.display = "none";
			}
		}
		function google()
		{
			var search = document.getElementById("inputGoogle");
			var address = "http://www.google.co.kr/search?q=" + search.value;

			search.value = "";
			window.open(address, 'blank');
		}
		function notExist()
		{
			alert("존재하지 않는 페이지입니다.")
		}