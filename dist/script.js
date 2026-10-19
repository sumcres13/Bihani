const page = document.body.dataset.page || "home";

document.getElementById("site-header-mount").innerHTML = `
  <header class="site-header" id="site-header">
    <div class="header-inner container-wide">
      <a class="company-brand" href="index.html" aria-label="BIHANI ビハニ ホーム" data-i18n-aria="companyHome"><img class="brand-logo-text" src="assets/bihani-logo-text.png" width="470" height="193" alt="BIHANI ビハニ"/></a>
      <nav class="desktop-nav" aria-label="メインナビゲーション" data-i18n-aria="mainNavigation">
        <a href="index.html" ${page === "home" ? 'aria-current="page"' : ""} data-i18n="navHome">ホーム</a>
        <a href="about.html" ${page === "about" ? 'aria-current="page"' : ""} data-i18n="navAbout">私たちについて</a>
        <a href="stores.html" ${page === "stores" ? 'aria-current="page"' : ""} data-i18n="navStore">店舗・アクセス</a>
        <a href="reservation.html" ${page === "reservation" ? 'aria-current="page"' : ""} data-i18n="navReservePlain">ご予約</a>
      </nav>
      <div class="header-actions"><button class="language-switch" type="button" id="language-switch" aria-label="英語に切り替える"><span class="language-segment language-ja" lang="ja">JP</span><span class="language-segment language-en" lang="en">EN</span><span class="language-target sr-only">English</span></button><button class="menu-toggle" type="button" id="menu-toggle" aria-label="メニューを開く" data-i18n-aria="openMenu" aria-expanded="false" aria-controls="mobile-nav"><span></span><span></span></button></div>
    </div>
    <nav class="mobile-nav" id="mobile-nav" aria-label="モバイルナビゲーション" data-i18n-aria="mobileNavigation" hidden><a href="index.html" ${page === "home" ? 'aria-current="page"' : ""} data-i18n="navHome">ホーム</a><a href="about.html" ${page === "about" ? 'aria-current="page"' : ""} data-i18n="navAbout">私たちについて</a><a href="stores.html" ${page === "stores" ? 'aria-current="page"' : ""} data-i18n="navStore">店舗・アクセス</a><a href="reservation.html" ${page === "reservation" ? 'aria-current="page"' : ""} data-i18n="navReservePlain">ご予約</a></nav>
  </header>`;

document.getElementById("site-footer-mount").innerHTML = `
  <footer class="site-footer"><div class="container footer-grid">
    <div class="footer-brand"><a href="index.html"><img class="brand-logo-text" src="assets/bihani-logo-text.png" width="470" height="193" alt="BIHANI ビハニ"/></a><p data-i18n="footerStatement">スパイスの香りと、心ほどけるひととき。</p></div>
    <div><h2 data-i18n="contactLabel">お問い合わせ</h2><p><span data-i18n="addressFull">〒661-0033 兵庫県尼崎市南武庫之荘3丁目16-9 102号室</span></p><a href="tel:0664353107">06-6435-3107</a><a class="footer-email" href="mailto:somnath1316@gmail.com">somnath1316@gmail.com</a></div>
    <div class="footer-nav"><h2 data-i18n="navigationLabel">ナビゲーション</h2><a href="index.html" data-i18n="navHome">ホーム</a><a href="about.html" data-i18n="navAbout">私たちについて</a><a href="stores.html" data-i18n="navStore">店舗・アクセス</a><a href="reservation.html" data-i18n="navReservePlain">ご予約</a></div>
  </div><div class="container footer-bottom"><span>© <span id="year">2026</span> <span data-i18n="companyName">BIHANI ビハニ</span> <span data-i18n="rightsReserved">無断転載を禁じます。</span></span><a href="#main-content" data-i18n="footerBack">ページ上部へ ↑</a></div></footer>`;

const en = {
  "navHome": "Home",
  "navAbout": "About us",
  "navStore": "Store & access",
  "navReservePlain": "Reservations",
  "companyName": "BIHANI",
  "companyHome": "BIHANI home",
  "footerStatement": "Fragrant spices. A warm welcome.",
  "heroLine1": "Fragrant spices.",
  "heroLine2": "A place to feel at home.",
  "heroCopy": "Indian & Nepali cuisine in Minamimukonoso, Amagasaki.<br class=\"desktop-break\">Share freshly baked naan and curry with family and friends.",
  "heroReserve": "Reserve a table",
  "heroAccess": "Store & access",
  "heroImageAlt": "Teal tablecloths and warm lighting inside BIHANI",
  "aboutTitle": "<span class=\"about-heading-line\">Authentic flavors.</span><span class=\"about-heading-line\">In your neighborhood.</span>",
  "aboutBody": "BIHANI is a family-friendly Indian and Nepali restaurant in Minamimukonoso, Amagasaki. Enjoy fragrant spiced curries and naan baked in our restaurant. Settle into our table or tatami seating and make yourself at home.",
  "aboutLink": "About BIHANI",
  "diningImageAlt": "Table seating and warm interiors at BIHANI",
  "homeStoreInfoLabel": "STORE INFORMATION",
  "shopName": "BIHANI ビハニ",
  "homeQuality1Title": "Spiced curries. Freshly baked naan.",
  "homeQuality1Text": "Enjoy Indian and Nepali cuisine prepared with care, from fragrant curries to naan baked right here in our restaurant.",
  "homeQuality2Title": "A warm welcome for the whole family",
  "homeQuality2Text": "Choose table or tatami seating. With a children’s menu, BIHANI is a comfortable place to gather with family and friends.",
  "homeQuality3Title": "At our table or yours",
  "homeQuality3Text": "Lunch 11:00–15:00. Dinner 17:00–22:00. Delivery is available through Uber Eats, Demae-can and Rocket Now.",
  "snsTitle": "Stay close to BIHANI.",
  "snsCopy": "Connect with BIHANI on LINE.",
  "lineFollow": "Connect on LINE",
  "homeReserveTitle": "Reservations & inquiries",
  "homeReserveCopy": "Find reservation methods and delivery services here.",
  "reservePage": "Reservations",
  "aboutPageTitle": "About us",
  "repRole": "BIHANI",
  "representativeName": "Restaurant representative",
  "representativeAlt": "BIHANI restaurant representative",
  "ceoP1": "Namaste. Thank you for visiting the BIHANI website.\n\nHere in Minamimukonoso, Amagasaki, we hope to bring delicious food and relaxing moments to our neighborhood through Indian and Nepali cuisine. It is our joy to see families and friends enjoying fragrant spiced curries and naan baked in our restaurant.\n\nFrom meals with children to gatherings with friends, we want BIHANI to be a place where everyone can share a table and a smile. We prepare every dish with care and welcome you with warm hospitality. We look forward to seeing you.",
  "valuesTitle": "Our values",
  "value1Title": "Fragrant spices",
  "value1Text": "Bringing the flavors of India and Nepal to our neighborhood.",
  "value2Title": "Naan baked here",
  "value2Text": "Freshly baked naan, ready to enjoy with your favorite curry.",
  "value3Title": "A welcome for every generation",
  "value3Text": "A place for children and adults to share a meal and a smile.",
  "companyTitle": "Restaurant overview",
  "companyNameLabel": "Restaurant",
  "companyRepLabel": "Owner",
  "companyBusinessLabel": "Business",
  "companyBusiness": "Operating BIHANI, an Indian and Nepali family restaurant.",
  "companyLocationLabel": "Restaurant address",
  "storesPageTitle": "Store & access",
  "storeCuisine": "Indian & Nepali cuisine / Family restaurant",
  "addressLabel": "Address",
  "addressFull": "Room 102, 3-16-9 Minamimukonoso, Amagasaki, Hyogo 661-0033",
  "hoursLabel": "Hours",
  "hoursValue": "Lunch 11:00–15:00<br>Dinner 17:00–22:00",
  "closedLabel": "Closed",
  "closedValue": "Please contact the restaurant to confirm opening days.",
  "phoneLabel": "Phone",
  "galleryTitle": "Make yourself at home at BIHANI.",
  "slideOne": "Warm lighting and comfortable table seating.",
  "slideTwo": "Relax with your family in our tatami seating area.",
  "slideThree": "A table for moments with family and friends.",
  "locationTitle": "Location",
  "openMap": "Open in Google Maps ↗",
  "mapTitle": "Map to BIHANI in Minamimukonoso, Amagasaki",
  "storeImageAlt": "BIHANI restaurant entrance with its blue sign",
  "bookingTitle": "Reservations & inquiries",
  "bookingIntro": "Visit our restaurant listings, or call us. Please check reservation availability with each service.",
  "telephoneTitle": "Reserve by phone",
  "telephoneAction": "Call now",
  "deliveryTitle": "Delivery",
  "deliveryIntro": "Enjoy BIHANI at home. Order through a delivery partner.",
  "orderAction": "Order now",
  "uberAlt": "Uber Eats",
  "demaeAlt": "Demae-can",
  "rocketAlt": "Rocket Now",
  "lineAlt": "LINE",
  "mainNavigation": "Main navigation",
  "mobileNavigation": "Mobile navigation",
  "openMenu": "Open menu",
  "closeMenu": "Close menu",
  "contactLabel": "CONTACT",
  "navigationLabel": "NAVIGATION",
  "previousPhoto": "Previous photo",
  "nextPhoto": "Next photo",
  "galleryPhotos": "Choose a gallery photo",
  "photoOne": "Photo 1",
  "photoTwo": "Photo 2",
  "photoThree": "Photo 3",
  "skipLink": "Skip to content",
  "footerBack": "BACK TO TOP ↑",
  "rightsReserved": "All rights reserved.",
  "companyEmailLabel": "Email",
  "interiorWideAlt": "Table and tatami seating inside BIHANI",
  "interiorDetailAlt": "Spacious tatami seating at BIHANI",
  "gurunaviTitle": "Rakuten Gurunavi",
  "gurunaviAlt": "Rakuten Gurunavi",
  "listingExternal": "View restaurant information",
  "listingAction": "View store details",
  "ceoCatch": "Sharing food.<br>Bringing people together.",
  "ceoMessageLabel": "A MESSAGE FROM BIHANI",
  "companyPhoneLabel": "Restaurant phone",
  "tabelogTitle": "Tabelog",
  "tabelogAlt": "Tabelog",
  "tabelogDetails": "Menus & restaurant information",
  "tabelogAction": "Open Tabelog",
  "featuresLabel": "Features",
  "featuresValue": "Spiced curries, naan baked in the restaurant, table and tatami seating, and a children’s menu.",
  "accessDirections": "About a 10-minute walk from the south exit of Hankyu Mukonoso Station. Look for the blue BIHANI sign along Yamate-kansen Road. We are also about a 15-minute walk from JR Tachibana Station.",
  "ownerTitle": "Representative Director",
  "ownerName": "SHARMA SOMNATH"
};

const ja = {
  "companyName": "BIHANI ビハニ",
  "companyHome": "BIHANI ビハニ ホーム",
  "footerStatement": "スパイスの香りと、心ほどけるひととき。",
  "heroLine1": "香り豊かなスパイス<i class=\"hero-ending\">と<i class=\"hero-punctuation\">、</i></i>",
  "heroLine2": "心ほどける、温かな<i class=\"hero-ending\">時間<i class=\"hero-punctuation\">。</i></i>",
  "heroCopy": "尼崎・南武庫之荘のインド・ネパール料理店 BIHANI。<br class=\"desktop-break\">焼きたてのナンとカレーを、ご家族やご友人と。",
  "heroImageAlt": "BIHANIのティールのテーブルクロスと温かな照明のある店内",
  "aboutTitle": "<span class=\"about-heading-line\">いつもの街で、</span><span class=\"about-heading-line\">本場の味と出会う。</span>",
  "aboutBody": "<span class=\"budoux-phrase\">尼崎・南武庫之荘の</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">BIHANI</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">（ビハニ）は、</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">ご家族で</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">気軽に</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">楽しめる</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">インド・ネパール料理店です。</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">香り</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">豊かな</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">スパイスの</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">カレーと、</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">お店で</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">焼き上げる</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">ナン。</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">テーブル席と</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">お座敷で、</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">ゆったりと</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">お食事の</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">時間を</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">お過ごしください。</span>",
  "diningImageAlt": "BIHANIのテーブル席と落ち着いた店内",
  "shopName": "BIHANI ビハニ",
  "homeQuality1Title": "スパイス香るカレーと、焼きたてナン",
  "homeQuality1Text": "<span class=\"budoux-phrase\">インド・ネパール料理を、</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">心を</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">込めて。</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">香り</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">豊かな</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">カレーと、</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">お店で</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">焼き上げる</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">ナンを</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">お楽しみください。</span>",
  "homeQuality2Title": "ご家族で、ゆったりくつろげる場所",
  "homeQuality2Text": "<span class=\"budoux-phrase\">テーブル席と</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">お座敷を</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">ご用意。</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">お子さま向けメニューも</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">あり、</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">ご家族や</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">ご友人との</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">お食事に</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">ぴったりです。</span>",
  "homeQuality3Title": "お店でも、ご自宅でも",
  "homeQuality3Text": "<span class=\"budoux-phrase\">ランチ 11:00–15:00、</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">ディナー 17:00–22:00。</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">Uber Eats・</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">出前館・</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">Rocket Nowからも</span><wbr class=\"budoux-break\"><span class=\"budoux-phrase\">ご注文いただけます。</span>",
  "snsTitle": "ビハニを、もっと身近に。",
  "snsCopy": "BIHANIのLINEはこちらから。",
  "repRole": "BIHANI ビハニ",
  "representativeName": "代表者",
  "representativeAlt": "BIHANIの代表者",
  "ceoP1": "ナマステ。BIHANI（ビハニ）のホームページをご覧いただき、誠にありがとうございます。\n\n私たちは尼崎・南武庫之荘で、インド・ネパール料理を通じて、地域の皆さまにおいしい食事とくつろぎの時間をお届けしたいと考えています。香り豊かなスパイスのカレーと、お店で焼き上げるナンをご家族やご友人と気軽に楽しんでいただけることが、私たちの喜びです。\n\nお子さま連れのお食事から仲間との集まりまで、笑顔で食卓を囲めるお店を目指し、一皿一皿を大切に、温かなおもてなしに努めてまいります。皆さまのご来店を心よりお待ちしております。",
  "value1Title": "香り豊かなスパイス",
  "value1Text": "インド・ネパール料理の味わいを、地域の皆さまの食卓へ。",
  "value2Title": "お店で焼き上げるナン",
  "value2Text": "カレーとともに楽しむ、焼きたてのおいしさを大切に。",
  "value3Title": "家族にやさしいおもてなし",
  "value3Text": "お子さまから大人まで、笑顔で食卓を囲める場所に。",
  "companyBusiness": "インド・ネパール料理店 BIHANI（ビハニ）の運営。",
  "companyEmailLabel": "メールアドレス",
  "storeCuisine": "インド・ネパール料理 / ファミリーレストラン",
  "addressFull": "〒661-0033 兵庫県尼崎市南武庫之荘3丁目16-9 102号室",
  "hoursValue": "ランチ 11:00–15:00<br>ディナー 17:00–22:00",
  "closedValue": "営業日については店舗へお問い合わせください。",
  "galleryTitle": "ビハニで過ごす、ひととき。",
  "slideOne": "温かな灯りと、落ち着いたテーブル席。",
  "slideTwo": "お子さま連れにも、お座敷でゆったりと。",
  "slideThree": "ご家族やご友人と囲む、温かなひととき。",
  "mapTitle": "BIHANI ビハニの所在地の地図",
  "storeImageAlt": "青いBIHANIの看板が目印の店舗外観",
  "interiorWideAlt": "BIHANIのテーブル席とお座敷",
  "interiorDetailAlt": "BIHANIの広々としたお座敷席",
  "bookingIntro": "グルメサイトの店舗ページ、またはお電話からどうぞ。ご予約の可否は各サービスでご確認ください。",
  "gurunaviTitle": "楽天ぐるなび",
  "gurunaviAlt": "楽天ぐるなび",
  "listingExternal": "店舗情報をご覧いただけます",
  "listingAction": "店舗情報を見る",
  "deliveryIntro": "BIHANIのお料理を、ご自宅でも。各サービスからご注文いただけます。",
  "ceoCatch": "一皿から、<br>地域に笑顔を。",
  "ceoMessageLabel": "代表者メッセージ",
  "companyPhoneLabel": "店舗電話",
  "tabelogTitle": "食べログ",
  "tabelogAlt": "食べログ",
  "tabelogDetails": "メニュー・店舗情報をご覧いただけます",
  "tabelogAction": "食べログを見る",
  "featuresLabel": "お店の特徴",
  "featuresValue": "スパイスのカレー、店内で焼き上げるナン。テーブル席・お座敷・お子さま向けメニューをご用意しています。",
  "aboutLink": "ビハニについて",
  "companyTitle": "お店のご案内",
  "companyNameLabel": "店舗名",
  "accessDirections": "阪急神戸線「武庫之荘駅」南口から徒歩約10分。山手幹線沿いの青い「BIHANI」の看板が目印です。JR「立花駅」からも徒歩約15分でお越しいただけます。",
  "ownerTitle": "代表取締役",
  "ownerName": "SHARMA SOMNATH"
};
document.querySelectorAll("[data-i18n]").forEach(element => {
  if (ja[element.dataset.i18n] !== undefined) element.innerHTML = ja[element.dataset.i18n];
});
document.querySelectorAll("[data-i18n-aria], [data-i18n-alt], [data-i18n-title]").forEach(element => {
  const key = element.dataset.i18nAria || element.dataset.i18nAlt || element.dataset.i18nTitle;
  const attribute = element.dataset.i18nAria ? "aria-label" : element.dataset.i18nAlt ? "alt" : "title";
  if (ja[key] !== undefined) element.setAttribute(attribute, ja[key]);
});
const originalText = new Map();
document.querySelectorAll("[data-i18n]").forEach(element => originalText.set(element, element.innerHTML));
const originalAttributes = new Map();
document.querySelectorAll("[data-i18n-aria], [data-i18n-alt], [data-i18n-title]").forEach(element => originalAttributes.set(element, { aria: element.getAttribute("aria-label"), alt: element.getAttribute("alt"), title: element.getAttribute("title") }));
const languageButton = document.getElementById("language-switch");
let language = "ja";
try { language = localStorage.getItem("bihaniLanguage") === "en" ? "en" : "ja"; } catch {}
function renderLanguage(nextLanguage){
  language = nextLanguage;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach(element => { element.innerHTML = language === "ja" ? originalText.get(element) : en[element.dataset.i18n] ?? originalText.get(element); });
  document.querySelectorAll("[data-i18n-aria], [data-i18n-alt], [data-i18n-title]").forEach(element => {
    const key = element.dataset.i18nAria || element.dataset.i18nAlt || element.dataset.i18nTitle;
    const attribute = element.dataset.i18nAria ? "aria-label" : element.dataset.i18nAlt ? "alt" : "title";
    const original = originalAttributes.get(element)?.[element.dataset.i18nAria ? "aria" : element.dataset.i18nAlt ? "alt" : "title"];
    element.setAttribute(attribute, language === "ja" ? original : en[key] ?? original);
  });
  languageButton.classList.toggle("is-en", language === "en");
  languageButton.querySelector(".language-target").textContent = language === "ja" ? "English" : "日本語";
  languageButton.lang = language === "ja" ? "en" : "ja";
  languageButton.setAttribute("aria-label", language === "ja" ? "英語に切り替える" : "Switch to Japanese");
  const descriptions = {"ja": {"home": "尼崎・南武庫之荘のBIHANI（ビハニ）。インド・ネパール料理、焼きたてナン、家族でくつろげるお座敷とテーブル席。", "about": "BIHANI（ビハニ）の代表者メッセージと店舗のご案内。", "stores": "BIHANI（ビハニ）の住所、ランチ・ディナー営業時間、電話番号、店内写真とアクセス。", "reservation": "BIHANI（ビハニ）の電話予約、店舗情報、Uber Eats・出前館・Rocket Nowのデリバリー。"}, "en": {"home": "BIHANI, an Indian and Nepali family restaurant in Minamimukonoso, Amagasaki. Fresh naan, spiced curries and a warm welcome.", "about": "A message from the BIHANI representative and restaurant information.", "stores": "Find BIHANI in Amagasaki: address, lunch and dinner hours, phone, interior photos and map.", "reservation": "Call BIHANI, view restaurant listings or order through Uber Eats, Demae-can and Rocket Now."}};
  document.querySelector('meta[name="description"]').content = descriptions[language][page];
  document.title = (language === "ja"
    ? {home:"ホーム",about:"私たちについて",stores:"店舗・アクセス",reservation:"ご予約"}
    : {home:"Home",about:"About us",stores:"Store & access",reservation:"Reservations"})[page] + " | " + "BIHANI ビハニ";
  const menuToggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  if (menuToggle && mobileNav) menuToggle.setAttribute("aria-label", mobileNav.hidden ? (language === "ja" ? "メニューを開く" : "Open menu") : (language === "ja" ? "メニューを閉じる" : "Close menu"));
}

const header = document.getElementById("site-header");
const mobileNav = document.getElementById("mobile-nav");
const menuToggle = document.getElementById("menu-toggle");
renderLanguage(language);
languageButton.addEventListener("click", () => {
  const nextLanguage = language === "ja" ? "en" : "ja";
  try { localStorage.setItem("bihaniLanguage", nextLanguage); } catch {}
  renderLanguage(nextLanguage);
});
function updateHeader(){ header.classList.toggle("is-scrolled", window.scrollY > 24); }
updateHeader(); window.addEventListener("scroll",updateHeader,{passive:true});
menuToggle.addEventListener("click",()=>{ const opening=mobileNav.hidden; mobileNav.hidden=!opening; header.classList.toggle("menu-open",opening); menuToggle.setAttribute("aria-expanded",String(opening)); menuToggle.setAttribute("aria-label",opening?(language === "ja" ? "メニューを閉じる" : "Close menu"):(language === "ja" ? "メニューを開く" : "Open menu")); });
mobileNav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{mobileNav.hidden=true;header.classList.remove("menu-open");menuToggle.setAttribute("aria-expanded","false");}));

const slides=[...document.querySelectorAll(".gallery-slide")];
if(slides.length){
 const stage=document.getElementById("gallery-stage"),dots=[...stage.querySelectorAll(".gallery-dots button")],toggle=document.getElementById("gallery-autoplay");
 const motion=matchMedia("(prefers-reduced-motion: reduce)");let current=0,timer,enabled=!motion.matches;
 function showSlide(index){current=(index+slides.length)%slides.length;slides.forEach((slide,i)=>{slide.classList.toggle("is-active",i===current);slide.setAttribute("aria-hidden",String(i!==current));});dots.forEach((dot,i)=>{dot.classList.toggle("is-active",i===current);if(i===current)dot.setAttribute("aria-current","true");else dot.removeAttribute("aria-current");});}
 function label(){toggle.textContent=language==="ja"?(enabled?"Ⅱ 一時停止":"▶ 再生"):(enabled?"Ⅱ Pause":"▶ Play");toggle.setAttribute("aria-pressed",String(!enabled));}
 function schedule(){clearTimeout(timer);if(enabled&&!document.hidden&&!stage.matches(":hover")&&!stage.matches(":focus-within"))timer=setTimeout(()=>{showSlide(current+1);schedule();},5000);}
 function move(index){showSlide(index);schedule();}
 stage.querySelector(".gallery-prev").addEventListener("click",()=>move(current-1));stage.querySelector(".gallery-next").addEventListener("click",()=>move(current+1));dots.forEach((dot,i)=>dot.addEventListener("click",()=>move(i)));
 toggle.addEventListener("click",()=>{enabled=!enabled;label();schedule();});
 ["mouseenter","mouseleave","focusin"].forEach(event=>stage.addEventListener(event,schedule));stage.addEventListener("focusout",()=>queueMicrotask(schedule));document.addEventListener("visibilitychange",schedule);
 motion.addEventListener("change",()=>{enabled=!motion.matches;label();schedule();});languageButton.addEventListener("click",label);
 showSlide(0);label();schedule();
}

const reveals=document.querySelectorAll(".reveal");
if("IntersectionObserver" in window&&!matchMedia("(prefers-reduced-motion: reduce)").matches){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target);}})},{threshold:.08,rootMargin:"0px 0px 30px 0px"});reveals.forEach(element=>observer.observe(element));}else reveals.forEach(element=>element.classList.add("is-visible"));
document.getElementById("year").textContent=new Date().getFullYear();

document.addEventListener("keydown",event=>{if(event.key==="Escape"&&!mobileNav.hidden){mobileNav.hidden=true;header.classList.remove("menu-open");menuToggle.setAttribute("aria-expanded","false");menuToggle.focus();}});
