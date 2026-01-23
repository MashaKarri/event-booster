(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const Q="sDWkN6pm2AwhXYN4z6b2LV2Cv7281iLQ",X=20;let j=1,w="",$="";function G(e,t){w=e,$=t,j=1}async function J(){var e;try{const t=new Date().toISOString(),n=new URLSearchParams({apikey:Q,page:j-1,size:X,sort_by:"eventdate",order:"asc",eventdate_from:t});return w&&n.append("keyword",w),$&&n.append("countryCode",$),((e=(await(await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?${n}`)).json())._embedded)==null?void 0:e.events)||[]}catch(t){return console.log(t),[]}}const q="/event-booster/assets/symbol-defs-d9832d8e.svg",B=document.querySelector(".events-list");function D(){B.innerHTML=""}function Y(e=[]){return e.length?e.sort((n,o)=>o.width-n.width)[0].url:""}function z(e=[]){const t=e.map(n=>{var m,p,a,d;const o=(p=(m=n._embedded)==null?void 0:m.venues)==null?void 0:p[0],s=(o==null?void 0:o.name)||"Unknown venue",r=((a=o==null?void 0:o.city)==null?void 0:a.name)||"",c=((d=o==null?void 0:o.country)==null?void 0:d.name)||"",i=[s,r,c].filter(Boolean).join(", "),y=Y(n.images);return`
      <li class="list-item" data-id="${n.id}">
        <img src="${y}" alt="${n.name}" loading="lazy">
        <h3>${n.name}</h3>
        <p>${n.dates.start.localDate}</p>
        <p>
          <svg class="icon-location">
            <use href="${q}#location"></use>
          </svg>
          ${i}
        </p>
      </li>`}).join("");B.insertAdjacentHTML("beforeend",t)}const Z="/event-booster/assets/no-results-859013f1.svg",ee=document.querySelector(".hero-search"),K=document.querySelector(".search-input input"),b=document.querySelector(".search-select select"),te=document.querySelector(".events-list");function P(e="",t=""){G(e,t),D(),J().then(n=>{if(!n.length){const o=document.createElement("div");o.classList.add("no-results"),o.innerHTML=`
          <img src="${Z}" alt="No results found" />
          <p>Нічого не знайдено</p>
        `,te.appendChild(o);return}z(n)}).catch(n=>{console.log("Помилка при отриманні events:",n)})}P();ee.addEventListener("submit",e=>{e.preventDefault();const t=K.value.trim(),n=b.value;!t&&!n||P(t,n)});b.addEventListener("change",()=>{const e=K.value.trim(),t=b.value;!e&&!t||P(e,t)});const ne="sDWkN6pm2AwhXYN4z6b2LV2Cv7281iLQ",oe=20,S=document.getElementById("pagination");let L=1,u=1;S?se():console.error("pagination container not found");async function se(){await W(1),S.addEventListener("click",ce)}async function W(e){var c,i;D();const t=new Date().toISOString(),n=new URLSearchParams({apikey:ne,page:e-1,size:oe,sort_by:"eventdate",order:"asc",eventdate_from:t}),s=await(await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?${n}`)).json(),r=((c=s._embedded)==null?void 0:c.events)||[];u=((i=s.page)==null?void 0:i.totalPages)||1,L=e,z(r),re()}function re(){let e="",n=Math.max(1,L-2),o=Math.min(u,n+5-1);n>1&&(e+=v(1),n>2&&(e+=C()));for(let s=n;s<=o;s++)e+=v(s,s===L);o<u&&(o<u-1&&(e+=C()),e+=v(u)),S.innerHTML=e}function v(e,t=!1){return`
    <li class="pagination-item ${t?"active":""}" data-page="${e}">
      ${e}
    </li>
  `}function C(){return'<li class="pagination-dots">…</li>'}async function ce(e){const t=e.target.closest(".pagination-item");if(!t||t.classList.contains("active"))return;const n=Number(t.dataset.page);n&&(await W(n),window.scrollTo({top:0,behavior:"smooth"}))}const ae="sDWkN6pm2AwhXYN4z6b2LV2Cv7281iLQ";async function ie(e){try{return await(await fetch(`https://app.ticketmaster.com/discovery/v2/events/${e}.json?apikey=${ae}`)).json()}catch(t){return console.log("Помилка завантаження event:",t),null}}const h=document.querySelector("#eventModal"),k=document.querySelector("#modalBody"),le=document.querySelector(".modal-close");function de(){h.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function x(){h.classList.add("is-hidden"),document.body.style.overflow=""}le.addEventListener("click",x);h.addEventListener("click",e=>{e.target===h&&x()});function g(e,t,n,o="UAH",s="#"){return`
    <div class="modal-price-item">
      <div class="price-with-icon">
        <svg class="price-icon" width="29" height="20">
          <use href="${q}#barcode"></use>
        </svg>
        <p>${e} ${t}-${n} ${o}</p>
      </div>
      <button class="buy-btn" onclick="window.open('${s}', '_blank')">BUY TICKETS</button>
    </div>
  `}function f(e,t){return Math.floor(Math.random()*(t-e+1))+e}function ue(e){var I,M,T,N,_,H,A,U,O,R;const t=(M=(I=e._embedded)==null?void 0:I.venues)==null?void 0:M[0],n=(N=(T=e._embedded)==null?void 0:T.attractions)==null?void 0:N[0],o=Y(e.images),s=e.info||e.pleaseNote||"No available description",r=((H=(_=e.dates)==null?void 0:_.start)==null?void 0:H.localDate)||"Unknown date";let c=((U=(A=e.dates)==null?void 0:A.start)==null?void 0:U.localTime)||"";if(c){const[l,V]=c.split(":");c=`${l}:${V} (Kyiv/Ukraine)`}const i=((O=t==null?void 0:t.country)==null?void 0:O.name)||"",y=((R=t==null?void 0:t.city)==null?void 0:R.name)||"",m=(t==null?void 0:t.name)||"Unknown place",p=(n==null?void 0:n.name)||e.name,a=e.url||"#",d=e.priceRanges||[],F=d.length?d.map(l=>g(l.type,l.min,l.max,l.currency,a)).join(""):[g("Standart",f(200,400),f(450,700),"UAH",a),g("VIP",f(900,1100),f(1200,1700),"UAH",a)].join("");k.innerHTML=`
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
          <p>${y}, ${i}<br>${m}</p>

          <h3 class="criterion">WHO</h3>
          <p>${p}</p>

          <h3 class="criterion">PRICES</h3>
          ${F}
        </div>

        <button class="more-btn" onclick="window.open('${a}', '_blank')">
          MORE FROM THIS AUTHOR
        </button>
      </div>
    </div>
  `}function me(){k.innerHTML="<p>Loading...</p>"}function pe(){k.innerHTML="<p>Error loading event</p>"}const fe=document.querySelector(".events-list");fe.addEventListener("click",async e=>{const t=e.target.closest(".list-item");if(!t)return;const n=t.dataset.id;if(!n)return;me(),de();const o=await ie(n);if(!o){pe();return}ue(o)});const E=document.querySelector("#scrollToTop");window.addEventListener("scroll",()=>{window.scrollY>300?E.style.display="block":E.style.display="none"});E.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers.js.map
