(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();const g="sDWkN6pm2AwhXYN4z6b2LV2Cv7281iLQ",v=20;let m=1,a="",i="";function L(o,r){a=o,i=r,m=1}async function w(){var o;try{const r=new Date().toISOString(),e=new URLSearchParams({apikey:g,page:m-1,size:v,sort_by:"eventdate",order:"asc",eventdate_from:r});return a&&e.append("keyword",a),i&&e.append("countryCode",i),((o=(await(await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?${e}`)).json())._embedded)==null?void 0:o.events)||[]}catch(r){return console.log(r),[]}}const p=document.querySelector(".events-list");function S(){p.innerHTML=""}function b(o=[]){return o.length?o.sort((e,n)=>n.width-e.width)[0].url:""}function E(o=[]){const r=o.map(e=>{var l,u,d,f;const n=(u=(l=e._embedded)==null?void 0:l.venues)==null?void 0:u[0],t=(n==null?void 0:n.name)||"Unknown venue",s=((d=n==null?void 0:n.city)==null?void 0:d.name)||"",c=((f=n==null?void 0:n.country)==null?void 0:f.name)||"",y=[t,s,c].filter(Boolean).join(", ");return`
      <li class="list-item">
        <img src="${b(e.images)}" alt="${e.name}" loading="lazy">
        <h3>${e.name}</h3>
        <p>${e.dates.start.localDate}</p>
        <p>
          <svg class="icon-location">
            <use href="/img/symbol-defs.svg#location"></use>
          </svg>
          ${y}
        </p>
      </li>`}).join("");p.insertAdjacentHTML("beforeend",r)}const P=document.querySelector(".hero-search"),O=document.querySelector(".search-input input"),N=document.querySelector(".search-select select");function h(o="",r=""){L(o,r),S(),w().then(e=>{if(!e.length){alert("Нічого не знайдено");return}E(e)}).catch(e=>{console.log("Помилка при отриманні events:",e)})}h();P.addEventListener("submit",o=>{o.preventDefault();const r=O.value.trim(),e=N.value;if(!r&&!e){alert("будь ласка, введіть пошук або оберіть країну");return}h(r,e)});
//# sourceMappingURL=commonHelpers.js.map
