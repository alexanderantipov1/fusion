// ============================================================
// GALLERIA ORAL SURGERY - DATA & STYLES
// All constants, content, and CSS for the advanced website
// ============================================================

export const PRACTICE = {
  name: "Galleria Oral & Maxillofacial Surgery",
  doctor: "Dr. Alexander Antipov, DDS",
  specialty: "Oral & Maxillofacial Surgery",
  phone: "(916) 783-2110",
  fax: "(916) 783-2111",
  email: "info@galleriaoms.com",
  address: "911 Reserve Drive, Suite 150, Roseville, CA 95678",
  hours: "Mon\u2013Thu: 8AM\u20135PM | Fri: 8AM\u20132PM",
  whatsapp: "+19167832110",
  telegram: "@GalleriaOMS",
  website: "galleriaoms.com"
};

export const CITIES_SERVED = [
  { region: "Sacramento Metro", cities: ["Roseville","Sacramento","Rocklin","Lincoln","Granite Bay","Citrus Heights","Folsom","Auburn","Loomis","El Dorado Hills","Elk Grove","Rancho Cordova","Fair Oaks","Orangevale","Carmichael","Davis","Woodland","West Sacramento","Antelope","North Highlands","Galt","Rio Linda","Natomas","Arden-Arcade"] },
  { region: "Foothills & Sierra", cities: ["Grass Valley","Nevada City","Placerville","Cameron Park","Shingle Springs","Colfax","Truckee","South Lake Tahoe","Tahoe City"] },
  { region: "North Valley", cities: ["Yuba City","Marysville","Chico","Paradise","Oroville","Redding","Anderson","Red Bluff","Mount Shasta","Yreka","Susanville"] },
  { region: "Wine Country & North Bay", cities: ["Vacaville","Fairfield","Dixon","Napa","Santa Rosa","Vallejo","Ukiah"] },
  { region: "Central Valley", cities: ["Stockton","Lodi","Manteca","Tracy","Modesto","Turlock","Merced"] },
  { region: "Nevada", cities: ["Reno","Sparks","Carson City","Incline Village","Minden","Gardnerville","Fernley","Fallon","Dayton"] },
  { region: "Southern Oregon", cities: ["Medford","Ashland","Grants Pass","Klamath Falls","Roseburg","Brookings"] }
];

export const SERVICES = [
  { icon: "\u2726", title: "Dental Implants", desc: "Single tooth, multiple teeth, and full arch implant placement with 3D-guided surgery for precise, lasting results.", cat: "implants" },
  { icon: "\u2726", title: "Wisdom Teeth Removal", desc: "Safe, comfortable extraction of impacted and erupted wisdom teeth with IV sedation options for anxiety-free care.", cat: "extraction" },
  { icon: "\u2726", title: "All-on-4 Full Arch", desc: "Complete smile restoration in as little as one day using four strategically placed implants to support a full arch.", cat: "implants" },
  { icon: "\u2726", title: "Bone Grafting & Sinus Lifts", desc: "Advanced bone augmentation to rebuild jawbone volume and prepare the foundation for successful dental implants.", cat: "grafting" },
  { icon: "\u2726", title: "Corrective Jaw Surgery", desc: "Orthognathic surgery to correct jaw misalignment, improve bite function, facial aesthetics, and airway conditions.", cat: "jaw" },
  { icon: "\u2726", title: "Tooth Extractions", desc: "Simple and surgical extractions performed with precision and comfort, including impacted and broken teeth.", cat: "extraction" },
  { icon: "\u2726", title: "Facial Trauma Repair", desc: "Emergency treatment of facial injuries including fractured jaws, cheekbones, orbital bones, and lacerations.", cat: "trauma" },
  { icon: "\u2726", title: "TMJ / TMD Treatment", desc: "Comprehensive diagnosis and treatment of temporomandibular joint disorders including arthroscopy and joint replacement.", cat: "jaw" },
  { icon: "\u2726", title: "Oral Pathology & Biopsy", desc: "Evaluation and biopsy of oral lesions, cysts, tumors, and abnormal tissue for accurate diagnosis and treatment planning.", cat: "pathology" },
  { icon: "\u2726", title: "Pre-Prosthetic Surgery", desc: "Surgical preparation of the mouth for dentures or prosthetics, including bone smoothing and soft tissue recontouring.", cat: "grafting" },
  { icon: "\u2726", title: "Platelet-Rich Fibrin (PRF)", desc: "Biologic therapy using your own blood concentrates to accelerate healing and improve surgical outcomes.", cat: "grafting" },
  { icon: "\u2726", title: "IV Sedation & Anesthesia", desc: "Full spectrum anesthesia from local to IV sedation and general anesthesia for patient comfort during any procedure.", cat: "sedation" },
  { icon: "\u2726", title: "Apicoectomy", desc: "Root-end surgery to remove infected tissue and seal the root tip when conventional root canal treatment is insufficient.", cat: "extraction" },
  { icon: "\u2726", title: "Expose & Bond", desc: "Surgical exposure of impacted canines and other teeth with orthodontic bonding to guide eruption into alignment.", cat: "jaw" },
  { icon: "\u2726", title: "Frenectomy", desc: "Release of restrictive frenum tissue (tongue-tie or lip-tie) to improve function, speech, and oral development.", cat: "jaw" },
  { icon: "\u2726", title: "Cleft Lip & Palate", desc: "Surgical management of cleft conditions including bone grafting and reconstructive procedures as part of multidisciplinary care.", cat: "jaw" }
];

export const TESTIMONIALS = [
  { name: "Sarah M.", text: "Dr. Antipov made my dental implant experience completely painless. His expertise and the caring staff made all the difference. I now have a beautiful, confident smile!", rating: 5, procedure: "Dental Implants" },
  { name: "James R.", text: "I was terrified of getting my wisdom teeth out, but Dr. Antipov and his team put me at ease. The IV sedation was seamless and recovery was faster than expected.", rating: 5, procedure: "Wisdom Teeth" },
  { name: "Linda K.", text: "After years of struggling with loose dentures, Dr. Antipov gave me All-on-4 implants. It was truly life-changing. I can eat, laugh, and smile with complete confidence again.", rating: 5, procedure: "All-on-4 Implants" },
  { name: "Dr. Michael Torres, DDS", text: "As a referring dentist, I consistently send my patients to Dr. Antipov for oral surgery. His communication is excellent, outcomes are outstanding, and my patients always return with praise.", rating: 5, procedure: "Referring Doctor" },
  { name: "Robert H.", text: "The All-on-4 cost calculator on the website helped me understand the investment before my consultation. No surprises \u2014 Dr. Antipov and team were transparent from start to finish.", rating: 5, procedure: "All-on-4 Implants" },
  { name: "Maria G.", text: "I drove from Reno to see Dr. Antipov for my jaw surgery and it was worth every mile. World-class care, incredible results. The knowledge base articles helped me prepare perfectly.", rating: 5, procedure: "Jaw Surgery" }
];

export const FAQS = [
  { q: "Do I need a referral to see Dr. Antipov?", a: "While many patients are referred by their general dentist or orthodontist, a referral is not required. You are welcome to contact our office directly at (916) 783-2110 to schedule a consultation for any oral surgery needs." },
  { q: "What types of sedation do you offer?", a: "We offer the full spectrum of anesthesia options including local anesthesia, nitrous oxide (laughing gas), intravenous (IV) conscious sedation, and general anesthesia. Dr. Antipov will recommend the best option based on your procedure and comfort level." },
  { q: "How long does dental implant surgery take?", a: "A single dental implant placement typically takes 30\u201360 minutes. More complex procedures like All-on-4 full arch implants may take 2\u20134 hours. During your consultation, Dr. Antipov will provide a detailed timeline for your specific treatment plan." },
  { q: "What is the recovery time after wisdom teeth removal?", a: "Most patients return to normal activities within 3\u20135 days. Complete healing of the extraction sites takes about 2 weeks. We provide detailed post-operative instructions and are available for any concerns during your recovery." },
  { q: "Do you accept dental insurance?", a: "Yes, we accept most major dental and medical insurance plans. Our team will verify your benefits and provide a detailed cost estimate before any procedure. We also offer financing through CareCredit and in-office payment plans." },
  { q: "How long do dental implants last?", a: "With proper care, dental implants can last a lifetime. The implant itself is made of biocompatible titanium that fuses permanently with your jawbone. The crown may need replacement after 15\u201320 years due to normal wear." },
  { q: "What is the cost of All-on-4 dental implants?", a: "The cost varies based on individual needs, materials selected, and whether additional procedures are required. Use our online cost calculator for an estimate, or schedule a complimentary consultation for a detailed breakdown with flexible financing options." },
  { q: "Is oral surgery painful?", a: "Modern techniques and anesthesia ensure your comfort throughout every procedure. Most patients report that the actual procedure was much easier than anticipated. Post-operative discomfort is well-managed with prescribed medications and typically resolves within a few days." },
  { q: "What should I do in a dental emergency?", a: "If you experience a knocked-out tooth, jaw fracture, or severe oral bleeding, call our office immediately at (916) 783-2110. We accommodate emergency cases and provide after-hours emergency contact information on our voicemail." },
  { q: "How do referring doctors send patient referrals?", a: "Referring doctors can submit referrals through our online referral form, by fax to (916) 783-2111, or by calling our office directly. We provide prompt communication back to referring offices including treatment plans and post-operative reports." },
  { q: "Do you serve patients from Reno and Nevada?", a: "Yes! We regularly treat patients from Reno, Sparks, Carson City, and throughout Northern Nevada. Our Roseville location is conveniently accessible via I-80. We provide dental implants, wisdom teeth removal, and full scope oral surgery for patients throughout the tri-state region." },
  { q: "What AI tools does your website offer?", a: "Our website features an AI Symptom Checker to help assess your condition and urgency level, detailed Cost Calculators for implants, All-on-4, and wisdom teeth, plus a comprehensive evidence-based Knowledge Base with 25+ articles on oral surgery topics. These tools help you prepare for your consultation." }
];

export const REFERRAL_REASONS = [
  "Dental Implants","Wisdom Teeth Extraction","Tooth Extraction",
  "Bone Grafting / Sinus Lift","Corrective Jaw Surgery","Oral Pathology / Biopsy",
  "TMJ Treatment","Facial Trauma","Expose & Bond","Pre-Prosthetic Surgery",
  "Apicoectomy","Frenectomy","Cleft Lip & Palate","Other"
];

export const SYMPTOM_CATEGORIES = [
  { id: "pain", icon: "\u26A1", label: "Tooth or Jaw Pain", followUps: [
    { question: "Where is the pain located?", options: ["Upper front teeth","Upper back teeth","Lower front teeth","Lower back teeth","Jaw joint (near ear)","Entire jaw","Multiple areas"] },
    { question: "How long have you had pain?", options: ["Just started today","A few days","1-2 weeks","More than 2 weeks","Comes and goes for months"] },
    { question: "What makes it worse?", options: ["Chewing or biting","Hot or cold foods","Nothing specific - constant","Opening mouth wide","Touching the area","Lying down"] }
  ]},
  { id: "swelling", icon: "\uD83D\uDD34", label: "Swelling or Infection", followUps: [
    { question: "Where is the swelling?", options: ["Gums around a tooth","Cheek or face","Under the jaw","Near the eye","Inside the mouth (roof/floor)"] },
    { question: "Any additional symptoms?", options: ["Fever","Bad taste in mouth","Difficulty swallowing","Difficulty breathing","Pus or drainage","None of these"] },
    { question: "When did swelling start?", options: ["Today","1-2 days ago","3-7 days ago","More than a week ago","Recurring swelling"] }
  ]},
  { id: "missing", icon: "\uD83E\uDDB7", label: "Missing Teeth", followUps: [
    { question: "How many teeth are missing?", options: ["1 tooth","2-3 teeth","4-6 teeth","Most teeth","All teeth (upper)","All teeth (lower)","All teeth (both)"] },
    { question: "How long have they been missing?", options: ["Recently extracted","Less than 6 months","6-12 months","1-5 years","More than 5 years"] },
    { question: "Current replacement (if any)?", options: ["None","Removable partial denture","Full denture","Bridge","Flipper/temporary","Not satisfied with current solution"] }
  ]},
  { id: "broken", icon: "\uD83D\uDC94", label: "Broken or Damaged Tooth", followUps: [
    { question: "What happened?", options: ["Cracked while eating","Injury or accident","Old filling broke","Tooth crumbled/decayed","Chipped tooth"] },
    { question: "How much of the tooth is affected?", options: ["Small chip","Half the tooth","Most of the tooth broken","Down to the gum line","Tooth is loose"] },
    { question: "Are you in pain?", options: ["Severe pain","Moderate pain","Mild discomfort","Sensitivity only","No pain"] }
  ]},
  { id: "jaw", icon: "\uD83D\uDE23", label: "Jaw Problems / TMJ", followUps: [
    { question: "What symptoms do you have?", options: ["Clicking or popping","Jaw locking open","Jaw locking closed","Pain when chewing","Headaches","Ear pain","Grinding or clenching"] },
    { question: "How long have you had symptoms?", options: ["Less than a month","1-3 months","3-12 months","More than a year","On and off for years"] },
    { question: "Does it affect daily life?", options: ["Cannot open mouth fully","Difficulty eating","Disrupts sleep","Constant pain","Occasional inconvenience","Mostly concerned about sound"] }
  ]},
  { id: "wisdom", icon: "\uD83E\uDEE0", label: "Wisdom Teeth Issues", followUps: [
    { question: "What are you experiencing?", options: ["Pain in back of mouth","Gum swelling behind molars","Difficulty opening mouth","Bad taste/smell","Dentist recommended removal","No symptoms but want evaluation"] },
    { question: "How many wisdom teeth are concerning?", options: ["1 tooth","2 teeth","3 teeth","All 4 teeth","Not sure"] },
    { question: "Has a dentist taken X-rays?", options: ["Yes - impacted teeth shown","Yes - partially erupted","Yes - fully erupted but problematic","No recent X-rays","Not sure"] }
  ]},
  { id: "trauma", icon: "\uD83D\uDE91", label: "Facial Trauma / Injury", followUps: [
    { question: "What happened?", options: ["Sports injury","Fall","Car accident","Work accident","Assault","Other accident"] },
    { question: "What is affected?", options: ["Knocked out tooth/teeth","Broken jaw","Broken cheekbone","Cut lip or face","Loose teeth","Multiple facial injuries"] },
    { question: "When did this happen?", options: ["Just now / today","Yesterday","2-3 days ago","This week","More than a week ago"] }
  ]},
  { id: "cosmetic", icon: "\u2728", label: "Cosmetic Concerns", followUps: [
    { question: "What concerns you?", options: ["Missing teeth affecting appearance","Jaw alignment/profile","Gummy smile","Facial asymmetry","Sunken facial appearance from missing teeth","Want to replace dentures with implants"] },
    { question: "What is your goal?", options: ["Replace missing teeth permanently","Improve jaw alignment","Full smile makeover","Replace loose dentures","Improve facial profile","Explore all options"] },
    { question: "Have you had previous consultations?", options: ["No, this is my first inquiry","Yes, with a general dentist","Yes, with another oral surgeon","Yes, with a prosthodontist","Seeking second opinion"] }
  ]}
];

export const SYMPTOM_RECOMMENDATIONS = {
  pain: { low: { urgency: "Routine", procedures: ["Comprehensive Evaluation","Diagnostic Imaging"], desc: "Mild tooth or jaw pain may indicate early dental issues. A thorough evaluation with 3D imaging will help identify the cause and determine the best treatment approach." }, high: { urgency: "Urgent", procedures: ["Emergency Evaluation","Possible Extraction","Infection Management"], desc: "Significant pain often indicates an advanced condition requiring prompt attention. We recommend scheduling within 24-48 hours to prevent complications." }},
  swelling: { low: { urgency: "Urgent", procedures: ["Clinical Evaluation","Antibiotic Therapy","Possible Incision & Drainage"], desc: "Oral swelling can indicate infection and should be evaluated promptly. Early treatment typically involves antibiotics and monitoring, with surgical intervention if needed." }, high: { urgency: "Emergency", procedures: ["Emergency Evaluation","Incision & Drainage","IV Antibiotics","Possible Hospital Admission"], desc: "Significant facial swelling with fever, difficulty swallowing, or breathing is a medical emergency. Please call us immediately or go to the nearest emergency room." }},
  missing: { low: { urgency: "Routine", procedures: ["Implant Consultation","3D CT Scan","Treatment Planning"], desc: "Dental implants are the gold standard for replacing missing teeth. A consultation will include 3D imaging to assess bone quality and develop a personalized treatment plan." }, high: { urgency: "Routine", procedures: ["Full Arch Consultation","All-on-4 Evaluation","Bone Assessment"], desc: "For extensive tooth loss, All-on-4 or full arch implant solutions can restore complete function and aesthetics. A comprehensive evaluation will determine the best approach for your situation." }},
  broken: { low: { urgency: "Routine", procedures: ["Evaluation","Possible Extraction","Implant Planning"], desc: "A damaged tooth should be evaluated to determine if it can be saved or if extraction with implant replacement is the best option." }, high: { urgency: "Urgent", procedures: ["Urgent Evaluation","Extraction","Pain Management","Implant Planning"], desc: "A severely broken tooth with pain requires prompt evaluation. Treatment may include extraction with socket preservation for future implant placement." }},
  jaw: { low: { urgency: "Routine", procedures: ["TMJ Evaluation","Conservative Therapy","Custom Night Guard"], desc: "TMJ symptoms often respond well to conservative treatment including medication, physical therapy, and custom night guards. A thorough evaluation will guide the treatment plan." }, high: { urgency: "Urgent", procedures: ["TMJ Evaluation","Advanced Imaging","Possible Arthroscopy","Surgical Consultation"], desc: "Significant TMJ symptoms affecting daily function warrant a comprehensive evaluation. Advanced cases may benefit from arthroscopic surgery or other surgical interventions." }},
  wisdom: { low: { urgency: "Routine", procedures: ["Wisdom Tooth Evaluation","Panoramic X-ray","Surgical Planning"], desc: "Even without symptoms, wisdom teeth should be evaluated for potential future problems. Early removal often means easier surgery and faster recovery." }, high: { urgency: "Urgent", procedures: ["Urgent Evaluation","Wisdom Teeth Extraction","Infection Management"], desc: "Active symptoms from wisdom teeth indicate a need for timely evaluation and likely extraction. We can often schedule surgery within 1-2 weeks of consultation." }},
  trauma: { low: { urgency: "Urgent", procedures: ["Trauma Evaluation","Imaging","Stabilization"], desc: "Even seemingly minor facial injuries should be evaluated to rule out fractures and ensure proper healing. Early treatment leads to better outcomes." }, high: { urgency: "Emergency", procedures: ["Emergency Surgery","Fracture Repair","Reimplantation","Laceration Repair"], desc: "Facial trauma requires immediate attention. If you are experiencing active bleeding, difficulty breathing, or a dislocated jaw, call 911 or go to the nearest ER. Call us for dental emergencies." }},
  cosmetic: { low: { urgency: "Routine", procedures: ["Cosmetic Consultation","Treatment Planning","Digital Smile Preview"], desc: "A cosmetic consultation will explore options to achieve your aesthetic goals, from dental implants to jaw surgery. We use digital planning to preview potential results." }, high: { urgency: "Routine", procedures: ["Comprehensive Consultation","Full Arch Planning","Orthognathic Evaluation"], desc: "Complex cosmetic concerns may involve multiple procedures. A comprehensive consultation will create a phased treatment plan to achieve your desired outcome." }}
};

export const IMPLANT_PRICING = {
  singleImplant: { low: 3000, high: 5000 },
  abutmentCrown: { low: 1500, high: 3000 },
  boneGraft: { low: 800, high: 3000 },
  sinusLift: { low: 2000, high: 4000 },
  extraction: { low: 300, high: 800 },
  ivSedation: { low: 500, high: 1000 },
  allOn4Acrylic: { low: 20000, high: 28000 },
  allOn4ZirconiaHybrid: { low: 25000, high: 33000 },
  allOn4FullZirconia: { low: 30000, high: 40000 },
  allOn6Acrylic: { low: 25000, high: 33000 },
  allOn6ZirconiaHybrid: { low: 30000, high: 38000 },
  allOn6FullZirconia: { low: 35000, high: 48000 },
  wisdomSimple: { low: 300, high: 500 },
  wisdomSoftTissue: { low: 400, high: 650 },
  wisdomPartialBony: { low: 500, high: 800 },
  wisdomFullBony: { low: 600, high: 1000 },
  nitrous: { low: 100, high: 200 },
  generalAnesthesia: { low: 800, high: 1500 }
};

export const KNOWLEDGE_BASE = [
  // === DENTAL IMPLANTS ===
  {
    id: "what-are-dental-implants",
    title: "What Are Dental Implants?",
    category: "Dental Implants",
    readTime: "5 min",
    tags: ["implants","titanium","zirconia","tooth replacement"],
    featured: true,
    keyFacts: [
      "95-98% success rate over 10 years (Buser et al., JOMI 2017)",
      "Dental implants prevent jawbone loss that occurs with missing teeth",
      "Titanium and zirconia are the two primary implant materials",
      "Implants can last a lifetime with proper maintenance"
    ],
    content: "Dental implants are artificial tooth roots made of biocompatible materials that are surgically placed into the jawbone to support replacement teeth. They represent the gold standard in modern tooth replacement, offering a permanent solution that looks, feels, and functions like natural teeth.\n\nThe most common type is the endosteal implant, a small titanium post that is placed directly into the jawbone. Over 3-6 months, the implant undergoes osseointegration \u2014 the process by which bone grows around and fuses with the titanium surface, creating an incredibly strong foundation. Zirconia (ceramic) implants are a newer alternative that offer a metal-free option for patients with specific preferences or sensitivities.\n\nUnlike bridges, which require grinding down adjacent healthy teeth, dental implants preserve surrounding tooth structure and stimulate the jawbone to prevent the bone loss that naturally occurs after tooth extraction. Studies published in the Journal of Oral and Maxillofacial Implants show long-term success rates of 95-98% for properly placed implants.\n\nDr. Antipov uses advanced 3D cone beam CT imaging and computer-guided surgical planning to ensure precise implant placement for optimal outcomes. Whether you need a single tooth replaced or a full arch restoration, dental implants provide a reliable, long-lasting solution.",
    references: [
      "Buser D, Sennerby L, De Bruyn H. Modern implant dentistry based on osseointegration. J Oral Maxillofac Implants. 2017;32(4):e167-e209.",
      "Moraschini V, et al. Implant survival rates, marginal bone loss, and peri-implant diseases. Int J Oral Maxillofac Surg. 2015;44(3):377-388.",
      "Pjetursson BE, et al. A systematic review of the survival and complication rates of implant-supported fixed dental prostheses. Clin Oral Implants Res. 2012;23(s6):163-174."
    ],
    relatedIds: ["single-vs-bridge","implant-process-step-by-step","implant-failure-prevention"]
  },
  {
    id: "single-vs-bridge",
    title: "Single Tooth Implant vs. Bridge: Which Is Better?",
    category: "Dental Implants",
    readTime: "4 min",
    tags: ["implants","bridge","comparison","single tooth"],
    keyFacts: [
      "Implants have a 97% 10-year survival rate vs. 89% for bridges (Pjetursson, 2007)",
      "Bridges require grinding down 2 adjacent healthy teeth",
      "Implants preserve jawbone; bridges allow bone resorption",
      "Implants have lower lifetime cost due to longevity"
    ],
    content: "When a single tooth is lost, two primary replacement options exist: a dental implant or a traditional fixed bridge. While both can restore function and aesthetics, they differ significantly in how they achieve this and their long-term implications.\n\nA dental bridge requires preparing (grinding down) the two teeth adjacent to the gap, fitting crowns over them, and suspending a false tooth between them. While effective, this process permanently alters healthy teeth and creates areas that are more difficult to clean, increasing the risk of decay and gum disease at the supporting teeth.\n\nA dental implant, by contrast, is a standalone solution. A titanium post replaces the tooth root, and a custom crown is attached on top. No adjacent teeth are touched. Research published in the Journal of Prosthodontics demonstrates that implants have superior 10-year survival rates (97%) compared to bridges (89%), and unlike bridges, implants stimulate the jawbone to prevent resorption.\n\nFrom a cost perspective, while an implant may have a higher initial investment, its longevity typically makes it more cost-effective over a lifetime. Bridges typically need replacement every 10-15 years, while implants can last a lifetime with proper care. Dr. Antipov evaluates each patient individually to recommend the optimal solution based on bone quality, adjacent tooth health, and personal goals.",
    references: [
      "Pjetursson BE, et al. Comparison of survival and complication rates of tooth-supported fixed dental prostheses and implant-supported FDPs. Clin Oral Implants Res. 2007;18(s3):97-113.",
      "Thalji G, et al. Single-tooth implant versus three-unit fixed dental prosthesis: A systematic review. J Prosthodont. 2015;24(2):145-153."
    ],
    relatedIds: ["what-are-dental-implants","implant-process-step-by-step"]
  },
  {
    id: "implant-process-step-by-step",
    title: "The Dental Implant Process: Step by Step",
    category: "Dental Implants",
    readTime: "6 min",
    tags: ["implants","process","surgery","timeline","healing"],
    featured: true,
    keyFacts: [
      "Total treatment time: 3-9 months depending on case complexity",
      "Implant placement surgery: 30-60 minutes per implant",
      "Osseointegration (bone healing): 3-6 months",
      "Same-day temporary teeth possible in select cases"
    ],
    content: "Understanding the dental implant process helps patients feel prepared and confident. While each case is unique, the general process follows a well-established protocol that has been refined over decades of clinical research and practice.\n\nStep 1 \u2014 Consultation & Planning: Your journey begins with a comprehensive evaluation including 3D cone beam CT imaging. Dr. Antipov assesses your bone density, anatomy, and overall health to create a precise, computer-guided surgical plan. This digital planning ensures optimal implant positioning for the best functional and aesthetic outcome.\n\nStep 2 \u2014 Implant Placement Surgery: The titanium implant is precisely placed into the jawbone through a minimally invasive procedure. Using guided surgery technology, Dr. Antipov places the implant in the exact planned position. The procedure typically takes 30-60 minutes per implant under local anesthesia or IV sedation. In select cases, a temporary tooth can be attached the same day.\n\nStep 3 \u2014 Healing & Osseointegration: Over the next 3-6 months, the implant undergoes osseointegration, where your jawbone naturally grows around and fuses with the titanium surface. This biological process creates an incredibly strong foundation. During this period, you may wear a temporary restoration.\n\nStep 4 \u2014 Final Restoration: Once the implant has fully integrated, an abutment (connector) is placed, impressions are taken, and your custom-made crown, bridge, or full arch prosthesis is fabricated and attached. The final restoration is designed to match your natural teeth in color, shape, and function.\n\nPost-treatment, dental implants require the same care as natural teeth: regular brushing, flossing, and professional cleanings. With proper maintenance, your implants can last a lifetime.",
    references: [
      "Buser D, et al. Optimized timing strategies for dental implant placement. J Oral Maxillofac Implants. 2017;32(1):8-22.",
      "Chen ST, Buser D. Esthetic outcomes following immediate and early implant placement in the anterior maxilla. Int J Oral Maxillofac Implants. 2014;29(Suppl):186-215."
    ],
    relatedIds: ["what-are-dental-implants","immediate-vs-delayed","implant-failure-prevention"]
  },
  {
    id: "immediate-vs-delayed",
    title: "Immediate vs. Delayed Implant Placement",
    category: "Dental Implants",
    readTime: "4 min",
    tags: ["implants","immediate","timing","extraction"],
    keyFacts: [
      "Immediate placement: implant placed same day as extraction",
      "Similar success rates: 95-98% for both approaches (Chen & Buser, 2014)",
      "Immediate placement reduces total treatment time by 3-6 months",
      "Not all cases are suitable for immediate placement"
    ],
    content: "One of the most common questions patients ask is whether an implant can be placed at the same time a tooth is extracted. The answer depends on several clinical factors, and both approaches offer excellent outcomes when properly indicated.\n\nImmediate implant placement involves extracting the tooth and placing the implant in the same surgical appointment. This approach reduces the total number of procedures and shortens overall treatment time by 3-6 months. Research published in the International Journal of Oral and Maxillofacial Implants shows that immediate placement achieves success rates comparable to delayed placement (95-98%) when appropriate case selection criteria are met.\n\nDelayed placement involves allowing the extraction site to heal for 3-6 months before placing the implant. This traditional approach is preferred when there is active infection, significant bone loss, or when the anatomy of the extraction site doesn\u2019t support immediate implant stability. Socket preservation bone grafting is often performed at the time of extraction to maintain bone volume.\n\nDr. Antipov evaluates each case individually using 3D imaging to determine the optimal timing. Factors including bone quality, infection status, and aesthetic requirements guide the decision. In many cases, a tooth can be extracted, an implant placed, and a temporary restoration attached all in a single visit.",
    references: [
      "Chen ST, Buser D. Esthetic outcomes following immediate and early implant placement. Int J Oral Maxillofac Implants. 2014;29(Suppl):186-215.",
      "Hammerle CH, et al. Timing of implant placement. Clin Oral Implants Res. 2012;23(s5):80-85."
    ],
    relatedIds: ["implant-process-step-by-step","socket-preservation","what-are-dental-implants"]
  },
  {
    id: "implant-failure-prevention",
    title: "Dental Implant Failure: Causes & Prevention",
    category: "Dental Implants",
    readTime: "5 min",
    tags: ["implants","failure","peri-implantitis","prevention","complications"],
    keyFacts: [
      "Overall failure rate is only 2-5% (Moraschini, 2015)",
      "Smoking increases failure risk by 2-3x",
      "Peri-implantitis (implant gum disease) is the #1 cause of late failure",
      "Proper oral hygiene is the best prevention strategy"
    ],
    content: "While dental implants boast one of the highest success rates of any surgical procedure (95-98%), understanding potential risks helps patients make informed decisions and take preventive measures.\n\nEarly failure (within the first few months) typically results from a failure of osseointegration, where the bone does not adequately fuse with the implant. Risk factors include smoking, uncontrolled diabetes, certain medications (bisphosphonates), infection at the surgical site, and insufficient bone quality. Dr. Antipov minimizes these risks through thorough pre-operative assessment, 3D-guided surgery, and advanced protocols including PRF (platelet-rich fibrin) therapy.\n\nLate failure (after successful initial healing) is most commonly caused by peri-implantitis, an inflammatory condition similar to gum disease that affects the tissues around the implant. Risk factors include poor oral hygiene, smoking, history of periodontal disease, and infrequent dental visits. Studies in the Journal of Dental Research show that peri-implantitis affects approximately 10-20% of implants over 10 years, but is largely preventable with proper maintenance.\n\nPrevention strategies include: maintaining excellent oral hygiene with brushing and flossing around implants, attending regular dental cleanings (every 3-6 months), quitting smoking, managing systemic health conditions, and using a night guard if you grind your teeth. Dr. Antipov provides comprehensive follow-up care and works with your general dentist to ensure long-term implant health.",
    references: [
      "Moraschini V, et al. Implant survival rates, marginal bone loss, and peri-implant diseases. Int J Oral Maxillofac Surg. 2015;44(3):377-388.",
      "Derks J, Tomasi C. Peri-implant health and disease. J Dent Res. 2015;94(9 Suppl):167S-174S."
    ],
    relatedIds: ["what-are-dental-implants","implant-process-step-by-step"]
  },
  // === FULL MOUTH / ALL-ON-4 ===
  {
    id: "all-on-4-vs-all-on-6",
    title: "All-on-4 vs. All-on-6: Which Is Right for You?",
    category: "Full Mouth / All-on-4",
    readTime: "5 min",
    tags: ["all-on-4","all-on-6","full arch","comparison"],
    featured: true,
    keyFacts: [
      "All-on-4 uses 4 implants per arch; All-on-6 uses 6",
      "Both achieve 95%+ survival rates at 10 years (Malo et al., 2011)",
      "All-on-6 may offer better force distribution for bruxism patients",
      "All-on-4 often avoids the need for bone grafting"
    ],
    content: "All-on-4 and All-on-6 are both full arch implant solutions that provide a complete set of fixed, non-removable teeth. Understanding the differences helps patients and referring dentists choose the optimal approach.\n\nThe All-on-4 technique uses four strategically placed implants per arch. The two posterior implants are angled at up to 45 degrees to maximize bone contact and often eliminate the need for bone grafting, even in patients with significant bone loss. This protocol, developed by Dr. Paulo Malo, has over 20 years of published evidence supporting its reliability and was designed to provide immediate function with a temporary prosthesis placed the same day as surgery.\n\nAll-on-6 uses six implants per arch, providing additional support points and potentially better load distribution. This approach may be preferred for patients with adequate bone volume who want maximum support, patients who grind or clench their teeth (bruxism), or when a longer-span prosthesis is planned. The additional implants can also provide a safety margin should any single implant fail.\n\nDr. Antipov evaluates each patient\u2019s unique anatomy, bone density, bite forces, and goals to recommend the optimal approach. Both techniques provide life-changing results, transforming patients from denture wearers or those with failing teeth into having a full set of fixed, beautiful, functional teeth.",
    references: [
      "Malo P, et al. All-on-4 treatment concept for mandibular arch: A 10-year prospective study. Clin Implant Dent Relat Res. 2011;13(1):1-10.",
      "Patzelt SB, et al. All-on-four treatment concept: A systematic review. Clin Implant Dent Relat Res. 2014;16(4):836-3855."
    ],
    relatedIds: ["full-mouth-complete-guide","teeth-in-a-day","zirconia-vs-acrylic"]
  },
  {
    id: "full-mouth-complete-guide",
    title: "Full Mouth Dental Implants: Complete Guide",
    category: "Full Mouth / All-on-4",
    readTime: "7 min",
    tags: ["full mouth","full arch","implants","dentures","rehabilitation"],
    featured: true,
    keyFacts: [
      "Full mouth implants replace all teeth with fixed, permanent prostheses",
      "Eliminates denture adhesives, slipping, and dietary restrictions",
      "Treatment can be completed in as few as 1-2 visits",
      "Preserves jawbone and maintains facial structure"
    ],
    content: "Full mouth dental implants represent the ultimate solution for patients who have lost all or most of their teeth, or whose remaining teeth are failing. Unlike removable dentures, implant-supported full arch prostheses are permanently fixed in place, restoring the confidence and function of natural teeth.\n\nCandidates for full mouth implants include: patients with complete tooth loss (edentulous), patients with failing dentition due to severe decay or periodontal disease, denture wearers dissatisfied with fit and function, and patients with significant tooth loss affecting nutrition and quality of life.\n\nThe treatment process begins with comprehensive planning using 3D CT imaging, digital impressions, and sometimes virtual surgical planning. Dr. Antipov designs a customized treatment plan that addresses each patient\u2019s unique anatomy and goals. On surgery day, any remaining teeth are extracted, implants are placed, and in most cases a temporary set of fixed teeth is attached the same day \u2014 meaning patients never have to go without teeth.\n\nAfter 3-6 months of healing, the final prosthesis is fabricated. Patients choose from several material options including acrylic (most economical), zirconia hybrid (excellent aesthetics and durability), or monolithic zirconia (maximum strength and longevity). The final prosthesis is custom-designed for each patient\u2019s face, smile, and preferences.\n\nThe transformation is often dramatic. Patients report improved ability to eat all foods, clearer speech, restored confidence, and a more youthful facial appearance due to the preserved bone support that prevents the sunken look associated with long-term denture wear.",
    references: [
      "Malo P, et al. All-on-4 treatment concept: Longitudinal results. Clin Implant Dent Relat Res. 2014;16(4):836-855.",
      "Fischer K, Stenberg T. Prospective 10-year cohort study based on a randomized controlled trial evaluating implant-supported full-arch restorations. Clin Implant Dent Relat Res. 2013;15(5):759-768."
    ],
    relatedIds: ["all-on-4-vs-all-on-6","teeth-in-a-day","zirconia-vs-acrylic"]
  },
  {
    id: "teeth-in-a-day",
    title: "Teeth in a Day: Same-Day Dental Implants",
    category: "Full Mouth / All-on-4",
    readTime: "4 min",
    tags: ["same day","immediate","teeth in a day","full arch"],
    keyFacts: [
      "Receive a full set of fixed teeth in a single appointment",
      "Immediate loading protocol supported by extensive research",
      "Patients never have to go without teeth during treatment",
      "Final prosthesis placed after 3-6 months of healing"
    ],
    content: "Teeth in a Day, also known as immediate loading, is a revolutionary approach that allows patients to receive a full arch of fixed teeth on the same day their implants are placed. This technique has transformed full mouth rehabilitation, eliminating the extended period of being without teeth.\n\nThe procedure begins weeks before surgery day with detailed 3D CT scans and digital planning. A temporary prosthesis is pre-fabricated based on this digital plan. On surgery day, Dr. Antipov extracts any remaining teeth, places the implants in precisely planned positions, and attaches the pre-made temporary teeth \u2014 all in a single visit typically lasting 2-4 hours.\n\nThe temporary prosthesis is a fully functional set of teeth that patients wear while their implants heal and integrate with the bone over 3-6 months. During this time, patients can eat a soft to moderate diet and smile with confidence. The final prosthesis is then fabricated from premium materials and precisely fitted for optimal aesthetics and function.\n\nNot all patients are candidates for immediate loading. Adequate primary stability of the implants at placement is essential. Dr. Antipov\u2019s experience with 3D-guided surgery and his clinical judgment ensure that same-day teeth are only provided when conditions support long-term success.",
    references: [
      "Malo P, et al. A longitudinal study of the survival of All-on-4 implants in the mandible with up to 10 years of follow-up. JADA. 2011;142(3):310-320.",
      "Attard NJ, Zarb GA. Immediate and early implant loading protocols: A literature review of clinical studies. J Prosthet Dent. 2005;94(3):242-258."
    ],
    relatedIds: ["all-on-4-vs-all-on-6","full-mouth-complete-guide"]
  },
  {
    id: "zirconia-vs-acrylic",
    title: "Zirconia vs. Acrylic Prosthesis: Material Comparison",
    category: "Full Mouth / All-on-4",
    readTime: "4 min",
    tags: ["zirconia","acrylic","prosthesis","materials","full arch"],
    keyFacts: [
      "Zirconia: 10-20+ year lifespan; Acrylic: 5-10 years typical",
      "Zirconia is stain-resistant and more biocompatible",
      "Acrylic is more affordable and easier to repair",
      "Zirconia hybrid offers an excellent balance of aesthetics and durability"
    ],
    content: "When choosing the final prosthesis for full arch implant treatment, patients select from three primary materials, each with distinct advantages.\n\nAcrylic prostheses are the most established option. They consist of denture teeth set in an acrylic base attached to a titanium or cobalt-chrome framework. Advantages include lower cost, easier chairside adjustments and repairs, and lighter weight. However, acrylic is more prone to staining, wear, and fracture over time, typically lasting 5-10 years before requiring replacement or reline.\n\nZirconia hybrid prostheses feature porcelain or composite teeth bonded to a zirconia framework. This option offers superior aesthetics with a more natural, translucent appearance. Zirconia is highly biocompatible, resistant to plaque accumulation, and significantly more durable than acrylic. These prostheses typically last 15-20+ years.\n\nMonolithic (full) zirconia prostheses are milled from a single block of zirconia and are the strongest option available. They are virtually indestructible, completely stain-proof, and offer excellent aesthetics with modern layering techniques. However, they are the most expensive option and any needed adjustments require laboratory work.\n\nDr. Antipov discusses all material options during your consultation, helping you understand the long-term value proposition of each choice. While zirconia has a higher initial cost, its longevity often makes it more cost-effective over the life of the prosthesis.",
    references: [
      "Thalji G, et al. Clinical outcomes of implant-supported monolithic zirconia prostheses. J Prosthodont. 2021;30(S1):35-41.",
      "Bidra AS, et al. Implant-supported full-arch fixed prostheses: CAD/CAM zirconia vs. traditional. J Prosthodont. 2017;26(1):4-9."
    ],
    relatedIds: ["all-on-4-vs-all-on-6","full-mouth-complete-guide"]
  },
  // === WISDOM TEETH ===
  {
    id: "why-remove-wisdom-teeth",
    title: "Why Do Wisdom Teeth Need to Be Removed?",
    category: "Wisdom Teeth",
    readTime: "4 min",
    tags: ["wisdom teeth","impaction","third molars","extraction"],
    featured: true,
    keyFacts: [
      "85% of wisdom teeth eventually require removal (AAOMS)",
      "4 types of impaction: erupted, soft tissue, partial bony, full bony",
      "Removal is easier and recovery faster in younger patients (teens-20s)",
      "Impacted wisdom teeth can damage adjacent teeth and cause cysts"
    ],
    content: "Wisdom teeth, or third molars, are the last teeth to develop, typically appearing between ages 17-25. For most people, the jaw simply doesn\u2019t have enough room to accommodate these teeth, leading to impaction and a range of potential complications.\n\nThe American Association of Oral and Maxillofacial Surgeons (AAOMS) reports that approximately 85% of wisdom teeth will eventually require removal. Even wisdom teeth that appear to have erupted normally can harbor problems: research shows that third molars without symptoms still have a significant incidence of disease including periodontal pockets, cavities, and pathology.\n\nTypes of impaction include: erupted but poorly positioned (causing bite problems or food trapping), soft tissue impaction (gum tissue covers the tooth), partial bony impaction (tooth is partially encased in jawbone), and full bony impaction (tooth is completely encased in bone). Each type presents unique challenges and potential complications.\n\nComplications of retained wisdom teeth include: damage to adjacent second molars, pericoronitis (painful gum infection), cyst formation around the impacted tooth, decay in the wisdom tooth or adjacent teeth, crowding or shifting of other teeth, and in rare cases, tumor development.\n\nDr. Antipov recommends evaluation of wisdom teeth during the mid-to-late teenage years. Early assessment with panoramic X-rays allows for optimal timing of removal, when roots are not yet fully formed and bone is less dense, leading to easier extraction and faster recovery.",
    references: [
      "American Association of Oral and Maxillofacial Surgeons. The Management of Impacted Third Molar Teeth. AAOMS White Paper. 2016.",
      "Friedman JW. The prophylactic extraction of third molars: A public health hazard. Am J Public Health. 2007;97(9):1554-1559."
    ],
    relatedIds: ["wisdom-recovery-timeline","dry-socket-prevention","sedation-options-wisdom"]
  },
  {
    id: "wisdom-recovery-timeline",
    title: "Wisdom Teeth Recovery: Day-by-Day Timeline",
    category: "Wisdom Teeth",
    readTime: "5 min",
    tags: ["wisdom teeth","recovery","healing","post-op","timeline"],
    keyFacts: [
      "Most patients return to normal activities in 3-5 days",
      "Swelling peaks at 48-72 hours then gradually resolves",
      "Full socket healing takes approximately 2-4 weeks",
      "Complete bone remodeling occurs over 3-6 months"
    ],
    content: "Understanding the recovery timeline after wisdom teeth removal helps patients plan accordingly and know what to expect at each stage.\n\nDay 1 (Surgery Day): After your procedure, you\u2019ll rest with gauze in place to control bleeding. Bleeding should slow significantly within 2-4 hours. Apply ice packs (20 minutes on, 20 minutes off) to minimize swelling. Eat only cold, soft foods like smoothies, yogurt, and applesauce. Take prescribed pain medication before the anesthesia wears off completely.\n\nDays 2-3: Swelling typically peaks during this period. Continue ice therapy, take medications as prescribed, and maintain a soft diet. Begin gentle warm salt water rinses (do not swish vigorously). Many patients find this is the most uncomfortable period, but pain is well-controlled with medication.\n\nDays 4-5: Swelling begins to subside noticeably. Most patients feel significantly better and can resume light activities. Bruising may appear and begin to fade. You can gradually introduce warmer and slightly more textured soft foods.\n\nDays 7-10: Most patients feel close to normal. Sutures (if non-dissolving) may be removed. You can return to most normal activities including light exercise. Continue avoiding hard, crunchy, or spicy foods near the surgical sites.\n\nWeeks 2-4: Extraction sites continue healing as soft tissue closes over the sockets. Most dietary restrictions can be lifted. The area may still be slightly tender to pressure. Complete soft tissue healing is typically achieved by 3-4 weeks.\n\nMonths 1-6: The underlying bone remodels and fills in the extraction sockets. This process is not noticeable to the patient but represents the final phase of healing.",
    references: [
      "Bouloux GF, et al. Complications of third molar surgery. Oral Maxillofac Surg Clin North Am. 2007;19(1):117-128.",
      "Blondeau F, Daniel NG. Extraction of impacted mandibular third molars: Postoperative complications and their risk factors. JCDA. 2007;73(4):325-325e."
    ],
    relatedIds: ["why-remove-wisdom-teeth","dry-socket-prevention","sedation-options-wisdom"]
  },
  {
    id: "dry-socket-prevention",
    title: "Dry Socket: Prevention & Treatment",
    category: "Wisdom Teeth",
    readTime: "4 min",
    tags: ["dry socket","alveolar osteitis","wisdom teeth","complications","prevention"],
    keyFacts: [
      "Occurs in 2-5% of routine extractions and up to 30% of impacted lower wisdom teeth",
      "Typically develops 2-4 days after extraction",
      "Smoking is the #1 preventable risk factor (5x increased risk)",
      "Treated with medicated dressings that provide rapid pain relief"
    ],
    content: "Dry socket (alveolar osteitis) is the most common complication following tooth extraction, particularly wisdom tooth removal. Understanding its causes and prevention empowers patients to significantly reduce their risk.\n\nAfter a tooth is extracted, a blood clot forms in the socket to protect the underlying bone and nerve endings. Dry socket occurs when this blood clot is dislodged or dissolves prematurely, exposing the bone to air, food, and bacteria. The result is intense, radiating pain that typically begins 2-4 days after extraction and is often not well-controlled by standard pain medication.\n\nRisk factors include: smoking or tobacco use (the single greatest risk factor, increasing risk by 5x), use of oral contraceptives, history of dry socket with previous extractions, traumatic or difficult extraction, poor oral hygiene, and rinsing or spitting vigorously too soon after surgery.\n\nPrevention strategies include: absolutely no smoking for at least 72 hours after surgery (ideally 1 week), no drinking through straws for 1 week, no vigorous rinsing or spitting for 24 hours, following all post-operative instructions carefully, maintaining good nutrition, and staying hydrated.\n\nIf dry socket occurs, treatment involves gentle irrigation of the socket and placement of a medicated dressing (typically containing eugenol/clove oil) that provides rapid pain relief, often within hours. The dressing is replaced every 2-3 days until the socket heals. Dr. Antipov and the Galleria Oral Surgery team are available for prompt treatment should this complication arise.",
    references: [
      "Kolokythas A, et al. Alveolar osteitis: A comprehensive review of concepts and controversies. Int J Dent. 2010;2010:249073.",
      "Blum IR. Contemporary views on dry socket: A clinical appraisal of standardization, aetiopathogenesis and management. Int J Oral Maxillofac Surg. 2002;31(3):309-317."
    ],
    relatedIds: ["wisdom-recovery-timeline","why-remove-wisdom-teeth"]
  },
  {
    id: "sedation-options-wisdom",
    title: "Sedation Options for Wisdom Teeth Removal",
    category: "Wisdom Teeth",
    readTime: "4 min",
    tags: ["sedation","anesthesia","IV sedation","nitrous","wisdom teeth"],
    keyFacts: [
      "IV sedation is the most popular choice for wisdom teeth removal",
      "Patients under IV sedation have no memory of the procedure",
      "All sedation types have excellent safety profiles when properly administered",
      "Dr. Antipov is trained in all levels of anesthesia administration"
    ],
    content: "Choosing the right sedation for wisdom teeth removal depends on the complexity of the procedure, patient anxiety level, and medical history. At Galleria Oral Surgery, Dr. Antipov offers the full spectrum of anesthesia options.\n\nLocal Anesthesia Only: The surgical sites are numbed with injectable anesthetic. The patient remains fully awake and aware but feels no pain. This is suitable for simple erupted wisdom tooth extractions in patients with minimal anxiety. Cost is typically included in the extraction fee.\n\nNitrous Oxide (Laughing Gas) with Local Anesthesia: Nitrous oxide is inhaled through a nasal mask, producing a relaxed, euphoric state while the patient remains conscious. Effects wear off within minutes after removing the mask, and patients can typically drive themselves home. This is a good option for mild to moderate anxiety.\n\nIV Conscious Sedation with Local Anesthesia: This is the most popular option for wisdom teeth removal. Sedative medications are administered through an IV, producing a deep state of relaxation. While patients are not technically unconscious, they have little to no awareness or memory of the procedure. A responsible adult must provide transportation home, and patients should rest for the remainder of the day.\n\nGeneral Anesthesia: Full general anesthesia renders the patient completely unconscious. This is typically reserved for complex cases, patients with significant medical conditions, extreme anxiety, or when multiple extensive procedures are performed simultaneously. Dr. Antipov is trained in the administration of general anesthesia in the office setting, providing hospital-level care in a comfortable environment.",
    references: [
      "Bouloux GF, et al. Safety of outpatient oral and maxillofacial surgery procedures. J Oral Maxillofac Surg. 2017;75(7):1288-1293.",
      "Bennett CR. Conscious Sedation in Dental Practice. 2nd ed. Mosby; 1978."
    ],
    relatedIds: ["why-remove-wisdom-teeth","wisdom-recovery-timeline","anesthesia-options"]
  },
  // === BONE GRAFTING ===
  {
    id: "bone-grafting-guide",
    title: "Understanding Bone Grafting for Dental Implants",
    category: "Bone Grafting",
    readTime: "5 min",
    tags: ["bone graft","implants","augmentation","regeneration"],
    keyFacts: [
      "4 types: autograft (own bone), allograft (donor), xenograft (bovine), synthetic",
      "Grafting success rates exceed 90% for implant site preparation",
      "Healing time: 4-9 months depending on graft type and size",
      "PRF therapy enhances bone graft healing and integration"
    ],
    content: "Bone grafting is a surgical procedure that rebuilds jawbone volume that has been lost due to tooth extraction, periodontal disease, trauma, or prolonged denture wear. Adequate bone volume is essential for successful dental implant placement.\n\nFour primary types of bone graft materials are used in oral surgery. Autografts use bone harvested from the patient\u2019s own body (typically the chin, jaw, or hip), offering the gold standard in biocompatibility and regenerative potential. Allografts use processed human donor bone from tissue banks, eliminating the need for a second surgical site. Xenografts use processed bovine (cow) bone, which serves as an excellent scaffold for new bone growth. Alloplastic (synthetic) grafts use laboratory-made materials such as hydroxyapatite or calcium phosphate.\n\nCommon bone grafting procedures include: socket preservation (grafting an extraction site immediately to prevent bone loss), ridge augmentation (rebuilding a deficient jawbone ridge), sinus lift (adding bone beneath the sinus floor to support upper jaw implants), and block grafting (transplanting a block of bone for significant defects).\n\nDr. Antipov enhances bone graft outcomes using Platelet-Rich Fibrin (PRF) therapy, a biologic protocol that concentrates the patient\u2019s own growth factors and applies them to the graft site. Research shows PRF significantly accelerates healing and improves bone graft integration.\n\nHealing time varies by graft type and extent: socket preservation typically requires 3-4 months, ridge augmentation 4-6 months, and sinus lifts 6-9 months before implant placement can proceed.",
    references: [
      "Aghaloo TL, Moy PK. Which hard tissue augmentation techniques are the most successful in furnishing bony support for implant placement? Int J Oral Maxillofac Implants. 2007;22(Suppl):49-70.",
      "Miron RJ, et al. Use of platelet-rich fibrin in regenerative dentistry: A systematic review. Clin Oral Investig. 2017;21(6):1913-1927."
    ],
    relatedIds: ["sinus-lift-explained","socket-preservation","what-are-dental-implants"]
  },
  {
    id: "sinus-lift-explained",
    title: "Sinus Lift Surgery Explained",
    category: "Bone Grafting",
    readTime: "4 min",
    tags: ["sinus lift","sinus augmentation","upper jaw","bone graft","implants"],
    keyFacts: [
      "Required when upper jaw bone is too thin for implant placement",
      "Success rate exceeds 95% (Aghaloo & Moy, 2007)",
      "Two approaches: lateral window and osteotome (crestal)",
      "Healing time: 6-9 months before implant placement"
    ],
    content: "A sinus lift, or sinus augmentation, is a bone grafting procedure that adds bone to the upper jaw in the area of the premolars and molars. It is one of the most common procedures performed to prepare patients for dental implants in the upper jaw.\n\nThe maxillary sinuses are air-filled spaces above the upper jaw. When upper back teeth are lost, the sinus membrane may expand downward and the bone thins over time, leaving insufficient height for implant placement. A sinus lift gently elevates the sinus membrane and places bone graft material beneath it, creating the necessary bone volume.\n\nTwo surgical approaches are used depending on the amount of bone augmentation needed. The lateral window approach is used when significant bone height is needed (less than 5mm of existing bone). Dr. Antipov creates a small window in the side of the sinus wall, carefully lifts the membrane, and packs the space with bone graft material. The osteotome (crestal) approach is used for moderate augmentation needs (5-8mm of existing bone). Bone graft is placed through the implant site itself, and in many cases the implant can be placed simultaneously.\n\nRecovery involves 1-2 weeks of precautions including avoiding blowing your nose, sneezing with your mouth open, and not using straws. Most patients experience only mild discomfort. The graft material requires 6-9 months to mature before implants can be placed (unless simultaneous placement was possible).",
    references: [
      "Aghaloo TL, Moy PK. Which hard tissue augmentation techniques are the most successful? Int J Oral Maxillofac Implants. 2007;22(Suppl):49-70.",
      "Pjetursson BE, et al. Maxillary sinus floor augmentation: A systematic review. Int J Oral Maxillofac Implants. 2008;23(Suppl):49-70."
    ],
    relatedIds: ["bone-grafting-guide","socket-preservation","what-are-dental-implants"]
  },
  {
    id: "socket-preservation",
    title: "Socket Preservation After Tooth Extraction",
    category: "Bone Grafting",
    readTime: "3 min",
    tags: ["socket preservation","ridge preservation","extraction","bone graft"],
    keyFacts: [
      "Up to 50% of bone width can be lost within 12 months of extraction",
      "Socket preservation maintains up to 85-90% of original bone volume",
      "Healing time: 3-4 months before implant placement",
      "Significantly improves implant success and aesthetic outcomes"
    ],
    content: "Socket preservation is a bone grafting procedure performed immediately after a tooth is extracted to prevent the natural bone loss that occurs when a tooth is removed. Without intervention, the extraction site can lose up to 50% of its width within the first 12 months.\n\nThe procedure is straightforward: immediately after the tooth is removed, Dr. Antipov places bone graft material into the socket and covers it with a membrane. This serves as a scaffold that supports new bone formation and maintains the dimensions of the ridge for future implant placement.\n\nSocket preservation is especially important in the aesthetic zone (front teeth), where maintaining bone and gum tissue architecture is crucial for a natural-looking implant result. It is also valuable when implant placement will be delayed for any reason.\n\nResearch published in the Journal of Oral and Maxillofacial Surgery demonstrates that socket preservation maintains 85-90% of original bone volume compared to unpreserved sites, significantly improving conditions for subsequent implant placement and reducing the need for more extensive grafting procedures later.",
    references: [
      "Avila-Ortiz G, et al. Effect of alveolar ridge preservation after tooth extraction: A systematic review. J Dent Res. 2014;93(10):950-958.",
      "Iasella JM, et al. Ridge preservation with freeze-dried bone allograft and a collagen membrane. J Periodontol. 2003;74(7):990-999."
    ],
    relatedIds: ["bone-grafting-guide","immediate-vs-delayed","implant-process-step-by-step"]
  },
  // === JAW SURGERY ===
  {
    id: "orthognathic-surgery-guide",
    title: "Orthognathic Surgery: Corrective Jaw Surgery Guide",
    category: "Jaw Surgery",
    readTime: "6 min",
    tags: ["orthognathic","jaw surgery","malocclusion","bite correction"],
    keyFacts: [
      "Corrects skeletal jaw discrepancies that braces alone cannot fix",
      "Planning involves 3D CT scanning and virtual surgical planning",
      "Recovery: liquid diet 2 weeks, soft diet 6 weeks, full recovery 3-6 months",
      "Combined orthodontic-surgical approach produces stable, lifelong results"
    ],
    content: "Orthognathic surgery, or corrective jaw surgery, repositions the upper jaw (maxilla), lower jaw (mandible), or both to correct skeletal discrepancies that cannot be adequately treated with orthodontics alone. This surgery can dramatically improve bite function, facial aesthetics, and quality of life.\n\nCommon conditions treated include: severe underbite (mandibular prognathism), severe overbite (mandibular retrognathism), open bite (teeth don\u2019t meet when jaw is closed), facial asymmetry, sleep apnea related to jaw positioning, and difficulty chewing or speaking due to jaw misalignment.\n\nThe treatment process is a collaboration between your orthodontist and Dr. Antipov. Orthodontic treatment (braces or aligners) typically begins 12-18 months before surgery to align the teeth within each arch. Dr. Antipov then uses advanced 3D CT scanning and virtual surgical planning (VSP) software to precisely plan the jaw movements down to the millimeter. Custom surgical guides are 3D-printed to ensure accuracy during the procedure.\n\nSurgery is performed under general anesthesia in the office or hospital setting. All incisions are made inside the mouth, so there are no visible external scars. The jaws are repositioned according to the surgical plan and secured with titanium plates and screws. Most patients spend one night in the hospital for monitoring.\n\nRecovery involves a liquid diet for approximately 2 weeks, followed by a soft diet for 4-6 weeks. Swelling is significant but gradually resolves over 2-3 months. Most patients return to work or school within 2-3 weeks. Post-surgical orthodontics fine-tunes the bite over the following months.",
    references: [
      "Proffit WR, et al. Orthognathic surgery: Principles of treatment. In: Contemporary Treatment of Dentofacial Deformity. Mosby; 2003.",
      "Panula K, et al. Orthognathic surgery: Long-term stability and quality of life. Int J Oral Maxillofac Surg. 2001;30(4):276-280."
    ],
    relatedIds: ["tmj-disorders-treatment"]
  },
  {
    id: "tmj-disorders-treatment",
    title: "TMJ Disorders: Diagnosis & Treatment Options",
    category: "Jaw Surgery",
    readTime: "5 min",
    tags: ["TMJ","TMD","jaw joint","clicking","pain","arthroscopy"],
    keyFacts: [
      "TMJ disorders affect up to 12% of the population",
      "80-90% of TMJ cases respond to conservative (non-surgical) treatment",
      "Arthroscopic surgery is minimally invasive with 85%+ success rate",
      "Night guards are the most common first-line treatment"
    ],
    content: "Temporomandibular joint (TMJ) disorders encompass a range of conditions affecting the jaw joints, muscles of mastication, and associated structures. These disorders can cause significant pain and functional limitation, affecting eating, speaking, and quality of life.\n\nCommon symptoms include: jaw pain or tenderness, clicking, popping, or grinding sounds when opening or closing the mouth, jaw locking in an open or closed position, limited mouth opening, headaches (especially morning headaches), ear pain or fullness, and facial pain. Causes range from muscle tension and stress to disc displacement, arthritis, and jaw trauma.\n\nDiagnosis involves a thorough clinical examination, including assessment of jaw range of motion, palpation of joints and muscles, and evaluation of bite alignment. Advanced imaging including CT scans and sometimes MRI is used to evaluate the joint structures in detail.\n\nConservative (Non-Surgical) Treatment is the first line for most TMJ disorders. Options include custom-made night guards or splints, medication (anti-inflammatories, muscle relaxants), physical therapy and jaw exercises, stress management and behavioral modification, trigger point injections, and Botox for muscle-related TMD.\n\nSurgical Treatment is reserved for cases that don\u2019t respond to conservative care. Arthrocentesis (joint lavage) is a minimally invasive office procedure that flushes the joint. Arthroscopy uses a tiny camera and instruments inserted through small incisions to treat disc displacement and adhesions, with an 85%+ success rate. Open joint surgery is rarely needed but can address severe structural problems including joint replacement with prosthetic devices.",
    references: [
      "National Institute of Dental and Craniofacial Research. TMJ Disorders. NIH Publication. 2023.",
      "Al-Moraissi EA, et al. Arthroscopy versus arthrocentesis in the management of TMJ disorders: A systematic review. Int J Oral Maxillofac Surg. 2015;44(1):104-112."
    ],
    relatedIds: ["orthognathic-surgery-guide","anesthesia-options"]
  },
  // === GENERAL ===
  {
    id: "what-to-expect-consultation",
    title: "What to Expect at Your Oral Surgery Consultation",
    category: "General",
    readTime: "3 min",
    tags: ["consultation","first visit","preparation","evaluation"],
    keyFacts: [
      "Consultations typically last 30-60 minutes",
      "3D CT imaging is usually taken at the first visit",
      "Bring: insurance card, medication list, referral (if applicable), X-rays",
      "A treatment plan with cost estimate is provided at the consultation"
    ],
    content: "Your first visit to Galleria Oral Surgery is an important step in your care. Knowing what to expect helps you prepare and make the most of your consultation time.\n\nBefore your visit, gather the following: your dental and medical insurance cards, a list of current medications and dosages, any dental X-rays or records from your referring dentist, a list of questions you want to ask, and your photo ID.\n\nAt your appointment, you\u2019ll complete a medical history questionnaire and meet with Dr. Antipov. He will review your medical history, perform a thorough clinical examination, and obtain any necessary imaging including a 3D cone beam CT scan (taken right in our office). This advanced imaging provides detailed views of your bone structure, nerve locations, and anatomy.\n\nDr. Antipov will discuss his findings with you, explain your diagnosis and treatment options, answer all your questions, and develop a personalized treatment plan. You\u2019ll receive a detailed cost estimate with insurance benefit information and financing options before leaving the office.\n\nConsultations are unhurried and thorough. We believe informed patients make the best decisions about their care, and we never pressure you to proceed with treatment on the spot.",
    references: [
      "American Association of Oral and Maxillofacial Surgeons. Patient Information Resources. AAOMS.org. 2024."
    ],
    relatedIds: ["anesthesia-options","pre-op-instructions"]
  },
  {
    id: "anesthesia-options",
    title: "Oral Surgery Anesthesia Options Explained",
    category: "General",
    readTime: "4 min",
    tags: ["anesthesia","sedation","IV sedation","nitrous","general anesthesia","safety"],
    keyFacts: [
      "Oral surgeons complete 4-6 additional years of training in anesthesia",
      "Office-based anesthesia has an outstanding safety record",
      "IV sedation patients have no memory of the procedure",
      "Monitoring equipment tracks vitals throughout every sedation procedure"
    ],
    content: "One of the unique qualifications of oral and maxillofacial surgeons is extensive training in all levels of anesthesia and sedation. Dr. Antipov\u2019s training includes years of hospital-based anesthesia rotations, enabling safe delivery of sedation and general anesthesia in the office setting.\n\nLocal Anesthesia numbs only the surgical area. You remain fully awake and aware but feel no pain at the treatment site. This is used for minor procedures or patients who prefer to be awake.\n\nNitrous Oxide (Laughing Gas) is inhaled through a nasal mask and produces a relaxed, mildly euphoric state. You remain conscious and responsive. Effects wear off within minutes, and you can typically drive yourself home. This is often combined with local anesthesia.\n\nIV Conscious Sedation involves medication administered through an intravenous line. You enter a deeply relaxed, semi-conscious state with little to no awareness or memory of the procedure. You can still respond to commands but will not remember doing so. A responsible adult must drive you home and stay with you for several hours afterward.\n\nGeneral Anesthesia renders you completely unconscious. This is the deepest level of sedation and is used for complex or lengthy procedures, young children, patients with special needs, or those with extreme anxiety. Full physiologic monitoring is maintained throughout.\n\nSafety is paramount. Our office is equipped with hospital-grade monitoring equipment including pulse oximetry, blood pressure monitoring, capnography (CO2 monitoring), ECG, and emergency resuscitation equipment. Our team is trained in Advanced Cardiac Life Support (ACLS).",
    references: [
      "Bouloux GF, et al. Safety of outpatient oral and maxillofacial surgery procedures. J Oral Maxillofac Surg. 2017;75(7):1288-1293.",
      "American Association of Oral and Maxillofacial Surgeons. Office Anesthesia Evaluation Manual. AAOMS. 2022."
    ],
    relatedIds: ["sedation-options-wisdom","what-to-expect-consultation"]
  },
  {
    id: "pre-op-instructions",
    title: "Pre-Operative Instructions for Oral Surgery",
    category: "General",
    readTime: "4 min",
    tags: ["pre-op","preparation","surgery day","instructions","fasting"],
    keyFacts: [
      "NPO (nothing by mouth) for 8 hours before IV sedation/general anesthesia",
      "Continue most regular medications with a small sip of water",
      "Arrange a responsible adult driver for sedation procedures",
      "Wear comfortable, loose-fitting clothing with short sleeves"
    ],
    content: "Proper preparation for oral surgery ensures your safety and comfort. The following guidelines apply to most procedures; Dr. Antipov may provide additional specific instructions for your case.\n\nBefore IV Sedation or General Anesthesia: Do not eat or drink anything for 8 hours before your appointment (NPO). This includes water, coffee, gum, and candy. An empty stomach is essential for safe sedation. If you take daily medications, ask our office which ones to take the morning of surgery with a small sip of water.\n\nArrange Transportation: If you are receiving IV sedation or general anesthesia, you MUST have a responsible adult drive you to and from your appointment. This person should remain in the office during your procedure and stay with you for several hours at home. You should not drive, operate heavy machinery, or make important decisions for 24 hours after sedation.\n\nWhat to Wear: Comfortable, loose-fitting clothing with short sleeves (for IV access). Avoid tight turtlenecks or complicated clothing. Remove nail polish from at least one fingernail (for oxygen monitoring). Leave jewelry, contact lenses, and dentures at home.\n\nMedications: Fill any prescriptions provided before your surgery date so medications are ready when you arrive home. If prescribed antibiotics to take before surgery, be sure to complete the prescribed pre-operative doses. Avoid aspirin and blood-thinning supplements (fish oil, vitamin E, turmeric) for 1 week before surgery unless directed otherwise.\n\nPrepare at Home: Stock up on soft foods (yogurt, soup, smoothie ingredients, mashed potatoes, scrambled eggs). Have ice packs ready. Set up a comfortable recovery area with extra pillows to keep your head elevated.",
    references: [
      "American Association of Oral and Maxillofacial Surgeons. Pre-operative Patient Guidelines. AAOMS.org. 2024."
    ],
    relatedIds: ["post-op-care-guide","anesthesia-options","what-to-expect-consultation"]
  },
  {
    id: "post-op-care-guide",
    title: "Post-Operative Care Guide for Oral Surgery",
    category: "General",
    readTime: "5 min",
    tags: ["post-op","recovery","aftercare","healing","instructions"],
    keyFacts: [
      "Ice packs: 20 minutes on, 20 minutes off for the first 48 hours",
      "Keep head elevated and rest for 24-48 hours after surgery",
      "Start salt water rinses 24 hours after surgery (1/2 tsp salt in 8 oz warm water)",
      "Call (916) 783-2110 immediately if experiencing uncontrolled bleeding or difficulty breathing"
    ],
    content: "Following your oral surgery, proper aftercare is essential for comfortable healing and optimal results. These guidelines apply to most oral surgery procedures.\n\nBleeding Management: Bite firmly on gauze pads placed by our team for 30-45 minutes after surgery. Replace with fresh gauze as needed. Some oozing is normal for 12-24 hours. If bleeding persists, bite on a moistened tea bag (tannic acid promotes clotting) for 30 minutes. Avoid spitting, rinsing, or using straws for the first 24 hours.\n\nSwelling Control: Apply ice packs to the outside of your face (20 minutes on, 20 minutes off) for the first 48 hours. Swelling typically peaks at 48-72 hours and then gradually subsides. Sleep with your head elevated on extra pillows for the first few nights.\n\nPain Management: Take prescribed pain medications as directed BEFORE the numbness wears off. For many procedures, alternating ibuprofen (Advil) and acetaminophen (Tylenol) provides excellent pain control. Take antibiotics as prescribed until the full course is completed.\n\nDiet: Begin with cold, soft foods (smoothies, yogurt, applesauce, ice cream). Progress to warm, soft foods (soup, mashed potatoes, scrambled eggs) by day 2-3. Avoid hot, spicy, crunchy, or hard foods for at least 1 week. Stay well hydrated. Avoid alcohol while taking prescription pain medication.\n\nOral Hygiene: Do not brush the surgical area for 24 hours. Begin gentle warm salt water rinses after 24 hours. Resume gentle brushing away from the surgical site after 24 hours. Use any prescribed mouth rinses as directed.\n\nWhen to Call Our Office: Uncontrolled bleeding that won\u2019t stop with pressure, difficulty breathing or swallowing, fever above 101\u00b0F, severe pain not controlled by prescribed medication, allergic reaction to medication, or any concerns about your recovery.",
    references: [
      "Hupp JR, Ellis E, Tucker MR. Contemporary Oral and Maxillofacial Surgery. 7th ed. Elsevier; 2019.",
      "American Association of Oral and Maxillofacial Surgeons. Post-Operative Instructions. AAOMS.org. 2024."
    ],
    relatedIds: ["pre-op-instructions","dry-socket-prevention","wisdom-recovery-timeline"]
  },
  {
    id: "emergency-dental-care",
    title: "Emergency Dental Care: When to See an Oral Surgeon",
    category: "General",
    readTime: "3 min",
    tags: ["emergency","trauma","knocked out tooth","urgent care"],
    keyFacts: [
      "A knocked-out tooth has the best chance of survival if reimplanted within 30 minutes",
      "Jaw fractures require immediate oral surgery evaluation",
      "Severe swelling with difficulty breathing is a life-threatening emergency",
      "Call (916) 783-2110 for after-hours dental emergencies"
    ],
    content: "Dental emergencies require prompt attention. Knowing when and how to seek care can mean the difference between saving and losing a tooth, or even preventing a life-threatening situation.\n\nKnocked-Out Tooth: Pick up the tooth by the crown (never the root). If dirty, gently rinse with milk or saline. Try to reinsert it into the socket and bite down on gauze. If reinsertion isn\u2019t possible, place the tooth in milk, saline, or the patient\u2019s saliva. Seek emergency care immediately \u2014 the best outcomes occur when the tooth is reimplanted within 30 minutes.\n\nJaw Fracture: Stabilize the jaw by wrapping a bandage around the head and under the chin. Apply ice for swelling. Go to the emergency room or call our office immediately. Signs of jaw fracture include inability to open or close the mouth, misaligned bite, numbness of the lip or chin, and significant swelling.\n\nSevere Infection/Swelling: Facial swelling that is spreading, accompanied by fever, difficulty swallowing, or any difficulty breathing is a medical emergency. Go to the nearest emergency room or call 911 immediately. These symptoms can indicate a spreading infection that requires immediate medical intervention.\n\nSevere Bleeding: Apply firm, constant pressure with gauze for at least 15 minutes. If bleeding cannot be controlled, seek emergency care.\n\nGalleria Oral Surgery provides after-hours emergency contact information on our voicemail. For life-threatening emergencies, always call 911 first.",
    references: [
      "Andersson L, et al. International Association of Dental Traumatology guidelines for the management of traumatic dental injuries. Dent Traumatol. 2012;28(1):2-12.",
      "American Association of Oral and Maxillofacial Surgeons. Emergency Care Resources. AAOMS.org. 2024."
    ],
    relatedIds: ["anesthesia-options","what-to-expect-consultation"]
  },
  {
    id: "oral-pathology-guide",
    title: "Oral Pathology: When to Be Concerned About Oral Lesions",
    category: "General",
    readTime: "4 min",
    tags: ["oral pathology","biopsy","oral cancer","lesions","cysts"],
    keyFacts: [
      "Oral cancer accounts for approximately 3% of all cancers in the US",
      "Early detection dramatically improves oral cancer survival rates (80%+ for localized)",
      "Any oral lesion persisting more than 2 weeks should be evaluated",
      "Biopsy is a simple, quick procedure usually done with local anesthesia"
    ],
    content: "Oral pathology encompasses the diagnosis and management of diseases affecting the mouth, jaws, and related structures. While most oral lesions are benign, early evaluation and diagnosis of concerning findings is crucial for optimal outcomes.\n\nSigns that warrant evaluation include: a sore or ulcer that doesn\u2019t heal within 2 weeks, a lump, thickening, or rough spot in the mouth, a white or red patch on the gums, tongue, or lining of the mouth, difficulty chewing or swallowing, numbness or pain without an obvious cause, a change in how your teeth fit together, and swelling that causes dentures to fit poorly.\n\nCommon oral pathology conditions include: mucoceles and ranulas (mucous cyst), fibromas (benign tissue growths), odontogenic cysts (cysts around tooth roots), ameloblastoma and other odontogenic tumors, oral squamous cell carcinoma, and salivary gland tumors.\n\nDiagnosis typically involves a clinical examination followed by biopsy. Biopsy is a straightforward procedure where Dr. Antipov removes a small tissue sample under local anesthesia for laboratory analysis. Results are usually available within 5-7 business days. Based on the diagnosis, Dr. Antipov develops an appropriate treatment plan, which may range from monitoring to surgical excision.\n\nPrevention and early detection are key. Regular dental check-ups that include oral cancer screening, avoiding tobacco and excessive alcohol use, protecting your lips from sun exposure, and maintaining good oral hygiene all contribute to oral health.",
    references: [
      "American Cancer Society. Cancer Facts & Figures 2024. ACS. 2024.",
      "Neville BW, et al. Oral and Maxillofacial Pathology. 4th ed. Elsevier; 2016."
    ],
    relatedIds: ["what-to-expect-consultation","emergency-dental-care"]
  },
  {
    id: "prf-therapy-benefits",
    title: "Platelet-Rich Fibrin (PRF) Therapy in Oral Surgery",
    category: "General",
    readTime: "3 min",
    tags: ["PRF","platelet-rich fibrin","healing","regeneration","biologic"],
    keyFacts: [
      "PRF uses the patient\u2019s own blood \u2014 no synthetic materials or additives",
      "Concentrates growth factors to accelerate healing by 30-50%",
      "Reduces post-operative pain, swelling, and risk of complications",
      "Simple blood draw processed chairside during your procedure"
    ],
    content: "Platelet-Rich Fibrin (PRF) is an advanced biologic therapy that harnesses the healing power of your own blood to accelerate tissue regeneration and improve surgical outcomes. It represents one of the most significant advances in oral surgery healing protocols.\n\nThe PRF process is simple: a small amount of your blood is drawn (similar to a routine blood test) and placed in a centrifuge. The spinning process separates the blood components, concentrating platelets, white blood cells, and growth factors into a fibrin membrane. This membrane is rich in the very factors your body uses to heal, including PDGF, VEGF, and TGF-beta.\n\nDr. Antipov applies PRF membranes and liquid PRF at surgical sites during procedures including tooth extractions, bone grafting, sinus lifts, implant placement, and wisdom teeth removal. The concentrated growth factors stimulate faster bone and soft tissue healing, reduce post-operative pain and swelling, decrease the risk of dry socket after extractions, enhance bone graft incorporation, and improve overall surgical outcomes.\n\nPRF is completely autologous (from your own body), eliminating any risk of allergic reaction or disease transmission. No additives or chemicals are used in the preparation process. Research published in Clinical Oral Investigations demonstrates that PRF can accelerate healing by 30-50% compared to procedures performed without this biologic enhancement.",
    references: [
      "Miron RJ, et al. Use of platelet-rich fibrin in regenerative dentistry: A systematic review. Clin Oral Investig. 2017;21(6):1913-1927.",
      "Choukroun J, et al. Platelet-rich fibrin (PRF): A second-generation platelet concentrate. Oral Surg Oral Med Oral Pathol. 2006;101(3):e56-e60."
    ],
    relatedIds: ["bone-grafting-guide","implant-process-step-by-step","post-op-care-guide"]
  }
];

export const STYLES = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --navy:#0B1D3A;--navy-light:#132d54;--gold:#C9A96E;--gold-light:#d4ba8a;
  --white:#fff;--gray-50:#F8F9FA;--gray-100:#f0f1f3;--gray-200:#e2e4e8;
  --gray-400:#9ca3af;--gray-600:#4b5563;--gray-800:#1f2937;
  --red:#ef4444;--orange:#f59e0b;--green:#10b981;
  --font-heading:'Playfair Display',Georgia,serif;
  --font-body:'Inter',system-ui,-apple-system,sans-serif;
  --shadow-sm:0 1px 3px rgba(0,0,0,.08);--shadow-md:0 4px 20px rgba(0,0,0,.1);
  --shadow-lg:0 10px 40px rgba(0,0,0,.15);--radius:12px;
}
html{scroll-behavior:smooth}
body{font-family:var(--font-body);color:var(--gray-800);line-height:1.6;-webkit-font-smoothing:antialiased}
body.high-contrast{--navy:#000;--gray-600:#222;--gray-50:#fff;--gray-100:#f5f5f5}
body.high-contrast .nav{background:#000!important}
body.high-contrast .hero{background:#000!important}
body.high-contrast .section-dark{background:#000!important}
body.high-contrast .footer-main{background:#000!important}
img{max-width:100%;display:block}
a{text-decoration:none;color:inherit}
.container{max-width:1200px;margin:0 auto;padding:0 24px}

/* NAV */
.nav{position:fixed;top:0;left:0;right:0;z-index:1000;transition:all .3s}
.nav.scrolled{background:rgba(11,29,58,.97);backdrop-filter:blur(12px);box-shadow:0 2px 20px rgba(0,0,0,.2)}
.nav-inner{display:flex;align-items:center;justify-content:space-between;padding:18px 24px;max-width:1400px;margin:0 auto}
.nav-logo{font-family:var(--font-heading);font-size:1.05rem;font-weight:700;color:var(--gold);letter-spacing:2px;text-transform:uppercase;white-space:nowrap;cursor:pointer}
.nav-logo span{display:block;font-size:.6rem;color:rgba(255,255,255,.6);letter-spacing:3px;font-family:var(--font-body);font-weight:400;margin-top:2px}
.nav-links{display:flex;gap:22px;align-items:center;list-style:none}
.nav-links a{color:rgba(255,255,255,.85);font-size:.78rem;font-weight:500;letter-spacing:.5px;transition:color .2s;text-transform:uppercase;cursor:pointer}
.nav-links a:hover{color:var(--gold)}
.nav-cta{background:var(--gold);color:var(--navy);padding:10px 22px;border-radius:6px;font-weight:600;font-size:.82rem;letter-spacing:.5px;transition:all .2s;border:none;cursor:pointer;text-decoration:none}
.nav-cta:hover{background:var(--gold-light);transform:translateY(-1px)}
.hamburger{display:none;flex-direction:column;gap:5px;background:none;border:none;cursor:pointer;padding:8px}
.hamburger span{display:block;width:24px;height:2px;background:var(--white);transition:all .3s}
.mobile-menu{display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:var(--navy);z-index:999;flex-direction:column;align-items:center;justify-content:center;gap:24px}
.mobile-menu.open{display:flex}
.mobile-menu a{color:var(--white);font-size:1.1rem;font-weight:500;letter-spacing:1px;text-transform:uppercase;cursor:pointer}
.mobile-menu a:hover{color:var(--gold)}
.mobile-close{position:absolute;top:24px;right:24px;background:none;border:none;color:var(--white);font-size:2rem;cursor:pointer}

/* HERO */
.hero{min-height:100vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,var(--navy) 0%,#1a3a6b 50%,#0d2440 100%);position:relative;overflow:hidden;padding:120px 24px 80px}
.hero::before{content:'';position:absolute;top:-50%;right:-30%;width:80%;height:200%;background:radial-gradient(ellipse,rgba(201,169,110,.08) 0%,transparent 70%);pointer-events:none}
.hero::after{content:'';position:absolute;bottom:0;left:0;right:0;height:120px;background:linear-gradient(to top,var(--white),transparent)}
.hero-content{text-align:center;max-width:900px;position:relative;z-index:2}
.hero-badge{display:inline-block;background:rgba(201,169,110,.15);color:var(--gold);padding:8px 20px;border-radius:30px;font-size:.75rem;font-weight:600;letter-spacing:2px;text-transform:uppercase;margin-bottom:24px;border:1px solid rgba(201,169,110,.25)}
.hero h1{font-family:var(--font-heading);font-size:clamp(2.2rem,5vw,4rem);color:var(--white);line-height:1.15;margin-bottom:20px;font-weight:700}
.hero h1 em{font-style:normal;color:var(--gold)}
.hero p{font-size:clamp(1rem,1.8vw,1.15rem);color:rgba(255,255,255,.7);max-width:700px;margin:0 auto 36px;line-height:1.7}
.hero-buttons{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;margin-bottom:48px}
.btn-primary{background:var(--gold);color:var(--navy);padding:14px 28px;border-radius:8px;font-weight:700;font-size:.85rem;letter-spacing:.5px;transition:all .25s;border:none;cursor:pointer;text-transform:uppercase}
.btn-primary:hover{background:var(--gold-light);transform:translateY(-2px);box-shadow:0 8px 25px rgba(201,169,110,.35)}
.btn-secondary{background:transparent;color:var(--white);padding:14px 28px;border-radius:8px;font-weight:600;font-size:.85rem;letter-spacing:.5px;transition:all .25s;border:2px solid rgba(255,255,255,.3);cursor:pointer;text-transform:uppercase}
.btn-secondary:hover{border-color:var(--gold);color:var(--gold);transform:translateY(-2px)}
.btn-outline{background:transparent;color:var(--gold);padding:14px 28px;border-radius:8px;font-weight:600;font-size:.85rem;letter-spacing:.5px;transition:all .25s;border:2px solid var(--gold);cursor:pointer;text-transform:uppercase}
.btn-outline:hover{background:var(--gold);color:var(--navy);transform:translateY(-2px)}
.trust-row{display:flex;gap:32px;justify-content:center;flex-wrap:wrap}
.trust-item{display:flex;flex-direction:column;align-items:center;gap:6px;color:rgba(255,255,255,.6);font-size:.72rem;font-weight:500;text-transform:uppercase;letter-spacing:1px}
.trust-icon{width:48px;height:48px;border-radius:50%;background:rgba(201,169,110,.12);display:flex;align-items:center;justify-content:center;font-size:1.2rem;color:var(--gold);border:1px solid rgba(201,169,110,.2)}

/* SECTIONS */
.section{padding:100px 24px}
.section-header{text-align:center;max-width:700px;margin:0 auto 60px}
.section-badge{display:inline-block;color:var(--gold);font-size:.72rem;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;margin-bottom:12px}
.section-title{font-family:var(--font-heading);font-size:clamp(1.8rem,3.5vw,2.8rem);color:var(--navy);line-height:1.2;margin-bottom:16px}
.section-subtitle{color:var(--gray-600);font-size:1.05rem;line-height:1.7}
.section-dark{background:var(--navy);color:var(--white)}
.section-dark .section-title{color:var(--white)}
.section-dark .section-subtitle{color:rgba(255,255,255,.7)}
.section-gray{background:var(--gray-50)}

/* FADE-IN ANIMATION */
.fade-in{opacity:0;transform:translateY(30px);transition:opacity .6s ease,transform .6s ease}
.fade-in.visible{opacity:1;transform:translateY(0)}

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
.credential-card h4{font-size:.75rem;color:var(--gold);text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;font-weight:600}
.credential-card p{font-size:.85rem;color:var(--gray-800);font-weight:500;line-height:1.4;margin:0}

/* SERVICES GRID */
.services-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;max-width:1200px;margin:0 auto}
.service-card{background:var(--white);border:1px solid var(--gray-200);border-radius:var(--radius);padding:28px;text-align:center;transition:all .3s;cursor:default}
.service-card:hover{transform:translateY(-4px);box-shadow:var(--shadow-md);border-color:var(--gold)}
.service-card .icon{font-size:1.6rem;color:var(--gold);margin-bottom:14px}
.service-card h3{font-family:var(--font-heading);font-size:1rem;color:var(--navy);margin-bottom:10px}
.service-card p{font-size:.82rem;color:var(--gray-600);line-height:1.6}

/* DETAIL SECTIONS (Implants, All-on-4, Wisdom) */
.detail-grid{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:start;max-width:1100px;margin:0 auto}
.detail-content h3{font-family:var(--font-heading);font-size:1.5rem;color:var(--navy);margin-bottom:16px}
.detail-content p{color:var(--gray-600);line-height:1.8;margin-bottom:16px}
.detail-content ul{list-style:none;padding:0;margin-bottom:20px}
.detail-content ul li{padding:8px 0 8px 24px;position:relative;color:var(--gray-600);font-size:.9rem;line-height:1.6}
.detail-content ul li::before{content:'\u2726';position:absolute;left:0;color:var(--gold);font-size:.7rem;top:11px}
.step-cards{display:grid;gap:16px}
.step-card{background:var(--white);border:1px solid var(--gray-200);border-radius:10px;padding:20px;display:flex;gap:16px;align-items:start}
.step-number{width:36px;height:36px;border-radius:50%;background:var(--gold);color:var(--navy);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.85rem;flex-shrink:0}
.step-card h4{font-size:.9rem;color:var(--navy);margin-bottom:4px;font-weight:600}
.step-card p{font-size:.82rem;color:var(--gray-600);line-height:1.5;margin:0}
.comparison-table{width:100%;border-collapse:collapse;margin-top:24px;font-size:.85rem}
.comparison-table th{background:var(--navy);color:var(--white);padding:14px 16px;text-align:left;font-size:.8rem;text-transform:uppercase;letter-spacing:.5px}
.comparison-table td{padding:12px 16px;border-bottom:1px solid var(--gray-200);color:var(--gray-600)}
.comparison-table tr:hover{background:var(--gray-50)}
.benefit-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:24px}
.benefit-card{background:var(--white);border:1px solid var(--gray-200);border-radius:10px;padding:24px;text-align:center}
.benefit-card .b-icon{font-size:2rem;margin-bottom:12px}
.benefit-card h4{font-size:.9rem;color:var(--navy);margin-bottom:8px}
.benefit-card p{font-size:.82rem;color:var(--gray-600);line-height:1.5;margin:0}

/* AI SYMPTOM CHECKER */
.ai-wizard{max-width:800px;margin:0 auto;background:var(--white);border-radius:var(--radius);box-shadow:var(--shadow-lg);overflow:hidden}
.ai-progress{height:4px;background:var(--gray-200)}
.ai-progress-bar{height:100%;background:var(--gold);transition:width .4s ease}
.ai-body{padding:40px}
.ai-step-title{font-family:var(--font-heading);font-size:1.4rem;color:var(--navy);margin-bottom:8px}
.ai-step-desc{color:var(--gray-600);margin-bottom:28px;font-size:.95rem}
.symptom-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.symptom-card{background:var(--gray-50);border:2px solid var(--gray-200);border-radius:10px;padding:24px 16px;text-align:center;cursor:pointer;transition:all .2s}
.symptom-card:hover{border-color:var(--gold);background:rgba(201,169,110,.05)}
.symptom-card.selected{border-color:var(--gold);background:rgba(201,169,110,.1);box-shadow:0 0 0 3px rgba(201,169,110,.2)}
.symptom-card .s-icon{font-size:2rem;margin-bottom:10px;display:block}
.symptom-card .s-label{font-size:.82rem;font-weight:600;color:var(--navy)}
.option-list{display:flex;flex-direction:column;gap:10px}
.option-btn{background:var(--gray-50);border:2px solid var(--gray-200);border-radius:8px;padding:14px 20px;text-align:left;cursor:pointer;font-size:.9rem;color:var(--gray-800);transition:all .2s;font-family:var(--font-body)}
.option-btn:hover{border-color:var(--gold);background:rgba(201,169,110,.05)}
.option-btn.selected{border-color:var(--gold);background:rgba(201,169,110,.1)}
.severity-slider{width:100%;margin:20px 0;-webkit-appearance:none;height:8px;border-radius:4px;background:linear-gradient(to right,var(--green),var(--orange),var(--red));outline:none}
.severity-slider::-webkit-slider-thumb{-webkit-appearance:none;width:24px;height:24px;border-radius:50%;background:var(--white);border:3px solid var(--navy);cursor:pointer;box-shadow:var(--shadow-sm)}
.severity-labels{display:flex;justify-content:space-between;font-size:.75rem;color:var(--gray-400)}
.ai-result{text-align:center;padding:20px 0}
.urgency-badge{display:inline-block;padding:8px 24px;border-radius:30px;font-size:.85rem;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:20px}
.urgency-badge.emergency{background:rgba(239,68,68,.1);color:var(--red);border:2px solid var(--red)}
.urgency-badge.urgent{background:rgba(245,158,11,.1);color:var(--orange);border:2px solid var(--orange)}
.urgency-badge.routine{background:rgba(16,185,129,.1);color:var(--green);border:2px solid var(--green)}
.ai-procedures{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin:16px 0}
.ai-procedures span{background:var(--gray-50);border:1px solid var(--gray-200);border-radius:20px;padding:6px 16px;font-size:.82rem;color:var(--navy);font-weight:500}
.ai-disclaimer{background:var(--gray-50);border-radius:8px;padding:16px;margin-top:20px;font-size:.78rem;color:var(--gray-400);line-height:1.5;border:1px solid var(--gray-200)}
.ai-nav{display:flex;justify-content:space-between;margin-top:32px;padding-top:24px;border-top:1px solid var(--gray-200)}
.ai-nav button{padding:12px 28px;border-radius:8px;font-weight:600;font-size:.85rem;cursor:pointer;transition:all .2s;border:none;font-family:var(--font-body)}
.ai-nav .ai-back{background:var(--gray-100);color:var(--gray-600)}
.ai-nav .ai-back:hover{background:var(--gray-200)}
.ai-nav .ai-next{background:var(--gold);color:var(--navy)}
.ai-nav .ai-next:hover{background:var(--gold-light)}

/* COST CALCULATORS */
.calc-tabs{display:flex;gap:4px;margin-bottom:32px;background:var(--gray-100);border-radius:10px;padding:4px;max-width:700px;margin-left:auto;margin-right:auto}
.calc-tab{flex:1;padding:12px 16px;border:none;background:transparent;border-radius:8px;font-size:.8rem;font-weight:600;color:var(--gray-600);cursor:pointer;transition:all .2s;font-family:var(--font-body);text-align:center}
.calc-tab.active{background:var(--white);color:var(--navy);box-shadow:var(--shadow-sm)}
.calc-body{max-width:800px;margin:0 auto;background:var(--white);border-radius:var(--radius);box-shadow:var(--shadow-md);padding:40px}
.calc-step-label{font-size:.8rem;font-weight:600;color:var(--gold);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:8px}
.calc-question{font-family:var(--font-heading);font-size:1.2rem;color:var(--navy);margin-bottom:20px}
.calc-options{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px;margin-bottom:28px}
.calc-option{background:var(--gray-50);border:2px solid var(--gray-200);border-radius:8px;padding:16px;text-align:center;cursor:pointer;transition:all .2s;font-size:.85rem;font-weight:500;color:var(--navy)}
.calc-option:hover{border-color:var(--gold)}
.calc-option.selected{border-color:var(--gold);background:rgba(201,169,110,.1)}
.calc-checkboxes{display:flex;flex-direction:column;gap:10px;margin-bottom:28px}
.calc-checkbox{display:flex;align-items:center;gap:12px;padding:12px 16px;background:var(--gray-50);border-radius:8px;cursor:pointer;transition:all .2s;border:2px solid transparent}
.calc-checkbox:hover{border-color:var(--gold)}
.calc-checkbox.checked{background:rgba(201,169,110,.1);border-color:var(--gold)}
.calc-checkbox input{display:none}
.calc-check-box{width:20px;height:20px;border:2px solid var(--gray-400);border-radius:4px;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .2s}
.calc-checkbox.checked .calc-check-box{background:var(--gold);border-color:var(--gold);color:var(--white)}
.calc-results{background:linear-gradient(135deg,var(--navy),#1a3a6b);border-radius:var(--radius);padding:32px;color:var(--white);margin-top:24px}
.calc-results h3{font-family:var(--font-heading);color:var(--gold);margin-bottom:20px;font-size:1.3rem}
.calc-line{display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.1);font-size:.9rem}
.calc-line.total{border-top:2px solid var(--gold);border-bottom:none;margin-top:8px;padding-top:16px;font-size:1.1rem;font-weight:700;color:var(--gold)}
.calc-financing{background:rgba(201,169,110,.15);border-radius:8px;padding:20px;margin-top:20px}
.calc-financing h4{color:var(--gold);margin-bottom:12px;font-size:.9rem}
.calc-financing-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.calc-fin-option{text-align:center;background:rgba(255,255,255,.08);border-radius:8px;padding:14px}
.calc-fin-option .term{font-size:.72rem;color:rgba(255,255,255,.6);text-transform:uppercase;letter-spacing:1px}
.calc-fin-option .amount{font-size:1.3rem;font-weight:700;color:var(--white);margin-top:4px}
.calc-disclaimer{font-size:.75rem;color:var(--gray-400);text-align:center;margin-top:20px;line-height:1.5;padding:16px;background:var(--gray-50);border-radius:8px}

/* FINANCING CALC */
.fin-slider-container{margin:24px 0}
.fin-slider{width:100%;-webkit-appearance:none;height:8px;border-radius:4px;background:var(--gray-200);outline:none}
.fin-slider::-webkit-slider-thumb{-webkit-appearance:none;width:24px;height:24px;border-radius:50%;background:var(--gold);cursor:pointer;box-shadow:var(--shadow-sm)}
.fin-amount{font-family:var(--font-heading);font-size:2.5rem;color:var(--navy);text-align:center;margin:16px 0}
.fin-terms{display:flex;gap:8px;justify-content:center;margin:20px 0;flex-wrap:wrap}
.fin-term{padding:10px 20px;border:2px solid var(--gray-200);border-radius:8px;cursor:pointer;font-size:.85rem;font-weight:600;transition:all .2s;background:var(--white)}
.fin-term.active{border-color:var(--gold);background:rgba(201,169,110,.1);color:var(--navy)}
.fin-results{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:24px}
.fin-card{background:var(--gray-50);border-radius:10px;padding:24px;text-align:center;border:1px solid var(--gray-200)}
.fin-card.promo{border-color:var(--gold);background:rgba(201,169,110,.05)}
.fin-card h4{font-size:.75rem;color:var(--gold);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px}
.fin-card .monthly{font-family:var(--font-heading);font-size:2rem;color:var(--navy)}
.fin-card .apr{font-size:.8rem;color:var(--gray-400);margin-top:4px}

/* KNOWLEDGE BASE */
.kb-search{max-width:600px;margin:0 auto 32px;position:relative}
.kb-search input{width:100%;padding:16px 20px 16px 48px;border:2px solid var(--gray-200);border-radius:10px;font-size:1rem;font-family:var(--font-body);transition:border-color .2s;outline:none}
.kb-search input:focus{border-color:var(--gold)}
.kb-search-icon{position:absolute;left:16px;top:50%;transform:translateY(-50%);font-size:1.2rem;color:var(--gray-400)}
.kb-categories{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-bottom:32px}
.kb-cat{padding:8px 18px;border:1px solid var(--gray-200);border-radius:20px;font-size:.8rem;font-weight:500;cursor:pointer;transition:all .2s;background:var(--white);color:var(--gray-600)}
.kb-cat.active{background:var(--gold);color:var(--navy);border-color:var(--gold)}
.kb-cat:hover{border-color:var(--gold)}
.kb-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;max-width:1200px;margin:0 auto}
.kb-card{background:var(--white);border:1px solid var(--gray-200);border-radius:var(--radius);padding:28px;cursor:pointer;transition:all .3s}
.kb-card:hover{transform:translateY(-4px);box-shadow:var(--shadow-md);border-color:var(--gold)}
.kb-card-cat{font-size:.7rem;color:var(--gold);text-transform:uppercase;letter-spacing:1.5px;font-weight:600;margin-bottom:10px}
.kb-card h3{font-family:var(--font-heading);font-size:1.05rem;color:var(--navy);margin-bottom:10px;line-height:1.3}
.kb-card p{font-size:.82rem;color:var(--gray-600);line-height:1.6;margin-bottom:14px}
.kb-card-meta{display:flex;gap:12px;align-items:center;font-size:.72rem;color:var(--gray-400)}
.kb-card-tags{display:flex;gap:6px;flex-wrap:wrap;margin-top:10px}
.kb-card-tags span{background:var(--gray-50);padding:3px 10px;border-radius:12px;font-size:.7rem;color:var(--gray-600)}

/* KB ARTICLE VIEW */
.kb-article{max-width:800px;margin:0 auto}
.kb-article-back{display:inline-flex;align-items:center;gap:8px;color:var(--gold);font-weight:600;font-size:.85rem;cursor:pointer;margin-bottom:24px;transition:color .2s}
.kb-article-back:hover{color:var(--gold-light)}
.kb-article-header{margin-bottom:32px}
.kb-article-header h1{font-family:var(--font-heading);font-size:2rem;color:var(--navy);margin-bottom:12px;line-height:1.3}
.kb-article-header .meta{display:flex;gap:16px;font-size:.82rem;color:var(--gray-400)}
.kb-article-body p{color:var(--gray-600);line-height:1.9;margin-bottom:18px;font-size:.95rem}
.kb-key-facts{background:rgba(201,169,110,.08);border-left:4px solid var(--gold);border-radius:0 8px 8px 0;padding:24px 28px;margin:28px 0}
.kb-key-facts h3{font-size:.85rem;color:var(--gold);text-transform:uppercase;letter-spacing:1px;margin-bottom:12px}
.kb-key-facts ul{list-style:none;padding:0}
.kb-key-facts ul li{padding:6px 0 6px 20px;position:relative;color:var(--gray-800);font-size:.9rem;font-weight:500}
.kb-key-facts ul li::before{content:'\u2713';position:absolute;left:0;color:var(--gold);font-weight:700}
.kb-references{background:var(--gray-50);border-radius:8px;padding:24px;margin:28px 0}
.kb-references h3{font-size:.85rem;color:var(--navy);text-transform:uppercase;letter-spacing:1px;margin-bottom:12px}
.kb-references ol{padding-left:20px}
.kb-references ol li{font-size:.8rem;color:var(--gray-600);line-height:1.6;margin-bottom:8px}
.kb-related{margin-top:28px}
.kb-related h3{font-size:.85rem;color:var(--navy);text-transform:uppercase;letter-spacing:1px;margin-bottom:12px}
.kb-related-links{display:flex;gap:12px;flex-wrap:wrap}
.kb-related-link{background:var(--gray-50);border:1px solid var(--gray-200);border-radius:8px;padding:10px 18px;font-size:.82rem;color:var(--navy);cursor:pointer;transition:all .2s;font-weight:500}
.kb-related-link:hover{border-color:var(--gold);background:rgba(201,169,110,.05)}

/* BEFORE/AFTER GALLERY */
.gallery-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;max-width:1200px;margin:0 auto}
.gallery-card{background:var(--white);border:1px solid var(--gray-200);border-radius:var(--radius);overflow:hidden;transition:all .3s}
.gallery-card:hover{transform:translateY(-4px);box-shadow:var(--shadow-md)}
.gallery-placeholder{height:200px;background:linear-gradient(135deg,var(--navy),#1a3a6b);display:flex;flex-direction:column;align-items:center;justify-content:center;color:var(--gold);gap:8px}
.gallery-placeholder .g-icon{font-size:2.5rem;opacity:.5}
.gallery-placeholder .g-label{font-size:.7rem;text-transform:uppercase;letter-spacing:2px;opacity:.6}
.gallery-info{padding:18px}
.gallery-info h4{font-size:.9rem;color:var(--navy);margin-bottom:6px}
.gallery-info p{font-size:.78rem;color:var(--gray-600);line-height:1.5;margin:0}

/* PATIENT INFO */
.info-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;max-width:1200px;margin:0 auto}
.info-card{background:var(--white);border:1px solid var(--gray-200);border-radius:var(--radius);padding:28px;text-align:center;transition:all .3s}
.info-card:hover{box-shadow:var(--shadow-md);border-color:var(--gold)}
.info-card .i-icon{font-size:2rem;margin-bottom:14px}
.info-card h3{font-family:var(--font-heading);font-size:1.05rem;color:var(--navy);margin-bottom:10px}
.info-card p{font-size:.82rem;color:var(--gray-600);line-height:1.6;margin-bottom:16px}
.info-card .download-btn{display:inline-block;background:var(--gray-50);border:1px solid var(--gray-200);border-radius:6px;padding:8px 18px;font-size:.78rem;font-weight:600;color:var(--navy);cursor:pointer;transition:all .2s}
.info-card .download-btn:hover{background:var(--gold);color:var(--navy);border-color:var(--gold)}

/* FORMS */
.form-section{max-width:700px;margin:0 auto;background:var(--white);border-radius:var(--radius);box-shadow:var(--shadow-md);padding:40px}
.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px}
.form-group{display:flex;flex-direction:column}
.form-group.full{grid-column:1/-1}
.form-label{font-size:.8rem;font-weight:600;color:var(--navy);margin-bottom:6px;letter-spacing:.3px}
.form-input,.form-select,.form-textarea{padding:12px 16px;border:2px solid var(--gray-200);border-radius:8px;font-size:.9rem;font-family:var(--font-body);transition:border-color .2s;outline:none;background:var(--white);width:100%}
.form-input:focus,.form-select:focus,.form-textarea:focus{border-color:var(--gold)}
.form-textarea{min-height:120px;resize:vertical}
.form-error{color:var(--red);font-size:.75rem;margin-top:4px}
.form-submit{display:block;width:100%;background:var(--gold);color:var(--navy);padding:16px;border:none;border-radius:8px;font-weight:700;font-size:.95rem;cursor:pointer;transition:all .25s;margin-top:20px;font-family:var(--font-body);letter-spacing:.5px;text-transform:uppercase}
.form-submit:hover{background:var(--gold-light);transform:translateY(-2px);box-shadow:0 8px 25px rgba(201,169,110,.35)}
.form-success{text-align:center;padding:40px 20px}
.form-success .check{font-size:3rem;margin-bottom:16px}
.form-success h3{font-family:var(--font-heading);color:var(--navy);margin-bottom:8px;font-size:1.4rem}
.form-success p{color:var(--gray-600);font-size:.95rem}

/* TESTIMONIALS */
.testimonials-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;max-width:1200px;margin:0 auto}
.testimonial-card{background:var(--white);border:1px solid var(--gray-200);border-radius:var(--radius);padding:28px;transition:all .3s}
.testimonial-card:hover{box-shadow:var(--shadow-md)}
.testimonial-card p{color:var(--gray-600);font-size:.9rem;line-height:1.7;margin-bottom:20px;font-style:italic}
.testimonial-card .author{display:flex;gap:12px;align-items:center}
.testimonial-card .avatar{width:44px;height:44px;border-radius:50%;background:var(--gold);color:var(--navy);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:1rem;flex-shrink:0}
.testimonial-card .name{font-weight:600;font-size:.9rem;color:var(--navy)}
.testimonial-card .proc{font-size:.75rem;color:var(--gray-400)}
.testimonial-card .stars{color:var(--gold);font-size:.85rem;margin-top:2px}

/* FAQ */
.faq-list{max-width:800px;margin:0 auto}
.faq-item{border:1px solid var(--gray-200);border-radius:10px;margin-bottom:12px;overflow:hidden;transition:all .2s}
.faq-item:hover{border-color:var(--gold)}
.faq-question{display:flex;justify-content:space-between;align-items:center;padding:20px 24px;cursor:pointer;background:var(--white);transition:background .2s}
.faq-question:hover{background:var(--gray-50)}
.faq-question h3{font-size:.95rem;color:var(--navy);font-weight:600;flex:1}
.faq-toggle{font-size:1.2rem;color:var(--gold);transition:transform .3s;flex-shrink:0;margin-left:16px}
.faq-item.open .faq-toggle{transform:rotate(45deg)}
.faq-answer{padding:0 24px 20px;color:var(--gray-600);font-size:.9rem;line-height:1.7}

/* LOCATION */
.location-grid{display:grid;grid-template-columns:1fr 1fr;gap:48px;max-width:1100px;margin:0 auto}
.location-info h3{font-family:var(--font-heading);font-size:1.3rem;color:var(--navy);margin-bottom:20px}
.location-detail{display:flex;gap:12px;margin-bottom:16px;font-size:.9rem;color:var(--gray-600)}
.location-detail strong{color:var(--navy);min-width:70px}
.location-detail a{color:var(--gold)}
.hours-table{width:100%;margin-top:16px}
.hours-table td{padding:6px 0;font-size:.85rem;color:var(--gray-600);border-bottom:1px solid var(--gray-100)}
.hours-table td:first-child{font-weight:600;color:var(--navy);width:120px}
.map-placeholder{background:linear-gradient(135deg,var(--navy),#1a3a6b);border-radius:var(--radius);display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:400px;color:var(--white);text-align:center;padding:40px}
.cities-section{margin-top:32px}
.cities-section h4{font-size:.85rem;color:var(--gold);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:12px}
.region-group{margin-bottom:16px}
.region-label{font-size:.78rem;font-weight:600;color:var(--navy);margin-bottom:6px}
.city-tags{display:flex;flex-wrap:wrap;gap:6px}
.city-tag{background:var(--gray-50);border:1px solid var(--gray-200);border-radius:16px;padding:4px 12px;font-size:.72rem;color:var(--gray-600);transition:all .2s}
.city-tag:hover{background:rgba(201,169,110,.1);border-color:var(--gold);color:var(--navy)}

/* FOOTER */
.footer-main{background:var(--navy);color:var(--white);padding:60px 24px 30px}
.footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;max-width:1200px;margin:0 auto}
.footer-col h4{color:var(--gold);font-size:.8rem;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:16px}
.footer-col p{color:rgba(255,255,255,.6);font-size:.85rem;line-height:1.6;margin-bottom:8px}
.footer-col a{color:rgba(255,255,255,.6);font-size:.82rem;display:block;margin-bottom:8px;transition:color .2s}
.footer-col a:hover{color:var(--gold)}
.footer-bottom{max-width:1200px;margin:30px auto 0;padding-top:24px;border-top:1px solid rgba(255,255,255,.1);display:flex;justify-content:space-between;align-items:center;font-size:.75rem;color:rgba(255,255,255,.4);flex-wrap:wrap;gap:16px}
.footer-disclaimer{max-width:1200px;margin:20px auto 0;padding-top:16px;border-top:1px solid rgba(255,255,255,.05);font-size:.7rem;color:rgba(255,255,255,.25);line-height:1.6}

/* FLOATING COMMS */
.float-comms{position:fixed;bottom:24px;right:24px;z-index:900}
.float-btn{width:60px;height:60px;border-radius:50%;background:var(--gold);color:var(--navy);border:none;cursor:pointer;font-size:1.6rem;display:flex;align-items:center;justify-content:center;box-shadow:var(--shadow-lg);transition:all .3s;position:relative}
.float-btn:hover{transform:scale(1.1)}
.float-btn .pulse{position:absolute;width:100%;height:100%;border-radius:50%;border:2px solid var(--gold);animation:pulse 2s infinite}
@keyframes pulse{0%{transform:scale(1);opacity:.8}100%{transform:scale(1.5);opacity:0}}
.float-menu{position:absolute;bottom:70px;right:0;display:flex;flex-direction:column;gap:10px;align-items:flex-end}
.float-option{display:flex;align-items:center;gap:10px;white-space:nowrap}
.float-option-btn{width:48px;height:48px;border-radius:50%;border:none;cursor:pointer;font-size:1.3rem;display:flex;align-items:center;justify-content:center;box-shadow:var(--shadow-md);transition:all .2s}
.float-option-btn:hover{transform:scale(1.1)}
.float-option-btn.wa{background:#25D366;color:white}
.float-option-btn.tg{background:#0088cc;color:white}
.float-option-btn.ph{background:var(--gold);color:var(--navy)}
.float-option-btn.sm{background:var(--gray-600);color:white}
.float-option-label{background:var(--navy);color:var(--white);padding:6px 14px;border-radius:6px;font-size:.78rem;font-weight:500;box-shadow:var(--shadow-sm)}

/* ACCESSIBILITY TOOLBAR */
.a11y-toggle{position:fixed;top:100px;right:24px;z-index:800;width:40px;height:40px;border-radius:50%;background:var(--navy);color:var(--white);border:2px solid var(--gold);cursor:pointer;font-size:1rem;display:flex;align-items:center;justify-content:center;box-shadow:var(--shadow-sm);transition:all .2s}
.a11y-toggle:hover{background:var(--gold);color:var(--navy)}
.a11y-panel{position:fixed;top:148px;right:24px;z-index:800;background:var(--white);border-radius:10px;box-shadow:var(--shadow-lg);padding:20px;min-width:200px;border:1px solid var(--gray-200)}
.a11y-panel h4{font-size:.78rem;color:var(--gold);text-transform:uppercase;letter-spacing:1px;margin-bottom:14px}
.a11y-row{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px}
.a11y-row label{font-size:.82rem;color:var(--gray-600);font-weight:500}
.a11y-font-btns{display:flex;gap:6px}
.a11y-font-btn{width:32px;height:32px;border:1px solid var(--gray-200);border-radius:6px;background:var(--white);cursor:pointer;font-weight:700;font-size:.8rem;color:var(--navy);display:flex;align-items:center;justify-content:center;transition:all .2s}
.a11y-font-btn:hover{border-color:var(--gold);background:rgba(201,169,110,.1)}
.a11y-switch{width:44px;height:24px;border-radius:12px;background:var(--gray-200);cursor:pointer;position:relative;transition:background .2s;border:none}
.a11y-switch.on{background:var(--gold)}
.a11y-switch::after{content:'';position:absolute;top:2px;left:2px;width:20px;height:20px;border-radius:50%;background:var(--white);transition:transform .2s;box-shadow:var(--shadow-sm)}
.a11y-switch.on::after{transform:translateX(20px)}

/* RESPONSIVE */
@media(max-width:1024px){
  .services-grid{grid-template-columns:repeat(3,1fr)}
  .gallery-grid{grid-template-columns:repeat(2,1fr)}
  .benefit-cards{grid-template-columns:repeat(2,1fr)}
}
@media(max-width:768px){
  .nav-links{display:none}
  .nav-cta{display:none}
  .hamburger{display:flex}
  .hero h1{font-size:2rem}
  .hero-buttons{flex-direction:column;align-items:center}
  .about-grid,.detail-grid,.location-grid{grid-template-columns:1fr}
  .services-grid{grid-template-columns:repeat(2,1fr)}
  .symptom-grid{grid-template-columns:repeat(2,1fr)}
  .kb-grid{grid-template-columns:1fr}
  .testimonials-grid{grid-template-columns:1fr}
  .info-grid{grid-template-columns:repeat(2,1fr)}
  .gallery-grid{grid-template-columns:repeat(2,1fr)}
  .form-grid{grid-template-columns:1fr}
  .footer-grid{grid-template-columns:1fr 1fr}
  .calc-tabs{flex-wrap:wrap}
  .calc-financing-grid{grid-template-columns:1fr}
  .fin-results{grid-template-columns:1fr}
  .credentials-grid{grid-template-columns:1fr}
  .benefit-cards{grid-template-columns:1fr}
  .trust-row{gap:20px}
  .a11y-toggle{top:auto;bottom:100px;right:24px}
  .a11y-panel{top:auto;bottom:148px;right:24px}
}
@media(max-width:480px){
  .services-grid{grid-template-columns:1fr}
  .symptom-grid{grid-template-columns:1fr 1fr}
  .info-grid{grid-template-columns:1fr}
  .gallery-grid{grid-template-columns:1fr}
  .footer-grid{grid-template-columns:1fr}
  .section{padding:60px 16px}
  .calc-options{grid-template-columns:1fr 1fr}
}
`;
