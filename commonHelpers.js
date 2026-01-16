(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const h="sDWkN6pm2AwhXYN4z6b2LV2Cv7281iLQ",g=20;let d=1,f="",m="";function v(s,t){f=s,m=t,d=1}async function L(){var s;try{const t=new Date().toISOString();return((s=(await(await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${f}&countryCode=${m}&page=${d-1}&size=${g}&apikey=${h}&sort_by=eventdate&order=asc&eventdate_from=${t}`)).json())._embedded)==null?void 0:s.events)||[]}catch(t){return console.log(t),[]}}const p=document.querySelector(".events-list");function $(){p.innerHTML=""}function b(s=[]){const t=s.map(r=>{var a,i,l,u;const o=(i=(a=r._embedded)==null?void 0:a.venues)==null?void 0:i[0],e=(o==null?void 0:o.name)||"Unknown venue",n=((l=o==null?void 0:o.city)==null?void 0:l.name)||"",c=((u=o==null?void 0:o.country)==null?void 0:u.name)||"",y=[e,n,c].filter(Boolean).join(", ");return`
      <li class="list-item">
        <img src="${r.images[0].url}" alt="${r.name}">
        <h3>${r.name}</h3>
        <p>${r.dates.start.localDate}</p>
        <p>
          <svg class="icon-location">
            <use href="../img/symbol-defs.svg#location"></use>
          </svg>
          ${y}
          </p>
      </li>`}).join("");p.insertAdjacentHTML("beforeend",t)}const S=document.querySelector(".hero-search"),E=document.querySelector(".search-input input"),w=document.querySelector(".search-select select");function P(s,t){v(s,t),$(),L().then(r=>{if(!r.length){alert("Нічого не знайдено");return}b(r)}).catch(r=>{console.log("Помилка при отриманні events:",r)})}S.addEventListener("submit",async s=>{s.preventDefault();const t=E.value.trim(),r=w.value;if(!t&&!r){alert("будь ласка, введіть пошук або оберіть країну");return}P(t,r)});
//# sourceMappingURL=commonHelpers.js.map
