angular.module("facebook",[]).provider("$facebook",function(){var a=!1,b=[];return{init:function(c){window.fbAsyncInit=function(){FB.init(c||{status:!0,xfbml:!0}),a=!0,angular.forEach(b,function(a){a()})},function(a,b,c){var d,e=a.getElementsByTagName(b)[0];a.getElementById(c)||(d=a.createElement(b),d.id=c,d.src="//connect.facebook.net/en_US/all.js",e.parentNode.insertBefore(d,e))}(document,"script","facebook-jssdk")},$get:["$rootScope","$q",function(c,d){function e(){angular.forEach(s,function(a,b){angular.forEach(a,function(a){f(b,a)})})}function f(a,b){FB.Event.subscribe(a+"."+b,function(d){c.$broadcast("facebook."+a+"."+b,d)})}function g(a,b,d){a(function(a){b(a)?c.$$phase?d.reject(a):c.$apply(function(){d.reject(a)}):c.$$phase?d.resolve(a):c.$apply(function(){d.resolve(a)})})}function h(a,b,c){c=c||function(a){return a&&a.error},g(a,c,b)}function i(a,b,c,d){var e=Array.prototype.slice.call(c,0);h(function(b){e.push(b),a.apply(FB,e)},b,d)}function j(a,b,c,d){h(function(b){a(b,c)},b,d)}function k(a,b,c){h(a,b,c)}function l(){var c=d.defer(),e=arguments;return a?i(FB.api,c,e):b.push(function(){i(FB.api,c,e)}),c.promise}function m(){var c=d.defer(),e=arguments;return a?i(FB.ui,c,e):b.push(function(){i(FB.ui,c,e)}),c.promise}function n(){return a?FB.getAuthResponse():null}function o(){var c=d.defer();return a?k(FB.getLoginStatus,c):b.push(function(){k(FB.getLoginStatus,c)}),c.promise}function p(c){var e=d.defer();return a?c?j(FB.login,e,c,function(a){return!a||!a.authResponse}):k(FB.login,e,function(a){return!a||!a.authResponse}):c?b.push(function(){j(FB.login,e,c,function(a){return!a||!a.authResponse})}):b.push(function(){k(FB.login,e,function(a){return!a||!a.authResponse})}),e.promise}function q(){var c=d.defer();return a?k(FB.logout,c,function(){return!1}):b.push(function(){k(FB.logout,c,function(){return!1})}),c.promise}function r(){var c=d.defer(),e=arguments;return a?i(FB.XFBML.parse,c,e):b.push(function(){i(FB.XFBML.parse,c,e)}),c.promise}var s={auth:["login","authResponseChange","statusChange","logout","prompt"],xfbml:["render"],edge:["create","remove"],comment:["create","remove"],message:["send"]};return a?e():b.push(e),{getAuthResponse:n,getLoginStatus:o,logout:q,login:p,api:l,ui:m,parse:r}}]}});