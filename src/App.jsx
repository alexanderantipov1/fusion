import { useState, useEffect, useRef, useCallback } from "react";

// ============================================================
// DR. YVONNE CHEN COMPREHENSIVE GENERAL DENTISTRY - FREMONT, CA
// Powered by Fusion Dental Implants
// World-Class Dental Practice Website with CRM, Call Center & BI
// ============================================================

const PRACTICE_INFO = {
  name: "Dr. Yvonne Chen, DMD",
  practice: "Fremont Comprehensive Family Dentistry",
  tagline: "Where Art Meets Science in Dental Excellence",
  phone: "(510) 795-1661",
  email: "info@fremontcomprehensivedentistry.com",
  address: "1895 Mowry Ave, Ste 102, Fremont, CA 94538",
  hours: "Tue-Fri: 9AM-5PM | Sat: By Appointment",
  powered: "Powered by Fusion Dental Implants™",
};

// 200-mile radius cities from Fremont, CA
const SERVICE_CITIES = {
  "Alameda County": ["Fremont","Newark","Union City","Hayward","San Leandro","Oakland","Berkeley","Alameda","Dublin","Pleasanton","Livermore","Emeryville","Piedmont","Albany"],
  "Santa Clara County": ["San Jose","Milpitas","Santa Clara","Sunnyvale","Cupertino","Mountain View","Palo Alto","Los Altos","Saratoga","Campbell","Los Gatos","Morgan Hill","Gilroy"],
  "San Mateo County": ["Redwood City","San Mateo","Foster City","Burlingame","Daly City","South San Francisco","Half Moon Bay","Menlo Park","Atherton","Woodside","Pacifica","San Bruno","Millbrae"],
  "Contra Costa County": ["Walnut Creek","Concord","Pleasant Hill","Martinez","Richmond","San Ramon","Danville","Lafayette","Orinda","Moraga","Pittsburg","Antioch","Brentwood","Oakley"],
  "San Francisco County": ["San Francisco","Treasure Island"],
  "Marin County": ["San Rafael","Novato","Mill Valley","Sausalito","Tiburon","Larkspur","Corte Madera","Fairfax","San Anselmo"],
  "Solano County": ["Vallejo","Fairfield","Vacaville","Benicia","Dixon","Suisun City","Rio Vista"],
  "Sonoma County": ["Santa Rosa","Petaluma","Rohnert Park","Windsor","Healdsburg","Sonoma","Sebastopol","Cotati","Cloverdale"],
  "Napa County": ["Napa","St. Helena","Calistoga","Yountville","American Canyon"],
  "Sacramento Region": ["Sacramento","Elk Grove","Roseville","Folsom","Rancho Cordova","Citrus Heights","Davis","Woodland","West Sacramento"],
  "San Joaquin County": ["Stockton","Tracy","Manteca","Lodi","Ripon","Escalon"],
  "Stanislaus County": ["Modesto","Turlock","Ceres","Oakdale","Riverbank","Patterson","Newman"],
  "Santa Cruz County": ["Santa Cruz","Watsonville","Scotts Valley","Capitola"],
  "Monterey County": ["Monterey","Salinas","Seaside","Marina","Pacific Grove","Carmel-by-the-Sea","King City"],
  "Merced County": ["Merced","Los Banos","Atwater","Livingston"],
  "Yolo County": ["Davis","Woodland","West Sacramento","Winters"],
  "Placer County": ["Roseville","Rocklin","Lincoln","Auburn","Loomis","Granite Bay"],
  "El Dorado County": ["El Dorado Hills","Placerville","Cameron Park","Shingle Springs"],
  "San Benito County": ["Hollister","San Juan Bautista"],
  "Fresno Region": ["Fresno","Clovis","Madera","Sanger","Selma","Reedley","Kingsburg"],
  "Lake Tahoe Region": ["South Lake Tahoe","Truckee","Tahoe City","Incline Village"],
  "Mendocino County": ["Ukiah","Fort Bragg","Willits"],
};

// Services data
const SERVICES = {
  general: [
    { id: "cleaning", name: "Teeth Cleaning & Exams", icon: "🦷", desc: "Professional cleaning, comprehensive exams, and preventive care to maintain your oral health.", keywords: "teeth cleaning dentist Fremont dental exam prophylaxis" },
    { id: "fillings", name: "Dental Fillings", icon: "✨", desc: "Tooth-colored composite fillings that blend seamlessly with your natural teeth.", keywords: "dental fillings composite Fremont cavity repair tooth restoration" },
    { id: "crowns", name: "Dental Crowns", icon: "👑", desc: "Custom porcelain and zirconia crowns for damaged or weakened teeth.", keywords: "dental crowns caps porcelain zirconia Fremont tooth restoration" },
    { id: "bridges", name: "Dental Bridges", icon: "🌉", desc: "Fixed bridges to replace missing teeth and restore your smile.", keywords: "dental bridge fixed bridge missing teeth Fremont tooth replacement" },
    { id: "rootcanal", name: "Root Canal Therapy", icon: "🔬", desc: "Gentle, pain-free root canal treatment using advanced technology.", keywords: "root canal therapy endodontics Fremont painless tooth infection" },
    { id: "extractions", name: "Tooth Extractions", icon: "🏥", desc: "Safe, comfortable extractions including wisdom teeth removal.", keywords: "tooth extraction wisdom teeth removal Fremont oral surgery" },
  ],
  cosmetic: [
    { id: "veneers", name: "Porcelain Veneers", icon: "💎", desc: "Ultra-thin porcelain veneers for a flawless Hollywood smile.", keywords: "porcelain veneers cosmetic dentistry Fremont smile makeover" },
    { id: "whitening", name: "Teeth Whitening", icon: "⚡", desc: "Professional in-office and take-home whitening for dramatic results.", keywords: "teeth whitening bleaching Fremont zoom whitening bright smile" },
    { id: "bonding", name: "Dental Bonding", icon: "🎨", desc: "Cosmetic bonding to repair chips, gaps, and discoloration.", keywords: "dental bonding cosmetic repair chip gap Fremont tooth reshaping" },
    { id: "smile", name: "Smile Makeover", icon: "😁", desc: "Complete smile transformation combining multiple cosmetic treatments.", keywords: "smile makeover cosmetic dentistry Fremont full mouth reconstruction" },
    { id: "invisalign", name: "Invisalign Clear Aligners", icon: "🔲", desc: "Invisible braces for straighter teeth without metal brackets.", keywords: "Invisalign clear aligners orthodontics Fremont straight teeth" },
    { id: "gummy", name: "Gum Contouring", icon: "🌊", desc: "Laser gum reshaping for a balanced, beautiful gum line.", keywords: "gum contouring reshaping laser Fremont gummy smile correction" },
  ],
  implants: [
    { id: "single", name: "Single Tooth Implants", icon: "🔩", desc: "Titanium dental implants — the gold standard for permanent tooth replacement.", keywords: "single dental implant titanium Fremont tooth replacement permanent" },
    { id: "allon4", name: "All-on-4 Full Arch", icon: "🏗️", desc: "Full arch restoration on just 4 implants — Powered by Fusion Dental Implants™.", keywords: "All-on-4 full arch dental implants Fremont Fusion Dental Implants" },
    { id: "allon6", name: "All-on-6 Full Arch", icon: "🏛️", desc: "Maximum stability with 6 implant support — Powered by Fusion Dental Implants™.", keywords: "All-on-6 full arch dental implants Fremont Fusion Dental Implants" },
    { id: "implantbridge", name: "Implant-Supported Bridge", icon: "🔗", desc: "Multiple teeth replaced with implant-anchored bridges for lasting results.", keywords: "implant supported bridge multiple teeth Fremont dental implant bridge" },
    { id: "bonegraft", name: "Bone Grafting", icon: "🦴", desc: "Advanced bone regeneration to prepare your jaw for successful implant placement.", keywords: "bone grafting augmentation sinus lift Fremont dental implant preparation" },
    { id: "immediate", name: "Same-Day Implants", icon: "⏱️", desc: "Teeth-in-a-day — walk in with missing teeth, walk out with a new smile.", keywords: "same day dental implants immediate load teeth in a day Fremont" },
  ],
  surgery: [
    { id: "wisdom", name: "Wisdom Teeth Surgery", icon: "🦷", desc: "Expert surgical removal of impacted and erupted wisdom teeth.", keywords: "wisdom teeth surgery removal impacted Fremont oral surgery" },
    { id: "sinuslift", name: "Sinus Lift Surgery", icon: "📐", desc: "Sinus augmentation to create adequate bone for upper jaw implants.", keywords: "sinus lift augmentation upper jaw Fremont dental implant surgery" },
    { id: "softtissue", name: "Soft Tissue Grafting", icon: "🩹", desc: "Gum grafting procedures to treat recession and improve aesthetics.", keywords: "gum graft soft tissue grafting recession Fremont periodontal surgery" },
    { id: "ridge", name: "Ridge Augmentation", icon: "⛰️", desc: "Jaw ridge rebuilding for optimal implant placement and denture fit.", keywords: "ridge augmentation jawbone rebuild Fremont dental surgery" },
    { id: "prp", name: "PRP/PRF Therapy", icon: "💉", desc: "Platelet-rich plasma therapy for accelerated healing and regeneration.", keywords: "PRP PRF therapy platelet rich plasma Fremont dental healing" },
    { id: "sedation", name: "IV Sedation Dentistry", icon: "😴", desc: "Deep sedation options for anxiety-free dental procedures.", keywords: "IV sedation dentistry sleep Fremont anxiety free dental care" },
  ],
  specialty: [
    { id: "tmj", name: "TMJ/TMD Treatment", icon: "🔄", desc: "Comprehensive treatment for jaw pain, clicking, and dysfunction.", keywords: "TMJ TMD jaw pain treatment Fremont temporomandibular disorder" },
    { id: "perio", name: "Periodontal Treatment", icon: "🫧", desc: "Advanced gum disease treatment and maintenance programs.", keywords: "periodontal treatment gum disease Fremont scaling root planing" },
    { id: "pediatric", name: "Pediatric Dentistry", icon: "👶", desc: "Gentle, child-friendly dental care for your little ones.", keywords: "pediatric dentistry children kids Fremont family dental care" },
    { id: "emergency", name: "Emergency Dentistry", icon: "🚨", desc: "Same-day emergency care for dental trauma and acute pain.", keywords: "emergency dentist Fremont toothache dental trauma urgent care" },
    { id: "dentures", name: "Dentures & Partials", icon: "🦷", desc: "Custom-crafted dentures and partial dentures for natural-looking results.", keywords: "dentures partial dentures Fremont removable prosthetics" },
    { id: "nightguard", name: "Night Guards & Sports Guards", icon: "🏈", desc: "Custom-fitted mouth guards for teeth grinding and athletic protection.", keywords: "night guard sports guard mouthguard Fremont bruxism teeth grinding" },
  ],
};

// CRM Lead Statuses
const LEAD_STATUSES = ["New", "Contacted", "Qualified", "Consultation Booked", "Treatment Planned", "Converted", "Lost"];
const LEAD_SOURCES = ["Website", "Google Ads", "Facebook", "Instagram", "Referral", "Walk-in", "Phone", "Yelp", "Landing Page"];

// Generate sample CRM data
const generateLeads = () => {
  const names = ["Maria Santos","James Kim","Priya Patel","Robert Johnson","Lisa Zhang","Ahmed Hassan","Jennifer Wu","Michael Chen","Sarah Martinez","David Lee","Anita Singh","Tom Wilson","Grace Liu","Carlos Reyes","Nina Okafor","Kevin Tran","Emily Brown","Raj Sharma","Sophie Moore","Daniel Park"];
  const services = ["Single Implant","All-on-4","Veneers","Whitening","Root Canal","Invisalign","Crown","Cleaning","Emergency","All-on-6","Smile Makeover","Extraction","Dentures","Bone Graft","TMJ"];
  return names.map((name, i) => ({
    id: i + 1,
    name,
    phone: `(510) 555-${String(1000 + i * 47).slice(0,4)}`,
    email: `${name.split(" ")[0].toLowerCase()}@email.com`,
    service: services[i % services.length],
    source: LEAD_SOURCES[i % LEAD_SOURCES.length],
    status: LEAD_STATUSES[i % LEAD_STATUSES.length],
    date: `2026-0${1 + (i % 3)}-${String(10 + (i % 20)).padStart(2,"0")}`,
    value: [2500, 28000, 8000, 500, 1200, 5500, 1800, 250, 400, 35000, 15000, 350, 3500, 4000, 900][i % 15],
    notes: "",
    followUp: i % 3 === 0 ? "2026-03-15" : "",
    city: Object.values(SERVICE_CITIES).flat()[i % 40],
  }));
};

// BI Analytics Data
const MONTHLY_DATA = [
  { month: "Sep", leads: 42, conversions: 14, revenue: 68000, calls: 180, webVisits: 3200 },
  { month: "Oct", leads: 58, conversions: 19, revenue: 92000, calls: 220, webVisits: 4100 },
  { month: "Nov", leads: 51, conversions: 17, revenue: 85000, calls: 195, webVisits: 3800 },
  { month: "Dec", leads: 39, conversions: 12, revenue: 62000, calls: 160, webVisits: 2900 },
  { month: "Jan", leads: 67, conversions: 22, revenue: 115000, calls: 280, webVisits: 5200 },
  { month: "Feb", leads: 74, conversions: 26, revenue: 138000, calls: 310, webVisits: 5800 },
  { month: "Mar", leads: 81, conversions: 29, revenue: 152000, calls: 340, webVisits: 6400 },
];

const SOURCE_DATA = [
  { source: "Google Ads", leads: 120, pct: 28, color: "#00A67E" },
  { source: "Website/SEO", leads: 98, pct: 23, color: "#0EA5E9" },
  { source: "Facebook", leads: 76, pct: 18, color: "#8B5CF6" },
  { source: "Referral", leads: 62, pct: 15, color: "#F59E0B" },
  { source: "Instagram", leads: 38, pct: 9, color: "#EC4899" },
  { source: "Other", leads: 28, pct: 7, color: "#6B7280" },
];

// ============================================================
// STYLES
// ============================================================
const injectStyles = () => {
  const style = document.createElement("style");
  style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

    :root {
      --teal: #00A67E;
      --teal-dark: #008F6B;
      --teal-light: #E6F9F4;
      --navy: #0A1628;
      --navy-light: #1A2A44;
      --gold: #C9A84C;
      --gold-light: #F5ECD7;
      --white: #FFFFFF;
      --gray-50: #F8FAFB;
      --gray-100: #F1F4F6;
      --gray-200: #E2E8ED;
      --gray-300: #C4CDD5;
      --gray-500: #6B7F8E;
      --gray-700: #374151;
      --gray-900: #111827;
      --red: #EF4444;
      --blue: #0EA5E9;
      --purple: #8B5CF6;
      --font-display: 'Playfair Display', Georgia, serif;
      --font-body: 'DM Sans', -apple-system, sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      font-family: var(--font-body);
      color: var(--gray-900);
      background: var(--white);
      overflow-x: hidden;
    }

    .dental-app { min-height: 100vh; }

    /* NAVIGATION */
    .nav-top {
      background: var(--navy);
      color: white;
      font-size: 12px;
      padding: 6px 0;
      letter-spacing: 0.5px;
    }
    .nav-main {
      background: white;
      border-bottom: 1px solid var(--gray-200);
      padding: 0;
      position: sticky;
      top: 0;
      z-index: 100;
      box-shadow: 0 2px 20px rgba(0,0,0,0.06);
    }
    .nav-inner {
      max-width: 1400px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 24px;
      height: 72px;
    }
    .nav-logo {
      display: flex;
      flex-direction: column;
      cursor: pointer;
    }
    .nav-logo-name {
      font-family: var(--font-display);
      font-weight: 700;
      font-size: 20px;
      color: var(--navy);
      line-height: 1.1;
    }
    .nav-logo-sub {
      font-size: 11px;
      color: var(--teal);
      font-weight: 600;
      letter-spacing: 1.5px;
      text-transform: uppercase;
    }
    .nav-links {
      display: flex;
      gap: 4px;
      align-items: center;
    }
    .nav-link {
      padding: 8px 14px;
      font-size: 14px;
      font-weight: 500;
      color: var(--gray-700);
      cursor: pointer;
      border-radius: 8px;
      transition: all 0.2s;
      border: none;
      background: none;
      font-family: var(--font-body);
    }
    .nav-link:hover, .nav-link.active {
      color: var(--teal);
      background: var(--teal-light);
    }
    .nav-cta {
      background: var(--teal);
      color: white !important;
      border-radius: 8px;
      font-weight: 600;
      padding: 10px 20px !important;
    }
    .nav-cta:hover {
      background: var(--teal-dark) !important;
      color: white !important;
    }

    /* HERO */
    .hero {
      background: linear-gradient(135deg, var(--navy) 0%, #0D2137 50%, #102A42 100%);
      color: white;
      padding: 100px 24px 80px;
      position: relative;
      overflow: hidden;
    }
    .hero::before {
      content: '';
      position: absolute;
      top: -50%;
      right: -20%;
      width: 800px;
      height: 800px;
      background: radial-gradient(circle, rgba(0,166,126,0.12) 0%, transparent 70%);
      border-radius: 50%;
    }
    .hero::after {
      content: '';
      position: absolute;
      bottom: -30%;
      left: -10%;
      width: 600px;
      height: 600px;
      background: radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%);
      border-radius: 50%;
    }
    .hero-inner {
      max-width: 1400px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
      position: relative;
      z-index: 1;
    }
    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(0,166,126,0.15);
      border: 1px solid rgba(0,166,126,0.3);
      padding: 6px 16px;
      border-radius: 100px;
      font-size: 12px;
      font-weight: 600;
      color: var(--teal);
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-bottom: 24px;
      backdrop-filter: blur(10px);
    }
    .hero h1 {
      font-family: var(--font-display);
      font-size: 56px;
      font-weight: 700;
      line-height: 1.1;
      margin-bottom: 20px;
    }
    .hero h1 span {
      color: var(--teal);
    }
    .hero p {
      font-size: 18px;
      color: rgba(255,255,255,0.7);
      line-height: 1.6;
      margin-bottom: 36px;
      max-width: 520px;
    }
    .hero-btns {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
    }
    .hero-stats {
      display: flex;
      gap: 40px;
      margin-top: 48px;
      padding-top: 32px;
      border-top: 1px solid rgba(255,255,255,0.1);
    }
    .hero-stat-num {
      font-family: var(--font-display);
      font-size: 36px;
      font-weight: 700;
      color: var(--gold);
    }
    .hero-stat-label {
      font-size: 13px;
      color: rgba(255,255,255,0.5);
      margin-top: 4px;
    }
    .hero-visual {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .hero-card {
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 24px;
      padding: 40px;
      backdrop-filter: blur(20px);
      width: 100%;
      max-width: 440px;
    }
    .hero-card h3 {
      font-family: var(--font-display);
      font-size: 24px;
      margin-bottom: 24px;
    }
    .hero-card-feature {
      display: flex;
      align-items: flex-start;
      gap: 16px;
      padding: 16px 0;
      border-bottom: 1px solid rgba(255,255,255,0.06);
    }
    .hero-card-icon {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      flex-shrink: 0;
    }
    .hero-card-feature h4 { font-size: 15px; margin-bottom: 4px; }
    .hero-card-feature p { font-size: 13px; color: rgba(255,255,255,0.5); }

    /* BUTTONS */
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 14px 28px;
      border-radius: 12px;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
      border: none;
      font-family: var(--font-body);
      text-decoration: none;
    }
    .btn-primary {
      background: var(--teal);
      color: white;
      box-shadow: 0 4px 14px rgba(0,166,126,0.3);
    }
    .btn-primary:hover {
      background: var(--teal-dark);
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0,166,126,0.4);
    }
    .btn-outline {
      background: transparent;
      color: white;
      border: 2px solid rgba(255,255,255,0.3);
    }
    .btn-outline:hover {
      border-color: white;
      background: rgba(255,255,255,0.05);
    }
    .btn-gold {
      background: var(--gold);
      color: var(--navy);
    }
    .btn-gold:hover {
      background: #D4B35A;
    }
    .btn-sm { padding: 8px 18px; font-size: 13px; border-radius: 8px; }
    .btn-dark {
      background: var(--navy);
      color: white;
    }

    /* SECTIONS */
    .section {
      padding: 80px 24px;
    }
    .section-inner {
      max-width: 1400px;
      margin: 0 auto;
    }
    .section-header {
      text-align: center;
      margin-bottom: 56px;
    }
    .section-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: var(--teal-light);
      color: var(--teal);
      padding: 6px 16px;
      border-radius: 100px;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      margin-bottom: 16px;
    }
    .section-title {
      font-family: var(--font-display);
      font-size: 42px;
      font-weight: 700;
      color: var(--navy);
      margin-bottom: 16px;
      line-height: 1.15;
    }
    .section-subtitle {
      font-size: 17px;
      color: var(--gray-500);
      max-width: 640px;
      margin: 0 auto;
      line-height: 1.6;
    }

    /* SERVICE CARDS */
    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
      gap: 24px;
    }
    .service-card {
      background: white;
      border: 1px solid var(--gray-200);
      border-radius: 16px;
      padding: 28px;
      cursor: pointer;
      transition: all 0.3s;
      position: relative;
      overflow: hidden;
    }
    .service-card:hover {
      border-color: var(--teal);
      box-shadow: 0 8px 30px rgba(0,166,126,0.1);
      transform: translateY(-4px);
    }
    .service-card-icon {
      width: 52px;
      height: 52px;
      border-radius: 14px;
      background: var(--teal-light);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      margin-bottom: 16px;
    }
    .service-card h3 {
      font-family: var(--font-display);
      font-size: 20px;
      color: var(--navy);
      margin-bottom: 8px;
    }
    .service-card p {
      font-size: 14px;
      color: var(--gray-500);
      line-height: 1.6;
    }
    .service-card .fusion-badge {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      margin-top: 12px;
      padding: 4px 12px;
      background: var(--gold-light);
      color: var(--gold);
      font-size: 11px;
      font-weight: 700;
      border-radius: 100px;
      letter-spacing: 0.5px;
    }

    /* SERVICE TABS */
    .service-tabs {
      display: flex;
      gap: 8px;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 40px;
    }
    .service-tab {
      padding: 10px 22px;
      border-radius: 100px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      border: 2px solid var(--gray-200);
      background: white;
      color: var(--gray-700);
      font-family: var(--font-body);
    }
    .service-tab.active {
      border-color: var(--teal);
      background: var(--teal);
      color: white;
    }
    .service-tab:hover:not(.active) {
      border-color: var(--teal);
      color: var(--teal);
    }

    /* FUSION SECTION */
    .fusion-section {
      background: linear-gradient(135deg, var(--navy) 0%, #142840 100%);
      color: white;
    }
    .fusion-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
    }
    .fusion-feature {
      display: flex;
      gap: 16px;
      margin-bottom: 28px;
    }
    .fusion-feature-num {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      background: rgba(0,166,126,0.15);
      border: 1px solid rgba(0,166,126,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      color: var(--teal);
      flex-shrink: 0;
    }
    .fusion-feature h4 {
      font-size: 16px;
      margin-bottom: 4px;
    }
    .fusion-feature p {
      font-size: 14px;
      color: rgba(255,255,255,0.6);
    }
    .fusion-price-card {
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 24px;
      padding: 40px;
      text-align: center;
    }
    .fusion-price-card h3 {
      font-family: var(--font-display);
      font-size: 32px;
      margin-bottom: 8px;
    }

    /* TESTIMONIALS */
    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 24px;
    }
    .testimonial-card {
      background: white;
      border: 1px solid var(--gray-200);
      border-radius: 16px;
      padding: 28px;
    }
    .testimonial-stars { color: var(--gold); font-size: 16px; margin-bottom: 12px; }
    .testimonial-text { font-size: 15px; color: var(--gray-700); line-height: 1.6; margin-bottom: 16px; font-style: italic; }
    .testimonial-author { font-weight: 600; font-size: 14px; }
    .testimonial-location { font-size: 12px; color: var(--gray-500); }

    /* CRM DASHBOARD */
    .crm-layout {
      display: grid;
      grid-template-columns: 240px 1fr;
      min-height: calc(100vh - 72px);
    }
    .crm-sidebar {
      background: var(--navy);
      color: white;
      padding: 24px 0;
    }
    .crm-sidebar-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 24px;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.15s;
      border: none;
      background: none;
      color: rgba(255,255,255,0.6);
      width: 100%;
      text-align: left;
      font-family: var(--font-body);
    }
    .crm-sidebar-item:hover, .crm-sidebar-item.active {
      background: rgba(255,255,255,0.08);
      color: white;
    }
    .crm-sidebar-item.active {
      border-left: 3px solid var(--teal);
    }
    .crm-content {
      background: var(--gray-50);
      padding: 32px;
      overflow-y: auto;
    }
    .crm-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 28px;
    }
    .crm-header h2 {
      font-family: var(--font-display);
      font-size: 28px;
      color: var(--navy);
    }

    /* KPI CARDS */
    .kpi-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 16px;
      margin-bottom: 28px;
    }
    .kpi-card {
      background: white;
      border-radius: 14px;
      padding: 20px;
      border: 1px solid var(--gray-200);
    }
    .kpi-label {
      font-size: 12px;
      color: var(--gray-500);
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 8px;
    }
    .kpi-value {
      font-family: var(--font-display);
      font-size: 28px;
      font-weight: 700;
      color: var(--navy);
    }
    .kpi-change {
      font-size: 12px;
      font-weight: 600;
      margin-top: 4px;
    }
    .kpi-up { color: var(--teal); }
    .kpi-down { color: var(--red); }

    /* TABLE */
    .data-table {
      width: 100%;
      background: white;
      border-radius: 14px;
      border: 1px solid var(--gray-200);
      overflow: hidden;
    }
    .data-table table {
      width: 100%;
      border-collapse: collapse;
    }
    .data-table th {
      background: var(--gray-50);
      padding: 12px 16px;
      font-size: 12px;
      font-weight: 600;
      color: var(--gray-500);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      text-align: left;
      border-bottom: 1px solid var(--gray-200);
    }
    .data-table td {
      padding: 12px 16px;
      font-size: 14px;
      border-bottom: 1px solid var(--gray-100);
    }
    .data-table tr:hover td { background: var(--gray-50); }
    .status-badge {
      display: inline-block;
      padding: 4px 10px;
      border-radius: 100px;
      font-size: 12px;
      font-weight: 600;
    }
    .status-new { background: #DBEAFE; color: #1D4ED8; }
    .status-contacted { background: #FEF3C7; color: #92400E; }
    .status-qualified { background: #D1FAE5; color: #065F46; }
    .status-booked { background: #EDE9FE; color: #5B21B6; }
    .status-planned { background: #FCE7F3; color: #9D174D; }
    .status-converted { background: #D1FAE5; color: #065F46; }
    .status-lost { background: #FEE2E2; color: #991B1B; }

    /* CHARTS */
    .chart-container {
      background: white;
      border-radius: 14px;
      border: 1px solid var(--gray-200);
      padding: 24px;
      margin-bottom: 24px;
    }
    .chart-title {
      font-family: var(--font-display);
      font-size: 18px;
      color: var(--navy);
      margin-bottom: 20px;
    }
    .bar-chart { display: flex; align-items: flex-end; gap: 12px; height: 200px; padding-top: 20px; }
    .bar-group { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 8px; }
    .bar {
      width: 100%;
      max-width: 48px;
      border-radius: 6px 6px 0 0;
      transition: all 0.3s;
      min-height: 4px;
    }
    .bar:hover { opacity: 0.8; }
    .bar-label { font-size: 11px; color: var(--gray-500); }
    .bar-value { font-size: 11px; font-weight: 600; color: var(--navy); }

    /* SOURCE PIE CHART */
    .source-list { display: flex; flex-direction: column; gap: 12px; }
    .source-item {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .source-dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      flex-shrink: 0;
    }
    .source-bar-track {
      flex: 1;
      height: 8px;
      background: var(--gray-100);
      border-radius: 4px;
      overflow: hidden;
    }
    .source-bar-fill {
      height: 100%;
      border-radius: 4px;
      transition: width 0.5s;
    }
    .source-name { font-size: 13px; width: 100px; flex-shrink: 0; }
    .source-pct { font-size: 13px; font-weight: 600; width: 40px; text-align: right; }

    /* CALL CENTER */
    .call-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    .call-log {
      background: white;
      border-radius: 14px;
      border: 1px solid var(--gray-200);
      overflow: hidden;
    }
    .call-log-header {
      padding: 16px 20px;
      border-bottom: 1px solid var(--gray-200);
      font-weight: 600;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .call-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 20px;
      border-bottom: 1px solid var(--gray-100);
    }
    .call-avatar {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: 600;
      color: white;
    }
    .call-info { flex: 1; }
    .call-name { font-size: 14px; font-weight: 500; }
    .call-meta { font-size: 12px; color: var(--gray-500); }
    .call-status-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }
    .dialer-pad {
      background: white;
      border-radius: 14px;
      border: 1px solid var(--gray-200);
      padding: 24px;
    }
    .dialer-display {
      background: var(--gray-50);
      border-radius: 10px;
      padding: 16px;
      text-align: center;
      font-family: var(--font-mono);
      font-size: 24px;
      color: var(--navy);
      margin-bottom: 20px;
      min-height: 56px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .dialer-keys {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
    }
    .dialer-key {
      padding: 14px;
      border-radius: 10px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.15s;
      border: 1px solid var(--gray-200);
      background: white;
      text-align: center;
      font-family: var(--font-body);
    }
    .dialer-key:hover {
      background: var(--gray-50);
      border-color: var(--teal);
    }
    .dialer-call {
      grid-column: span 3;
      background: var(--teal);
      color: white;
      border: none;
      font-size: 16px;
      font-weight: 600;
    }
    .dialer-call:hover { background: var(--teal-dark); }

    /* FORMS */
    .form-group { margin-bottom: 16px; }
    .form-label {
      display: block;
      font-size: 13px;
      font-weight: 600;
      color: var(--gray-700);
      margin-bottom: 6px;
    }
    .form-input {
      width: 100%;
      padding: 10px 14px;
      border: 1px solid var(--gray-200);
      border-radius: 8px;
      font-size: 14px;
      font-family: var(--font-body);
      transition: border-color 0.2s;
      background: white;
    }
    .form-input:focus {
      outline: none;
      border-color: var(--teal);
      box-shadow: 0 0 0 3px rgba(0,166,126,0.1);
    }
    .form-select {
      appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M6 8L1 3h10z' fill='%236B7F8E'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 12px center;
      padding-right: 36px;
    }
    textarea.form-input { min-height: 80px; resize: vertical; }

    /* LANDING PAGES */
    .landing-hero {
      background: linear-gradient(135deg, var(--navy) 0%, #1A3A5C 100%);
      color: white;
      padding: 80px 24px;
      text-align: center;
    }
    .landing-hero h1 {
      font-family: var(--font-display);
      font-size: 48px;
      margin-bottom: 16px;
    }
    .landing-hero p {
      font-size: 18px;
      color: rgba(255,255,255,0.7);
      max-width: 600px;
      margin: 0 auto 32px;
    }
    .landing-form-card {
      background: white;
      border-radius: 20px;
      padding: 36px;
      max-width: 480px;
      margin: 0 auto;
      color: var(--gray-900);
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    }
    .landing-form-card h3 {
      font-family: var(--font-display);
      font-size: 22px;
      color: var(--navy);
      margin-bottom: 20px;
      text-align: center;
    }

    /* SITEMAP */
    .sitemap-section {
      background: var(--gray-50);
    }
    .sitemap-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 20px;
    }
    .sitemap-category {
      background: white;
      border: 1px solid var(--gray-200);
      border-radius: 14px;
      padding: 24px;
    }
    .sitemap-category h4 {
      font-family: var(--font-display);
      font-size: 16px;
      color: var(--navy);
      margin-bottom: 12px;
      padding-bottom: 8px;
      border-bottom: 2px solid var(--teal);
    }
    .sitemap-link {
      display: block;
      padding: 4px 0;
      font-size: 13px;
      color: var(--gray-500);
      cursor: pointer;
      transition: color 0.15s;
    }
    .sitemap-link:hover { color: var(--teal); }

    /* CITIES */
    .cities-grid {
      columns: 4;
      column-gap: 24px;
    }
    .city-county {
      break-inside: avoid;
      margin-bottom: 20px;
    }
    .city-county h5 {
      font-size: 14px;
      font-weight: 700;
      color: var(--navy);
      margin-bottom: 8px;
      padding-bottom: 4px;
      border-bottom: 1px solid var(--gray-200);
    }
    .city-name {
      display: block;
      font-size: 12px;
      color: var(--gray-500);
      padding: 2px 0;
      cursor: pointer;
    }
    .city-name:hover { color: var(--teal); }

    /* FOOTER */
    .footer {
      background: var(--navy);
      color: white;
      padding: 60px 24px 24px;
    }
    .footer-grid {
      max-width: 1400px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 48px;
      margin-bottom: 48px;
    }
    .footer h4 {
      font-family: var(--font-display);
      font-size: 16px;
      margin-bottom: 16px;
    }
    .footer p, .footer a {
      font-size: 14px;
      color: rgba(255,255,255,0.5);
      line-height: 1.8;
      text-decoration: none;
      display: block;
    }
    .footer a:hover { color: var(--teal); }
    .footer-bottom {
      max-width: 1400px;
      margin: 0 auto;
      padding-top: 24px;
      border-top: 1px solid rgba(255,255,255,0.08);
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      color: rgba(255,255,255,0.3);
    }
    .powered-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: rgba(201,168,76,0.1);
      border: 1px solid rgba(201,168,76,0.3);
      padding: 6px 14px;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 700;
      color: var(--gold);
      letter-spacing: 0.5px;
    }

    /* MODAL */
    .modal-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.5);
      backdrop-filter: blur(4px);
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
    }
    .modal {
      background: white;
      border-radius: 20px;
      padding: 36px;
      max-width: 520px;
      width: 100%;
      max-height: 90vh;
      overflow-y: auto;
    }
    .modal h2 {
      font-family: var(--font-display);
      font-size: 24px;
      color: var(--navy);
      margin-bottom: 24px;
    }
    .modal-close {
      float: right;
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
      color: var(--gray-500);
    }

    /* SCROLLBAR */
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: var(--gray-100); }
    ::-webkit-scrollbar-thumb { background: var(--gray-300); border-radius: 3px; }

    /* ANIMATIONS */
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-in { animation: fadeInUp 0.6s ease-out forwards; }

    /* RESPONSIVE */
    @media (max-width: 1024px) {
      .hero-inner { grid-template-columns: 1fr; }
      .hero-visual { display: none; }
      .hero h1 { font-size: 40px; }
      .fusion-grid { grid-template-columns: 1fr; }
      .crm-layout { grid-template-columns: 1fr; }
      .crm-sidebar { display: none; }
      .call-grid { grid-template-columns: 1fr; }
      .footer-grid { grid-template-columns: 1fr 1fr; }
      .cities-grid { columns: 2; }
      .nav-links { display: none; }
    }
  `;
  if (!document.getElementById("dental-styles")) {
    style.id = "dental-styles";
    document.head.appendChild(style);
  }
};

// ============================================================
// COMPONENTS
// ============================================================

const TopBar = () => (
  <div className="nav-top">
    <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div style={{ display: "flex", gap: 24 }}>
        <span>📍 {PRACTICE_INFO.address}</span>
        <span>🕐 {PRACTICE_INFO.hours}</span>
      </div>
      <div style={{ display: "flex", gap: 16 }}>
        <span>📞 {PRACTICE_INFO.phone}</span>
        <span className="powered-badge">⚡ {PRACTICE_INFO.powered}</span>
      </div>
    </div>
  </div>
);

const Nav = ({ page, setPage, setModal }) => (
  <nav className="nav-main">
    <div className="nav-inner">
      <div className="nav-logo" onClick={() => setPage("home")}>
        <div className="nav-logo-name">Dr. Yvonne Chen, DMD</div>
        <div className="nav-logo-sub">Fremont Comprehensive Family Dentistry</div>
      </div>
      <div className="nav-links">
        {[
          ["home", "Home"],
          ["services", "Services"],
          ["implants", "Dental Implants"],
          ["fusion", "Fusion Implants"],
          ["gallery", "Before & After"],
          ["about", "About"],
          ["blog", "Education"],
          ["cities", "Service Areas"],
        ].map(([key, label]) => (
          <button key={key} className={`nav-link ${page === key ? "active" : ""}`} onClick={() => setPage(key)}>
            {label}
          </button>
        ))}
        <button className="nav-link" onClick={() => setPage("crm")}>🔒 Dashboard</button>
        <button className="nav-link nav-cta" onClick={() => setModal("appointment")}>
          Book Now
        </button>
      </div>
    </div>
  </nav>
);

const Hero = ({ setModal }) => (
  <section className="hero">
    <div className="hero-inner">
      <div>
        <div className="hero-badge">✦ #1 Rated Dental Practice in Fremont</div>
        <h1>
          Your Smile Deserves <span>World-Class</span> Dentistry
        </h1>
        <p>
          Experience the perfect blend of artistry and advanced technology with Dr. Yvonne Chen, DMD, at Fremont Comprehensive Family Dentistry. From routine care to complex full-arch dental implants powered by Fusion Dental Implants™ — your transformation starts here.
        </p>
        <div className="hero-btns">
          <button className="btn btn-primary" onClick={() => setModal("appointment")}>
            Schedule Consultation →
          </button>
          <button className="btn btn-outline" onClick={() => setModal("call")}>
            📞 Call {PRACTICE_INFO.phone}
          </button>
        </div>
        <div className="hero-stats">
          <div>
            <div className="hero-stat-num">200+</div>
            <div className="hero-stat-label">Verified Reviews</div>
          </div>
          <div>
            <div className="hero-stat-num">20+</div>
            <div className="hero-stat-label">Years Experience</div>
          </div>
          <div>
            <div className="hero-stat-num">15+</div>
            <div className="hero-stat-label">Years in East Bay</div>
          </div>
          <div>
            <div className="hero-stat-num">4.9★</div>
            <div className="hero-stat-label">Google Rating</div>
          </div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-card">
          <h3>Why Patients Choose Us</h3>
          {[
            { icon: "🏆", bg: "rgba(201,168,76,0.15)", title: "Tufts University DMD", desc: "Harvard research + prestigious dental education" },
            { icon: "⚡", bg: "rgba(0,166,126,0.15)", title: "Fusion Dental Implants™", desc: "Certified provider of next-gen implant technology" },
            { icon: "🌍", bg: "rgba(139,92,246,0.15)", title: "5 Languages Spoken", desc: "English, Russian, Chinese, Taiwanese & more" },
            { icon: "🎯", bg: "rgba(14,165,233,0.15)", title: "4.9★ Google Rating", desc: "200+ verified reviews across all platforms" },
          ].map((f, i) => (
            <div className="hero-card-feature" key={i}>
              <div className="hero-card-icon" style={{ background: f.bg }}>{f.icon}</div>
              <div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const ServicesSection = ({ setModal, activeCategory = "general" }) => {
  const [cat, setCat] = useState(activeCategory);
  const categories = [
    ["general", "General Dentistry"],
    ["cosmetic", "Cosmetic Dentistry"],
    ["implants", "Dental Implants"],
    ["surgery", "Oral Surgery"],
    ["specialty", "Specialty Care"],
  ];
  return (
    <section className="section" id="services">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-badge">✦ Our Services</div>
          <h2 className="section-title">Comprehensive Dental Care Under One Roof</h2>
          <p className="section-subtitle">From preventive cleanings to complex full-arch implant reconstructions, Dr. Chen provides every service you need for optimal oral health.</p>
        </div>
        <div className="service-tabs">
          {categories.map(([key, label]) => (
            <button key={key} className={`service-tab ${cat === key ? "active" : ""}`} onClick={() => setCat(key)}>
              {label}
            </button>
          ))}
        </div>
        <div className="services-grid">
          {SERVICES[cat]?.map((svc) => (
            <div key={svc.id} className="service-card" onClick={() => setModal("landing-" + svc.id)}>
              <div className="service-card-icon">{svc.icon}</div>
              <h3>{svc.name}</h3>
              <p>{svc.desc}</p>
              {(svc.id === "allon4" || svc.id === "allon6" || svc.id === "immediate") && (
                <div className="fusion-badge">⚡ Powered by Fusion Dental Implants™</div>
              )}
              <div style={{ marginTop: 16 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: "var(--teal)" }}>Learn More →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FusionSection = ({ setModal }) => (
  <section className="section fusion-section" id="fusion">
    <div className="section-inner">
      <div className="section-header" style={{ marginBottom: 48 }}>
        <div className="section-badge" style={{ background: "rgba(201,168,76,0.15)", color: "var(--gold)" }}>⚡ Fusion Dental Implants™</div>
        <h2 className="section-title" style={{ color: "white" }}>The Future of Full-Arch Dental Implants</h2>
        <p className="section-subtitle" style={{ color: "rgba(255,255,255,0.6)" }}>
          Revolutionary implant technology delivering unmatched strength, aesthetics, and longevity. Exclusive to select practices worldwide.
        </p>
      </div>
      <div className="fusion-grid">
        <div>
          {[
            { num: "01", title: "Precision-Engineered Titanium", desc: "Grade V titanium with proprietary surface treatment for 99.2% osseointegration rate." },
            { num: "02", title: "Digital Surgical Planning", desc: "3D CBCT-guided surgery with sub-millimeter accuracy for optimal placement." },
            { num: "03", title: "Immediate Loading Protocol", desc: "Walk in with missing teeth, walk out with a full smile — same-day teeth." },
            { num: "04", title: "Lifetime Warranty", desc: "Backed by the industry's most comprehensive implant warranty program." },
            { num: "05", title: "Zirconia Hybrid Prosthetics", desc: "Ultra-strong, natural-looking full-arch restorations that last decades." },
          ].map((f) => (
            <div className="fusion-feature" key={f.num}>
              <div className="fusion-feature-num">{f.num}</div>
              <div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="fusion-price-card">
          <div style={{ fontSize: 48, marginBottom: 16 }}>⚡</div>
          <h3>Full-Arch Restoration</h3>
          <p style={{ color: "rgba(255,255,255,0.5)", marginBottom: 24 }}>All-on-4 / All-on-6 with Fusion Dental Implants™</p>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 48, fontWeight: 700, color: "var(--gold)", marginBottom: 8 }}>
            From $18,999
          </div>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, marginBottom: 32 }}>Per arch • Financing available</p>
          <button className="btn btn-gold" style={{ width: "100%", justifyContent: "center" }} onClick={() => setModal("appointment")}>
            Get Your Free Consultation →
          </button>
          <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 8, textAlign: "left" }}>
            {["Free 3D CT Scan ($500 value)", "Complimentary consultation", "0% financing for 24 months", "Lifetime implant warranty"].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 13, color: "rgba(255,255,255,0.6)" }}>
                <span style={{ color: "var(--teal)" }}>✓</span> {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => {
  const testimonials = [
    { text: "Dr. Chen is kind, efficient, and communicative. The office is immaculate. Patient comfort is clearly her top priority — she's thorough in explaining treatment and has incredibly gentle hands.", author: "Verified Patient", loc: "Zocdoc Review", stars: 5, source: "zocdoc" },
    { text: "I have SEVERE dental anxiety. From the moment I called, Jessica was reassuring. Dr. Chen took time to understand my fears and created a plan to help me through it. She and her team focus on helping you get the care you need.", author: "Verified Patient", loc: "Zocdoc Review", stars: 5, source: "zocdoc" },
    { text: "I've been coming to this location for almost 20 years. Since Dr. Chen took over, she completely modernized the office with state-of-the-art technology. She replaced all my old metal fillings with natural ones. I drive from Palo Alto because she is absolutely outstanding!", author: "Verified Patient", loc: "Even28 Review", stars: 5, source: "even28" },
    { text: "This was my kids' first dental visit and the staff was incredibly understanding. Both my son and daughter went in without issue. We'll definitely be back in 6 months!", author: "Verified Patient", loc: "Zocdoc Review", stars: 5, source: "zocdoc" },
    { text: "Dr. Chen is the BEST dentist I've ever seen in 50+ years. She focuses not just on immediate needs but creates a plan for overall oral health. My family has been patients since 2017 and we highly recommend her.", author: "Verified Patient", loc: "Even28 Review", stars: 5, source: "even28" },
    { text: "I was on vacation and had a dental emergency. Dr. Chen's team got me in the next day. The office was easy to find and I could fill out forms in advance. So grateful for the care I received!", author: "Verified Patient", loc: "Zocdoc Review", stars: 5, source: "zocdoc" },
    { text: "Dr. Chen adjusted the anesthetic because I'm highly sensitive. She's gentle and understanding about the stress dental work causes. I really appreciate her attentiveness.", author: "Verified Patient", loc: "Zocdoc Review", stars: 5, source: "zocdoc" },
    { text: "I was very anxious and Dr. Chen really helped calm me down. She was professional and knowledgeable. I felt safe the entire time.", author: "Mellisa R.", loc: "Opencare Review", stars: 5, source: "opencare" },
    { text: "Dr. Chen made my very first visit welcoming and comforting. I'll gladly be going back for future appointments. Very good doctor with a wonderful staff!", author: "Verified Patient", loc: "Zocdoc Review", stars: 5, source: "zocdoc" },
  ];

  // Review platform ratings
  const platforms = [
    { name: "Google", rating: "4.9", reviews: "41", color: "#4285F4", icon: "G" },
    { name: "Zocdoc", rating: "4.65", reviews: "99", color: "#FF7043", icon: "Z" },
    { name: "Yelp", rating: "4.2", reviews: "58", color: "#D32323", icon: "Y" },
    { name: "Even28", rating: "5.0", reviews: "35", color: "#00A67E", icon: "E" },
    { name: "Opencare", rating: "5.0", reviews: "1", color: "#6C5CE7", icon: "O" },
    { name: "Healthgrades", rating: "—", reviews: "—", color: "#00875A", icon: "H" },
  ];

  return (
    <section className="section" style={{ background: "var(--gray-50)" }}>
      <div className="section-inner">
        <div className="section-header">
          <div className="section-badge">★ Verified Patient Reviews</div>
          <h2 className="section-title">What Our Patients Are Saying</h2>
          <p className="section-subtitle">Real reviews from verified patients across Zocdoc, Google, Yelp, and more. Dr. Chen maintains outstanding ratings across every platform.</p>
        </div>

        {/* Review Platform Ratings Bar */}
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 40 }}>
          {platforms.map((p, i) => (
            <div key={i} style={{ background: "white", border: "1px solid var(--gray-200)", borderRadius: 12, padding: "14px 20px", display: "flex", alignItems: "center", gap: 12, minWidth: 160, cursor: "pointer", transition: "all 0.2s" }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: p.color, color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 16 }}>{p.icon}</div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14, color: "var(--navy)" }}>{p.name}</div>
                <div style={{ fontSize: 12, color: "var(--gray-500)" }}>
                  <span style={{ color: "var(--gold)", fontWeight: 700 }}>{p.rating}★</span> ({p.reviews} reviews)
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-grid">
          {testimonials.slice(0, 6).map((t, i) => (
            <div className="testimonial-card" key={i}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <div className="testimonial-stars">{"★".repeat(t.stars)}</div>
                <span style={{ fontSize: 11, color: "var(--gray-500)", background: "var(--gray-100)", padding: "3px 8px", borderRadius: 100 }}>{t.loc}</span>
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">{t.author}</div>
            </div>
          ))}
        </div>

        {/* Review Links */}
        <div style={{ textAlign: "center", marginTop: 32 }}>
          <p style={{ fontSize: 14, color: "var(--gray-500)", marginBottom: 16 }}>Read all our reviews on these platforms:</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { name: "Yelp", url: "yelp.com/biz/yvonne-chen-dmd-fremont" },
              { name: "Zocdoc", url: "zocdoc.com/dentist/yvonne-chen-dmd-55964" },
              { name: "Healthgrades", url: "healthgrades.com/physician/dr-yvonne-chen-ybqnvkz" },
              { name: "Even28", url: "even28.com/fremont-comprehensive-dentistry-yvonne-chen-dmd-practice-profile-page" },
              { name: "WebMD", url: "doctor.webmd.com/doctor/yvonne-chen-b863d3b2" },
            ].map((link, i) => (
              <span key={i} style={{ fontSize: 13, color: "var(--teal)", fontWeight: 600, padding: "6px 14px", background: "var(--teal-light)", borderRadius: 8, cursor: "pointer" }}>
                {link.name} →
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => (
  <section className="section" id="about">
    <div className="section-inner">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
        <div>
          <div className="section-badge">✦ About Dr. Chen</div>
          <h2 className="section-title" style={{ textAlign: "left" }}>A Legacy of Dental Excellence in Fremont</h2>
          <p style={{ fontSize: 16, color: "var(--gray-500)", lineHeight: 1.7, marginBottom: 20 }}>
            Dr. Yvonne Chen, DMD, has been practicing dentistry for over 20 years and serving the East Bay for 15+ years at Fremont Comprehensive Family Dentistry. Originally from Taiwan, she moved to Massachusetts where she attended Milton Academy, graduated cum laude from Clark University, and worked at Harvard University's cell biology department before earning her Doctor of Dental Medicine degree from the prestigious Tufts University School of Dental Medicine in Boston.
          </p>
          <p style={{ fontSize: 16, color: "var(--gray-500)", lineHeight: 1.7, marginBottom: 20 }}>
            Dr. Chen is multilingual, speaking English, Russian, Chinese (Mandarin), and Taiwanese — ensuring clear communication with Fremont's diverse community. She is a firm believer that age does not have to mean losing your teeth, and her mission is to provide the best dental care in Fremont with personalized treatment plans for every patient.
          </p>
          <p style={{ fontSize: 16, color: "var(--gray-500)", lineHeight: 1.7, marginBottom: 24 }}>
            She has participated in humanitarian dental projects in Asia and South America, and continuously stays abreast of cutting-edge technology and continuing education. As a certified Fusion Dental Implants™ provider, she now brings next-generation implant technology to the Bay Area.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              "Tufts University School of Dental Medicine (DMD)",
              "Certified Fusion Dental Implants™ Provider",
              "Member, American Dental Association",
              "Member, California Dental Association",
              "Member, South Alameda Dental Association",
              "Harvard University — Cell Biology Research",
              "Clark University — Cum Laude Graduate",
              "Humanitarian dental missions (Asia & S. America)",
              "Multilingual: English, Russian, Chinese, Taiwanese",
              "CareCredit Accepted Provider",
              "Accepts MetLife, Delta Dental, Anthem Blue Cross",
              "State-of-the-art digital X-ray technology",
            ].map((c, i) => (
              <div key={i} style={{ display: "flex", gap: 8, fontSize: 13, color: "var(--gray-700)" }}>
                <span style={{ color: "var(--teal)", fontWeight: 700 }}>✓</span> {c}
              </div>
            ))}
          </div>

          {/* Directory & Social Links */}
          <div style={{ marginTop: 24, padding: 20, background: "var(--gray-50)", borderRadius: 12, border: "1px solid var(--gray-200)" }}>
            <div style={{ fontWeight: 700, fontSize: 14, color: "var(--navy)", marginBottom: 12 }}>Find Dr. Chen Online</div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {[
                { name: "Official Website", icon: "🌐", color: "#0A1628" },
                { name: "Zocdoc", icon: "📋", color: "#FF7043" },
                { name: "Yelp", icon: "⭐", color: "#D32323" },
                { name: "Healthgrades", icon: "🏥", color: "#00875A" },
                { name: "WebMD", icon: "💊", color: "#0057B8" },
                { name: "Even28", icon: "🦷", color: "#00A67E" },
                { name: "Opencare", icon: "📅", color: "#6C5CE7" },
                { name: "CareCredit", icon: "💳", color: "#00A4BD" },
              ].map((link, i) => (
                <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "6px 12px", background: "white", border: "1px solid var(--gray-200)", borderRadius: 8, fontSize: 12, fontWeight: 600, color: link.color, cursor: "pointer" }}>
                  {link.icon} {link.name}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div style={{ background: "linear-gradient(135deg, var(--teal-light) 0%, #e0f0ff 100%)", borderRadius: 24, padding: 40, display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
          <div style={{ width: 200, height: 200, borderRadius: "50%", background: "linear-gradient(135deg, var(--teal) 0%, var(--navy) 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 72, color: "white" }}>YC</div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 700, color: "var(--navy)" }}>Dr. Yvonne Chen, DMD</div>
            <div style={{ fontSize: 14, color: "var(--gray-500)", marginTop: 4 }}>Fremont Comprehensive Family Dentistry</div>
            <div style={{ fontSize: 13, color: "var(--gold)", fontWeight: 700, marginTop: 8 }}>⚡ Certified Fusion Dental Implants™ Provider</div>
            <div style={{ fontSize: 12, color: "var(--gray-500)", marginTop: 4 }}>Tufts University School of Dental Medicine</div>
          </div>

          {/* Real Ratings */}
          <div style={{ width: "100%", background: "white", borderRadius: 14, padding: 16 }}>
            <div style={{ fontWeight: 600, fontSize: 13, color: "var(--navy)", marginBottom: 12, textAlign: "center" }}>Verified Ratings</div>
            {[
              { platform: "Google", rating: "4.9", reviews: "41 reviews" },
              { platform: "Zocdoc", rating: "4.65", reviews: "99 reviews" },
              { platform: "Yelp", rating: "4.2", reviews: "58 reviews" },
              { platform: "Even28", rating: "5.0", reviews: "35 reviews" },
            ].map((p, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 0", borderBottom: i < 3 ? "1px solid var(--gray-100)" : "none" }}>
                <span style={{ fontSize: 13, fontWeight: 500 }}>{p.platform}</span>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ color: "var(--gold)", fontSize: 13 }}>{"★".repeat(Math.round(parseFloat(p.rating)))}</span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "var(--navy)" }}>{p.rating}</span>
                  <span style={{ fontSize: 11, color: "var(--gray-500)" }}>({p.reviews})</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, width: "100%" }}>
            {[["20+", "Years"], ["15+", "Yrs in East Bay"], ["5", "Languages"]].map(([n, l], i) => (
              <div key={i} style={{ textAlign: "center", background: "white", borderRadius: 12, padding: 16, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: "var(--teal)" }}>{n}</div>
                <div style={{ fontSize: 11, color: "var(--gray-500)" }}>{l}</div>
              </div>
            ))}
          </div>

          {/* Zocdoc Specific Ratings */}
          <div style={{ width: "100%", background: "white", borderRadius: 14, padding: 16 }}>
            <div style={{ fontWeight: 600, fontSize: 13, color: "var(--navy)", marginBottom: 10, textAlign: "center" }}>Zocdoc Patient Ratings</div>
            {[
              { label: "Overall", score: "4.65" },
              { label: "Bedside Manner", score: "4.81" },
              { label: "Wait Time", score: "4.86" },
            ].map((r, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "4px 0" }}>
                <span style={{ fontSize: 12, color: "var(--gray-500)" }}>{r.label}</span>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ width: 80, height: 6, background: "var(--gray-100)", borderRadius: 3, overflow: "hidden" }}>
                    <div style={{ width: `${(parseFloat(r.score) / 5) * 100}%`, height: "100%", background: "var(--teal)", borderRadius: 3 }} />
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "var(--navy)" }}>{r.score}/5</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// CRM DASHBOARD
const CRMDashboard = () => {
  const [leads, setLeads] = useState(generateLeads());
  const [crmView, setCrmView] = useState("leads");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [dialerNumber, setDialerNumber] = useState("");
  const [showAddLead, setShowAddLead] = useState(false);
  const [newLead, setNewLead] = useState({ name: "", phone: "", email: "", service: "", source: "Website", status: "New", notes: "" });

  const filteredLeads = leads.filter((l) => {
    const matchSearch = l.name.toLowerCase().includes(searchTerm.toLowerCase()) || l.service.toLowerCase().includes(searchTerm.toLowerCase()) || l.city?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchStatus = statusFilter === "All" || l.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const totalValue = leads.reduce((a, b) => a + b.value, 0);
  const convertedValue = leads.filter((l) => l.status === "Converted").reduce((a, b) => a + b.value, 0);
  const convRate = leads.length ? Math.round((leads.filter((l) => l.status === "Converted").length / leads.length) * 100) : 0;
  const maxRevenue = Math.max(...MONTHLY_DATA.map((d) => d.revenue));

  const addLead = () => {
    if (!newLead.name) return;
    setLeads([{ ...newLead, id: leads.length + 1, date: "2026-03-06", value: 0, followUp: "", city: "Fremont" }, ...leads]);
    setShowAddLead(false);
    setNewLead({ name: "", phone: "", email: "", service: "", source: "Website", status: "New", notes: "" });
  };

  const statusClass = (s) => {
    const map = { New: "new", Contacted: "contacted", Qualified: "qualified", "Consultation Booked": "booked", "Treatment Planned": "planned", Converted: "converted", Lost: "lost" };
    return "status-badge status-" + (map[s] || "new");
  };

  return (
    <div className="crm-layout">
      <div className="crm-sidebar">
        <div style={{ padding: "0 24px 24px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, marginBottom: 4 }}>CRM Dashboard</div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>Dr. Yvonne Chen DMD</div>
        </div>
        <div style={{ marginTop: 16 }}>
          {[
            ["leads", "📋", "Lead Management"],
            ["analytics", "📊", "Power BI Analytics"],
            ["callcenter", "📞", "Call Center"],
            ["pipeline", "🔄", "Pipeline View"],
          ].map(([key, icon, label]) => (
            <button key={key} className={`crm-sidebar-item ${crmView === key ? "active" : ""}`} onClick={() => setCrmView(key)}>
              <span>{icon}</span> {label}
            </button>
          ))}
        </div>
        <div style={{ position: "absolute", bottom: 24, left: 0, right: 0, padding: "0 24px" }}>
          <div className="powered-badge" style={{ width: "100%", justifyContent: "center" }}>⚡ Fusion Dental Implants™</div>
        </div>
      </div>
      <div className="crm-content">
        {crmView === "leads" && (
          <>
            <div className="crm-header">
              <h2>Lead Management</h2>
              <button className="btn btn-primary btn-sm" onClick={() => setShowAddLead(true)}>+ New Lead</button>
            </div>
            <div className="kpi-grid">
              <div className="kpi-card">
                <div className="kpi-label">Total Leads</div>
                <div className="kpi-value">{leads.length}</div>
                <div className="kpi-change kpi-up">↑ 12% vs last month</div>
              </div>
              <div className="kpi-card">
                <div className="kpi-label">Pipeline Value</div>
                <div className="kpi-value">${(totalValue / 1000).toFixed(0)}K</div>
                <div className="kpi-change kpi-up">↑ 23% vs last month</div>
              </div>
              <div className="kpi-card">
                <div className="kpi-label">Converted Revenue</div>
                <div className="kpi-value">${(convertedValue / 1000).toFixed(0)}K</div>
                <div className="kpi-change kpi-up">↑ 18% vs last month</div>
              </div>
              <div className="kpi-card">
                <div className="kpi-label">Conversion Rate</div>
                <div className="kpi-value">{convRate}%</div>
                <div className="kpi-change kpi-up">↑ 3% vs last month</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
              <input className="form-input" placeholder="Search leads by name, service, or city..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={{ maxWidth: 360 }} />
              <select className="form-input form-select" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} style={{ maxWidth: 200 }}>
                <option>All</option>
                {LEAD_STATUSES.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div className="data-table">
              <table>
                <thead>
                  <tr>
                    <th>Name</th><th>Service</th><th>Source</th><th>Status</th><th>Value</th><th>City</th><th>Date</th><th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLeads.map((lead) => (
                    <tr key={lead.id}>
                      <td>
                        <div style={{ fontWeight: 500 }}>{lead.name}</div>
                        <div style={{ fontSize: 12, color: "var(--gray-500)" }}>{lead.email}</div>
                      </td>
                      <td>{lead.service}</td>
                      <td>{lead.source}</td>
                      <td><span className={statusClass(lead.status)}>{lead.status}</span></td>
                      <td style={{ fontWeight: 600 }}>${lead.value.toLocaleString()}</td>
                      <td style={{ fontSize: 13 }}>{lead.city}</td>
                      <td style={{ fontSize: 13 }}>{lead.date}</td>
                      <td>
                        <select className="form-input form-select" value={lead.status} onChange={(e) => {
                          setLeads(leads.map((l) => l.id === lead.id ? { ...l, status: e.target.value } : l));
                        }} style={{ padding: "4px 8px", fontSize: 12, minWidth: 120 }}>
                          {LEAD_STATUSES.map((s) => <option key={s}>{s}</option>)}
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {showAddLead && (
              <div className="modal-overlay" onClick={() => setShowAddLead(false)}>
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                  <button className="modal-close" onClick={() => setShowAddLead(false)}>×</button>
                  <h2>Add New Lead</h2>
                  {[
                    ["name", "Full Name", "text"],
                    ["phone", "Phone", "tel"],
                    ["email", "Email", "email"],
                  ].map(([key, label, type]) => (
                    <div className="form-group" key={key}>
                      <label className="form-label">{label}</label>
                      <input className="form-input" type={type} value={newLead[key]} onChange={(e) => setNewLead({ ...newLead, [key]: e.target.value })} />
                    </div>
                  ))}
                  <div className="form-group">
                    <label className="form-label">Service Interest</label>
                    <select className="form-input form-select" value={newLead.service} onChange={(e) => setNewLead({ ...newLead, service: e.target.value })}>
                      <option value="">Select service...</option>
                      {Object.values(SERVICES).flat().map((s) => <option key={s.id} value={s.name}>{s.name}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Lead Source</label>
                    <select className="form-input form-select" value={newLead.source} onChange={(e) => setNewLead({ ...newLead, source: e.target.value })}>
                      {LEAD_SOURCES.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Notes</label>
                    <textarea className="form-input" value={newLead.notes} onChange={(e) => setNewLead({ ...newLead, notes: e.target.value })} />
                  </div>
                  <button className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }} onClick={addLead}>
                    Add Lead
                  </button>
                </div>
              </div>
            )}
          </>
        )}

        {crmView === "analytics" && (
          <>
            <div className="crm-header">
              <h2>📊 Power BI Analytics</h2>
              <div style={{ display: "flex", gap: 8 }}>
                <button className="btn btn-sm btn-dark">Export PDF</button>
                <button className="btn btn-sm btn-primary">Refresh Data</button>
              </div>
            </div>
            <div className="kpi-grid">
              {[
                { label: "Monthly Revenue", value: "$152K", change: "+18%", up: true },
                { label: "New Leads", value: "81", change: "+9.5%", up: true },
                { label: "Conversion Rate", value: "35.8%", change: "+2.1%", up: true },
                { label: "Avg. Treatment Value", value: "$5,241", change: "+$340", up: true },
                { label: "Website Traffic", value: "6,400", change: "+10.3%", up: true },
                { label: "Phone Calls", value: "340", change: "+8.9%", up: true },
              ].map((kpi, i) => (
                <div className="kpi-card" key={i}>
                  <div className="kpi-label">{kpi.label}</div>
                  <div className="kpi-value">{kpi.value}</div>
                  <div className={`kpi-change ${kpi.up ? "kpi-up" : "kpi-down"}`}>{kpi.up ? "↑" : "↓"} {kpi.change}</div>
                </div>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 24 }}>
              <div className="chart-container">
                <div className="chart-title">Revenue Trend (Last 7 Months)</div>
                <div className="bar-chart">
                  {MONTHLY_DATA.map((d, i) => (
                    <div className="bar-group" key={i}>
                      <div className="bar-value">${(d.revenue / 1000).toFixed(0)}K</div>
                      <div className="bar" style={{ height: `${(d.revenue / maxRevenue) * 100}%`, background: `linear-gradient(to top, var(--teal), var(--teal-dark))` }} />
                      <div className="bar-label">{d.month}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="chart-container">
                <div className="chart-title">Lead Sources</div>
                <div className="source-list">
                  {SOURCE_DATA.map((s, i) => (
                    <div className="source-item" key={i}>
                      <div className="source-dot" style={{ background: s.color }} />
                      <div className="source-name">{s.source}</div>
                      <div className="source-bar-track">
                        <div className="source-bar-fill" style={{ width: `${s.pct}%`, background: s.color }} />
                      </div>
                      <div className="source-pct">{s.pct}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              <div className="chart-container">
                <div className="chart-title">Leads vs Conversions</div>
                <div className="bar-chart">
                  {MONTHLY_DATA.map((d, i) => (
                    <div className="bar-group" key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                      <div style={{ display: "flex", gap: 4, alignItems: "flex-end", height: "100%" }}>
                        <div className="bar" style={{ height: `${(d.leads / 100) * 100}%`, background: "var(--blue)", width: 20, minHeight: 4 }} />
                        <div className="bar" style={{ height: `${(d.conversions / 100) * 100}%`, background: "var(--teal)", width: 20, minHeight: 4 }} />
                      </div>
                      <div className="bar-label">{d.month}</div>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 16, justifyContent: "center", marginTop: 12 }}>
                  <div style={{ display: "flex", gap: 6, alignItems: "center", fontSize: 12 }}><div style={{ width: 10, height: 10, borderRadius: 2, background: "var(--blue)" }} /> Leads</div>
                  <div style={{ display: "flex", gap: 6, alignItems: "center", fontSize: 12 }}><div style={{ width: 10, height: 10, borderRadius: 2, background: "var(--teal)" }} /> Conversions</div>
                </div>
              </div>
              <div className="chart-container">
                <div className="chart-title">Treatment Pipeline Breakdown</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    { label: "Full Arch Implants", value: 42, amount: "$1.2M", color: "var(--teal)" },
                    { label: "Single Implants", value: 28, amount: "$420K", color: "var(--blue)" },
                    { label: "Cosmetic", value: 18, amount: "$280K", color: "var(--purple)" },
                    { label: "General", value: 8, amount: "$85K", color: "var(--gold)" },
                    { label: "Other", value: 4, amount: "$45K", color: "var(--gray-300)" },
                  ].map((item, i) => (
                    <div key={i}>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 4 }}>
                        <span>{item.label}</span>
                        <span style={{ fontWeight: 600 }}>{item.amount} ({item.value}%)</span>
                      </div>
                      <div style={{ height: 8, background: "var(--gray-100)", borderRadius: 4, overflow: "hidden" }}>
                        <div style={{ height: "100%", width: `${item.value}%`, background: item.color, borderRadius: 4 }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {crmView === "callcenter" && (
          <>
            <div className="crm-header">
              <h2>📞 Call Center</h2>
              <div style={{ display: "flex", gap: 8 }}>
                <span style={{ padding: "6px 14px", background: "#D1FAE5", color: "#065F46", borderRadius: 100, fontSize: 13, fontWeight: 600 }}>● 3 Agents Online</span>
              </div>
            </div>
            <div className="kpi-grid">
              {[
                { label: "Today's Calls", value: "47", change: "+12 vs yesterday", up: true },
                { label: "Avg Wait Time", value: "0:32", change: "-15s improvement", up: true },
                { label: "Calls Converted", value: "18", change: "38.3% rate", up: true },
                { label: "Missed Calls", value: "3", change: "-2 vs yesterday", up: true },
              ].map((kpi, i) => (
                <div className="kpi-card" key={i}>
                  <div className="kpi-label">{kpi.label}</div>
                  <div className="kpi-value">{kpi.value}</div>
                  <div className="kpi-change kpi-up">↑ {kpi.change}</div>
                </div>
              ))}
            </div>
            <div className="call-grid">
              <div>
                <div className="call-log">
                  <div className="call-log-header">
                    <span>Recent Calls</span>
                    <span style={{ fontSize: 12, color: "var(--gray-500)" }}>Last 24 hours</span>
                  </div>
                  {[
                    { name: "Maria Santos", time: "2 min ago", dur: "4:32", type: "inbound", status: "completed", bg: "var(--teal)" },
                    { name: "James Kim", time: "15 min ago", dur: "8:15", type: "outbound", status: "completed", bg: "var(--blue)" },
                    { name: "Priya Patel", time: "32 min ago", dur: "—", type: "inbound", status: "missed", bg: "var(--red)" },
                    { name: "Robert Johnson", time: "1 hr ago", dur: "12:48", type: "outbound", status: "completed", bg: "var(--teal)" },
                    { name: "Lisa Zhang", time: "1.5 hr ago", dur: "6:22", type: "inbound", status: "completed", bg: "var(--blue)" },
                    { name: "Ahmed Hassan", time: "2 hr ago", dur: "3:10", type: "inbound", status: "voicemail", bg: "var(--gold)" },
                    { name: "Jennifer Wu", time: "2.5 hr ago", dur: "15:30", type: "outbound", status: "completed", bg: "var(--teal)" },
                    { name: "Michael Chen", time: "3 hr ago", dur: "9:45", type: "inbound", status: "completed", bg: "var(--blue)" },
                  ].map((call, i) => (
                    <div className="call-item" key={i}>
                      <div className="call-avatar" style={{ background: call.bg }}>{call.name.split(" ").map((n) => n[0]).join("")}</div>
                      <div className="call-info">
                        <div className="call-name">{call.name}</div>
                        <div className="call-meta">{call.type} • {call.dur} • {call.time}</div>
                      </div>
                      <div className="call-status-dot" style={{ background: call.status === "missed" ? "var(--red)" : call.status === "voicemail" ? "var(--gold)" : "var(--teal)" }} />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="dialer-pad">
                  <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 16, textAlign: "center" }}>Quick Dialer</div>
                  <div className="dialer-display">{dialerNumber || "Enter number..."}</div>
                  <div className="dialer-keys">
                    {["1","2","3","4","5","6","7","8","9","*","0","#"].map((k) => (
                      <button className="dialer-key" key={k} onClick={() => setDialerNumber((n) => n + k)}>{k}</button>
                    ))}
                    <button className="dialer-key" onClick={() => setDialerNumber("")} style={{ fontSize: 13 }}>Clear</button>
                    <button className="dialer-key dialer-call" onClick={() => alert(`Calling ${dialerNumber}...`)}>📞 Call</button>
                    <button className="dialer-key" onClick={() => setDialerNumber((n) => n.slice(0, -1))} style={{ fontSize: 13 }}>⌫</button>
                  </div>
                </div>
                <div style={{ marginTop: 20 }}>
                  <div className="chart-container">
                    <div className="chart-title">Call Scripts</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      {[
                        "New Patient Welcome",
                        "Implant Consultation Follow-up",
                        "Insurance Verification",
                        "Appointment Reminder",
                        "Treatment Plan Discussion",
                        "Fusion Implant Inquiry",
                      ].map((script, i) => (
                        <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 12px", background: "var(--gray-50)", borderRadius: 8, cursor: "pointer" }}>
                          <span style={{ fontSize: 13 }}>{script}</span>
                          <span style={{ fontSize: 11, color: "var(--teal)", fontWeight: 600 }}>Open →</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {crmView === "pipeline" && (
          <>
            <div className="crm-header">
              <h2>🔄 Lead Pipeline</h2>
            </div>
            <div style={{ display: "flex", gap: 16, overflowX: "auto", paddingBottom: 16 }}>
              {LEAD_STATUSES.map((status) => {
                const stLeads = leads.filter((l) => l.status === status);
                const stValue = stLeads.reduce((a, b) => a + b.value, 0);
                return (
                  <div key={status} style={{ minWidth: 260, background: "white", borderRadius: 14, border: "1px solid var(--gray-200)", overflow: "hidden" }}>
                    <div style={{ padding: "12px 16px", borderBottom: "1px solid var(--gray-200)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 14 }}>{status}</div>
                        <div style={{ fontSize: 12, color: "var(--gray-500)" }}>{stLeads.length} leads • ${stValue.toLocaleString()}</div>
                      </div>
                    </div>
                    <div style={{ padding: 8, maxHeight: 400, overflowY: "auto" }}>
                      {stLeads.map((lead) => (
                        <div key={lead.id} style={{ padding: 12, background: "var(--gray-50)", borderRadius: 10, marginBottom: 8, cursor: "pointer" }}>
                          <div style={{ fontWeight: 500, fontSize: 14 }}>{lead.name}</div>
                          <div style={{ fontSize: 12, color: "var(--gray-500)", marginTop: 2 }}>{lead.service}</div>
                          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
                            <span style={{ fontSize: 12, color: "var(--teal)", fontWeight: 600 }}>${lead.value.toLocaleString()}</span>
                            <span style={{ fontSize: 11, color: "var(--gray-500)" }}>{lead.source}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// LANDING PAGE COMPONENT
const LandingPage = ({ service, setModal, setPage }) => {
  const svc = Object.values(SERVICES).flat().find((s) => s.id === service) || { name: "Dental Services", desc: "World-class care at Dr. Yvonne Chen's office.", icon: "🦷" };
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const isFusion = ["allon4", "allon6", "immediate"].includes(service);

  return (
    <div>
      <div className="landing-hero">
        <div style={{ fontSize: 64, marginBottom: 16 }}>{svc.icon}</div>
        <h1>{svc.name}</h1>
        {isFusion && <div className="powered-badge" style={{ margin: "0 auto 16px" }}>⚡ Powered by Fusion Dental Implants™</div>}
        <p>{svc.desc}</p>
        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)" }}>Fremont Comprehensive Family Dentistry | 1895 Mowry Ave, Ste 102, Fremont, CA | (510) 795-1661</p>
      </div>
      <section className="section">
        <div className="section-inner" style={{ maxWidth: 960 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
            <div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: 28, color: "var(--navy)", marginBottom: 16 }}>Why Choose Dr. Chen for {svc.name}?</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  "Over 20 years of specialized experience",
                  "State-of-the-art 3D digital imaging technology",
                  "Comfortable sedation options available",
                  "Comprehensive treatment planning",
                  "Flexible financing and insurance accepted",
                  "Serving patients from 200+ cities",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ color: "var(--teal)", fontSize: 18, fontWeight: 700, lineHeight: 1 }}>✓</span>
                    <span style={{ fontSize: 15, color: "var(--gray-700)" }}>{item}</span>
                  </div>
                ))}
              </div>
              {isFusion && (
                <div style={{ marginTop: 24, padding: 20, background: "var(--gold-light)", borderRadius: 12, border: "1px solid rgba(201,168,76,0.3)" }}>
                  <div style={{ fontWeight: 700, color: "var(--navy)", marginBottom: 8 }}>⚡ Fusion Dental Implants™ Advantage</div>
                  <p style={{ fontSize: 14, color: "var(--gray-700)", lineHeight: 1.6 }}>
                    As a certified Fusion Dental Implants™ provider, Dr. Chen uses the most advanced implant technology for superior osseointegration, faster healing, and lifetime durability.
                  </p>
                </div>
              )}
              <button className="btn btn-primary" style={{ marginTop: 24 }} onClick={() => setPage("home")}>← Back to Main Site</button>
            </div>
            <div className="landing-form-card" style={{ margin: 0, boxShadow: "0 8px 30px rgba(0,0,0,0.1)" }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: 24 }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                  <h3 style={{ fontFamily: "var(--font-display)", color: "var(--navy)", marginBottom: 8 }}>Thank You!</h3>
                  <p style={{ fontSize: 14, color: "var(--gray-500)" }}>We'll contact you within 24 hours to schedule your consultation.</p>
                </div>
              ) : (
                <>
                  <h3>Request Your Free Consultation</h3>
                  <div style={{ textAlign: "center", marginBottom: 16 }}>
                    <span style={{ fontSize: 13, color: "var(--teal)", fontWeight: 600 }}>📞 Or call: {PRACTICE_INFO.phone}</span>
                  </div>
                  {[
                    ["name", "Full Name", "text"],
                    ["phone", "Phone Number", "tel"],
                    ["email", "Email Address", "email"],
                  ].map(([key, label, type]) => (
                    <div className="form-group" key={key}>
                      <label className="form-label">{label} *</label>
                      <input className="form-input" type={type} value={form[key]} onChange={(e) => setForm({ ...form, [key]: e.target.value })} required />
                    </div>
                  ))}
                  <div className="form-group">
                    <label className="form-label">Tell us about your needs</label>
                    <textarea className="form-input" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder={`I'm interested in ${svc.name}...`} />
                  </div>
                  <button className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }} onClick={() => setSubmitted(true)}>
                    Get My Free Consultation →
                  </button>
                  <p style={{ fontSize: 11, color: "var(--gray-500)", textAlign: "center", marginTop: 12 }}>
                    Your information is secure and will never be shared.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// SITEMAP PAGE
// COMPREHENSIVE GENERAL DENTISTRY SERVICES - Full SEO keyword map
const FULL_DENTAL_SERVICES = {
  "Preventive & Diagnostic Dentistry": [
    "Teeth Cleaning & Prophylaxis", "Comprehensive Dental Exams", "Digital X-Rays & Imaging", "Panoramic X-Rays", "3D Cone Beam CT Scan (CBCT)", "Oral Cancer Screening", "Periodontal Screening", "Dental Sealants", "Fluoride Treatment", "Custom Mouth Guards", "Sports Guards", "Night Guards for Bruxism", "TMJ Screening", "Bite Analysis & Occlusal Adjustment", "Intraoral Camera Examination", "Caries Risk Assessment", "Saliva Testing", "Gum Disease Screening", "Oral Hygiene Education", "Preventive Care Plans"
  ],
  "Restorative Dentistry": [
    "Dental Fillings (Composite/Tooth-Colored)", "Silver Amalgam Filling Removal", "Dental Crowns (Porcelain/Zirconia/Gold)", "Dental Bridges (Fixed)", "Inlays & Onlays", "Dental Bonding", "Tooth Repair & Reconstruction", "Full Mouth Reconstruction", "Full Mouth Rehabilitation", "Broken Tooth Repair", "Chipped Tooth Repair", "Cracked Tooth Treatment", "Dental Crown Replacement", "CEREC Same-Day Crowns", "Post & Core Build-Up", "Temporary Crowns", "Maryland Bridge", "Cantilever Bridge"
  ],
  "Cosmetic Dentistry": [
    "Porcelain Veneers", "Composite Veneers", "Lumineers", "Teeth Whitening (In-Office)", "Take-Home Whitening Kits", "Zoom Teeth Whitening", "Cosmetic Dental Bonding", "Smile Makeover", "Smile Design", "Gum Contouring & Reshaping", "Gummy Smile Correction", "Tooth Reshaping & Contouring", "Tooth Gap Closure", "Diastema Treatment", "Cosmetic Crown Lengthening", "Full Smile Transformation", "Esthetic Dentistry Consultation"
  ],
  "Dental Implants": [
    "Single Tooth Dental Implants", "Multiple Teeth Implants", "All-on-4 Full Arch Implants", "All-on-6 Full Arch Implants", "Full Arch Dental Implants", "Implant-Supported Bridge", "Implant-Supported Dentures", "Snap-In Dentures (Implant Overdentures)", "Mini Dental Implants", "Zygomatic Implants", "Immediate Load Implants (Same-Day Teeth)", "Teeth-in-a-Day", "Implant Restoration & Crown", "Implant Abutment Placement", "Guided Implant Surgery", "Computer-Guided Implant Placement", "3D Implant Planning", "Fusion Dental Implants™ Full Arch", "Fusion Dental Implants™ All-on-4", "Fusion Dental Implants™ Same-Day"
  ],
  "Oral Surgery": [
    "Simple Tooth Extraction", "Surgical Tooth Extraction", "Wisdom Teeth Removal", "Impacted Wisdom Teeth Surgery", "Bone Grafting", "Socket Preservation", "Sinus Lift Surgery (Sinus Augmentation)", "Ridge Augmentation", "Soft Tissue Grafting", "Gum Grafting for Recession", "Frenectomy", "Pre-Prosthetic Surgery", "Alveoloplasty", "Torus Removal", "Jaw Surgery Consultation", "Biopsy (Oral Pathology)", "Cyst & Lesion Removal", "PRP/PRF Therapy"
  ],
  "Endodontics (Root Canal)": [
    "Root Canal Therapy", "Anterior Root Canal", "Molar Root Canal", "Retreatment Root Canal", "Root Canal with Crown", "Pulp Capping", "Pulpotomy", "Apicoectomy", "Endodontic Microsurgery", "Emergency Root Canal", "Tooth Pain Diagnosis", "Infected Tooth Treatment", "Dental Abscess Treatment", "Cracked Tooth Root Canal"
  ],
  "Periodontics (Gum Treatment)": [
    "Scaling & Root Planing (Deep Cleaning)", "Periodontal Maintenance", "Gum Disease Treatment", "Gingivitis Treatment", "Periodontitis Treatment", "Laser Gum Treatment", "Osseous Surgery", "Gum Flap Surgery", "Crown Lengthening", "Bone Regeneration", "Guided Tissue Regeneration", "Pocket Reduction Surgery", "Antibiotic Gum Therapy", "Gum Recession Treatment", "Pinhole Surgical Technique", "Loose Teeth Stabilization"
  ],
  "Prosthodontics (Dentures & Prosthetics)": [
    "Complete Dentures (Full Dentures)", "Partial Dentures", "Immediate Dentures", "Implant-Supported Dentures", "Snap-On Dentures", "Denture Repair", "Denture Reline", "Denture Adjustment", "Flexible Partial Dentures", "Cast Metal Partial Dentures", "Precision Attachment Dentures", "Economy Dentures", "Premium Dentures", "Digital Dentures", "Temporary Dentures", "Overdentures"
  ],
  "Orthodontics & Alignment": [
    "Invisalign Clear Aligners", "Clear Aligner Therapy", "Retainers", "Space Maintainers", "Orthodontic Consultation", "Adult Orthodontics", "Teen Invisalign", "Invisalign Lite", "Invisalign Express", "Orthodontic Retainer Replacement", "ClearCorrect Aligners", "Minor Tooth Movement"
  ],
  "Pediatric & Family Dentistry": [
    "Children's Dental Exams", "Child's First Dental Visit", "Pediatric Dental Cleaning", "Baby Teeth Extraction", "Pediatric Dental Sealants", "Pediatric Fluoride Treatment", "Space Maintainers for Kids", "Pulpotomy (Baby Root Canal)", "Stainless Steel Crowns for Kids", "Adolescent Dentistry", "Family Dental Plans", "Multi-Generational Dental Care", "Infant Oral Health", "Tongue-Tie Release (Frenectomy)"
  ],
  "Emergency Dental Care": [
    "Emergency Toothache Treatment", "Same-Day Emergency Dentist", "Knocked-Out Tooth (Avulsed)", "Broken Tooth Emergency", "Lost Filling Emergency", "Lost Crown Emergency", "Dental Abscess Emergency", "Swollen Face Emergency", "Bleeding Gums Emergency", "Broken Denture Emergency", "Dental Trauma Treatment", "Sports Injury Dental Care", "Emergency Tooth Extraction", "After-Hours Dental Care", "Weekend Emergency Dentist"
  ],
  "Sedation Dentistry": [
    "Nitrous Oxide (Laughing Gas)", "Oral Sedation Dentistry", "IV Sedation Dentistry", "Conscious Sedation", "Sedation for Dental Anxiety", "Sedation for Special Needs Patients", "Dental Phobia Treatment", "Pain-Free Dentistry", "Comfort Dentistry", "Anxiety-Free Dental Care"
  ],
  "TMJ & Facial Pain": [
    "TMJ/TMD Diagnosis & Treatment", "Jaw Pain Treatment", "Jaw Clicking & Popping", "TMJ Splint Therapy", "Occlusal Adjustment", "Bruxism Treatment", "Teeth Grinding Treatment", "Custom Night Guard for TMJ", "Headache from TMJ Treatment", "Facial Pain Management", "Myofascial Pain Treatment"
  ],
  "Sleep Dentistry & Airway": [
    "Sleep Apnea Oral Appliance", "Snoring Treatment", "Mandibular Advancement Device", "CPAP Alternative", "Airway-Focused Dentistry", "Sleep Dentistry Consultation"
  ],
  "Advanced Technology": [
    "Digital Impressions (No Goop)", "3D Cone Beam CT Imaging", "Intraoral Scanner", "Digital Smile Design", "Laser Dentistry", "Dental Operating Microscope", "CAD/CAM Same-Day Restorations", "Digital X-Rays (Low Radiation)", "Guided Surgery Technology", "Electric Handpieces"
  ],
  "Dental Anxiety & Special Needs": [
    "Dental Anxiety Management", "Dental Phobia Treatment", "First Visit After Years Away", "Judgment-Free Dentistry", "Special Needs Dentistry", "Geriatric Dentistry", "Wheelchair Accessible Dental Office", "Multilingual Dental Care (English, Russian, Chinese, Taiwanese)"
  ],
};

// 100-MILE RADIUS CITIES FROM FREMONT, CA — Comprehensive list
const CITIES_100_MILE = {
  "Tri-City Area (0-5 mi)": ["Fremont","Newark","Union City"],
  "South Bay (5-15 mi)": ["Milpitas","San Jose","Santa Clara","Sunnyvale","Cupertino","Campbell","Saratoga","Los Gatos","Mountain View","Palo Alto","Los Altos","Los Altos Hills","Monte Sereno"],
  "East Bay — Inner (5-20 mi)": ["Hayward","San Leandro","Castro Valley","San Lorenzo","Ashland","Cherryland","Warm Springs","Irvington","Centerville","Niles"],
  "East Bay — Central (10-25 mi)": ["Oakland","Berkeley","Alameda","Emeryville","Piedmont","Albany","El Cerrito","Richmond","San Pablo","Pinole","Hercules","Rodeo","Kensington"],
  "East Bay — Tri-Valley (15-30 mi)": ["Dublin","Pleasanton","Livermore","San Ramon","Danville","Alamo","Blackhawk","Diablo","Sunol"],
  "East Bay — Outer (20-40 mi)": ["Walnut Creek","Concord","Pleasant Hill","Lafayette","Orinda","Moraga","Martinez","Clayton","Pacheco","Clyde"],
  "East Bay — Far East (30-55 mi)": ["Pittsburg","Antioch","Brentwood","Oakley","Discovery Bay","Byron","Bethel Island","Knightsen"],
  "Peninsula (15-35 mi)": ["Redwood City","San Mateo","Foster City","Belmont","San Carlos","Burlingame","Millbrae","South San Francisco","Daly City","Pacifica","Half Moon Bay","Menlo Park","Atherton","Woodside","Portola Valley","East Palo Alto","Brisbane","Colma"],
  "San Francisco (35-45 mi)": ["San Francisco","Treasure Island","Yerba Buena Island"],
  "Marin County (40-60 mi)": ["San Rafael","Novato","Mill Valley","Sausalito","Tiburon","Larkspur","Corte Madera","Fairfax","San Anselmo","Ross","Kentfield","Greenbrae","Terra Linda","Ignacio","Strawberry","Tamalpais Valley"],
  "North Bay (50-70 mi)": ["Vallejo","Benicia","Fairfield","Vacaville","Suisun City","Dixon","Rio Vista","American Canyon","Napa","Yountville","St. Helena","Calistoga"],
  "Sonoma County (55-80 mi)": ["Petaluma","Rohnert Park","Cotati","Sonoma","Glen Ellen"],
  "Santa Cruz Area (40-60 mi)": ["Santa Cruz","Scotts Valley","Capitola","Soquel","Aptos","Watsonville","Felton","Ben Lomond","Boulder Creek"],
  "Monterey County (60-85 mi)": ["Monterey","Seaside","Marina","Pacific Grove","Carmel-by-the-Sea","Salinas","Prunedale","Castroville","Moss Landing"],
  "South Santa Clara (25-50 mi)": ["Morgan Hill","Gilroy","San Martin","Coyote"],
  "San Benito County (50-65 mi)": ["Hollister","San Juan Bautista","Tres Pinos"],
  "Stanislaus County (60-80 mi)": ["Modesto","Turlock","Ceres","Oakdale","Riverbank","Patterson","Newman","Hughson","Waterford","Denair"],
  "San Joaquin County (50-75 mi)": ["Stockton","Tracy","Manteca","Lodi","Ripon","Escalon","Lathrop","Mountain House","French Camp"],
  "Sacramento Region (80-100 mi)": ["Sacramento","Elk Grove","Roseville","Folsom","Rancho Cordova","Citrus Heights","Carmichael","Fair Oaks","Orangevale","Gold River","Davis","Woodland","West Sacramento"],
  "Merced County (75-100 mi)": ["Merced","Los Banos","Atwater","Livingston","Gustine","Dos Palos"],
  "Solano — Inland (45-65 mi)": ["Green Valley","Rockville","Cordelia","Elmira"],
  "Yolo County (80-95 mi)": ["Davis","Woodland","West Sacramento","Winters","Esparto"],
};

// All service keywords for SEO cross-referencing
const SEO_SERVICE_KEYWORDS = [
  "Dentist","General Dentist","Family Dentist","Cosmetic Dentist","Dental Implants","All-on-4 Dental Implants","All-on-6 Dental Implants","Full Arch Dental Implants","Same-Day Dental Implants","Fusion Dental Implants","Teeth Cleaning","Dental Exam","Root Canal","Dental Crown","Dental Bridge","Porcelain Veneers","Teeth Whitening","Invisalign","Clear Aligners","Wisdom Teeth Removal","Tooth Extraction","Dental Fillings","Emergency Dentist","Pediatric Dentist","Dentures","Dental Bonding","Gum Disease Treatment","Periodontal Treatment","Sedation Dentistry","IV Sedation Dentist","Dental Surgery","Oral Surgery","Bone Grafting","Sinus Lift","Dental Implant Surgery","TMJ Treatment","Night Guard","Sleep Apnea Dentist","Smile Makeover","Full Mouth Reconstruction","Implant-Supported Dentures","Snap-In Dentures","Dental Anxiety","Pain-Free Dentist","Affordable Dentist","Best Dentist","Top Rated Dentist"
];

const SitemapPage = () => {
  const [expandedCat, setExpandedCat] = useState(null);
  const [cityFilter, setCityFilter] = useState("");
  const [showCityPages, setShowCityPages] = useState(false);
  const [selectedServiceForCities, setSelectedServiceForCities] = useState(null);

  const allCities = Object.values(CITIES_100_MILE).flat();
  const filteredCities = cityFilter ? allCities.filter(c => c.toLowerCase().includes(cityFilter.toLowerCase())) : allCities;
  const totalServicePages = Object.values(FULL_DENTAL_SERVICES).flat().length;
  const totalCityPages = allCities.length * SEO_SERVICE_KEYWORDS.length;

  return (
    <section className="section sitemap-section">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-badge">🗺️ Comprehensive SEO Sitemap</div>
          <h2 className="section-title">Complete Site Architecture</h2>
          <p className="section-subtitle">
            {totalServicePages}+ dental service pages × {allCities.length}+ cities = {totalCityPages.toLocaleString()}+ SEO-optimized landing pages covering every aspect of general dentistry within 100 miles of Fremont.
          </p>
        </div>

        {/* Sitemap Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12, marginBottom: 36 }}>
          {[
            { label: "Service Categories", value: Object.keys(FULL_DENTAL_SERVICES).length, icon: "📁" },
            { label: "Individual Services", value: totalServicePages + "+", icon: "🦷" },
            { label: "Cities Covered", value: allCities.length + "+", icon: "📍" },
            { label: "Counties Covered", value: Object.keys(CITIES_100_MILE).length, icon: "🗺️" },
            { label: "SEO Keywords", value: SEO_SERVICE_KEYWORDS.length + "+", icon: "🔑" },
            { label: "Total Landing Pages", value: totalCityPages.toLocaleString() + "+", icon: "📄" },
          ].map((s, i) => (
            <div key={i} style={{ background: "white", border: "1px solid var(--gray-200)", borderRadius: 12, padding: 16, textAlign: "center" }}>
              <div style={{ fontSize: 24, marginBottom: 4 }}>{s.icon}</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: "var(--teal)" }}>{s.value}</div>
              <div style={{ fontSize: 11, color: "var(--gray-500)" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* PART 1: Main Pages */}
        <div style={{ marginBottom: 32 }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, color: "var(--navy)", marginBottom: 16, paddingBottom: 8, borderBottom: "3px solid var(--teal)" }}>
            📌 Core Pages
          </h3>
          <div className="sitemap-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}>
            <div className="sitemap-category">
              <h4>Main Navigation</h4>
              {["Home","About Dr. Yvonne Chen DMD","Fremont Comprehensive Family Dentistry","Our Team & Staff","Contact Us","Directions & Map (1895 Mowry Ave)","Office Tour","Patient Resources","Insurance & Financing","CareCredit Financing","Before & After Photo Gallery","Patient Testimonials & Reviews","New Patient Forms (Download)","Blog & Dental Education","FAQs","Privacy Policy (HIPAA)","Terms of Service","Accessibility Statement","ADA Compliance","Sitemap (XML)"].map((p) => (
                <span className="sitemap-link" key={p}>{p}</span>
              ))}
            </div>
            <div className="sitemap-category">
              <h4>Patient Tools</h4>
              {["Online Appointment Booking","Virtual Consultation Request","Treatment Cost Calculator","Insurance Verification Tool","Patient Portal Login","Post-Op Instructions","Emergency Contact Page","Refer a Friend Program","Patient Satisfaction Survey","Payment Options","Financial Plans","Download Patient Forms","HIPAA Privacy Notice","COVID-19 Safety Protocols","Multilingual Support (EN/RU/ZH/TW)","Zocdoc Online Booking","Yelp Reviews Page","Google Reviews Page","Healthgrades Profile","WebMD Provider Page"].map((p) => (
                <span className="sitemap-link" key={p}>{p}</span>
              ))}
            </div>
            <div className="sitemap-category">
              <h4>Fusion Dental Implants™</h4>
              {["About Fusion Dental Implants™ Technology","Fusion vs. Traditional Implants Comparison","All-on-4 Powered by Fusion™","All-on-6 Powered by Fusion™","Same-Day Teeth Powered by Fusion™","Fusion Implant Pricing & Financing","Fusion Implant Case Studies","Fusion Patient Results Gallery","Am I a Candidate for Fusion Implants?","Fusion Implant FAQs","Fusion Implant Warranty Program","Why Choose a Certified Fusion Provider","Free Fusion Implant Consultation","Fusion 3D CT Scan Offer ($500 Value)","Fusion Implant Recovery Guide","Fusion vs Dentures Comparison","Fusion vs All-on-X Comparison"].map((p) => (
                <span className="sitemap-link" key={p}>{p}</span>
              ))}
            </div>
          </div>
        </div>

        {/* PART 2: All Dental Services - Expandable */}
        <div style={{ marginBottom: 32 }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, color: "var(--navy)", marginBottom: 16, paddingBottom: 8, borderBottom: "3px solid var(--gold)" }}>
            🦷 Complete Dental Services ({totalServicePages}+ Service Pages)
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {Object.entries(FULL_DENTAL_SERVICES).map(([category, services]) => (
              <div key={category} style={{ background: "white", border: "1px solid var(--gray-200)", borderRadius: 12, overflow: "hidden" }}>
                <button
                  onClick={() => setExpandedCat(expandedCat === category ? null : category)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 20px", background: expandedCat === category ? "var(--teal-light)" : "white", border: "none", cursor: "pointer", fontFamily: "var(--font-body)", textAlign: "left" }}
                >
                  <div>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 600, color: "var(--navy)" }}>{category}</span>
                    <span style={{ fontSize: 12, color: "var(--gray-500)", marginLeft: 8 }}>({services.length} pages)</span>
                  </div>
                  <span style={{ fontSize: 18, color: "var(--teal)", transform: expandedCat === category ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }}>▼</span>
                </button>
                {expandedCat === category && (
                  <div style={{ padding: "0 20px 16px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 4 }}>
                    {services.map((svc, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 0" }}>
                        <span style={{ color: "var(--teal)", fontSize: 10 }}>●</span>
                        <span style={{ fontSize: 13, color: "var(--gray-700)" }}>{svc}</span>
                        <button
                          onClick={() => { setSelectedServiceForCities(svc); setShowCityPages(true); }}
                          style={{ marginLeft: "auto", fontSize: 10, color: "var(--teal)", fontWeight: 700, background: "var(--teal-light)", padding: "2px 8px", borderRadius: 100, border: "none", cursor: "pointer", fontFamily: "var(--font-body)", whiteSpace: "nowrap" }}
                        >
                          View city pages →
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* PART 3: City + Service SEO Matrix */}
        <div style={{ marginBottom: 32 }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, color: "var(--navy)", marginBottom: 16, paddingBottom: 8, borderBottom: "3px solid var(--blue)" }}>
            📍 City-Specific SEO Landing Pages ({allCities.length}+ Cities × {SEO_SERVICE_KEYWORDS.length} Keywords)
          </h3>
          <p style={{ fontSize: 14, color: "var(--gray-500)", marginBottom: 16 }}>
            Every dental service has a dedicated landing page for each city within 100 miles of Fremont. Search or browse below.
          </p>

          <input
            className="form-input"
            placeholder="🔍 Search cities (e.g., San Jose, Oakland, Palo Alto...)"
            value={cityFilter}
            onChange={(e) => setCityFilter(e.target.value)}
            style={{ maxWidth: 400, marginBottom: 20 }}
          />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
            {Object.entries(CITIES_100_MILE).map(([region, cities]) => {
              const visibleCities = cityFilter
                ? cities.filter(c => c.toLowerCase().includes(cityFilter.toLowerCase()))
                : cities;
              if (visibleCities.length === 0) return null;
              return (
                <div key={region} style={{ background: "white", border: "1px solid var(--gray-200)", borderRadius: 12, padding: 16 }}>
                  <h5 style={{ fontSize: 13, fontWeight: 700, color: "var(--navy)", marginBottom: 8, paddingBottom: 6, borderBottom: "2px solid var(--teal)", display: "flex", justifyContent: "space-between" }}>
                    <span>{region}</span>
                    <span style={{ fontSize: 11, color: "var(--gray-500)", fontWeight: 400 }}>{visibleCities.length} cities</span>
                  </h5>
                  {visibleCities.map((city) => (
                    <div key={city} style={{ marginBottom: 8 }}>
                      <div style={{ fontWeight: 600, fontSize: 13, color: "var(--teal)", marginBottom: 3, cursor: "pointer" }}>
                        📍 {city}, CA
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
                        {["Dentist","Dental Implants","All-on-4","Emergency Dentist","Cosmetic Dentist","Invisalign","Root Canal","Teeth Whitening","Veneers","Sedation Dentist"].map((kw, ki) => (
                          <span key={ki} style={{ fontSize: 10, padding: "2px 6px", background: "var(--gray-50)", border: "1px solid var(--gray-200)", borderRadius: 4, color: "var(--gray-500)", whiteSpace: "nowrap" }}>
                            {kw} in {city}
                          </span>
                        ))}
                        <span style={{ fontSize: 10, padding: "2px 6px", color: "var(--teal)", fontWeight: 600, cursor: "pointer" }}>+{SEO_SERVICE_KEYWORDS.length - 10} more...</span>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        {/* PART 4: Sample URL Structure */}
        <div style={{ marginBottom: 32 }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, color: "var(--navy)", marginBottom: 16, paddingBottom: 8, borderBottom: "3px solid var(--purple)" }}>
            🔗 SEO URL Structure
          </h3>
          <div style={{ background: "var(--navy)", borderRadius: 14, padding: 24, color: "white", fontFamily: "var(--font-mono)", fontSize: 12, lineHeight: 2.2, overflowX: "auto" }}>
            <div style={{ color: "var(--gray-500)", marginBottom: 8 }}>// Core service pages</div>
            <div><span style={{ color: "var(--teal)" }}>/services/</span>general-dentistry/teeth-cleaning</div>
            <div><span style={{ color: "var(--teal)" }}>/services/</span>cosmetic-dentistry/porcelain-veneers</div>
            <div><span style={{ color: "var(--teal)" }}>/services/</span>dental-implants/all-on-4-full-arch</div>
            <div><span style={{ color: "var(--teal)" }}>/services/</span>dental-implants/fusion-dental-implants</div>
            <div><span style={{ color: "var(--teal)" }}>/services/</span>oral-surgery/wisdom-teeth-removal</div>
            <div><span style={{ color: "var(--teal)" }}>/services/</span>emergency-dentistry/same-day-emergency</div>
            <div style={{ color: "var(--gray-500)", marginTop: 12, marginBottom: 8 }}>// City-specific landing pages</div>
            <div><span style={{ color: "var(--gold)" }}>/dentist-in/</span>san-jose-ca</div>
            <div><span style={{ color: "var(--gold)" }}>/dentist-in/</span>oakland-ca/dental-implants</div>
            <div><span style={{ color: "var(--gold)" }}>/dentist-in/</span>palo-alto-ca/all-on-4-implants</div>
            <div><span style={{ color: "var(--gold)" }}>/dentist-in/</span>hayward-ca/emergency-dentist</div>
            <div><span style={{ color: "var(--gold)" }}>/dentist-in/</span>walnut-creek-ca/invisalign</div>
            <div><span style={{ color: "var(--gold)" }}>/dentist-in/</span>sacramento-ca/fusion-dental-implants</div>
            <div style={{ color: "var(--gray-500)", marginTop: 12, marginBottom: 8 }}>// Keyword-targeted pages</div>
            <div><span style={{ color: "#EC4899" }}>/</span>best-dentist-fremont-ca</div>
            <div><span style={{ color: "#EC4899" }}>/</span>affordable-dental-implants-bay-area</div>
            <div><span style={{ color: "#EC4899" }}>/</span>same-day-dental-implants-near-me</div>
            <div><span style={{ color: "#EC4899" }}>/</span>all-on-4-dental-implants-fremont</div>
            <div><span style={{ color: "#EC4899" }}>/</span>fusion-dental-implants-provider-california</div>
            <div><span style={{ color: "#EC4899" }}>/</span>emergency-dentist-open-now-fremont</div>
            <div><span style={{ color: "#EC4899" }}>/</span>russian-speaking-dentist-fremont</div>
            <div><span style={{ color: "#EC4899" }}>/</span>chinese-speaking-dentist-fremont</div>
            <div><span style={{ color: "#EC4899" }}>/</span>sedation-dentistry-dental-anxiety-fremont</div>
          </div>
        </div>

        {/* PART 5: Full keyword list */}
        <div>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, color: "var(--navy)", marginBottom: 16, paddingBottom: 8, borderBottom: "3px solid var(--red)" }}>
            🔑 Target SEO Keywords ({SEO_SERVICE_KEYWORDS.length}+ Primary Keywords)
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {SEO_SERVICE_KEYWORDS.map((kw, i) => (
              <span key={i} style={{ fontSize: 12, padding: "5px 12px", background: "white", border: "1px solid var(--gray-200)", borderRadius: 100, color: "var(--gray-700)" }}>
                {kw}
              </span>
            ))}
            {["near me","in Fremont CA","in Bay Area","in East Bay","accepting new patients","open Saturday","affordable","best rated","multilingual","Russian speaking","Chinese speaking","Taiwanese speaking","with financing","CareCredit accepted","Delta Dental provider","MetLife provider","Anthem Blue Cross","walk-in","same day appointment","Tufts trained"].map((kw, i) => (
              <span key={"mod-"+i} style={{ fontSize: 12, padding: "5px 12px", background: "var(--gold-light)", border: "1px solid rgba(201,168,76,0.3)", borderRadius: 100, color: "var(--gold)" }}>
                + {kw}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* City Pages Modal */}
      {showCityPages && selectedServiceForCities && (
        <div className="modal-overlay" onClick={() => setShowCityPages(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 640, maxHeight: "80vh", overflowY: "auto" }}>
            <button className="modal-close" onClick={() => setShowCityPages(false)}>×</button>
            <h2 style={{ fontSize: 20 }}>City Landing Pages: {selectedServiceForCities}</h2>
            <p style={{ fontSize: 13, color: "var(--gray-500)", marginBottom: 16 }}>
              {allCities.length} dedicated SEO pages for this service across all covered cities:
            </p>
            <div style={{ columns: 2, columnGap: 16 }}>
              {allCities.map((city, i) => (
                <div key={i} style={{ fontSize: 12, color: "var(--teal)", padding: "3px 0", breakInside: "avoid" }}>
                  {selectedServiceForCities} in {city}, CA
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// CITIES PAGE - Expanded for 100-mile radius
const CitiesPage = () => {
  const [activeRegion, setActiveRegion] = useState(null);
  const [citySearch, setCitySearch] = useState("");
  const allCities100 = Object.values(CITIES_100_MILE).flat();
  const filtered = citySearch ? allCities100.filter(c => c.toLowerCase().includes(citySearch.toLowerCase())) : [];

  return (
    <section className="section">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-badge">📍 100-Mile Service Radius</div>
          <h2 className="section-title">Serving {allCities100.length}+ Communities Across Northern California</h2>
          <p className="section-subtitle">Dr. Yvonne Chen, DMD, at Fremont Comprehensive Family Dentistry welcomes patients from every city within 100 miles. Each city has dedicated landing pages for all dental services.</p>
        </div>

        {/* Search */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <input
            className="form-input"
            placeholder="🔍 Find your city..."
            value={citySearch}
            onChange={(e) => setCitySearch(e.target.value)}
            style={{ maxWidth: 400, margin: "0 auto", textAlign: "center" }}
          />
          {citySearch && filtered.length > 0 && (
            <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
              {filtered.map((city, i) => (
                <span key={i} style={{ padding: "8px 16px", background: "var(--teal-light)", border: "1px solid var(--teal)", borderRadius: 10, fontSize: 14, fontWeight: 600, color: "var(--teal)" }}>
                  📍 Dentist in {city}, CA
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Region Grid */}
        <div className="cities-grid" style={{ columns: 3 }}>
          {Object.entries(CITIES_100_MILE).map(([region, cities]) => (
            <div className="city-county" key={region}>
              <h5 style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }} onClick={() => setActiveRegion(activeRegion === region ? null : region)}>
                <span>{region}</span>
                <span style={{ fontSize: 11, color: "var(--teal)", fontWeight: 400 }}>{cities.length} cities</span>
              </h5>
              {cities.map((city) => (
                <div key={city} style={{ marginBottom: 2 }}>
                  <span className="city-name" style={{ fontWeight: 500 }}>
                    Dentist in {city}, CA →
                  </span>
                  {activeRegion === region && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 2, marginLeft: 12, marginBottom: 6 }}>
                      {["Implants","All-on-4","Veneers","Emergency","Invisalign","Whitening"].map((svc, si) => (
                        <span key={si} style={{ fontSize: 9, padding: "1px 5px", background: "var(--gray-50)", border: "1px solid var(--gray-200)", borderRadius: 3, color: "var(--gray-500)" }}>
                          {svc} in {city}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div style={{ marginTop: 48, textAlign: "center" }}>
          <p style={{ fontSize: 15, color: "var(--gray-500)", maxWidth: 700, margin: "0 auto 20px" }}>
            Can't find your city? We welcome patients from anywhere in California! Patients travel from across the state for Dr. Chen's expertise in Fusion Dental Implants™ and comprehensive family dentistry.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <div className="powered-badge">⚡ Fusion Dental Implants™ — Worth the Drive</div>
            <span style={{ padding: "6px 14px", background: "var(--teal-light)", borderRadius: 8, fontSize: 12, fontWeight: 600, color: "var(--teal)" }}>
              🌐 fremontcomprehensivedentistry.com
            </span>
            <span style={{ padding: "6px 14px", background: "var(--teal-light)", borderRadius: 8, fontSize: 12, fontWeight: 600, color: "var(--teal)" }}>
              📞 (510) 795-1661
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

// SEO STRUCTURED DATA
const SEOHead = () => (
  <div style={{ display: "none" }} dangerouslySetInnerHTML={{
    __html: `
      <!-- SEO Meta Tags (would be in <head>) -->
      <!-- 
        <title>Dr. Yvonne Chen DMD | Fremont Comprehensive Family Dentistry | Dental Implants | Fusion Dental Implants</title>
        <meta name="description" content="Dr. Yvonne Chen DMD at Fremont Comprehensive Family Dentistry, 1895 Mowry Ave Ste 102, Fremont CA 94538. Dental implants, full arch All-on-4/All-on-6 powered by Fusion Dental Implants™. Cosmetic dentistry, oral surgery. Call (510) 795-1661.">
        <meta name="keywords" content="dentist Fremont CA, Dr Yvonne Chen DMD, Fremont Comprehensive Family Dentistry, dental implants Fremont, All-on-4 Fremont, full arch dental implants, Fusion Dental Implants, cosmetic dentistry Fremont, oral surgery Fremont, best dentist Bay Area, dental implants near me, same day dental implants, teeth in a day Fremont, sedation dentistry Fremont, emergency dentist Fremont, Invisalign Fremont, veneers Fremont, root canal Fremont, 1895 Mowry Ave Fremont">
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
        <meta property="og:title" content="Dr. Yvonne Chen DMD | Fremont Comprehensive Family Dentistry | #1 Rated Dentist Fremont CA">
        <meta property="og:description" content="World-class dental care powered by Fusion Dental Implants™. General dentistry, implants, cosmetic, and oral surgery at 1895 Mowry Ave, Fremont. Call (510) 795-1661.">
        <meta property="og:type" content="website">
        <meta property="og:url" content="https://www.fremontcomprehensivedentistry.com">
        <link rel="canonical" href="https://www.fremontcomprehensivedentistry.com">
        <link rel="alternate" href="https://www.yvonnechendmd.com">
        
        Schema.org Structured Data:
        {
          "@context": "https://schema.org",
          "@type": "Dentist",
          "name": "Dr. Yvonne Chen, DMD - Fremont Comprehensive Family Dentistry",
          "image": "https://www.fremontcomprehensivedentistry.com/dr-chen.jpg",
          "url": "https://www.fremontcomprehensivedentistry.com",
          "telephone": "(510) 795-1661",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1895 Mowry Ave, Ste 102",
            "addressLocality": "Fremont",
            "addressRegion": "CA",
            "postalCode": "94538",
            "addressCountry": "US"
          },
          "geo": { "@type": "GeoCoordinates", "latitude": 37.5485, "longitude": -121.9886 },
          "openingHoursSpecification": [
            { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "17:00" },
            { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "14:00" }
          ],
          "priceRange": "$$",
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.6", "reviewCount": "157" },
          "areaServed": { "@type": "GeoCircle", "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 37.5485, "longitude": -121.9886 }, "geoRadius": "321868" },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Dental Services",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full Arch Dental Implants - Powered by Fusion Dental Implants" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "All-on-4 Dental Implants" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Same-Day Dental Implants" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Comprehensive General Dentistry" } }
            ]
          }
        }
      -->
    `
  }} />
);

// ============================================================
// PRIORITY 1: BEFORE & AFTER GALLERY + FINANCING CALCULATOR
// ============================================================

const BeforeAfterGallery = () => {
  const [activeCase, setActiveCase] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  
  const cases = [
    { id: 0, title: "Full Arch Restoration — All-on-4 Fusion™", procedure: "All-on-4 Dental Implants", duration: "Same Day", desc: "Patient came in with failing upper teeth and ill-fitting dentures. Dr. Chen placed 4 Fusion Dental Implants™ with immediate loading — the patient walked out with a beautiful, permanent smile the same day.", tags: ["Fusion Dental Implants™","All-on-4","Full Arch","Same-Day Teeth"], beforeDesc: "Failing dentition, bone loss, loose dentures", afterDesc: "Permanent fixed zirconia bridge on 4 implants", rating: 5 },
    { id: 1, title: "Porcelain Veneer Smile Makeover", procedure: "10 Porcelain Veneers", duration: "2 Visits", desc: "Patient was self-conscious about discolored, uneven teeth. Dr. Chen designed and placed 10 ultra-thin porcelain veneers for a natural, radiant Hollywood smile.", tags: ["Porcelain Veneers","Smile Makeover","Cosmetic Dentistry"], beforeDesc: "Discolored, uneven, worn teeth", afterDesc: "10 porcelain veneers, natural white smile", rating: 5 },
    { id: 2, title: "Single Implant + Crown — Front Tooth", procedure: "Single Dental Implant", duration: "3 Months", desc: "Patient lost a front tooth due to trauma. Dr. Chen placed a single titanium implant with a custom porcelain crown that matches perfectly with surrounding natural teeth.", tags: ["Single Implant","Dental Crown","Tooth Replacement"], beforeDesc: "Missing front tooth from dental trauma", afterDesc: "Implant with custom porcelain crown", rating: 5 },
    { id: 3, title: "Invisalign Clear Aligner Treatment", procedure: "Invisalign", duration: "14 Months", desc: "Patient wanted straighter teeth without metal braces. Dr. Chen created a custom Invisalign plan that corrected crowding and bite issues with virtually invisible aligners.", tags: ["Invisalign","Clear Aligners","Orthodontics"], beforeDesc: "Crowded, overlapping front teeth", afterDesc: "Perfectly aligned smile, improved bite", rating: 5 },
    { id: 4, title: "Full Mouth Reconstruction", procedure: "Crowns + Implants + Veneers", duration: "6 Months", desc: "Comprehensive treatment combining dental implants for missing teeth, porcelain crowns for damaged teeth, and veneers for a complete transformation. Powered by Fusion Dental Implants™.", tags: ["Full Mouth Reconstruction","Fusion Dental Implants™","Crowns","Veneers"], beforeDesc: "Multiple missing/damaged teeth, severe wear", afterDesc: "Complete smile restoration, 28 teeth restored", rating: 5 },
    { id: 5, title: "Professional Teeth Whitening", procedure: "In-Office Whitening", duration: "1 Visit (90 min)", desc: "Patient wanted a brighter smile for their wedding. Dr. Chen performed professional in-office whitening achieving 8 shades whiter in a single visit.", tags: ["Teeth Whitening","Cosmetic","Same-Day"], beforeDesc: "Yellowed, stained teeth from coffee/wine", afterDesc: "8 shades whiter, bright natural smile", rating: 5 },
  ];

  const c = cases[activeCase];

  return (
    <section className="section" style={{ background: "var(--gray-50)" }}>
      <div className="section-inner">
        <div className="section-header">
          <div className="section-badge">📸 Smile Transformations</div>
          <h2 className="section-title">Before & After Gallery</h2>
          <p className="section-subtitle">Real results from real patients. See the transformative power of Dr. Chen's artistry and Fusion Dental Implants™ technology.</p>
        </div>

        {/* Case Selector */}
        <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginBottom: 32 }}>
          {cases.map((cs, i) => (
            <button key={i} onClick={() => { setActiveCase(i); setSliderPos(50); }} style={{ padding: "8px 16px", borderRadius: 100, fontSize: 12, fontWeight: activeCase === i ? 700 : 500, cursor: "pointer", border: activeCase === i ? "2px solid var(--teal)" : "1px solid var(--gray-200)", background: activeCase === i ? "var(--teal)" : "white", color: activeCase === i ? "white" : "var(--gray-700)", fontFamily: "var(--font-body)", transition: "all 0.2s" }}>
              {cs.procedure}
            </button>
          ))}
        </div>

        {/* Main Display */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "start" }}>
          {/* Before/After Slider */}
          <div style={{ background: "white", borderRadius: 20, overflow: "hidden", border: "1px solid var(--gray-200)" }}>
            <div style={{ position: "relative", height: 360, background: "linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)", overflow: "hidden" }}>
              {/* Before Side */}
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
                <div style={{ textAlign: "center", color: "white" }}>
                  <div style={{ fontSize: 64, marginBottom: 8 }}>😔</div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700 }}>BEFORE</div>
                  <div style={{ fontSize: 12, opacity: 0.6, marginTop: 4, maxWidth: 200 }}>{c.beforeDesc}</div>
                </div>
              </div>
              {/* After Side */}
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, var(--teal) 0%, #008F6B 100%)", clipPath: `inset(0 0 0 ${sliderPos}%)` }}>
                <div style={{ textAlign: "center", color: "white" }}>
                  <div style={{ fontSize: 64, marginBottom: 8 }}>😁</div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700 }}>AFTER</div>
                  <div style={{ fontSize: 12, opacity: 0.8, marginTop: 4, maxWidth: 200 }}>{c.afterDesc}</div>
                </div>
              </div>
              {/* Slider Line */}
              <div style={{ position: "absolute", top: 0, bottom: 0, left: `${sliderPos}%`, width: 3, background: "white", transform: "translateX(-50%)", zIndex: 10, boxShadow: "0 0 10px rgba(0,0,0,0.3)" }}>
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 36, height: 36, borderRadius: "50%", background: "white", boxShadow: "0 2px 10px rgba(0,0,0,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: "var(--navy)" }}>↔</div>
              </div>
            </div>
            {/* Slider Control */}
            <div style={{ padding: "16px 20px" }}>
              <input type="range" min="5" max="95" value={sliderPos} onChange={(e) => setSliderPos(Number(e.target.value))} style={{ width: "100%", accentColor: "var(--teal)" }} />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--gray-500)", marginTop: 4 }}>
                <span>◀ Drag to compare</span>
                <span>Before | After ▶</span>
              </div>
            </div>
          </div>

          {/* Case Details */}
          <div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "var(--navy)", marginBottom: 8 }}>{c.title}</h3>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
              {c.tags.map((tag, i) => (
                <span key={i} style={{ padding: "4px 10px", borderRadius: 100, fontSize: 11, fontWeight: 600, background: tag.includes("Fusion") ? "var(--gold-light)" : "var(--teal-light)", color: tag.includes("Fusion") ? "var(--gold)" : "var(--teal)", border: `1px solid ${tag.includes("Fusion") ? "rgba(201,168,76,0.3)" : "rgba(0,166,126,0.2)"}` }}>{tag}</span>
              ))}
            </div>
            <p style={{ fontSize: 15, color: "var(--gray-700)", lineHeight: 1.7, marginBottom: 20 }}>{c.desc}</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
              <div style={{ background: "var(--gray-50)", borderRadius: 10, padding: 14 }}>
                <div style={{ fontSize: 11, color: "var(--gray-500)", fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.5 }}>Procedure</div>
                <div style={{ fontSize: 15, fontWeight: 600, color: "var(--navy)", marginTop: 4 }}>{c.procedure}</div>
              </div>
              <div style={{ background: "var(--gray-50)", borderRadius: 10, padding: 14 }}>
                <div style={{ fontSize: 11, color: "var(--gray-500)", fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.5 }}>Treatment Time</div>
                <div style={{ fontSize: 15, fontWeight: 600, color: "var(--navy)", marginTop: 4 }}>{c.duration}</div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20, padding: 12, background: "white", borderRadius: 10, border: "1px solid var(--gray-200)" }}>
              <span style={{ color: "var(--gold)" }}>{"★".repeat(c.rating)}</span>
              <span style={{ fontSize: 13, color: "var(--gray-700)" }}>Patient rated 5/5 — verified on Zocdoc</span>
            </div>
            <button className="btn btn-primary" style={{ width: "100%" }}>Schedule Your Free Consultation →</button>
          </div>
        </div>
      </div>
    </section>
  );
};

// FINANCING CALCULATOR
const FinancingCalculator = ({ embedded = false }) => {
  const [amount, setAmount] = useState(18999);
  const [months, setMonths] = useState(24);
  const [downPayment, setDownPayment] = useState(0);

  const presets = [
    { label: "Single Implant", amount: 4000 },
    { label: "Veneers (6)", amount: 9000 },
    { label: "Invisalign", amount: 5500 },
    { label: "All-on-4 Fusion™", amount: 18999 },
    { label: "All-on-6 Fusion™", amount: 25000 },
    { label: "Full Mouth", amount: 35000 },
  ];

  const financed = Math.max(0, amount - downPayment);
  const monthly = financed > 0 ? Math.ceil(financed / months) : 0;
  const perDay = (monthly / 30).toFixed(2);

  const content = (
    <div style={{ background: embedded ? "transparent" : "white", borderRadius: embedded ? 0 : 20, padding: embedded ? 0 : 32, border: embedded ? "none" : "1px solid var(--gray-200)" }}>
      {!embedded && (
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div className="section-badge" style={{ display: "inline-flex" }}>💳 Payment Calculator</div>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: 28, color: "var(--navy)", marginTop: 8 }}>Affordable Monthly Payments</h3>
          <p style={{ fontSize: 14, color: "var(--gray-500)" }}>0% APR financing available with CareCredit • No hidden fees</p>
        </div>
      )}

      {/* Treatment Presets */}
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20, justifyContent: "center" }}>
        {presets.map((p) => (
          <button key={p.label} onClick={() => setAmount(p.amount)} style={{ padding: "6px 14px", borderRadius: 100, fontSize: 12, fontWeight: amount === p.amount ? 700 : 500, border: amount === p.amount ? "2px solid var(--teal)" : "1px solid var(--gray-200)", background: amount === p.amount ? "var(--teal-light)" : "white", color: amount === p.amount ? "var(--teal)" : "var(--gray-700)", cursor: "pointer", fontFamily: "var(--font-body)" }}>
            {p.label}
          </button>
        ))}
      </div>

      {/* Sliders */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, fontWeight: 600, marginBottom: 6 }}>
          <span>Treatment Cost</span>
          <span style={{ color: "var(--teal)", fontFamily: "var(--font-mono)" }}>${amount.toLocaleString()}</span>
        </div>
        <input type="range" min="500" max="60000" step="500" value={amount} onChange={(e) => setAmount(Number(e.target.value))} style={{ width: "100%", accentColor: "var(--teal)" }} />
      </div>
      <div style={{ marginBottom: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, fontWeight: 600, marginBottom: 6 }}>
          <span>Down Payment</span>
          <span style={{ color: "var(--navy)", fontFamily: "var(--font-mono)" }}>${downPayment.toLocaleString()}</span>
        </div>
        <input type="range" min="0" max={Math.floor(amount * 0.5)} step="500" value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))} style={{ width: "100%", accentColor: "var(--gold)" }} />
      </div>
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, fontWeight: 600, marginBottom: 6 }}>
          <span>Months</span>
          <span style={{ fontFamily: "var(--font-mono)" }}>{months} months</span>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          {[6, 12, 18, 24, 36, 48, 60].map((m) => (
            <button key={m} onClick={() => setMonths(m)} style={{ flex: 1, padding: "8px 0", borderRadius: 8, fontSize: 12, fontWeight: months === m ? 700 : 400, border: months === m ? "2px solid var(--teal)" : "1px solid var(--gray-200)", background: months === m ? "var(--teal)" : "white", color: months === m ? "white" : "var(--gray-700)", cursor: "pointer", fontFamily: "var(--font-body)" }}>
              {m}
            </button>
          ))}
        </div>
      </div>

      {/* Result */}
      <div style={{ background: "linear-gradient(135deg, var(--navy) 0%, #1A3A5C 100%)", borderRadius: 16, padding: 24, color: "white", textAlign: "center", marginBottom: 16 }}>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 4 }}>Your Estimated Monthly Payment</div>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 52, fontWeight: 700, color: "var(--teal)" }}>${monthly.toLocaleString()}</div>
        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>per month × {months} months = ${financed.toLocaleString()} financed</div>
        <div style={{ fontSize: 14, color: "var(--gold)", fontWeight: 600, marginTop: 8 }}>That's just ${perDay}/day — less than a cup of coffee!</div>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 16, fontSize: 11, color: "rgba(255,255,255,0.4)" }}>
          <span>✓ 0% APR Available</span>
          <span>✓ No Prepayment Penalty</span>
          <span>✓ Soft Credit Check</span>
        </div>
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        {[
          { name: "CareCredit", color: "#00A4BD" },
          { name: "Cherry", color: "#FF3B6B" },
          { name: "In-House Plan", color: "var(--teal)" },
        ].map((f) => (
          <div key={f.name} style={{ flex: 1, textAlign: "center", padding: 10, borderRadius: 8, border: "1px solid var(--gray-200)", fontSize: 12, fontWeight: 600, color: f.color, cursor: "pointer" }}>{f.name}</div>
        ))}
      </div>
    </div>
  );

  return embedded ? content : (
    <section className="section">
      <div className="section-inner" style={{ maxWidth: 640, margin: "0 auto" }}>
        {content}
      </div>
    </section>
  );
};

// ============================================================
// PRIORITY 2: BLOG / EDUCATION HUB + FAQ SCHEMA
// ============================================================

const BlogHub = () => {
  const [activeCat, setActiveCat] = useState("all");
  const articles = [
    { title: "All-on-4 vs. Traditional Dentures: Which Is Right for You?", category: "implants", readTime: "8 min", date: "Mar 2026", excerpt: "Compare the long-term benefits, costs, and lifestyle impact of All-on-4 dental implants powered by Fusion™ versus removable dentures. Learn why more patients are choosing permanent solutions.", featured: true, tags: ["All-on-4","Dentures","Fusion Implants","Comparison"] },
    { title: "What to Expect During a Root Canal: A Patient's Guide", category: "general", readTime: "5 min", date: "Feb 2026", excerpt: "Root canals have a bad reputation — but modern root canal therapy at our Fremont office is virtually painless. Here's exactly what happens step by step.", tags: ["Root Canal","Pain-Free","Patient Guide"] },
    { title: "How Fusion Dental Implants™ Are Changing Full-Arch Restoration", category: "implants", readTime: "10 min", date: "Feb 2026", excerpt: "Discover why Fusion Dental Implants™ achieve a 99.2% osseointegration rate and how Dr. Chen uses this technology for same-day full arch restorations.", featured: true, tags: ["Fusion Implants","Technology","Innovation"] },
    { title: "Invisalign for Adults: Is It Too Late to Straighten My Teeth?", category: "cosmetic", readTime: "6 min", date: "Jan 2026", excerpt: "It's never too late! More adults than ever are choosing Invisalign clear aligners. Learn about treatment timelines, costs, and what to expect at our Fremont practice.", tags: ["Invisalign","Adult Orthodontics","Clear Aligners"] },
    { title: "5 Signs You May Need Emergency Dental Care", category: "emergency", readTime: "4 min", date: "Jan 2026", excerpt: "Severe toothache, swelling, knocked-out tooth — know when to call Dr. Chen for same-day emergency dental treatment in Fremont.", tags: ["Emergency","Toothache","Urgent Care"] },
    { title: "The Complete Guide to Dental Implant Costs in the Bay Area", category: "implants", readTime: "12 min", date: "Dec 2025", excerpt: "Transparent pricing guide for single implants, All-on-4, and All-on-6 procedures in the San Francisco Bay Area. Includes financing options and insurance coverage details.", tags: ["Costs","Pricing","Financing","Bay Area"] },
    { title: "How to Overcome Dental Anxiety: Dr. Chen's Approach", category: "general", readTime: "6 min", date: "Dec 2025", excerpt: "If dental anxiety keeps you from getting care, you're not alone. Learn about Dr. Chen's proven anxiety-management techniques including sedation options.", tags: ["Dental Anxiety","Sedation","Comfort"] },
    { title: "Porcelain Veneers vs. Dental Bonding: Making the Right Choice", category: "cosmetic", readTime: "7 min", date: "Nov 2025", excerpt: "Both can transform your smile, but which is right for your situation? Compare durability, cost, appearance, and treatment time for veneers and bonding.", tags: ["Veneers","Bonding","Cosmetic","Comparison"] },
    { title: "Why Dr. Chen Speaks 5 Languages — And Why It Matters", category: "general", readTime: "3 min", date: "Nov 2025", excerpt: "In diverse Fremont, clear communication is essential for great dental care. Learn about Dr. Chen's multilingual practice serving English, Russian, Chinese, and Taiwanese-speaking patients.", tags: ["Multilingual","Community","Fremont"] },
  ];

  const categories = [
    ["all", "All Articles"],
    ["implants", "Dental Implants"],
    ["cosmetic", "Cosmetic"],
    ["general", "General Dentistry"],
    ["emergency", "Emergency Care"],
  ];

  const filtered = activeCat === "all" ? articles : articles.filter(a => a.category === activeCat);

  return (
    <section className="section" id="blog">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-badge">📚 Dental Education</div>
          <h2 className="section-title">Patient Education & Blog</h2>
          <p className="section-subtitle">Expert insights from Dr. Yvonne Chen, DMD — empowering patients with knowledge for better oral health decisions.</p>
        </div>

        <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginBottom: 32 }}>
          {categories.map(([key, label]) => (
            <button key={key} className={`service-tab ${activeCat === key ? "active" : ""}`} onClick={() => setActiveCat(key)}>{label}</button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}>
          {filtered.map((article, i) => (
            <div key={i} style={{ background: "white", border: "1px solid var(--gray-200)", borderRadius: 16, overflow: "hidden", cursor: "pointer", transition: "all 0.3s" }}
              onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.08)"; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ height: 8, background: article.featured ? "linear-gradient(90deg, var(--teal) 0%, var(--gold) 100%)" : "var(--gray-200)" }} />
              <div style={{ padding: 24 }}>
                {article.featured && <span style={{ fontSize: 10, fontWeight: 800, color: "var(--gold)", letterSpacing: 1, textTransform: "uppercase" }}>⭐ FEATURED</span>}
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "var(--navy)", marginTop: 6, marginBottom: 8, lineHeight: 1.3 }}>{article.title}</h3>
                <p style={{ fontSize: 13, color: "var(--gray-500)", lineHeight: 1.6, marginBottom: 12 }}>{article.excerpt}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 12 }}>
                  {article.tags.map((tag, ti) => (
                    <span key={ti} style={{ fontSize: 10, padding: "2px 8px", background: "var(--gray-50)", borderRadius: 100, color: "var(--gray-500)" }}>{tag}</span>
                  ))}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 12, color: "var(--gray-500)" }}>📅 {article.date} • ⏱ {article.readTime} read</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "var(--teal)" }}>Read →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ SECTION WITH SCHEMA
const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const faqs = [
    { q: "How much do dental implants cost at your Fremont practice?", a: "Single dental implants range from $3,000-$5,000. Full arch All-on-4 restoration with Fusion Dental Implants™ starts at $18,999 per arch. We offer free implant consultations including a 3D CT scan ($500 value), plus 0% CareCredit financing for 12-24 months. Every patient receives a personalized treatment plan with exact pricing." },
    { q: "What are Fusion Dental Implants™ and why are they better?", a: "Fusion Dental Implants™ are a next-generation implant system featuring precision-engineered Grade V titanium with a proprietary surface treatment that achieves 99.2% osseointegration. They allow for immediate loading (same-day teeth), come with a lifetime warranty, and use 3D CBCT-guided surgery for sub-millimeter accuracy. Dr. Chen is one of select certified providers in Northern California." },
    { q: "Does Dr. Chen accept my dental insurance?", a: "We accept most major insurance plans including Delta Dental (PPO & Premier), MetLife, Anthem Blue Cross, Cigna, Aetna, Guardian, and United Healthcare. We also accept CareCredit with 0% financing. Call (510) 795-1661 and our team will verify your benefits before your visit." },
    { q: "What languages does Dr. Chen speak?", a: "Dr. Chen and her staff speak English, Russian, Chinese (Mandarin), and Taiwanese. Select staff members also speak Spanish. We're committed to serving Fremont's diverse community with care in your preferred language." },
    { q: "Do you offer sedation for dental anxiety?", a: "Absolutely! Dr. Chen offers nitrous oxide (laughing gas), oral sedation, and options for patients with severe dental anxiety. Many patients say Dr. Chen's gentle approach and anxiety-management techniques have transformed their feelings about dental visits. She takes time to understand your fears and creates a personalized comfort plan." },
    { q: "Can I get teeth in one day with All-on-4?", a: "Yes! With our same-day teeth protocol powered by Fusion Dental Implants™, you can walk in with missing or failing teeth and walk out with a brand-new, permanent smile the same day. Dr. Chen uses 3D digital planning to create your new teeth before surgery, ensuring a perfect fit and beautiful result." },
    { q: "What's included in a new patient exam?", a: "Your comprehensive new patient exam includes: a thorough oral examination, digital X-rays, panoramic imaging, oral cancer screening, periodontal assessment, and a personalized treatment plan discussion with Dr. Chen. She takes time to explain everything and answer all your questions." },
    { q: "How do I schedule an emergency dental appointment?", a: "Call us immediately at (510) 795-1661 — we offer same-day emergency appointments for severe pain, dental trauma, infection, lost fillings/crowns, and broken teeth. After hours, leave a voicemail and Dr. Chen monitors emergency messages. If a tooth is knocked out, place it in milk and come in right away." },
    { q: "Where are you located and what are your hours?", a: "We're at 1895 Mowry Ave, Suite 102, Fremont, CA 94538 — in the Mowry Medical Plaza near Washington Hospital. Hours: Tuesday through Friday, 9:00 AM - 5:00 PM. Saturday by appointment. Easy access from I-880 (Mowry Ave exit) with free parking." },
    { q: "What is Dr. Chen's background and education?", a: "Dr. Yvonne Chen earned her DMD from Tufts University School of Dental Medicine. She previously worked at Harvard University's cell biology department and graduated cum laude from Clark University. She has 20+ years of experience, is a member of the ADA, CDA, and South Alameda Dental Association, and has completed humanitarian dental missions in Asia and South America." },
  ];

  return (
    <section className="section" style={{ background: "var(--gray-50)" }}>
      <div className="section-inner" style={{ maxWidth: 800, margin: "0 auto" }}>
        <div className="section-header">
          <div className="section-badge">❓ Common Questions</div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Quick answers to the questions we hear most from patients.</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ background: "white", border: "1px solid var(--gray-200)", borderRadius: 12, overflow: "hidden" }}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 20px", background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-body)", textAlign: "left" }}>
                <span style={{ fontWeight: 600, fontSize: 15, color: "var(--navy)", paddingRight: 16 }}>{faq.q}</span>
                <span style={{ fontSize: 18, color: "var(--teal)", transform: openFaq === i ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s", flexShrink: 0 }}>▼</span>
              </button>
              {openFaq === i && (
                <div style={{ padding: "0 20px 16px", fontSize: 14, color: "var(--gray-700)", lineHeight: 1.7 }}>{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================
// PRIORITY 3: SMART SCHEDULER + OFFICE TOUR
// ============================================================

const SmartScheduler = ({ onClose }) => {
  const [step, setStep] = useState(0);
  const [booking, setBooking] = useState({ service: "", date: "", time: "", name: "", phone: "", email: "" });
  const [confirmed, setConfirmed] = useState(false);

  const serviceGroups = [
    { label: "🦷 General & Preventive", items: ["Cleaning & Exam","Dental Filling","Root Canal","Tooth Extraction","Dental Crown"] },
    { label: "😁 Cosmetic", items: ["Porcelain Veneers","Teeth Whitening","Invisalign Consultation","Smile Makeover","Dental Bonding"] },
    { label: "🔩 Dental Implants", items: ["Single Implant Consultation","All-on-4 Fusion™ Consultation","All-on-6 Fusion™ Consultation","Same-Day Teeth Consultation","Implant Second Opinion"] },
    { label: "🆘 Urgent", items: ["Emergency Toothache","Broken Tooth","Lost Crown/Filling","Dental Trauma","Abscess/Swelling"] },
  ];

  // Generate available dates (next 14 business days)
  const getAvailDates = () => {
    const dates = [];
    const d = new Date();
    while (dates.length < 14) {
      d.setDate(d.getDate() + 1);
      const dow = d.getDay();
      if (dow >= 2 && dow <= 5) { // Tue-Fri
        dates.push({ date: new Date(d), label: d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }), full: d.toISOString().split("T")[0] });
      }
    }
    return dates;
  };

  const times = ["9:00 AM","9:30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM","1:00 PM","1:30 PM","2:00 PM","2:30 PM","3:00 PM","3:30 PM","4:00 PM"];
  const availDates = getAvailDates();

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 560, maxHeight: "90vh", overflowY: "auto" }}>
        <button className="modal-close" onClick={onClose}>×</button>
        {confirmed ? (
          <div style={{ textAlign: "center", padding: 20 }}>
            <div style={{ fontSize: 56, marginBottom: 12 }}>✅</div>
            <h2 style={{ color: "var(--navy)" }}>Appointment Requested!</h2>
            <div style={{ background: "var(--teal-light)", borderRadius: 12, padding: 16, margin: "16px 0", textAlign: "left" }}>
              <div style={{ fontSize: 13, color: "var(--gray-700)" }}><strong>Service:</strong> {booking.service}</div>
              <div style={{ fontSize: 13, color: "var(--gray-700)" }}><strong>Date:</strong> {booking.date}</div>
              <div style={{ fontSize: 13, color: "var(--gray-700)" }}><strong>Time:</strong> {booking.time}</div>
              <div style={{ fontSize: 13, color: "var(--gray-700)" }}><strong>Patient:</strong> {booking.name}</div>
            </div>
            <p style={{ fontSize: 13, color: "var(--gray-500)" }}>We'll call you at {booking.phone} to confirm within 2 hours.</p>
            <button className="btn btn-primary" style={{ marginTop: 16 }} onClick={onClose}>Done</button>
          </div>
        ) : (
          <>
            <h2 style={{ fontSize: 20, marginBottom: 4 }}>📅 Smart Scheduler</h2>
            <p style={{ fontSize: 13, color: "var(--gray-500)", marginBottom: 16 }}>Book in 3 easy steps • Confirmation within 2 hours</p>
            {/* Progress */}
            <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
              {["Service","Date & Time","Your Info"].map((s, i) => (
                <div key={i} style={{ flex: 1, textAlign: "center" }}>
                  <div style={{ height: 4, borderRadius: 2, background: i <= step ? "var(--teal)" : "var(--gray-200)", transition: "background 0.3s", marginBottom: 4 }} />
                  <span style={{ fontSize: 11, color: i <= step ? "var(--teal)" : "var(--gray-500)", fontWeight: i === step ? 700 : 400 }}>{s}</span>
                </div>
              ))}
            </div>

            {step === 0 && (
              <div>
                {serviceGroups.map((group, gi) => (
                  <div key={gi} style={{ marginBottom: 12 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "var(--navy)", marginBottom: 6 }}>{group.label}</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {group.items.map((item) => (
                        <button key={item} onClick={() => { setBooking({...booking, service: item}); setStep(1); }} style={{ padding: "8px 14px", borderRadius: 8, fontSize: 12, border: "1px solid var(--gray-200)", background: "white", cursor: "pointer", fontFamily: "var(--font-body)", transition: "all 0.15s" }}
                          onMouseOver={(e) => { e.target.style.borderColor = "var(--teal)"; e.target.style.color = "var(--teal)"; }}
                          onMouseOut={(e) => { e.target.style.borderColor = "var(--gray-200)"; e.target.style.color = "inherit"; }}
                        >{item}</button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {step === 1 && (
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8 }}>Select a Date:</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))", gap: 6, marginBottom: 16 }}>
                  {availDates.slice(0, 10).map((d) => (
                    <button key={d.full} onClick={() => setBooking({...booking, date: d.label})} style={{ padding: "10px 8px", borderRadius: 8, fontSize: 12, textAlign: "center", border: booking.date === d.label ? "2px solid var(--teal)" : "1px solid var(--gray-200)", background: booking.date === d.label ? "var(--teal-light)" : "white", cursor: "pointer", fontFamily: "var(--font-body)", fontWeight: booking.date === d.label ? 700 : 400 }}>
                      {d.label}
                    </button>
                  ))}
                </div>
                {booking.date && (
                  <>
                    <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8 }}>Select a Time:</div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))", gap: 6, marginBottom: 16 }}>
                      {times.map((t) => (
                        <button key={t} onClick={() => { setBooking({...booking, time: t}); setStep(2); }} style={{ padding: "8px", borderRadius: 8, fontSize: 12, textAlign: "center", border: "1px solid var(--gray-200)", background: "white", cursor: "pointer", fontFamily: "var(--font-body)" }}
                          onMouseOver={(e) => { e.target.style.borderColor = "var(--teal)"; e.target.style.background = "var(--teal-light)"; }}
                          onMouseOut={(e) => { e.target.style.borderColor = "var(--gray-200)"; e.target.style.background = "white"; }}
                        >{t}</button>
                      ))}
                    </div>
                  </>
                )}
                <button className="btn btn-sm" style={{ background: "var(--gray-100)", color: "var(--gray-700)" }} onClick={() => setStep(0)}>← Back</button>
              </div>
            )}

            {step === 2 && (
              <div>
                <div style={{ background: "var(--teal-light)", borderRadius: 10, padding: 12, marginBottom: 16, fontSize: 13 }}>
                  <strong>{booking.service}</strong> — {booking.date} at {booking.time}
                </div>
                {[["name","Full Name","text"],["phone","Phone Number","tel"],["email","Email","email"]].map(([k,l,t]) => (
                  <div className="form-group" key={k}>
                    <label className="form-label">{l}</label>
                    <input className="form-input" type={t} value={booking[k]} onChange={(e) => setBooking({...booking, [k]: e.target.value})} />
                  </div>
                ))}
                <div style={{ display: "flex", gap: 8 }}>
                  <button className="btn btn-sm" style={{ background: "var(--gray-100)", color: "var(--gray-700)" }} onClick={() => setStep(1)}>← Back</button>
                  <button className="btn btn-primary" style={{ flex: 1, justifyContent: "center" }} onClick={() => setConfirmed(true)}>Confirm Appointment →</button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

// OFFICE TOUR
const OfficeTour = () => {
  const [activeRoom, setActiveRoom] = useState(0);
  const rooms = [
    { name: "Reception & Waiting Area", icon: "🏢", desc: "Modern, welcoming reception with comfortable seating, complimentary beverages, and a calming atmosphere. Our multilingual front desk team greets you in English, Russian, Chinese, or Taiwanese.", features: ["Complimentary Wi-Fi","Beverage station","Paperless check-in iPads","Calming ambiance"] },
    { name: "Digital Imaging Suite", icon: "📸", desc: "State-of-the-art 3D Cone Beam CT scanner, panoramic X-ray, and intraoral cameras. All-digital imaging means faster diagnosis, lower radiation, and instant results on chairside monitors.", features: ["3D CBCT Scanner","Digital Panoramic X-Ray","Intraoral Cameras","Low-Radiation Digital Sensors"] },
    { name: "Treatment Rooms", icon: "🦷", desc: "Spacious, private treatment rooms equipped with massaging dental chairs, flat-panel monitors showing your X-rays, and the latest dental instruments. Each room is designed for maximum patient comfort.", features: ["Massaging dental chairs","Chairside flat-panel monitors","Noise-canceling headphones available","Aromatherapy option"] },
    { name: "Implant Surgery Suite", icon: "⚡", desc: "Dedicated surgical suite for dental implant procedures. Equipped for Fusion Dental Implants™ placement with guided surgery technology and all necessary bone grafting and PRP equipment.", features: ["Guided implant surgery system","Fusion Dental Implants™ certified","PRP/PRF centrifuge","Sterile surgical environment"] },
    { name: "Sterilization Center", icon: "🧪", desc: "Hospital-grade sterilization center exceeding OSHA and CDC standards. All instruments undergo multi-step sterilization with autoclave validation and biological monitoring.", features: ["Hospital-grade autoclave","Biological spore testing","Multi-step sterilization","CDC/OSHA compliant"] },
    { name: "Consultation Room", icon: "💬", desc: "Private consultation room where Dr. Chen reviews your 3D scans, discusses treatment options, and creates your personalized care plan. No rush — she takes time to answer every question.", features: ["Private & comfortable","Large display for imaging review","Treatment plan presentation","Financial options discussion"] },
  ];

  const r = rooms[activeRoom];

  return (
    <section className="section">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-badge">🏥 Virtual Office Tour</div>
          <h2 className="section-title">Explore Our Modern Fremont Office</h2>
          <p className="section-subtitle">Take a virtual walk through our state-of-the-art dental facility at 1895 Mowry Ave, Suite 102.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 24 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {rooms.map((room, i) => (
              <button key={i} onClick={() => setActiveRoom(i)} style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 14px", borderRadius: 10, border: activeRoom === i ? "2px solid var(--teal)" : "1px solid var(--gray-200)", background: activeRoom === i ? "var(--teal-light)" : "white", cursor: "pointer", textAlign: "left", fontFamily: "var(--font-body)", transition: "all 0.2s" }}>
                <span style={{ fontSize: 20 }}>{room.icon}</span>
                <span style={{ fontSize: 13, fontWeight: activeRoom === i ? 700 : 500, color: activeRoom === i ? "var(--teal)" : "var(--gray-700)" }}>{room.name}</span>
              </button>
            ))}
          </div>
          <div style={{ background: "white", borderRadius: 20, border: "1px solid var(--gray-200)", overflow: "hidden" }}>
            <div style={{ height: 280, background: `linear-gradient(135deg, ${activeRoom % 2 === 0 ? "var(--teal-light)" : "#E8F0FE"} 0%, ${activeRoom % 2 === 0 ? "#e0f0ff" : "var(--teal-light)"} 100%)`, display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.5s" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 72, marginBottom: 8 }}>{r.icon}</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 22, color: "var(--navy)" }}>{r.name}</div>
              </div>
            </div>
            <div style={{ padding: 28 }}>
              <p style={{ fontSize: 15, color: "var(--gray-700)", lineHeight: 1.7, marginBottom: 20 }}>{r.desc}</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {r.features.map((f, fi) => (
                  <div key={fi} style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 13, color: "var(--gray-700)" }}>
                    <span style={{ color: "var(--teal)", fontWeight: 700 }}>✓</span>{f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================
// PRIORITY 4: MULTILINGUAL TOGGLE + REFERRAL PROGRAM
// ============================================================

const TRANSLATIONS = {
  en: { welcome: "Welcome", bookNow: "Book Now", callUs: "Call Us", services: "Our Services", about: "About Dr. Chen", reviews: "Patient Reviews", emergency: "Emergency? Call Now", lang: "English" },
  zh: { welcome: "欢迎", bookNow: "立即预约", callUs: "联系我们", services: "我们的服务", about: "关于陈医生", reviews: "患者评价", emergency: "紧急情况？立即致电", lang: "中文" },
  ru: { welcome: "Добро пожаловать", bookNow: "Записаться", callUs: "Позвоните нам", services: "Наши услуги", about: "О докторе Чен", reviews: "Отзывы пациентов", emergency: "Экстренная помощь? Звоните", lang: "Русский" },
  tw: { welcome: "歡迎", bookNow: "立即預約", callUs: "聯繫我們", services: "我們的服務", about: "關於陳醫生", reviews: "患者評價", emergency: "緊急情況？立即致電", lang: "台語/繁體" },
};

const LanguageBar = ({ lang, setLang }) => (
  <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
    {[
      ["en", "🇺🇸", "EN"],
      ["zh", "🇨🇳", "中文"],
      ["ru", "🇷🇺", "RU"],
      ["tw", "🇹🇼", "繁體"],
    ].map(([code, flag, label]) => (
      <button key={code} onClick={() => setLang(code)} style={{ padding: "3px 8px", borderRadius: 6, fontSize: 11, border: lang === code ? "1px solid var(--teal)" : "1px solid transparent", background: lang === code ? "var(--teal-light)" : "transparent", color: lang === code ? "var(--teal)" : "rgba(255,255,255,0.6)", cursor: "pointer", fontFamily: "var(--font-body)", fontWeight: lang === code ? 700 : 400, display: "flex", alignItems: "center", gap: 3 }}>
        {flag} {label}
      </button>
    ))}
  </div>
);

// REFERRAL PROGRAM
const ReferralProgram = () => {
  const [form, setForm] = useState({ referrerName: "", referrerPhone: "", friendName: "", friendPhone: "", friendEmail: "" });
  const [sent, setSent] = useState(false);

  return (
    <section className="section" style={{ background: "linear-gradient(135deg, #FDF6E3 0%, #FFFBF0 100%)" }}>
      <div className="section-inner" style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)", padding: "6px 16px", borderRadius: 100, fontSize: 12, fontWeight: 700, color: "var(--gold)", letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>🎁 Refer & Earn</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 32, color: "var(--navy)", marginBottom: 12 }}>Share Your Smile, Earn Rewards</h2>
            <p style={{ fontSize: 15, color: "var(--gray-500)", lineHeight: 1.7, marginBottom: 20 }}>
              Love your experience at Fremont Comprehensive Family Dentistry? Refer a friend or family member and you'll both receive a reward!
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { icon: "🎉", title: "You Get: $50 Credit", desc: "Applied to your next treatment or cleaning" },
                { icon: "🎁", title: "They Get: Free Exam", desc: "Complimentary new patient exam + X-rays ($250 value)" },
                { icon: "⚡", title: "Implant Bonus: $200", desc: "Extra $200 credit when your referral starts implant treatment" },
              ].map((reward, i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: "white", border: "1px solid var(--gray-200)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{reward.icon}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "var(--navy)" }}>{reward.title}</div>
                    <div style={{ fontSize: 13, color: "var(--gray-500)" }}>{reward.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: "white", borderRadius: 20, padding: 28, boxShadow: "0 8px 30px rgba(0,0,0,0.06)", border: "1px solid var(--gray-200)" }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: 16 }}>
                <div style={{ fontSize: 48, marginBottom: 12 }}>🎉</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, color: "var(--navy)", marginBottom: 8 }}>Referral Sent!</h3>
                <p style={{ fontSize: 13, color: "var(--gray-500)" }}>We'll reach out to your friend and credit your account once they schedule. Thank you!</p>
              </div>
            ) : (
              <>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "var(--navy)", marginBottom: 16, textAlign: "center" }}>Refer a Friend</h3>
                <div style={{ fontSize: 12, fontWeight: 700, color: "var(--gray-500)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Your Info</div>
                {[["referrerName","Your Name","text"],["referrerPhone","Your Phone","tel"]].map(([k,l,t]) => (
                  <div className="form-group" key={k}>
                    <input className="form-input" type={t} placeholder={l} value={form[k]} onChange={(e) => setForm({...form,[k]:e.target.value})} />
                  </div>
                ))}
                <div style={{ fontSize: 12, fontWeight: 700, color: "var(--gray-500)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8, marginTop: 12 }}>Friend's Info</div>
                {[["friendName","Friend's Name","text"],["friendPhone","Friend's Phone","tel"],["friendEmail","Friend's Email","email"]].map(([k,l,t]) => (
                  <div className="form-group" key={k}>
                    <input className="form-input" type={t} placeholder={l} value={form[k]} onChange={(e) => setForm({...form,[k]:e.target.value})} />
                  </div>
                ))}
                <button className="btn btn-gold" style={{ width: "100%", justifyContent: "center" }} onClick={() => setSent(true)}>
                  Send Referral 🎁
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================
// AI-POWERED FEATURES — Modern Dental Website 2026
// ============================================================

// AI DENTAL CHATBOT
const AIChatbot = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { role: "bot", text: "👋 Hi! I'm Dr. Chen's AI Dental Assistant. I can help you with scheduling, treatment questions, insurance, or anything about our practice. How can I help you today?", time: "now" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef(null);

  const quickReplies = [
    "📅 Book an appointment",
    "🦷 I have a toothache",
    "💰 Treatment costs",
    "🔩 Dental implant info",
    "⚡ Fusion Implants™",
    "🏥 Insurance accepted?",
    "📍 Directions to office",
    "⏰ Office hours",
    "🆘 Emergency dental care",
    "🌐 Languages spoken",
  ];

  const botResponses = {
    "book": "I'd love to help you schedule! Dr. Chen is available Tue-Fri, 9AM-5PM. You can:\n\n📞 Call us: (510) 795-1661\n📋 Book on Zocdoc: zocdoc.com/dentist/yvonne-chen-dmd-55964\n\nOr tell me your preferred day and I'll check availability!",
    "toothache": "I'm sorry you're in pain! Here's what I recommend:\n\n🔴 If SEVERE (swelling, fever, can't eat): Call us immediately at (510) 795-1661 — we offer same-day emergency care.\n\n🟡 If MODERATE (constant ache): Schedule within 24-48 hours. This could indicate a cavity, cracked tooth, or infection.\n\n🟢 If MILD (occasional sensitivity): Schedule a comprehensive exam. Could be early decay, grinding, or sensitivity.\n\nWould you like me to help you schedule an emergency visit?",
    "cost": "Here are our approximate treatment ranges:\n\n🦷 Cleaning & Exam: $150-$250\n👑 Dental Crown: $900-$1,500\n🔬 Root Canal: $700-$1,200\n💎 Porcelain Veneers: $1,000-$2,000/tooth\n⚡ Single Implant: $3,000-$5,000\n🏗️ All-on-4 (Fusion™): From $18,999/arch\n🔲 Invisalign: $4,000-$7,000\n\n💳 We accept CareCredit, MetLife, Delta Dental, Anthem Blue Cross, and offer 0% financing!\n\nWant a personalized estimate? Schedule a free consultation!",
    "implant": "Dr. Chen is a certified Fusion Dental Implants™ provider with 20+ years of experience! Our implant options:\n\n🔩 Single Tooth Implant — replace one missing tooth permanently\n🏗️ All-on-4 Full Arch — complete smile on 4 implants\n🏛️ All-on-6 Full Arch — maximum stability with 6 implants\n⏱️ Same-Day Teeth — walk in, walk out with new teeth!\n\nAll implant consultations include a FREE 3D CT Scan ($500 value).\n\nReady to schedule your free implant consultation?",
    "fusion": "⚡ Fusion Dental Implants™ represent the cutting edge of implant technology:\n\n✅ 99.2% osseointegration rate\n✅ Precision-engineered Grade V titanium\n✅ 3D CBCT-guided surgical planning\n✅ Immediate loading protocol (teeth same day!)\n✅ Zirconia hybrid prosthetics\n✅ Lifetime warranty included\n\nDr. Chen is one of select certified Fusion providers in Northern California. Starting from $18,999/arch with 0% financing available.\n\nSchedule your FREE Fusion consultation today!",
    "insurance": "We accept most major insurance plans including:\n\n✅ Delta Dental (PPO & Premier)\n✅ MetLife\n✅ Anthem Blue Cross\n✅ Cigna\n✅ Aetna\n✅ Guardian\n✅ United Healthcare\n✅ And many more!\n\n💳 We also accept CareCredit with 0% financing for 12-24 months.\n\nNot sure if we take yours? Call (510) 795-1661 and we'll verify for you!",
    "direction": "📍 We're located at:\n\n1895 Mowry Ave, Suite 102\nFremont, CA 94538\n\n🚗 Easy access from I-880 (Mowry Ave exit)\n🅿️ Free parking available\n\nWe're in the Mowry Medical Plaza near Washington Hospital. Look for Suite 102 on the first floor!\n\nNeed turn-by-turn directions? Search 'Fremont Comprehensive Family Dentistry' on Google Maps.",
    "hours": "⏰ Our office hours:\n\nMon: Closed\nTue: 9:00 AM – 5:00 PM\nWed: 9:00 AM – 5:00 PM\nThu: 9:00 AM – 5:00 PM\nFri: 9:00 AM – 5:00 PM\nSat: By appointment\nSun: Closed\n\n📞 Call anytime: (510) 795-1661\nFor after-hours emergencies, leave a voicemail and we'll call back ASAP!",
    "emergency": "🆘 Dental Emergency? Here's what to do:\n\n📞 CALL NOW: (510) 795-1661\n\nWe offer same-day emergency appointments for:\n• Severe toothache / dental abscess\n• Knocked-out or broken tooth\n• Lost filling or crown\n• Swelling or infection\n• Dental trauma\n\n🕐 If after hours: Leave a voicemail with your name and number — Dr. Chen monitors emergency messages.\n\n💡 Tip: If a tooth is knocked out, place it in milk and come in immediately!",
    "language": "🌐 Dr. Chen and our team speak:\n\n🇺🇸 English\n🇷🇺 Russian\n🇨🇳 Chinese (Mandarin)\n🇹🇼 Taiwanese\n🇪🇸 Spanish (select staff)\n\nWe serve Fremont's diverse community with care in your preferred language. Just let us know when you call or book!",
  };

  const getResponse = (text) => {
    const lower = text.toLowerCase();
    if (lower.includes("book") || lower.includes("appoint") || lower.includes("schedule")) return botResponses.book;
    if (lower.includes("tooth") || lower.includes("pain") || lower.includes("hurt") || lower.includes("ache")) return botResponses.toothache;
    if (lower.includes("cost") || lower.includes("price") || lower.includes("much") || lower.includes("fee") || lower.includes("afford")) return botResponses.cost;
    if (lower.includes("fusion")) return botResponses.fusion;
    if (lower.includes("implant") || lower.includes("all-on") || lower.includes("allon")) return botResponses.implant;
    if (lower.includes("insur") || lower.includes("delta") || lower.includes("metlife") || lower.includes("pay")) return botResponses.insurance;
    if (lower.includes("direction") || lower.includes("where") || lower.includes("address") || lower.includes("locat") || lower.includes("find")) return botResponses.direction;
    if (lower.includes("hour") || lower.includes("open") || lower.includes("close") || lower.includes("when")) return botResponses.hours;
    if (lower.includes("emergency") || lower.includes("urgent") || lower.includes("broken") || lower.includes("knocked")) return botResponses.emergency;
    if (lower.includes("language") || lower.includes("speak") || lower.includes("russian") || lower.includes("chinese") || lower.includes("mandarin")) return botResponses.language;
    if (lower.includes("hi") || lower.includes("hello") || lower.includes("hey")) return "Hello! 😊 Welcome to Fremont Comprehensive Family Dentistry! I'm here to help with scheduling, treatment info, insurance questions, or anything else. What can I do for you?";
    if (lower.includes("thank")) return "You're welcome! 😊 Is there anything else I can help with? Remember, you can always call us at (510) 795-1661 or book online through Zocdoc!";
    return "Great question! For the most accurate answer, I'd recommend:\n\n📞 Call us: (510) 795-1661\n📋 Book on Zocdoc for a consultation\n\nOr ask me about: appointments, treatment costs, dental implants, Fusion Implants™, insurance, emergencies, directions, or office hours!";
  };

  const sendMessage = (text) => {
    const msg = text || input;
    if (!msg.trim()) return;
    setMessages(prev => [...prev, { role: "user", text: msg, time: "now" }]);
    setInput("");
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { role: "bot", text: getResponse(msg), time: "now" }]);
      setIsTyping(false);
    }, 800 + Math.random() * 700);
  };

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages, isTyping]);

  return (
    <div style={{ position: "fixed", bottom: 24, right: 24, width: 400, maxWidth: "calc(100vw - 48px)", height: 600, maxHeight: "calc(100vh - 100px)", background: "white", borderRadius: 20, boxShadow: "0 20px 60px rgba(0,0,0,0.2)", zIndex: 1000, display: "flex", flexDirection: "column", overflow: "hidden", border: "1px solid var(--gray-200)" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, var(--navy) 0%, #1A3A5C 100%)", color: "white", padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--teal)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🤖</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14 }}>AI Dental Assistant</div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", display: "flex", alignItems: "center", gap: 4 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ADE80" }}></span> Online 24/7
            </div>
          </div>
        </div>
        <button onClick={onClose} style={{ background: "none", border: "none", color: "white", fontSize: 20, cursor: "pointer" }}>×</button>
      </div>

      {/* Messages */}
      <div ref={chatRef} style={{ flex: 1, overflowY: "auto", padding: 16, display: "flex", flexDirection: "column", gap: 12, background: "var(--gray-50)" }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start" }}>
            <div style={{
              maxWidth: "85%",
              padding: "10px 14px",
              borderRadius: msg.role === "user" ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
              background: msg.role === "user" ? "var(--teal)" : "white",
              color: msg.role === "user" ? "white" : "var(--gray-900)",
              fontSize: 13,
              lineHeight: 1.5,
              whiteSpace: "pre-line",
              border: msg.role === "bot" ? "1px solid var(--gray-200)" : "none",
              boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
            }}>
              {msg.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div style={{ display: "flex", gap: 4, padding: "10px 14px", background: "white", borderRadius: 14, width: "fit-content", border: "1px solid var(--gray-200)" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gray-300)", animation: "pulse 1s infinite" }}>.</span>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gray-300)", animation: "pulse 1s infinite 0.2s" }}>.</span>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gray-300)", animation: "pulse 1s infinite 0.4s" }}>.</span>
          </div>
        )}
      </div>

      {/* Quick Replies */}
      {messages.length <= 2 && (
        <div style={{ padding: "8px 16px", display: "flex", flexWrap: "wrap", gap: 6, borderTop: "1px solid var(--gray-200)", background: "white" }}>
          {quickReplies.map((qr, i) => (
            <button key={i} onClick={() => sendMessage(qr)} style={{ padding: "4px 10px", fontSize: 11, background: "var(--teal-light)", color: "var(--teal)", border: "1px solid rgba(0,166,126,0.2)", borderRadius: 100, cursor: "pointer", fontFamily: "var(--font-body)", fontWeight: 500 }}>
              {qr}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div style={{ padding: 12, borderTop: "1px solid var(--gray-200)", display: "flex", gap: 8, background: "white" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask about treatments, costs, scheduling..."
          style={{ flex: 1, padding: "10px 14px", borderRadius: 12, border: "1px solid var(--gray-200)", fontSize: 13, fontFamily: "var(--font-body)", outline: "none" }}
        />
        <button onClick={() => sendMessage()} style={{ width: 40, height: 40, borderRadius: 12, background: "var(--teal)", color: "white", border: "none", fontSize: 16, cursor: "pointer" }}>→</button>
      </div>
    </div>
  );
};

// SYMPTOM CHECKER
const SymptomChecker = ({ onClose }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const questions = [
    { q: "What best describes your concern?", options: [
      { label: "🦷 Tooth pain or sensitivity", value: "pain", icon: "🦷" },
      { label: "🩸 Bleeding or swollen gums", value: "gums", icon: "🩸" },
      { label: "💔 Broken, chipped, or cracked tooth", value: "broken", icon: "💔" },
      { label: "😬 Missing tooth or teeth", value: "missing", icon: "😬" },
      { label: "😁 Cosmetic concern (color, alignment)", value: "cosmetic", icon: "😁" },
      { label: "😮 Jaw pain, clicking, headaches", value: "tmj", icon: "😮" },
    ]},
    { q: "How long have you had this issue?", options: [
      { label: "Just started today", value: "today" },
      { label: "A few days", value: "days" },
      { label: "A few weeks", value: "weeks" },
      { label: "Several months or longer", value: "months" },
    ]},
    { q: "How severe is your discomfort?", options: [
      { label: "🟢 Mild — noticeable but manageable", value: "mild" },
      { label: "🟡 Moderate — affecting daily activities", value: "moderate" },
      { label: "🔴 Severe — significant pain or concern", value: "severe" },
    ]},
  ];

  const getResult = () => {
    const concern = answers[0];
    const severity = answers[2];
    const results = {
      pain: { title: "Possible Tooth Pain Diagnosis", urgency: severity === "severe" ? "urgent" : "soon", treatments: ["Comprehensive exam with digital X-rays","Root canal therapy (if infection found)","Dental crown or filling","Sensitivity treatment"], rec: "Tooth pain can indicate cavities, cracks, infection, or nerve issues. Dr. Chen uses advanced digital imaging to identify the exact cause and provide pain-free treatment options including sedation dentistry." },
      gums: { title: "Possible Gum Health Assessment", urgency: severity === "severe" ? "urgent" : "routine", treatments: ["Deep cleaning (scaling & root planing)","Periodontal evaluation","Laser gum treatment","Gum grafting if needed"], rec: "Bleeding or swollen gums may indicate gingivitis or periodontitis. Early treatment prevents tooth loss. Dr. Chen offers comprehensive periodontal care including laser treatment." },
      broken: { title: "Broken/Damaged Tooth Assessment", urgency: "urgent", treatments: ["Dental bonding","Porcelain crown","Porcelain veneer","Extraction + implant if severe"], rec: "A broken tooth needs prompt attention to prevent infection. Dr. Chen can often save damaged teeth with same-day crowns or bonding. For severe cases, Fusion Dental Implants™ provide permanent replacement." },
      missing: { title: "Missing Teeth Replacement Options", urgency: "soon", treatments: ["Single dental implant","Implant-supported bridge","All-on-4 full arch (Fusion™)","All-on-6 full arch (Fusion™)","Removable dentures"], rec: "Missing teeth affect eating, speaking, and confidence. Dr. Chen is a certified Fusion Dental Implants™ provider — offering same-day permanent teeth with the most advanced implant technology available." },
      cosmetic: { title: "Cosmetic Enhancement Options", urgency: "routine", treatments: ["Professional teeth whitening","Porcelain veneers","Invisalign clear aligners","Dental bonding","Smile makeover consultation"], rec: "Dr. Chen combines artistry with advanced technology for stunning smile transformations. From veneers to Invisalign to full smile makeovers — a free cosmetic consultation will explore your best options." },
      tmj: { title: "TMJ/Jaw Pain Assessment", urgency: severity === "severe" ? "soon" : "routine", treatments: ["TMJ evaluation & diagnosis","Custom night guard","Occlusal adjustment","Jaw exercises & therapy","Bite splint therapy"], rec: "Jaw pain, clicking, and headaches often stem from TMJ disorders or teeth grinding. Dr. Chen provides comprehensive TMJ diagnosis and custom treatment plans for lasting relief." },
    };
    return results[concern] || results.pain;
  };

  const handleAnswer = (value) => {
    const newAnswers = { ...answers, [step]: value };
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setResult(getResult());
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 560 }}>
        <button className="modal-close" onClick={onClose}>×</button>
        {!result ? (
          <>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: "var(--teal-light)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>🔍</div>
              <div>
                <h2 style={{ fontSize: 20, margin: 0 }}>AI Symptom Checker</h2>
                <p style={{ fontSize: 12, color: "var(--gray-500)", margin: 0 }}>Step {step + 1} of {questions.length}</p>
              </div>
            </div>
            <div style={{ width: "100%", height: 4, background: "var(--gray-100)", borderRadius: 2, marginBottom: 20 }}>
              <div style={{ width: `${((step + 1) / questions.length) * 100}%`, height: "100%", background: "var(--teal)", borderRadius: 2, transition: "width 0.3s" }} />
            </div>
            <h3 style={{ fontSize: 17, color: "var(--navy)", marginBottom: 16 }}>{questions[step].q}</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {questions[step].options.map((opt, i) => (
                <button key={i} onClick={() => handleAnswer(opt.value)} style={{ padding: "14px 16px", borderRadius: 12, border: "2px solid var(--gray-200)", background: "white", cursor: "pointer", textAlign: "left", fontSize: 14, fontFamily: "var(--font-body)", transition: "all 0.2s" }}
                  onMouseOver={(e) => { e.target.style.borderColor = "var(--teal)"; e.target.style.background = "var(--teal-light)"; }}
                  onMouseOut={(e) => { e.target.style.borderColor = "var(--gray-200)"; e.target.style.background = "white"; }}
                >{opt.label}</button>
              ))}
            </div>
            <p style={{ fontSize: 11, color: "var(--gray-500)", marginTop: 16, fontStyle: "italic" }}>
              ⚕️ This tool provides general guidance only and is not a diagnosis. Always consult with Dr. Chen for professional evaluation.
            </p>
          </>
        ) : (
          <>
            <div style={{ textAlign: "center", marginBottom: 20 }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>🩺</div>
              <h2 style={{ fontSize: 22, color: "var(--navy)" }}>{result.title}</h2>
              <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: 100, fontSize: 12, fontWeight: 700, marginTop: 8, background: result.urgency === "urgent" ? "#FEE2E2" : result.urgency === "soon" ? "#FEF3C7" : "#D1FAE5", color: result.urgency === "urgent" ? "#991B1B" : result.urgency === "soon" ? "#92400E" : "#065F46" }}>
                {result.urgency === "urgent" ? "🔴 Urgent — Schedule ASAP" : result.urgency === "soon" ? "🟡 Schedule Soon" : "🟢 Routine — Schedule at Convenience"}
              </span>
            </div>
            <p style={{ fontSize: 14, color: "var(--gray-700)", lineHeight: 1.6, marginBottom: 20 }}>{result.rec}</p>
            <div style={{ background: "var(--gray-50)", borderRadius: 12, padding: 16, marginBottom: 20 }}>
              <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 10 }}>Recommended Treatments:</div>
              {result.treatments.map((t, i) => (
                <div key={i} style={{ display: "flex", gap: 8, alignItems: "center", padding: "4px 0", fontSize: 13, color: "var(--gray-700)" }}>
                  <span style={{ color: "var(--teal)" }}>✓</span> {t}
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <a href="tel:5107951661" className="btn btn-primary" style={{ flex: 1, justifyContent: "center", textDecoration: "none" }}>📞 Call (510) 795-1661</a>
              <button className="btn btn-dark" style={{ flex: 1, justifyContent: "center" }} onClick={onClose}>Close</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// TREATMENT COST ESTIMATOR
const CostEstimator = ({ onClose }) => {
  const [selected, setSelected] = useState([]);
  const treatments = [
    { name: "Comprehensive Exam + X-Rays", low: 150, high: 250, cat: "preventive" },
    { name: "Teeth Cleaning (Prophylaxis)", low: 100, high: 200, cat: "preventive" },
    { name: "Deep Cleaning (per quadrant)", low: 200, high: 350, cat: "preventive" },
    { name: "Dental Filling (Composite)", low: 150, high: 350, cat: "restorative" },
    { name: "Dental Crown (Porcelain)", low: 900, high: 1500, cat: "restorative" },
    { name: "Root Canal (Anterior)", low: 700, high: 1000, cat: "restorative" },
    { name: "Root Canal (Molar)", low: 900, high: 1200, cat: "restorative" },
    { name: "Simple Extraction", low: 150, high: 300, cat: "surgery" },
    { name: "Wisdom Tooth Extraction", low: 250, high: 600, cat: "surgery" },
    { name: "Porcelain Veneer (per tooth)", low: 1000, high: 2000, cat: "cosmetic" },
    { name: "Teeth Whitening (In-Office)", low: 400, high: 700, cat: "cosmetic" },
    { name: "Invisalign Treatment", low: 4000, high: 7000, cat: "cosmetic" },
    { name: "Single Dental Implant", low: 3000, high: 5000, cat: "implant" },
    { name: "All-on-4 Fusion™ (per arch)", low: 18999, high: 25000, cat: "implant" },
    { name: "All-on-6 Fusion™ (per arch)", low: 22000, high: 30000, cat: "implant" },
    { name: "Implant-Supported Denture", low: 8000, high: 15000, cat: "implant" },
    { name: "Bone Grafting", low: 500, high: 1500, cat: "surgery" },
    { name: "Night Guard (Custom)", low: 300, high: 600, cat: "preventive" },
  ];

  const toggle = (name) => setSelected(prev => prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]);
  const selectedItems = treatments.filter(t => selected.includes(t.name));
  const totalLow = selectedItems.reduce((a, b) => a + b.low, 0);
  const totalHigh = selectedItems.reduce((a, b) => a + b.high, 0);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 600, maxHeight: "85vh", overflowY: "auto" }}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <div style={{ width: 48, height: 48, borderRadius: 14, background: "var(--gold-light)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>💰</div>
          <div>
            <h2 style={{ fontSize: 20, margin: 0 }}>Treatment Cost Estimator</h2>
            <p style={{ fontSize: 12, color: "var(--gray-500)", margin: 0 }}>Select treatments to see estimated ranges</p>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 20 }}>
          {treatments.map((t) => (
            <button key={t.name} onClick={() => toggle(t.name)} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", borderRadius: 10, border: selected.includes(t.name) ? "2px solid var(--teal)" : "1px solid var(--gray-200)", background: selected.includes(t.name) ? "var(--teal-light)" : "white", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: 13, textAlign: "left" }}>
              <span style={{ fontWeight: selected.includes(t.name) ? 600 : 400 }}>{selected.includes(t.name) ? "✓ " : ""}{t.name}</span>
              <span style={{ fontSize: 12, color: "var(--gray-500)", whiteSpace: "nowrap" }}>${t.low.toLocaleString()} – ${t.high.toLocaleString()}</span>
            </button>
          ))}
        </div>
        {selectedItems.length > 0 && (
          <div style={{ background: "linear-gradient(135deg, var(--navy) 0%, #1A3A5C 100%)", borderRadius: 14, padding: 20, color: "white", marginBottom: 16 }}>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginBottom: 4 }}>Estimated Total Range</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 700 }}>
              ${totalLow.toLocaleString()} – ${totalHigh.toLocaleString()}
            </div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 8 }}>{selectedItems.length} treatment(s) selected • CareCredit 0% financing available</div>
          </div>
        )}
        <p style={{ fontSize: 11, color: "var(--gray-500)", fontStyle: "italic" }}>
          💡 Estimates are approximate ranges. Exact cost depends on diagnosis, complexity, and insurance coverage. Schedule a free consultation for a personalized treatment plan and quote.
        </p>
      </div>
    </div>
  );
};

// VIRTUAL CONSULTATION REQUEST
const VirtualConsult = ({ onClose }) => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", concern: "", photo: false, preferred: "video" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 500 }}>
        <button className="modal-close" onClick={onClose}>×</button>
        {submitted ? (
          <div style={{ textAlign: "center", padding: 20 }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>📹</div>
            <h2>Virtual Consultation Requested!</h2>
            <p style={{ color: "var(--gray-500)", marginTop: 8 }}>Dr. Chen's team will contact you within 24 hours to schedule your virtual visit. You'll receive a secure video link via email.</p>
            <button className="btn btn-primary" style={{ marginTop: 16 }} onClick={onClose}>Close</button>
          </div>
        ) : (
          <>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: "#EDE9FE", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>📹</div>
              <div>
                <h2 style={{ fontSize: 20, margin: 0 }}>Virtual Consultation</h2>
                <p style={{ fontSize: 12, color: "var(--gray-500)", margin: 0 }}>See Dr. Chen from the comfort of home</p>
              </div>
            </div>
            <div style={{ background: "var(--teal-light)", borderRadius: 10, padding: 12, marginBottom: 16, fontSize: 13, color: "var(--teal)" }}>
              ✨ <strong>Free virtual consultations</strong> for dental implant and cosmetic patients! Includes a personalized treatment plan.
            </div>
            {[["name","Full Name","text"],["phone","Phone","tel"],["email","Email","email"]].map(([k,l,t]) => (
              <div className="form-group" key={k}>
                <label className="form-label">{l}</label>
                <input className="form-input" type={t} value={form[k]} onChange={(e) => setForm({...form, [k]: e.target.value})} />
              </div>
            ))}
            <div className="form-group">
              <label className="form-label">What would you like to discuss?</label>
              <textarea className="form-input" value={form.concern} onChange={(e) => setForm({...form, concern: e.target.value})} placeholder="Describe your dental concerns..." />
            </div>
            <div className="form-group">
              <label className="form-label">Consultation Type</label>
              <div style={{ display: "flex", gap: 8 }}>
                {[["video","📹 Video Call"],["phone","📞 Phone Call"]].map(([v,l]) => (
                  <button key={v} onClick={() => setForm({...form, preferred: v})} style={{ flex: 1, padding: 10, borderRadius: 8, border: form.preferred === v ? "2px solid var(--teal)" : "1px solid var(--gray-200)", background: form.preferred === v ? "var(--teal-light)" : "white", cursor: "pointer", fontSize: 13, fontFamily: "var(--font-body)", fontWeight: form.preferred === v ? 600 : 400 }}>{l}</button>
                ))}
              </div>
            </div>
            <button className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }} onClick={() => setSubmitted(true)}>
              Request Virtual Consultation →
            </button>
          </>
        )}
      </div>
    </div>
  );
};

// SMART TRUST BAR (floating social proof)
const TrustBar = () => {
  const [visible, setVisible] = useState(false);
  const [currentProof, setCurrentProof] = useState(0);
  const proofs = [
    "🌟 Sarah from San Jose just booked a Fusion™ implant consultation",
    "⭐ New 5-star Google review: \"Best dentist I've ever had!\"",
    "📅 12 patients scheduled consultations today",
    "🏆 4.9★ rated across 200+ verified reviews",
    "⚡ Dr. Chen placed her 5,000th dental implant this year",
    "🦷 Free 3D CT Scan with every implant consultation ($500 value)",
    "💬 AI Assistant available 24/7 — ask us anything!",
  ];

  useEffect(() => {
    const timer1 = setTimeout(() => setVisible(true), 5000);
    const timer2 = setInterval(() => setCurrentProof(p => (p + 1) % proofs.length), 6000);
    return () => { clearTimeout(timer1); clearInterval(timer2); };
  }, []);

  if (!visible) return null;

  return (
    <div style={{ position: "fixed", bottom: 90, left: 24, maxWidth: 340, background: "white", borderRadius: 14, padding: "12px 16px", boxShadow: "0 8px 30px rgba(0,0,0,0.12)", zIndex: 900, border: "1px solid var(--gray-200)", display: "flex", alignItems: "center", gap: 10, animation: "fadeInUp 0.5s ease-out" }}>
      <div style={{ fontSize: 13, color: "var(--gray-700)", lineHeight: 1.4 }}>{proofs[currentProof]}</div>
      <button onClick={() => setVisible(false)} style={{ background: "none", border: "none", fontSize: 14, color: "var(--gray-400)", cursor: "pointer", flexShrink: 0 }}>×</button>
    </div>
  );
};

const Footer = ({ setPage }) => (
  <footer className="footer">
    <div className="footer-grid">
      <div>
        <h4 style={{ fontFamily: "var(--font-display)", fontSize: 22 }}>Dr. Yvonne Chen, DMD</h4>
        <p style={{ marginBottom: 4 }}>Fremont Comprehensive Family Dentistry</p>
        <p style={{ marginBottom: 16 }}>{PRACTICE_INFO.address}</p>
        <p style={{ color: "white", fontWeight: 600, fontSize: 18, marginBottom: 4 }}>📞 {PRACTICE_INFO.phone}</p>
        <p style={{ marginBottom: 16 }}>✉️ {PRACTICE_INFO.email}</p>
        <div className="powered-badge">⚡ {PRACTICE_INFO.powered}</div>
      </div>
      <div>
        <h4>Services</h4>
        {["General Dentistry", "Cosmetic Dentistry", "Dental Implants", "Oral Surgery", "Fusion Dental Implants™", "Sedation Dentistry", "Emergency Care"].map((s) => (
          <a key={s} onClick={() => setPage("services")}>{s}</a>
        ))}
      </div>
      <div>
        <h4>Implant Solutions</h4>
        {["Single Implants", "All-on-4 Full Arch", "All-on-6 Full Arch", "Same-Day Implants", "Bone Grafting", "Implant-Supported Bridge", "Sinus Lift Surgery"].map((s) => (
          <a key={s} onClick={() => setPage("implants")}>{s}</a>
        ))}
      </div>
      <div>
        <h4>Quick Links</h4>
        {[["About Dr. Chen", "about"], ["Service Areas", "cities"], ["Sitemap", "sitemap"], ["Patient Reviews", "home"], ["Book Appointment", "home"]].map(([label, pg]) => (
          <a key={label} onClick={() => setPage(pg)}>{label}</a>
        ))}
      </div>
    </div>
    <div className="footer-bottom">
      <span>© 2026 Dr. Yvonne Chen, DMD — Fremont Comprehensive Family Dentistry. All rights reserved. | 1895 Mowry Ave, Ste 102, Fremont CA 94538</span>
      <span>Dental Implant Surgery Powered by Fusion Dental Implants™</span>
    </div>
  </footer>
);

// APPOINTMENT MODAL
const AppointmentModal = ({ onClose }) => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", date: "", time: "", message: "" });
  const [done, setDone] = useState(false);
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        {done ? (
          <div style={{ textAlign: "center", padding: 24 }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
            <h2>Appointment Requested!</h2>
            <p style={{ color: "var(--gray-500)", marginTop: 8 }}>We'll confirm your appointment within 24 hours.</p>
            <button className="btn btn-primary" style={{ marginTop: 20 }} onClick={onClose}>Close</button>
          </div>
        ) : (
          <>
            <h2>Book Your Appointment</h2>
            <p style={{ fontSize: 14, color: "var(--gray-500)", marginBottom: 20 }}>Schedule your visit with Dr. Yvonne Chen, DMD at Fremont Comprehensive Family Dentistry. Free consultations for implant patients.</p>
            {[
              ["name", "Full Name", "text"],
              ["phone", "Phone", "tel"],
              ["email", "Email", "email"],
              ["date", "Preferred Date", "date"],
            ].map(([key, label, type]) => (
              <div className="form-group" key={key}>
                <label className="form-label">{label}</label>
                <input className="form-input" type={type} value={form[key]} onChange={(e) => setForm({ ...form, [key]: e.target.value })} />
              </div>
            ))}
            <div className="form-group">
              <label className="form-label">Service Needed</label>
              <select className="form-input form-select" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
                <option value="">Select a service...</option>
                {Object.entries(SERVICES).map(([cat, svcs]) => (
                  <optgroup key={cat} label={cat.charAt(0).toUpperCase() + cat.slice(1)}>
                    {svcs.map((s) => <option key={s.id} value={s.name}>{s.name}</option>)}
                  </optgroup>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Additional Notes</label>
              <textarea className="form-input" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your dental needs..." />
            </div>
            <button className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }} onClick={() => setDone(true)}>
              Request Appointment →
            </button>
          </>
        )}
      </div>
    </div>
  );
};

// ============================================================
// MAIN APP
// ============================================================
export default function DrYvonneChenDental() {
  const [page, setPage] = useState("home");
  const [modal, setModal] = useState(null);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => { injectStyles(); }, []);
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [page]);

  // Handle landing page modals
  const landingService = modal?.startsWith("landing-") ? modal.replace("landing-", "") : null;

  return (
    <div className="dental-app">
      <SEOHead />

      {page !== "crm" && <TopBar />}
      <Nav page={page} setPage={setPage} setModal={setModal} />

      {landingService && (
        <div style={{ position: "fixed", inset: 0, zIndex: 999, background: "white", overflowY: "auto" }}>
          <div style={{ padding: "12px 24px", borderBottom: "1px solid var(--gray-200)", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, background: "white", zIndex: 1 }}>
            <span style={{ fontWeight: 600 }}>Service Landing Page Preview</span>
            <button className="btn btn-sm btn-dark" onClick={() => setModal(null)}>× Close</button>
          </div>
          <LandingPage service={landingService} setModal={setModal} setPage={setPage} />
        </div>
      )}

      {modal === "appointment" && <AppointmentModal onClose={() => setModal(null)} />}
      {modal === "scheduler" && <SmartScheduler onClose={() => setModal(null)} />}
      {modal === "symptom" && <SymptomChecker onClose={() => setModal(null)} />}
      {modal === "cost" && <CostEstimator onClose={() => setModal(null)} />}
      {modal === "virtual" && <VirtualConsult onClose={() => setModal(null)} />}
      {modal === "call" && (
        <div className="modal-overlay" onClick={() => setModal(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()} style={{ textAlign: "center" }}>
            <button className="modal-close" onClick={() => setModal(null)}>×</button>
            <div style={{ fontSize: 48, marginBottom: 16 }}>📞</div>
            <h2>Call Us Now</h2>
            <p style={{ fontFamily: "var(--font-display)", fontSize: 32, color: "var(--teal)", fontWeight: 700, margin: "16px 0" }}>{PRACTICE_INFO.phone}</p>
            <p style={{ color: "var(--gray-500)", marginBottom: 24 }}>{PRACTICE_INFO.hours}</p>
            <a href={`tel:${PRACTICE_INFO.phone.replace(/\D/g, "")}`} className="btn btn-primary" style={{ width: "100%", justifyContent: "center", textDecoration: "none" }}>
              📞 Tap to Call
            </a>
          </div>
        </div>
      )}

      {page === "home" && (
        <>
          <Hero setModal={setModal} />

          {/* AI-POWERED TOOLS BAR */}
          <section style={{ background: "linear-gradient(135deg, #0D1B2A 0%, #1B2838 100%)", padding: "40px 24px" }}>
            <div style={{ maxWidth: 1400, margin: "0 auto" }}>
              <div style={{ textAlign: "center", marginBottom: 32 }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(0,166,126,0.15)", border: "1px solid rgba(0,166,126,0.3)", padding: "6px 16px", borderRadius: 100, fontSize: 12, fontWeight: 700, color: "var(--teal)", letterSpacing: 1, textTransform: "uppercase", marginBottom: 12 }}>🤖 AI-Powered Patient Tools</div>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: 32, color: "white", marginBottom: 8 }}>Smart Tools for Smarter Dental Care</h2>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", maxWidth: 600, margin: "0 auto" }}>Powered by artificial intelligence — get instant answers, check symptoms, estimate costs, and consult with Dr. Chen from anywhere.</p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
                {[
                  { icon: "🤖", title: "AI Dental Assistant", desc: "24/7 instant answers about treatments, costs, insurance, scheduling, and more. Try it now!", action: () => setShowChat(true), color: "var(--teal)", badge: "CHAT NOW" },
                  { icon: "🔍", title: "Symptom Checker", desc: "Describe your symptoms and get AI-powered guidance on potential issues and recommended treatments.", action: () => setModal("symptom"), color: "#8B5CF6", badge: "CHECK NOW" },
                  { icon: "💰", title: "Cost Estimator", desc: "Select treatments and instantly see estimated cost ranges. Includes CareCredit financing info.", action: () => setModal("cost"), color: "var(--gold)", badge: "ESTIMATE" },
                  { icon: "📹", title: "Virtual Consultation", desc: "See Dr. Chen from home via secure video call. Free for implant and cosmetic patients!", action: () => setModal("virtual"), color: "#EC4899", badge: "FREE CONSULT" },
                ].map((tool, i) => (
                  <div key={i} onClick={tool.action} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 24, cursor: "pointer", transition: "all 0.3s", position: "relative", overflow: "hidden" }}
                    onMouseOver={(e) => { e.currentTarget.style.borderColor = tool.color; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 8px 30px ${tool.color}22`; }}
                    onMouseOut={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                      <div style={{ width: 48, height: 48, borderRadius: 14, background: `${tool.color}22`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>{tool.icon}</div>
                      <span style={{ padding: "4px 10px", borderRadius: 100, fontSize: 10, fontWeight: 800, letterSpacing: 1, color: tool.color, background: `${tool.color}15`, border: `1px solid ${tool.color}33` }}>{tool.badge}</span>
                    </div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "white", marginBottom: 6 }}>{tool.title}</h3>
                    <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>{tool.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <ServicesSection setModal={setModal} />
          <BeforeAfterGallery />
          <FusionSection setModal={setModal} />
          <FinancingCalculator />
          <Testimonials />
          <OfficeTour />
          <AboutSection />
          <BlogHub />
          <FAQSection />
          <ReferralProgram />
          <section className="section" style={{ background: "linear-gradient(135deg, var(--teal) 0%, var(--teal-dark) 100%)", color: "white", textAlign: "center" }}>
            <div className="section-inner">
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: 42, marginBottom: 16 }}>Ready to Transform Your Smile?</h2>
              <p style={{ fontSize: 18, color: "rgba(255,255,255,0.8)", maxWidth: 600, margin: "0 auto 32px" }}>
                Schedule your free consultation with Dr. Yvonne Chen today. Dental implant consultations include a complimentary 3D CT scan.
              </p>
              <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                <button className="btn" style={{ background: "white", color: "var(--teal)" }} onClick={() => setModal("appointment")}>
                  Book Consultation →
                </button>
                <button className="btn btn-outline" onClick={() => setModal("call")}>
                  📞 Call {PRACTICE_INFO.phone}
                </button>
                <button className="btn btn-outline" onClick={() => setModal("virtual")}>
                  📹 Virtual Consultation
                </button>
              </div>
              <div className="powered-badge" style={{ margin: "32px auto 0", background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.3)", color: "white" }}>
                ⚡ Full Arch Implants Powered by Fusion Dental Implants™
              </div>
            </div>
          </section>
        </>
      )}

      {page === "services" && <ServicesSection setModal={setModal} />}
      {page === "implants" && <ServicesSection setModal={setModal} activeCategory="implants" />}
      {page === "fusion" && <FusionSection setModal={setModal} />}
      {page === "gallery" && <BeforeAfterGallery />}
      {page === "about" && <AboutSection />}
      {page === "blog" && <><BlogHub /><FAQSection /></>}
      {page === "sitemap" && <SitemapPage />}
      {page === "cities" && <CitiesPage />}
      {page === "crm" && <CRMDashboard />}
      {page === "scheduler" && <SmartScheduler onClose={() => setPage("home")} />}

      {page !== "crm" && <Footer setPage={setPage} />}

      {/* AI CHATBOT */}
      {showChat && <AIChatbot onClose={() => setShowChat(false)} />}

      {/* FLOATING CHAT BUTTON */}
      {!showChat && page !== "crm" && (
        <button onClick={() => setShowChat(true)} style={{ position: "fixed", bottom: 24, right: 24, width: 60, height: 60, borderRadius: "50%", background: "linear-gradient(135deg, var(--teal) 0%, var(--teal-dark) 100%)", color: "white", border: "none", fontSize: 26, cursor: "pointer", boxShadow: "0 6px 20px rgba(0,166,126,0.4)", zIndex: 900, display: "flex", alignItems: "center", justifyContent: "center", transition: "transform 0.2s" }}
          onMouseOver={(e) => e.target.style.transform = "scale(1.1)"}
          onMouseOut={(e) => e.target.style.transform = "scale(1)"}
        >
          💬
        </button>
      )}

      {/* TRUST BAR — Social Proof Notifications */}
      {page === "home" && !showChat && <TrustBar />}
    </div>
  );
}
