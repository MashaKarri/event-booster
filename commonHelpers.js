(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const D="sDWkN6pm2AwhXYN4z6b2LV2Cv7281iLQ",B=20;let U=1,v="",g="";function K(e,t){v=e,g=t,U=1}async function W(){var e;try{const t=new Date().toISOString(),n=new URLSearchParams({apikey:D,page:U-1,size:B,sort_by:"eventdate",order:"asc",eventdate_from:t});return v&&n.append("keyword",v),g&&n.append("countryCode",g),((e=(await(await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?${n}`)).json())._embedded)==null?void 0:e.events)||[]}catch(t){return console.log(t),[]}}const O="/event-booster/assets/symbol-defs-d9832d8e.svg",A=document.querySelector(".events-list");function Y(){A.innerHTML=""}function C(e=[]){return e.length?e.sort((n,o)=>o.width-n.width)[0].url:""}function x(e=[]){const t=e.map(n=>{var l,u,a,d;const o=(u=(l=n._embedded)==null?void 0:l.venues)==null?void 0:u[0],s=(o==null?void 0:o.name)||"Unknown venue",r=((a=o==null?void 0:o.city)==null?void 0:a.name)||"",c=((d=o==null?void 0:o.country)==null?void 0:d.name)||"",f=[s,r,c].filter(Boolean).join(", "),h=C(n.images);return`
      <li class="list-item" data-id="${n.id}">
        <img src="${h}" alt="${n.name}" loading="lazy">
        <h3>${n.name}</h3>
        <p>${n.dates.start.localDate}</p>
        <p>
          <svg class="icon-location">
            <use href="${O}#location"></use>
          </svg>
          ${f}
        </p>
      </li>`}).join("");A.insertAdjacentHTML("beforeend",t)}const z="/event-booster/assets/no-results-7f7d57d7.svg",F=document.querySelector(".hero-search"),R=document.querySelector(".search-input input"),$=document.querySelector(".search-select select"),V=document.querySelector(".events-list");function b(e="",t=""){K(e,t),Y(),W().then(n=>{if(!n.length){const o=document.createElement("div");o.classList.add("no-results"),o.innerHTML=`
          <img src="${z}" alt="No results found" />
          <p>Нічого не знайдено</p>
        `,V.appendChild(o);return}x(n)}).catch(n=>{console.log("Помилка при отриманні events:",n)})}b();F.addEventListener("submit",e=>{e.preventDefault();const t=R.value.trim(),n=$.value;!t&&!n||b(t,n)});$.addEventListener("change",()=>{const e=R.value.trim(),t=$.value;!e&&!t||b(e,t)});const Q="sDWkN6pm2AwhXYN4z6b2LV2Cv7281iLQ";async function X(e){try{return await(await fetch(`https://app.ticketmaster.com/discovery/v2/events/${e}.json?apikey=${Q}`)).json()}catch(t){return console.log("Помилка завантаження event:",t),null}}const p=document.querySelector("#eventModal"),L=document.querySelector("#modalBody"),G=document.querySelector(".modal-close");function J(){p.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function _(){p.classList.add("is-hidden"),document.body.style.overflow=""}G.addEventListener("click",_);p.addEventListener("click",e=>{e.target===p&&_()});function y(e,t,n,o="UAH",s="#"){return`
    <div class="modal-price-item">
      <div class="price-with-icon">
        <svg class="price-icon" width="29" height="20">
          <use href="${O}#barcode"></use>
        </svg>
        <p>${e.toUpperCase()} ${t}-${n} ${o}</p>
      </div>
      <button class="buy-btn" onclick="window.open('${s}', '_blank')">BUY TICKETS</button>
    </div>
  `}function m(e,t){return Math.floor(Math.random()*(t-e+1))+e}function Z(e){var w,E,S,I,M,k,H,N,P,T;const t=(E=(w=e._embedded)==null?void 0:w.venues)==null?void 0:E[0],n=(I=(S=e._embedded)==null?void 0:S.attractions)==null?void 0:I[0],o=C(e.images),s=e.info||e.pleaseNote||"No available description",r=((k=(M=e.dates)==null?void 0:M.start)==null?void 0:k.localDate)||"Unknown date";let c=((N=(H=e.dates)==null?void 0:H.start)==null?void 0:N.localTime)||"";if(c){const[i,j]=c.split(":");c=`${i}:${j} (Kyiv/Ukraine)`}const f=((P=t==null?void 0:t.country)==null?void 0:P.name)||"",h=((T=t==null?void 0:t.city)==null?void 0:T.name)||"",l=(t==null?void 0:t.name)||"Unknown place",u=(n==null?void 0:n.name)||e.name,a=e.url||"#",d=e.priceRanges||[],q=d.length?d.map(i=>y(i.type,i.min,i.max,i.currency,a)).join(""):[y("Standart",m(200,400),m(450,700),"UAH",a),y("VIP",m(900,1100),m(1200,1700),"UAH",a)].join("");L.innerHTML=`
    <div class="modal-inner">
      <div class="modal-avatar">
        <img src="${o}" alt="${e.name}">
      </div>

      <div class="modal-event-full">
        <div class="modal-left">
          <img src="${o}" alt="${e.name}">
        </div>

        <div class="modal-right">
          <h3 class="criterion">INFO</h3>
          <p>${s}</p>

          <h3 class="criterion">WHEN</h3>
          <p>${r}<br>${c}</p>

          <h3 class="criterion">WHERE</h3>
          <p>${h}, ${f}<br>${l}</p>

          <h3 class="criterion">WHO</h3>
          <p>${u}</p>

          <h3 class="criterion">PRICES</h3>
          ${q}
        </div>

        <button class="more-btn" onclick="window.open('${a}', '_blank')">
          MORE FROM THIS AUTHOR
        </button>
      </div>
    </div>
  `}function ee(){L.innerHTML="<p>Loading...</p>"}function te(){L.innerHTML="<p>Error loading event</p>"}const ne=document.querySelector(".events-list");ne.addEventListener("click",async e=>{const t=e.target.closest(".list-item");if(!t)return;const n=t.dataset.id;if(!n)return;ee(),J();const o=await X(n);if(!o){te();return}Z(o)});
//# sourceMappingURL=commonHelpers.js.map
