var swfobject=function(){var e,t,a,n,i,r,o="undefined",l="object",s="Shockwave Flash",c="application/x-shockwave-flash",f="SWFObjectExprInst",d="onreadystatechange",p=window,u=document,v=navigator,y=!1,h=[function(){y?function(){var e=u.getElementsByTagName("body")[0],t=P(l);t.setAttribute("type",c);var a=e.appendChild(t);if(a){var n=0;!function(){if(typeof a.GetVariable!=o){var i=a.GetVariable("$version");i&&(i=i.split(" ")[1].split(","),S.pv=[parseInt(i[0],10),parseInt(i[1],10),parseInt(i[2],10)])}else if(n<10)return n++,void setTimeout(arguments.callee,10);e.removeChild(t),a=null,I()}()}else I()}():I()}],m=[],w=[],g=[],b=!1,C=!1,E=!0,S=function(){var e=typeof u.getElementById!=o&&typeof u.getElementsByTagName!=o&&typeof u.createElement!=o,t=v.userAgent.toLowerCase(),a=v.platform.toLowerCase(),n=/win/.test(a||t),i=/mac/.test(a||t),r=!!/webkit/.test(t)&&parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")),f=!1,d=[0,0,0],h=null;if(typeof v.plugins!=o&&typeof v.plugins[s]==l)!(h=v.plugins[s].description)||typeof v.mimeTypes!=o&&v.mimeTypes[c]&&!v.mimeTypes[c].enabledPlugin||(y=!0,f=!1,h=h.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),d[0]=parseInt(h.replace(/^(.*)\..*$/,"$1"),10),d[1]=parseInt(h.replace(/^.*\.(.*)\s.*$/,"$1"),10),d[2]=/[a-zA-Z]/.test(h)?parseInt(h.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof p.ActiveXObject!=o)try{var m=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");m&&(h=m.GetVariable("$version"))&&(f=!0,h=h.split(" ")[1].split(","),d=[parseInt(h[0],10),parseInt(h[1],10),parseInt(h[2],10)])}catch(e){}return{w3:e,pv:d,wk:r,ie:f,win:n,mac:i}}();S.w3&&((typeof u.readyState!=o&&"complete"==u.readyState||typeof u.readyState==o&&(u.getElementsByTagName("body")[0]||u.body))&&A(),b||(typeof u.addEventListener!=o&&u.addEventListener("DOMContentLoaded",A,!1),S.ie&&S.win&&(u.attachEvent(d,(function(){"complete"==u.readyState&&(u.detachEvent(d,arguments.callee),A())})),p==top&&function(){if(!b){try{u.documentElement.doScroll("left")}catch(e){return void setTimeout(arguments.callee,0)}A()}}()),S.wk&&function(){b||(/loaded|complete/.test(u.readyState)?A():setTimeout(arguments.callee,0))}(),T(A)));function A(){if(!b){try{var e=u.getElementsByTagName("body")[0].appendChild(P("span"));e.parentNode.removeChild(e)}catch(e){return}b=!0;for(var t=h.length,a=0;a<t;a++)h[a]()}}function N(e){b?e():h[h.length]=e}function T(e){if(typeof p.addEventListener!=o)p.addEventListener("load",e,!1);else if(typeof u.addEventListener!=o)u.addEventListener("load",e,!1);else if(typeof p.attachEvent!=o)!function(e,t,a){e.attachEvent(t,a),g[g.length]=[e,t,a]}(p,"onload",e);else if("function"==typeof p.onload){var t=p.onload;p.onload=function(){t(),e()}}else p.onload=e}function I(){var e=m.length;if(e>0)for(var t=0;t<e;t++){var a=m[t].id,n=m[t].callbackFn,i={success:!1,id:a};if(S.pv[0]>0){var r=V(a);if(r)if(!R(m[t].swfVersion)||S.wk&&S.wk<312)if(m[t].expressInstall&&k()){var l={};l.data=m[t].expressInstall,l.width=r.getAttribute("width")||"0",l.height=r.getAttribute("height")||"0",r.getAttribute("class")&&(l.styleclass=r.getAttribute("class")),r.getAttribute("align")&&(l.align=r.getAttribute("align"));for(var s={},c=r.getElementsByTagName("param"),f=c.length,d=0;d<f;d++)"movie"!=c[d].getAttribute("name").toLowerCase()&&(s[c[d].getAttribute("name")]=c[d].getAttribute("value"));j(l,s,a,n)}else B(r),n&&n(i);else W(a,!0),n&&(i.success=!0,i.ref=L(a),n(i))}else if(W(a,!0),n){var p=L(a);p&&typeof p.SetVariable!=o&&(i.success=!0,i.ref=p),n(i)}}}function L(e){var t=null,a=V(e);if(a&&"OBJECT"==a.nodeName)if(typeof a.SetVariable!=o)t=a;else{var n=a.getElementsByTagName(l)[0];n&&(t=n)}return t}function k(){return!C&&R("6.0.65")&&(S.win||S.mac)&&!(S.wk&&S.wk<312)}function j(i,r,l,s){C=!0,a=s||null,n={success:!1,id:l};var c=V(l);if(c){"OBJECT"==c.nodeName?(e=O(c),t=null):(e=c,t=l),i.id=f,(typeof i.width==o||!/%$/.test(i.width)&&parseInt(i.width,10)<310)&&(i.width="310"),(typeof i.height==o||!/%$/.test(i.height)&&parseInt(i.height,10)<137)&&(i.height="137"),u.title=u.title.slice(0,47)+" - Flash Player Installation";var d=S.ie&&S.win?"ActiveX":"PlugIn",v="MMredirectURL="+p.location.toString().replace(/&/g,"%26")+"&MMplayerType="+d+"&MMdoctitle="+u.title;if(typeof r.flashvars!=o?r.flashvars+="&"+v:r.flashvars=v,S.ie&&S.win&&4!=c.readyState){var y=P("div");l+="SWFObjectNew",y.setAttribute("id",l),c.parentNode.insertBefore(y,c),c.style.display="none",function(){4==c.readyState?c.parentNode.removeChild(c):setTimeout(arguments.callee,10)}()}F(i,r,l)}}function B(e){if(S.ie&&S.win&&4!=e.readyState){var t=P("div");e.parentNode.insertBefore(t,e),t.parentNode.replaceChild(O(e),t),e.style.display="none",function(){4==e.readyState?e.parentNode.removeChild(e):setTimeout(arguments.callee,10)}()}else e.parentNode.replaceChild(O(e),e)}function O(e){var t=P("div");if(S.win&&S.ie)t.innerHTML=e.innerHTML;else{var a=e.getElementsByTagName(l)[0];if(a){var n=a.childNodes;if(n)for(var i=n.length,r=0;r<i;r++)1==n[r].nodeType&&"PARAM"==n[r].nodeName||8==n[r].nodeType||t.appendChild(n[r].cloneNode(!0))}}return t}function F(e,t,a){var n,i=V(a);if(S.wk&&S.wk<312)return n;if(i)if(typeof e.id==o&&(e.id=a),S.ie&&S.win){var r="";for(var s in e)e[s]!=Object.prototype[s]&&("data"==s.toLowerCase()?t.movie=e[s]:"styleclass"==s.toLowerCase()?r+=' class="'+e[s]+'"':"classid"!=s.toLowerCase()&&(r+=" "+s+'="'+e[s]+'"'));var f="";for(var d in t)t[d]!=Object.prototype[d]&&(f+='<param name="'+d+'" value="'+t[d]+'" />');i.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+r+">"+f+"</object>",w[w.length]=e.id,n=V(e.id)}else{var p=P(l);for(var u in p.setAttribute("type",c),e)e[u]!=Object.prototype[u]&&("styleclass"==u.toLowerCase()?p.setAttribute("class",e[u]):"classid"!=u.toLowerCase()&&p.setAttribute(u,e[u]));for(var v in t)t[v]!=Object.prototype[v]&&"movie"!=v.toLowerCase()&&$(p,v,t[v]);i.parentNode.replaceChild(p,i),n=p}return n}function $(e,t,a){var n=P("param");n.setAttribute("name",t),n.setAttribute("value",a),e.appendChild(n)}function x(e){var t=V(e);t&&"OBJECT"==t.nodeName&&(S.ie&&S.win?(t.style.display="none",function(){4==t.readyState?M(e):setTimeout(arguments.callee,10)}()):t.parentNode.removeChild(t))}function M(e){var t=V(e);if(t){for(var a in t)"function"==typeof t[a]&&(t[a]=null);t.parentNode.removeChild(t)}}function V(e){var t=null;try{t=u.getElementById(e)}catch(e){}return t}function P(e){return u.createElement(e)}function R(e){var t=S.pv,a=e.split(".");return a[0]=parseInt(a[0],10),a[1]=parseInt(a[1],10)||0,a[2]=parseInt(a[2],10)||0,t[0]>a[0]||t[0]==a[0]&&t[1]>a[1]||t[0]==a[0]&&t[1]==a[1]&&t[2]>=a[2]}function D(e,t,a,n){if(!S.ie||!S.mac){var s=u.getElementsByTagName("head")[0];if(s){var c=a&&"string"==typeof a?a:"screen";if(n&&(i=null,r=null),!i||r!=c){var f=P("style");f.setAttribute("type","text/css"),f.setAttribute("media",c),i=s.appendChild(f),S.ie&&S.win&&typeof u.styleSheets!=o&&u.styleSheets.length>0&&(i=u.styleSheets[u.styleSheets.length-1]),r=c}S.ie&&S.win?i&&typeof i.addRule==l&&i.addRule(e,t):i&&typeof u.createTextNode!=o&&i.appendChild(u.createTextNode(e+" {"+t+"}"))}}}function W(e,t){if(E){var a=t?"visible":"hidden";b&&V(e)?V(e).style.visibility=a:D("#"+e,"visibility:"+a)}}function H(e){return null!=/[\\\"<>\.;]/.exec(e)&&typeof encodeURIComponent!=o?encodeURIComponent(e):e}S.ie&&S.win&&window.attachEvent("onunload",(function(){for(var e=g.length,t=0;t<e;t++)g[t][0].detachEvent(g[t][1],g[t][2]);for(var a=w.length,n=0;n<a;n++)x(w[n]);for(var i in S)S[i]=null;for(var r in S=null,swfobject)swfobject[r]=null;swfobject=null}));return{registerObject:function(e,t,a,n){if(S.w3&&e&&t){var i={};i.id=e,i.swfVersion=t,i.expressInstall=a,i.callbackFn=n,m[m.length]=i,W(e,!1)}else n&&n({success:!1,id:e})},getObjectById:function(e){if(S.w3)return L(e)},embedSWF:function(e,t,a,n,i,r,s,c,f,d){var p={success:!1,id:t};S.w3&&!(S.wk&&S.wk<312)&&e&&t&&a&&n&&i?(W(t,!1),N((function(){a+="",n+="";var u={};if(f&&typeof f===l)for(var v in f)u[v]=f[v];u.data=e,u.width=a,u.height=n;var y={};if(c&&typeof c===l)for(var h in c)y[h]=c[h];if(s&&typeof s===l)for(var m in s)typeof y.flashvars!=o?y.flashvars+="&"+m+"="+s[m]:y.flashvars=m+"="+s[m];if(R(i)){var w=F(u,y,t);u.id==t&&W(t,!0),p.success=!0,p.ref=w}else{if(r&&k())return u.data=r,void j(u,y,t,d);W(t,!0)}d&&d(p)}))):d&&d(p)},switchOffAutoHideShow:function(){E=!1},ua:S,getFlashPlayerVersion:function(){return{major:S.pv[0],minor:S.pv[1],release:S.pv[2]}},hasFlashPlayerVersion:R,createSWF:function(e,t,a){return S.w3?F(e,t,a):void 0},showExpressInstall:function(e,t,a,n){S.w3&&k()&&j(e,t,a,n)},removeSWF:function(e){S.w3&&x(e)},createCSS:function(e,t,a,n){S.w3&&D(e,t,a,n)},addDomLoadEvent:N,addLoadEvent:T,getQueryParamValue:function(e){var t=u.location.search||u.location.hash;if(t){if(/\?/.test(t)&&(t=t.split("?")[1]),null==e)return H(t);for(var a=t.split("&"),n=0;n<a.length;n++)if(a[n].substring(0,a[n].indexOf("="))==e)return H(a[n].substring(a[n].indexOf("=")+1))}return""},expressInstallCallback:function(){if(C){var i=V(f);i&&e&&(i.parentNode.replaceChild(e,i),t&&(W(t,!0),S.ie&&S.win&&(e.style.display="block")),a&&a(n)),C=!1}}}}();
//# sourceMappingURL=index.5c140650.js.map