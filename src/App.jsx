import { useState, useEffect, useRef, useCallback } from "react";

// ============================================================
// GALLERIA ORAL SURGERY - ROSEVILLE, CA
// Dr. Alexander Antipov, DDS - Oral & Maxillofacial Surgery
// Powered by Fusion Dental Implants
// ============================================================

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [contactForm, setContactForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [referralForm, setReferralForm] = useState({
    doctorName: "", practiceName: "", doctorPhone: "", doctorEmail: "",
    patientName: "", patientDob: "", patientPhone: "",
    reason: "", urgency: "", notes: ""
  });
  const [referralSubmitted, setReferralSubmitted] = useState(false);
  const [referralErrors, setReferralErrors] = useState({});
  const [contactErrors, setContactErrors] = useState({});
  const observerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("gos-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".gos-animate").forEach((el) => observerRef.current.observe(el));
    return () => observerRef.current && observerRef.current.disconnect();
  }, []);

  const scrollTo = useCallback((id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Dental Implants", id: "implants" },
    { label: "Wisdom Teeth", id: "wisdom-teeth" },
    { label: "All-on-4", id: "all-on-4" },
    { label: "Referrals", id: "referrals" },
    { label: "Contact", id: "contact" },
  ];

  const services = [
    { icon: "\u2B50", title: "Dental Implants", desc: "Single, multiple, and full-arch implant placement using guided surgery for permanent tooth replacement." },
    { icon: "\u{1F9B7}", title: "Wisdom Teeth Removal", desc: "Safe, comfortable extraction of impacted and erupted third molars with IV sedation options." },
    { icon: "\u2728", title: "All-on-4 Full Arch", desc: "Complete smile restoration with just four strategically placed implants and a fixed prosthesis." },
    { icon: "\u{1F9B4}", title: "Bone Grafting & Sinus Lifts", desc: "Ridge augmentation, socket preservation, and sinus floor elevation to rebuild jawbone." },
    { icon: "\u{1F3AF}", title: "Corrective Jaw Surgery", desc: "Orthognathic surgery to correct skeletal and dental irregularities for improved function and aesthetics." },
    { icon: "\u{1FA78}", title: "Tooth Extractions", desc: "Surgical and non-surgical extractions for damaged, decayed, or non-restorable teeth." },
    { icon: "\u{1F6E1}\uFE0F", title: "Facial Trauma Repair", desc: "Emergency treatment of facial fractures, lacerations, and dental avulsions." },
    { icon: "\u2699\uFE0F", title: "TMJ Treatment", desc: "Diagnosis and surgical management of temporomandibular joint disorders and facial pain." },
    { icon: "\u{1F52C}", title: "Oral Pathology & Biopsy", desc: "Evaluation and biopsy of oral lesions, cysts, tumors, and suspicious tissue." },
    { icon: "\u{1F527}", title: "Pre-Prosthetic Surgery", desc: "Alveoloplasty, tori removal, and tissue recontouring to prepare for dentures or prosthetics." },
    { icon: "\u{1FA78}", title: "PRF Therapy", desc: "Platelet-rich fibrin to accelerate healing and improve outcomes in surgical procedures." },
    { icon: "\u{1F4A4}", title: "IV Sedation & Anesthesia", desc: "In-office IV sedation and general anesthesia administered by a board-trained oral surgeon." },
    { icon: "\u{1F50D}", title: "Apicoectomy", desc: "Root-end surgery to preserve teeth with persistent infection after root canal treatment." },
    { icon: "\u{1F517}", title: "Expose & Bond", desc: "Surgical exposure and bonding of impacted canines and other teeth for orthodontic alignment." },
    { icon: "\u2702\uFE0F", title: "Frenectomy", desc: "Release of tongue-tie and lip-tie for improved oral function in children and adults." },
    { icon: "\u{1F49C}", title: "Cleft Lip & Palate", desc: "Surgical repair and reconstruction for patients with cleft lip and palate deformities." },
  ];

  const testimonials = [
    { name: "Jennifer M.", text: "Dr. Antipov removed all four of my wisdom teeth and I barely felt a thing. The IV sedation was so smooth, and his team was incredibly attentive during my recovery. Highly recommend!", rating: 5 },
    { name: "Robert K.", text: "After losing several teeth, Dr. Antipov placed implants that look and feel completely natural. His surgical precision is remarkable. I can eat and smile with confidence again.", rating: 5 },
    { name: "Sarah L.", text: "I was referred to Dr. Antipov for a complex bone graft before implant placement. He explained every step clearly and the results exceeded my expectations. A true expert.", rating: 5 },
    { name: "David T.", text: "The All-on-4 procedure changed my life. Dr. Antipov and his team gave me a full set of beautiful teeth in one day. The care I received from consultation to follow-up was outstanding.", rating: 5 },
  ];

  const faqs = [
    { q: "What types of anesthesia do you offer?", a: "As a board-trained oral and maxillofacial surgeon, Dr. Antipov offers local anesthesia, nitrous oxide, IV sedation, and general anesthesia in our fully equipped office. The appropriate option depends on your procedure and comfort level." },
    { q: "How long does dental implant surgery take?", a: "A single dental implant placement typically takes 30 to 60 minutes. Multiple implants or full-arch cases like All-on-4 may take 2 to 4 hours. Dr. Antipov uses 3D planning and guided surgery for optimal precision and efficiency." },
    { q: "What is recovery like after wisdom teeth removal?", a: "Most patients recover within 3 to 5 days. Swelling peaks around day 2-3 and gradually subsides. We provide detailed post-operative instructions, medications for comfort, and follow-up care to ensure smooth healing." },
    { q: "Do you accept dental insurance?", a: "Yes, we accept most major dental and medical insurance plans. Many oral surgery procedures, including wisdom teeth removal and trauma repair, may be covered under medical insurance. Our team will verify your benefits and explain coverage before treatment." },
    { q: "What is the All-on-4 procedure?", a: "All-on-4 is a full-arch tooth replacement technique using just four strategically angled dental implants to support a complete set of fixed teeth. It can often be completed in a single day and eliminates the need for removable dentures." },
    { q: "Am I a candidate for dental implants?", a: "Most adults with good general health are candidates for dental implants. Dr. Antipov will evaluate your jawbone density with a 3D CBCT scan. If bone loss is present, bone grafting procedures can rebuild the foundation needed for implant placement." },
    { q: "How do you handle dental emergencies and facial trauma?", a: "We provide urgent care for facial injuries, fractured jaws, knocked-out teeth, and severe dental infections. Contact our office immediately for emergencies and we will accommodate you as quickly as possible." },
    { q: "What should I expect at my first consultation?", a: "Your first visit includes a comprehensive exam, 3D imaging, review of your medical history, and a detailed discussion of your diagnosis and treatment options. We will answer all your questions and provide a clear treatment plan with associated costs." },
    { q: "Do you offer financing options?", a: "Yes, we offer flexible financing through CareCredit and other third-party options with low monthly payments. Our team will work with you to find a solution that fits your budget." },
    { q: "How is an oral surgeon different from a general dentist?", a: "Oral and maxillofacial surgeons complete 4 to 6 years of hospital-based surgical residency training after dental school. This specialized training includes general anesthesia, complex extractions, facial reconstruction, implant surgery, and management of oral pathology." },
  ];

  const validateContactForm = () => {
    const errs = {};
    if (!contactForm.name.trim()) errs.name = "Name is required";
    if (!contactForm.phone.trim()) errs.phone = "Phone is required";
    if (!contactForm.email.trim()) errs.email = "Email is required";
    setContactErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateReferralForm = () => {
    const errs = {};
    if (!referralForm.doctorName.trim()) errs.doctorName = "Doctor name is required";
    if (!referralForm.practiceName.trim()) errs.practiceName = "Practice name is required";
    if (!referralForm.doctorPhone.trim()) errs.doctorPhone = "Phone is required";
    if (!referralForm.doctorEmail.trim()) errs.doctorEmail = "Email is required";
    if (!referralForm.patientName.trim()) errs.patientName = "Patient name is required";
    if (!referralForm.patientPhone.trim()) errs.patientPhone = "Patient phone is required";
    if (!referralForm.reason) errs.reason = "Reason is required";
    if (!referralForm.urgency) errs.urgency = "Urgency is required";
    setReferralErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (validateContactForm()) setContactSubmitted(true);
  };

  const handleReferralSubmit = (e) => {
    e.preventDefault();
    if (validateReferralForm()) setReferralSubmitted(true);
  };

  return (
    <>
      <style>{`
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Inter', sans-serif; color: #333; background: #fff; overflow-x: hidden; }
        h1, h2, h3, h4, h5 { font-family: 'Playfair Display', serif; color: #0B1D3A; }

        .gos-animate { opacity: 0; transform: translateY(30px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .gos-visible { opacity: 1; transform: translateY(0); }

        /* NAV */
        .gos-nav { position: fixed; top: 0; left: 0; width: 100%; z-index: 1000; transition: all 0.3s ease; padding: 16px 0; }
        .gos-nav.scrolled { background: rgba(11,29,58,0.97); backdrop-filter: blur(10px); padding: 10px 0; box-shadow: 0 2px 20px rgba(0,0,0,0.3); }
        .gos-nav-inner { max-width: 1280px; margin: 0 auto; padding: 0 24px; display: flex; align-items: center; justify-content: space-between; }
        .gos-logo { font-family: 'Playfair Display', serif; font-size: 18px; font-weight: 700; color: #C9A96E; letter-spacing: 2px; cursor: pointer; text-transform: uppercase; }
        .gos-nav-links { display: flex; gap: 24px; align-items: center; list-style: none; }
        .gos-nav-links a { color: #fff; text-decoration: none; font-size: 13px; font-weight: 500; letter-spacing: 0.5px; transition: color 0.3s; cursor: pointer; }
        .gos-nav-links a:hover { color: #C9A96E; }
        .gos-nav-phone { background: #C9A96E; color: #0B1D3A; padding: 10px 20px; border-radius: 4px; font-weight: 700; font-size: 13px; text-decoration: none; letter-spacing: 0.5px; transition: all 0.3s; }
        .gos-nav-phone:hover { background: #b8944f; }
        .gos-hamburger { display: none; background: none; border: none; cursor: pointer; flex-direction: column; gap: 5px; padding: 4px; }
        .gos-hamburger span { display: block; width: 26px; height: 2px; background: #C9A96E; transition: all 0.3s; }
        .gos-mobile-menu { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100vh; background: rgba(11,29,58,0.98); z-index: 999; flex-direction: column; align-items: center; justify-content: center; gap: 28px; }
        .gos-mobile-menu.open { display: flex; }
        .gos-mobile-menu a { color: #fff; text-decoration: none; font-size: 20px; font-family: 'Playfair Display', serif; letter-spacing: 1px; cursor: pointer; }
        .gos-mobile-menu a:hover { color: #C9A96E; }
        .gos-mobile-close { position: absolute; top: 24px; right: 24px; background: none; border: none; color: #C9A96E; font-size: 32px; cursor: pointer; }

        /* HERO */
        .gos-hero { min-height: 100vh; background: linear-gradient(135deg, #0B1D3A 0%, #162d54 50%, #1a3562 100%); display: flex; align-items: center; justify-content: center; text-align: center; padding: 120px 24px 80px; position: relative; overflow: hidden; }
        .gos-hero::before { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(ellipse at 30% 50%, rgba(201,169,110,0.08) 0%, transparent 60%); }
        .gos-hero-content { position: relative; z-index: 2; max-width: 800px; }
        .gos-hero-badge { display: inline-block; color: #C9A96E; font-size: 13px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 24px; border: 1px solid rgba(201,169,110,0.3); padding: 8px 20px; border-radius: 2px; }
        .gos-hero h1 { font-size: clamp(32px, 5vw, 56px); color: #fff; line-height: 1.2; margin-bottom: 20px; }
        .gos-hero h1 span { color: #C9A96E; }
        .gos-hero p { color: rgba(255,255,255,0.8); font-size: clamp(16px, 2vw, 19px); line-height: 1.7; margin-bottom: 36px; max-width: 640px; margin-left: auto; margin-right: auto; }
        .gos-hero-btns { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; margin-bottom: 48px; }
        .gos-btn-primary { background: #C9A96E; color: #0B1D3A; padding: 16px 36px; border: none; border-radius: 4px; font-size: 15px; font-weight: 700; cursor: pointer; letter-spacing: 0.5px; transition: all 0.3s; text-decoration: none; }
        .gos-btn-primary:hover { background: #b8944f; transform: translateY(-2px); }
        .gos-btn-secondary { background: transparent; color: #fff; padding: 16px 36px; border: 2px solid rgba(255,255,255,0.3); border-radius: 4px; font-size: 15px; font-weight: 600; cursor: pointer; letter-spacing: 0.5px; transition: all 0.3s; text-decoration: none; }
        .gos-btn-secondary:hover { border-color: #C9A96E; color: #C9A96E; }
        .gos-trust-row { display: flex; gap: 32px; justify-content: center; flex-wrap: wrap; }
        .gos-trust-item { color: rgba(255,255,255,0.7); font-size: 13px; display: flex; align-items: center; gap: 8px; }
        .gos-trust-icon { color: #C9A96E; font-size: 16px; }

        /* SECTIONS */
        .gos-section { padding: 96px 24px; max-width: 1200px; margin: 0 auto; }
        .gos-section-alt { background: #F8F9FA; }
        .gos-section-dark { background: #0B1D3A; }
        .gos-section-title { text-align: center; margin-bottom: 56px; }
        .gos-section-title h2 { font-size: clamp(28px, 4vw, 40px); margin-bottom: 16px; }
        .gos-section-title .gos-gold-line { width: 60px; height: 3px; background: #C9A96E; margin: 0 auto 16px; }
        .gos-section-title p { color: #666; font-size: 17px; max-width: 640px; margin: 0 auto; line-height: 1.7; }

        /* ABOUT */
        .gos-about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; }
        .gos-about-photo { background: linear-gradient(135deg, #0B1D3A, #1a3562); border-radius: 8px; padding: 48px; text-align: center; color: #fff; min-height: 400px; display: flex; flex-direction: column; align-items: center; justify-content: center; }
        .gos-about-photo-icon { font-size: 80px; margin-bottom: 24px; color: #C9A96E; }
        .gos-about-photo h3 { font-size: 24px; color: #fff; margin-bottom: 8px; }
        .gos-about-photo p { color: #C9A96E; font-size: 14px; letter-spacing: 1px; }
        .gos-about-text h2 { font-size: 32px; margin-bottom: 20px; }
        .gos-about-text .gos-gold-line { width: 60px; height: 3px; background: #C9A96E; margin-bottom: 20px; }
        .gos-about-text p { color: #555; line-height: 1.8; margin-bottom: 16px; font-size: 15px; }
        .gos-credentials { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 24px; }
        .gos-credential { background: #F8F9FA; padding: 16px; border-radius: 6px; border-left: 3px solid #C9A96E; }
        .gos-credential h4 { font-size: 13px; color: #0B1D3A; margin-bottom: 4px; font-family: 'Inter', sans-serif; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; }
        .gos-credential p { font-size: 13px; color: #666; }

        /* SERVICES GRID */
        .gos-services-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 24px; }
        .gos-service-card { background: #fff; border-radius: 8px; padding: 32px 24px; text-align: center; border: 1px solid #e8e8e8; transition: all 0.3s; cursor: default; }
        .gos-service-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(11,29,58,0.1); border-color: #C9A96E; }
        .gos-service-icon { font-size: 36px; margin-bottom: 16px; }
        .gos-service-card h3 { font-size: 17px; margin-bottom: 10px; }
        .gos-service-card p { font-size: 13px; color: #666; line-height: 1.7; }

        /* IMPLANTS */
        .gos-implant-types { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 24px; margin-bottom: 48px; }
        .gos-implant-type { background: #fff; border-radius: 8px; padding: 32px; text-align: center; border: 1px solid #e8e8e8; }
        .gos-implant-type h3 { font-size: 18px; margin-bottom: 10px; }
        .gos-implant-type p { font-size: 14px; color: #666; line-height: 1.7; }
        .gos-process-steps { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 24px; margin-top: 32px; }
        .gos-step { text-align: center; padding: 24px; }
        .gos-step-num { width: 48px; height: 48px; background: #C9A96E; color: #0B1D3A; font-weight: 800; font-size: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; }
        .gos-step h4 { font-size: 16px; margin-bottom: 8px; }
        .gos-step p { font-size: 13px; color: #666; line-height: 1.6; }
        .gos-benefits-list { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 24px; }
        .gos-benefit-item { display: flex; align-items: center; gap: 10px; font-size: 14px; color: #333; }
        .gos-benefit-check { color: #C9A96E; font-weight: 700; font-size: 18px; }

        /* ALL-ON-4 */
        .gos-comparison-table { width: 100%; border-collapse: collapse; margin-top: 32px; border-radius: 8px; overflow: hidden; }
        .gos-comparison-table th { background: #0B1D3A; color: #fff; padding: 16px; text-align: left; font-size: 14px; font-weight: 600; }
        .gos-comparison-table td { padding: 14px 16px; border-bottom: 1px solid #e8e8e8; font-size: 14px; color: #555; }
        .gos-comparison-table tr:nth-child(even) { background: #F8F9FA; }
        .gos-allon4-benefits { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 24px; margin-top: 32px; }
        .gos-allon4-benefit { background: #fff; padding: 24px; border-radius: 8px; border: 1px solid #e8e8e8; }
        .gos-allon4-benefit h4 { font-size: 16px; margin-bottom: 8px; color: #0B1D3A; }
        .gos-allon4-benefit p { font-size: 13px; color: #666; line-height: 1.7; }

        /* WISDOM TEETH */
        .gos-wt-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; margin-top: 32px; }
        .gos-wt-signs { list-style: none; }
        .gos-wt-signs li { padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px; color: #555; display: flex; align-items: center; gap: 10px; }
        .gos-wt-signs li::before { content: '\u26A0\uFE0F'; }
        .gos-sedation-options { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px; margin-top: 24px; }
        .gos-sedation-card { background: #fff; padding: 20px; border-radius: 8px; text-align: center; border: 1px solid #e8e8e8; }
        .gos-sedation-card h4 { font-size: 14px; margin-bottom: 6px; }
        .gos-sedation-card p { font-size: 12px; color: #666; }

        /* PATIENT INFO */
        .gos-info-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 24px; }
        .gos-info-card { background: #fff; padding: 32px; border-radius: 8px; border: 1px solid #e8e8e8; }
        .gos-info-card h3 { font-size: 18px; margin-bottom: 12px; }
        .gos-info-card p, .gos-info-card li { font-size: 14px; color: #666; line-height: 1.8; }
        .gos-info-card ul { list-style: none; padding: 0; }
        .gos-info-card ul li::before { content: '\u2022 '; color: #C9A96E; font-weight: 700; }

        /* FORMS */
        .gos-form { max-width: 640px; margin: 0 auto; }
        .gos-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .gos-form-group { margin-bottom: 16px; }
        .gos-form-group.full { grid-column: 1 / -1; }
        .gos-form-group label { display: block; font-size: 13px; font-weight: 600; color: #0B1D3A; margin-bottom: 6px; letter-spacing: 0.3px; }
        .gos-form-group input, .gos-form-group select, .gos-form-group textarea { width: 100%; padding: 12px 16px; border: 1px solid #ddd; border-radius: 4px; font-size: 14px; font-family: 'Inter', sans-serif; transition: border-color 0.3s; background: #fff; }
        .gos-form-group input:focus, .gos-form-group select:focus, .gos-form-group textarea:focus { outline: none; border-color: #C9A96E; }
        .gos-form-group textarea { resize: vertical; min-height: 100px; }
        .gos-form-error { color: #c0392b; font-size: 12px; margin-top: 4px; }
        .gos-form-submit { background: #C9A96E; color: #0B1D3A; padding: 14px 40px; border: none; border-radius: 4px; font-size: 15px; font-weight: 700; cursor: pointer; transition: all 0.3s; letter-spacing: 0.5px; width: 100%; margin-top: 8px; }
        .gos-form-submit:hover { background: #b8944f; }
        .gos-form-success { text-align: center; padding: 48px 24px; background: #f0fdf0; border-radius: 8px; }
        .gos-form-success h3 { color: #27ae60; margin-bottom: 12px; }
        .gos-form-success p { color: #555; }

        /* REFERRALS */
        .gos-referral-wrapper { max-width: 800px; margin: 0 auto; }
        .gos-referral-intro { text-align: center; margin-bottom: 40px; }
        .gos-referral-intro p { color: #666; font-size: 16px; line-height: 1.7; }

        /* TESTIMONIALS */
        .gos-testimonials-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px; }
        .gos-testimonial { background: #fff; padding: 32px; border-radius: 8px; border: 1px solid #e8e8e8; position: relative; }
        .gos-testimonial::before { content: '\u201C'; font-size: 60px; color: #C9A96E; position: absolute; top: 12px; left: 20px; font-family: serif; line-height: 1; }
        .gos-testimonial p { font-size: 14px; color: #555; line-height: 1.8; padding-top: 32px; margin-bottom: 16px; font-style: italic; }
        .gos-testimonial-author { font-weight: 700; color: #0B1D3A; font-size: 14px; }
        .gos-testimonial-stars { color: #C9A96E; font-size: 16px; margin-top: 4px; }

        /* FAQ */
        .gos-faq-list { max-width: 800px; margin: 0 auto; }
        .gos-faq-item { border: 1px solid #e8e8e8; border-radius: 8px; margin-bottom: 12px; overflow: hidden; }
        .gos-faq-q { width: 100%; background: #fff; border: none; padding: 20px 24px; text-align: left; font-size: 15px; font-weight: 600; color: #0B1D3A; cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-family: 'Inter', sans-serif; transition: background 0.3s; }
        .gos-faq-q:hover { background: #F8F9FA; }
        .gos-faq-q span { color: #C9A96E; font-size: 20px; transition: transform 0.3s; }
        .gos-faq-a { padding: 0 24px 20px; font-size: 14px; color: #666; line-height: 1.8; }

        /* LOCATION */
        .gos-location-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; }
        .gos-location-info h3 { font-size: 22px; margin-bottom: 16px; }
        .gos-location-detail { display: flex; gap: 12px; margin-bottom: 16px; font-size: 14px; color: #555; }
        .gos-location-detail strong { color: #0B1D3A; }
        .gos-hours-table { width: 100%; margin-top: 16px; }
        .gos-hours-table td { padding: 8px 0; font-size: 14px; color: #555; border-bottom: 1px solid #eee; }
        .gos-hours-table td:first-child { font-weight: 600; color: #0B1D3A; }
        .gos-cities-served { margin-top: 24px; }
        .gos-cities-served h4 { font-size: 16px; margin-bottom: 12px; }
        .gos-cities-list { display: flex; flex-wrap: wrap; gap: 8px; }
        .gos-city-tag { background: #F8F9FA; padding: 6px 14px; border-radius: 20px; font-size: 13px; color: #555; border: 1px solid #e8e8e8; }
        .gos-map-placeholder { background: linear-gradient(135deg, #0B1D3A, #1a3562); border-radius: 8px; min-height: 400px; display: flex; align-items: center; justify-content: center; color: #fff; text-align: center; padding: 32px; }

        /* FOOTER */
        .gos-footer { background: #0B1D3A; color: rgba(255,255,255,0.7); padding: 64px 24px 32px; }
        .gos-footer-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; }
        .gos-footer h4 { color: #C9A96E; font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 20px; }
        .gos-footer p, .gos-footer a, .gos-footer li { font-size: 13px; line-height: 2; color: rgba(255,255,255,0.6); text-decoration: none; }
        .gos-footer a:hover { color: #C9A96E; }
        .gos-footer ul { list-style: none; }
        .gos-footer-bottom { max-width: 1200px; margin: 40px auto 0; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.1); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; }
        .gos-footer-bottom p { font-size: 12px; color: rgba(255,255,255,0.4); }
        .gos-footer-disclaimer { font-size: 11px; color: rgba(255,255,255,0.3); max-width: 1200px; margin: 24px auto 0; line-height: 1.6; }

        /* RESPONSIVE */
        @media (max-width: 968px) {
          .gos-nav-links { display: none; }
          .gos-nav-phone { display: none; }
          .gos-hamburger { display: flex; }
          .gos-about-grid, .gos-wt-grid, .gos-location-grid { grid-template-columns: 1fr; }
          .gos-footer-inner { grid-template-columns: 1fr 1fr; }
          .gos-credentials { grid-template-columns: 1fr; }
          .gos-benefits-list { grid-template-columns: 1fr; }
          .gos-form-grid { grid-template-columns: 1fr; }
          .gos-form-group.full { grid-column: 1; }
        }
        @media (max-width: 640px) {
          .gos-footer-inner { grid-template-columns: 1fr; }
          .gos-hero-btns { flex-direction: column; align-items: center; }
          .gos-trust-row { flex-direction: column; align-items: center; }
        }
      `}</style>

      {/* NAVIGATION */}
      <nav className={`gos-nav ${scrolled ? "scrolled" : ""}`} style={!scrolled ? { background: "rgba(11,29,58,0.9)" } : {}}>
        <div className="gos-nav-inner">
          <div className="gos-logo" onClick={() => scrollTo("home")}>Galleria Oral Surgery</div>
          <ul className="gos-nav-links">
            {navLinks.map((l) => (
              <li key={l.id}><a onClick={() => scrollTo(l.id)}>{l.label}</a></li>
            ))}
          </ul>
          <a href="tel:9167832110" className="gos-nav-phone">(916) 783-2110</a>
          <button className="gos-hamburger" onClick={() => setMobileMenuOpen(true)} aria-label="Open menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`gos-mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <button className="gos-mobile-close" onClick={() => setMobileMenuOpen(false)}>&times;</button>
        {navLinks.map((l) => (
          <a key={l.id} onClick={() => scrollTo(l.id)}>{l.label}</a>
        ))}
        <a href="tel:9167832110" style={{ color: "#C9A96E", fontFamily: "Inter, sans-serif", fontWeight: 700 }}>(916) 783-2110</a>
      </div>

      {/* HERO */}
      <section id="home" className="gos-hero">
        <div className="gos-hero-content">
          <div className="gos-hero-badge">Oral &amp; Maxillofacial Surgery</div>
          <h1>Excellence in Oral &amp; <span>Maxillofacial Surgery</span></h1>
          <p>Dr. Alexander Antipov, DDS provides full scope oral surgery and dental implant services in Roseville, CA. From wisdom teeth removal to complex implant reconstruction, experience exceptional surgical care in a comfortable, state-of-the-art environment.</p>
          <div className="gos-hero-btns">
            <button className="gos-btn-primary" onClick={() => scrollTo("contact")}>Schedule Consultation</button>
            <button className="gos-btn-secondary" onClick={() => scrollTo("referrals")}>Refer a Patient</button>
          </div>
          <div className="gos-trust-row">
            <div className="gos-trust-item"><span className="gos-trust-icon">&#9733;</span> Board-Trained OMS</div>
            <div className="gos-trust-item"><span className="gos-trust-icon">&#9733;</span> IV Sedation &amp; General Anesthesia</div>
            <div className="gos-trust-item"><span className="gos-trust-icon">&#9733;</span> 3D Guided Implant Surgery</div>
            <div className="gos-trust-item"><span className="gos-trust-icon">&#9733;</span> AAOMS Member</div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="gos-section-alt">
        <div className="gos-section" style={{ paddingTop: 96, paddingBottom: 96 }}>
          <div className="gos-about-grid gos-animate">
            <div className="gos-about-photo">
              <div className="gos-about-photo-icon">&#9877;</div>
              <h3>Dr. Alexander Antipov</h3>
              <p>DDS &bull; Oral &amp; Maxillofacial Surgery</p>
            </div>
            <div className="gos-about-text">
              <h2>Meet Dr. Antipov</h2>
              <div className="gos-gold-line" />
              <p>Dr. Alexander Antipov is a skilled oral and maxillofacial surgeon dedicated to providing the highest standard of surgical care to patients in Roseville and the greater Sacramento region. With years of advanced surgical training, he brings precision, expertise, and compassion to every procedure.</p>
              <p>After earning his Doctor of Dental Surgery degree from a top-tier dental program, Dr. Antipov completed an intensive residency in oral and maxillofacial surgery at a university-affiliated hospital, gaining extensive experience in dental implants, wisdom teeth removal, corrective jaw surgery, facial trauma reconstruction, and the full scope of OMS procedures.</p>
              <p>Dr. Antipov is committed to using the latest technology, including 3D cone beam imaging, computer-guided implant surgery, and platelet-rich fibrin therapy, to deliver predictable, comfortable results for his patients.</p>
              <div className="gos-credentials">
                <div className="gos-credential">
                  <h4>Education</h4>
                  <p>Doctor of Dental Surgery (DDS)</p>
                </div>
                <div className="gos-credential">
                  <h4>Residency</h4>
                  <p>Oral &amp; Maxillofacial Surgery</p>
                </div>
                <div className="gos-credential">
                  <h4>Memberships</h4>
                  <p>AAOMS, ADA, CDA</p>
                </div>
                <div className="gos-credential">
                  <h4>Specialization</h4>
                  <p>Implants, Jaw Surgery, Trauma</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div className="gos-section">
          <div className="gos-section-title gos-animate">
            <h2>Oral Surgery Services</h2>
            <div className="gos-gold-line" />
            <p>Galleria Oral Surgery provides comprehensive oral and maxillofacial surgery services, from routine extractions to complex reconstructive procedures.</p>
          </div>
          <div className="gos-services-grid">
            {services.map((s, i) => (
              <div key={i} className="gos-service-card gos-animate">
                <div className="gos-service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DENTAL IMPLANTS */}
      <section id="implants" className="gos-section-alt">
        <div className="gos-section">
          <div className="gos-section-title gos-animate">
            <h2>Dental Implant Surgery</h2>
            <div className="gos-gold-line" />
            <p>As an oral surgeon, Dr. Antipov specializes in the surgical placement of dental implants, the gold standard for permanent tooth replacement.</p>
          </div>
          <div className="gos-implant-types gos-animate">
            <div className="gos-implant-type">
              <h3>Single Tooth Implants</h3>
              <p>A single titanium implant replaces one missing tooth with a natural-looking crown. No alteration of adjacent teeth required.</p>
            </div>
            <div className="gos-implant-type">
              <h3>Multiple Tooth Implants</h3>
              <p>Implant-supported bridges replace several missing teeth without removable partial dentures.</p>
            </div>
            <div className="gos-implant-type">
              <h3>Full Arch Implants</h3>
              <p>All-on-4 and All-on-6 techniques provide a complete set of fixed teeth with minimal implants.</p>
            </div>
            <div className="gos-implant-type">
              <h3>Implant-Retained Dentures</h3>
              <p>Snap-on overdentures anchored by implants for improved stability and confidence over traditional dentures.</p>
            </div>
          </div>
          <div className="gos-animate">
            <h3 style={{ fontSize: 24, marginBottom: 8, textAlign: "center" }}>The Implant Process</h3>
            <div className="gos-process-steps">
              <div className="gos-step">
                <div className="gos-step-num">1</div>
                <h4>Consultation &amp; 3D Imaging</h4>
                <p>Comprehensive exam with cone beam CT scan to evaluate bone structure and plan precise implant placement.</p>
              </div>
              <div className="gos-step">
                <div className="gos-step-num">2</div>
                <h4>Bone Grafting (if needed)</h4>
                <p>Socket preservation or ridge augmentation to build a strong foundation for implant success.</p>
              </div>
              <div className="gos-step">
                <div className="gos-step-num">3</div>
                <h4>Implant Placement</h4>
                <p>Surgical placement of titanium implants under IV sedation or local anesthesia with guided surgery.</p>
              </div>
              <div className="gos-step">
                <div className="gos-step-num">4</div>
                <h4>Healing &amp; Restoration</h4>
                <p>After osseointegration (3-6 months), your restoring dentist places the final crown, bridge, or prosthesis.</p>
              </div>
            </div>
          </div>
          <div className="gos-animate" style={{ marginTop: 48 }}>
            <h3 style={{ fontSize: 24, marginBottom: 8, textAlign: "center" }}>Benefits of Dental Implants</h3>
            <div className="gos-benefits-list" style={{ maxWidth: 640, margin: "24px auto 0" }}>
              {["Look and feel like natural teeth", "Preserve jawbone and prevent bone loss", "No adhesives or removal required", "Eat all your favorite foods with confidence", "Last a lifetime with proper care", "Protect adjacent healthy teeth", "Improved speech and comfort", "Highest success rate of any tooth replacement"].map((b, i) => (
                <div key={i} className="gos-benefit-item"><span className="gos-benefit-check">&#10003;</span>{b}</div>
              ))}
            </div>
          </div>
          <div className="gos-animate" style={{ marginTop: 48, textAlign: "center" }}>
            <h3 style={{ fontSize: 24, marginBottom: 12 }}>Are You a Candidate?</h3>
            <p style={{ maxWidth: 640, margin: "0 auto", color: "#666", fontSize: 15, lineHeight: 1.8 }}>Most adults in good general health are excellent candidates for dental implants. During your consultation, Dr. Antipov will evaluate your bone density using 3D imaging, review your medical history, and discuss the best implant solution for your specific needs. If bone loss is present, grafting procedures can restore the foundation needed for successful implant placement.</p>
          </div>
        </div>
      </section>

      {/* ALL-ON-4 */}
      <section id="all-on-4">
        <div className="gos-section">
          <div className="gos-section-title gos-animate">
            <h2>All-on-4 Full Arch Implants</h2>
            <div className="gos-gold-line" />
            <p>Replace an entire arch of missing or failing teeth with just four strategically placed implants and a fixed, non-removable prosthesis.</p>
          </div>
          <div className="gos-allon4-benefits gos-animate">
            <div className="gos-allon4-benefit">
              <h4>Same-Day Teeth</h4>
              <p>Receive a temporary fixed prosthesis on the same day as implant placement. Walk out with a complete smile.</p>
            </div>
            <div className="gos-allon4-benefit">
              <h4>Only 4 Implants Per Arch</h4>
              <p>Angled posterior implants maximize available bone, often eliminating the need for bone grafting.</p>
            </div>
            <div className="gos-allon4-benefit">
              <h4>Fixed, Non-Removable</h4>
              <p>Unlike dentures, All-on-4 teeth are permanently fixed. No slipping, no adhesives, no removal at night.</p>
            </div>
            <div className="gos-allon4-benefit">
              <h4>Bone Preservation</h4>
              <p>Implants stimulate the jawbone, preventing the bone resorption that occurs with traditional dentures.</p>
            </div>
            <div className="gos-allon4-benefit">
              <h4>Natural Look &amp; Function</h4>
              <p>Custom-designed prosthesis looks, feels, and functions like natural teeth. Eat, speak, and smile with confidence.</p>
            </div>
            <div className="gos-allon4-benefit">
              <h4>Proven Long-Term Results</h4>
              <p>All-on-4 has decades of clinical research demonstrating excellent long-term success rates above 95%.</p>
            </div>
          </div>
          <div className="gos-animate" style={{ marginTop: 48, overflowX: "auto" }}>
            <h3 style={{ fontSize: 22, textAlign: "center", marginBottom: 16 }}>All-on-4 vs. Traditional Dentures</h3>
            <table className="gos-comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>All-on-4 Implants</th>
                  <th>Traditional Dentures</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Stability</td><td>Permanently fixed</td><td>May slip or shift</td></tr>
                <tr><td>Bone Preservation</td><td>Stimulates bone growth</td><td>Bone loss over time</td></tr>
                <tr><td>Eating Ability</td><td>Eat all foods normally</td><td>Limited to soft foods</td></tr>
                <tr><td>Maintenance</td><td>Brush like natural teeth</td><td>Remove and soak daily</td></tr>
                <tr><td>Taste</td><td>Full palate exposure</td><td>Palate covered, reduced taste</td></tr>
                <tr><td>Longevity</td><td>20+ years with care</td><td>Replace every 5-7 years</td></tr>
                <tr><td>Facial Structure</td><td>Maintains facial volume</td><td>Progressive facial collapse</td></tr>
                <tr><td>Adhesives</td><td>Never needed</td><td>Often required</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* WISDOM TEETH */}
      <section id="wisdom-teeth" className="gos-section-alt">
        <div className="gos-section">
          <div className="gos-section-title gos-animate">
            <h2>Wisdom Teeth Removal</h2>
            <div className="gos-gold-line" />
            <p>Safe, comfortable wisdom tooth extraction by a specialist trained in surgical removal of impacted third molars.</p>
          </div>
          <div className="gos-wt-grid gos-animate">
            <div>
              <h3 style={{ fontSize: 20, marginBottom: 16 }}>Signs of Impacted Wisdom Teeth</h3>
              <ul className="gos-wt-signs">
                <li>Pain or tenderness in the back of the jaw</li>
                <li>Swollen, red, or bleeding gums near molars</li>
                <li>Jaw stiffness or difficulty opening mouth</li>
                <li>Recurring infections or bad breath</li>
                <li>Crowding or shifting of other teeth</li>
                <li>Cyst formation visible on X-ray</li>
                <li>Headaches or earaches from referred pain</li>
                <li>Damage to adjacent second molars</li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: 20, marginBottom: 16 }}>What to Expect</h3>
              <p style={{ color: "#555", fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>Wisdom teeth removal is one of the most common procedures performed by oral surgeons. Dr. Antipov uses 3D imaging to precisely locate each tooth and its relationship to nerves and sinuses, ensuring the safest possible extraction.</p>
              <p style={{ color: "#555", fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>Most patients have all four wisdom teeth removed in a single visit under IV sedation, taking approximately 45 to 90 minutes. You will be comfortable and unaware during the procedure.</p>
              <p style={{ color: "#555", fontSize: 14, lineHeight: 1.8 }}><strong>Recovery:</strong> Plan for 3 to 5 days of rest. Swelling peaks on days 2-3 and resolves within a week. We provide prescription medications, detailed recovery instructions, and follow-up care. Most patients return to normal activities within a week.</p>
            </div>
          </div>
          <div className="gos-animate" style={{ marginTop: 40 }}>
            <h3 style={{ fontSize: 20, textAlign: "center", marginBottom: 16 }}>Sedation Options</h3>
            <div className="gos-sedation-options">
              <div className="gos-sedation-card">
                <h4>Local Anesthesia</h4>
                <p>Numbing of the surgical area while you remain fully awake.</p>
              </div>
              <div className="gos-sedation-card">
                <h4>Nitrous Oxide</h4>
                <p>Laughing gas for mild relaxation combined with local anesthesia.</p>
              </div>
              <div className="gos-sedation-card">
                <h4>IV Sedation</h4>
                <p>Deep relaxation with little to no memory of the procedure. Most popular choice.</p>
              </div>
              <div className="gos-sedation-card">
                <h4>General Anesthesia</h4>
                <p>Full unconsciousness for complex cases or patients with high anxiety.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PATIENT INFO */}
      <section id="patient-info">
        <div className="gos-section">
          <div className="gos-section-title gos-animate">
            <h2>Patient Information</h2>
            <div className="gos-gold-line" />
            <p>Everything you need to know to prepare for your visit to Galleria Oral Surgery.</p>
          </div>
          <div className="gos-info-grid gos-animate">
            <div className="gos-info-card">
              <h3>Your First Visit</h3>
              <p>Your initial consultation includes a comprehensive examination, 3D imaging as needed, a thorough review of your medical and dental history, and a detailed discussion of your diagnosis and treatment options. Please bring your insurance card, photo ID, referral (if applicable), and a list of current medications.</p>
            </div>
            <div className="gos-info-card">
              <h3>Insurance &amp; Payment</h3>
              <ul>
                <li>We accept most major dental and medical insurance</li>
                <li>Many oral surgery procedures qualify for medical insurance coverage</li>
                <li>We file claims on your behalf</li>
                <li>Complimentary benefits verification</li>
                <li>Visa, MasterCard, and American Express accepted</li>
                <li>Flexible payment plans available</li>
              </ul>
            </div>
            <div className="gos-info-card">
              <h3>Financing Options</h3>
              <p>We believe cost should never be a barrier to quality surgical care. We offer financing through CareCredit with low monthly payment plans, including interest-free options for qualified patients. Our team will discuss all financial options at your consultation.</p>
            </div>
            <div className="gos-info-card">
              <h3>Pre &amp; Post-Op Care</h3>
              <ul>
                <li>Nothing to eat or drink 8 hours before IV sedation</li>
                <li>Arrange a responsible driver for sedation appointments</li>
                <li>Wear loose, comfortable clothing</li>
                <li>Take prescribed medications as directed</li>
                <li>Rest and apply ice packs after surgery</li>
                <li>Follow soft diet instructions during recovery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* REFERRALS */}
      <section id="referrals" className="gos-section-alt">
        <div className="gos-section">
          <div className="gos-section-title gos-animate">
            <h2>Referring Doctors</h2>
            <div className="gos-gold-line" />
            <p>We value our partnership with referring dentists and are committed to providing exceptional surgical care for your patients.</p>
          </div>
          <div className="gos-referral-wrapper gos-animate">
            <div className="gos-referral-intro">
              <p>Thank you for trusting Galleria Oral Surgery with your patient referrals. Dr. Antipov will keep you informed throughout the treatment process with timely reports and open communication. Use the form below to refer a patient directly.</p>
            </div>
            {referralSubmitted ? (
              <div className="gos-form-success">
                <h3>Referral Received</h3>
                <p>Thank you for your referral. Our team will contact the patient to schedule their consultation. We will keep you updated on their care.</p>
              </div>
            ) : (
              <form onSubmit={handleReferralSubmit}>
                <div className="gos-form-grid">
                  <div className="gos-form-group">
                    <label>Doctor Name *</label>
                    <input type="text" value={referralForm.doctorName} onChange={(e) => setReferralForm({...referralForm, doctorName: e.target.value})} />
                    {referralErrors.doctorName && <div className="gos-form-error">{referralErrors.doctorName}</div>}
                  </div>
                  <div className="gos-form-group">
                    <label>Practice Name *</label>
                    <input type="text" value={referralForm.practiceName} onChange={(e) => setReferralForm({...referralForm, practiceName: e.target.value})} />
                    {referralErrors.practiceName && <div className="gos-form-error">{referralErrors.practiceName}</div>}
                  </div>
                  <div className="gos-form-group">
                    <label>Phone *</label>
                    <input type="tel" value={referralForm.doctorPhone} onChange={(e) => setReferralForm({...referralForm, doctorPhone: e.target.value})} />
                    {referralErrors.doctorPhone && <div className="gos-form-error">{referralErrors.doctorPhone}</div>}
                  </div>
                  <div className="gos-form-group">
                    <label>Email *</label>
                    <input type="email" value={referralForm.doctorEmail} onChange={(e) => setReferralForm({...referralForm, doctorEmail: e.target.value})} />
                    {referralErrors.doctorEmail && <div className="gos-form-error">{referralErrors.doctorEmail}</div>}
                  </div>
                  <div className="gos-form-group full" style={{ borderTop: "1px solid #ddd", paddingTop: 16, marginTop: 8 }}>
                    <h4 style={{ fontSize: 15, color: "#0B1D3A", marginBottom: 4 }}>Patient Information</h4>
                  </div>
                  <div className="gos-form-group">
                    <label>Patient Name *</label>
                    <input type="text" value={referralForm.patientName} onChange={(e) => setReferralForm({...referralForm, patientName: e.target.value})} />
                    {referralErrors.patientName && <div className="gos-form-error">{referralErrors.patientName}</div>}
                  </div>
                  <div className="gos-form-group">
                    <label>Patient Date of Birth</label>
                    <input type="date" value={referralForm.patientDob} onChange={(e) => setReferralForm({...referralForm, patientDob: e.target.value})} />
                  </div>
                  <div className="gos-form-group">
                    <label>Patient Phone *</label>
                    <input type="tel" value={referralForm.patientPhone} onChange={(e) => setReferralForm({...referralForm, patientPhone: e.target.value})} />
                    {referralErrors.patientPhone && <div className="gos-form-error">{referralErrors.patientPhone}</div>}
                  </div>
                  <div className="gos-form-group">
                    <label>Reason for Referral *</label>
                    <select value={referralForm.reason} onChange={(e) => setReferralForm({...referralForm, reason: e.target.value})}>
                      <option value="">Select reason</option>
                      <option value="wisdom-teeth">Wisdom Teeth Removal</option>
                      <option value="dental-implants">Dental Implant Placement</option>
                      <option value="extraction">Tooth Extraction</option>
                      <option value="bone-graft">Bone Grafting</option>
                      <option value="biopsy">Biopsy / Oral Pathology</option>
                      <option value="jaw-surgery">Corrective Jaw Surgery</option>
                      <option value="expose-bond">Expose &amp; Bond</option>
                      <option value="frenectomy">Frenectomy</option>
                      <option value="trauma">Facial Trauma</option>
                      <option value="tmj">TMJ Treatment</option>
                      <option value="all-on-4">All-on-4</option>
                      <option value="other">Other</option>
                    </select>
                    {referralErrors.reason && <div className="gos-form-error">{referralErrors.reason}</div>}
                  </div>
                  <div className="gos-form-group">
                    <label>Urgency *</label>
                    <select value={referralForm.urgency} onChange={(e) => setReferralForm({...referralForm, urgency: e.target.value})}>
                      <option value="">Select urgency</option>
                      <option value="routine">Routine</option>
                      <option value="soon">Soon (within 2 weeks)</option>
                      <option value="urgent">Urgent (within 48 hours)</option>
                      <option value="emergency">Emergency (same day)</option>
                    </select>
                    {referralErrors.urgency && <div className="gos-form-error">{referralErrors.urgency}</div>}
                  </div>
                  <div className="gos-form-group full">
                    <label>Additional Notes</label>
                    <textarea value={referralForm.notes} onChange={(e) => setReferralForm({...referralForm, notes: e.target.value})} placeholder="Include relevant clinical information, X-ray findings, or special considerations..." />
                  </div>
                  <div className="gos-form-group full">
                    <button type="submit" className="gos-form-submit">Submit Referral</button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact">
        <div className="gos-section">
          <div className="gos-section-title gos-animate">
            <h2>Request an Appointment</h2>
            <div className="gos-gold-line" />
            <p>Contact us to schedule your consultation with Dr. Antipov. We look forward to caring for you.</p>
          </div>
          <div className="gos-form gos-animate">
            {contactSubmitted ? (
              <div className="gos-form-success">
                <h3>Thank You!</h3>
                <p>Your message has been received. Our team will contact you within one business day to schedule your appointment.</p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit}>
                <div className="gos-form-grid">
                  <div className="gos-form-group">
                    <label>Full Name *</label>
                    <input type="text" value={contactForm.name} onChange={(e) => setContactForm({...contactForm, name: e.target.value})} />
                    {contactErrors.name && <div className="gos-form-error">{contactErrors.name}</div>}
                  </div>
                  <div className="gos-form-group">
                    <label>Phone Number *</label>
                    <input type="tel" value={contactForm.phone} onChange={(e) => setContactForm({...contactForm, phone: e.target.value})} />
                    {contactErrors.phone && <div className="gos-form-error">{contactErrors.phone}</div>}
                  </div>
                  <div className="gos-form-group">
                    <label>Email Address *</label>
                    <input type="email" value={contactForm.email} onChange={(e) => setContactForm({...contactForm, email: e.target.value})} />
                    {contactErrors.email && <div className="gos-form-error">{contactErrors.email}</div>}
                  </div>
                  <div className="gos-form-group">
                    <label>Service of Interest</label>
                    <select value={contactForm.service} onChange={(e) => setContactForm({...contactForm, service: e.target.value})}>
                      <option value="">Select a service</option>
                      <option value="dental-implants">Dental Implants</option>
                      <option value="wisdom-teeth">Wisdom Teeth Removal</option>
                      <option value="all-on-4">All-on-4 Full Arch</option>
                      <option value="extraction">Tooth Extraction</option>
                      <option value="bone-graft">Bone Grafting</option>
                      <option value="jaw-surgery">Corrective Jaw Surgery</option>
                      <option value="biopsy">Oral Pathology / Biopsy</option>
                      <option value="tmj">TMJ Treatment</option>
                      <option value="trauma">Facial Trauma</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="gos-form-group full">
                    <label>Message</label>
                    <textarea value={contactForm.message} onChange={(e) => setContactForm({...contactForm, message: e.target.value})} placeholder="Tell us about your needs or any questions you may have..." />
                  </div>
                  <div className="gos-form-group full">
                    <button type="submit" className="gos-form-submit">Send Message</button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="gos-section-alt">
        <div className="gos-section">
          <div className="gos-section-title gos-animate">
            <h2>Patient Testimonials</h2>
            <div className="gos-gold-line" />
            <p>Hear from patients who have experienced exceptional surgical care at Galleria Oral Surgery.</p>
          </div>
          <div className="gos-testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="gos-testimonial gos-animate">
                <p>{t.text}</p>
                <div className="gos-testimonial-author">{t.name}</div>
                <div className="gos-testimonial-stars">{"★".repeat(t.rating)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="gos-section">
          <div className="gos-section-title gos-animate">
            <h2>Frequently Asked Questions</h2>
            <div className="gos-gold-line" />
            <p>Answers to common questions about oral surgery procedures, recovery, and our practice.</p>
          </div>
          <div className="gos-faq-list">
            {faqs.map((f, i) => (
              <div key={i} className="gos-faq-item gos-animate">
                <button className="gos-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {f.q}
                  <span style={{ transform: openFaq === i ? "rotate(45deg)" : "none" }}>+</span>
                </button>
                {openFaq === i && <div className="gos-faq-a">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="location" className="gos-section-alt">
        <div className="gos-section">
          <div className="gos-section-title gos-animate">
            <h2>Our Location</h2>
            <div className="gos-gold-line" />
            <p>Conveniently located in Roseville, California, serving patients throughout the greater Sacramento region.</p>
          </div>
          <div className="gos-location-grid gos-animate">
            <div className="gos-location-info">
              <h3>Galleria Oral Surgery</h3>
              <div className="gos-location-detail">
                <div>
                  <strong>Address</strong><br />
                  911 Reserve Drive, Suite 150<br />
                  Roseville, CA 95678
                </div>
              </div>
              <div className="gos-location-detail">
                <div>
                  <strong>Phone</strong><br />
                  <a href="tel:9167832110" style={{ color: "#C9A96E", textDecoration: "none" }}>(916) 783-2110</a>
                </div>
              </div>
              <div className="gos-location-detail">
                <div>
                  <strong>Email</strong><br />
                  <a href="mailto:info@galleriaoms.com" style={{ color: "#C9A96E", textDecoration: "none" }}>info@galleriaoms.com</a>
                </div>
              </div>
              <h4 style={{ fontSize: 16, marginTop: 24, marginBottom: 8 }}>Office Hours</h4>
              <table className="gos-hours-table">
                <tbody>
                  <tr><td>Monday</td><td>8:00 AM - 5:00 PM</td></tr>
                  <tr><td>Tuesday</td><td>8:00 AM - 5:00 PM</td></tr>
                  <tr><td>Wednesday</td><td>8:00 AM - 5:00 PM</td></tr>
                  <tr><td>Thursday</td><td>8:00 AM - 5:00 PM</td></tr>
                  <tr><td>Friday</td><td>8:00 AM - 2:00 PM</td></tr>
                  <tr><td>Saturday</td><td>Closed</td></tr>
                  <tr><td>Sunday</td><td>Closed</td></tr>
                </tbody>
              </table>
              <div className="gos-cities-served">
                <h4>Communities We Serve</h4>
                <div className="gos-cities-list">
                  {["Roseville", "Rocklin", "Lincoln", "Granite Bay", "Citrus Heights", "Folsom", "Sacramento", "Auburn", "Loomis", "El Dorado Hills", "Carmichael", "Fair Oaks", "Orangevale"].map((c, i) => (
                    <span key={i} className="gos-city-tag">{c}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="gos-map-placeholder">
              <div>
                <div style={{ fontSize: 48, marginBottom: 16 }}>&#128205;</div>
                <h3 style={{ color: "#fff", marginBottom: 8, fontSize: 20 }}>Galleria Oral Surgery</h3>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>911 Reserve Drive, Suite 150<br />Roseville, CA 95678</p>
                <a href="https://maps.google.com/?q=911+Reserve+Drive+Suite+150+Roseville+CA+95678" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", marginTop: 16, background: "#C9A96E", color: "#0B1D3A", padding: "10px 24px", borderRadius: 4, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>Get Directions</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="gos-footer">
        <div className="gos-footer-inner">
          <div>
            <h4 style={{ color: "#C9A96E", fontFamily: "'Playfair Display', serif", fontSize: 18, letterSpacing: 1, marginBottom: 16 }}>Galleria Oral Surgery</h4>
            <p style={{ marginBottom: 8 }}>Dr. Alexander Antipov, DDS</p>
            <p style={{ marginBottom: 8 }}>Oral &amp; Maxillofacial Surgery</p>
            <p style={{ marginBottom: 8 }}>911 Reserve Drive, Suite 150</p>
            <p style={{ marginBottom: 8 }}>Roseville, CA 95678</p>
            <p style={{ marginBottom: 8 }}>(916) 783-2110</p>
            <p>info@galleriaoms.com</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><a onClick={() => scrollTo("home")} style={{ cursor: "pointer" }}>Home</a></li>
              <li><a onClick={() => scrollTo("about")} style={{ cursor: "pointer" }}>About Dr. Antipov</a></li>
              <li><a onClick={() => scrollTo("services")} style={{ cursor: "pointer" }}>Services</a></li>
              <li><a onClick={() => scrollTo("patient-info")} style={{ cursor: "pointer" }}>Patient Info</a></li>
              <li><a onClick={() => scrollTo("referrals")} style={{ cursor: "pointer" }}>Referrals</a></li>
              <li><a onClick={() => scrollTo("contact")} style={{ cursor: "pointer" }}>Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li><a onClick={() => scrollTo("implants")} style={{ cursor: "pointer" }}>Dental Implants</a></li>
              <li><a onClick={() => scrollTo("wisdom-teeth")} style={{ cursor: "pointer" }}>Wisdom Teeth</a></li>
              <li><a onClick={() => scrollTo("all-on-4")} style={{ cursor: "pointer" }}>All-on-4</a></li>
              <li><a onClick={() => scrollTo("services")} style={{ cursor: "pointer" }}>Bone Grafting</a></li>
              <li><a onClick={() => scrollTo("services")} style={{ cursor: "pointer" }}>Jaw Surgery</a></li>
              <li><a onClick={() => scrollTo("services")} style={{ cursor: "pointer" }}>IV Sedation</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:9167832110">(916) 783-2110</a></li>
              <li><a href="mailto:info@galleriaoms.com">Email Us</a></li>
              <li><a onClick={() => scrollTo("location")} style={{ cursor: "pointer" }}>Directions</a></li>
              <li><a onClick={() => scrollTo("referrals")} style={{ cursor: "pointer" }}>Send Referral</a></li>
            </ul>
            <div style={{ marginTop: 20 }}>
              <h4>Hours</h4>
              <p>Mon-Thu: 8am-5pm</p>
              <p>Fri: 8am-2pm</p>
            </div>
          </div>
        </div>
        <div className="gos-footer-bottom">
          <p>&copy; 2026 Galleria Oral Surgery. All rights reserved.</p>
          <p>Powered by <strong style={{ color: "#C9A96E" }}>Fusion Dental Implants</strong></p>
        </div>
        <div className="gos-footer-disclaimer">
          Disclaimer: This website is for informational purposes only and does not constitute medical advice. The information provided is not intended to replace a consultation with a qualified oral and maxillofacial surgeon. Individual results may vary. Please contact our office to discuss your specific treatment needs.
        </div>
      </footer>
    </>
  );
}
