import{a as d,S as m,i as c}from"./assets/vendor-YT4DRQk6.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(r){if(r.ep)return;r.ep=!0;const t=i(r);fetch(r.href,t)}})();const l=d.create({baseURL:"https://pixabay.com/api/",params:{key:"48859157-4179ddf5331f3749a3f2c3141",q:"",image_type:"photo",orientation:"horizontal",safesearch:"true"}});function u(s){return l.defaults.params.q=s,l.get().then(e=>e.data.hits).catch(()=>{console.error("Error fetching data from Pixabay API")})}const f={gallery:document.querySelector(".gallery")};function h(s){f.gallery.innerHTML=s.map(e=>`<div class="image-container">
        <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" />
        </a><div class="info-bar">
        <div class="info-item">
        <h3 class="item-title">Likes</h3>
        <p class="item-count">${e.likes}</p>
        </div>
        <div class="info-item">
        <h3 class="item-title">Views</h3>
        <p class="item-count">${e.views}</p>
        </div>
        <div class="info-item">
        <h3 class="item-title">Comments</h3>
        <p class="item-count">${e.comments}</p>
        </div><div class="info-item">
        <h3 class="item-title">Downloads</h3>
        <p class="item-count">${e.downloads}</p>
        </div></div></div>`).join("")}const g=new m(".image-container a",{captionsData:"alt",captionDelay:250}),a={searchForm:document.querySelector(".search-form"),loader:document.querySelector(".loader-wrap"),gallery:document.querySelector(".gallery")};a.searchForm.addEventListener("submit",p);function p(s){s.preventDefault(),a.gallery.innerHTML="",a.loader.classList.remove("disabled");const e=s.target.elements.search.value.trim();if(e==="")return a.loader.classList.add("disabled"),c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:"432px"});u(e).then(i=>{if(i.length===0)return a.loader.classList.add("disabled"),c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:"432px"});a.loader.classList.add("disabled"),h(i),g.refresh()}).catch(()=>{console.error("Error fetching data from Pixabay API"),a.loader.classList.add("disabled")}),a.searchForm.reset()}
//# sourceMappingURL=index.js.map
