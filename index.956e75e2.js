const e=document.querySelector(".gallery");(async()=>{const e=await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=861782ee1fc6aacf939bc06e51306075"),l=await e.json();return console.log(l),l})().then((function(l){const a=l.results.map((({title:e,poster_path:l,genre_ids:a,release_date:n})=>`<li class="gallery__item">\n            <a class="gallery__link" href="">\n                <img class="gallery__image" src="https://image.tmdb.org/t/p/w500${l}" alt="" loading="lazy">\n            </a>\n            <div class="gallery__info">\n                <p class="gallery__title">${e}</p>\n                <p class="gallery__genre">${a}</p>\n                <p class="gallery__year">${n.slice(0,4)}</p>\n            </div>\n        </li>`)).join("");e.innerHTML=a}));
//# sourceMappingURL=index.956e75e2.js.map
