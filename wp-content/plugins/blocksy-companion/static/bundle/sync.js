!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t){e.exports=window.blocksyCustomizerSync},function(e,t){e.exports=ctEvents},function(e,t,r){"use strict";r.r(t);var o=r(1),n=r.n(o),a=r(0);function c(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function l(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}n.a.on("ct:header:sync:collect-variable-descriptors",(function(e){e.account=function(e){var t=e.itemId;return d(d({accountHeaderIconSize:{selector:Object(a.assembleSelector)(Object(a.getRootSelectorFor)({itemId:t})),variable:"icon-size",responsive:!0,unit:"px"},accountHeaderAvatarSize:{selector:Object(a.assembleSelector)(Object(a.getRootSelectorFor)({itemId:t})),variable:"avatar-size",responsive:!0,unit:"px"}},Object(a.handleBackgroundOptionFor)(b({id:"accountHeaderBackground",selector:"#account-modal"},"selector",Object(a.assembleSelector)(Object(a.mutateSelector)({selector:[Object(a.getRootSelectorFor)({itemId:t})[0]],operation:"suffix",to_add:"#account-modal"}))))),{},{accountHeaderMargin:{selector:Object(a.assembleSelector)(Object(a.getRootSelectorFor)({itemId:t})),type:"spacing",variable:"margin",responsive:!0,important:!0},accountHeaderColor:[{selector:Object(a.assembleSelector)(Object(a.getRootSelectorFor)({itemId:t})),variable:"linkInitialColor",type:"color:default",responsive:!0},{selector:Object(a.assembleSelector)(Object(a.getRootSelectorFor)({itemId:t})),variable:"linkHoverColor",type:"color:hover",responsive:!0}],transparentAccountHeaderColor:[{selector:Object(a.assembleSelector)(Object(a.mutateSelector)({selector:Object(a.getRootSelectorFor)({itemId:t}),operation:"between",to_add:'[data-transparent-row="yes"]'})),variable:"linkInitialColor",type:"color:default",responsive:!0},{selector:Object(a.assembleSelector)(Object(a.mutateSelector)({selector:Object(a.getRootSelectorFor)({itemId:t}),operation:"between",to_add:'[data-transparent-row="yes"]'})),variable:"linkHoverColor",type:"color:hover",responsive:!0}],stickyAccountHeaderColor:[{selector:Object(a.assembleSelector)(Object(a.mutateSelector)({selector:Object(a.getRootSelectorFor)({itemId:t}),operation:"between",to_add:'[data-sticky*="yes"]'})),variable:"linkInitialColor",type:"color:default",responsive:!0},{selector:Object(a.assembleSelector)(Object(a.mutateSelector)({selector:Object(a.getRootSelectorFor)({itemId:t}),operation:"between",to_add:'[data-sticky*="yes"]'})),variable:"linkHoverColor",type:"color:hover",responsive:!0}]})}})),n.a.on("ct:header:sync:item:account",(function(e){var t=e.values,r=t.loggedin_style,o=t.loggedin_label,n=e.optionId,i=e.optionValue;"loggedin_style"!==n&&"loggedin_label"!==n||Object(a.updateAndSaveEl)('[data-id="account"]',(function(e){l(e.querySelectorAll(".ct-label")).map((function(e){e.removeAttribute("hidden"),r.label||(e.hidden=!0),e.innerHTML=o})),l(e.querySelectorAll(".ct-image-container")).map((function(e){e.removeAttribute("hidden"),r.avatar||(e.hidden=!0),function(e){c(e.querySelectorAll(".ct-image-container.ct-lazy")).map((function(e){e.querySelector("img")&&(e.querySelector("img").setAttribute("src",e.querySelector("img").dataset.ctLazy),e.querySelector("img").dataset.ctLazySet&&e.querySelector("img").setAttribute("srcset",e.querySelector("img").dataset.ctLazySet)),e.classList.remove("ct-lazy"),e.classList.add("ct-lazy-loaded")}))}(e.parentNode)}))})),"account_label_visibility"===n&&Object(a.updateAndSaveEl)('[data-id="account"]',(function(e){l(e.querySelectorAll(".ct-label")).map((function(e){Object(a.responsiveClassesFor)(i,e)}))}))})),n.a.on("ct:header:sync:collect-variable-descriptors",(function(e){})),n.a.on("ct:header:sync:item:global",(function(e){var t=e.optionId,r=e.optionValue,o=e.values;if("has_sticky_header"===t||"sticky_rows"===t||"sticky_behaviour"===t){var a=o.has_sticky_header,c=o.sticky_rows,i=o.sticky_behaviour;Array.from(document.querySelectorAll("[data-sticky]")).map((function(e){e.removeAttribute("data-sticky")})),"yes"===a&&Array.from(document.querySelectorAll("[data-row]")).map((function(e){var t=e.dataset.row;if(c[t]){var r=[];i.desktop&&r.push("desktop"),i.mobile&&r.push("mobile"),e.dataset.sticky=r.join(":")}})),n.a.trigger("blocksy:frontend:init")}if("transparent_behaviour"===t){if(!document.querySelector("[data-transparent]"))return;Array.from(document.querySelectorAll("[data-device]")).map((function(e){e.removeAttribute("data-transparent"),Array.from(e.querySelectorAll("[data-row]")).map((function(e){return e.removeAttribute("data-transparent-row")})),r[e.dataset.device]&&(e.dataset.transparent="",Array.from(e.querySelectorAll("[data-row]")).map((function(e){return e.dataset.transparentRow="yes"}))),n.a.trigger("blocksy:frontend:init")}))}}))}]);