// --- i18n Übersetzungen ---
const translations = {
  de: {
    nav_offers: 'Angebote', nav_info:'Ablauf', nav_gallery:'Galerie', nav_book:'Reservieren',
    hero_title:'Surf & Sahara — Ocean. Sand. Sterne.',
    hero_sub:'Authentisches Surf-Camp in Mirleft. Wähle 7 Tage Surf oder 10 Tage Surf + Sahara.',
    hero_cta:'Angebote ansehen', hero_cta2:'Jetzt reservieren',
    hero_trust:'Kleine Gruppen • Zertifizierte Lehrkräfte • Nachhaltig',
    offers_title:'Unsere Formeln — Wähle deine Reise',
    pkg1_title:'7 Tage – Surf Camp', pkg1_sub:'Perfekt für Anfänger & Fortgeschrittene',
    pkg1_f1:'6 Tage Surf-Sessions (Morgens & Nachmittags)',
    pkg1_f2:'Zertifizierte Surflehrer, max. 8 Personen/Lehrer',
    pkg1_f3:'Unterkunft in Zimmern mit Meerblick',
    pkg1_f4:'Authentische marokkanische Vollpension',
    pkg1_f5:'Yoga am Strand & Pool', pkg1_cta:'Mehr erfahren & reservieren', pkg_price:'Preis auf Anfrage',
    pkg2_title:'10 Tage – Surf & Sahara', pkg2_sub:'Surf & magische Wüste',
    pkg2_f1:'8 Tage Surf in Mirleft', pkg2_f2:'2 Tage Wüsten-Trip: Dromedarexkursion & Bivouac',
    pkg2_f3:'Geführte Dünen-Tour & lokale Kultur', pkg2_f4:'Alle Transfers & Verpflegung inklusive',
    pkg2_f5:'Kleine Gruppen • Nachhaltig', pkg2_cta:'Mehr erfahren & reservieren',
    info_title:'Ablauf & Leistungen', act_surf:'Surfen', act_surf_p:'Individuelle Sessions & Videofeedback',
    act_yoga:'Yoga', act_yoga_p:'Sunset Yoga & Mobility', act_food:'Kulinarik', act_food_p:'Regionale Küche, frisch & saisonal',
    act_desert:'Desert Trip', act_desert_p:'Kamelritt & Nacht unter Sternen',
    gallery_title:'Galerie', location_title:'Lage',
    location_sub:'Wir befinden uns in Mirleft — die perfekte Kombination aus atlantischer Brandung und weitem Wüstensand.',
    reserve_title:'Reservierung & Anfrage', reserve_sub:'Fülle das kurze Formular aus und wir melden uns innerhalb von 48 Stunden.',
    reserve_f1:'Wähle Paket & gewünschte Daten', reserve_f2:'Teile uns Niveau & Wünsche mit', reserve_f3:'Flexible Zahlungs- & Stornobedingungen',
    reserve_contact:'Fragen? Mail:', faq_title:'FAQ', faq_q1:'Wie komme ich hin?', faq_a1:'Transfer vom Flughafen Agadir oder Guelmim kann organisiert werden (Aufpreis möglich).',
    faq_q2:'Welche Vorkenntnisse brauche ich?', faq_a2:'Keine – wir teilen nach Level ein.'
  },
  en: {
    nav_offers: 'Offers', nav_info:'Info', nav_gallery:'Gallery', nav_book:'Book',
    hero_title:'Surf & Sahara — Ocean. Sand. Stars.',
    hero_sub:'Authentic surf camp in Mirleft. Choose 7 days Surf or 10 days Surf + Sahara.',
    hero_cta:'See offers', hero_cta2:'Book now',
    hero_trust:'Small groups • Certified coaches • Sustainable',
    offers_title:'Our packages — choose your trip',
    pkg1_title:'7 days – Surf Camp', pkg1_sub:'Perfect for beginners & advanced',
    pkg1_f1:'6 days of surf sessions (morning & afternoon)',
    pkg1_f2:'Certified coaches, max. 8 students/coach', pkg1_f3:'Rooms with sea view',
    pkg1_f4:'Authentic Moroccan full board', pkg1_f5:'Beach yoga & pool', pkg1_cta:'Learn more & book',
    pkg_price:'Price on request',
    pkg2_title:'10 days – Surf & Sahara', pkg2_sub:'Surf & magical desert',
    pkg2_f1:'8 days surf in Mirleft', pkg2_f2:'2 days desert trip: camel excursion & bivouac',
    pkg2_f3:'Dune tour & local culture', pkg2_f4:'All transfers & meals included',
    pkg2_f5:'Small groups • Sustainable', pkg2_cta:'Learn more & book',
    info_title:'Schedule & Services', act_surf:'Surfing', act_surf_p:'Personalized sessions & video feedback',
    act_yoga:'Yoga', act_yoga_p:'Sunset yoga & mobility', act_food:'Food', act_food_p:'Local cuisine, fresh & seasonal',
    act_desert:'Desert Trip', act_desert_p:'Camel ride & night under stars',
    gallery_title:'Gallery', location_title:'Location',
    location_sub:'We are located in Mirleft — the perfect mix of Atlantic waves and desert sand.',
    reserve_title:'Booking & Inquiry', reserve_sub:'Fill the short form and we will contact you within 48 hours.',
    reserve_f1:'Choose package & dates', reserve_f2:'Tell us your level & wishes', reserve_f3:'Flexible payment & cancellation',
    reserve_contact:'Questions? Mail:', faq_title:'FAQ', faq_q1:'How to get here?', faq_a1:'Transfers from Agadir or Guelmim airport can be arranged (extra charge).',
    faq_q2:'What level do I need?', faq_a2:'None – we group by level.'
  },
  fr: {
    nav_offers: 'Offres', nav_info:'Info', nav_gallery:'Galerie', nav_book:'Réserver',
    hero_title:'Surf & Sahara — Océan. Sable. Étoiles.',
    hero_sub:'Camp de surf authentique à Mirleft. Choisissez 7 jours Surf ou 10 jours Surf + Sahara.',
    hero_cta:'Voir les offres', hero_cta2:'Réserver maintenant',
    hero_trust:'Petits groupes • Instructeurs certifiés • Durable',
    offers_title:'Nos formules — Choisissez votre voyage',
    pkg1_title:'7 jours – Surf Camp', pkg1_sub:'Parfait pour débutants & confirmés',
    pkg1_f1:'6 jours de sessions (matin & après-midi)', pkg1_f2:'Instructeurs certifiés, max. 8 personnes/instructeur',
    pkg1_f3:'Chambres avec vue mer', pkg1_f4:'Pension complète marocaine authentique', pkg1_f5:'Yoga sur la plage & piscine',
    pkg1_cta:'En savoir plus & réserver', pkg_price:'Prix sur demande',
    pkg2_title:'10 jours – Surf & Sahara', pkg2_sub:'Surf & désert magique',
    pkg2_f1:'8 jours de surf à Mirleft', pkg2_f2:'2 jours de désert: excursion à dos de chameau & bivouac',
    pkg2_f3:'Excursion dans les dunes & culture locale', pkg2_f4:'Tous transferts & repas inclus', pkg2_f5:'Petits groupes • Durable',
    pkg2_cta:'En savoir plus & réserver',
    info_title:'Déroulé & Services', act_surf:'Surf', act_surf_p:'Sessions personnalisées & feedback vidéo',
    act_yoga:'Yoga', act_yoga_p:'Yoga au coucher du soleil & mobilité',
    act_food:'Cuisine', act_food_p:'Cuisine locale, fraîche & de saison',
    act_desert:'Excursion Désert', act_desert_p:'Balade à dos de chameau & nuit sous étoiles',
    gallery_title:'Galerie', location_title:'Emplacement',
    location_sub:'Nous sommes situés à Mirleft — le parfait mélange entre vagues atlantiques et dunes de sable.',
    reserve_title:'Réservation & Demande', reserve_sub:'Remplissez le court formulaire et nous vous contacterons sous 48 heures.',
    reserve_f1:'Choisissez la formule & les dates', reserve_f2:'Indiquez votre niveau & vos souhaits', reserve_f3:'Paiement & annulation flexibles',
    reserve_contact:'Questions? Mail:', faq_title:'FAQ', faq_q1:'Comment venir?', faq_a1:'Transferts depuis Agadir ou Guelmim peuvent être organisés (supplément).',
    faq_q2:'Quel niveau est requis?', faq_a2:'Aucun – nous groupons par niveau.'
  }
};

// --- Sprachumschaltung ---
function setLang(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if(translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-switch button').forEach(b => b.classList.remove('active'));
  document.getElementById('lang-' + lang).classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
  // Default language
  setLang('de');

  // Language buttons
  document.getElementById('lang-de').addEventListener('click', () =>
