!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dreamcrafter-3rd-anniversary-earth/",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r,o;n(0);r=document.querySelector("#content"),o=document.querySelectorAll(".stars"),window.addEventListener("mousemove",(function(e){var t=window.innerWidth,n=window.innerHeight,c=-(e.clientY-n/2)/(n/2),u=(e.clientX-t/2)/(t/2);r.style.transform="rotateX(".concat(7*c,"deg) rotateY(").concat(10*u,"deg)"),o.forEach((function(e){e.style.backgroundPosition="".concat(28*u,"px ").concat(40*-c,"px")}))})),document.querySelectorAll("img[data-src]").forEach((function(e){e.setAttribute("src",e.dataset.src)}))}]);