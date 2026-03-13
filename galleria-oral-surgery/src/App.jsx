import { useState, useEffect, useRef, useCallback } from "react";
import { PRACTICE, CITIES_SERVED, SERVICES, TESTIMONIALS, FAQS, REFERRAL_REASONS, SYMPTOM_CATEGORIES, SYMPTOM_RECOMMENDATIONS, IMPLANT_PRICING, KNOWLEDGE_BASE, STYLES } from "./data.js";

/* ─── Utility: useIntersectionObserver ─── */
function useIntersectionObserver(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1, ...options }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

/* ─── 2. Nav ─── */
function Nav({ scrolled, mobileMenuOpen, setMobileMenuOpen, setActiveSection, setShowCalculator, setShowKnowledgeBase }) {
  const links = [
    { label: "About", target: "about" },
    { label: "Services", target: "services" },
    { label: "AI Tools", target: "symptom-checker" },
    { label: "Implants", target: "dental-implants" },
    { label: "Cost Calculator", target: "cost-calculators" },
    { label: "Knowledge Base", target: "knowledge-base" },
    { label: "Referrals", target: "referral-form" },
    { label: "Contact", target: "contact" },
  ];

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`nav-fixed ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-inner">
        <div className="nav-brand" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span className="nav-logo">GALLERIA ORAL SURGERY</span>
          <span className="nav-subtitle">Oral &amp; Maxillofacial Surgery</span>
        </div>
        <div className={`nav-links ${mobileMenuOpen ? "nav-links-open" : ""}`}>
          {links.map((l) => (
            <a key={l.target} className="nav-link" onClick={() => scrollTo(l.target)}>
              {l.label}
            </a>
          ))}
          <a href="tel:9167832110" className="nav-cta-btn">(916) 783-2110</a>
        </div>
        <button className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          <span className={`hamburger-line ${mobileMenuOpen ? "open" : ""}`}></span>
          <span className={`hamburger-line ${mobileMenuOpen ? "open" : ""}`}></span>
          <span className={`hamburger-line ${mobileMenuOpen ? "open" : ""}`}></span>
        </button>
      </div>
    </nav>
  );
}

/* ─── 3. Hero ─── */
function Hero({ setActiveSection }) {
  const [ref, isVisible] = useIntersectionObserver();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section" id="hero" ref={ref}>
      <div className={`hero-content ${isVisible ? "fade-in-up" : "fade-hidden"}`}>
        <span className="hero-badge">Board-Eligible Oral &amp; Maxillofacial Surgeon</span>
        <h1 className="hero-title">
          Advanced Oral Surgery, <em>Powered by Intelligence</em>
        </h1>
        <p className="hero-subtitle">
          Experience the future of oral surgery with AI-powered diagnostic tools, evidence-based treatment planning, and compassionate care — all in one advanced practice in Roseville, CA.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => scrollTo("symptom-checker")}>AI Symptom Check</button>
          <button className="btn-secondary" onClick={() => scrollTo("cost-calculators")}>Calculate Costs</button>
          <button className="btn-outline" onClick={() => scrollTo("contact")}>Schedule Consultation</button>
        </div>
        <div className="trust-badges">
          <div className="trust-badge">
            <span className="trust-icon">🏥</span>
            <span>AAOMS Member</span>
          </div>
          <div className="trust-badge">
            <span className="trust-icon">📐</span>
            <span>3D-Guided Surgery</span>
          </div>
          <div className="trust-badge">
            <span className="trust-icon">💉</span>
            <span>IV Sedation Certified</span>
          </div>
          <div className="trust-badge">
            <span className="trust-icon">⚡</span>
            <span>Same-Day Implants</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 4. About ─── */
function About() {
  const [ref, isVisible] = useIntersectionObserver();
  return (
    <section className="section about-section" id="about" ref={ref}>
      <div className={`section-inner ${isVisible ? "fade-in-up" : "fade-hidden"}`}>
        <h2 className="section-title">Meet Dr. Antipov</h2>
        <p className="section-subtitle">Your Trusted Oral &amp; Maxillofacial Surgeon</p>
        <div className="about-grid">
          <div className="about-image-wrap">
            <div className="about-image-placeholder">
              <span style={{ fontSize: "4rem" }}>👨‍⚕️</span>
              <p>Dr. Antipov</p>
            </div>
          </div>
          <div className="about-text">
            <p>
              Dr. Antipov is a board-eligible oral and maxillofacial surgeon dedicated to providing the highest standard of surgical care. With extensive training in dental implants, wisdom teeth removal, corrective jaw surgery, and facial trauma reconstruction, Dr. Antipov combines surgical precision with a compassionate approach.
            </p>
            <p>
              After completing a rigorous residency program, Dr. Antipov established Galleria Oral Surgery in Roseville, CA to bring advanced surgical techniques — including 3D-guided implant placement and IV sedation — to the greater Sacramento area.
            </p>
            <div className="about-credentials">
              <div className="credential-item">
                <strong>Education</strong>
                <span>DMD / MD — Oral &amp; Maxillofacial Surgery Residency</span>
              </div>
              <div className="credential-item">
                <strong>Certifications</strong>
                <span>Board-Eligible, AAOMS Fellow, BLS/ACLS/PALS Certified</span>
              </div>
              <div className="credential-item">
                <strong>Specialties</strong>
                <span>Dental Implants, Wisdom Teeth, Jaw Surgery, Bone Grafting</span>
              </div>
              <div className="credential-item">
                <strong>Approach</strong>
                <span>Evidence-based care enhanced by the latest technology</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 5. AISymptomChecker ─── */
function AISymptomChecker() {
  const [ref, isVisible] = useIntersectionObserver();
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [answers, setAnswers] = useState({});
  const [severity, setSeverity] = useState(5);

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    setAnswers({});
    setStep(2);
  };

  const handleAnswerChange = (qIndex, value) => {
    setAnswers((prev) => ({ ...prev, [qIndex]: value }));
  };

  const getResults = () => {
    if (!selectedCategory) return null;
    const sevLevel = severity >= 8 ? "Emergency" : severity >= 5 ? "Urgent" : "Routine";
    const rec = SYMPTOM_RECOMMENDATIONS?.[selectedCategory.id] || {
      condition: selectedCategory.name + " related condition",
      procedures: ["Consultation & Evaluation"],
      description: "Based on your symptoms, we recommend a professional evaluation to determine the best course of treatment.",
    };
    return { ...rec, urgency: sevLevel };
  };

  const reset = () => {
    setStep(1);
    setSelectedCategory(null);
    setAnswers({});
    setSeverity(5);
  };

  const results = step === 4 ? getResults() : null;

  return (
    <section className="section symptom-section" id="symptom-checker" ref={ref}>
      <div className={`section-inner ${isVisible ? "fade-in-up" : "fade-hidden"}`}>
        <h2 className="section-title">AI Symptom Checker</h2>
        <p className="section-subtitle">Answer a few questions to get a preliminary assessment of your oral health concern</p>

        <div className="symptom-progress">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${(step / 4) * 100}%` }}></div>
          </div>
          <div className="progress-steps">
            {["Category", "Details", "Severity", "Results"].map((label, i) => (
              <span key={i} className={`progress-step ${step >= i + 1 ? "active" : ""}`}>{label}</span>
            ))}
          </div>
        </div>

        <div className="symptom-wizard">
          {step === 1 && (
            <div className="symptom-step">
              <h3>What area is bothering you?</h3>
              <div className="symptom-grid">
                {SYMPTOM_CATEGORIES.map((cat) => (
                  <div key={cat.id} className="symptom-card" onClick={() => handleCategorySelect(cat)}>
                    <span className="symptom-card-icon">{cat.icon}</span>
                    <span className="symptom-card-label">{cat.name}</span>
                    {cat.description && <span className="symptom-card-desc">{cat.description}</span>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 2 && selectedCategory && (
            <div className="symptom-step">
              <h3>Tell us more about your {selectedCategory.name.toLowerCase()} symptoms</h3>
              <div className="followup-questions">
                {(selectedCategory.followUps || []).map((q, qIndex) => (
                  <div key={qIndex} className="followup-question">
                    <label className="followup-label">{q.question}</label>
                    {q.type === "select" && (
                      <select
                        className="form-input"
                        value={answers[qIndex] || ""}
                        onChange={(e) => handleAnswerChange(qIndex, e.target.value)}
                      >
                        <option value="">Select...</option>
                        {q.options.map((opt, oi) => (
                          <option key={oi} value={opt}>{opt}</option>
                        ))}
                      </select>
                    )}
                    {q.type === "radio" && (
                      <div className="radio-group">
                        {q.options.map((opt, oi) => (
                          <label key={oi} className="radio-label">
                            <input
                              type="radio"
                              name={`q-${qIndex}`}
                              value={opt}
                              checked={answers[qIndex] === opt}
                              onChange={() => handleAnswerChange(qIndex, opt)}
                            />
                            <span>{opt}</span>
                          </label>
                        ))}
                      </div>
                    )}
                    {q.type === "checkbox" && (
                      <div className="checkbox-group">
                        {q.options.map((opt, oi) => (
                          <label key={oi} className="checkbox-label">
                            <input
                              type="checkbox"
                              checked={(answers[qIndex] || []).includes(opt)}
                              onChange={(e) => {
                                const prev = answers[qIndex] || [];
                                handleAnswerChange(
                                  qIndex,
                                  e.target.checked ? [...prev, opt] : prev.filter((x) => x !== opt)
                                );
                              }}
                            />
                            <span>{opt}</span>
                          </label>
                        ))}
                      </div>
                    )}
                    {(!q.type || q.type === "text") && (
                      <input
                        className="form-input"
                        type="text"
                        value={answers[qIndex] || ""}
                        onChange={(e) => handleAnswerChange(qIndex, e.target.value)}
                        placeholder="Type your answer..."
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="wizard-nav">
                <button className="btn-secondary" onClick={() => setStep(1)}>Back</button>
                <button className="btn-primary" onClick={() => setStep(3)}>Next</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="symptom-step">
              <h3>How severe is your discomfort?</h3>
              <div className="severity-slider-wrap">
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={severity}
                  onChange={(e) => setSeverity(Number(e.target.value))}
                  className="severity-slider"
                />
                <div className="severity-labels">
                  <span>1 - Mild</span>
                  <span className="severity-value">{severity}/10</span>
                  <span>10 - Severe</span>
                </div>
                <div className="severity-description">
                  {severity <= 3 && <p>Mild discomfort — may be manageable but worth evaluating.</p>}
                  {severity > 3 && severity <= 6 && <p>Moderate discomfort — you should schedule an appointment soon.</p>}
                  {severity > 6 && severity <= 8 && <p>Significant pain — we recommend being seen within a few days.</p>}
                  {severity > 8 && <p>Severe pain — please call us immediately or visit the emergency room.</p>}
                </div>
              </div>
              <div className="wizard-nav">
                <button className="btn-secondary" onClick={() => setStep(2)}>Back</button>
                <button className="btn-primary" onClick={() => setStep(4)}>See Results</button>
              </div>
            </div>
          )}

          {step === 4 && results && (
            <div className="symptom-step">
              <h3>Your Assessment</h3>
              <div className="results-card">
                <span className={`urgency-badge urgency-${results.urgency.toLowerCase()}`}>
                  {results.urgency}
                </span>
                <h4 className="results-condition">{results.condition}</h4>
                <p className="results-description">{results.description}</p>
                <div className="results-procedures">
                  <strong>Recommended Procedure(s):</strong>
                  <ul>
                    {results.procedures.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
                <div className="results-disclaimer">
                  <strong>⚠ Disclaimer:</strong> This is not a diagnosis. This AI-powered tool provides general guidance only. Please schedule a consultation for a proper evaluation and treatment plan.
                </div>
                <div className="results-actions">
                  <button className="btn-primary" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                    Schedule Consultation
                  </button>
                  {results.urgency === "Emergency" && (
                    <a href="tel:9167832110" className="btn-emergency">Call Now: (916) 783-2110</a>
                  )}
                  <a href={`https://wa.me/19167832110?text=${encodeURIComponent("Hi, I just used the AI Symptom Checker and would like to schedule a consultation.")}`} className="btn-whatsapp" target="_blank" rel="noopener noreferrer">
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
              <button className="btn-secondary" onClick={reset} style={{ marginTop: "1rem" }}>Start Over</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─── 6. Services ─── */
function ServicesSection() {
  const [ref, isVisible] = useIntersectionObserver();
  return (
    <section className="section services-section" id="services" ref={ref}>
      <div className={`section-inner ${isVisible ? "fade-in-up" : "fade-hidden"}`}>
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">Comprehensive oral &amp; maxillofacial surgery services</p>
        <div className="services-grid">
          {SERVICES.map((svc, i) => (
            <div key={i} className="service-card">
              <span className="service-icon">{svc.icon}</span>
              <h3 className="service-name">{svc.name}</h3>
              <p className="service-desc">{svc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 7. DentalImplants ─── */
function DentalImplants() {
  const [ref, isVisible] = useIntersectionObserver();
  const implantTypes = [
    { name: "Single Tooth Implant", desc: "Replaces one missing tooth with a titanium post and custom crown.", icon: "🦷" },
    { name: "Implant Bridge", desc: "Two implants support a bridge to replace 3-4 adjacent missing teeth.", icon: "🌉" },
    { name: "All-on-4 / All-on-6", desc: "Full arch restoration using 4-6 strategically placed implants.", icon: "✨" },
    { name: "Mini Implants", desc: "Smaller diameter implants ideal for denture stabilization.", icon: "📌" },
  ];
  const processSteps = [
    { step: "1", title: "Consultation & 3D Scan", desc: "Comprehensive exam with CBCT imaging to plan your treatment." },
    { step: "2", title: "Implant Placement", desc: "Titanium implant post is surgically placed into the jawbone." },
    { step: "3", title: "Healing & Integration", desc: "3-6 months for the implant to fuse with your bone (osseointegration)." },
    { step: "4", title: "Crown Placement", desc: "Custom-made crown is attached to the implant for a natural look." },
  ];
  const benefits = [
    "Look and feel like natural teeth",
    "Prevent bone loss in the jaw",
    "No damage to adjacent teeth",
    "99% success rate with proper care",
    "Eat your favorite foods again",
    "Last a lifetime with proper maintenance",
  ];

  return (
    <section className="section implants-section" id="dental-implants" ref={ref}>
      <div className={`section-inner ${isVisible ? "fade-in-up" : "fade-hidden"}`}>
        <h2 className="section-title">Dental Implants</h2>
        <p className="section-subtitle">The gold standard in tooth replacement — permanent, natural-looking results</p>

        <h3 className="sub-heading">Types of Dental Implants</h3>
        <div className="implant-types-grid">
          {implantTypes.map((t, i) => (
            <div key={i} className="implant-type-card">
              <span className="implant-type-icon">{t.icon}</span>
              <h4>{t.name}</h4>
              <p>{t.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="sub-heading">The Implant Process</h3>
        <div className="process-steps">
          {processSteps.map((s, i) => (
            <div key={i} className="process-step-card">
              <div className="step-number">{s.step}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="sub-heading">Benefits</h3>
        <div className="benefits-grid">
          {benefits.map((b, i) => (
            <div key={i} className="benefit-item">
              <span className="benefit-check">✓</span>
              <span>{b}</span>
            </div>
          ))}
        </div>

        <div className="candidacy-box">
          <h3>Am I a Candidate?</h3>
          <p>Most adults with missing teeth are candidates for dental implants. Ideal candidates have adequate jawbone density, healthy gums, and good overall health. Even if you have experienced bone loss, bone grafting procedures can often make implants possible. The best way to find out is with a comprehensive consultation including 3D imaging.</p>
          <button className="btn-primary" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            Schedule Your Implant Consultation
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─── 8. AllOnFour ─── */
function AllOnFour() {
  const [ref, isVisible] = useIntersectionObserver();
  const benefits = [
    { title: "Same-Day Teeth", desc: "Walk in with missing teeth, walk out with a full smile — often in a single visit.", icon: "⚡" },
    { title: "No Bone Grafting", desc: "Angled implants utilize existing bone, often eliminating the need for grafting.", icon: "🦴" },
    { title: "Cost-Effective", desc: "Fewer implants and procedures mean lower overall cost than individual implants.", icon: "💰" },
    { title: "Natural Appearance", desc: "Custom-designed prosthetics that look and function like natural teeth.", icon: "😁" },
  ];
  const comparisonRows = [
    { feature: "Number of Implants", allon4: "4-6 per arch", dentures: "0", individual: "6-8+ per arch" },
    { feature: "Bone Preservation", allon4: "Excellent", dentures: "Poor — accelerates loss", individual: "Excellent" },
    { feature: "Stability", allon4: "Fixed — no movement", dentures: "Can slip and move", individual: "Fixed — no movement" },
    { feature: "Eating Ability", allon4: "Eat anything", dentures: "Limited — soft foods", individual: "Eat anything" },
    { feature: "Taste", allon4: "Full taste — no palate coverage", dentures: "Reduced — palate covered", individual: "Full taste" },
    { feature: "Maintenance", allon4: "Brush & floss normally", dentures: "Remove & soak nightly", individual: "Brush & floss normally" },
    { feature: "Treatment Time", allon4: "Same-day possible", dentures: "Weeks for fitting", individual: "6-12+ months" },
    { feature: "Cost (per arch)", allon4: "$20,000-$35,000", dentures: "$1,000-$3,000", individual: "$30,000-$60,000+" },
    { feature: "Longevity", allon4: "20+ years", dentures: "5-8 years", individual: "Lifetime" },
  ];

  return (
    <section className="section allon4-section" id="all-on-four" ref={ref}>
      <div className={`section-inner ${isVisible ? "fade-in-up" : "fade-hidden"}`}>
        <h2 className="section-title">All-on-4 Full Mouth Restoration</h2>
        <p className="section-subtitle">A full set of permanent teeth in as little as one day</p>

        <div className="benefits-cards">
          {benefits.map((b, i) => (
            <div key={i} className="benefit-card">
              <span className="benefit-card-icon">{b.icon}</span>
              <h4>{b.title}</h4>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="sub-heading">How Does All-on-4 Compare?</h3>
        <div className="comparison-table-wrap">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th className="highlight-col">All-on-4</th>
                <th>Traditional Dentures</th>
                <th>Individual Implants</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr key={i}>
                  <td><strong>{row.feature}</strong></td>
                  <td className="highlight-col">{row.allon4}</td>
                  <td>{row.dentures}</td>
                  <td>{row.individual}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ─── 9. WisdomTeeth ─── */
function WisdomTeeth() {
  const [ref, isVisible] = useIntersectionObserver();
  const signs = [
    "Pain or tenderness in the back of your mouth",
    "Red, swollen, or bleeding gums around the back teeth",
    "Jaw pain or stiffness",
    "Difficulty opening your mouth fully",
    "Bad breath or unpleasant taste near the back teeth",
    "Recurring infections in the gum tissue",
  ];
  const sedationOptions = [
    { name: "Local Anesthesia", desc: "Numbing of the surgical area only. You remain fully awake.", level: "Basic", icon: "💉" },
    { name: "Nitrous Oxide", desc: "Laughing gas for mild relaxation. Quick recovery.", level: "Mild", icon: "😌" },
    { name: "IV Sedation", desc: "Twilight sedation — you'll be relaxed and likely won't remember the procedure.", level: "Moderate", icon: "💤" },
    { name: "General Anesthesia", desc: "Full unconscious sedation for complex cases or high anxiety.", level: "Deep", icon: "🏥" },
  ];
  const timeline = [
    { day: "Day 1-2", title: "Initial Recovery", details: "Rest, ice packs, soft foods. Some swelling and mild bleeding is normal." },
    { day: "Day 3-4", title: "Peak Swelling", details: "Swelling peaks then begins to decrease. Continue soft foods and medication." },
    { day: "Day 5-7", title: "Improvement", details: "Noticeable improvement. Can gradually return to normal activities." },
    { day: "Week 2", title: "Follow-Up", details: "Post-op appointment. Most patients are fully recovered." },
  ];

  return (
    <section className="section wisdom-section" id="wisdom-teeth" ref={ref}>
      <div className={`section-inner ${isVisible ? "fade-in-up" : "fade-hidden"}`}>
        <h2 className="section-title">Wisdom Teeth Removal</h2>
        <p className="section-subtitle">Safe, comfortable extraction with multiple sedation options</p>

        <h3 className="sub-heading">Signs of Impaction</h3>
        <div className="signs-grid">
          {signs.map((s, i) => (
            <div key={i} className="sign-item">
              <span className="sign-icon">⚠</span>
              <span>{s}</span>
            </div>
          ))}
        </div>

        <h3 className="sub-heading">Sedation Options</h3>
        <div className="sedation-grid">
          {sedationOptions.map((s, i) => (
            <div key={i} className="sedation-card">
              <span className="sedation-icon">{s.icon}</span>
              <h4>{s.name}</h4>
              <span className="sedation-level">{s.level}</span>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="sub-heading">Recovery Timeline</h3>
        <div className="timeline">
          {timeline.map((t, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-marker">{t.day}</div>
              <div className="timeline-content">
                <h4>{t.title}</h4>
                <p>{t.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 10. CostCalculators ─── */
function CostCalculators() {
  const [ref, isVisible] = useIntersectionObserver();
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Dental Implants", "All-on-4 / Full Mouth", "Wisdom Teeth", "Financing"];

  return (
    <section className="section calculators-section" id="cost-calculators" ref={ref}>
      <div className={`section-inner ${isVisible ? "fade-in-up" : "fade-hidden"}`}>
        <h2 className="section-title">Cost Calculators</h2>
        <p className="section-subtitle">Get an estimate for your treatment — instant, transparent pricing</p>

        <div className="calc-tabs">
          {tabs.map((tab, i) => (
            <button key={i} className={`calc-tab ${activeTab === i ? "active" : ""}`} onClick={() => setActiveTab(i)}>
              {tab}
            </button>
          ))}
        </div>

        <div className="calc-content">
          {activeTab === 0 && <ImplantCalculator />}
          {activeTab === 1 && <AllOnFourCalculator />}
          {activeTab === 2 && <WisdomTeethCalculator />}
          {activeTab === 3 && <FinancingCalculator />}
        </div>
      </div>
    </section>
  );
}

function ImplantCalculator() {
  const [step, setStep] = useState(1);
  const [teethCount, setTeethCount] = useState(null);
  const [location, setLocation] = useState(null);
  const [boneCondition, setBoneCondition] = useState(null);
  const [additionalNeeds, setAdditionalNeeds] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const teethOptions = [
    { label: "1 Tooth", value: "single", icon: "1️⃣" },
    { label: "2-3 Teeth", value: "multiple", icon: "2️⃣" },
    { label: "4-6 Teeth", value: "several", icon: "🔢" },
    { label: "Full Arch", value: "full", icon: "🦷" },
  ];
  const locationOptions = [
    { label: "Upper Jaw", value: "upper" },
    { label: "Lower Jaw", value: "lower" },
    { label: "Both", value: "both" },
  ];
  const boneOptions = [
    { label: "Good", value: "good", desc: "Adequate bone density" },
    { label: "Moderate Loss", value: "moderate", desc: "Some bone grafting may be needed" },
    { label: "Significant Loss", value: "significant", desc: "Bone grafting likely required" },
  ];
  const addOns = [
    { label: "Bone Grafting", value: "bone_grafting" },
    { label: "Sinus Lift", value: "sinus_lift" },
    { label: "Tooth Extractions", value: "extractions" },
    { label: "IV Sedation", value: "iv_sedation" },
  ];

  const toggleAddOn = (val) => {
    setAdditionalNeeds((prev) =>
      prev.includes(val) ? prev.filter((x) => x !== val) : [...prev, val]
    );
  };

  const calculateCosts = () => {
    const pricing = IMPLANT_PRICING || {};
    const implantBase = pricing.singleImplant || { low: 3000, high: 5000 };
    const crownCost = pricing.crown || { low: 1200, high: 2000 };
    const boneGraft = pricing.boneGraft || { low: 500, high: 3000 };
    const sinusLift = pricing.sinusLift || { low: 1500, high: 3500 };
    const extraction = pricing.extraction || { low: 200, high: 600 };
    const sedation = pricing.ivSedation || { low: 300, high: 800 };

    let multiplier = 1;
    if (teethCount === "multiple") multiplier = 2.5;
    else if (teethCount === "several") multiplier = 5;
    else if (teethCount === "full") multiplier = 6;

    const locationMult = location === "both" ? 2 : 1;

    let items = [];
    items.push({
      name: `Dental Implant(s)`,
      low: Math.round(implantBase.low * multiplier * locationMult),
      high: Math.round(implantBase.high * multiplier * locationMult),
    });
    items.push({
      name: `Crown / Prosthetic`,
      low: Math.round(crownCost.low * multiplier * locationMult),
      high: Math.round(crownCost.high * multiplier * locationMult),
    });

    if (additionalNeeds.includes("bone_grafting") || boneCondition === "moderate" || boneCondition === "significant") {
      const bMult = boneCondition === "significant" ? 2 : 1;
      items.push({
        name: "Bone Grafting",
        low: Math.round(boneGraft.low * bMult * locationMult),
        high: Math.round(boneGraft.high * bMult * locationMult),
      });
    }
    if (additionalNeeds.includes("sinus_lift")) {
      items.push({ name: "Sinus Lift", low: sinusLift.low, high: sinusLift.high });
    }
    if (additionalNeeds.includes("extractions")) {
      items.push({
        name: "Tooth Extractions",
        low: Math.round(extraction.low * multiplier),
        high: Math.round(extraction.high * multiplier),
      });
    }
    if (additionalNeeds.includes("iv_sedation")) {
      items.push({ name: "IV Sedation", low: sedation.low, high: sedation.high });
    }

    const totalLow = items.reduce((s, x) => s + x.low, 0);
    const totalHigh = items.reduce((s, x) => s + x.high, 0);

    return { items, totalLow, totalHigh };
  };

  const costs = showResults ? calculateCosts() : null;

  return (
    <div className="calculator">
      {!showResults ? (
        <>
          <div className="calc-step-indicator">Step {step} of 4</div>

          {step === 1 && (
            <div className="calc-step">
              <h3>How many teeth need replacement?</h3>
              <div className="visual-selector">
                {teethOptions.map((opt) => (
                  <div
                    key={opt.value}
                    className={`visual-option ${teethCount === opt.value ? "selected" : ""}`}
                    onClick={() => setTeethCount(opt.value)}
                  >
                    <span className="visual-option-icon">{opt.icon}</span>
                    <span>{opt.label}</span>
                  </div>
                ))}
              </div>
              <div className="wizard-nav">
                <span></span>
                <button className="btn-primary" disabled={!teethCount} onClick={() => setStep(2)}>Next</button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="calc-step">
              <h3>Where are the missing teeth?</h3>
              <div className="visual-selector">
                {locationOptions.map((opt) => (
                  <div
                    key={opt.value}
                    className={`visual-option ${location === opt.value ? "selected" : ""}`}
                    onClick={() => setLocation(opt.value)}
                  >
                    <span>{opt.label}</span>
                  </div>
                ))}
              </div>
              <div className="wizard-nav">
                <button className="btn-secondary" onClick={() => setStep(1)}>Back</button>
                <button className="btn-primary" disabled={!location} onClick={() => setStep(3)}>Next</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="calc-step">
              <h3>What is your bone condition?</h3>
              <div className="visual-selector">
                {boneOptions.map((opt) => (
                  <div
                    key={opt.value}
                    className={`visual-option ${boneCondition === opt.value ? "selected" : ""}`}
                    onClick={() => setBoneCondition(opt.value)}
                  >
                    <strong>{opt.label}</strong>
                    <span className="option-desc">{opt.desc}</span>
                  </div>
                ))}
              </div>
              <div className="wizard-nav">
                <button className="btn-secondary" onClick={() => setStep(2)}>Back</button>
                <button className="btn-primary" disabled={!boneCondition} onClick={() => setStep(4)}>Next</button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="calc-step">
              <h3>Any additional procedures needed?</h3>
              <div className="addon-checkboxes">
                {addOns.map((a) => (
                  <label key={a.value} className="addon-checkbox">
                    <input
                      type="checkbox"
                      checked={additionalNeeds.includes(a.value)}
                      onChange={() => toggleAddOn(a.value)}
                    />
                    <span>{a.label}</span>
                  </label>
                ))}
              </div>
              <div className="wizard-nav">
                <button className="btn-secondary" onClick={() => setStep(3)}>Back</button>
                <button className="btn-primary" onClick={() => setShowResults(true)}>Calculate</button>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="calc-results">
          <h3>Your Estimated Cost</h3>
          <div className="cost-breakdown">
            {costs.items.map((item, i) => (
              <div key={i} className="cost-line">
                <span className="cost-label">{item.name}</span>
                <span className="cost-value">${item.low.toLocaleString()} — ${item.high.toLocaleString()}</span>
              </div>
            ))}
            <div className="cost-line cost-total">
              <span className="cost-label">Estimated Total</span>
              <span className="cost-value">${costs.totalLow.toLocaleString()} — ${costs.totalHigh.toLocaleString()}</span>
            </div>
          </div>
          <div className="financing-note">
            <p><strong>Financing Available:</strong> As low as ${Math.round(costs.totalLow / 60).toLocaleString()}/month with CareCredit (60 months, 0% promo APR).</p>
          </div>
          <div className="calc-disclaimer">
            <p>* These are estimates only. Actual costs may vary based on individual needs, complexity, and insurance coverage. A comprehensive consultation with 3D imaging is required for an exact quote.</p>
          </div>
          <div className="calc-actions">
            <button className="btn-primary" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Get Exact Quote
            </button>
            <button className="btn-secondary" onClick={() => { setShowResults(false); setStep(1); setTeethCount(null); setLocation(null); setBoneCondition(null); setAdditionalNeeds([]); }}>
              Recalculate
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function AllOnFourCalculator() {
  const [archSelection, setArchSelection] = useState(null);
  const [currentStatus, setCurrentStatus] = useState(null);
  const [material, setMaterial] = useState(null);
  const [additionalProc, setAdditionalProc] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const archOptions = [
    { label: "Upper Arch Only", value: "upper" },
    { label: "Lower Arch Only", value: "lower" },
    { label: "Both Arches", value: "both" },
  ];
  const statusOptions = [
    { label: "Some Teeth Remaining", value: "some" },
    { label: "All Teeth Missing", value: "missing" },
    { label: "Current Denture Wearer", value: "denture" },
  ];
  const materialOptions = [
    { label: "Acrylic (PMMA)", value: "acrylic", desc: "Most affordable, good aesthetics", low: 18000, high: 22000 },
    { label: "Zirconia Hybrid", value: "zirconia_hybrid", desc: "Premium strength & beauty", low: 25000, high: 32000 },
    { label: "Full Zirconia", value: "full_zirconia", desc: "Ultimate durability & aesthetics", low: 30000, high: 38000 },
  ];
  const addOnOptions = [
    { label: "Remaining Tooth Extractions", value: "extractions" },
    { label: "Bone Grafting", value: "bone_grafting" },
    { label: "Sinus Lift(s)", value: "sinus_lift" },
    { label: "IV Sedation / General Anesthesia", value: "sedation" },
    { label: "Temporary Prosthesis (same-day teeth)", value: "temporary" },
  ];

  const toggleAddOn = (val) => {
    setAdditionalProc((prev) =>
      prev.includes(val) ? prev.filter((x) => x !== val) : [...prev, val]
    );
  };

  const calculateCosts = () => {
    const mat = materialOptions.find((m) => m.value === material) || materialOptions[0];
    const archMult = archSelection === "both" ? 2 : 1;
    let items = [];

    items.push({
      name: `All-on-4 Implants & Prosthesis (${mat.label})`,
      low: mat.low * archMult,
      high: mat.high * archMult,
    });

    if (additionalProc.includes("extractions") || currentStatus === "some") {
      items.push({ name: "Tooth Extractions", low: 800 * archMult, high: 2500 * archMult });
    }
    if (additionalProc.includes("bone_grafting")) {
      items.push({ name: "Bone Grafting", low: 1000 * archMult, high: 4000 * archMult });
    }
    if (additionalProc.includes("sinus_lift")) {
      items.push({ name: "Sinus Lift", low: 1500, high: 3500 });
    }
    if (additionalProc.includes("sedation")) {
      items.push({ name: "IV Sedation / Anesthesia", low: 500, high: 1200 });
    }
    if (additionalProc.includes("temporary")) {
      items.push({ name: "Temporary Same-Day Prosthesis", low: 1500 * archMult, high: 3000 * archMult });
    }

    const totalLow = items.reduce((s, x) => s + x.low, 0);
    const totalHigh = items.reduce((s, x) => s + x.high, 0);

    return { items, totalLow, totalHigh };
  };

  const costs = showResults ? calculateCosts() : null;

  return (
    <div className="calculator">
      {!showResults ? (
        <div className="calc-step">
          <div className="calc-field">
            <h3>Select Arch(es)</h3>
            <div className="visual-selector">
              {archOptions.map((opt) => (
                <div key={opt.value} className={`visual-option ${archSelection === opt.value ? "selected" : ""}`} onClick={() => setArchSelection(opt.value)}>
                  <span>{opt.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="calc-field">
            <h3>Current Dental Status</h3>
            <div className="visual-selector">
              {statusOptions.map((opt) => (
                <div key={opt.value} className={`visual-option ${currentStatus === opt.value ? "selected" : ""}`} onClick={() => setCurrentStatus(opt.value)}>
                  <span>{opt.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="calc-field">
            <h3>Prosthesis Material</h3>
            <div className="visual-selector">
              {materialOptions.map((opt) => (
                <div key={opt.value} className={`visual-option material-option ${material === opt.value ? "selected" : ""}`} onClick={() => setMaterial(opt.value)}>
                  <strong>{opt.label}</strong>
                  <span className="option-desc">{opt.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="calc-field">
            <h3>Additional Procedures</h3>
            <div className="addon-checkboxes">
              {addOnOptions.map((a) => (
                <label key={a.value} className="addon-checkbox">
                  <input type="checkbox" checked={additionalProc.includes(a.value)} onChange={() => toggleAddOn(a.value)} />
                  <span>{a.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="wizard-nav">
            <span></span>
            <button className="btn-primary" disabled={!archSelection || !currentStatus || !material} onClick={() => setShowResults(true)}>
              Calculate
            </button>
          </div>
        </div>
      ) : (
        <div className="calc-results">
          <h3>Your All-on-4 Cost Estimate</h3>
          <div className="cost-breakdown">
            {costs.items.map((item, i) => (
              <div key={i} className="cost-line">
                <span className="cost-label">{item.name}</span>
                <span className="cost-value">${item.low.toLocaleString()} — ${item.high.toLocaleString()}</span>
              </div>
            ))}
            <div className="cost-line cost-total">
              <span className="cost-label">Estimated Total</span>
              <span className="cost-value">${costs.totalLow.toLocaleString()} — ${costs.totalHigh.toLocaleString()}</span>
            </div>
          </div>
          <div className="comparison-mini">
            <h4>Comparison</h4>
            <div className="cost-line">
              <span className="cost-label">Traditional Dentures (per arch)</span>
              <span className="cost-value">$1,000 — $3,000</span>
            </div>
            <div className="cost-line">
              <span className="cost-label">Individual Implants (per arch, 6-8)</span>
              <span className="cost-value">$30,000 — $60,000+</span>
            </div>
          </div>
          <div className="financing-note">
            <p><strong>Financing Available:</strong> As low as ${Math.round(costs.totalLow / 60).toLocaleString()}/month with CareCredit.</p>
          </div>
          <div className="calc-disclaimer">
            <p>* Estimates only. Actual costs depend on individual clinical needs. Schedule a consultation for an exact quote.</p>
          </div>
          <div className="calc-actions">
            <button className="btn-primary" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>Get Exact Quote</button>
            <button className="btn-secondary" onClick={() => { setShowResults(false); setArchSelection(null); setCurrentStatus(null); setMaterial(null); setAdditionalProc([]); }}>Recalculate</button>
          </div>
        </div>
      )}
    </div>
  );
}

function WisdomTeethCalculator() {
  const [teeth, setTeeth] = useState([
    { id: 1, label: "Upper Right (#1)", level: "" },
    { id: 2, label: "Upper Left (#16)", level: "" },
    { id: 3, label: "Lower Left (#17)", level: "" },
    { id: 4, label: "Lower Right (#32)", level: "" },
  ]);
  const [sedationType, setSedationType] = useState("");
  const [showResults, setShowResults] = useState(false);

  const impactionLevels = [
    { label: "Not Removing", value: "" },
    { label: "Erupted", value: "erupted" },
    { label: "Soft Tissue Impaction", value: "soft_tissue" },
    { label: "Partial Bony Impaction", value: "partial_bony" },
    { label: "Full Bony Impaction", value: "full_bony" },
  ];

  const sedationTypes = [
    { label: "Local Anesthesia", value: "local", low: 0, high: 0 },
    { label: "Nitrous Oxide + Local", value: "nitrous", low: 75, high: 150 },
    { label: "IV Sedation", value: "iv", low: 300, high: 800 },
    { label: "General Anesthesia", value: "general", low: 800, high: 1500 },
  ];

  const setToothLevel = (id, level) => {
    setTeeth((prev) => prev.map((t) => (t.id === id ? { ...t, level } : t)));
  };

  const calculateCosts = () => {
    const pricing = {
      erupted: { low: 150, high: 350 },
      soft_tissue: { low: 250, high: 500 },
      partial_bony: { low: 350, high: 650 },
      full_bony: { low: 450, high: 800 },
    };

    let items = [];
    teeth.forEach((t) => {
      if (t.level && pricing[t.level]) {
        items.push({
          name: `${t.label} — ${impactionLevels.find((l) => l.value === t.level)?.label}`,
          low: pricing[t.level].low,
          high: pricing[t.level].high,
        });
      }
    });

    const sed = sedationTypes.find((s) => s.value === sedationType);
    if (sed && (sed.low > 0 || sed.high > 0)) {
      items.push({ name: `Sedation: ${sed.label}`, low: sed.low, high: sed.high });
    }

    const totalLow = items.reduce((s, x) => s + x.low, 0);
    const totalHigh = items.reduce((s, x) => s + x.high, 0);
    return { items, totalLow, totalHigh };
  };

  const costs = showResults ? calculateCosts() : null;
  const teethSelected = teeth.some((t) => t.level !== "");

  return (
    <div className="calculator">
      {!showResults ? (
        <div className="calc-step">
          <h3>Select Impaction Level for Each Tooth</h3>
          <div className="wisdom-teeth-grid">
            {teeth.map((t) => (
              <div key={t.id} className="wisdom-tooth-card">
                <h4>{t.label}</h4>
                <select className="form-input" value={t.level} onChange={(e) => setToothLevel(t.id, e.target.value)}>
                  {impactionLevels.map((l) => (
                    <option key={l.value} value={l.value}>{l.label}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          <div className="calc-field" style={{ marginTop: "1.5rem" }}>
            <h3>Sedation Type</h3>
            <div className="visual-selector">
              {sedationTypes.map((s) => (
                <div key={s.value} className={`visual-option ${sedationType === s.value ? "selected" : ""}`} onClick={() => setSedationType(s.value)}>
                  <strong>{s.label}</strong>
                  {s.low > 0 && <span className="option-desc">${s.low} — ${s.high}</span>}
                </div>
              ))}
            </div>
          </div>

          <div className="wizard-nav">
            <span></span>
            <button className="btn-primary" disabled={!teethSelected} onClick={() => setShowResults(true)}>Calculate</button>
          </div>
        </div>
      ) : (
        <div className="calc-results">
          <h3>Your Wisdom Teeth Removal Estimate</h3>
          <div className="cost-breakdown">
            {costs.items.map((item, i) => (
              <div key={i} className="cost-line">
                <span className="cost-label">{item.name}</span>
                <span className="cost-value">${item.low.toLocaleString()} — ${item.high.toLocaleString()}</span>
              </div>
            ))}
            <div className="cost-line cost-total">
              <span className="cost-label">Estimated Total</span>
              <span className="cost-value">${costs.totalLow.toLocaleString()} — ${costs.totalHigh.toLocaleString()}</span>
            </div>
          </div>
          <div className="calc-disclaimer">
            <p>* Estimates based on typical fees. Actual costs vary by complexity, insurance coverage, and clinical findings. X-rays are required for a precise quote.</p>
          </div>
          <div className="calc-actions">
            <button className="btn-primary" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>Get Exact Quote</button>
            <button className="btn-secondary" onClick={() => { setShowResults(false); setTeeth(teeth.map((t) => ({ ...t, level: "" }))); setSedationType(""); }}>Recalculate</button>
          </div>
        </div>
      )}
    </div>
  );
}

function FinancingCalculator() {
  const [totalCost, setTotalCost] = useState(10000);
  const [term, setTerm] = useState(24);
  const terms = [12, 24, 36, 48, 60];
  const promoAPR = 0;
  const standardAPR = 14.9;

  const monthlyPromo = totalCost / term;
  const monthlyStandard = (totalCost * (standardAPR / 100 / 12) * Math.pow(1 + standardAPR / 100 / 12, term)) / (Math.pow(1 + standardAPR / 100 / 12, term) - 1);
  const totalInterest = monthlyStandard * term - totalCost;

  return (
    <div className="calculator">
      <div className="calc-step">
        <h3>Treatment Cost</h3>
        <div className="financing-input-wrap">
          <div className="financing-slider-row">
            <span>$1,000</span>
            <input
              type="range"
              min="1000"
              max="80000"
              step="500"
              value={totalCost}
              onChange={(e) => setTotalCost(Number(e.target.value))}
              className="financing-slider"
            />
            <span>$80,000</span>
          </div>
          <div className="financing-amount">
            <label>Total Amount:</label>
            <input
              type="number"
              className="form-input financing-input"
              min="1000"
              max="80000"
              value={totalCost}
              onChange={(e) => setTotalCost(Math.max(1000, Math.min(80000, Number(e.target.value))))}
            />
          </div>
        </div>

        <h3 style={{ marginTop: "1.5rem" }}>Payment Term</h3>
        <div className="visual-selector">
          {terms.map((t) => (
            <div key={t} className={`visual-option ${term === t ? "selected" : ""}`} onClick={() => setTerm(t)}>
              <strong>{t} months</strong>
              <span className="option-desc">{(t / 12).toFixed(1)} years</span>
            </div>
          ))}
        </div>

        <div className="financing-results">
          <div className="financing-result-card promo">
            <h4>0% Promotional APR*</h4>
            <div className="payment-amount">${monthlyPromo.toFixed(2)}<span>/month</span></div>
            <p>Total: ${totalCost.toLocaleString()} over {term} months</p>
            <p className="promo-note">*Subject to credit approval. Promotional period varies.</p>
          </div>
          <div className="financing-result-card standard">
            <h4>Standard APR ({standardAPR}%)</h4>
            <div className="payment-amount">${monthlyStandard.toFixed(2)}<span>/month</span></div>
            <p>Total: ${(monthlyStandard * term).toFixed(2)} ({term} months)</p>
            <p>Total interest: ${totalInterest.toFixed(2)}</p>
          </div>
        </div>

        <div className="payment-breakdown">
          <h4>Payment Breakdown (0% APR)</h4>
          <div className="breakdown-bar">
            <div className="breakdown-principal" style={{ width: "100%" }}>
              Principal: ${totalCost.toLocaleString()}
            </div>
          </div>
          <h4 style={{ marginTop: "1rem" }}>Payment Breakdown ({standardAPR}% APR)</h4>
          <div className="breakdown-bar">
            <div className="breakdown-principal" style={{ width: `${(totalCost / (monthlyStandard * term)) * 100}%` }}>
              Principal
            </div>
            <div className="breakdown-interest" style={{ width: `${(totalInterest / (monthlyStandard * term)) * 100}%` }}>
              Interest
            </div>
          </div>
        </div>

        <div className="carecredit-info">
          <h4>💳 CareCredit Financing</h4>
          <p>We accept CareCredit, a healthcare credit card that offers special financing on dental procedures. Apply online or in our office.</p>
          <ul>
            <li>6, 12, 18, and 24-month promotional financing available</li>
            <li>Extended plans up to 60 months with reduced APR</li>
            <li>Quick application with instant decision</li>
            <li>Use for the whole family</li>
          </ul>
        </div>

        <div className="calc-disclaimer">
          <p>* Payment estimates are for illustrative purposes only. Actual terms, APR, and approval are determined by the financing provider. Not all patients will qualify for promotional financing.</p>
        </div>
        <div className="calc-actions">
          <button className="btn-primary" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>Get Exact Quote</button>
        </div>
      </div>
    </div>
  );
}

/* ─── 11. KnowledgeBase ─── */
function KnowledgeBaseSection({ showArticle, setShowArticle }) {
  const [ref, isVisible] = useIntersectionObserver();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Dental Implants", "Full Mouth", "Wisdom Teeth", "Bone Grafting", "Jaw Surgery", "General"];

  const filteredArticles = (KNOWLEDGE_BASE || []).filter((article) => {
    const matchesCategory = activeCategory === "All" || article.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      !q ||
      article.title.toLowerCase().includes(q) ||
      (article.content || "").toLowerCase().includes(q) ||
      (article.tags || []).some((tag) => tag.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = (KNOWLEDGE_BASE || []).filter((a) => a.featured).slice(0, 3);

  if (showArticle) {
    const article = (KNOWLEDGE_BASE || []).find((a) => a.id === showArticle);
    if (!article) {
      setShowArticle(null);
      return null;
    }
    const relatedArticles = (KNOWLEDGE_BASE || [])
      .filter((a) => a.id !== article.id && a.category === article.category)
      .slice(0, 3);

    return (
      <section className="section kb-section" id="knowledge-base">
        <div className="section-inner">
          <button className="btn-back" onClick={() => setShowArticle(null)}>← Back to Knowledge Base</button>
          <div className="article-full">
            <div className="article-header">
              <span className="article-category-badge">{article.category}</span>
              {article.readTime && <span className="article-read-time">📖 {article.readTime} min read</span>}
            </div>
            <h2 className="article-title">{article.title}</h2>
            <div className="article-body">
              {(article.content || "").split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            {article.keyFacts && article.keyFacts.length > 0 && (
              <div className="key-facts-box">
                <h4>Key Facts</h4>
                <ul>
                  {article.keyFacts.map((fact, i) => (
                    <li key={i}>{fact}</li>
                  ))}
                </ul>
              </div>
            )}
            {article.references && article.references.length > 0 && (
              <div className="references-section">
                <h4>References</h4>
                <ol>
                  {article.references.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ol>
              </div>
            )}
            {relatedArticles.length > 0 && (
              <div className="related-articles">
                <h4>Related Articles</h4>
                <div className="related-grid">
                  {relatedArticles.map((ra) => (
                    <div key={ra.id} className="related-card" onClick={() => setShowArticle(ra.id)}>
                      <span className="related-category">{ra.category}</span>
                      <h5>{ra.title}</h5>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="article-cta">
              <h4>Have Questions?</h4>
              <p>Schedule a consultation to discuss your specific situation with Dr. Antipov.</p>
              <button className="btn-primary" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section kb-section" id="knowledge-base" ref={ref}>
      <div className={`section-inner ${isVisible ? "fade-in-up" : "fade-hidden"}`}>
        <h2 className="section-title">Knowledge Base</h2>
        <p className="section-subtitle">In-depth articles about oral surgery procedures, recovery, and care</p>

        <div className="kb-search">
          <input
            type="text"
            className="form-input kb-search-input"
            placeholder="Search articles by title, content, or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="kb-categories">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`kb-category-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {!searchQuery && activeCategory === "All" && featuredArticles.length > 0 && (
          <div className="featured-section">
            <h3 className="sub-heading">Featured Articles</h3>
            <div className="featured-grid">
              {featuredArticles.map((article) => (
                <div key={article.id} className="article-card featured" onClick={() => setShowArticle(article.id)}>
                  <span className="article-category-badge">{article.category}</span>
                  <h4>{article.title}</h4>
                  {article.readTime && <span className="article-read-time">📖 {article.readTime} min read</span>}
                  <p className="article-preview">{(article.content || "").slice(0, 100)}...</p>
                  {article.tags && (
                    <div className="article-tags">
                      {article.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="article-tag">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="kb-grid">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <div key={article.id} className="article-card" onClick={() => setShowArticle(article.id)}>
                <span className="article-category-badge">{article.category}</span>
                <h4>{article.title}</h4>
                {article.readTime && <span className="article-read-time">📖 {article.readTime} min read</span>}
                <p className="article-preview">{(article.content || "").slice(0, 100)}...</p>
                {article.tags && (
                  <div className="article-tags">
                    {article.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="article-tag">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="no-results">
              <p>No articles found matching your search. Try different keywords or browse by category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─── 12. BeforeAfterGallery ─── */
function BeforeAfterGallery() {
  const [ref, isVisible] = useIntersectionObserver();
  const cases = [
    { id: 1, category: "Dental Implants", title: "Single Implant - Front Tooth", desc: "Patient received a single dental implant to replace a missing front tooth." },
    { id: 2, category: "Dental Implants", title: "Multiple Implant Restoration", desc: "Three adjacent missing teeth replaced with implant-supported bridge." },
    { id: 3, category: "Dental Implants", title: "Implant with Bone Graft", desc: "Implant placed after bone grafting procedure to restore jaw volume." },
    { id: 4, category: "All-on-4", title: "Full Upper Arch Restoration", desc: "Complete upper arch restored with All-on-4 implant-supported prosthesis." },
    { id: 5, category: "All-on-4", title: "Full Mouth Reconstruction", desc: "Both arches restored with All-on-4 treatment for a complete smile makeover." },
    { id: 6, category: "Wisdom Teeth", title: "Impacted Wisdom Tooth Removal", desc: "Surgical extraction of horizontally impacted lower wisdom tooth." },
    { id: 7, category: "Wisdom Teeth", title: "Four Wisdom Teeth Extraction", desc: "All four wisdom teeth removed in a single visit under IV sedation." },
    { id: 8, category: "Jaw Surgery", title: "Corrective Jaw Surgery", desc: "Orthognathic surgery to correct significant underbite and improve function." },
  ];

  const gradients = [
    "linear-gradient(135deg, #1a365d, #2b6cb0)",
    "linear-gradient(135deg, #2b6cb0, #4299e1)",
    "linear-gradient(135deg, #1a365d, #667eea)",
    "linear-gradient(135deg, #b7791f, #d69e2e)",
    "linear-gradient(135deg, #2b6cb0, #38b2ac)",
    "linear-gradient(135deg, #553c9a, #805ad5)",
    "linear-gradient(135deg, #2f855a, #48bb78)",
    "linear-gradient(135deg, #c53030, #e53e3e)",
  ];

  const icons = {
    "Dental Implants": "🦷",
    "All-on-4": "✨",
    "Wisdom Teeth": "🦷",
    "Jaw Surgery": "🏥",
  };

  return (
    <section className="section gallery-section" id="before-after" ref={ref}>
      <div className={`section-inner ${isVisible ? "fade-in-up" : "fade-hidden"}`}>
        <h2 className="section-title">Before &amp; After Gallery</h2>
        <p className="section-subtitle">See real results from our patients (photos available during consultation)</p>

        <div className="gallery-grid">
          {cases.map((c, i) => (
            <div key={c.id} className="gallery-card">
              <div className="gallery-image-placeholder" style={{ background: gradients[i % gradients.length] }}>
                <span className="gallery-icon">{icons[c.category] || "📷"}</span>
                <div className="gallery-slider-ui">
                  <span className="slider-label-left">Before</span>
                  <div className="slider-divider"></div>
                  <span className="slider-label-right">After</span>
                </div>
              </div>
              <div className="gallery-card-body">
                <span className="gallery-category">{c.category}</span>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-disclaimer">
          <p>* Results may vary. Photos shown during in-person consultation. Individual outcomes depend on clinical factors and patient compliance with post-operative instructions.</p>
        </div>
      </div>
    </section>
  );
}

/* ─── 13. PatientInfo ─── */
function PatientInfo() {
  const [ref, isVisible] = useIntersectionObserver();
  const cards = [
    {
      title: "First Visit",
      icon: "📋",
      description: "What to expect during your initial consultation, including exam, imaging, and treatment planning.",
      items: ["Comprehensive oral exam", "3D CBCT imaging", "Treatment plan discussion", "Cost estimate & financing options"],
      formLabel: "New Patient Forms",
    },
    {
      title: "Insurance & Financing",
      icon: "💳",
      description: "We accept most major insurance plans and offer flexible financing options.",
      items: ["Most PPO insurance accepted", "CareCredit financing", "In-house payment plans", "Submit claims on your behalf"],
      formLabel: "Insurance Verification Form",
    },
    {
      title: "Pre-Op Instructions",
      icon: "📝",
      description: "Important instructions to follow before your oral surgery procedure.",
      items: ["Fasting guidelines for sedation", "Medication adjustments", "Arrange a ride home", "Wear comfortable clothing"],
      formLabel: "Pre-Op Checklist",
    },
    {
      title: "Post-Op Care",
      icon: "🩹",
      description: "Recovery guidelines to ensure optimal healing after your procedure.",
      items: ["Pain management tips", "Diet recommendations", "Activity restrictions", "When to call the office"],
      formLabel: "Post-Op Instructions",
    },
  ];

  return (
    <section className="section patient-section" id="patient-info" ref={ref}>
      <div className={`section-inner ${isVisible ? "fade-in-up" : "fade-hidden"}`}>
        <h2 className="section-title">Patient Information</h2>
        <p className="section-subtitle">Everything you need to prepare for your visit</p>

        <div className="patient-grid">
          {cards.map((card, i) => (
            <div key={i} className="patient-card">
              <span className="patient-card-icon">{card.icon}</span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <ul className="patient-list">
                {card.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
              <button className="btn-outline-sm">📥 Download {card.formLabel}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 14. ReferralForm ─── */
function ReferralForm() {
  const [ref, isVisible] = useIntersectionObserver();
  const [formData, setFormData] = useState({
    doctorName: "",
    practiceName: "",
    doctorPhone: "",
    doctorEmail: "",
    patientName: "",
    patientDOB: "",
    patientPhone: "",
    reason: "",
    urgency: "Routine",
    notes: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.doctorName.trim()) errs.doctorName = "Required";
    if (!formData.practiceName.trim()) errs.practiceName = "Required";
    if (!formData.doctorPhone.trim()) errs.doctorPhone = "Required";
    if (!formData.doctorEmail.trim()) errs.doctorEmail = "Required";
    else if (!/\S+@\S+\.\S+/.test(formData.doctorEmail)) errs.doctorEmail = "Invalid email";
    if (!formData.patientName.trim()) errs.patientName = "Required";
    if (!formData.patientDOB.trim()) errs.patientDOB = "Required";
    if (!formData.patientPhone.trim()) errs.patientPhone = "Required";
    if (!formData.reason) errs.reason = "Please select a reason";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="section referral-section" id="referral-form">
        <div className="section-inner">
          <div className="success-message">
            <span className="success-icon">✅</span>
            <h3>Referral Submitted Successfully!</h3>
            <p>Thank you for your referral, Dr. {formData.doctorName}. We will contact the patient within 1 business day to schedule an appointment.</p>
            <button className="btn-primary" onClick={() => { setSubmitted(false); setFormData({ doctorName: "", practiceName: "", doctorPhone: "", doctorEmail: "", patientName: "", patientDOB: "", patientPhone: "", reason: "", urgency: "Routine", notes: "" }); }}>
              Submit Another Referral
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section referral-section" id="referral-form" ref={ref}>
      <div className={`section-inner ${isVisible ? "fade-in-up" : "fade-hidden"}`}>
        <h2 className="section-title">Doctor Referral Form</h2>
        <p className="section-subtitle">Refer your patient for oral surgery — we'll take great care of them</p>

        <form className="referral-form-grid" onSubmit={handleSubmit}>
          <div className="form-section">
            <h3>Referring Doctor Information</h3>
            <div className="form-row">
              <div className="form-group">
                <label>Doctor Name *</label>
                <input type="text" className={`form-input ${errors.doctorName ? "error" : ""}`} name="doctorName" value={formData.doctorName} onChange={handleChange} placeholder="Dr. Smith" />
                {errors.doctorName && <span className="error-text">{errors.doctorName}</span>}
              </div>
              <div className="form-group">
                <label>Practice Name *</label>
                <input type="text" className={`form-input ${errors.practiceName ? "error" : ""}`} name="practiceName" value={formData.practiceName} onChange={handleChange} placeholder="Smith Family Dentistry" />
                {errors.practiceName && <span className="error-text">{errors.practiceName}</span>}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Phone *</label>
                <input type="tel" className={`form-input ${errors.doctorPhone ? "error" : ""}`} name="doctorPhone" value={formData.doctorPhone} onChange={handleChange} placeholder="(916) 555-0100" />
                {errors.doctorPhone && <span className="error-text">{errors.doctorPhone}</span>}
              </div>
              <div className="form-group">
                <label>Email *</label>
                <input type="email" className={`form-input ${errors.doctorEmail ? "error" : ""}`} name="doctorEmail" value={formData.doctorEmail} onChange={handleChange} placeholder="doctor@practice.com" />
                {errors.doctorEmail && <span className="error-text">{errors.doctorEmail}</span>}
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Patient Information</h3>
            <div className="form-row">
              <div className="form-group">
                <label>Patient Name *</label>
                <input type="text" className={`form-input ${errors.patientName ? "error" : ""}`} name="patientName" value={formData.patientName} onChange={handleChange} placeholder="John Doe" />
                {errors.patientName && <span className="error-text">{errors.patientName}</span>}
              </div>
              <div className="form-group">
                <label>Date of Birth *</label>
                <input type="date" className={`form-input ${errors.patientDOB ? "error" : ""}`} name="patientDOB" value={formData.patientDOB} onChange={handleChange} />
                {errors.patientDOB && <span className="error-text">{errors.patientDOB}</span>}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Patient Phone *</label>
                <input type="tel" className={`form-input ${errors.patientPhone ? "error" : ""}`} name="patientPhone" value={formData.patientPhone} onChange={handleChange} placeholder="(916) 555-0200" />
                {errors.patientPhone && <span className="error-text">{errors.patientPhone}</span>}
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Referral Details</h3>
            <div className="form-group">
              <label>Reason for Referral *</label>
              <select className={`form-input ${errors.reason ? "error" : ""}`} name="reason" value={formData.reason} onChange={handleChange}>
                <option value="">Select reason...</option>
                {REFERRAL_REASONS.map((r, i) => (
                  <option key={i} value={r}>{r}</option>
                ))}
              </select>
              {errors.reason && <span className="error-text">{errors.reason}</span>}
            </div>
            <div className="form-group">
              <label>Urgency Level</label>
              <div className="urgency-selector">
                {["Routine", "Urgent", "Emergency"].map((u) => (
                  <label key={u} className={`urgency-option ${formData.urgency === u ? "selected" : ""}`}>
                    <input type="radio" name="urgency" value={u} checked={formData.urgency === u} onChange={handleChange} />
                    <span>{u}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="form-group">
              <label>Additional Notes</label>
              <textarea className="form-input" name="notes" value={formData.notes} onChange={handleChange} rows="4" placeholder="Clinical findings, X-ray notes, special considerations..."></textarea>
            </div>
          </div>

          <button type="submit" className="btn-primary full-width">Submit Referral</button>
        </form>
      </div>
    </section>
  );
}

/* ─── 15. ContactForm ─── */
function ContactForm() {
  const [ref, isVisible] = useIntersectionObserver();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.phone.trim()) errs.phone = "Phone is required";
    if (!formData.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = "Invalid email address";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="section contact-section" id="contact">
        <div className="section-inner">
          <div className="success-message">
            <span className="success-icon">✅</span>
            <h3>Message Sent Successfully!</h3>
            <p>Thank you, {formData.name}! We'll get back to you within 1 business day. For urgent matters, please call (916) 783-2110.</p>
            <button className="btn-primary" onClick={() => { setSubmitted(false); setFormData({ name: "", phone: "", email: "", service: "", message: "" }); }}>
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section contact-section" id="contact" ref={ref}>
      <div className={`section-inner ${isVisible ? "fade-in-up" : "fade-hidden"}`}>
        <h2 className="section-title">Schedule a Consultation</h2>
        <p className="section-subtitle">Get in touch to schedule your appointment or ask a question</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Full Name *</label>
              <input type="text" className={`form-input ${errors.name ? "error" : ""}`} name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label>Phone Number *</label>
              <input type="tel" className={`form-input ${errors.phone ? "error" : ""}`} name="phone" value={formData.phone} onChange={handleChange} placeholder="(916) 555-0100" />
              {errors.phone && <span className="error-text">{errors.phone}</span>}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Email Address *</label>
              <input type="email" className={`form-input ${errors.email ? "error" : ""}`} name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label>Service of Interest</label>
              <select className="form-input" name="service" value={formData.service} onChange={handleChange}>
                <option value="">Select a service...</option>
                {SERVICES.map((s, i) => (
                  <option key={i} value={s.name}>{s.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea className="form-input" name="message" value={formData.message} onChange={handleChange} rows="5" placeholder="Tell us about your concern or what you'd like to schedule..."></textarea>
          </div>
          <button type="submit" className="btn-primary full-width">Send Message</button>
        </form>
      </div>
    </section>
  );
}

/* ─── 16. Testimonials ─── */
function TestimonialsSection() {
  const [ref, isVisible] = useIntersectionObserver();
  return (
    <section className="section testimonials-section" id="testimonials" ref={ref}>
      <div className={`section-inner ${isVisible ? "fade-in-up" : "fade-hidden"}`}>
        <h2 className="section-title">Patient Testimonials</h2>
        <p className="section-subtitle">Hear from our patients about their experience</p>
        <div className="testimonials-grid">
          {(TESTIMONIALS || []).slice(0, 6).map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-stars">
                {"★".repeat(t.rating || 5)}{"☆".repeat(5 - (t.rating || 5))}
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <strong>{t.name}</strong>
                {t.procedure && <span className="testimonial-procedure">{t.procedure}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 17. FAQ ─── */
function FAQSection() {
  const [ref, isVisible] = useIntersectionObserver();
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="section faq-section" id="faq" ref={ref}>
      <div className={`section-inner ${isVisible ? "fade-in-up" : "fade-hidden"}`}>
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">Find answers to common questions about our procedures</p>
        <div className="faq-list">
          {(FAQS || []).slice(0, 12).map((faq, i) => (
            <div key={i} className={`faq-item ${openIndex === i ? "open" : ""}`}>
              <button className="faq-question" onClick={() => toggle(i)}>
                <span>{faq.question}</span>
                <span className="faq-toggle">{openIndex === i ? "−" : "+"}</span>
              </button>
              {openIndex === i && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 18. Location ─── */
function Location() {
  const [ref, isVisible] = useIntersectionObserver();

  const cityRegions = {
    "Sacramento Metro": [],
    "Foothills / Sierra": [],
    "North Valley": [],
    "Wine Country": [],
    "Central Valley": [],
    "Nevada": [],
    "Oregon": [],
  };

  (CITIES_SERVED || []).forEach((city) => {
    if (city.region && cityRegions[city.region]) {
      cityRegions[city.region].push(city.name || city);
    } else if (typeof city === "string") {
      cityRegions["Sacramento Metro"].push(city);
    }
  });

  return (
    <section className="section location-section" id="location" ref={ref}>
      <div className={`section-inner ${isVisible ? "fade-in-up" : "fade-hidden"}`}>
        <h2 className="section-title">Our Location</h2>
        <p className="section-subtitle">Conveniently located in Roseville, serving the greater Sacramento area</p>

        <div className="location-grid">
          <div className="location-info">
            <div className="location-detail">
              <strong>📍 Address</strong>
              <p>{PRACTICE.address || "1830 Sierra Gardens Dr, Suite 150, Roseville, CA 95661"}</p>
            </div>
            <div className="location-detail">
              <strong>📞 Phone</strong>
              <p><a href="tel:9167832110">{PRACTICE.phone || "(916) 783-2110"}</a></p>
            </div>
            <div className="location-detail">
              <strong>✉️ Email</strong>
              <p><a href={`mailto:${PRACTICE.email || "info@galleriaoms.com"}`}>{PRACTICE.email || "info@galleriaoms.com"}</a></p>
            </div>
            {PRACTICE.fax && (
              <div className="location-detail">
                <strong>📠 Fax</strong>
                <p>{PRACTICE.fax}</p>
              </div>
            )}
            <div className="location-detail">
              <strong>🕐 Hours</strong>
              <div className="hours-grid">
                {(PRACTICE.hours || [
                  { day: "Monday - Thursday", time: "8:00 AM - 5:00 PM" },
                  { day: "Friday", time: "8:00 AM - 2:00 PM" },
                  { day: "Saturday - Sunday", time: "Closed" },
                ]).map((h, i) => (
                  <div key={i} className="hours-row">
                    <span>{h.day}</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="location-map">
            <div className="map-placeholder">
              <span style={{ fontSize: "3rem" }}>🗺️</span>
              <p>Google Maps</p>
              <p className="map-address">{PRACTICE.address || "1830 Sierra Gardens Dr, Roseville, CA"}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(PRACTICE.address || "Galleria Oral Surgery Roseville CA")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-sm"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>

        <div className="cities-served">
          <h3 className="sub-heading">Cities We Serve</h3>
          <div className="cities-grid">
            {Object.entries(cityRegions).map(([region, cities]) =>
              cities.length > 0 ? (
                <div key={region} className="city-region">
                  <h4>{region}</h4>
                  <ul>
                    {cities.map((city, i) => (
                      <li key={i}>{city}</li>
                    ))}
                  </ul>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 19. Footer ─── */
function Footer() {
  const quickLinks = ["About", "Services", "Dental Implants", "Wisdom Teeth", "Knowledge Base", "Patient Info", "Contact"];
  const serviceLinks = SERVICES ? SERVICES.slice(0, 8).map((s) => s.name) : [
    "Dental Implants", "All-on-4", "Wisdom Teeth", "Bone Grafting",
    "Jaw Surgery", "Tooth Extractions", "IV Sedation", "3D Imaging",
  ];

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Galleria Oral Surgery</h4>
            <p>Advanced oral and maxillofacial surgery in Roseville, CA. Board-eligible surgeon providing compassionate, evidence-based care.</p>
            <p className="footer-powered">Powered by <strong>Fusion Dental Implants</strong></p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a onClick={() => document.getElementById(link.toLowerCase().replace(/ /g, "-"))?.scrollIntoView({ behavior: "smooth" })}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {serviceLinks.map((svc, i) => (
                <li key={i}>
                  <a onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>
                    {svc}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <p>{PRACTICE.address || "1830 Sierra Gardens Dr, Suite 150, Roseville, CA 95661"}</p>
            <p><a href="tel:9167832110">{PRACTICE.phone || "(916) 783-2110"}</a></p>
            <p><a href={`mailto:${PRACTICE.email || "info@galleriaoms.com"}`}>{PRACTICE.email || "info@galleriaoms.com"}</a></p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Galleria Oral Surgery. All rights reserved.</p>
          <p className="footer-disclaimer">
            The information on this website is for general informational purposes only. It is not intended as medical advice, diagnosis, or treatment. Always seek the advice of a qualified healthcare provider with any questions regarding a medical condition. Individual results may vary. Testimonials are from actual patients but do not guarantee outcomes. Cost estimates are approximate and subject to change based on individual clinical needs.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─── 20. FloatingComms ─── */
function FloatingComms() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl = PRACTICE.whatsapp
    ? `https://wa.me/${PRACTICE.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Hi! I'd like to schedule a consultation at Galleria Oral Surgery.")}`
    : `https://wa.me/19167832110?text=${encodeURIComponent("Hi! I'd like to schedule a consultation at Galleria Oral Surgery.")}`;

  const telegramUrl = PRACTICE.telegram
    ? `https://t.me/${PRACTICE.telegram}`
    : "https://t.me/GalleriaOMS";

  return (
    <div className="floating-comms">
      {isOpen && (
        <div className="comms-menu">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="comms-option whatsapp" title="WhatsApp">
            <span className="comms-icon">💬</span>
            <span>WhatsApp</span>
          </a>
          <a href={telegramUrl} target="_blank" rel="noopener noreferrer" className="comms-option telegram" title="Telegram">
            <span className="comms-icon">✈️</span>
            <span>Telegram</span>
          </a>
          <a href="tel:9167832110" className="comms-option phone" title="Call Us">
            <span className="comms-icon">📞</span>
            <span>Call</span>
          </a>
          <a href="sms:9167832110" className="comms-option sms" title="Send SMS">
            <span className="comms-icon">💬</span>
            <span>SMS</span>
          </a>
          <button className="comms-close" onClick={() => setIsOpen(false)}>✕</button>
        </div>
      )}
      <button
        className={`comms-fab ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        title="Chat with us!"
      >
        <span className="fab-icon">{isOpen ? "✕" : "💬"}</span>
        {!isOpen && <span className="fab-pulse"></span>}
      </button>
    </div>
  );
}

/* ─── 21. AccessibilityToolbar ─── */
function AccessibilityToolbar({ fontSize, setFontSize, highContrast, setHighContrast }) {
  const [isOpen, setIsOpen] = useState(false);

  const changeFontSize = (delta) => {
    const newSize = Math.max(12, Math.min(24, fontSize + delta));
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}px`;
  };

  const resetFontSize = () => {
    setFontSize(16);
    document.documentElement.style.fontSize = "16px";
  };

  const toggleContrast = () => {
    setHighContrast(!highContrast);
    document.body.classList.toggle("high-contrast");
  };

  return (
    <div className="accessibility-toolbar">
      {isOpen && (
        <div className="a11y-panel">
          <h4>Accessibility</h4>
          <div className="a11y-option">
            <span>Font Size</span>
            <div className="a11y-font-controls">
              <button onClick={() => changeFontSize(-2)} title="Decrease font size">A-</button>
              <button onClick={resetFontSize} title="Reset font size">A</button>
              <button onClick={() => changeFontSize(2)} title="Increase font size">A+</button>
            </div>
          </div>
          <div className="a11y-option">
            <span>High Contrast</span>
            <button
              className={`a11y-toggle ${highContrast ? "active" : ""}`}
              onClick={toggleContrast}
            >
              {highContrast ? "ON" : "OFF"}
            </button>
          </div>
          <button className="a11y-close" onClick={() => setIsOpen(false)}>Close</button>
        </div>
      )}
      <button className="a11y-fab" onClick={() => setIsOpen(!isOpen)} title="Accessibility Options">
        ⚙
      </button>
    </div>
  );
}

/* ─── 1. App (main component) ─── */
export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);
  const [showKnowledgeBase, setShowKnowledgeBase] = useState(null);
  const [showCalculator, setShowCalculator] = useState(null);

  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.textContent = STYLES;
    document.head.appendChild(styleTag);
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <Nav
        scrolled={scrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        setActiveSection={setActiveSection}
        setShowCalculator={setShowCalculator}
        setShowKnowledgeBase={setShowKnowledgeBase}
      />
      <Hero setActiveSection={setActiveSection} />
      <About />
      <AISymptomChecker />
      <ServicesSection />
      <DentalImplants />
      <AllOnFour />
      <WisdomTeeth />
      <CostCalculators />
      <KnowledgeBaseSection showArticle={showKnowledgeBase} setShowArticle={setShowKnowledgeBase} />
      <BeforeAfterGallery />
      <PatientInfo />
      <ReferralForm />
      <ContactForm />
      <TestimonialsSection />
      <FAQSection />
      <Location />
      <Footer />
      <FloatingComms />
      <AccessibilityToolbar
        fontSize={fontSize}
        setFontSize={setFontSize}
        highContrast={highContrast}
        setHighContrast={setHighContrast}
      />
    </div>
  );
}
