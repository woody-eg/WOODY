const IMG={station:'images/station.jpg',hero:'images/hero.jpg',sign:'images/sign.jpg',mugs:'images/mugs.jpg',arch:'images/arch.jpg',tray:'images/tray.jpg',jars:'images/jars.jpg',wardrobe:'images/wardrobe.jpg',vases:'images/vases.jpg',olive:'images/olive.jpg',logo:'images/logo.jpg',living:'images/living.jpg'};
const WS={addr:null,user:null,notif:true,lang:'en'};const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const FIN=[{n:'Natural Bamboo',c:'#D9A55C',d:0},{n:'Warm Oak',c:'#A9774A',d:15},{n:'Dark Walnut',c:'#4A2E20',d:25}];
const SZ=[{n:'Compact',d:-20},{n:'Standard',d:0},{n:'Large',d:35}];
const CATS=[['Coffee Corners','station'],['Wooden Furniture','wardrobe'],['Home Accessories','vases'],['Wall Decor','sign'],['Storage & Organization','tray'],['Custom Designs','olive']];
const P=[
{id:'p1',n:'Coffee Station',cat:'Coffee Corners',pr:189,old:229,img:'station',g:['station','mugs','arch','tray'],d:'A wooden coffee station with an upper shelf, mug hooks, a small side shelf and a base tray.',mat:['Bamboo','Solid wood'],tag:'Featured'},
{id:'p2',n:'Mug Hook Rack Panel',cat:'Coffee Corners',pr:79,img:'mugs',g:['mugs','station'],d:'A wooden back panel with four hooks to hang your favorite mugs, with a small shelf below.',mat:['Bamboo','Solid wood']},
{id:'p3',n:'Arched Coffee Sign',cat:'Wall Decor',pr:34,img:'arch',g:['arch','station'],d:'An arched wooden sign with engraved lettering for your coffee corner.',mat:['Bamboo','Solid wood']},
{id:'p4',n:'Framed Café Sign',cat:'Wall Decor',pr:28,old:36,img:'sign',g:['sign','station'],d:'A white framed sign with a wooden border, a charming touch for shelves and walls.',mat:['Wood frame']},
{id:'p5',n:'Wooden Organizer Tray',cat:'Storage & Organization',pr:42,img:'tray',g:['tray','station'],d:'A low wooden tray that keeps jars, capsules and spoons neatly in one place.',mat:['Bamboo','Solid wood']},
{id:'p6',n:'Glass Storage Jars',cat:'Home Accessories',pr:24,img:'jars',g:['jars','station'],d:'Glass jars with wooden lids for coffee beans, sugar and everyday essentials.',mat:['Glass + wood lid']}];
const fmt=n=>'$'+n.toFixed(2).replace(/\.00$/,'');
const LS=(k,v)=>{try{if(v===undefined)return JSON.parse(localStorage.getItem(k));localStorage.setItem(k,JSON.stringify(v))}catch(e){return null}};
let cart=LS('wc')||[],wish=LS('ww')||[],cat='All',sel={};
const pr=(p,f=0,s=1)=>p.pr+FIN[f].d+SZ[s].d;
const sv=(d)=>`<svg viewBox="0 0 24 24">${d}</svg>`,heart='<path d="M12 20s-8-4.9-8-11a4.5 4.5 0 018-2.700A4.5 4.500 0 0120 9c0 6.100-8 11-8 11z"/>';
function toast(m,f){if(!f&&WS.notif===false)return;const t=$('#ts');t.textContent=m;t.classList.add('o');clearTimeout(t.h);t.h=setTimeout(()=>t.classList.remove('o'),2200)}
function save(){LS('wc',cart);LS('ww',wish);$('#cc').textContent=cart.reduce((a,b)=>a+b.q,0);$('#wc').textContent=wish.length}
function card(p){const w=wish.includes(p.id);return `<article class="pc"><div class="im" data-go="${p.id}">${p.tag?`<span class="tag">${p.tag}</span>`:''}${p.old?`<span class="tag" style="left:auto;right:60px;background:var(--gd);color:var(--ch)">Sale</span>`:''}<img data-i="${p.img}" alt="${p.n}" loading="lazy"><button class="wl ${w?'on':''}" data-w="${p.id}" aria-label="Wishlist">${sv(heart)}</button></div><div class="pb"><div class="sw">${FIN.map(f=>`<i style="background:${f.c}" title="${f.n}"></i>`).join('')}</div><h3>${p.n}</h3><p>${p.d}</p><div class="pr">${fmt(pr(p))}${p.old?`<s>${fmt(p.old)}</s>`:''}</div><div class="ac"><a class="btn l" href="#product-${p.id}">View Details</a><button class="btn d" data-a="${p.id}">Add to Cart</button></div></div></article>`}
function hydrate(r=document){$$('[data-i]').forEach(e=>{if(!e.src&&IMG[e.dataset.i])e.src=IMG[e.dataset.i]});observe()}
let io;function observe(){io=io||new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.08});$$('.rv:not(.in)').forEach(e=>io.observe(e))}
function addCart(id,f=0,s=1,q=1){const k=id+f+s,i=cart.find(c=>c.k===k);i?i.q+=q:cart.push({k,id,f,s,q});save();const b=$('#cc');b.classList.remove('p');void b.offsetWidth;b.classList.add('p');toast('Added to cart')}
function shop(){const q=$('#si2').value.toLowerCase();let l=P.filter(p=>(cat==='All'||p.cat===cat)&&(p.n+p.d+p.cat).toLowerCase().includes(q));const s=$('#so').value;l.sort((a,b)=>s==='a'?a.pr-b.pr:s==='d'?b.pr-a.pr:s==='n'?a.n.localeCompare(b.n):0);
$('#fl').innerHTML=['All',...new Set(P.map(p=>p.cat))].map(c=>`<button class="pl ${c===cat?'on':''}" data-c="${c}">${c}</button>`).join('');
$('#sg').innerHTML=l.length?l.map(card).join(''):'<p class="em" style="grid-column:1/-1">No products match. Try a different search or category.</p>';hydrate()}
function product(id){const p=P.find(x=>x.id===id);if(!p){location.hash='shop';return}const s=sel[id]=sel[id]||{f:0,s:1,q:1,g:0};
const rel=P.filter(x=>x.id!==id).slice(0,3);
$('#pv').innerHTML=`<div class="pd"><div class="gl"><div class="im"><img src="${IMG[p.g[s.g]]}" alt="${p.n}"></div><div class="th">${p.g.map((g,i)=>`<button class="${i===s.g?'on':''}" data-g="${i}" aria-label="Image ${i+1}"><img src="${IMG[g]}" alt=""></button>`).join('')}</div></div>
<div><a href="#shop" style="color:var(--wd);font-size:.9rem">← Shop / ${p.cat}</a><h1>${p.n}</h1><div class="pr">${fmt(pr(p,s.f,s.s))}${p.old?`<s>${fmt(p.old)}</s>`:''}</div><p>${p.d}</p>
<div class="op"><label>Finish: ${FIN[s.f].n}</label><div class="g">${FIN.map((f,i)=>`<button class="ch ${i===s.f?'on':''}" data-f="${i}"><i style="background:${f.c}"></i>${f.n}</button>`).join('')}</div></div>
<div class="op"><label>Size: ${SZ[s.s].n}</label><div class="g">${SZ.map((z,i)=>`<button class="ch ${i===s.s?'on':''}" data-s="${i}">${z.n}</button>`).join('')}</div></div>
<div class="op"><label>Quantity</label><div class="q"><button data-q="-1" aria-label="Less">−</button><span>${s.q}</span><button data-q="1" aria-label="More">+</button></div></div>
<div class="ac" style="max-width:420px"><button class="btn d" data-add="${id}">Add to Cart</button><button class="btn l" data-w="${id}">${wish.includes(id)?'In Wishlist':'Wishlist'}</button></div>
<table class="sp2"><tr><td>Category</td><td>${p.cat}</td></tr><tr><td>Material</td><td>${p.mat.join(', ')}</td></tr><tr><td>Finish</td><td>${FIN[s.f].n}</td></tr><tr><td>Size</td><td>${SZ[s.s].n}</td></tr><tr><td>Dimensions</td><td>Sample: add your own</td></tr></table>
<p class="nt">Finish previews are shown when matching photos are added. Prices and details are editable samples.</p></div></div>
<h2 style="margin-bottom:28px">You may also like</h2><div class="pg" style="padding-bottom:90px">${rel.map(card).join('')}</div>`;hydrate()}
function cartv(){const el=$('#cv');if(!cart.length){el.innerHTML='<div class="em"><p style="margin-bottom:20px">Your cart is empty.</p><a class="btn d" href="#shop">Start shopping</a></div>';return}
const sub=cart.reduce((a,c)=>a+pr(P.find(p=>p.id===c.id),c.f,c.s)*c.q,0),sh=sub>150?0:12;
el.innerHTML=`<div class="cl"><div>${cart.map(c=>{const p=P.find(x=>x.id===c.id);return `<div class="ci"><img src="${IMG[p.img]}" alt=""><div><h3>${p.n}</h3><small>${FIN[c.f].n} · ${SZ[c.s].n}</small><div class="q" style="margin-top:8px"><button data-cq="${c.k}|-1">−</button><span>${c.q}</span><button data-cq="${c.k}|1">+</button></div></div><div style="text-align:right">${fmt(pr(p,c.f,c.s)*c.q)}<br><button class="x" data-rm="${c.k}">Remove</button></div></div>`}).join('')}</div>
<div class="os"><h3 style="margin-bottom:12px">Order summary</h3><div class="r"><span>Subtotal</span><span>${fmt(sub)}</span></div><div class="r"><span>Shipping</span><span>${sh?fmt(sh):'Free'}</span></div><div class="r t"><span>Total</span><span>${fmt(sub+sh)}</span></div><a class="btn d" href="#checkout">Checkout</a></div></div>`}
function checkout(){if(!cart.length){location.hash='cart';return}const fv=k=>esc((WS.addr||{})[k]||'');const sub=cart.reduce((a,c)=>a+pr(P.find(p=>p.id===c.id),c.f,c.s)*c.q,0),sh=sub>150?0:12;
$('#ck').innerHTML=`<div class="cl"><form class="f" id="cf"><h3>Contact &amp; delivery</h3><input required name="email" placeholder="Email" type="email" autocomplete="email" value="${esc((WS.user||{}).email||'')}"><div class="two"><input required name="first" placeholder="First name" autocomplete="given-name" value="${fv('first')}"><input required name="last" placeholder="Last name" autocomplete="family-name" value="${fv('last')}"></div><input required name="address" placeholder="Address" autocomplete="street-address" value="${fv('address')}"><div class="two"><input required name="city" placeholder="City" autocomplete="address-level2" value="${fv('city')}"><input required name="zip" placeholder="Postal code" autocomplete="postal-code" value="${fv('zip')}"></div><label class="ck"><input type="checkbox" name="save"><span>Save my address for future orders.</span></label><select aria-label="Payment"><option>Cash on delivery</option><option>Card (connect your payment provider)</option></select><button class="btn d">Place order</button></form>
<div class="os"><h3 style="margin-bottom:12px">Order summary</h3>${cart.map(c=>{const p=P.find(x=>x.id===c.id);return `<div class="r"><span>${p.n} × ${c.q}</span><span>${fmt(pr(p,c.f,c.s)*c.q)}</span></div>`}).join('')}<div class="r"><span>Shipping</span><span>${sh?fmt(sh):'Free'}</span></div><div class="r t"><span>Total</span><span>${fmt(sub+sh)}</span></div></div></div>`;
$('#cf').onsubmit=e=>{e.preventDefault();const f=new FormData(e.target);if(f.get('save')&&WS.saveAddr)WS.saveAddr({first:f.get('first').trim(),last:f.get('last').trim(),address:f.get('address').trim(),city:f.get('city').trim(),zip:f.get('zip').trim()},true);cart=[];save();toast('Order placed successfully');$('#ck').innerHTML='<div class="ok"><h1>Thank you for your order.</h1><p style="margin-bottom:24px">A confirmation will be sent to your email. This is a demo checkout.</p><a class="btn d" href="#home">Back to home</a></div>'}}
function route(){let h=location.hash.slice(1)||'home',v=h;$('#nl').classList.remove('o');
if(h.startsWith('product-')){v='product';product(h.slice(8))}
else if(['collections','about','contact'].includes(h)){v='home'}
else if(!$('#'+h)||!$('#'+h).classList.contains('v'))v='home';
$$('.v').forEach(e=>e.classList.toggle('on',e.id===v));
if(v==='shop')shop();if(v==='cart')cartv();if(v==='checkout')checkout();if(v==='wishlist'){const l=P.filter(p=>wish.includes(p.id));$('#wg').innerHTML=l.length?l.map(card).join(''):'<p class="em" style="grid-column:1/-1">Nothing saved yet. Tap the heart on any product.</p>';hydrate()}
if(v==='home'){setTimeout(()=>{const t=['collections','about','contact'].includes(h)&&$('#'+h);t?t.scrollIntoView({behavior:'smooth'}):window.scrollTo(0,0)},30)}else window.scrollTo(0,0);
$('#nv').classList.toggle('solid',v!=='home');$$('.nl a').forEach(a=>a.classList.toggle('on',a.dataset.n===h||(a.dataset.n==='shop'&&v==='product')));hydrate()}
document.addEventListener('click',e=>{const t=e.target.closest('button,[data-go]');if(!t)return;const d=t.dataset;
if(d.go){location.hash='product-'+d.go;return}
if(d.w){e.stopPropagation();const i=wish.indexOf(d.w);i<0?(wish.push(d.w),toast('Saved to wishlist')):(wish.splice(i,1),toast('Removed from wishlist'));save();route();return}
if(d.a)addCart(d.a);
if(d.add){const s=sel[d.add];addCart(d.add,s.f,s.s,s.q)}
if(d.c){cat=d.c;shop()}
const id=location.hash.slice(9);const s=sel[id];
if(s&&(d.f||d.s||d.q||d.g)){if(d.f)s.f=+d.f;if(d.s)s.s=+d.s;if(d.q)s.q=Math.max(1,s.q+ +d.q);if(d.g)s.g=+d.g;product(id)}
if(d.g==='0'&&s){s.g=0;product(id)}
if(d.cq){const[k,n]=d.cq.split('|'),c=cart.find(x=>x.k===k);c.q=Math.max(1,c.q+ +n);save();cartv()}
if(d.rm){cart=cart.filter(c=>c.k!==d.rm);save();cartv()}
});
$('#so').onchange=shop;$('#si2').oninput=shop;
$('#bc').onclick=()=>location.hash='cart';$('#bw').onclick=()=>location.hash='wishlist';
$('#bm').onclick=()=>$('#nl').classList.toggle('o');
$('#bs').onclick=()=>{$('#sr').classList.toggle('o');$('#si').focus()};
$('#si').onkeydown=e=>{if(e.key==='Enter'){$('#si2').value=e.target.value;location.hash='shop';$('#sr').classList.remove('o');setTimeout(shop,40)}};
$('#sx').onclick=()=>$('#sr').classList.remove('o');
addEventListener('keydown',e=>{if(e.key==='Escape')$('#sr').classList.remove('o')});
$('#nf').onsubmit=e=>{e.preventDefault();e.target.reset();toast('Thanks for subscribing')};
$('#cg').innerHTML=CATS.map(c=>`<a class="cc rv" href="#shop" data-cat="${c[0]}"><img data-i="${c[1]}" alt="${c[0]}" loading="lazy"><h3>${c[0]}</h3><span>Explore</span></a>`).join('');
$('#cg').onclick=e=>{const a=e.target.closest('.cc');if(a){const n=a.dataset.cat;cat=['Coffee Corners','Wall Decor','Home Accessories','Storage & Organization'].includes(n)?n:'All'}};
$('#hp').innerHTML=P.slice(0,3).map(card).join('');
const F=P[0];$('#fT').textContent=F.n;$('#fD').textContent=F.d+' Warm natural light, everyday ritual.';$('#fF').innerHTML=FIN.map(f=>`<span><i style="width:16px;height:16px;border-radius:50%;background:${f.c};border:1px solid rgba(0,0,0,.2)"></i>${f.n}</span>`).join('');$('#fP').innerHTML=`From ${fmt(F.pr)} <s style="font-size:1.1rem;color:#9a8b7e;font-weight:300">${fmt(F.old)}</s>`;$('#fL').href='#product-p1';
addEventListener('hashchange',route);
addEventListener('scroll',()=>{const y=scrollY;$('#nv').classList.toggle('s',y>60);const h=$('.hero img');if(h&&y<innerHeight)h.style.transform=`translateY(${y*.12}px)`},{passive:true});
save();route();
