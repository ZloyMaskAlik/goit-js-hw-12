import{a as p,S as w,i as c}from"./assets/vendor-Bi0bPHun.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const P="48326297-b9ec83e241adf6514f2254162";p.defaults.baseURL="https://pixabay.com/api/";const h=(e,o,a)=>{const s={params:{key:P,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:o}};return p.get("",s)},y=e=>`
    <li class="gallery-item js-item-card">
       <a class="gallery-link" href="${e.largeImageURL}">
       <img
         class="gallery-image"
         src="${e.webformatURL}"
         data-source="${e.largeImageUR}"
         alt="${e.tags}"
        />
        </a>
        <div class="image-info">
                <p class="image-info-item"><b>Likes</b>
                ${e.likes}
                </p>
                <p class="image-info-item">
                <b>Views</b>
                ${e.views}
                </p>
                <p class="image-info-item">
                <b>Comments</b>
                ${e.comments}
                </p>
                <p class="image-info-item">
                <b>Downloads</b>
                ${e.downloads}
                </p>
        </div>
    </li>
    `;let b=new w(".js-images a",{captionsData:"alt",captionDelay:250}),n=1;const g=15;let l="";const m=document.querySelector(".js-search-form"),u=document.querySelector(".js-images"),v=document.querySelector(".loader"),f=document.querySelector(".js-load-more"),i=()=>{v.classList.toggle("is-hidden")},L=()=>{f.classList.add("is-hidden")},S=()=>{f.classList.remove("is-hidden")},j=()=>{const e=document.querySelector(".js-images .js-item-card");if(e){const o=e.getBoundingClientRect().height;window.scrollBy({top:o*2.3,behavior:"smooth"})}},C=async e=>{try{if(e.preventDefault(),l=e.currentTarget.elements.query.value.trim(),l===""){c.info({message:"Sorry, field must be filled in. Please try again!",position:"topRight",messageSize:"16",messageColor:"rgba(255,255,255, 1)",backgroundColor:"rgba(51,109,255, 1)"});return}u.innerHTML="",i(),L(),n=1;const{data:o}=await h(l,g,n);if(o.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"rgba(255,107,10, 1)",messageSize:"16",messageColor:"rgba(255,255,255, 1)",position:"topRight"}),i(),m.reset();return}const a=o.hits.map(s=>y(s)).join("");u.innerHTML=a,o.totalHits>15&&(S(),f.addEventListener("click",$)),b.refresh(),m.reset()}catch{console.log(error),c.error({message:`${error}`,position:"topRight"}),i()}i()},$=async()=>{try{n++,L(),i();const{data:e}=await h(l,g,n),o=e.hits.map(s=>y(s)).join("");u.insertAdjacentHTML("beforeend",o),j(),b.refresh();const a=Math.ceil(e.totalHits/g);n<a?S():c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",messageSize:"16",messageColor:"rgba(255,255,255, 1)",backgroundColor:"rgba(51,109,255, 1)"})}catch(e){console.log(e),showError(`${e}`)}finally{i()}};m.addEventListener("submit",C);
//# sourceMappingURL=index.js.map
