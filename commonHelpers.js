(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();const L="sDWkN6pm2AwhXYN4z6b2LV2Cv7281iLQ",b=20;let h=1,a="",i="";function S(o,t){a=o,i=t,h=1}async function w(){var o;try{const t=new Date().toISOString(),e=new URLSearchParams({apikey:L,page:h-1,size:b,sort_by:"eventdate",order:"asc",eventdate_from:t});return a&&e.append("keyword",a),i&&e.append("countryCode",i),((o=(await(await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?${e}`)).json())._embedded)==null?void 0:o.events)||[]}catch(t){return console.log(t),[]}}const E="/event-booster/assets/symbol-defs-d9832d8e.svg",y=document.querySelector(".events-list");function P(){y.innerHTML=""}function $(o=[]){return o.length?o.sort((e,s)=>s.width-e.width)[0].url:""}function C(o=[]){const t=o.map(e=>{var d,f,m,p;const s=(f=(d=e._embedded)==null?void 0:d.venues)==null?void 0:f[0],n=(s==null?void 0:s.name)||"Unknown venue",r=((m=s==null?void 0:s.city)==null?void 0:m.name)||"",c=((p=s==null?void 0:s.country)==null?void 0:p.name)||"",v=[n,r,c].filter(Boolean).join(", ");return`
      <li class="list-item">
        <img src="${$(e.images)}" alt="${e.name}" loading="lazy">
        <h3>${e.name}</h3>
        <p>${e.dates.start.localDate}</p>
        <p>
          <svg class="icon-location">
            <use href="${E}#location"></use>
          </svg>
          ${v}
        </p>
      </li>`}).join("");y.insertAdjacentHTML("beforeend",t)}const N="/event-booster/assets/no-results-7f7d57d7.svg",O=document.querySelector(".hero-search"),g=document.querySelector(".search-input input"),l=document.querySelector(".search-select select"),q=document.querySelector(".events-list");function u(o="",t=""){S(o,t),P(),w().then(e=>{if(!e.length){const s=document.createElement("div");s.classList.add("no-results"),s.innerHTML=`
          <img src="${N}" alt="No results found" />
          <p>Нічого не знайдено</p>
        `,q.appendChild(s);return}C(e)}).catch(e=>{console.log("Помилка при отриманні events:",e)})}u();O.addEventListener("submit",o=>{o.preventDefault();const t=g.value.trim(),e=l.value;!t&&!e||u(t,e)});l.addEventListener("change",()=>{const o=g.value.trim(),t=l.value;!o&&!t||u(o,t)});
//# sourceMappingURL=commonHelpers.js.map
