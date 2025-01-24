import{S as u,i as c}from"./assets/vendor-De63neY_.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const f="48326297-b9ec83e241adf6514f2254162",g="https://pixabay.com/api/",p=t=>{const s=new URLSearchParams({key:f,q:t,image_type:"photo",orientation:"horizontal",safesearch:!1,per_page:33});return fetch(`${g}?${s.toString()}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})},d=t=>`
    <li class="gallery-item js-item-card">
       <a class="gallery-link" href="${t.largeImageURL}">
       <img
         class="gallery-image"
         src="${t.webformatURL}"
         data-source="${t.largeImageUR}"
         alt="${t.tags}"
        />
        </a>
        <div class="image-info">
                <p class="image-info-item"><b>Likes</b>
                ${t.likes}
                </p>
                <p class="image-info-item">
                <b>Views</b>
                ${t.views}
                </p>
                <p class="image-info-item">
                <b>Comments</b>
                ${t.comments}
                </p>
                <p class="image-info-item">
                <b>Downloads</b>
                ${t.downloads}
                </p>
        </div>
    </li>
    `;let h=new u(".js-images a",{captionsData:"alt",captionDelay:250});const m=document.querySelector(".js-search-form"),l=document.querySelector(".js-images"),y=document.querySelector(".loader"),n=()=>{y.classList.toggle("is-hidden")},b=t=>{t.preventDefault();const s=t.currentTarget.elements.query.value.trim();s!==""&&(l.innerHTML="",n(),p(s).then(r=>{if(n(),r.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const a=r.hits.map(e=>d(e)).join("");l.innerHTML=a,h.refresh(),m.reset()}).catch(r=>{n(),console.log(r),c.error({message:`${r}`,position:"topRight"})}))};m.addEventListener("submit",b);
//# sourceMappingURL=index.js.map
