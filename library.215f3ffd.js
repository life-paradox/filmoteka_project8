function e(e){const t=localStorage.getItem(e);return JSON.parse(t)}function t(e,t){if(t<=1)return[1];const n=[e-2,e-1,e,e+1,e+2].filter((e=>e>1&&e<t)),i=e===t-4,a=e>5,r=e<t-4;return 5===e&&n.unshift(2),i&&n.push(t-1),a&&n.unshift("..."),r&&n.push("..."),[1,...n,t]}function n(e,t){if(t<=1)return[1];return filteredCenter=[e-2,e-1,e,e+1,e+2].filter((e=>e>=1&&e<=t)),includeTwoRight=1===e,includeOneRight=2===e,includeTwoRight&&filteredCenter.push(e+3,e+4),includeOneRight&&filteredCenter.push(e+3),[...filteredCenter]}const i=document.querySelector(".gallery"),a=document.querySelector(".pagination__wrapper"),r=document.querySelector(".pagination__pages"),s=document.querySelector("#next-button"),o=document.querySelector("#prev-button");let l,c;let u=[];function d(t){!function(t){if(u=e(t),null===u)u=[],_(i),p("Oops...Nothing added.")}(t),0!==u.length?(a.classList.remove("hidden"),c=Math.ceil(u.length/20),g(1),o.addEventListener("click",(()=>{g(l-1)})),s.addEventListener("click",(()=>{g(l+1)})),r.addEventListener("click",(e=>{e.target.hasAttribute("page-index")&&g(Number(e.target.getAttribute("page-index")))}))):a.classList.add("hidden")}function g(a){l=a;const r=20*(a-1),d=20*a,g=u.slice(r,d);_(i),p(g.map((({title:t,name:n,poster_path:i,genre_ids:a,release_date:r,first_air_date:s,vote_average:o,vote:l=o.toFixed(1)||" - ",year:c=r||s||" - "})=>{const u=e("genres"),d=a.map((e=>u.genres.find((t=>t.id===e))));let g;return a.length>3?(g=d.map((e=>e.name)).slice(0,2),g.push("інші")):g=d.map((e=>e.name)),`<li class="gallery__item">\n                <a class="gallery__link" href="">\n                    <img class="gallery__image" src="https://image.tmdb.org/t/p/w500${i}" alt="" loading="lazy">\n                </a>\n                <div class="gallery__info">\n                    <p class="gallery__title">${t||n}</p>\n                    <p class="gallery__genre">${g.join(", ")}</p>\n                    <p class="gallery__year">${c.slice(0,4)}</p>\n                    <p class="gallery__vote">${l}</p>\n                </div>\n            </li>`})).join("")),window.scrollTo({top:0,left:0,behavior:"smooth"}),window.innerWidth>=768?m(t(l,c)):m(n(l,c)),document.querySelectorAll(".pagination__number").forEach((e=>{e.classList.remove("active"),Number(e.getAttribute("page-index"))===l&&e.classList.add("active")})),function(){1===l?f(o):h(o);c===l?f(s):h(s)}()}function m(e){_(r);const t=e.map((e=>{if("number"==typeof e){const t=document.createElement("button");return t.className="pagination__number",t.innerHTML=e,t.setAttribute("page-index",e),t.setAttribute("aria-label","Page "+e),t}if("string"==typeof e){const t=document.createElement("span");return t.innerHTML=e,t}}));r.append(...t)}function p(e){i.insertAdjacentHTML("beforeend",e)}function _(e){e.innerHTML=""}function f(e){e.classList.add("hidden")}function h(e){e.classList.remove("hidden")}const b=document.querySelector("#theme-day");console.log(b);const y=document.querySelector(".button_watched"),L=document.querySelector(".button_queue");window.addEventListener("load",d("QUEUE")),y.addEventListener("click",(e=>{d(e.target.textContent),L.classList.remove("button_queue"),y.classList.add("button_queue"),y.classList.remove("button_watched"),L.classList.add("button_watched")})),L.addEventListener("click",(e=>{d(e.target.textContent),y.classList.remove("button_queue"),L.classList.add("button_queue"),L.classList.remove("button_watched"),y.classList.add("button_watched")}));
//# sourceMappingURL=library.215f3ffd.js.map
