!function(e,t){"function"==typeof define&&define.amd?define([],t):"undefined"!=typeof exports?t():(t(),e.FileSaver={})}(this,(function(){"use strict";function e(e,t,n){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){i(o.response,t,n)},o.onerror=function(){console.error("could not download file")},o.send()}function t(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function n(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),i=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(a,i,r){var c=o.URL||o.webkitURL,l=document.createElement("a");i=i||a.name||"download",l.download=i,l.rel="noopener","string"==typeof a?(l.href=a,l.origin===location.origin?n(l):t(l.href)?e(a,i,r):n(l,l.target="_blank")):(l.href=c.createObjectURL(a),setTimeout((function(){c.revokeObjectURL(l.href)}),4e4),setTimeout((function(){n(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(o,a,i){if(a=a||o.name||"download","string"!=typeof o)navigator.msSaveOrOpenBlob(function(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(o,i),a);else if(t(o))e(o,a,i);else{var r=document.createElement("a");r.href=o,r.target="_blank",setTimeout((function(){n(r)}))}}:function(t,n,i,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof t)return e(t,n,i);var c="application/octet-stream"===t.type,l=/constructor/i.test(o.HTMLElement)||o.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||c&&l||a)&&"undefined"!=typeof FileReader){var f=new FileReader;f.onloadend=function(){var e=f.result;e=s?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location=e,r=null},f.readAsDataURL(t)}else{var u=o.URL||o.webkitURL,d=u.createObjectURL(t);r?r.location=d:location.href=d,r=null,setTimeout((function(){u.revokeObjectURL(d)}),4e4)}});o.saveAs=i.saveAs=i,"undefined"!=typeof module&&(module.exports=i)}));
//# sourceMappingURL=index.305b4a42.js.map
