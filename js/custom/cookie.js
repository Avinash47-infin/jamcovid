/**
 - cookie.js
 - Custom Cookie
 - Project: Covid-19
 **/

 var applicationSession = {
 	setCookie: function(cname, cvalue, exdays) {
 		var d = new Date();
 		d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
 		//d.setTime(d.getTime() + (60 * 60 * 1000));
 		var expires = "expires="+d.toUTCString();
 		document.cookie = cname + "=" + JSON.stringify(cvalue) + ";" + expires + ";path=/";
 	},
 	getCookie: function(cname) {
 		var name = cname + "=";
 		var ca = document.cookie.split(';');
 		for(var i = 0; i < ca.length; i++) {
 			var c = ca[i];
 			while (c.charAt(0) == ' ') {
 				c = c.substring(1);
 			}
 			if (c.indexOf(name) == 0) {
 				return JSON.parse(c.substring(name.length, c.length));
 			}
 		}
 		return "";
 	},
 	checkCookie: function(sessionKey) {
 		var user = this.getCookie(sessionKey);
 		if (user != "") {
 			return true;
 		} else {
 			return false;
 		}
 	},
 }