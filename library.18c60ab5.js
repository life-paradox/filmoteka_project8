!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequireb466;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequireb466=i),i.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=i("8NIkP"))&&n.__esModule?n:{default:n}})),i.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),i.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),i.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),i.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=i("8NIkP"))&&n.__esModule?n:{default:n}}));var o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return a.default(e)||u.default(e)||c.default(e)||l.default()};var a=s(i("kMC0W")),u=s(i("7AJDX")),l=s(i("8CtQK")),c=s(i("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}function d(e){var t=localStorage.getItem(e);return JSON.parse(t)}function f(t,n){if(n<=1)return[1];return e(o)(сenter)}var p,g,_=document.querySelector(".gallery"),m=document.querySelector(".pagination__wrapper"),v=document.querySelector(".pagination__pages"),y=document.querySelector("#next-button"),b=document.querySelector("#prev-button"),h=[];function L(e){!function(e){if(null===(h=d(e)))h=[],q(_),M("Oops...Nothing added.")}(e),0!==h.length?(m.classList.remove("hidden"),g=Math.ceil(h.length/20),x(1),b.addEventListener("click",(function(){x(p-1)})),y.addEventListener("click",(function(){x(p+1)})),v.addEventListener("click",(function(e){e.target.hasAttribute("page-index")&&x(Number(e.target.getAttribute("page-index")))}))):m.classList.add("hidden")}function x(t){p=t;var n,r,i=20*(t-1),a=20*t,u=h.slice(i,a);q(_),M(u.map((function(e){var t,n=e.title,r=e.name,i=e.poster_path,o=e.genre_ids,a=e.release_date,u=e.first_air_date,l=e.vote_average,c=e.vote,s=void 0===c?l.toFixed(1)||" - ":c,f=e.year,p=void 0===f?a||u||" - ":f,g=d("genres"),_=o.map((function(e){return g.genres.find((function(t){return t.id===e}))}));return o.length>3?(t=_.map((function(e){return e.name})).slice(0,2)).push("інші"):t=_.map((function(e){return e.name})),'<li class="gallery__item">\n                <a class="gallery__link" href="">\n                    <img class="gallery__image" src="https://image.tmdb.org/t/p/w500'.concat(i,'" alt="" loading="lazy">\n                </a>\n                <div class="gallery__info">\n                    <p class="gallery__title">').concat(n||r,'</p>\n                    <p class="gallery__genre">').concat(t.join(", "),'</p>\n                    <p class="gallery__year">').concat(p.slice(0,4),'</p>\n                    <p class="gallery__vote">').concat(s,"</p>\n                </div>\n            </li>")})).join("")),window.scrollTo({top:0,left:0,behavior:"smooth"}),window.innerWidth>=768?w((n=p,(r=g)<=1?[1]:(filteredCenter=[n-2,n-1,n,n+1,n+2].filter((function(e){return e>1&&e<r})),includeThreeLeft=5===n,includeThreeRight=n===r-4,includeLeftDots=n>5,includeRightDots=n<r-4,includeThreeLeft&&filteredCenter.unshift(2),includeThreeRight&&filteredCenter.push(r-1),includeLeftDots&&filteredCenter.unshift("..."),includeRightDots&&filteredCenter.push("..."),[1].concat(e(o)(filteredCenter),[r])))):w(f(0,g)),document.querySelectorAll(".pagination__number").forEach((function(e){e.classList.remove("active"),Number(e.getAttribute("page-index"))===p&&e.classList.add("active")})),function(){1===p?A(b):S(b);g===p?A(y):S(y)}()}function w(t){var n;q(v);var r=t.map((function(e){if("number"==typeof e){var t=document.createElement("button");return t.className="pagination__number",t.innerHTML=e,t.setAttribute("page-index",e),t.setAttribute("aria-label","Page "+e),t}if("string"==typeof e){var n=document.createElement("span");return n.innerHTML=e,n}}));(n=v).append.apply(n,e(o)(r))}function M(e){_.insertAdjacentHTML("beforeend",e)}function q(e){e.innerHTML=""}function A(e){e.classList.add("hidden")}function S(e){e.classList.remove("hidden")}var C=document.querySelector("#theme-day");console.log(C);var E=document.querySelector(".button_watched"),k=document.querySelector(".button_queue");window.addEventListener("load",L("QUEUE")),E.addEventListener("click",(function(e){L(e.target.textContent),k.classList.remove("button_queue"),E.classList.add("button_queue"),E.classList.remove("button_watched"),k.classList.add("button_watched")})),k.addEventListener("click",(function(e){L(e.target.textContent),E.classList.remove("button_queue"),k.classList.add("button_queue"),k.classList.remove("button_watched"),E.classList.add("button_watched")}))}();
//# sourceMappingURL=library.18c60ab5.js.map
