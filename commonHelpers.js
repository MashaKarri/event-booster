(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const Q="sDWkN6pm2AwhXYN4z6b2LV2Cv7281iLQ",X=20;let q=1,w="",$="";function G(e,t){w=e,$=t,q=1}async function J(){var e;try{const t=new Date().toISOString(),n=new URLSearchParams({apikey:Q,page:q-1,size:X,sort_by:"eventdate",order:"asc",eventdate_from:t});return w&&n.append("keyword",w),$&&n.append("countryCode",$),((e=(await(await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?${n}`)).json())._embedded)==null?void 0:e.events)||[]}catch(t){return console.log(t),[]}}const B="/event-booster/assets/symbol-defs-d9832d8e.svg",D=document.querySelector(".events-list");function Y(){D.innerHTML=""}function x(e=[]){return e.length?e.sort((n,o)=>o.width-n.width)[0].url:""}function z(e=[]){const t=e.map(n=>{var p,f,a,u;const o=(f=(p=n._embedded)==null?void 0:p.venues)==null?void 0:f[0],s=(o==null?void 0:o.name)||"Unknown venue",r=((a=o==null?void 0:o.city)==null?void 0:a.name)||"",c=((u=o==null?void 0:o.country)==null?void 0:u.name)||"",i=[s,r,c].filter(Boolean).join(", "),l=x(n.images);return`
      <li class="list-item" data-id="${n.id}">
        <img src="${l}" alt="${n.name}" loading="lazy">
        <h3>${n.name}</h3>
        <p>${n.dates.start.localDate}</p>
        <p>
          <svg class="icon-location">
            <use href="${B}#location"></use>
          </svg>
          ${i}
        </p>
      </li>`}).join("");D.insertAdjacentHTML("beforeend",t)}const Z="/event-booster/assets/no-results-859013f1.svg",ee=document.querySelector(".hero-search"),F=document.querySelector(".search-input input"),b=document.querySelector(".search-select select"),te=document.querySelector(".events-list");function k(e="",t=""){G(e,t),Y(),window.currentFilters={searchText:e,countryCode:t},window.dispatchEvent(new Event("filtersChanged")),J().then(n=>{if(!n.length){const o=document.createElement("div");o.classList.add("no-results"),o.innerHTML=`
          <img src="${Z}" alt="No results found" />
          <p>Нічого не знайдено</p>
        `,te.appendChild(o);return}z(n)}).catch(n=>{console.log("Помилка при отриманні events:",n)})}k();ee.addEventListener("submit",e=>{e.preventDefault();const t=F.value.trim(),n=b.value;!t&&!n||k(t,n)});b.addEventListener("change",()=>{const e=F.value.trim(),t=b.value;!e&&!t||k(e,t)});const ne="sDWkN6pm2AwhXYN4z6b2LV2Cv7281iLQ",oe=20,S=document.getElementById("pagination");let L=1,m=1;S?se():console.error("pagination container not found");async function se(){await E(1),S.addEventListener("click",ce),window.addEventListener("filtersChanged",()=>{E(1)})}async function E(e){var i,l;Y();const t=new Date().toISOString(),n=new URLSearchParams({apikey:ne,page:e-1,size:oe,sort_by:"eventdate",order:"asc",eventdate_from:t}),o=window.currentFilters||{};o.searchText&&n.append("keyword",o.searchText),o.countryCode&&n.append("countryCode",o.countryCode);const r=await(await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?${n}`)).json(),c=((i=r._embedded)==null?void 0:i.events)||[];m=((l=r.page)==null?void 0:l.totalPages)||1,L=e,z(c),re()}function re(){let e="",n=Math.max(1,L-2),o=Math.min(m,n+5-1);n>1&&(e+=v(1),n>2&&(e+=j()));for(let s=n;s<=o;s++)e+=v(s,s===L);o<m&&(o<m-1&&(e+=j()),e+=v(m)),S.innerHTML=e}function v(e,t=!1){return`
    <li class="pagination-item ${t?"active":""}" data-page="${e}">
      ${e}
    </li>
  `}function j(){return'<li class="pagination-dots">…</li>'}async function ce(e){const t=e.target.closest(".pagination-item");if(!t||t.classList.contains("active"))return;const n=Number(t.dataset.page);n&&(await E(n),window.scrollTo({top:0,behavior:"smooth"}))}const ae="sDWkN6pm2AwhXYN4z6b2LV2Cv7281iLQ";async function ie(e){try{return await(await fetch(`https://app.ticketmaster.com/discovery/v2/events/${e}.json?apikey=${ae}`)).json()}catch(t){return console.log("Помилка завантаження event:",t),null}}const y=document.querySelector("#eventModal"),T=document.querySelector("#modalBody"),le=document.querySelector(".modal-close");function de(){y.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function K(){y.classList.add("is-hidden"),document.body.style.overflow=""}le.addEventListener("click",K);y.addEventListener("click",e=>{e.target===y&&K()});function g(e,t,n,o="UAH",s="#"){return`
    <div class="modal-price-item">
      <div class="price-with-icon">
        <svg class="price-icon" width="29" height="20">
          <use href="${B}#barcode"></use>
        </svg>
        <p>${e} ${t}-${n} ${o}</p>
      </div>
      <button class="buy-btn" onclick="window.open('${s}', '_blank')">BUY TICKETS</button>
    </div>
  `}function h(e,t){return Math.floor(Math.random()*(t-e+1))+e}function ue(e){var I,M,N,C,_,H,A,U,O,R;const t=(M=(I=e._embedded)==null?void 0:I.venues)==null?void 0:M[0],n=(C=(N=e._embedded)==null?void 0:N.attractions)==null?void 0:C[0],o=x(e.images),s=e.info||e.pleaseNote||"No available description",r=((H=(_=e.dates)==null?void 0:_.start)==null?void 0:H.localDate)||"Unknown date";let c=((U=(A=e.dates)==null?void 0:A.start)==null?void 0:U.localTime)||"";if(c){const[d,V]=c.split(":");c=`${d}:${V} (Kyiv/Ukraine)`}const i=((O=t==null?void 0:t.country)==null?void 0:O.name)||"",l=((R=t==null?void 0:t.city)==null?void 0:R.name)||"",p=(t==null?void 0:t.name)||"Unknown place",f=(n==null?void 0:n.name)||e.name,a=e.url||"#",u=e.priceRanges||[],W=u.length?u.map(d=>g(d.type,d.min,d.max,d.currency,a)).join(""):[g("Standart",h(200,400),h(450,700),"UAH",a),g("VIP",h(900,1100),h(1200,1700),"UAH",a)].join("");T.innerHTML=`
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
          <p>${l}, ${i}<br>${p}</p>

          <h3 class="criterion">WHO</h3>
          <p>${f}</p>

          <h3 class="criterion">PRICES</h3>
          ${W}
        </div>

        <button class="more-btn" onclick="window.open('${a}', '_blank')">
          MORE FROM THIS AUTHOR
        </button>
      </div>
    </div>
  `}function me(){T.innerHTML="<p>Loading...</p>"}function pe(){T.innerHTML="<p>Error loading event</p>"}const fe=document.querySelector(".events-list");fe.addEventListener("click",async e=>{const t=e.target.closest(".list-item");if(!t)return;const n=t.dataset.id;if(!n)return;me(),de();const o=await ie(n);if(!o){pe();return}ue(o)});const P=document.querySelector("#scrollToTop");window.addEventListener("scroll",()=>{window.scrollY>300?P.style.display="block":P.style.display="none"});P.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers.js.map
