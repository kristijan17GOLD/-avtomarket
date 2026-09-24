(()=> {
const LANG_KEY='am_language';
const dict={
sl:{
language:'Jezik',market:'Trg',allMarkets:'Vsi trgi',slovenia:'Slovenija',croatia:'Hrvaška',bosnia:'Bosna in Hercegovina',
vehicles:'Vozila',sell:'Prodaj vozilo',dealers:'Avtohiše',account:'Moj račun',publish:'+ Objavi vozilo',
vehicleType:'Vrsta vozila',brand:'Znamka',model:'Model',priceTo:'Cena do',yearFrom:'Letnik od',search:'Poišči',
allVehicles:'Vsa vozila',allBrands:'Vse znamke',allModels:'Vsi modeli',noLimit:'Ni omejitve',
fuel:'Gorivo',gearbox:'Menjalnik',body:'Karoserija',maxKm:'Največ km',favorites:'Priljubljeni',messages:'Sporočila',
compare:'Primerjaj',backVehicles:'Nazaj na vozila',country:'Država / trg',location:'Lokacija',
publishVehicle:'Objavi svoje vozilo',equipment:'Oprema vozila',description:'Opis vozila',photos:'Fotografije',
seller:'Prodajalec',contactSeller:'Pošlji sporočilo',saveAd:'Shrani oglas',share:'Deli oglas',
marketAnalysis:'AI tržna analiza',similar:'Podobna vozila',login:'Prijava',registration:'Registracija',
myAds:'Moji oglasi',newAd:'+ Nov oglas',logout:'Odjava',
status:'Status',listingId:'ID oglasa',featured:'Izpostavljen',yes:'Da',no:'Ne',active:'Aktiven',
vehiclePrice:'Cena vozila',reportAd:'⚑ Prijavi oglas',verifiedProfile:'✓ Preverjen profil',
privateSeller:'Zasebni prodajalec',call:'Pokliči',email:'E-pošta',year:'Letnik',mileage:'Kilometri',
vinCheck:'VIN pregled',vin:'VIN',notChecked:'Ni preverjen',vehicleDescription:'Opis vozila',
similarVehicles:'Podobna vozila',latestAds:'Najnovejši oglasi',latestFive:'Zadnjih 5 objavljenih vozil.',
attractive:'Najbolj atraktivni',attractiveSub:'Izbrani oglasi, ki trenutno najbolj izstopajo.',
searchResults:'Rezultati iskanja',foundAds:'najdenih oglasov.',freshAd:'Svež oglas',highlighted:'Izpostavljeno',
viewAd:'Poglej oglas →',noSimilar:'Trenutno ni podobnih vozil.',notEnoughComps:'Za ta model trenutno še ni dovolj primerljivih oglasov za zanesljivo analizo. Ko bo več podatkov ali priklopljen zunanji vir, bo analiza natančnejša.',
loadingAd:'Nalagam oglas ...',adMissing:'Oglas ne obstaja ali ni več aktiven.',noDescription:'Prodajalec ni dodal dodatnega opisa.',
noEquipment:'Prodajalec ni označil dodatne opreme.',publicContactMissing:'Prodajalec ni javno prikazal telefona ali e-pošte.',
saveChanges:'Shrani spremembe',publishAd:'Objavi oglas',editAd:'Uredi oglas',deleteAd:'Izbriši',newListing:'Nov oglas',
companyDealer:'Podjetje / avtohiša',privatePerson:'Fizična oseba',profileSeller:'Profil prodajalca',
companyName:'Naziv podjetja',phone:'Telefon',website:'Spletna stran',taxNumber:'Davčna številka',registrationNo:'Matična številka',
saveProfile:'Shrani profil',statistics:'Statistika',safeBuy:'Varen nakup',privacy:'Zasebnost',terms:'Pogoji uporabe',contact:'Kontakt',
analyticsAllow:'Dovoli analitiko',necessaryOnly:'Samo nujno',privacyStats:'Zasebnost in statistika',
analyticsText:'AvtoMarket želi anonimno meriti uporabo strani, da lahko izboljšujemo portal. Analitika ni potrebna za delovanje strani.',
moreInfo:'Več informacij'
},
hr:{
language:'Jezik',market:'Tržište',allMarkets:'Sva tržišta',slovenia:'Slovenija',croatia:'Hrvatska',bosnia:'Bosna i Hercegovina',
vehicles:'Vozila',sell:'Prodaj vozilo',dealers:'Auto kuće',account:'Moj račun',publish:'+ Objavi vozilo',
vehicleType:'Vrsta vozila',brand:'Marka',model:'Model',priceTo:'Cijena do',yearFrom:'Godište od',search:'Pretraži',
allVehicles:'Sva vozila',allBrands:'Sve marke',allModels:'Svi modeli',noLimit:'Bez ograničenja',
fuel:'Gorivo',gearbox:'Mjenjač',body:'Karoserija',maxKm:'Najviše km',favorites:'Favoriti',messages:'Poruke',
compare:'Usporedi',backVehicles:'Natrag na vozila',country:'Država / tržište',location:'Lokacija',
publishVehicle:'Objavi svoje vozilo',equipment:'Oprema vozila',description:'Opis vozila',photos:'Fotografije',
seller:'Prodavatelj',contactSeller:'Pošalji poruku',saveAd:'Spremi oglas',share:'Podijeli oglas',
marketAnalysis:'AI analiza tržišta',similar:'Slična vozila',login:'Prijava',registration:'Registracija',
myAds:'Moji oglasi',newAd:'+ Novi oglas',logout:'Odjava',
status:'Status',listingId:'ID oglasa',featured:'Istaknut',yes:'Da',no:'Ne',active:'Aktivan',
vehiclePrice:'Cijena vozila',reportAd:'⚑ Prijavi oglas',verifiedProfile:'✓ Provjeren profil',
privateSeller:'Privatni prodavatelj',call:'Nazovi',email:'E-pošta',year:'Godište',mileage:'Kilometraža',
vinCheck:'VIN provjera',vin:'VIN',notChecked:'Nije provjeren',vehicleDescription:'Opis vozila',
similarVehicles:'Slična vozila',latestAds:'Najnoviji oglasi',latestFive:'Posljednjih 5 objavljenih vozila.',
attractive:'Najatraktivniji',attractiveSub:'Odabrani oglasi koji se trenutno najviše ističu.',
searchResults:'Rezultati pretraživanja',foundAds:'pronađenih oglasa.',freshAd:'Novi oglas',highlighted:'Istaknuto',
viewAd:'Pogledaj oglas →',noSimilar:'Trenutno nema sličnih vozila.',notEnoughComps:'Za ovaj model trenutačno nema dovoljno usporedivih oglasa za pouzdanu analizu. Kada bude više podataka ili se poveže vanjski izvor, analiza će biti preciznija.',
loadingAd:'Učitavam oglas ...',adMissing:'Oglas ne postoji ili više nije aktivan.',noDescription:'Prodavatelj nije dodao dodatni opis.',
noEquipment:'Prodavatelj nije označio dodatnu opremu.',publicContactMissing:'Prodavatelj nije javno prikazao telefon ili e-poštu.',
saveChanges:'Spremi promjene',publishAd:'Objavi oglas',editAd:'Uredi oglas',deleteAd:'Izbriši',newListing:'Novi oglas',
companyDealer:'Tvrtka / auto kuća',privatePerson:'Privatna osoba',profileSeller:'Profil prodavatelja',
companyName:'Naziv tvrtke',phone:'Telefon',website:'Web stranica',taxNumber:'Porezni broj',registrationNo:'Matični broj',
saveProfile:'Spremi profil',statistics:'Statistika',safeBuy:'Sigurna kupnja',privacy:'Privatnost',terms:'Uvjeti korištenja',contact:'Kontakt',
analyticsAllow:'Dopusti analitiku',necessaryOnly:'Samo nužno',privacyStats:'Privatnost i statistika',
analyticsText:'AvtoMarket želi anonimno mjeriti korištenje stranice kako bismo mogli poboljšavati portal. Analitika nije potrebna za rad stranice.',
moreInfo:'Više informacija'
},
sr:{
language:'Jezik',market:'Tržište',allMarkets:'Sva tržišta',slovenia:'Slovenija',croatia:'Hrvatska',bosnia:'Bosna i Hercegovina',
vehicles:'Vozila',sell:'Prodaj vozilo',dealers:'Auto-kuće',account:'Moj nalog',publish:'+ Objavi vozilo',
vehicleType:'Vrsta vozila',brand:'Marka',model:'Model',priceTo:'Cena do',yearFrom:'Godište od',search:'Pretraži',
allVehicles:'Sva vozila',allBrands:'Sve marke',allModels:'Svi modeli',noLimit:'Bez ograničenja',
fuel:'Gorivo',gearbox:'Menjač',body:'Karoserija',maxKm:'Najviše km',favorites:'Omiljeni',messages:'Poruke',
compare:'Uporedi',backVehicles:'Nazad na vozila',country:'Država / tržište',location:'Lokacija',
publishVehicle:'Objavi svoje vozilo',equipment:'Oprema vozila',description:'Opis vozila',photos:'Fotografije',
seller:'Prodavac',contactSeller:'Pošalji poruku',saveAd:'Sačuvaj oglas',share:'Podeli oglas',
marketAnalysis:'AI analiza tržišta',similar:'Slična vozila',login:'Prijava',registration:'Registracija',
myAds:'Moji oglasi',newAd:'+ Novi oglas',logout:'Odjava',
status:'Status',listingId:'ID oglasa',featured:'Istaknut',yes:'Da',no:'Ne',active:'Aktivan',
vehiclePrice:'Cena vozila',reportAd:'⚑ Prijavi oglas',verifiedProfile:'✓ Proveren profil',
privateSeller:'Privatni prodavac',call:'Pozovi',email:'E-pošta',year:'Godište',mileage:'Kilometraža',
vinCheck:'VIN provera',vin:'VIN',notChecked:'Nije proveren',vehicleDescription:'Opis vozila',
similarVehicles:'Slična vozila',latestAds:'Najnoviji oglasi',latestFive:'Poslednjih 5 objavljenih vozila.',
attractive:'Najatraktivniji',attractiveSub:'Odabrani oglasi koji se trenutno najviše ističu.',
searchResults:'Rezultati pretrage',foundAds:'pronađenih oglasa.',freshAd:'Novi oglas',highlighted:'Istaknuto',
viewAd:'Pogledaj oglas →',noSimilar:'Trenutno nema sličnih vozila.',notEnoughComps:'Za ovaj model trenutno nema dovoljno uporedivih oglasa za pouzdanu analizu. Kada bude više podataka ili se poveže spoljni izvor, analiza će biti preciznija.',
loadingAd:'Učitavam oglas ...',adMissing:'Oglas ne postoji ili više nije aktivan.',noDescription:'Prodavac nije dodao dodatni opis.',
noEquipment:'Prodavac nije označio dodatnu opremu.',publicContactMissing:'Prodavac nije javno prikazao telefon ili e-poštu.',
saveChanges:'Sačuvaj izmene',publishAd:'Objavi oglas',editAd:'Uredi oglas',deleteAd:'Obriši',newListing:'Novi oglas',
companyDealer:'Firma / auto-kuća',privatePerson:'Fizičko lice',profileSeller:'Profil prodavca',
companyName:'Naziv firme',phone:'Telefon',website:'Veb-sajt',taxNumber:'PIB',registrationNo:'Matični broj',
saveProfile:'Sačuvaj profil',statistics:'Statistika',safeBuy:'Bezbedna kupovina',privacy:'Privatnost',terms:'Uslovi korišćenja',contact:'Kontakt',
analyticsAllow:'Dozvoli analitiku',necessaryOnly:'Samo neophodno',privacyStats:'Privatnost i statistika',
analyticsText:'AvtoMarket želi anonimno da meri korišćenje stranice kako bismo mogli da unapređujemo portal. Analitika nije potrebna za rad stranice.',
moreInfo:'Više informacija'
},
bs:{
language:'Jezik',market:'Tržište',allMarkets:'Sva tržišta',slovenia:'Slovenija',croatia:'Hrvatska',bosnia:'Bosna i Hercegovina',
vehicles:'Vozila',sell:'Prodaj vozilo',dealers:'Auto kuće',account:'Moj račun',publish:'+ Objavi vozilo',
vehicleType:'Vrsta vozila',brand:'Marka',model:'Model',priceTo:'Cijena do',yearFrom:'Godište od',search:'Pretraži',
allVehicles:'Sva vozila',allBrands:'Sve marke',allModels:'Svi modeli',noLimit:'Bez ograničenja',
fuel:'Gorivo',gearbox:'Mjenjač',body:'Karoserija',maxKm:'Najviše km',favorites:'Omiljeni',messages:'Poruke',
compare:'Uporedi',backVehicles:'Nazad na vozila',country:'Država / tržište',location:'Lokacija',
publishVehicle:'Objavi svoje vozilo',equipment:'Oprema vozila',description:'Opis vozila',photos:'Fotografije',
seller:'Prodavač',contactSeller:'Pošalji poruku',saveAd:'Sačuvaj oglas',share:'Podijeli oglas',
marketAnalysis:'AI analiza tržišta',similar:'Slična vozila',login:'Prijava',registration:'Registracija',
myAds:'Moji oglasi',newAd:'+ Novi oglas',logout:'Odjava',
status:'Status',listingId:'ID oglasa',featured:'Istaknut',yes:'Da',no:'Ne',active:'Aktivan',
vehiclePrice:'Cijena vozila',reportAd:'⚑ Prijavi oglas',verifiedProfile:'✓ Provjeren profil',
privateSeller:'Privatni prodavač',call:'Pozovi',email:'E-pošta',year:'Godište',mileage:'Kilometraža',
vinCheck:'VIN provjera',vin:'VIN',notChecked:'Nije provjeren',vehicleDescription:'Opis vozila',
similarVehicles:'Slična vozila',latestAds:'Najnoviji oglasi',latestFive:'Posljednjih 5 objavljenih vozila.',
attractive:'Najatraktivniji',attractiveSub:'Odabrani oglasi koji se trenutno najviše ističu.',
searchResults:'Rezultati pretrage',foundAds:'pronađenih oglasa.',freshAd:'Novi oglas',highlighted:'Istaknuto',
viewAd:'Pogledaj oglas →',noSimilar:'Trenutno nema sličnih vozila.',notEnoughComps:'Za ovaj model trenutno nema dovoljno uporedivih oglasa za pouzdanu analizu. Kada bude više podataka ili se poveže vanjski izvor, analiza će biti preciznija.',
loadingAd:'Učitavam oglas ...',adMissing:'Oglas ne postoji ili više nije aktivan.',noDescription:'Prodavač nije dodao dodatni opis.',
noEquipment:'Prodavač nije označio dodatnu opremu.',publicContactMissing:'Prodavač nije javno prikazao telefon ili e-poštu.',
saveChanges:'Sačuvaj izmjene',publishAd:'Objavi oglas',editAd:'Uredi oglas',deleteAd:'Izbriši',newListing:'Novi oglas',
companyDealer:'Firma / auto kuća',privatePerson:'Fizičko lice',profileSeller:'Profil prodavača',
companyName:'Naziv firme',phone:'Telefon',website:'Web stranica',taxNumber:'Porezni broj',registrationNo:'Matični broj',
saveProfile:'Sačuvaj profil',statistics:'Statistika',safeBuy:'Sigurna kupovina',privacy:'Privatnost',terms:'Uslovi korištenja',contact:'Kontakt',
analyticsAllow:'Dozvoli analitiku',necessaryOnly:'Samo nužno',privacyStats:'Privatnost i statistika',
analyticsText:'AvtoMarket želi anonimno mjeriti korištenje stranice kako bismo mogli poboljšavati portal. Analitika nije potrebna za rad stranice.',
moreInfo:'Više informacija'
}
};

const reverse={};
for(const [lng,d] of Object.entries(dict)) for(const [k,v] of Object.entries(d)) reverse[v]=k;

function lang(){const l=localStorage.getItem(LANG_KEY)||'sl';return ['sl','hr','sr','bs'].includes(l)?l:'sl'}
function t(key){return (dict[lang()]||dict.sl)[key]||dict.sl[key]||key}
function translateString(raw){
 if(!raw)return raw;
 const trim=raw.trim();
 if(reverse[trim]) return raw.replace(trim,t(reverse[trim]));
 let s=raw;
 const replacements=[
  [/^([0-9]+) najdenih oglasov\.$/,m=>m.replace('najdenih oglasov.',t('foundAds'))],
  [/^([0-9]+) pronađenih oglasa\.$/,m=>m.replace('pronađenih oglasa.',t('foundAds'))],
  [/^([0-9]+) pronađenih oglasa\.$/,m=>m.replace('pronađenih oglasa.',t('foundAds'))]
 ];
 for(const [re,fn] of replacements) if(re.test(trim)) return raw.replace(trim,fn(trim));
 return s;
}
function translateElement(el){
 if(el.nodeType===Node.TEXT_NODE){el.nodeValue=translateString(el.nodeValue);return}
 if(el.nodeType!==Node.ELEMENT_NODE)return;
 if(el.matches('[data-i18n]')){const k=el.dataset.i18n;if(k)el.textContent=t(k);return}
 if(el.matches('[data-i18n-placeholder]')){const k=el.dataset.i18nPlaceholder;if(k)el.placeholder=t(k)}
 if(el.matches('[data-country-label]')){const code=el.dataset.countryLabel;el.textContent=code==='SI'?t('slovenia'):code==='HR'?t('croatia'):t('bosnia')}
 if(el.hasAttribute('placeholder'))el.placeholder=translateString(el.placeholder);
 for(const n of el.childNodes) translateElement(n);
}
let busy=false;
function translate(root=document.body){
 if(busy||!root)return;busy=true;
 document.documentElement.lang=lang();
 translateElement(root);
 const sel=document.getElementById('amLanguage');if(sel)sel.value=lang();
 busy=false;
}
function inject(){
 const nav=document.querySelector('header .nav');
 if(nav&&!document.getElementById('amLanguage')){
  const wrap=document.createElement('div');wrap.style.cssText='display:flex;align-items:center;gap:6px';
  wrap.innerHTML='<select id="amLanguage" aria-label="Jezik" style="border:1px solid #e6e9ee;background:#fff;border-radius:10px;padding:8px 9px;font-weight:800;font-size:12px"><option value="sl">SL</option><option value="hr">HR</option><option value="sr">SR</option><option value="bs">BS</option></select>';
  const spacer=nav.querySelector('.sp,.navspacer');if(spacer)spacer.after(wrap);else nav.appendChild(wrap);
  document.getElementById('amLanguage').addEventListener('change',e=>{localStorage.setItem(LANG_KEY,e.target.value);translate(document.body);window.dispatchEvent(new CustomEvent('avtomarket:languagechange',{detail:{language:e.target.value}}))});
 }
 translate(document.body);
 const observer=new MutationObserver(muts=>{
  if(busy)return;
  const roots=new Set();
  for(const m of muts){
   m.addedNodes.forEach(n=>{if(n.nodeType===Node.ELEMENT_NODE||n.nodeType===Node.TEXT_NODE)roots.add(n)});
  }
  if(!roots.size)return;
  requestAnimationFrame(()=>roots.forEach(r=>translate(r.nodeType===Node.TEXT_NODE?r.parentNode:r)));
 });
 observer.observe(document.body,{childList:true,subtree:true});
}
window.AvtoMarketI18n={t,translate,lang};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',inject);else inject();
})();