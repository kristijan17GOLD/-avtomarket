(function(){
  const SUPABASE_URL='https://esvmfafsqxhcqtuopkap.supabase.co';
  const SUPABASE_KEY='sb_publishable_04J7SsDJkKSBb_1pi8D1Wg_yL4rrd7Q';
  if(!window.supabase)return;
  const client=window.__amAnalyticsDb||(window.__amAnalyticsDb=window.supabase.createClient(SUPABASE_URL,SUPABASE_KEY));
  const sidKey='am_analytics_session';
  let sid=localStorage.getItem(sidKey);
  if(!sid){sid=(crypto.randomUUID?crypto.randomUUID():Date.now()+'-'+Math.random().toString(36).slice(2));localStorage.setItem(sidKey,sid)}
  const listingId=location.pathname.endsWith('/listing.html')||location.pathname.endsWith('listing.html')?new URLSearchParams(location.search).get('id'):null;
  async function track(event_name,extra={}){
    try{
      const {data:{user}}=await client.auth.getUser();
      await client.from('analytics_events').insert({
        event_name,
        path:location.pathname+location.search,
        listing_id:extra.listing_id||listingId||null,
        session_id:sid,
        user_id:user?.id||null
      });
    }catch(e){}
  }
  window.AvtoMarketAnalytics={track};
  track('page_view');
  if(listingId)track('listing_view',{listing_id:listingId});
  document.addEventListener('click',e=>{
    const a=e.target.closest('a,button');if(!a)return;
    const href=a.getAttribute('href')||'',txt=(a.textContent||'').toLowerCase();
    if(href.startsWith('tel:'))track('phone_click',{listing_id:listingId});
    else if(href.startsWith('mailto:'))track('email_click',{listing_id:listingId});
    else if(txt.includes('sporočilo')||txt.includes('sporocilo'))track('message_click',{listing_id:listingId});
    else if(txt.includes('shrani')||txt.includes('shranjeno'))track('favorite_click',{listing_id:listingId});
    else if(txt.includes('primerj'))track('compare_click',{listing_id:listingId});
  },{passive:true});
})();