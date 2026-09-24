(function(){
 const SUPABASE_URL='https://esvmfafsqxhcqtuopkap.supabase.co';
 const SUPABASE_KEY='sb_publishable_04J7SsDJkKSBb_1pi8D1Wg_yL4rrd7Q';
 if(!window.supabase)return;
 const consentKey='am_analytics_consent';
 const css='#amConsent{position:fixed;left:14px;right:14px;bottom:14px;z-index:9999;max-width:680px;margin:auto;background:#fff;border:1px solid #e6e9ee;border-radius:16px;padding:15px;box-shadow:0 18px 50px rgba(17,19,24,.18);font:14px/1.45 system-ui;color:#111318}#amConsent b{display:block;margin-bottom:4px}#amConsent .a{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}#amConsent button{border:0;border-radius:10px;padding:10px 12px;font-weight:800;cursor:pointer}#amConsent .yes{background:#0f1720;color:#fff}#amConsent .no{background:#eef1f4;color:#111318}';
 function banner(){
  if(localStorage.getItem(consentKey))return;
  const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
  const el=document.createElement('div');el.id='amConsent';el.innerHTML='<b>Zasebnost in statistika</b><span>AvtoMarket želi anonimno meriti uporabo strani, da lahko izboljšujemo portal. Analitika ni potrebna za delovanje strani.</span><div class="a"><button class="yes">Dovoli analitiko</button><button class="no">Samo nujno</button><a href="privacy.html" style="padding:10px 2px;color:#707784">Več informacij</a></div>';document.body.appendChild(el);
  el.querySelector('.yes').onclick=()=>{localStorage.setItem(consentKey,'yes');el.remove();start()};
  el.querySelector('.no').onclick=()=>{localStorage.setItem(consentKey,'no');el.remove()};
 }
 async function start(){
  if(localStorage.getItem(consentKey)!=='yes')return;
  const client=window.__amAnalyticsDb||(window.__amAnalyticsDb=window.supabase.createClient(SUPABASE_URL,SUPABASE_KEY));
  const sidKey='am_analytics_session';let sid=sessionStorage.getItem(sidKey);
  if(!sid){sid=(crypto.randomUUID?crypto.randomUUID():Date.now()+'-'+Math.random().toString(36).slice(2));sessionStorage.setItem(sidKey,sid)}
  const listingId=location.pathname.endsWith('listing.html')?new URLSearchParams(location.search).get('id'):null;
  async function track(event_name,extra={}){
   try{const {data:{user}}=await client.auth.getUser();await client.from('analytics_events').insert({event_name,path:location.pathname+location.search,listing_id:extra.listing_id||listingId||null,session_id:sid,user_id:user?.id||null})}catch(e){}
  }
  window.AvtoMarketAnalytics={track};track('page_view');if(listingId)track('listing_view',{listing_id:listingId});
  document.addEventListener('click',e=>{const a=e.target.closest('a,button');if(!a)return;const href=a.getAttribute('href')||'',txt=(a.textContent||'').toLowerCase();if(href.startsWith('tel:'))track('phone_click',{listing_id:listingId});else if(href.startsWith('mailto:'))track('email_click',{listing_id:listingId});else if(txt.includes('sporočilo')||txt.includes('sporocilo'))track('message_click',{listing_id:listingId});else if(txt.includes('shrani')||txt.includes('shranjeno'))track('favorite_click',{listing_id:listingId});else if(txt.includes('primerj'))track('compare_click',{listing_id:listingId})},{passive:true});
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>{banner();start()});else{banner();start()}
})();