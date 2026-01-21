(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const D="sDWkN6pm2AwhXYN4z6b2LV2Cv7281iLQ",Y=20;let O=1,v="",g="";function K(e,t){v=e,g=t,O=1}async function W(){var e;try{const t=new Date().toISOString(),n=new URLSearchParams({apikey:D,page:O-1,size:Y,sort_by:"eventdate",order:"asc",eventdate_from:t});return v&&n.append("keyword",v),g&&n.append("countryCode",g),((e=(await(await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?${n}`)).json())._embedded)==null?void 0:e.events)||[]}catch(t){return console.log(t),[]}}const q="/event-booster/assets/symbol-defs-d9832d8e.svg",A=document.querySelector(".events-list");function x(){A.innerHTML=""}function R(e=[]){return e.length?e.sort((n,o)=>o.width-n.width)[0].url:""}function z(e=[]){const t=e.map(n=>{var d,u,a,l;const o=(u=(d=n._embedded)==null?void 0:d.venues)==null?void 0:u[0],s=(o==null?void 0:o.name)||"Unknown venue",r=((a=o==null?void 0:o.city)==null?void 0:a.name)||"",c=((l=o==null?void 0:o.country)==null?void 0:l.name)||"",f=[s,r,c].filter(Boolean).join(", "),h=R(n.images);return`
      <li class="list-item" data-id="${n.id}">
        <img src="${h}" alt="${n.name}" loading="lazy">
        <h3>${n.name}</h3>
        <p>${n.dates.start.localDate}</p>
        <p>
          <svg class="icon-location">
            <use href="${q}#location"></use>
          </svg>
          ${f}
        </p>
      </li>`}).join("");A.insertAdjacentHTML("beforeend",t)}const F="/event-booster/assets/no-results-859013f1.svg",V=document.querySelector(".hero-search"),_=document.querySelector(".search-input input"),$=document.querySelector(".search-select select"),Q=document.querySelector(".events-list");function w(e="",t=""){K(e,t),x(),W().then(n=>{if(!n.length){const o=document.createElement("div");o.classList.add("no-results"),o.innerHTML=`
          <img src="${F}" alt="No results found" />
          <p>Нічого не знайдено</p>
        `,Q.appendChild(o);return}z(n)}).catch(n=>{console.log("Помилка при отриманні events:",n)})}w();V.addEventListener("submit",e=>{e.preventDefault();const t=_.value.trim(),n=$.value;!t&&!n||w(t,n)});$.addEventListener("change",()=>{const e=_.value.trim(),t=$.value;!e&&!t||w(e,t)});const X="sDWkN6pm2AwhXYN4z6b2LV2Cv7281iLQ";async function G(e){try{return await(await fetch(`https://app.ticketmaster.com/discovery/v2/events/${e}.json?apikey=${X}`)).json()}catch(t){return console.log("Помилка завантаження event:",t),null}}const p=document.querySelector("#eventModal"),L=document.querySelector("#modalBody"),J=document.querySelector(".modal-close");function Z(){p.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function C(){p.classList.add("is-hidden"),document.body.style.overflow=""}J.addEventListener("click",C);p.addEventListener("click",e=>{e.target===p&&C()});function y(e,t,n,o="UAH",s="#"){return`
    <div class="modal-price-item">
      <div class="price-with-icon">
        <svg class="price-icon" width="29" height="20">
          <use href="${q}#barcode"></use>
        </svg>
        <p>${e} ${t}-${n} ${o}</p>
      </div>
      <button class="buy-btn" onclick="window.open('${s}', '_blank')">BUY TICKETS</button>
    </div>
  `}function m(e,t){return Math.floor(Math.random()*(t-e+1))+e}function ee(e){var E,S,k,T,I,M,H,N,P,U;const t=(S=(E=e._embedded)==null?void 0:E.venues)==null?void 0:S[0],n=(T=(k=e._embedded)==null?void 0:k.attractions)==null?void 0:T[0],o=R(e.images),s=e.info||e.pleaseNote||"No available description",r=((M=(I=e.dates)==null?void 0:I.start)==null?void 0:M.localDate)||"Unknown date";let c=((N=(H=e.dates)==null?void 0:H.start)==null?void 0:N.localTime)||"";if(c){const[i,B]=c.split(":");c=`${i}:${B} (Kyiv/Ukraine)`}const f=((P=t==null?void 0:t.country)==null?void 0:P.name)||"",h=((U=t==null?void 0:t.city)==null?void 0:U.name)||"",d=(t==null?void 0:t.name)||"Unknown place",u=(n==null?void 0:n.name)||e.name,a=e.url||"#",l=e.priceRanges||[],j=l.length?l.map(i=>y(i.type,i.min,i.max,i.currency,a)).join(""):[y("Standart",m(200,400),m(450,700),"UAH",a),y("VIP",m(900,1100),m(1200,1700),"UAH",a)].join("");L.innerHTML=`
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
          <p>${h}, ${f}<br>${d}</p>

          <h3 class="criterion">WHO</h3>
          <p>${u}</p>

          <h3 class="criterion">PRICES</h3>
          ${j}
        </div>

        <button class="more-btn" onclick="window.open('${a}', '_blank')">
          MORE FROM THIS AUTHOR
        </button>
      </div>
    </div>
  `}function te(){L.innerHTML="<p>Loading...</p>"}function ne(){L.innerHTML="<p>Error loading event</p>"}const oe=document.querySelector(".events-list");oe.addEventListener("click",async e=>{const t=e.target.closest(".list-item");if(!t)return;const n=t.dataset.id;if(!n)return;te(),Z();const o=await G(n);if(!o){ne();return}ee(o)});const b=document.querySelector("#scrollToTop");window.addEventListener("scroll",()=>{window.scrollY>300?b.style.display="block":b.style.display="none"});b.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers.js.map
