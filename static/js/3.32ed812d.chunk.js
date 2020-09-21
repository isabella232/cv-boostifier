/*! For license information please see 3.32ed812d.chunk.js.LICENSE.txt */
(this["webpackJsonpcv-geekifier"]=this["webpackJsonpcv-geekifier"]||[]).push([[3,7,9,19],{41:function(t,e,n){"use strict";n.r(e),n.d(e,"createDb",(function(){return i}));var i=function(t,e){var n=new t.Database;return Object.keys(e).forEach((function(t){var i,r=Array.isArray(e[t])?e[t][0]:e[t],s=r&&Object.keys(r),o="references"===t?"refs":t;if(s&&s.length){var c=s.map((function(t){return"".concat(t," string")})).join(", ");i="CREATE TABLE ".concat(o," (").concat(c,")")}else i="CREATE TABLE ".concat(o," (_ string)");n.exec(i),n.tables[o].data=Array.isArray(e[t])?e[t]:[e[t]]})),n}},42:function(t,e){t.exports=function(){var t,e=!0,n=function(t,n,i,r){var s=1===i,o=document.createElement("input"),c=-1,u=function(){var e=Array.from(t.html.querySelectorAll(".user-input")).reverse();c>=e.length&&(c=e.length-1),c<0&&(c=-1),-1===c?t._inputLine.textContent=o.value="":e[c]&&(t._inputLine.textContent=o.value=e[c].innerText)};o.style.position="absolute",o.style.zIndex="-100",o.style.outline="none",o.style.border="none",o.style.opacity="0",o.style.fontSize="0.2em",t._inputLine.textContent="",t._input.style.display="block",t.html.appendChild(o),function t(e,n){var i=n._cursor;setTimeout((function(){e.parentElement&&n._shouldBlinkCursor?(i.style.visibility="visible"===i.style.visibility?"hidden":"visible",t(e,n)):i.style.visibility="visible"}),500)}(o,t),n.length&&t.print(3===i?n+" (y/n)":n),o.onblur=function(){t._cursor.style.display="none"},o.onfocus=function(){o.value=t._inputLine.textContent,t._cursor.style.display="inline"},t.html.onclick=function(){o.focus()},o.onkeydown=function(e){37===e.which||39===e.which||38===e.which||40===e.which||9===e.which?e.preventDefault():s&&13!==e.which&&setTimeout((function(){t._inputLine.textContent=o.value}),1)},o.onkeyup=function(e){if(3===i||13===e.which){t._input.style.display="none";var n=o.value;s&&t.print(n,!1,"user-input"),t.html.removeChild(o),"function"===typeof r&&r(3===i?"Y"===n.toUpperCase()[0]:n)}else"ArrowUp"===e.code?(c++,u()):"ArrowDown"===e.code&&(c--,u())},e?(e=!1,setTimeout((function(){o.focus()}),50)):o.focus()};return function(e){if(!t){var i='<source src="//www.erikosterberg.com/terminaljs/beep.';(t=document.createElement("audio")).innerHTML=i+'mp3" type="audio/mpeg">'+i+'ogg" type="audio/ogg">',t.volume=.05}this.html=document.createElement("div"),this.html.className="Terminal","string"===typeof e&&(this.html.id=e),this._innerWindow=document.createElement("div"),this._output=document.createElement("p"),this._inputLine=document.createElement("span"),this._cursor=document.createElement("span"),this._input=document.createElement("p"),this._input.classList.add("input-line"),this._shouldBlinkCursor=!0,this.beep=function(){t.load(),t.play()},this.print=function(t,e,n){var i=document.createElement("div");n&&i.classList.add(n),e?i.innerHTML=t:i.textContent=t,this._output.appendChild(i)},this.input=function(t,e){n(this,t,1,e)},this.password=function(t,e){n(this,t,2,e)},this.confirm=function(t,e){n(this,t,3,e)},this.clear=function(){this._output.innerHTML=""},this.sleep=function(t,e){setTimeout(e,t)},this.setTextSize=function(t){this._output.style.fontSize=t,this._input.style.fontSize=t},this.setTextColor=function(t){this.html.style.color=t,this._cursor.style.background=t},this.setBackgroundColor=function(t){this.html.style.background=t},this.setWidth=function(t){this.html.style.width=t},this.setHeight=function(t){this.html.style.height=t},this.blinkingCursor=function(t){t=t.toString().toUpperCase(),this._shouldBlinkCursor="TRUE"===t||"1"===t||"YES"===t},this._input.appendChild(this._inputLine),this._input.appendChild(this._cursor),this._innerWindow.appendChild(this._output),this._innerWindow.appendChild(this._input),this.html.appendChild(this._innerWindow),this.setBackgroundColor("black"),this.setTextColor("white"),this.setTextSize("1em"),this.setWidth("100%"),this.setHeight("100%"),this.html.style.fontFamily="Monaco, Courier",this.html.style.margin="0",this._innerWindow.style.padding="10px",this._input.style.margin="0",this._output.style.margin="0",this._cursor.style.background="white",this._cursor.innerHTML="C",this._cursor.style.display="none",this._input.style.display="none"}}()},48:function(t,e,n){"use strict";n.r(e),n.d(e,"SqlTheme",(function(){return y}));var i=n(12),r=n.n(i),s=n(1141),o=n(19),c=n(0),u=n.n(c),l=(n(486),n(41)),a=n(716),h=n.n(a),p=n(718),f=n.n(p),d=n(42),m=n.n(d);function y(t){var e=t.profile,n=Object(c.useRef)(document.getElementById("term-wrapper")),i=Object(c.useRef)(null),a=Object(c.useRef)(new m.a("termId")),p=function(){var t=Object(o.a)(r.a.mark((function t(e){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){setTimeout((function(){try{var r,o=new f.a;if(e.length)if("clear"===e.toLowerCase())t("clear");else if("show tables"===e.toLowerCase())Object.keys(i.current.tables).forEach((function(t){o.addRow(t)})),t(o.toString().split("\n").join("<br>"));else if("help"===e.toLowerCase())t('<small>Typing "show tables" will print the list of tables.<br>Typing an SQL query will print the results<br>Example: "select * from education"</small>');else{var c=e.indexOf("\\G");console.log("hasBackslahG = ".concat(c)),c>0&&(e=e.substr(0,c)),r=i.current.exec(e);var u=Object.keys(r[0])||["N/A"];if(c>0){var l=0,a=r.map((function(t){return l++,"*************************** ".concat(l,". row ***************************<br>")+u.map((function(e){return"".concat(" ".repeat(Math.max(27-e.length,0))).concat(e,": ").concat(t[e]||"NULL")})).join("<br>")})).join("<br>");t(a)}else o.setHeading.apply(o,Object(s.a)(u)),r.forEach((function(t){o.addRow.apply(o,Object.values(t).map((function(t){return t||"NULL"})).map((function(t){return"string"===typeof t?t.split("\n").join(""):t})))})),t(o.toString().split("\n").join("<br>"))}else t("<br>")}catch(h){console.error(h),n(h)}}),200)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){i.current=Object(l.createDb)(h.a,e);var t=e.basics&&e.basics.name,r=a.current,s="Welcome to ".concat(t,' Resume SQL terminal! <br><small>Type "help" to get help</small><br><br>');r.clear(),r.print(s,!0),n.current&&!n.current.children.length&&(n.current.innerHTML="",n.current.appendChild(r.html),function t(e){e.input("",(function(n){p(n.trim()).then((function(n){"clear"===n?e.clear():e.print(n,!0),t(e)})).catch((function(i){console.log(i),e.print("".concat(n,": command not found or wrong sql syntax")),t(e)}))}))}(r))}),[e]),u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{id:"term-wrapper",ref:n}))}},486:function(t,e,n){}}]);
//# sourceMappingURL=3.32ed812d.chunk.js.map