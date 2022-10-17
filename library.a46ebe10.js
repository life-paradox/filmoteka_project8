function e(e,t,s,n){Object.defineProperty(e,t,{get:s,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},n={},i=t.parcelRequireb466;null==i&&((i=function(e){if(e in s)return s[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return s[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},t.parcelRequireb466=i),i.register("gSWVZ",(function(t,s){function n(e){const t=localStorage.getItem(e);return JSON.parse(t)}function i(e){localStorage.setItem("watchedFilms",JSON.stringify(e))}function o(){return n("watchedFilms")||[]}function r(e){localStorage.setItem("queuedFilms",JSON.stringify(e))}function a(){return n("queuedFilms")||[]}function l(e){return localStorage.setItem("theme",e)}function d(){return localStorage.getItem("theme")}e(t.exports,"getFromLocalStorage",(function(){return n})),e(t.exports,"setWatchedFilms",(function(){return i})),e(t.exports,"getWatchedFilms",(function(){return o})),e(t.exports,"setQueuedFilms",(function(){return r})),e(t.exports,"getQueuedFilms",(function(){return a})),e(t.exports,"setTheme",(function(){return l})),e(t.exports,"getTheme",(function(){return d}))})),i.register("a7KuE",(function(t,s){function n(e,t){if(t<=1)return[1];const s=[e-2,e-1,e,e+1,e+2].filter((e=>e>1&&e<t)),n=e===t-4,i=e>5,o=e<t-4;return 5===e&&s.unshift(2),n&&s.push(t-1),i&&s.unshift("..."),o&&s.push("..."),[1,...s,t]}function i(e,t){if(t<=1)return[1];const s=[e-2,e-1,e,e+1,e+2].filter((e=>e>=1&&e<=t)),n=2===e;return 1===e&&s.push(e+3,e+4),n&&s.push(e+3),[...s]}e(t.exports,"paginationMarkup",(function(){return n})),e(t.exports,"paginationMarkupMobile",(function(){return i}))})),i.register("3C0xE",(function(t,s){e(t.exports,"default",(function(){return u}));var n=i("hRfnT"),o=i("gSWVZ");const r="ADD TO WATCHED",a="REMOVE FROM WATCHED",l="ADD TO QUEUE",d="REMOVE FROM QUEUE";function c(e,t,s){const n=e.querySelector(".watched-films-btn"),i=e.querySelector(".queued-films-btn");n.addEventListener("click",(e=>function(e,t,s){const n=(0,o.getWatchedFilms)(),i=n.find((e=>e.id===t.id));if(i){const t=n.indexOf(i);n.splice(t,1),e.target.innerText=r}else n.push(t),e.target.innerText=a;(0,o.setWatchedFilms)(n),s&&s()}(e,t,s))),i.addEventListener("click",(e=>function(e,t,s){const n=(0,o.getQueuedFilms)(),i=n.find((e=>e.id===t.id));if(i){const t=n.indexOf(i);n.splice(t,1),e.target.innerText=l}else n.push(t),e.target.innerText=d;(0,o.setQueuedFilms)(n),s&&s()}(e,t,s)))}function u(e,t){e.preventDefault();const s=JSON.parse(localStorage.getItem("films")),i=JSON.parse(localStorage.getItem("genres")),u=Number(e.target.dataset.id),m=s.find((e=>u===e.id));if(!m)return;const h=(0,o.getWatchedFilms)().some((e=>e.id===u)),f=(0,o.getQueuedFilms)().some((e=>e.id===u)),p=m.genre_ids.map((e=>i.genres.find((t=>t.id===e)))).map((e=>e.name)).join(", "),g=function({image:e,title:t,votes:s,originalTitle:n,averageVotes:i,popularity:o,genre:c,about:u,isWatched:m,isQueued:h}){return`\n    <div class="film-card">\n      <div class = "film-image-wrapper">\n      <img class="film-image" width="290" height="370" src = "${e}" />\n      </div>\n\n      <div class = "film-info-wrapper">\n      <p class="title film-modal-info"><span class = "title">${t.toUpperCase()}</p> \n      <div class="film-info__inner-wrapper">\n    <div class = "wrapper">\n      <p class="film-votes film-modal-info"><span class = "votes film-info">Vote / Votes</span>${i} /${s} </p>\n      <p class="film-original-title film-modal-info"><span class = "original-title film-info">Original Title</span>${n}</p>\n      <p class="film-popularity film-modal-info"><span class = "popularity film-info">Popularity</span>${o}<span></p>\n      <p class="genre film-modal-info"><span class = "genre film-info">Genre</span>${c}</p>\n    </div>\n    <p class="film-about film-modal-info"><span class = "about-film">ABOUT</span> <br/>   ${u}</p></div>\n      <div class = "buttons-wrapper">\n      <button class="watched-films-btn">${m?a:r}</button>\n      <button class="queued-films-btn">${h?d:l}</button>\n      </div>\n      </div>\n    </div>\n  `}({image:`https://image.tmdb.org/t/p/w500${m.poster_path}`,title:m.title,votes:m.vote_count,originalTitle:m.original_title,averageVotes:m.vote_average.toFixed(2),popularity:m.popularity.toFixed(2),genre:p,about:m.overview,isWatched:h,isQueued:f}),v=document.createElement("div");v.innerHTML=g,new(0,n.default)(v,(e=>c(e,m,t)))}})),i.register("hRfnT",(function(t,s){e(t.exports,"default",(function(){return n}));class n{createModal(){const e=document.createElement("div"),t=document.createElement("div"),s=document.createElement("div"),n=document.createElement("button");return e.setAttribute("data-modal-backdrop",""),t.setAttribute("data-modal",""),s.setAttribute("data-modal-body",""),t.classList.add("modal-info"),n.setAttribute("data-modal-close",""),e.appendChild(t),t.appendChild(n),t.appendChild(s),document.body.appendChild(e),e}processOpenedModalEvents(){document.addEventListener("keydown",this.handleDocumentKeyPressed),document.addEventListener("click",this.handleOutsideModalClick),this.modalClose.addEventListener("click",this.close)}processClosedModalEvents(){document.removeEventListener("keydown",this.handleDocumentKeyPressed),document.removeEventListener("click",this.handleOutsideModalClick)}show(){this.backdrop.classList.remove(this.classHidden),this.processOpenedModalEvents(),this.onOpen&&this.onOpen(this.modal)}close(){const e=this.backdrop.classList;e.contains(this.classHidden)||e.add(this.classHidden),this.processClosedModalEvents()}handleDocumentKeyPressed(e){"Escape"===e.key&&this.close()}handleOutsideModalClick(e){this.modal.contains(e.target)||this.close()}constructor(e,t){this.classHidden="is-modal-hidden",this.onOpen=t,this.backdrop=document.querySelector("[data-modal-backdrop]")||this.createModal(),this.modal=this.backdrop.querySelector("[data-modal]"),this.modalBody=this.modal.querySelector("[data-modal-body]"),this.modalClose=this.modal.querySelector("[data-modal-close]"),this.close(),this.show=this.show.bind(this),this.close=this.close.bind(this),this.processOpenedModalEvents=this.processOpenedModalEvents.bind(this),this.processClosedModalEvents=this.processClosedModalEvents.bind(this),this.handleDocumentKeyPressed=this.handleDocumentKeyPressed.bind(this),this.handleOutsideModalClick=this.handleOutsideModalClick.bind(this),setTimeout((()=>{this.modalBody.innerHTML=e.outerHTML,this.show()}),250)}}})),i.register("3H9nF",(function(t,s){e(t.exports,"modalFooter",(function(){return r}));var n=i("hRfnT"),o=i("8D16A");const r=()=>{document.querySelector("#goit-students").addEventListener("click",(e=>{e.preventDefault();const t=document.createElement("div"),s=document.querySelector(".modal-footer");t.innerHTML=s.outerHTML,t.querySelector(".modal-footer").classList.remove("is-hidden"),new(0,n.default)(t,(e=>{(0,o.slider)(e)}))}))}})),i.register("8D16A",(function(t,s){e(t.exports,"slider",(function(){return n}));const n=e=>{const t=e.querySelector("#slides-container"),s=e.querySelector(".slide"),n=e.querySelector("#slide-arrow-prev");e.querySelector("#slide-arrow-next").addEventListener("click",(()=>{const e=s.clientWidth;t.scrollLeft+=e})),n.addEventListener("click",(()=>{const e=s.clientWidth;t.scrollLeft-=e}))}})),i.register("hAAWn",(function(t,s){e(t.exports,"setPageTheme",(function(){return r}));var n=i("gSWVZ");const o=document.getElementById("myCheck");function r(){const e=document.querySelector(".footer"),t=document.querySelector(".footer__rights"),s=document.querySelector(".footer__devs"),i=document.querySelector("body"),r=document.querySelectorAll(".gallery__title"),a=document.querySelectorAll(".pagination__number"),l=document.querySelectorAll(".pagination__arrow"),d=document.querySelector(".modal-footer");document.querySelector("film-card");"dark"===(0,n.getTheme)()?(i.classList.add("darkTheme"),e.classList.add("darkTheme"),d.classList.add("darkTheme"),t.classList.add("darkTheme__light-text"),s.classList.add("darkTheme__light-text"),a.forEach((e=>e.classList.add("darkTheme__light-text"))),l.forEach((e=>e.classList.add("darkTheme__light-text"))),r.forEach((e=>e.classList.add("darkTheme__light-text"))),o.checked=!0):(i.classList.remove("darkTheme"),e.classList.remove("darkTheme"),d.classList.remove("darkTheme"),t.classList.remove("darkTheme__light-text"),s.classList.remove("darkTheme__light-text"),a.forEach((e=>e.classList.remove("darkTheme__light-text"))),l.forEach((e=>e.classList.remove("darkTheme__light-text"))),r.forEach((e=>e.classList.remove("darkTheme__light-text"))),o.checked=!1)}o.addEventListener("change",(e=>{const t=e.target.checked?"dark":"light";(0,n.setTheme)(t),r()})),setTimeout(r,100)}));
//# sourceMappingURL=library.a46ebe10.js.map
