!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},o=n.parcelRequireb466;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},n.parcelRequireb466=o),o.register("8nrFW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return n.default(e)||r.default(e)||s.default(e)||i.default()};var n=a(o("kMC0W")),r=a(o("7AJDX")),i=a(o("8CtQK")),s=a(o("auk6i"));function a(e){return e&&e.__esModule?e:{default:e}}})),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}})),o.register("aNvF6",(function(t,n){function r(e){var t=localStorage.getItem(e);return JSON.parse(t)}function i(e){localStorage.setItem("watchedFilms",JSON.stringify(e))}function o(){return r("watchedFilms")||[]}function s(e){localStorage.setItem("queuedFilms",JSON.stringify(e))}function a(){return r("queuedFilms")||[]}e(t.exports,"getFromLocalStorage",(function(){return r})),e(t.exports,"setWatchedFilms",(function(){return i})),e(t.exports,"getWatchedFilms",(function(){return o})),e(t.exports,"setQueuedFilms",(function(){return s})),e(t.exports,"getQueuedFilms",(function(){return a}))})),o.register("fM7Nq",(function(n,r){e(n.exports,"paginationMarkup",(function(){return s})),e(n.exports,"paginationMarkupMobile",(function(){return a}));var i=o("8nrFW");function s(e,n){if(n<=1)return[1];var r=[e-2,e-1,e,e+1,e+2].filter((function(e){return e>1&&e<n})),o=e===n-4,s=e>5,a=e<n-4;return 5===e&&r.unshift(2),o&&r.push(n-1),s&&r.unshift("..."),a&&r.push("..."),[1].concat(t(i)(r),[n])}function a(e,n){if(n<=1)return[1];var r=[e-2,e-1,e,e+1,e+2].filter((function(e){return e>=1&&e<=n})),o=2===e;return 1===e&&r.push(e+3,e+4),o&&r.push(e+3),t(i)(r)}})),o.register("aB0kH",(function(t,n){e(t.exports,"default",(function(){return d}));var r=o("bVASI"),i=o("aNvF6"),s="ADD TO WATCHED",a="REMOVE FROM WATCHED",u="ADD TO QUEUE",c="REMOVE FROM QUEUE";function l(e,t){var n=e.querySelector(".watched-films-btn"),r=e.querySelector(".queued-films-btn");n.addEventListener("click",(function(e){return function(e,t){var n=(0,i.getWatchedFilms)(),r=n.find((function(e){return e.id===t.id}));if(r){var o=n.indexOf(r);n.splice(o,1),e.target.innerText=s}else n.push(t),e.target.innerText=a;(0,i.setWatchedFilms)(n)}(e,t)})),r.addEventListener("click",(function(e){return function(e,t){var n=(0,i.getQueuedFilms)(),r=n.find((function(e){return e.id===t.id}));if(r){var o=n.indexOf(r);n.splice(o,1),e.target.innerText=u}else n.push(t),e.target.innerText=c;(0,i.setQueuedFilms)(n)}(e,t)}))}function d(e){e.preventDefault();var t=JSON.parse(localStorage.getItem("films")),n=JSON.parse(localStorage.getItem("genres")),o=Number(e.target.dataset.id),d=t.find((function(e){return o===e.id}));if(d){var f=(0,i.getWatchedFilms)().some((function(e){return e.id===o})),h=(0,i.getQueuedFilms)().some((function(e){return e.id===o})),m=d.genre_ids.map((function(e){return n.genres.find((function(t){return t.id===e}))})).map((function(e){return e.name})).join(", "),p=function(e){var t=e.image,n=e.title,r=e.votes,i=e.originalTitle,o=e.averageVotes,l=e.popularity,d=e.genre,f=e.about,h=e.isWatched,m=e.isQueued;return'\n    <div class="film-card">\n      <img class="film-image" width="290" height="370" src = "'.concat(t,'" />\n      <p class="film-title">').concat(n,'</p>\n      <p class="film-votes">').concat(r,"/ ").concat(o,'</p>\n      <p class="film-original-title">').concat(i,'</p>\n      <p class="film-popularity">').concat(l,'</p>\n      <p class="genre">').concat(d,'</p>\n\n      <p class="film-about"><br />').concat(f,'</p>\n      <button class="watched-films-btn">').concat(h?a:s,'</button>\n      <button class="queued-films-btn">').concat(m?c:u,"</button>\n    </div>\n  ")}({image:"https://image.tmdb.org/t/p/w500".concat(d.poster_path),title:d.title,votes:d.vote_count,originalTitle:d.original_title,averageVotes:d.vote_average.toFixed(2),popularity:d.popularity.toFixed(2),genre:m,about:d.overview,isWatched:f,isQueued:h}),v=document.createElement("div");v.innerHTML=p,new(0,r.default)(v,(function(e){return l(e,d)}))}}})),o.register("bVASI",(function(n,r){e(n.exports,"default",(function(){return a}));var i=o("8MBJY"),s=o("a2hTj"),a=function(){"use strict";function e(n,r){var o=this;t(i)(this,e),this.classHidden="is-modal-hidden",this.onOpen=r,this.backdrop=document.querySelector("[data-modal-backdrop]")||this.createModal(),this.modal=this.backdrop.querySelector("[data-modal]"),this.modalBody=this.modal.querySelector("[data-modal-body]"),this.modalClose=this.modal.querySelector("[data-modal-close]"),this.close(),this.show=this.show.bind(this),this.close=this.close.bind(this),this.processOpenedModalEvents=this.processOpenedModalEvents.bind(this),this.processClosedModalEvents=this.processClosedModalEvents.bind(this),this.handleDocumentKeyPressed=this.handleDocumentKeyPressed.bind(this),this.handleOutsideModalClick=this.handleOutsideModalClick.bind(this),setTimeout((function(){o.modalBody.innerHTML=n.outerHTML,o.show()}),250)}return t(s)(e,[{key:"createModal",value:function(){var e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("div"),r=document.createElement("button");return e.setAttribute("data-modal-backdrop",""),t.setAttribute("data-modal",""),n.setAttribute("data-modal-body",""),r.setAttribute("data-modal-close",""),e.appendChild(t),t.appendChild(r),t.appendChild(n),document.body.appendChild(e),e}},{key:"processOpenedModalEvents",value:function(){document.addEventListener("keydown",this.handleDocumentKeyPressed),document.addEventListener("click",this.handleOutsideModalClick),this.modalClose.addEventListener("click",this.close)}},{key:"processClosedModalEvents",value:function(){document.removeEventListener("keydown",this.handleDocumentKeyPressed),document.removeEventListener("click",this.handleOutsideModalClick)}},{key:"show",value:function(){this.backdrop.classList.remove(this.classHidden),this.processOpenedModalEvents(),this.onOpen&&this.onOpen(this.modal)}},{key:"close",value:function(){var e=this.backdrop.classList;e.contains(this.classHidden)||e.add(this.classHidden),this.processClosedModalEvents()}},{key:"handleDocumentKeyPressed",value:function(e){"Escape"===e.key&&this.close()}},{key:"handleOutsideModalClick",value:function(e){this.modal.contains(e.target)||this.close()}}]),e}()})),o.register("8MBJY",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}})),o.register("a2hTj",(function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t&&n(e.prototype,t);r&&n(e,r);return e}})),o.register("lRMGX",(function(e,n){var r=o("8MBJY"),i=o("a2hTj"),s=document.querySelector(".footer"),a=document.querySelector("body"),u=(document.querySelector(".theme-day"),document.querySelector(".gallery__title"));console.log(u);var c=document.getElementById("myCheck");function l(){try{"dark"===localStorage.getItem("theme")?(a.classList.add("darkTheme"),s.classList.add("darkTheme"),u.classList.add("darkTheme")):(a.classList.remove("darkTheme"),s.classList.remove("darkTheme"),u.classList.remove("darkTheme"))}catch(e){}}c.addEventListener("change",(function(e){e.preventDefault(),c.checked?localStorage.setItem("theme","dark"):localStorage.removeItem("theme"),l()})),l();var d=new(function(){"use strict";function e(n){t(r)(this,e),this.name=n,this.hash={};var i=localStorage.getItem(this.name);i&&(this.hash=JSON.parse(i)),this.save()}return t(i)(e,[{key:"get",value:function(e){return this.item.find((function(t){return t.id===e}))}},{key:"add",value:function(e,t){this.hash[e]=t,this.save()}},{key:"del",value:function(e){delete this.hash[e],this.save()}},{key:"save",value:function(){this.list=Object.values(this.hash);var e=JSON.stringify(this.hash);localStorage.setItem(this.name,e)}}]),e}())("checkbox_store");function f(e){var t=e.currentTarget.id,n=e.currentTarget.checked?"on":void 0;d.add(t,{id:t,state:n})}d.list.forEach((function(e){if("on"===e.state)return document.querySelector("#"+e.id).checked=e.state;d.del(e.id)})),document.querySelectorAll(".check").forEach((function(e){e.addEventListener("change",f)}))})),o.register("6b9QC",(function(t,n){e(t.exports,"slider",(function(){return r}));var r=function(e){var t=e.querySelector("#slides-container"),n=e.querySelector(".slide"),r=e.querySelector("#slide-arrow-prev");e.querySelector("#slide-arrow-next").addEventListener("click",(function(){var e=n.clientWidth;t.scrollLeft+=e})),r.addEventListener("click",(function(){var e=n.clientWidth;t.scrollLeft-=e}))}}))}();
//# sourceMappingURL=library.20072e17.js.map
