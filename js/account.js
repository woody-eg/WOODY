/* WOODY – Settings drawer, saved address, and account (Supabase Auth). */
(()=>{
const cfg=window.WOODY_CONFIG||{};
const sb=cfg.SUPABASE_URL&&cfg.SUPABASE_ANON_KEY&&window.supabase?window.supabase.createClient(cfg.SUPABASE_URL,cfg.SUPABASE_ANON_KEY):null;
const NOCFG='Sign-in is not set up yet. Add your Supabase keys in js/config.js — see README.';
const X='<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>';
const GG='<svg viewBox="0 0 24 24" style="fill:currentColor;stroke:none"><path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.55 21.3 7.27 24 12 24z"/><path fill="#FBBC05" d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 000 10.76l3.98-3.09z"/><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.27 0 3.55 2.7 1.29 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"/></svg>';
const GH='<svg viewBox="0 0 24 24" style="fill:currentColor;stroke:none"><path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.4-.5-1.6.2-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.8.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 .3"/></svg>';
let tab='login',msg=null,ae=null;
WS.notif=LS('wn')!==false;
const redirect=()=>location.origin+location.pathname;
const head=t=>`<div class="dh"><h3>${t}</h3><button class="dx" data-close aria-label="Close">${X}</button></div>`;
const addrLines=a=>`<div class="am"><b>${esc(a.first)} ${esc(a.last)}</b><br>${esc(a.address)}<br>${esc(a.city)} ${esc(a.zip)}</div>`;
function addrBlock(){const a=WS.addr;
 if(ae){const v=ae==='edit'?(a||{}):{},f=(n,p,x='')=>`<input name="${n}" required placeholder="${p}" value="${esc(v[n]||'')}" ${x}>`;
  return `<form class="af" id="af"><div class="two">${f('first','First name','autocomplete="given-name"')}${f('last','Last name','autocomplete="family-name"')}</div>${f('address','Address','autocomplete="street-address"')}<div class="two">${f('city','City','autocomplete="address-level2"')}${f('zip','Postal code','autocomplete="postal-code"')}</div><div class="row"><button class="btn d">Save address</button><button type="button" class="btn l" data-ad="cancel">Cancel</button></div></form>`}
 if(!a)return `<p class="am">No saved address yet.</p><p class="nt" style="margin:0 0 16px">Add an address to speed up checkout.</p><button class="btn d" data-ad="add">Add address</button>`;
 return addrLines(a)+`<div class="row"><button class="btn l" data-ad="edit">Edit</button><button class="btn l" data-ad="add">Replace</button><button class="btn l" data-ad="del">Delete</button></div><p class="nt">${WS.user?'Saved to your account.':'Saved on this device only. Log in to keep it with your account.'}</p>`}
function renderS(){const l=WS.lang,n=WS.notif;$('#dS').innerHTML=head('Settings')+
 `<section class="ds"><h4>Language</h4><div class="seg"><button data-lang="en" class="${l==='en'?'on':''}">English</button><button data-lang="ar" lang="ar" class="${l==='ar'?'on':''}">العربية</button></div></section>
 <section class="ds"><div class="tg"><div><h4>Website Notifications</h4><p>Show confirmations for cart, address and order actions.</p></div><button class="tgl ${n?'on':''}" role="switch" aria-checked="${n}" aria-label="Website Notifications" data-notif><i></i></button></div></section>
 <section class="ds"><h4>Saved address</h4>${addrBlock()}</section>`}
const msgH=()=>msg?`<p class="${msg.ok?'ok2':'er'}" role="alert">${esc(msg.m)}</p>`:'';
function renderA(){const u=WS.user;let h;
 if(u){const m=u.user_metadata||{};h=head('Account')+`<section class="ds"><h4>Account details</h4><table class="sp2"><tr><td>Name</td><td>${esc(m.full_name||m.name||m.user_name||'—')}</td></tr><tr><td>Email</td><td>${esc(u.email||'—')}</td></tr></table></section><section class="ds"><h4>Saved address</h4>${WS.addr?addrLines(WS.addr):'<p class="am">No saved address yet.</p>'}<button class="btn l" data-open="#dS">Manage saved address</button></section><button class="btn d" data-logout style="width:100%">Log out</button>`}
 else{const li=tab==='login';
  h=head('Account')+(sb?'':`<p class="nc">${NOCFG}</p>`)+`<div class="seg"><button data-tab="login" class="${li?'on':''}">Login</button><button data-tab="signup" class="${li?'':'on'}">Sign Up</button></div>
  <div class="soc"><button class="so2" data-oauth="google">${GG}<span>Continue with Google</span></button><button class="so2" data-oauth="github">${GH}<span>Continue with GitHub</span></button></div><div class="or"><span>or</span></div>`+
  (li?`<form class="af" id="fl"><input type="email" name="email" required placeholder="Email address" autocomplete="email"><input type="password" name="password" required placeholder="Password" autocomplete="current-password"><button class="btn d">Login</button><button type="button" class="lk" data-forgot>Forgot password?</button></form>`
  :`<form class="af" id="fs"><input name="name" required placeholder="Full name" autocomplete="name"><input type="email" name="email" required placeholder="Email address" autocomplete="email"><input type="password" name="password" required minlength="8" placeholder="Password" autocomplete="new-password"><input type="password" name="confirm" required minlength="8" placeholder="Confirm password" autocomplete="new-password"><button class="btn d">Create Account</button></form>`)+msgH()}
 $('#dA').innerHTML=h}
function closeAll(){$('#sr').classList.remove('o');$('#nl').classList.remove('o');$$('.dr').forEach(d=>d.classList.remove('o'));$('#bk').classList.remove('o');document.body.style.overflow=''}
function openD(id){closeAll();ae=null;msg=null;(id==='#dS'?renderS:renderA)();$('#bk').classList.add('o');$(id).classList.add('o');document.body.style.overflow='hidden';setTimeout(()=>$(id).querySelector('button')?.focus(),80)}
const authMsg=(m,ok)=>{msg={m,ok};renderA()};
async function loadAddr(){if(WS.user&&sb){const{data}=await sb.from('addresses').select('first,last,address,city,zip').eq('user_id',WS.user.id).maybeSingle();WS.addr=data||null}else WS.addr=LS('wa')||null;renderS();renderA();
 if(location.hash==='#checkout'&&$('#cf')&&!document.activeElement.closest('#cf'))checkout()}
WS.saveAddr=async(a,quiet)=>{const upd=!!WS.addr;
 if(WS.user&&sb){const{error}=await sb.from('addresses').upsert({...a,user_id:WS.user.id,updated_at:new Date().toISOString()});if(error){toast('Could not save the address. Please try again.',1);return false}}else LS('wa',a);
 WS.addr=a;if(!quiet){toast(upd?'Address updated':'Address saved');renderS();renderA()}return true};
async function delAddr(){if(WS.user&&sb){const{error}=await sb.from('addresses').delete().eq('user_id',WS.user.id);if(error){toast('Could not save the address. Please try again.',1);return}}else LS('wa',null);WS.addr=null;ae=null;toast('Address deleted');renderS();renderA()}
document.addEventListener('click',e=>{const t=e.target.closest('[data-close],[data-lang],[data-notif],[data-ad],[data-tab],[data-oauth],[data-logout],[data-forgot],[data-open]');if(!t)return;const d=t.dataset;
 if('close' in d)closeAll();
 else if(d.lang){WS.setLang(d.lang);renderS();renderA()}
 else if('notif' in d){WS.notif=!WS.notif;LS('wn',WS.notif);renderS()}
 else if(d.ad){if(d.ad==='del')delAddr();else{ae=d.ad==='cancel'?null:d.ad;renderS()}}
 else if(d.tab){tab=d.tab;msg=null;renderA()}
 else if(d.oauth){if(!sb)return authMsg(NOCFG);sb.auth.signInWithOAuth({provider:d.oauth,options:{redirectTo:redirect()}}).then(({error})=>error&&authMsg(error.message))}
 else if('logout' in d){sb&&sb.auth.signOut().then(()=>{toast('You are logged out.');closeAll()})}
 else if('forgot' in d){const em=($('#fl input[name=email]')||{}).value;if(!em)return authMsg('Enter your email first.');if(!sb)return authMsg(NOCFG);sb.auth.resetPasswordForEmail(em,{redirectTo:redirect()}).then(({error})=>error?authMsg(error.message):authMsg('Password reset email sent.',1))}
 else if(d.open)openD(d.open)});
document.addEventListener('submit',async e=>{const f=e.target,id=f.id;if(!['af','fl','fs'].includes(id))return;e.preventDefault();const d=Object.fromEntries(new FormData(f));
 if(id==='af'){const a={first:d.first.trim(),last:d.last.trim(),address:d.address.trim(),city:d.city.trim(),zip:d.zip.trim()};if(Object.values(a).some(v=>!v))return toast('Please fill in all address fields.',1);if(await WS.saveAddr(a)){ae=null;renderS();renderA()}return}
 if(!sb)return authMsg(NOCFG);
 if(id==='fl'){const{error}=await sb.auth.signInWithPassword({email:d.email.trim(),password:d.password});if(error)return authMsg(error.message);msg=null;toast('Logged in');closeAll()}
 else{if(d.password!==d.confirm)return authMsg('Passwords do not match.');if(d.password.length<8)return authMsg('Password must be at least 8 characters.');
  const{data,error}=await sb.auth.signUp({email:d.email.trim(),password:d.password,options:{data:{full_name:d.name.trim()},emailRedirectTo:redirect()}});if(error)return authMsg(error.message);
  if(data.session){toast('Account created');closeAll()}else authMsg('Check your email to confirm your account.',1)}});
addEventListener('keydown',e=>{if(e.key==='Escape')closeAll()});
$('#bu').onclick=()=>openD('#dA');$('#bg').onclick=()=>openD('#dS');
if(sb)sb.auth.onAuthStateChange((_e,s)=>{WS.user=s&&s.user||null;$('#bu').classList.toggle('in',!!WS.user);setTimeout(loadAddr,0)});
else loadAddr();
})();
