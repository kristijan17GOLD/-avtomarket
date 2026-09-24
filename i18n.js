(()=> {
const LANG_KEY='am_language';
const dictionaries={
sl:{language:'Jezik',market:'Trg',allMarkets:'Vsi trgi',slovenia:'Slovenija',croatia:'Hrvaška',bosnia:'Bosna in Hercegovina',
vehicles:'Vozila',sell:'Prodaj vozilo',dealers:'Avtohiše',account:'Moj račun',publish:'+ Objavi vozilo',
vehicleType:'Vrsta vozila',brand:'Znamka',model:'Model',priceTo:'Cena do',yearFrom:'Letnik od',search:'Poišči',
allVehicles:'Vsa vozila',allBrands:'Vse znamke',allModels:'Vsi modeli',noLimit:'Ni omejitve',
fuel:'Gorivo',gearbox:'Menjalnik',body:'Karoserija',maxKm:'Največ km',favorites:'Priljubljeni',messages:'Sporočila',
compare:'Primerjaj',backVehicles:'Nazaj na vozila',country:'Država / trg',location:'Lokacija',
publishVehicle:'Objavi svoje vozilo',equipment:'Oprema vozila',description:'Opis vozila',photos:'Fotografije',
seller:'Prodajalec',contactSeller:'Kontaktiraj prodajalca',saveAd:'Shrani oglas',share:'Deli oglas',
marketAnalysis:'AI tržna analiza',similar:'Podobna vozila',login:'Prijava',registration:'Registracija',
myAds:'Moji oglasi',newAd:'+ Nov oglas',logout:'Odjava'},
hr:{language:'Jezik',market:'Tržište',allMarkets:'Sva tržišta',slovenia:'Slovenija',croatia:'Hrvatska',bosnia:'Bosna i Hercegovina',
vehicles:'Vozila',sell:'Prodaj vozilo',dealers:'Auto kuće',account:'Moj račun',publish:'+ Objavi vozilo',
vehicleType:'Vrsta vozila',brand:'Marka',model:'Model',priceTo:'Cijena do',yearFrom:'Godište od',search:'Pretraži',
allVehicles:'Sva vozila',allBrands:'Sve marke',allModels:'Svi modeli',noLimit:'Bez ograničenja',
fuel:'Gorivo',gearbox:'Mjenjač',body:'Karoserija',maxKm:'Najviše km',favorites:'Favoriti',messages:'Poruke',
compare:'Usporedi',backVehicles:'Natrag na vozila',country:'Država / tržište',location:'Lokacija',
publishVehicle:'Objavi svoje vozilo',equipment:'Oprema vozila',description:'Opis vozila',photos:'Fotografije',
seller:'Prodavatelj',contactSeller:'Kontaktiraj prodavatelja',saveAd:'Spremi oglas',share:'Podijeli oglas',
marketAnalysis:'AI analiza tržišta',similar:'Slična vozila',login:'Prijava',registration:'Registracija',
myAds:'Moji oglasi',newAd:'+ Novi oglas',logout:'Odjava'},
sr:{language:'Jezik',market:'Tržište',allMarkets:'Sva tržišta',slovenia:'Slovenija',croatia:'Hrvatska',bosnia:'Bosna i Hercegovina',
vehicles:'Vozila',sell:'Prodaj vozilo',dealers:'Auto-kuće',account:'Moj nalog',publish:'+ Objavi vozilo',
vehicleType:'Vrsta vozila',brand:'Marka',model:'Model',priceTo:'Cena do',yearFrom:'Godište od',search:'Pretraži',
allVehicles:'Sva vozila',allBrands:'Sve marke',allModels:'Svi modeli',noLimit:'Bez ograničenja',
fuel:'Gorivo',gearbox:'Menjač',body:'Karoserija',maxKm:'Najviše km',favorites:'Omiljeni',messages:'Poruke',
compare:'Uporedi',backVehicles:'Nazad na vozila',country:'Država / tržište',location:'Lokacija',
publishVehicle:'Objavi svoje vozilo',equipment:'Oprema vozila',description:'Opis vozila',photos:'Fotografije',
seller:'Prodavac',contactSeller:'Kontaktiraj prodavca',saveAd:'Sačuvaj oglas',share:'Podeli oglas',
marketAnalysis:'AI analiza tržišta',similar:'Slična vozila',login:'Prijava',registration:'Registracija',
myAds:'Moji oglasi',newAd:'+ Novi oglas',logout:'Odjava'},
bs:{language:'Jezik',market:'Tržište',allMarkets:'Sva tržišta',slovenia:'Slovenija',croatia:'Hrvatska',bosnia:'Bosna i Hercegovina',
vehicles:'Vozila',sell:'Prodaj vozilo',dealers:'Auto kuće',account:'Moj račun',publish:'+ Objavi vozilo',
vehicleType:'Vrsta vozila',brand:'Marka',model:'Model',priceTo:'Cijena do',yearFrom:'Godište od',search:'Pretraži',
allVehicles:'Sva vozila',allBrands:'Sve marke',allModels:'Svi modeli',noLimit:'Bez ograničenja',
fuel:'Gorivo',gearbox:'Mjenjač',body:'Karoserija',maxKm:'Najviše km',favorites:'Omiljeni',messages:'Poruke',
compare:'Uporedi',backVehicles:'Nazad na vozila',country:'Država / tržište',location:'Lokacija',
publishVehicle:'Objavi svoje vozilo',equipment:'Oprema vozila',description:'Opis vozila',photos:'Fotografije',
seller:'Prodavač',contactSeller:'Kontaktiraj prodavača',saveAd:'Sačuvaj oglas',share:'Podijeli oglas',
marketAnalysis:'AI analiza tržišta',similar:'Slična vozila',login:'Prijava',registration:'Registracija',
myAds:'Moji oglasi',newAd:'+ Novi oglas',logout:'Odjava'}
};
function lang(){return localStorage.getItem(LANG_KEY)||'sl'}
function t(key){return (dictionaries[lang()]||dictionaries.sl)[key]||key}
function translate(){
 document.documentElement.lang=lang();
 document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.dataset.i18n;if(k)el.textContent=t(k)});
 document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{const k=el.dataset.i18nPlaceholder;if(k)el.placeholder=t(k)});
 document.querySelectorAll('[data-country-label]').forEach(el=>{const code=el.dataset.countryLabel;el.textContent=code==='SI'?t('slovenia'):code==='HR'?t('croatia'):t('bosnia')});
 const phraseMap={};
 Object.entries(dictionaries).forEach(([lng,dict])=>Object.entries(dict).forEach(([k,v])=>phraseMap[v]=k));
 const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
 const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
 nodes.forEach(n=>{const raw=n.nodeValue,trim=raw.trim();if(!trim||!phraseMap[trim])return;const lead=raw.match(/^\s*/)?.[0]||'',trail=raw.match(/\s*$/)?.[0]||'';n.nodeValue=lead+t(phraseMap[trim])+trail});
 document.querySelectorAll('input[placeholder]').forEach(el=>{const k=phraseMap[el.placeholder];if(k)el.placeholder=t(k)});
 const sel=document.getElementById('amLanguage');if(sel)sel.value=lang();
}
function inject(){
 const nav=document.querySelector('header .nav'); if(!nav||document.getElementById('amLanguage')){translate();return}
 const wrap=document.createElement('div');wrap.style.cssText='display:flex;align-items:center;gap:6px';
 wrap.innerHTML='<select id="amLanguage" aria-label="Jezik" style="border:1px solid #e6e9ee;background:#fff;border-radius:10px;padding:8px 9px;font-weight:800;font-size:12px"><option value="sl">SL</option><option value="hr">HR</option><option value="sr">SR</option><option value="bs">BS</option></select>';
 const spacer=nav.querySelector('.sp,.navspacer'); if(spacer)spacer.after(wrap); else nav.appendChild(wrap);
 document.getElementById('amLanguage').value=lang();
 document.getElementById('amLanguage').addEventListener('change',e=>{localStorage.setItem(LANG_KEY,e.target.value);translate();window.dispatchEvent(new CustomEvent('avtomarket:languagechange',{detail:{language:e.target.value}}))});
 translate();
}
window.AvtoMarketI18n={t,translate,lang};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',inject);else inject();
})();