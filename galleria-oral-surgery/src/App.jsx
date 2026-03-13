import { useState, useEffect, useRef } from "react";

// ============================================================
// GALLERIA ORAL SURGERY - DR. ALEXANDER ANTIPOV, DDS
// Oral & Maxillofacial Surgery | Dental Implants | Roseville, CA
// Powered by Fusion Dental Implants
// ============================================================

const PRACTICE = {
  name: "Galleria Oral Surgery",
  doctor: "Dr. Alexander Antipov, DDS",
  specialty: "Oral & Maxillofacial Surgery",
  phone: "(916) 555-0100",
  email: "info@galleriaoralsurgery.com",
  address: "1197 Roseville Pkwy, Suite 100, Roseville, CA 95678",
  hours: "Mon\u2013Thu: 8AM\u20135PM | Fri: 8AM\u20132PM",
};

const CITIES_SERVED = [
  "Roseville","Rocklin","Lincoln","Granite Bay","Citrus Heights","Folsom",
  "Sacramento","Auburn","Loomis","El Dorado Hills","Carmichael","Fair Oaks",
  "Orangevale","Rancho Cordova","West Sacramento","Davis","Woodland",
  "Elk Grove","Natomas","Antelope","North Highlands","Rio Linda",
];

const SERVICES = [
  { icon: "\u2726", title: "Dental Implants", desc: "Single tooth, multiple teeth, and full arch implant placement with 3D-guided surgery for precise, lasting results." },
  { icon: "\u2726", title: "Wisdom Teeth Removal", desc: "Safe, comfortable extraction of impacted and erupted wisdom teeth with IV sedation options for anxiety-free care." },
  { icon: "\u2726", title: "All-on-4 Full Arch Implants", desc: "Complete smile restoration in as little as one day using four strategically placed implants to support a full arch of teeth." },
  { icon: "\u2726", title: "Bone Grafting & Sinus Lifts", desc: "Advanced bone augmentation procedures to rebuild jawbone volume and prepare the foundation for successful dental implants." },
  { icon: "\u2726", title: "Corrective Jaw Surgery", desc: "Orthognathic surgery to correct jaw misalignment, improve bite function, facial aesthetics, and airway conditions." },
  { icon: "\u2726", title: "Tooth Extractions", desc: "Simple and surgical extractions performed with precision and comfort, including impacted and broken teeth." },
  { icon: "\u2726", title: "Facial Trauma & Fracture Repair", desc: "Emergency treatment of facial injuries including fractured jaws, cheekbones, orbital bones, and soft tissue lacerations." },
  { icon: "\u2726", title: "TMJ / TMD Treatment", desc: "Comprehensive diagnosis and treatment of temporomandibular joint disorders including arthroscopy and joint replacement." },
  { icon: "\u2726", title: "Oral Pathology & Biopsy", desc: "Evaluation and biopsy of oral lesions, cysts, tumors, and abnormal tissue for accurate diagnosis and treatment planning." },
  { icon: "\u2726", title: "Pre-Prosthetic Surgery", desc: "Surgical preparation of the mouth for dentures or prosthetics, including bone smoothing and soft tissue recontouring." },
  { icon: "\u2726", title: "Platelet-Rich Fibrin (PRF)", desc: "Biologic therapy using your own blood concentrates to accelerate healing and improve surgical outcomes." },
  { icon: "\u2726", title: "IV Sedation & Anesthesia", desc: "Full spectrum anesthesia services from local anesthesia to IV sedation and general anesthesia for patient comfort." },
  { icon: "\u2726", title: "Apicoectomy", desc: "Root-end surgery to remove infected tissue and seal the root tip when conventional root canal treatment is insufficient." },
  { icon: "\u2726", title: "Expose & Bond", desc: "Surgical exposure of impacted canines and other teeth combined with orthodontic bonding to guide eruption into proper alignment." },
  { icon: "\u2726", title: "Frenectomy", desc: "Release of restrictive frenum tissue (tongue-tie or lip-tie) to improve function, speech, and oral development." },
  { icon: "\u2726", title: "Cleft Lip & Palate", desc: "Surgical management of cleft conditions including bone grafting and reconstructive procedures as part of multidisciplinary care." },
];

const TESTIMONIALS = [
  { name: "Sarah M.", text: "Dr. Antipov made my dental implant experience completely painless. His expertise and the caring staff at Galleria Oral Surgery made all the difference. I now have a beautiful, confident smile!", rating: 5 },
  { name: "James R.", text: "I was terrified of getting my wisdom teeth out, but Dr. Antipov and his team put me at ease from the moment I walked in. The IV sedation was seamless and recovery was faster than expected.", rating: 5 },
  { name: "Linda K.", text: "After years of struggling with loose dentures, Dr. Antipov gave me All-on-4 implants. It was truly life-changing. I can eat, laugh, and smile with complete confidence again.", rating: 5 },
  { name: "Dr. Michael Torres, DDS", text: "As a referring dentist, I consistently send my patients to Dr. Antipov for oral surgery. His communication is excellent, outcomes are outstanding, and my patients always return with praise.", rating: 5 },
];

const FAQS = [
  { q: "Do I need a referral to see Dr. Antipov?", a: "While many patients are referred by their general dentist or orthodontist, a referral is not required. You are welcome to contact our office directly to schedule a consultation for any oral surgery needs." },
  { q: "What types of sedation do you offer?", a: "We offer the full spectrum of anesthesia options including local anesthesia, nitrous oxide (laughing gas), intravenous (IV) conscious sedation, and general anesthesia. Dr. Antipov will recommend the best option based on your procedure and comfort level." },
  { q: "How long does dental implant surgery take?", a: "A single dental implant placement typically takes 30\u201360 minutes. More complex procedures like All-on-4 full arch implants may take 2\u20134 hours. During your consultation, Dr. Antipov will provide a detailed timeline for your specific treatment plan." },
  { q: "What is the recovery time after wisdom teeth removal?", a: "Most patients return to normal activities within 3\u20135 days. Complete healing of the extraction sites takes about 2 weeks. We provide detailed post-operative instructions and are available 24/7 for any concerns during your recovery." },
  { q: "Do you accept dental insurance?", a: "Yes, we accept most major dental and medical insurance plans. Our team will verify your benefits and provide a detailed cost estimate before any procedure. We also offer financing through CareCredit and in-office payment plans." },
  { q: "How long do dental implants last?", a: "With proper care and maintenance, dental implants can last a lifetime. The implant itself is made of biocompatible titanium that fuses permanently with your jawbone. The implant crown may need replacement after 15\u201320 years due to normal wear." },
  { q: "What is the cost of All-on-4 dental implants?", a: "The cost of All-on-4 treatment varies based on individual needs, materials selected, and whether additional procedures are required. We offer complimentary implant consultations with detailed cost breakdowns and flexible financing options to make treatment accessible." },
  { q: "Is oral surgery painful?", a: "Modern oral surgery techniques and anesthesia ensure your comfort throughout every procedure. Most patients report that the actual procedure was much easier than anticipated. Post-operative discomfort is well-managed with prescribed medications and typically resolves within a few days." },
  { q: "What should I do in a dental emergency?", a: "If you experience a dental emergency such as a knocked-out tooth, jaw fracture, or severe oral bleeding, call our office immediately at (916) 555-0100. We accommodate emergency cases and provide after-hours emergency contact information on our voicemail." },
  { q: "How do referring doctors send patient referrals?", a: "Referring doctors can submit referrals through our convenient online referral form on this website, by fax, or by calling our office directly. We provide prompt communication back to referring offices including treatment plans and post-operative reports." },
];

const REFERRAL_REASONS = [
  "Dental Implants", "Wisdom Teeth Extraction", "Tooth Extraction",
  "Bone Grafting / Sinus Lift", "Corrective Jaw Surgery", "Oral Pathology / Biopsy",
  "TMJ Treatment", "Facial Trauma", "Expose & Bond", "Pre-Prosthetic Surgery",
  "Apicoectomy", "Frenectomy", "Other",
];

/* ========== CSS ========== */
const STYLES = String.raw`
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --navy:#0B1D3A;--navy-light:#132d54;--gold:#C9A96E;--gold-light:#d4ba8a;
  --white:#fff;--gray-50:#F8F9FA;--gray-100:#f0f1f3;--gray-200:#e2e4e8;
  --gray-400:#9ca3af;--gray-600:#4b5563;--gray-800:#1f2937;
  --font-heading:'Playfair Display',Georgia,serif;
  --font-body:'Inter',system-ui,-apple-system,sans-serif;
  --shadow-sm:0 1px 3px rgba(0,0,0,.08);--shadow-md:0 4px 20px rgba(0,0,0,.1);
  --shadow-lg:0 10px 40px rgba(0,0,0,.15);--radius:12px;
}
html{scroll-behavior:smooth}
body{font-family:var(--font-body);color:var(--gray-800);line-height:1.6;-webkit-font-smoothing:antialiased}
img{max-width:100%;display:block}
a{text-decoration:none;color:inherit}
.container{max-width:1200px;margin:0 auto;padding:0 24px}

/* NAV */
.nav{position:fixed;top:0;left:0;right:0;z-index:1000;transition:all .3s}
.nav.scrolled{background:rgba(11,29,58,.97);backdrop-filter:blur(12px);box-shadow:0 2px 20px rgba(0,0,0,.2)}
.nav-inner{display:flex;align-items:center;justify-content:space-between;padding:18px 24px;max-width:1400px;margin:0 auto}
.nav-logo{font-family:var(--font-heading);font-size:1.1rem;font-weight:700;color:var(--gold);letter-spacing:2px;text-transform:uppercase;white-space:nowrap}
.nav-logo span{display:block;font-size:.65rem;color:rgba(255,255,255,.6);letter-spacing:3px;font-family:var(--font-body);font-weight:400;margin-top:2px}
.nav-links{display:flex;gap:28px;align-items:center;list-style:none}
.nav-links a{color:rgba(255,255,255,.85);font-size:.82rem;font-weight:500;letter-spacing:.5px;transition:color .2s;text-transform:uppercase}
.nav-links a:hover{color:var(--gold)}
.nav-cta{background:var(--gold);color:var(--navy);padding:10px 22px;border-radius:6px;font-weight:600;font-size:.82rem;letter-spacing:.5px;transition:all .2s;border:none;cursor:pointer}
.nav-cta:hover{background:var(--gold-light);transform:translateY(-1px)}
.hamburger{display:none;flex-direction:column;gap:5px;background:none;border:none;cursor:pointer;padding:8px}
.hamburger span{display:block;width:24px;height:2px;background:var(--white);transition:all .3s}
.mobile-menu{display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:var(--navy);z-index:999;flex-direction:column;align-items:center;justify-content:center;gap:24px}
.mobile-menu.open{display:flex}
.mobile-menu a{color:var(--white);font-size:1.2rem;font-weight:500;letter-spacing:1px;text-transform:uppercase}
.mobile-menu a:hover{color:var(--gold)}
.mobile-close{position:absolute;top:24px;right:24px;background:none;border:none;color:var(--white);font-size:2rem;cursor:pointer}

/* HERO */
.hero{min-height:100vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,var(--navy) 0%,#1a3a6b 50%,#0d2440 100%);position:relative;overflow:hidden;padding:120px 24px 80px}
.hero::before{content:'';position:absolute;top:-50%;right:-30%;width:80%;height:200%;background:radial-gradient(ellipse,rgba(201,169,110,.08) 0%,transparent 70%);pointer-events:none}
.hero::after{content:'';position:absolute;bottom:0;left:0;right:0;height:120px;background:linear-gradient(to top,var(--white),transparent)}
.hero-content{text-align:center;max-width:900px;position:relative;z-index:2}
.hero-badge{display:inline-block;background:rgba(201,169,110,.15);color:var(--gold);padding:8px 20px;border-radius:30px;font-size:.75rem;font-weight:600;letter-spacing:2px;text-transform:uppercase;margin-bottom:24px;border:1px solid rgba(201,169,110,.25)}
.hero h1{font-family:var(--font-heading);font-size:clamp(2.4rem,5vw,4.2rem);color:var(--white);line-height:1.15;margin-bottom:20px;font-weight:700}
.hero h1 em{font-style:normal;color:var(--gold)}
.hero p{font-size:clamp(1rem,1.8vw,1.2rem);color:rgba(255,255,255,.7);max-width:700px;margin:0 auto 36px;line-height:1.7}
.hero-buttons{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin-bottom:48px}
.btn-primary{background:var(--gold);color:var(--navy);padding:14px 32px;border-radius:8px;font-weight:700;font-size:.9rem;letter-spacing:.5px;transition:all .25s;border:none;cursor:pointer;text-transform:uppercase}
.btn-primary:hover{background:var(--gold-light);transform:translateY(-2px);box-shadow:0 8px 25px rgba(201,169,110,.35)}
.btn-secondary{background:transparent;color:var(--white);padding:14px 32px;border-radius:8px;font-weight:600;font-size:.9rem;letter-spacing:.5px;transition:all .25s;border:2px solid rgba(255,255,255,.3);cursor:pointer;text-transform:uppercase}
.btn-secondary:hover{border-color:var(--gold);color:var(--gold);transform:translateY(-2px)}
.trust-row{display:flex;gap:32px;justify-content:center;flex-wrap:wrap}
.trust-item{display:flex;flex-direction:column;align-items:center;gap:6px;color:rgba(255,255,255,.6);font-size:.75rem;font-weight:500;text-transform:uppercase;letter-spacing:1px}
.trust-icon{width:48px;height:48px;border-radius:50%;background:rgba(201,169,110,.12);display:flex;align-items:center;justify-content:center;font-size:1.2rem;color:var(--gold);border:1px solid rgba(201,169,110,.2)}

/* SECTIONS */
.section{padding:100px 24px}
.section-header{text-align:center;max-width:700px;margin:0 auto 60px}
.section-badge{display:inline-block;color:var(--gold);font-size:.72rem;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;margin-bottom:12px}
.section-title{font-family:var(--font-heading);font-size:clamp(1.8rem,3.5vw,2.8rem);color:var(--navy);line-height:1.2;margin-bottom:16px}
.section-subtitle{color:var(--gray-600);font-size:1.05rem;line-height:1.7}
.section-dark{background:var(--navy);color:var(--white)}
.section-gray{background:var(--gray-50)}

/* ABOUT */
.about-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;max-width:1100px;margin:0 auto}
.about-image{background:linear-gradient(135deg,var(--navy),#1a3a6b);border-radius:var(--radius);height:500px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
.about-image-placeholder{color:var(--gold);font-size:5rem;opacity:.3;font-family:var(--font-heading)}
.about-image .credential-float{position:absolute;background:var(--white);padding:16px 20px;border-radius:10px;box-shadow:var(--shadow-lg);font-size:.8rem;font-weight:600;color:var(--navy)}
.about-image .credential-float.top{top:30px;right:-20px}
.about-image .credential-float.bottom{bottom:30px;left:-20px}
.about-content h2{font-family:var(--font-heading);font-size:2.2rem;color:var(--navy);margin-bottom:20px;line-height:1.2}
.about-content p{color:var(--gray-600);line-height:1.8;margin-bottom:16px}
.credentials-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:28px}
.credential-card{background:var(--gray-50);padding:16px;border-radius:8px;border-left:3px solid var(--gold)}
.credential-card h4{font-size:.8rem;color:var(--gold);text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;font-weight:600}
.credential-card p{font-size:.85rem;color:var(--gray-800);font-weight:500;line-height:1.4}

/* SERVICES GRID */
.services-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:24px;max-width:1200px;margin:0 auto}
.service-card{background:var(--white);border:1px solid var(--gray-200);border-radius:var(--radius);padding:28px;transition:all .3s;cursor:default}
.service-card:hover{transform:translateY(-4px);box-shadow:var(--shadow-md);border-color:var(--gold)}
.service-card .icon{width:44px;height:44px;border-radius:10px;background:rgba(201,169,110,.1);display:flex;align-items:center;justify-content:center;color:var(--gold);font-size:1.1rem;margin-bottom:16px}
.service-card h3{font-family:var(--font-heading);font-size:1.05rem;color:var(--navy);margin-bottom:8px}
.service-card p{color:var(--gray-600);font-size:.85rem;line-height:1.6}

/* DETAIL SECTIONS */
.detail-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:start;max-width:1100px;margin:0 auto}
.detail-content h2{font-family:var(--font-heading);font-size:2rem;color:var(--navy);margin-bottom:16px;line-height:1.2}
.detail-content h3{font-family:var(--font-heading);font-size:1.3rem;color:var(--navy);margin:28px 0 12px}
.detail-content p{color:var(--gray-600);line-height:1.8;margin-bottom:12px}
.detail-content ul{list-style:none;padding:0;margin:12px 0}
.detail-content ul li{padding:8px 0 8px 24px;position:relative;color:var(--gray-600);font-size:.92rem;line-height:1.5}
.detail-content ul li::before{content:'\2726';position:absolute;left:0;color:var(--gold);font-size:.7rem;top:11px}
.detail-sidebar{background:var(--gray-50);border-radius:var(--radius);padding:36px;border:1px solid var(--gray-200)}
.detail-sidebar h3{font-family:var(--font-heading);font-size:1.2rem;color:var(--navy);margin-bottom:20px}
.step-list{list-style:none;padding:0;counter-reset:steps}
.step-list li{counter-increment:steps;padding:16px 0 16px 52px;position:relative;border-bottom:1px solid var(--gray-200);color:var(--gray-600);font-size:.9rem;line-height:1.5}
.step-list li:last-child{border-bottom:none}
.step-list li::before{content:counter(steps);position:absolute;left:0;top:14px;width:36px;height:36px;border-radius:50%;background:var(--navy);color:var(--gold);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.85rem}

/* COMPARISON TABLE */
.comparison-table{width:100%;border-collapse:collapse;margin:32px 0;border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow-sm)}
.comparison-table th{background:var(--navy);color:var(--white);padding:14px 18px;text-align:left;font-size:.82rem;font-weight:600;text-transform:uppercase;letter-spacing:.5px}
.comparison-table td{padding:12px 18px;border-bottom:1px solid var(--gray-200);font-size:.88rem;color:var(--gray-600)}
.comparison-table tr:nth-child(even){background:var(--gray-50)}
.comparison-table .check{color:#10b981;font-weight:700}
.comparison-table .cross{color:#ef4444;font-weight:700}

/* FORMS */
.form-section{max-width:800px;margin:0 auto}
.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.form-group{display:flex;flex-direction:column;gap:6px}
.form-group.full{grid-column:1/-1}
.form-label{font-size:.82rem;font-weight:600;color:var(--navy);text-transform:uppercase;letter-spacing:.5px}
.form-input,.form-select,.form-textarea{padding:12px 16px;border:1px solid var(--gray-200);border-radius:8px;font-size:.9rem;font-family:var(--font-body);transition:border-color .2s;background:var(--white);color:var(--gray-800)}
.form-input:focus,.form-select:focus,.form-textarea:focus{outline:none;border-color:var(--gold);box-shadow:0 0 0 3px rgba(201,169,110,.15)}
.form-textarea{resize:vertical;min-height:100px}
.form-submit{background:var(--gold);color:var(--navy);padding:14px 36px;border:none;border-radius:8px;font-weight:700;font-size:.9rem;cursor:pointer;transition:all .25s;text-transform:uppercase;letter-spacing:.5px;margin-top:8px}
.form-submit:hover{background:var(--gold-light);transform:translateY(-2px);box-shadow:0 6px 20px rgba(201,169,110,.3)}
.form-success{text-align:center;padding:40px;background:rgba(16,185,129,.08);border:1px solid rgba(16,185,129,.2);border-radius:var(--radius)}
.form-success h3{color:#059669;font-family:var(--font-heading);font-size:1.4rem;margin-bottom:8px}
.form-success p{color:var(--gray-600)}

/* TESTIMONIALS */
.testimonials-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;max-width:1200px;margin:0 auto}
.testimonial-card{background:var(--white);border:1px solid var(--gray-200);border-radius:var(--radius);padding:32px;position:relative}
.testimonial-card::before{content:'\201C';position:absolute;top:16px;left:24px;font-size:3rem;color:var(--gold);opacity:.3;font-family:var(--font-heading);line-height:1}
.testimonial-card p{color:var(--gray-600);font-size:.92rem;line-height:1.7;margin-bottom:16px;padding-top:20px}
.testimonial-card .author{display:flex;align-items:center;gap:12px}
.testimonial-card .avatar{width:40px;height:40px;border-radius:50%;background:var(--navy);display:flex;align-items:center;justify-content:center;color:var(--gold);font-weight:700;font-size:.9rem}
.testimonial-card .name{font-weight:600;color:var(--navy);font-size:.88rem}
.testimonial-card .stars{color:var(--gold);font-size:.8rem;margin-top:2px}

/* FAQ */
.faq-list{max-width:800px;margin:0 auto}
.faq-item{border:1px solid var(--gray-200);border-radius:var(--radius);margin-bottom:12px;overflow:hidden;transition:border-color .2s}
.faq-item.active{border-color:var(--gold)}
.faq-question{display:flex;justify-content:space-between;align-items:center;padding:18px 24px;cursor:pointer;background:var(--white);transition:background .2s}
.faq-question:hover{background:var(--gray-50)}
.faq-question h3{font-size:.95rem;font-weight:600;color:var(--navy);flex:1;padding-right:16px}
.faq-toggle{width:28px;height:28px;border-radius:50%;background:var(--gray-100);display:flex;align-items:center;justify-content:center;font-size:.9rem;color:var(--navy);transition:all .3s;flex-shrink:0}
.faq-item.active .faq-toggle{background:var(--gold);color:var(--white);transform:rotate(45deg)}
.faq-answer{padding:0 24px;max-height:0;overflow:hidden;transition:all .3s ease}
.faq-item.active .faq-answer{padding:0 24px 20px;max-height:300px}
.faq-answer p{color:var(--gray-600);font-size:.9rem;line-height:1.7}

/* PATIENT INFO */
.info-cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:24px;max-width:1200px;margin:0 auto}
.info-card{background:var(--white);border:1px solid var(--gray-200);border-radius:var(--radius);padding:32px;transition:all .3s}
.info-card:hover{box-shadow:var(--shadow-md)}
.info-card h3{font-family:var(--font-heading);font-size:1.15rem;color:var(--navy);margin-bottom:12px;display:flex;align-items:center;gap:10px}
.info-card h3 .card-icon{color:var(--gold);font-size:1.3rem}
.info-card p,.info-card ul{color:var(--gray-600);font-size:.88rem;line-height:1.7}
.info-card ul{list-style:none;padding:0}
.info-card ul li{padding:4px 0 4px 16px;position:relative}
.info-card ul li::before{content:'\2022';position:absolute;left:0;color:var(--gold)}

/* LOCATION */
.location-grid{display:grid;grid-template-columns:1fr 1fr;gap:48px;max-width:1100px;margin:0 auto;align-items:start}
.location-info h3{font-family:var(--font-heading);font-size:1.3rem;color:var(--navy);margin-bottom:16px}
.location-detail{display:flex;gap:12px;margin-bottom:20px;align-items:flex-start}
.location-detail .loc-icon{width:36px;height:36px;border-radius:8px;background:rgba(201,169,110,.1);display:flex;align-items:center;justify-content:center;color:var(--gold);flex-shrink:0;font-size:1rem}
.location-detail .loc-text h4{font-size:.88rem;font-weight:600;color:var(--navy);margin-bottom:2px}
.location-detail .loc-text p{font-size:.85rem;color:var(--gray-600);line-height:1.5}
.map-placeholder{background:linear-gradient(135deg,var(--navy),#1a3a6b);border-radius:var(--radius);height:400px;display:flex;flex-direction:column;align-items:center;justify-content:center;color:rgba(255,255,255,.5)}
.map-placeholder .map-pin{font-size:3rem;margin-bottom:12px}
.cities-grid{display:flex;flex-wrap:wrap;gap:8px;margin-top:20px}
.city-tag{background:var(--gray-50);border:1px solid var(--gray-200);padding:6px 14px;border-radius:20px;font-size:.78rem;color:var(--gray-600);font-weight:500}

/* FOOTER */
.footer{background:var(--navy);color:rgba(255,255,255,.7);padding:80px 24px 32px}
.footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;max-width:1200px;margin:0 auto;padding-bottom:40px;border-bottom:1px solid rgba(255,255,255,.1)}
.footer h4{color:var(--gold);font-size:.82rem;font-weight:600;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:16px}
.footer p,.footer a{font-size:.85rem;line-height:1.8;color:rgba(255,255,255,.6)}
.footer a:hover{color:var(--gold)}
.footer-brand p{margin-bottom:12px}
.footer-links{list-style:none;padding:0}
.footer-links li{margin-bottom:6px}
.footer-bottom{max-width:1200px;margin:0 auto;padding-top:32px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px;font-size:.78rem;color:rgba(255,255,255,.4)}
.footer-bottom .powered{color:var(--gold);font-weight:600}

/* ANIMATIONS */
.fade-in{opacity:0;transform:translateY(24px);transition:opacity .7s ease,transform .7s ease}
.fade-in.visible{opacity:1;transform:translateY(0)}

/* RESPONSIVE */
@media(max-width:1024px){
  .nav-links{display:none}
  .hamburger{display:flex}
  .about-grid,.detail-grid,.location-grid{grid-template-columns:1fr;gap:32px}
  .about-image{height:350px}
  .footer-grid{grid-template-columns:1fr 1fr}
}
@media(max-width:640px){
  .section{padding:60px 16px}
  .hero{padding:100px 16px 60px}
  .hero h1{font-size:2rem}
  .hero-buttons{flex-direction:column;align-items:center}
  .trust-row{gap:16px}
  .services-grid{grid-template-columns:1fr}
  .form-grid{grid-template-columns:1fr}
  .testimonials-grid{grid-template-columns:1fr}
  .info-cards{grid-template-columns:1fr}
  .credentials-grid{grid-template-columns:1fr}
  .footer-grid{grid-template-columns:1fr}
  .comparison-table{font-size:.8rem}
  .comparison-table th,.comparison-table td{padding:8px 10px}
}
`;

/* ========== COMPONENTS ========== */

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["Home", "#home"], ["About", "#about"], ["Services", "#services"],
    ["Dental Implants", "#dental-implants"], ["Wisdom Teeth", "#wisdom-teeth"],
    ["All-on-4", "#all-on-4"], ["Referrals", "#referral"], ["Contact", "#contact"],
  ];

  const handleClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <a href="#home" className="nav-logo" onClick={(e) => handleClick(e, "#home")}>
            Galleria Oral Surgery
            <span>Dr. Alexander Antipov, DDS</span>
          </a>
          <ul className="nav-links">
            {links.map(([label, href]) => (
              <li key={href}><a href={href} onClick={(e) => handleClick(e, href)}>{label}</a></li>
            ))}
            <li><a href={`tel:${PRACTICE.phone}`} className="nav-cta">{PRACTICE.phone}</a></li>
          </ul>
          <button className="hamburger" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button className="mobile-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">&times;</button>
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={(e) => handleClick(e, href)}>{label}</a>
        ))}
        <a href={`tel:${PRACTICE.phone}`} className="nav-cta" style={{ marginTop: 16 }}>{PRACTICE.phone}</a>
      </div>
    </>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-badge">Roseville, California</div>
        <h1>Excellence in Oral &amp; <em>Maxillofacial Surgery</em></h1>
        <p>
          Dr. Alexander Antipov, DDS provides full scope oral and maxillofacial surgery and
          dental implant services at Galleria Oral Surgery in Roseville, CA. From wisdom teeth
          to full arch All-on-4 dental implants, experience exceptional surgical care.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}>Schedule Consultation</a>
          <a href="#referral" className="btn-secondary" onClick={(e) => { e.preventDefault(); document.querySelector("#referral")?.scrollIntoView({ behavior: "smooth" }); }}>Refer a Patient</a>
        </div>
        <div className="trust-row">
          {[
            ["\u2726", "Full Scope OMS"],
            ["\u2726", "Board-Eligible"],
            ["\u2726", "IV Sedation"],
            ["\u2726", "3D Imaging"],
            ["\u2726", "Same-Day Consults"],
          ].map(([icon, label]) => (
            <div className="trust-item" key={label}>
              <div className="trust-icon">{icon}</div>
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section section-gray" id="about">
      <div className="container">
        <div className="about-grid fade-in">
          <div className="about-image">
            <div className="about-image-placeholder">AA</div>
            <div className="credential-float top">AAOMS Member</div>
            <div className="credential-float bottom">Full Scope OMS</div>
          </div>
          <div className="about-content">
            <div className="section-badge">Meet Your Surgeon</div>
            <h2>Dr. Alexander Antipov, DDS</h2>
            <p>
              Dr. Alexander Antipov is a highly trained oral and maxillofacial surgeon dedicated
              to providing the highest standard of surgical care in Roseville, California.
              With extensive training in the full scope of oral and maxillofacial surgery,
              Dr. Antipov brings precision, compassion, and advanced techniques to every procedure.
            </p>
            <p>
              His expertise spans dental implant placement and full arch rehabilitation,
              wisdom teeth management, corrective jaw surgery, facial trauma repair, bone
              grafting, and the diagnosis and treatment of oral pathology. Dr. Antipov
              utilizes the latest 3D imaging and computer-guided surgical planning to ensure
              predictable, excellent outcomes for every patient.
            </p>
            <div className="credentials-grid">
              <div className="credential-card">
                <h4>Education</h4>
                <p>Doctor of Dental Surgery (DDS)</p>
              </div>
              <div className="credential-card">
                <h4>Residency</h4>
                <p>Oral & Maxillofacial Surgery Residency Training</p>
              </div>
              <div className="credential-card">
                <h4>Memberships</h4>
                <p>AAOMS, ADA, CDA, Sacramento District Dental Society</p>
              </div>
              <div className="credential-card">
                <h4>Privileges</h4>
                <p>Hospital & Ambulatory Surgery Center Privileges</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesGrid() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-header fade-in">
          <div className="section-badge">\u2726 Our Services</div>
          <h2 className="section-title">Full Scope Oral & Maxillofacial Surgery</h2>
          <p className="section-subtitle">
            From routine extractions to complex reconstructive procedures, Galleria Oral Surgery
            provides the complete range of oral and maxillofacial surgery services under one roof.
          </p>
        </div>
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div className="service-card fade-in" key={i}>
              <div className="icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DentalImplants() {
  return (
    <section className="section section-gray" id="dental-implants">
      <div className="container">
        <div className="section-header fade-in">
          <div className="section-badge">\u2726 Dental Implant Specialist</div>
          <h2 className="section-title">Dental Implants in Roseville, CA</h2>
          <p className="section-subtitle">
            Dental implants are the gold standard for replacing missing teeth. Dr. Antipov provides
            expert implant placement using 3D-guided surgery for precise, predictable, and long-lasting results.
          </p>
        </div>
        <div className="detail-grid fade-in">
          <div className="detail-content">
            <h3>Why Choose Dental Implants?</h3>
            <ul>
              <li>Look, feel, and function like natural teeth</li>
              <li>Preserve jawbone and prevent bone loss</li>
              <li>No damage to adjacent healthy teeth</li>
              <li>Over 95% long-term success rate</li>
              <li>Eat your favorite foods with confidence</li>
              <li>Lifetime solution with proper care</li>
            </ul>
            <h3>Types of Dental Implants We Offer</h3>
            <p>
              <strong>Single Tooth Implants</strong> replace individual missing teeth with a titanium
              implant post, abutment, and custom porcelain crown that blends seamlessly with your smile.
            </p>
            <p>
              <strong>Multiple Tooth Implants</strong> use implant-supported bridges to replace
              several adjacent missing teeth without the need for removable partial dentures.
            </p>
            <p>
              <strong>Full Arch Implants (All-on-4/All-on-6)</strong> provide a complete set of
              fixed teeth supported by four to six strategically placed implants, often completed
              in a single surgical appointment.
            </p>
            <h3>Am I a Candidate?</h3>
            <p>
              Most adults with missing or failing teeth are candidates for dental implants.
              During your consultation, Dr. Antipov will evaluate your oral health, review 3D
              imaging of your jawbone, discuss your goals, and create a personalized treatment plan.
              Even patients with bone loss may qualify with bone grafting procedures.
            </p>
          </div>
          <div className="detail-sidebar">
            <h3>The Dental Implant Process</h3>
            <ol className="step-list">
              <li><strong>Consultation & 3D Imaging</strong> \u2014 Comprehensive exam, CBCT scan, and treatment planning</li>
              <li><strong>Treatment Planning</strong> \u2014 Computer-guided surgical plan for precise implant positioning</li>
              <li><strong>Implant Placement</strong> \u2014 Titanium implant placed into the jawbone under anesthesia</li>
              <li><strong>Healing & Integration</strong> \u2014 Osseointegration period (3\u20136 months) as implant fuses with bone</li>
              <li><strong>Final Restoration</strong> \u2014 Custom crown, bridge, or full arch prosthesis attached to implant</li>
            </ol>
            <div style={{ marginTop: 24, padding: "16px", background: "rgba(201,169,110,.08)", borderRadius: 8, borderLeft: "3px solid var(--gold)" }}>
              <p style={{ fontSize: ".85rem", color: "var(--gray-600)", marginBottom: 8 }}>
                <strong style={{ color: "var(--navy)" }}>Complimentary Implant Consultation</strong>
              </p>
              <p style={{ fontSize: ".82rem", color: "var(--gray-600)" }}>
                Includes exam, 3D imaging review, and personalized treatment plan with cost estimate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AllOnFour() {
  return (
    <section className="section" id="all-on-4">
      <div className="container">
        <div className="section-header fade-in">
          <div className="section-badge">\u2726 Full Arch Solutions</div>
          <h2 className="section-title">All-on-4 Full Arch Dental Implants</h2>
          <p className="section-subtitle">
            Transform your smile in as little as one day. All-on-4 dental implants provide a
            complete arch of fixed, beautiful teeth using just four strategically placed implants.
          </p>
        </div>
        <div className="detail-grid fade-in">
          <div className="detail-content">
            <h3>What Are All-on-4 Dental Implants?</h3>
            <p>
              The All-on-4 treatment concept is a revolutionary approach to full arch tooth
              replacement. Using just four dental implants \u2014 two placed vertically in the front
              of the jaw and two placed at angles in the back \u2014 an entire arch of fixed,
              non-removable teeth can be supported without the need for bone grafting in most cases.
            </p>
            <h3>Benefits Over Traditional Dentures</h3>
            <ul>
              <li>Fixed, non-removable teeth that never slip or shift</li>
              <li>Preserves jawbone and maintains facial structure</li>
              <li>Eat all foods including steak, corn, and apples</li>
              <li>No adhesives, pastes, or nightly removal</li>
              <li>Natural appearance and comfortable fit</li>
              <li>Often completed in a single surgical appointment</li>
              <li>Typically does not require bone grafting</li>
            </ul>
            <h3>The "Teeth in a Day" Concept</h3>
            <p>
              Many All-on-4 patients receive their new provisional teeth on the same day as
              their implant surgery. This means you can walk into Galleria Oral Surgery with
              failing or missing teeth and walk out with a beautiful, functional smile \u2014 all
              in a single appointment.
            </p>
          </div>
          <div className="detail-sidebar">
            <h3>All-on-4 vs. Alternatives</h3>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>All-on-4</th>
                  <th>Dentures</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Fixed / Non-Removable</td><td className="check">\u2713</td><td className="cross">\u2717</td></tr>
                <tr><td>Preserves Bone</td><td className="check">\u2713</td><td className="cross">\u2717</td></tr>
                <tr><td>Eat All Foods</td><td className="check">\u2713</td><td className="cross">\u2717</td></tr>
                <tr><td>No Adhesives Needed</td><td className="check">\u2713</td><td className="cross">\u2717</td></tr>
                <tr><td>Natural Appearance</td><td className="check">\u2713</td><td>\u2014</td></tr>
                <tr><td>Long-Term Value</td><td className="check">\u2713</td><td className="cross">\u2717</td></tr>
                <tr><td>Same-Day Teeth</td><td className="check">\u2713</td><td className="cross">\u2717</td></tr>
              </tbody>
            </table>
            <a href="#contact" className="btn-primary" style={{ display: "block", textAlign: "center", marginTop: 20 }}
              onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}>
              Schedule All-on-4 Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function WisdomTeeth() {
  const [openFaq, setOpenFaq] = useState(null);
  const wisdomFaqs = [
    { q: "When should wisdom teeth be removed?", a: "Wisdom teeth are typically recommended for removal between ages 17\u201325, before roots fully develop. However, they can be removed at any age if causing problems. Early evaluation allows for easier removal and faster recovery." },
    { q: "Is wisdom tooth removal painful?", a: "With modern anesthesia including IV sedation, most patients feel no pain during the procedure and often have no memory of it. Post-operative discomfort is well-managed with prescribed medications and typically subsides within a few days." },
    { q: "How long is recovery?", a: "Most patients return to normal activities within 3\u20135 days. Soft diet is recommended for the first week. Complete healing of the extraction sites takes approximately 2 weeks. Swelling peaks around day 2\u20133 and gradually resolves." },
    { q: "What if I keep my wisdom teeth?", a: "Impacted or partially erupted wisdom teeth can lead to infection, cysts, damage to adjacent teeth, crowding, and periodontal disease. Dr. Antipov will evaluate your specific situation and recommend the best course of action." },
  ];

  return (
    <section className="section section-gray" id="wisdom-teeth">
      <div className="container">
        <div className="section-header fade-in">
          <div className="section-badge">\u2726 Wisdom Teeth Specialist</div>
          <h2 className="section-title">Wisdom Teeth Removal in Roseville</h2>
          <p className="section-subtitle">
            Safe, comfortable wisdom teeth removal with IV sedation by an experienced oral surgeon.
            Galleria Oral Surgery provides expert care for impacted and erupted wisdom teeth.
          </p>
        </div>
        <div className="detail-grid fade-in">
          <div className="detail-content">
            <h3>Signs You May Need Wisdom Teeth Removed</h3>
            <ul>
              <li>Pain or swelling in the back of the jaw</li>
              <li>Red, swollen, or bleeding gums around wisdom teeth</li>
              <li>Jaw stiffness or difficulty opening the mouth</li>
              <li>Recurring infections or bad taste in the mouth</li>
              <li>Crowding or shifting of adjacent teeth</li>
              <li>Cyst formation visible on dental X-rays</li>
              <li>Difficulty cleaning around partially erupted teeth</li>
            </ul>
            <h3>Types of Wisdom Tooth Impaction</h3>
            <p>
              <strong>Soft Tissue Impaction:</strong> The tooth has emerged through the bone
              but is partially or fully covered by gum tissue, creating a pocket that traps
              food and bacteria.
            </p>
            <p>
              <strong>Partial Bony Impaction:</strong> The tooth has partially emerged through
              the jawbone but remains partially encased, making it difficult to clean and prone to decay.
            </p>
            <p>
              <strong>Full Bony Impaction:</strong> The tooth is completely encased within the
              jawbone and requires surgical removal. This is the most complex type of impaction.
            </p>
            <h3>Sedation Options</h3>
            <p>
              Dr. Antipov is trained in all levels of anesthesia administration. Most wisdom
              teeth patients choose IV sedation, which provides a comfortable, anxiety-free
              experience with no memory of the procedure. Local anesthesia and nitrous oxide
              are also available.
            </p>
          </div>
          <div className="detail-sidebar">
            <h3>Common Questions</h3>
            <div className="faq-list">
              {wisdomFaqs.map((faq, i) => (
                <div className={`faq-item ${openFaq === i ? "active" : ""}`} key={i}>
                  <div className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <h3>{faq.q}</h3>
                    <div className="faq-toggle">+</div>
                  </div>
                  <div className="faq-answer"><p>{faq.a}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PatientInfo() {
  return (
    <section className="section" id="patient-info">
      <div className="container">
        <div className="section-header fade-in">
          <div className="section-badge">\u2726 Patient Resources</div>
          <h2 className="section-title">Patient Information</h2>
          <p className="section-subtitle">
            Everything you need to know before, during, and after your visit to Galleria Oral Surgery.
          </p>
        </div>
        <div className="info-cards fade-in">
          <div className="info-card">
            <h3><span className="card-icon">\u2726</span> Your First Visit</h3>
            <p>Your initial consultation includes a comprehensive evaluation, 3D imaging as needed, diagnosis, and a personalized treatment plan. Please bring:</p>
            <ul>
              <li>Photo ID and insurance card</li>
              <li>Referral and X-rays from your dentist</li>
              <li>List of current medications</li>
              <li>Completed patient forms (available online)</li>
              <li>A responsible adult driver if sedation is planned</li>
            </ul>
          </div>
          <div className="info-card">
            <h3><span className="card-icon">\u2726</span> Insurance & Financing</h3>
            <p>We work with you to maximize your insurance benefits and make treatment affordable.</p>
            <ul>
              <li>Most major dental & medical insurance accepted</li>
              <li>Insurance verification before your appointment</li>
              <li>CareCredit financing available</li>
              <li>In-office payment plans for qualified patients</li>
              <li>Transparent pricing with no hidden fees</li>
              <li>Complimentary implant consultations</li>
            </ul>
          </div>
          <div className="info-card">
            <h3><span className="card-icon">\u2726</span> Pre-Operative Instructions</h3>
            <ul>
              <li>No eating or drinking 8 hours before IV sedation</li>
              <li>Wear comfortable, loose-fitting clothing</li>
              <li>Remove jewelry, contacts, and nail polish</li>
              <li>Arrange a responsible adult to drive you home</li>
              <li>Take prescribed pre-medications as directed</li>
              <li>Inform us of any illness before surgery</li>
            </ul>
          </div>
          <div className="info-card">
            <h3><span className="card-icon">\u2726</span> Post-Operative Care</h3>
            <ul>
              <li>Bite on gauze for 30\u201345 minutes after surgery</li>
              <li>Apply ice packs: 20 minutes on, 20 minutes off</li>
              <li>Soft diet for the first 3\u20137 days</li>
              <li>Take medications as prescribed</li>
              <li>No straws, smoking, or vigorous rinsing for 24 hours</li>
              <li>Gentle salt water rinses starting day 2</li>
              <li>Call us with any concerns: {PRACTICE.phone}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReferralSection() {
  const [form, setForm] = useState({
    doctorName: "", practiceName: "", doctorPhone: "", doctorEmail: "",
    patientName: "", patientDob: "", patientPhone: "",
    reason: "", urgency: "Routine", notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.doctorName.trim()) errs.doctorName = "Required";
    if (!form.practiceName.trim()) errs.practiceName = "Required";
    if (!form.doctorPhone.trim()) errs.doctorPhone = "Required";
    if (!form.doctorEmail.trim()) errs.doctorEmail = "Required";
    if (!form.patientName.trim()) errs.patientName = "Required";
    if (!form.reason) errs.reason = "Required";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      console.log("Referral submitted:", form);
      setSubmitted(true);
    }
  };

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  };

  if (submitted) {
    return (
      <section className="section section-gray" id="referral">
        <div className="container">
          <div className="form-section">
            <div className="form-success">
              <h3>Referral Received Successfully</h3>
              <p>Thank you for your referral. Our team will contact the patient within one business day to schedule their appointment. A confirmation has been sent to your email.</p>
              <button className="btn-primary" style={{ marginTop: 20 }} onClick={() => { setSubmitted(false); setForm({ doctorName: "", practiceName: "", doctorPhone: "", doctorEmail: "", patientName: "", patientDob: "", patientPhone: "", reason: "", urgency: "Routine", notes: "" }); }}>Submit Another Referral</button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section section-gray" id="referral">
      <div className="container">
        <div className="section-header fade-in">
          <div className="section-badge">\u2726 For Referring Doctors</div>
          <h2 className="section-title">Refer a Patient</h2>
          <p className="section-subtitle">
            Galleria Oral Surgery values our relationships with referring dental professionals.
            We provide prompt scheduling, excellent outcomes, and timely communication on every referral.
          </p>
        </div>
        <div className="form-section fade-in">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20, marginBottom: 40, textAlign: "center" }}>
            {[
              ["\u2726", "Same-Day Scheduling", "We contact referred patients within 24 hours"],
              ["\u2726", "Detailed Reports", "Treatment plans and post-op reports sent promptly"],
              ["\u2726", "Full Scope OMS", "One referral destination for all oral surgery needs"],
            ].map(([icon, title, desc]) => (
              <div key={title} style={{ padding: 20 }}>
                <div style={{ color: "var(--gold)", fontSize: "1.5rem", marginBottom: 8 }}>{icon}</div>
                <h4 style={{ fontFamily: "var(--font-heading)", fontSize: ".95rem", color: "var(--navy)", marginBottom: 4 }}>{title}</h4>
                <p style={{ fontSize: ".82rem", color: "var(--gray-600)" }}>{desc}</p>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit}>
            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.3rem", color: "var(--navy)", marginBottom: 20 }}>Online Referral Form</h3>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Referring Doctor Name *</label>
                <input className="form-input" value={form.doctorName} onChange={handleChange("doctorName")} placeholder="Dr. Jane Smith" style={errors.doctorName ? { borderColor: "#ef4444" } : {}} />
              </div>
              <div className="form-group">
                <label className="form-label">Practice Name *</label>
                <input className="form-input" value={form.practiceName} onChange={handleChange("practiceName")} placeholder="Smith Family Dentistry" style={errors.practiceName ? { borderColor: "#ef4444" } : {}} />
              </div>
              <div className="form-group">
                <label className="form-label">Office Phone *</label>
                <input className="form-input" type="tel" value={form.doctorPhone} onChange={handleChange("doctorPhone")} placeholder="(916) 555-0000" style={errors.doctorPhone ? { borderColor: "#ef4444" } : {}} />
              </div>
              <div className="form-group">
                <label className="form-label">Office Email *</label>
                <input className="form-input" type="email" value={form.doctorEmail} onChange={handleChange("doctorEmail")} placeholder="office@example.com" style={errors.doctorEmail ? { borderColor: "#ef4444" } : {}} />
              </div>
              <div className="form-group">
                <label className="form-label">Patient Name *</label>
                <input className="form-input" value={form.patientName} onChange={handleChange("patientName")} placeholder="Patient full name" style={errors.patientName ? { borderColor: "#ef4444" } : {}} />
              </div>
              <div className="form-group">
                <label className="form-label">Patient Date of Birth</label>
                <input className="form-input" type="date" value={form.patientDob} onChange={handleChange("patientDob")} />
              </div>
              <div className="form-group">
                <label className="form-label">Patient Phone</label>
                <input className="form-input" type="tel" value={form.patientPhone} onChange={handleChange("patientPhone")} placeholder="(916) 555-0000" />
              </div>
              <div className="form-group">
                <label className="form-label">Reason for Referral *</label>
                <select className="form-select" value={form.reason} onChange={handleChange("reason")} style={errors.reason ? { borderColor: "#ef4444" } : {}}>
                  <option value="">Select reason...</option>
                  {REFERRAL_REASONS.map((r) => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Urgency</label>
                <select className="form-select" value={form.urgency} onChange={handleChange("urgency")}>
                  <option value="Routine">Routine</option>
                  <option value="Urgent">Urgent</option>
                  <option value="Emergency">Emergency</option>
                </select>
              </div>
              <div className="form-group full">
                <label className="form-label">Clinical Notes / Additional Information</label>
                <textarea className="form-textarea" value={form.notes} onChange={handleChange("notes")} placeholder="Include relevant clinical findings, radiograph details, medical history notes, etc." />
              </div>
              <div className="form-group full" style={{ background: "var(--gray-100)", border: "2px dashed var(--gray-200)", borderRadius: 8, padding: 24, textAlign: "center" }}>
                <p style={{ color: "var(--gray-600)", fontSize: ".85rem" }}>
                  Radiographs can be emailed to <a href="mailto:referrals@galleriaoralsurgery.com" style={{ color: "var(--gold)", fontWeight: 600 }}>referrals@galleriaoralsurgery.com</a> or sent via your practice management software.
                </p>
              </div>
            </div>
            <button type="submit" className="form-submit" style={{ marginTop: 16 }}>Submit Referral</button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = "Required";
    if (!form.phone.trim()) errs.phone = "Required";
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      console.log("Patient contact submitted:", form);
      setSubmitted(true);
    }
  };

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  };

  if (submitted) {
    return (
      <section className="section" id="contact">
        <div className="container">
          <div className="form-section">
            <div className="form-success">
              <h3>Thank You for Contacting Us</h3>
              <p>We have received your message and will contact you within one business day. For immediate needs, please call {PRACTICE.phone}.</p>
              <button className="btn-primary" style={{ marginTop: 20 }} onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", service: "", message: "" }); }}>Send Another Message</button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header fade-in">
          <div className="section-badge">\u2726 Contact Us</div>
          <h2 className="section-title">Schedule Your Consultation</h2>
          <p className="section-subtitle">
            Ready to take the next step? Contact Galleria Oral Surgery to schedule your
            consultation with Dr. Antipov. We look forward to caring for you.
          </p>
        </div>
        <div className="form-section fade-in">
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input className="form-input" value={form.name} onChange={handleChange("name")} placeholder="Your full name" style={errors.name ? { borderColor: "#ef4444" } : {}} />
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number *</label>
                <input className="form-input" type="tel" value={form.phone} onChange={handleChange("phone")} placeholder="(916) 555-0000" style={errors.phone ? { borderColor: "#ef4444" } : {}} />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input className="form-input" type="email" value={form.email} onChange={handleChange("email")} placeholder="you@example.com" />
              </div>
              <div className="form-group">
                <label className="form-label">Service of Interest</label>
                <select className="form-select" value={form.service} onChange={handleChange("service")}>
                  <option value="">Select a service...</option>
                  <option>Dental Implants</option>
                  <option>Wisdom Teeth Removal</option>
                  <option>All-on-4 Full Arch Implants</option>
                  <option>Bone Grafting</option>
                  <option>Jaw Surgery</option>
                  <option>Tooth Extraction</option>
                  <option>TMJ Treatment</option>
                  <option>Oral Pathology</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group full">
                <label className="form-label">Message</label>
                <textarea className="form-textarea" value={form.message} onChange={handleChange("message")} placeholder="Tell us about your needs or ask any questions..." />
              </div>
            </div>
            <button type="submit" className="form-submit">Request Appointment</button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section section-gray" id="testimonials">
      <div className="container">
        <div className="section-header fade-in">
          <div className="section-badge">\u2726 Patient Reviews</div>
          <h2 className="section-title">What Our Patients Say</h2>
          <p className="section-subtitle">
            Hear from real patients about their experience at Galleria Oral Surgery.
          </p>
        </div>
        <div className="testimonials-grid fade-in">
          {TESTIMONIALS.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <p>{t.text}</p>
              <div className="author">
                <div className="avatar">{t.name[0]}</div>
                <div>
                  <div className="name">{t.name}</div>
                  <div className="stars">{"\u2605".repeat(t.rating)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-header fade-in">
          <div className="section-badge">\u2726 Common Questions</div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Find answers to common questions about oral surgery procedures, insurance, and what to expect.
          </p>
        </div>
        <div className="faq-list fade-in">
          {FAQS.map((faq, i) => (
            <div className={`faq-item ${openIndex === i ? "active" : ""}`} key={i}>
              <div className="faq-question" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                <h3>{faq.q}</h3>
                <div className="faq-toggle">+</div>
              </div>
              <div className="faq-answer"><p>{faq.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section className="section section-gray" id="location">
      <div className="container">
        <div className="section-header fade-in">
          <div className="section-badge">\u2726 Visit Us</div>
          <h2 className="section-title">Our Location</h2>
          <p className="section-subtitle">
            Conveniently located near the Westfield Galleria at Roseville, our modern surgical
            facility is easily accessible from throughout the greater Sacramento region.
          </p>
        </div>
        <div className="location-grid fade-in">
          <div className="location-info">
            <h3>Galleria Oral Surgery</h3>
            <div className="location-detail">
              <div className="loc-icon">\u2726</div>
              <div className="loc-text">
                <h4>Address</h4>
                <p>{PRACTICE.address}</p>
              </div>
            </div>
            <div className="location-detail">
              <div className="loc-icon">\u2726</div>
              <div className="loc-text">
                <h4>Phone</h4>
                <p><a href={`tel:${PRACTICE.phone}`} style={{ color: "var(--gold)" }}>{PRACTICE.phone}</a></p>
              </div>
            </div>
            <div className="location-detail">
              <div className="loc-icon">\u2726</div>
              <div className="loc-text">
                <h4>Email</h4>
                <p><a href={`mailto:${PRACTICE.email}`} style={{ color: "var(--gold)" }}>{PRACTICE.email}</a></p>
              </div>
            </div>
            <div className="location-detail">
              <div className="loc-icon">\u2726</div>
              <div className="loc-text">
                <h4>Office Hours</h4>
                <p>Monday \u2013 Thursday: 8:00 AM \u2013 5:00 PM</p>
                <p>Friday: 8:00 AM \u2013 2:00 PM</p>
                <p>Saturday \u2013 Sunday: Closed</p>
              </div>
            </div>
            <h3 style={{ marginTop: 28 }}>Communities We Serve</h3>
            <div className="cities-grid">
              {CITIES_SERVED.map((c) => <span className="city-tag" key={c}>{c}</span>)}
            </div>
          </div>
          <div className="map-placeholder">
            <div className="map-pin">{"\uD83D\uDCCD"}</div>
            <p style={{ fontSize: ".9rem", fontWeight: 500 }}>Near Westfield Galleria at Roseville</p>
            <p style={{ fontSize: ".8rem", marginTop: 8 }}>1197 Roseville Pkwy, Suite 100</p>
            <a href="https://maps.google.com/?q=1197+Roseville+Pkwy+Suite+100+Roseville+CA+95678" target="_blank" rel="noopener noreferrer"
              className="btn-primary" style={{ marginTop: 20, fontSize: ".8rem", padding: "10px 20px" }}>
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <h4 style={{ color: "var(--gold)", fontFamily: "var(--font-heading)", fontSize: "1.1rem", letterSpacing: 1, marginBottom: 12 }}>Galleria Oral Surgery</h4>
          <p>Dr. Alexander Antipov, DDS</p>
          <p>Oral & Maxillofacial Surgery</p>
          <p>{PRACTICE.address}</p>
          <p><a href={`tel:${PRACTICE.phone}`}>{PRACTICE.phone}</a></p>
          <p>{PRACTICE.hours}</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Dr. Antipov</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#patient-info">Patient Info</a></li>
            <li><a href="#referral">Refer a Patient</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul className="footer-links">
            <li><a href="#dental-implants">Dental Implants</a></li>
            <li><a href="#all-on-4">All-on-4 Implants</a></li>
            <li><a href="#wisdom-teeth">Wisdom Teeth</a></li>
            <li><a href="#services">Bone Grafting</a></li>
            <li><a href="#services">Jaw Surgery</a></li>
            <li><a href="#services">Facial Trauma</a></li>
            <li><a href="#services">TMJ Treatment</a></li>
          </ul>
        </div>
        <div>
          <h4>For Doctors</h4>
          <ul className="footer-links">
            <li><a href="#referral">Online Referral Form</a></li>
            <li><a href="mailto:referrals@galleriaoralsurgery.com">Email Referral</a></li>
            <li><a href={`tel:${PRACTICE.phone}`}>Call to Refer</a></li>
          </ul>
          <h4 style={{ marginTop: 24 }}>Emergency</h4>
          <ul className="footer-links">
            <li><a href={`tel:${PRACTICE.phone}`}>{PRACTICE.phone}</a></li>
            <li><a href="#services">Facial Trauma</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Galleria Oral Surgery. All rights reserved. This website is for informational purposes only and does not constitute medical advice. Individual results may vary.</p>
        <p className="powered">Powered by Fusion Dental Implants</p>
      </div>
    </footer>
  );
}

/* ========== MAIN APP ========== */
export default function App() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = STYLES;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  });

  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <ServicesGrid />
      <DentalImplants />
      <AllOnFour />
      <WisdomTeeth />
      <PatientInfo />
      <Testimonials />
      <ReferralSection />
      <ContactForm />
      <FAQ />
      <Location />
      <Footer />
    </>
  );
}