function e(e,t,n,s){Object.defineProperty(e,t,{get:n,set:s,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},o={},i=n.parcelRequireb466;function r(e){const t=localStorage.getItem(e);return JSON.parse(t)}null==i&&((i=function(e){if(e in s)return s[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return s[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},n.parcelRequireb466=i),i.register("kyEFX",(function(t,n){var s,o;e(t.exports,"register",(function(){return s}),(function(e){return s=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};s=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("kyEFX").register(JSON.parse('{"5ZPII":"index.e79e942b.js","flgBf":"index-main-mobile.fb2d268b.jpg","5UbS1":"index.67aa11f9.css"}'));var a;function l(e){const n=r("genres");return e.results.map((({title:e,id:s,poster_path:o,genre_ids:i,release_date:r,first_air_date:l,year:c=r||l||" - "})=>{const d=i.map((e=>n.genres.find((t=>t.id===e))));let u;i.length>3?(u=d.map((e=>e.name)).slice(0,2),u.push("Other")):u=d.map((e=>e.name));return`<li class="gallery__item">\n            <a class="gallery__link"  href="">\n                <img class="gallery__image" data-id=${s} src="${o?`https://image.tmdb.org/t/p/w500${o}`:t(a)}" alt="${e}" loading="lazy">\n            </a>\n            <div class="gallery__info">\n                <p class="gallery__title cut-text">${e}</p>\n\n                <p class="gallery__genre">${u.join(", ")}</p>     \n                <p class="gallery__year">${c.slice(0,4)}</p>\n\n            </div>\n        </li>`})).join("")}function c(e,t){if(t<=1)return[1];const n=[e-2,e-1,e,e+1,e+2].filter((e=>e>1&&e<t)),s=e===t-4,o=e>5,i=e<t-4;return 5===e&&n.unshift(2),s&&n.push(t-1),o&&n.unshift("..."),i&&n.push("..."),[1,...n,t]}function d(e,t){if(t<=1)return[1];const n=[e-2,e-1,e,e+1,e+2].filter((e=>e>=1&&e<=t)),s=2===e;return 1===e&&n.push(e+3,e+4),s&&n.push(e+3),[...n]}a=new URL(i("kyEFX").resolve("flgBf"),import.meta.url).toString();class u{createModal(){const e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("div"),s=document.createElement("button");return e.setAttribute("data-modal-backdrop",""),t.setAttribute("data-modal",""),n.setAttribute("data-modal-body",""),s.setAttribute("data-modal-close",""),e.appendChild(t),t.appendChild(s),t.appendChild(n),document.body.appendChild(e),e}processOpenedModalEvents(){document.addEventListener("keydown",this.handleDocumentKeyPressed),document.addEventListener("click",this.handleOutsideModalClick),this.modalClose.addEventListener("click",this.close)}processClosedModalEvents(){document.removeEventListener("keydown",this.handleDocumentKeyPressed),document.removeEventListener("click",this.handleOutsideModalClick)}show(){this.backdrop.classList.remove(this.classHidden),this.processOpenedModalEvents(),this.onOpen&&this.onOpen(this.modal)}close(){const e=this.backdrop.classList;e.contains(this.classHidden)||e.add(this.classHidden),this.processClosedModalEvents()}handleDocumentKeyPressed(e){"Escape"===e.key&&this.close()}handleOutsideModalClick(e){this.modal.contains(e.target)||this.close()}constructor(e,t){this.classHidden="is-modal-hidden",this.onOpen=t,this.backdrop=document.querySelector("[data-modal-backdrop]")||this.createModal(),this.modal=this.backdrop.querySelector("[data-modal]"),this.modalBody=this.modal.querySelector("[data-modal-body]"),this.modalClose=this.modal.querySelector("[data-modal-close]"),this.close(),this.show=this.show.bind(this),this.close=this.close.bind(this),this.processOpenedModalEvents=this.processOpenedModalEvents.bind(this),this.processClosedModalEvents=this.processClosedModalEvents.bind(this),this.handleDocumentKeyPressed=this.handleDocumentKeyPressed.bind(this),this.handleOutsideModalClick=this.handleOutsideModalClick.bind(this),setTimeout((()=>{this.modalBody.innerHTML=e.outerHTML,this.show()}),250)}}let m=[],h=[],p=[],g=[];const f=document.querySelector(".film-card");console.log(f);const v={filmImage:document.querySelector(".film-image"),votes:document.querySelector(".film-votes"),title:document.querySelector(".film-title"),popularity:document.querySelector(".film-popularity"),genre:document.querySelector(".genre"),about:document.querySelector(".film-about"),originalTitle:document.querySelector(".film-original-title")},{filmImage:y,votes:b,title:S,popularity:E,originalTitle:L,genre:k,about:w}=v;const _=document.querySelector(".gallery");const q=async e=>{const t=await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=861782ee1fc6aacf939bc06e51306075&language=en-US&page=${e}`),n=await t.json(),s=JSON.stringify(n.results);return localStorage.setItem("films",s),n},T=async e=>{const t=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=861782ee1fc6aacf939bc06e51306075&language=en-US&query=${Z}&page=${e}&include_adult=false`);return await t.json()};_.addEventListener("click",(function(e){e.preventDefault();const t=localStorage.getItem("films"),n=JSON.parse(t),s=localStorage.getItem("genres"),o=JSON.parse(s);n.find((t=>{const n=t.genre_ids.map((e=>o.genres.find((t=>t.id===e)))).map((e=>e.name)).join(", ");if(Number(e.target.dataset.id)===t.id){const s=(({image:e,title:t,votes:n,originalTitle:s,averageVotes:o,popularity:i,genre:r,about:a})=>`<div class="film-card">\n  <img class="film-image" width="290" height="370" src = "${e}" />\n  <p class="film-title">${t}</p>\n  <p class="film-votes">${n}/ ${o}</p>\n  <p class="film-original-title">${s}</p>\n  <p class="film-popularity">${i}</p>\n  <p class="genre">${r}</p>\n\n  <p class="film-about"><br />${a}</p>\n  <button class="watched-films-btn">ADD TO WATCHED</button>\n  <button class="queued-films-btn">ADD TO QUEUEs</button>\n</div>\n`)({image:`https://image.tmdb.org/t/p/w500${t.poster_path}`,title:t.title,votes:t.vote_count,originalTitle:t.original_title,averageVotes:t.vote_average.toFixed(2),popularity:t.popularity.toFixed(2),genre:n,about:t.overview}),o=document.createElement("div");o.innerHTML=s;new u(o,(n=>{n.querySelector(".watched-films-btn").addEventListener("click",(n=>{Number(e.target.dataset.id)===t.id&&(m.push(t),h=new Set(m),localStorage.setItem("watchedFilms",JSON.stringify([...h])))}));n.querySelector(".queued-films-btn").addEventListener("click",(n=>{Number(e.target.dataset.id)===t.id&&(p.push(t),g=new Set(p),localStorage.setItem("queuedFilms",JSON.stringify([...g])))}))}))}}))}));const O=document.querySelector("#preloader");O.classList.add("show-preloader"),window.addEventListener("load",(function(){setTimeout((function(){O.classList.remove("show-preloader")}),1e3)}));({el:document.querySelector(".btn-up"),show(){this.el.classList.remove("btn-up_hide")},hide(){this.el.classList.add("btn-up_hide")},addEventListener(){window.addEventListener("scroll",(()=>{(window.scrollY||document.documentElement.scrollTop)>400?this.show():this.hide()})),document.querySelector(".btn-up").onclick=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}}}).addEventListener();const M=document.querySelector(".gallery"),x=document.querySelector(".pagination__wrapper"),H=document.querySelector(".pagination__pages"),A=document.querySelector("#next-button"),C=document.querySelector("#prev-button");let N,$;let I;function D(e){I=e,I.results.length?($=Math.ceil(I.total_results/20),j(e),C.addEventListener("click",(()=>{q(N-1).then(j)})),A.addEventListener("click",(()=>{q(N+1).then(j)})),H.addEventListener("click",(e=>{e.target.hasAttribute("page-index")&&q(Number(e.target.getAttribute("page-index"))).then(j)}))):x.classList.add("hidden")}function j(e){N=e.page;e.results;var t;P(M),t=l(e),M.insertAdjacentHTML("beforeend",t),window.scrollTo({top:0,left:0,behavior:"smooth"});F(document.documentElement.clientWidth>=768?c(N,$):d(N,$)),document.querySelectorAll(".pagination__number").forEach((e=>{e.classList.remove("activePage"),Number(e.getAttribute("page-index"))===N&&e.classList.add("activePage")})),function(){1===N?J(C):U(C);$===N?J(A):U(A)}()}function F(e){P(H);const t=e.map((e=>{if("number"==typeof e){const t=document.createElement("button");return t.className="pagination__number",t.innerHTML=e,t.setAttribute("page-index",e),t.setAttribute("aria-label","Page "+e),t}if("string"==typeof e){const t=document.createElement("span");return t.innerHTML=e,t}}));H.append(...t)}function P(e){e.innerHTML=""}function J(e){e.classList.add("hidden")}function U(e){e.classList.remove("hidden")}function R(e){I=e,I.results.length?($=Math.ceil(I.total_results/20),j(e),C.addEventListener("click",(()=>{T(N-1).then(j)})),A.addEventListener("click",(()=>{T(N+1).then(j)})),H.addEventListener("click",(e=>{e.target.hasAttribute("page-index")&&T(Number(e.target.getAttribute("page-index"))).then(j)}))):x.classList.add("hidden")}const B=document.querySelector(".footer"),K=document.querySelector("body"),W=(document.querySelector(".theme-day"),document.querySelector(".gallery__title"));console.log(W);const X=document.getElementById("myCheck");function Q(){try{"dark"===localStorage.getItem("theme")?(K.classList.add("darkTheme"),B.classList.add("darkTheme"),W.classList.add("darkTheme")):(K.classList.remove("darkTheme"),B.classList.remove("darkTheme"),W.classList.remove("darkTheme"))}catch(e){}}X.addEventListener("change",(e=>{e.preventDefault(),X.checked?localStorage.setItem("theme","dark"):localStorage.removeItem("theme"),Q()})),Q();const V=new class{get(e){return this.item.find((t=>t.id===e))}add(e,t){this.hash[e]=t,this.save()}del(e){delete this.hash[e],this.save()}save(){this.list=Object.values(this.hash);const e=JSON.stringify(this.hash);localStorage.setItem(this.name,e)}constructor(e){this.name=e,this.hash={};let t=localStorage.getItem(this.name);t&&(this.hash=JSON.parse(t)),this.save()}}("checkbox_store");function z(e){let t=e.currentTarget.id,n=e.currentTarget.checked?"on":void 0;V.add(t,{id:t,state:n})}V.list.forEach((e=>{if("on"===e.state)return document.querySelector("#"+e.id).checked=e.state;V.del(e.id)})),document.querySelectorAll(".check").forEach((function(e){e.addEventListener("change",z)}));const Y=e=>{const t=e.querySelector("#slides-container"),n=e.querySelector(".slide"),s=e.querySelector("#slide-arrow-prev");e.querySelector("#slide-arrow-next").addEventListener("click",(()=>{const e=n.clientWidth;t.scrollLeft+=e})),s.addEventListener("click",(()=>{const e=n.clientWidth;t.scrollLeft-=e}))};let Z;localStorage.getItem("genres")?q(1).then(D):Promise.resolve(fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=861782ee1fc6aacf939bc06e51306075&language=en-US").then((e=>e.json())).then((e=>(localStorage.setItem("genres",JSON.stringify(e)),e)))).then((e=>{q(1).then((e=>D(e)))}));const G=document.querySelector(".header-search-form");G.addEventListener("submit",(function(e){e.preventDefault(),Z=G.elements.searchQuery.value.trim(),console.log(Z),""!==Z&&T(1).then(R)}));const ee=document.querySelector(".progress-bar");window.addEventListener("scroll",(function(){const e=document.body.scrollTop||document.documentElement.scrollTop,t=document.documentElement.scrollHeight-document.documentElement.clientHeight,n=e/t*100;ee.style.width=n+"%"})),document.querySelector("#goit-students").addEventListener("click",(e=>{e.preventDefault();const t=document.createElement("div"),n=document.querySelector(".modal-footer");t.innerHTML=n.outerHTML,t.querySelector(".modal-footer").classList.remove("is-hidden"),new u(t,(e=>{Y(e)}))}));
//# sourceMappingURL=index.e79e942b.js.map