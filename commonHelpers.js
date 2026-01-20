(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();const L="sDWkN6pm2AwhXYN4z6b2LV2Cv7281iLQ",S=20;let h=1,i="",a="";function b(r,t){i=r,a=t,h=1}async function w(){var r;try{const t=new Date().toISOString(),e=new URLSearchParams({apikey:L,page:h-1,size:S,sort_by:"eventdate",order:"asc",eventdate_from:t});return i&&e.append("keyword",i),a&&e.append("countryCode",a),((r=(await(await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?${e}`)).json())._embedded)==null?void 0:r.events)||[]}catch(t){return console.log(t),[]}}const E="/event-booster/assets/symbol-defs-d9832d8e.svg",y=document.querySelector(".events-list");function P(){y.innerHTML=""}function $(r=[]){return r.length?r.sort((e,n)=>n.width-e.width)[0].url:""}function C(r=[]){const t=r.map(e=>{var d,m,f,p;const n=(m=(d=e._embedded)==null?void 0:d.venues)==null?void 0:m[0],s=(n==null?void 0:n.name)||"Unknown venue",o=((f=n==null?void 0:n.city)==null?void 0:f.name)||"",c=((p=n==null?void 0:n.country)==null?void 0:p.name)||"",v=[s,o,c].filter(Boolean).join(", ");return`
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
      </li>`}).join("");y.insertAdjacentHTML("beforeend",t)}const N=document.querySelector(".hero-search"),g=document.querySelector(".search-input input"),l=document.querySelector(".search-select select"),O=document.querySelector(".events-list");function u(r="",t=""){b(r,t),P(),w().then(e=>{if(!e.length){const n=document.createElement("div");n.classList.add("no-results"),n.innerHTML=`
          <img src="./img/main-section/no-results.svg" alt="No results found" />
          <p>Нічого не знайдено</p>
        `,O.appendChild(n);return}C(e)}).catch(e=>{console.log("Помилка при отриманні events:",e)})}u();N.addEventListener("submit",r=>{r.preventDefault();const t=g.value.trim(),e=l.value;!t&&!e||u(t,e)});l.addEventListener("change",()=>{const r=g.value.trim(),t=l.value;!r&&!t||u(r,t)});
//# sourceMappingURL=commonHelpers.js.map
