const SUPABASE_URL=process.env.SUPABASE_URL;
const SERVICE_KEY=process.env.SUPABASE_SERVICE_ROLE_KEY;
const FEED_URL=process.env.FEED_URL;
if(!SUPABASE_URL||!SERVICE_KEY||!FEED_URL) throw new Error('Missing SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY or FEED_URL');
const feedRes=await fetch(FEED_URL);if(!feedRes.ok)throw new Error('Feed fetch failed: '+feedRes.status);
const feed=await feedRes.json();
for(const x of feed){
 if(!x.external_id||!x.source_name||!x.source_url) continue;
 const row={...x,listing_kind:'external',status:'active',featured:false,description:x.description||'Zunanji oglas – za celoten opis odpri originalni vir.'};
 const r=await fetch(SUPABASE_URL+'/rest/v1/listings?on_conflict=source_name,external_id',{method:'POST',headers:{apikey:SERVICE_KEY,Authorization:'Bearer '+SERVICE_KEY,'Content-Type':'application/json',Prefer:'resolution=merge-duplicates,return=minimal'},body:JSON.stringify(row)});
 if(!r.ok) console.error(x.external_id,await r.text()); else console.log('Imported',x.source_name,x.external_id);
}
