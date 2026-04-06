import { useState, useEffect, useRef, useCallback } from "react";

// ============================================================
// GALLERIA ORAL SURGERY - AI REFERRAL MANAGEMENT SYSTEM
// World's Most Advanced Oral Surgery Referral Platform
// Dr. Alexander Antipov, DDS | Roseville, CA
// Powered by Fusion Dental Implants
// ============================================================

// ==================== PRACTICE DATA ====================
const PRACTICE = {
  name: "Galleria Oral Surgery",
  doctor: "Dr. Alexander Antipov, DDS",
  specialty: "Oral & Maxillofacial Surgery",
  phone: "(916) 783-2110",
  fax: "(916) 783-2111",
  email: "info@galleriaoms.com",
  referralEmail: "referrals@galleriaoms.com",
  address: "911 Reserve Drive, Suite 150, Roseville, CA 95678",
  hours: "Mon-Thu: 8AM-5PM | Fri: 8AM-2PM",
  website: "www.galleriaoms.com",
  lat: 38.7521,
  lng: -121.2880,
};

const REFERRAL_REASONS = [
  "Dental Implants","Wisdom Teeth Extraction","Tooth Extraction",
  "All-on-4 Full Arch","All-on-6 Full Arch","Bone Grafting / Sinus Lift",
  "Corrective Jaw Surgery","Oral Pathology / Biopsy","TMJ Treatment",
  "Facial Trauma","Expose & Bond","Pre-Prosthetic Surgery",
  "Apicoectomy","Frenectomy","Cleft Lip & Palate","PRF Therapy","Other",
];

const URGENCY_LEVELS = [
  { value: "routine", label: "Routine", color: "#10b981", time: "Schedule within 2 weeks" },
  { value: "soon", label: "Soon", color: "#f59e0b", time: "Schedule within 3-5 days" },
  { value: "urgent", label: "Urgent", color: "#ef4444", time: "Schedule within 24-48 hours" },
  { value: "emergency", label: "Emergency", color: "#dc2626", time: "Same day / immediate" },
];

// ==================== AI ENGINE (Simulated) ====================
const AI_ENGINE = {
  analyzeReferralText(text) {
    const lower = text.toLowerCase();
    const result = { procedures: [], urgency: "routine", aiNotes: [], confidence: 0 };
    
    const procedureMap = {
      "implant": "Dental Implants", "wisdom": "Wisdom Teeth Extraction",
      "extract": "Tooth Extraction", "all-on-4": "All-on-4 Full Arch",
      "all on 4": "All-on-4 Full Arch", "full arch": "All-on-4 Full Arch",
      "bone graft": "Bone Grafting / Sinus Lift", "sinus lift": "Bone Grafting / Sinus Lift",
      "jaw surgery": "Corrective Jaw Surgery", "orthognathic": "Corrective Jaw Surgery",
      "biopsy": "Oral Pathology / Biopsy", "lesion": "Oral Pathology / Biopsy",
      "pathology": "Oral Pathology / Biopsy", "tmj": "TMJ Treatment",
      "trauma": "Facial Trauma", "fracture": "Facial Trauma",
      "impacted canine": "Expose & Bond", "expose": "Expose & Bond",
      "apicoectomy": "Apicoectomy", "root end": "Apicoectomy",
      "frenectomy": "Frenectomy", "tongue tie": "Frenectomy",
      "cleft": "Cleft Lip & Palate", "prf": "PRF Therapy",
    };

    for (const [keyword, procedure] of Object.entries(procedureMap)) {
      if (lower.includes(keyword) && !result.procedures.includes(procedure)) {
        result.procedures.push(procedure);
      }
    }

    if (lower.includes("emergency") || lower.includes("immediate") || lower.includes("acute pain") || lower.includes("bleeding")) {
      result.urgency = "emergency";
      result.aiNotes.push("AI detected emergency keywords - flagged for immediate attention");
    } else if (lower.includes("urgent") || lower.includes("infection") || lower.includes("swelling") || lower.includes("abscess")) {
      result.urgency = "urgent";
      result.aiNotes.push("AI detected urgent clinical indicators");
    } else if (lower.includes("soon") || lower.includes("pain") || lower.includes("discomfort")) {
      result.urgency = "soon";
      result.aiNotes.push("AI detected moderate urgency indicators");
    }

    if (lower.includes("diabetic") || lower.includes("diabetes")) result.aiNotes.push("Medical alert: Diabetes noted - coordinate blood sugar management");
    if (lower.includes("blood thinner") || lower.includes("anticoagulant") || lower.includes("coumadin") || lower.includes("warfarin")) result.aiNotes.push("Medical alert: Anticoagulant therapy - INR check needed pre-op");
    if (lower.includes("bisphosphonate") || lower.includes("prolia") || lower.includes("fosamax")) result.aiNotes.push("Medical alert: Bisphosphonate history - MRONJ risk assessment needed");
    if (lower.includes("pregnant") || lower.includes("pregnancy")) result.aiNotes.push("Medical alert: Pregnancy noted - timing and medication considerations");
    if (lower.includes("anxious") || lower.includes("anxiety") || lower.includes("phobia")) result.aiNotes.push("Patient comfort: Dental anxiety noted - recommend IV sedation consultation");
    if (lower.includes("pediatric") || lower.includes("child") || lower.includes("minor")) result.aiNotes.push("Pediatric patient: Age-appropriate protocols and parent/guardian coordination");

    result.confidence = Math.min(95, 40 + result.procedures.length * 20 + result.aiNotes.length * 8);
    return result;
  },

  generateFollowUpSchedule(referral) {
    const baseSchedule = [
      { day: 0, type: "email", action: "Referral confirmation sent to referring doctor" },
      { day: 0, type: "sms", action: "Patient appointment scheduling text sent" },
      { day: 1, type: "call", action: "Patient outreach call for scheduling" },
      { day: 2, type: "email", action: "Patient information packet emailed" },
      { day: 3, type: "sms", action: "Scheduling reminder if not yet booked" },
      { day: 5, type: "call", action: "Second outreach attempt if unresponsive" },
      { day: 7, type: "email", action: "Weekly status update to referring doctor" },
      { day: 14, type: "call", action: "Final outreach before referral aging alert" },
    ];
    if (referral.urgency === "emergency") {
      return [
        { day: 0, type: "call", action: "IMMEDIATE: Emergency triage call to patient" },
        { day: 0, type: "sms", action: "Emergency appointment confirmation" },
        { day: 0, type: "email", action: "Emergency referral acknowledgment to referring doctor" },
        { day: 1, type: "call", action: "Post-emergency follow-up" },
      ];
    }
    if (referral.urgency === "urgent") {
      return [
        { day: 0, type: "call", action: "Priority call to schedule within 48 hours" },
        { day: 0, type: "email", action: "Urgent referral confirmation to referring doctor" },
        { day: 1, type: "sms", action: "Appointment reminder and prep instructions" },
        { day: 3, type: "email", action: "Post-visit report to referring doctor" },
      ];
    }
    return baseSchedule;
  },

  predictReferralGrowth(data) {
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const baseGrowth = [42, 45, 51, 48, 55, 62, 58, 65, 70, 68, 74, 80];
    const aiOptimized = baseGrowth.map((v, i) => Math.round(v * (1 + 0.03 * i) * (1 + Math.random() * 0.1)));
    return months.map((m, i) => ({ month: m, current: baseGrowth[i], predicted: aiOptimized[i] }));
  },

  scoreDoctorRelationship(doctor) {
    let score = 0;
    score += Math.min(40, doctor.totalReferrals * 2);
    score += doctor.responseRate * 20;
    score += doctor.lastReferralDaysAgo < 30 ? 20 : doctor.lastReferralDaysAgo < 90 ? 10 : 0;
    score += doctor.satisfactionScore * 4;
    return Math.min(100, Math.round(score));
  },

  suggestOutreach(doctors) {
    return doctors
      .filter(d => d.lastReferralDaysAgo > 45 || d.totalReferrals < 5)
      .map(d => ({
        doctor: d,
        reason: d.lastReferralDaysAgo > 90 ? "At risk - no referrals in 90+ days" :
                d.lastReferralDaysAgo > 45 ? "Cooling off - schedule lunch & learn" :
                d.totalReferrals < 5 ? "Growth opportunity - new relationship" : "Nurture",
        suggestedAction: d.lastReferralDaysAgo > 90 ? "Personal call from Dr. Antipov" :
                         d.lastReferralDaysAgo > 45 ? "Send case study + lunch invitation" :
                         "Welcome package + office tour invitation",
        priority: d.lastReferralDaysAgo > 90 ? "high" : d.lastReferralDaysAgo > 45 ? "medium" : "low",
      }));
  },
};

// ==================== MOCK DATA ====================
const MOCK_REFERRING_DOCTORS = [
  { id: 1, name: "Dr. Michael Torres, DDS", practice: "Torres Family Dentistry", city: "Roseville", phone: "(916) 555-0201", email: "dr.torres@torresfamilydental.com", totalReferrals: 47, lastReferralDaysAgo: 5, responseRate: 0.95, satisfactionScore: 5, specialty: "General", tier: "platinum", monthlyAvg: 4.2, topProcedures: ["Wisdom Teeth", "Implants", "Extractions"] },
  { id: 2, name: "Dr. Sarah Chen, DDS", practice: "Chen Dental Group", city: "Rocklin", phone: "(916) 555-0202", email: "sarah@chendentalgroup.com", totalReferrals: 35, lastReferralDaysAgo: 12, responseRate: 0.88, satisfactionScore: 5, specialty: "General", tier: "gold", monthlyAvg: 3.1, topProcedures: ["Implants", "All-on-4", "Bone Grafting"] },
  { id: 3, name: "Dr. James Park, DMD", practice: "Park Orthodontics", city: "Folsom", phone: "(916) 555-0203", email: "james@parkortho.com", totalReferrals: 28, lastReferralDaysAgo: 8, responseRate: 0.92, satisfactionScore: 4, specialty: "Orthodontics", tier: "gold", monthlyAvg: 2.5, topProcedures: ["Expose & Bond", "Wisdom Teeth", "Jaw Surgery"] },
  { id: 4, name: "Dr. Lisa Patel, DDS", practice: "Patel Periodontics", city: "Sacramento", phone: "(916) 555-0204", email: "lisa@patelperio.com", totalReferrals: 22, lastReferralDaysAgo: 20, responseRate: 0.85, satisfactionScore: 5, specialty: "Periodontics", tier: "silver", monthlyAvg: 2.0, topProcedures: ["Implants", "Bone Grafting", "Extractions"] },
  { id: 5, name: "Dr. Robert Kim, DDS", practice: "Kim Family Dental", city: "Lincoln", phone: "(916) 555-0205", email: "robert@kimfamilydental.com", totalReferrals: 15, lastReferralDaysAgo: 35, responseRate: 0.78, satisfactionScore: 4, specialty: "General", tier: "silver", monthlyAvg: 1.3, topProcedures: ["Wisdom Teeth", "Extractions"] },
  { id: 6, name: "Dr. Amanda Wright, DDS", practice: "Wright Smile Dental", city: "Granite Bay", phone: "(916) 555-0206", email: "amanda@wrightsmile.com", totalReferrals: 8, lastReferralDaysAgo: 55, responseRate: 0.70, satisfactionScore: 4, specialty: "General", tier: "bronze", monthlyAvg: 0.8, topProcedures: ["Wisdom Teeth", "Implants"] },
  { id: 7, name: "Dr. David Nguyen, DMD", practice: "Nguyen Dental Care", city: "Citrus Heights", phone: "(916) 555-0207", email: "david@nguyendentalcare.com", totalReferrals: 5, lastReferralDaysAgo: 95, responseRate: 0.65, satisfactionScore: 3, specialty: "General", tier: "bronze", monthlyAvg: 0.4, topProcedures: ["Extractions"] },
  { id: 8, name: "Dr. Jennifer Adams, DDS", practice: "Adams Dental Studio", city: "Auburn", phone: "(530) 555-0208", email: "jennifer@adamsdentalstudio.com", totalReferrals: 3, lastReferralDaysAgo: 120, responseRate: 0.50, satisfactionScore: 3, specialty: "General", tier: "new", monthlyAvg: 0.2, topProcedures: ["Wisdom Teeth"] },
  { id: 9, name: "Dr. Kevin Brown, DDS", practice: "Brown Pediatric Dentistry", city: "Roseville", phone: "(916) 555-0209", email: "kevin@brownpediatric.com", totalReferrals: 19, lastReferralDaysAgo: 10, responseRate: 0.90, satisfactionScore: 5, specialty: "Pediatric", tier: "silver", monthlyAvg: 1.7, topProcedures: ["Expose & Bond", "Frenectomy", "Wisdom Teeth"] },
  { id: 10, name: "Dr. Maria Garcia, DDS", practice: "Garcia Dental Wellness", city: "Elk Grove", phone: "(916) 555-0210", email: "maria@garciadental.com", totalReferrals: 12, lastReferralDaysAgo: 42, responseRate: 0.75, satisfactionScore: 4, specialty: "General", tier: "bronze", monthlyAvg: 1.0, topProcedures: ["Implants", "Extractions", "Wisdom Teeth"] },
];

const MOCK_REFERRALS = [
  { id: "REF-2026-001", patientName: "John Martinez", procedure: "Wisdom Teeth Extraction", referringDoctor: "Dr. Michael Torres, DDS", status: "completed", date: "2026-03-28", urgency: "routine", scheduledDate: "2026-04-02", completedDate: "2026-04-02" },
  { id: "REF-2026-002", patientName: "Emily Watson", procedure: "Dental Implants", referringDoctor: "Dr. Sarah Chen, DDS", status: "scheduled", date: "2026-04-01", urgency: "routine", scheduledDate: "2026-04-10" },
  { id: "REF-2026-003", patientName: "David Lee", procedure: "Expose & Bond", referringDoctor: "Dr. James Park, DMD", status: "in-progress", date: "2026-04-03", urgency: "soon" },
  { id: "REF-2026-004", patientName: "Sarah Johnson", procedure: "All-on-4 Full Arch", referringDoctor: "Dr. Lisa Patel, DDS", status: "consultation", date: "2026-04-04", urgency: "routine", scheduledDate: "2026-04-08" },
  { id: "REF-2026-005", patientName: "Michael Brown", procedure: "Facial Trauma", referringDoctor: "Dr. Robert Kim, DDS", status: "completed", date: "2026-03-15", urgency: "emergency", scheduledDate: "2026-03-15", completedDate: "2026-03-15" },
  { id: "REF-2026-006", patientName: "Lisa Chen", procedure: "Tooth Extraction", referringDoctor: "Dr. Kevin Brown, DDS", status: "pending", date: "2026-04-05", urgency: "routine" },
  { id: "REF-2026-007", patientName: "James Wilson", procedure: "TMJ Treatment", referringDoctor: "Dr. Michael Torres, DDS", status: "scheduled", date: "2026-04-02", urgency: "soon", scheduledDate: "2026-04-09" },
  { id: "REF-2026-008", patientName: "Anna Petrova", procedure: "Bone Grafting / Sinus Lift", referringDoctor: "Dr. Sarah Chen, DDS", status: "pending", date: "2026-04-06", urgency: "routine" },
];

const TERRITORY_DATA = [
  { city: "Roseville", referrals: 85, doctors: 12, potential: 95, penetration: 68 },
  { city: "Rocklin", referrals: 52, doctors: 8, potential: 70, penetration: 55 },
  { city: "Sacramento", referrals: 45, doctors: 15, potential: 200, penetration: 18 },
  { city: "Folsom", referrals: 38, doctors: 7, potential: 65, penetration: 52 },
  { city: "Lincoln", referrals: 25, doctors: 4, potential: 45, penetration: 42 },
  { city: "Granite Bay", referrals: 18, doctors: 3, potential: 35, penetration: 38 },
  { city: "Citrus Heights", referrals: 15, doctors: 5, potential: 55, penetration: 22 },
  { city: "Auburn", referrals: 12, doctors: 3, potential: 40, penetration: 25 },
  { city: "Elk Grove", referrals: 10, doctors: 4, potential: 80, penetration: 10 },
  { city: "El Dorado Hills", referrals: 8, doctors: 2, potential: 30, penetration: 20 },
  { city: "Fair Oaks", referrals: 6, doctors: 2, potential: 35, penetration: 14 },
  { city: "Carmichael", referrals: 5, doctors: 2, potential: 40, penetration: 10 },
  { city: "Davis", referrals: 4, doctors: 3, potential: 50, penetration: 6 },
  { city: "Woodland", referrals: 2, doctors: 1, potential: 30, penetration: 5 },
  { city: "Rancho Cordova", referrals: 3, doctors: 1, potential: 45, penetration: 5 },
  { city: "West Sacramento", referrals: 1, doctors: 0, potential: 35, penetration: 2 },
  { city: "Reno, NV", referrals: 8, doctors: 2, potential: 90, penetration: 7 },
  { city: "Yuba City", referrals: 3, doctors: 1, potential: 25, penetration: 10 },
  { city: "Chico", referrals: 2, doctors: 1, potential: 35, penetration: 4 },
];

export default function ReferralAIApp() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <>
      <style>{REFERRAL_STYLES}</style>
      <div className="rai-app">
        <RaiHeader activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="rai-main">
          {activeTab === "dashboard" && <Dashboard />}
          {activeTab === "new-referral" && <SmartReferralForm />}
          {activeTab === "referrals" && <ReferralTracker />}
          {activeTab === "doctors" && <DoctorCRM />}
          {activeTab === "follow-ups" && <FollowUpEngine />}
          {activeTab === "analytics" && <AnalyticsDashboard />}
          {activeTab === "territory" && <TerritoryMap />}
          {activeTab === "ai-insights" && <AIInsights />}
        </main>
        <ChatbotWidget show={showChatbot} onToggle={() => setShowChatbot(!showChatbot)} />
      </div>
    </>
  );
}

// ==================== HEADER ====================
function RaiHeader({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: "\u25A6" },
    { id: "new-referral", label: "New Referral", icon: "+" },
    { id: "referrals", label: "Referrals", icon: "\u2726" },
    { id: "doctors", label: "Doctor CRM", icon: "\u263A" },
    { id: "follow-ups", label: "Follow-Ups", icon: "\u21BB" },
    { id: "analytics", label: "Analytics", icon: "\u2261" },
    { id: "territory", label: "Territory", icon: "\u25CB" },
    { id: "ai-insights", label: "AI Insights", icon: "\u2605" },
  ];

  return (
    <header className="rai-header">
      <div className="rai-header-top">
        <div className="rai-brand">
          <div className="rai-logo">G</div>
          <div>
            <h1>Galleria Oral Surgery</h1>
            <p>AI Referral Management Platform</p>
          </div>
        </div>
        <div className="rai-header-info">
          <span className="rai-live-badge">AI Active</span>
          <span className="rai-doctor-name">{PRACTICE.doctor}</span>
        </div>
      </div>
      <nav className="rai-nav">
        {tabs.map(t => (
          <button key={t.id} className={`rai-tab ${activeTab === t.id ? "active" : ""}`}
            onClick={() => setActiveTab(t.id)}>
            <span className="rai-tab-icon">{t.icon}</span>
            <span className="rai-tab-label">{t.label}</span>
          </button>
        ))}
      </nav>
    </header>
  );
}

// ==================== DASHBOARD ====================
function Dashboard() {
  const stats = [
    { label: "Active Referrals", value: "23", change: "+12%", color: "#3b82f6" },
    { label: "This Month", value: "67", change: "+18%", color: "#10b981" },
    { label: "Conversion Rate", value: "94%", change: "+3%", color: "#8b5cf6" },
    { label: "Avg. Schedule Time", value: "4.2h", change: "-22%", color: "#f59e0b" },
    { label: "Referring Doctors", value: "48", change: "+5", color: "#ec4899" },
    { label: "Patient Satisfaction", value: "4.9", change: "+0.1", color: "#14b8a6" },
  ];

  const recentActivity = [
    { time: "2 min ago", action: "AI scheduled Emily Watson for implant consultation on Apr 10", type: "schedule" },
    { time: "15 min ago", action: "Auto follow-up SMS sent to Lisa Chen for appointment booking", type: "followup" },
    { time: "1 hour ago", action: "Dr. Torres submitted new referral - James Wilson (TMJ)", type: "referral" },
    { time: "2 hours ago", action: "AI detected urgent case: swelling noted - escalated priority", type: "ai" },
    { time: "3 hours ago", action: "Post-op report auto-sent to Dr. Park for expose & bond case", type: "report" },
    { time: "5 hours ago", action: "AI outreach suggestion: Contact Dr. Nguyen - 95 days inactive", type: "ai" },
    { time: "Yesterday", action: "Monthly referral report generated and emailed to all partners", type: "report" },
  ];

  return (
    <div className="rai-dashboard">
      <div className="rai-page-header">
        <h2>Command Center</h2>
        <p>Real-time overview of your referral ecosystem powered by AI</p>
      </div>

      <div className="rai-stats-grid">
        {stats.map((s, i) => (
          <div className="rai-stat-card" key={i}>
            <div className="rai-stat-header">
              <span className="rai-stat-label">{s.label}</span>
              <span className="rai-stat-change" style={{ color: s.change.startsWith("-") && s.label === "Avg. Schedule Time" ? "#10b981" : s.change.startsWith("+") ? "#10b981" : "#ef4444" }}>{s.change}</span>
            </div>
            <div className="rai-stat-value" style={{ color: s.color }}>{s.value}</div>
            <div className="rai-stat-bar">
              <div className="rai-stat-bar-fill" style={{ width: `${60 + i * 6}%`, background: s.color }} />
            </div>
          </div>
        ))}
      </div>

      <div className="rai-dashboard-grid">
        <div className="rai-card">
          <h3>Urgent Actions Required</h3>
          <div className="rai-urgent-list">
            <div className="rai-urgent-item emergency">
              <span className="rai-urgent-badge">EMERGENCY</span>
              <div>
                <strong>Facial trauma case</strong> - Referred by Dr. Kim
                <p>Patient Michael Brown - jaw fracture, needs immediate evaluation</p>
              </div>
            </div>
            <div className="rai-urgent-item warning">
              <span className="rai-urgent-badge warn">FOLLOW-UP</span>
              <div>
                <strong>3 unscheduled referrals aging &gt; 48 hours</strong>
                <p>AI recommends immediate outreach calls</p>
              </div>
            </div>
            <div className="rai-urgent-item info">
              <span className="rai-urgent-badge info">AI INSIGHT</span>
              <div>
                <strong>Dr. Nguyen relationship at risk</strong>
                <p>No referrals in 95 days. AI suggests personal call from Dr. Antipov</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rai-card">
          <h3>Live Activity Feed</h3>
          <div className="rai-activity-feed">
            {recentActivity.map((a, i) => (
              <div className="rai-activity-item" key={i}>
                <span className={`rai-activity-dot ${a.type}`} />
                <div>
                  <p>{a.action}</p>
                  <span className="rai-activity-time">{a.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rai-dashboard-grid">
        <div className="rai-card">
          <h3>Referral Pipeline</h3>
          <div className="rai-pipeline">
            {[
              { stage: "New", count: 5, color: "#3b82f6" },
              { stage: "Contacted", count: 8, color: "#f59e0b" },
              { stage: "Scheduled", count: 12, color: "#8b5cf6" },
              { stage: "Consultation", count: 6, color: "#14b8a6" },
              { stage: "In Treatment", count: 15, color: "#10b981" },
              { stage: "Completed", count: 234, color: "#059669" },
            ].map((p, i) => (
              <div className="rai-pipeline-stage" key={i}>
                <div className="rai-pipeline-bar" style={{ height: `${Math.min(100, p.count * 2 + 20)}%`, background: p.color }} />
                <span className="rai-pipeline-count" style={{ color: p.color }}>{p.count}</span>
                <span className="rai-pipeline-label">{p.stage}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rai-card">
          <h3>Top Referring Doctors This Month</h3>
          <div className="rai-top-doctors">
            {MOCK_REFERRING_DOCTORS.slice(0, 5).map((d, i) => (
              <div className="rai-top-doctor" key={d.id}>
                <span className="rai-rank">#{i + 1}</span>
                <div className="rai-doctor-avatar">{d.name.split(" ")[1][0]}{d.name.split(" ")[2]?.[0] || ""}</div>
                <div className="rai-doctor-info">
                  <strong>{d.name}</strong>
                  <span>{d.practice} - {d.city}</span>
                </div>
                <div className="rai-doctor-stats">
                  <span className={`rai-tier-badge ${d.tier}`}>{d.tier}</span>
                  <span className="rai-ref-count">{d.totalReferrals} refs</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== SMART REFERRAL FORM ====================
function SmartReferralForm() {
  const [mode, setMode] = useState("ai"); // "ai" or "manual"
  const [aiText, setAiText] = useState("");
  const [aiResult, setAiResult] = useState(null);
  const [form, setForm] = useState({
    doctorName: "", practiceName: "", doctorPhone: "", doctorEmail: "", doctorNPI: "",
    patientName: "", patientDob: "", patientPhone: "", patientEmail: "", patientInsurance: "",
    procedures: [], urgency: "routine", notes: "", radiographs: false, medicalHistory: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1);

  const handleAiAnalyze = () => {
    if (!aiText.trim()) return;
    const result = AI_ENGINE.analyzeReferralText(aiText);
    setAiResult(result);
    setForm(f => ({
      ...f,
      procedures: result.procedures,
      urgency: result.urgency,
      notes: aiText,
    }));
  };

  const handleChange = (field) => (e) => {
    const val = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm(f => ({ ...f, [field]: val }));
  };

  const toggleProcedure = (proc) => {
    setForm(f => ({
      ...f,
      procedures: f.procedures.includes(proc)
        ? f.procedures.filter(p => p !== proc)
        : [...f.procedures, proc],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    const schedule = AI_ENGINE.generateFollowUpSchedule(form);
    return (
      <div className="rai-submitted">
        <div className="rai-success-card">
          <div className="rai-success-icon">&#10003;</div>
          <h2>Referral Submitted Successfully</h2>
          <p className="rai-ref-id">Reference: REF-2026-{String(Math.floor(Math.random()*900)+100).padStart(3,"0")}</p>
          <div className="rai-success-details">
            <div className="rai-success-row"><strong>Patient:</strong> {form.patientName || "N/A"}</div>
            <div className="rai-success-row"><strong>Procedure:</strong> {form.procedures.join(", ") || "N/A"}</div>
            <div className="rai-success-row"><strong>Urgency:</strong> <span className={`rai-urgency-tag ${form.urgency}`}>{form.urgency}</span></div>
            <div className="rai-success-row"><strong>Referring Doctor:</strong> {form.doctorName || "N/A"}</div>
          </div>
          <div className="rai-ai-schedule">
            <h3>AI-Generated Follow-Up Schedule</h3>
            <div className="rai-schedule-timeline">
              {schedule.map((s, i) => (
                <div className="rai-schedule-item" key={i}>
                  <span className={`rai-schedule-type ${s.type}`}>{s.type.toUpperCase()}</span>
                  <span className="rai-schedule-day">Day {s.day}</span>
                  <span className="rai-schedule-action">{s.action}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rai-success-actions">
            <button className="rai-btn primary" onClick={() => { setSubmitted(false); setForm({ doctorName: "", practiceName: "", doctorPhone: "", doctorEmail: "", doctorNPI: "", patientName: "", patientDob: "", patientPhone: "", patientEmail: "", patientInsurance: "", procedures: [], urgency: "routine", notes: "", radiographs: false, medicalHistory: "" }); setAiText(""); setAiResult(null); setStep(1); }}>Submit Another Referral</button>
            <button className="rai-btn secondary">Print Confirmation</button>
            <button className="rai-btn secondary">Email to Referring Doctor</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rai-new-referral">
      <div className="rai-page-header">
        <h2>AI-Powered Referral Submission</h2>
        <p>Use AI natural language processing or the structured form to submit a referral</p>
      </div>

      <div className="rai-mode-toggle">
        <button className={`rai-mode-btn ${mode === "ai" ? "active" : ""}`} onClick={() => setMode("ai")}>
          <span className="rai-mode-icon">&#9733;</span> AI Smart Entry
        </button>
        <button className={`rai-mode-btn ${mode === "manual" ? "active" : ""}`} onClick={() => setMode("manual")}>
          <span className="rai-mode-icon">&#9998;</span> Structured Form
        </button>
      </div>

      {mode === "ai" && (
        <div className="rai-ai-entry">
          <div className="rai-card">
            <h3>Describe the Referral in Natural Language</h3>
            <p className="rai-hint">Type or paste your referral notes. AI will automatically extract patient info, procedure, urgency, and medical alerts.</p>
            <textarea
              className="rai-ai-textarea"
              value={aiText}
              onChange={(e) => setAiText(e.target.value)}
              placeholder="Example: Dr. Torres from Torres Family Dentistry is referring patient John Martinez, DOB 05/15/1990, for wisdom teeth extraction. Patient has all four third molars impacted, experiencing pain and swelling on the lower right. Patient is on blood thinners (Warfarin). Needs to be seen soon. Phone: (916) 555-1234"
              rows={6}
            />
            <button className="rai-btn primary" onClick={handleAiAnalyze} style={{ marginTop: 12 }}>
              Analyze with AI
            </button>
          </div>

          {aiResult && (
            <div className="rai-ai-results">
              <div className="rai-card ai-glow">
                <div className="rai-ai-header">
                  <h3>AI Analysis Results</h3>
                  <span className="rai-confidence">Confidence: {aiResult.confidence}%</span>
                </div>
                
                <div className="rai-ai-grid">
                  <div className="rai-ai-section">
                    <h4>Detected Procedures</h4>
                    <div className="rai-tag-group">
                      {aiResult.procedures.length > 0 ? aiResult.procedures.map(p => (
                        <span className="rai-ai-tag procedure" key={p}>{p}</span>
                      )) : <span className="rai-ai-tag empty">No procedures detected - please specify</span>}
                    </div>
                  </div>
                  
                  <div className="rai-ai-section">
                    <h4>Urgency Assessment</h4>
                    <span className={`rai-urgency-tag ${aiResult.urgency}`}>
                      {URGENCY_LEVELS.find(u => u.value === aiResult.urgency)?.label || "Routine"}
                    </span>
                    <p className="rai-hint">{URGENCY_LEVELS.find(u => u.value === aiResult.urgency)?.time}</p>
                  </div>
                  
                  {aiResult.aiNotes.length > 0 && (
                    <div className="rai-ai-section full">
                      <h4>AI Clinical Alerts</h4>
                      <div className="rai-ai-alerts">
                        {aiResult.aiNotes.map((note, i) => (
                          <div className="rai-ai-alert" key={i}>
                            <span className="rai-alert-icon">&#9888;</span>
                            {note}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="rai-ai-actions">
                  <button className="rai-btn primary" onClick={() => setMode("manual")}>
                    Review & Complete Referral
                  </button>
                  <button className="rai-btn secondary" onClick={() => { setAiResult(null); setAiText(""); }}>
                    Start Over
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {mode === "manual" && (
        <form className="rai-structured-form" onSubmit={handleSubmit}>
          <div className="rai-step-indicator">
            {["Referring Doctor", "Patient Info", "Clinical Details", "Review & Submit"].map((label, i) => (
              <div className={`rai-step ${step === i + 1 ? "active" : step > i + 1 ? "done" : ""}`} key={i} onClick={() => setStep(i + 1)}>
                <span className="rai-step-num">{step > i + 1 ? "\u2713" : i + 1}</span>
                <span className="rai-step-label">{label}</span>
              </div>
            ))}
          </div>

          {step === 1 && (
            <div className="rai-card">
              <h3>Referring Doctor Information</h3>
              <div className="rai-form-grid">
                <div className="rai-field">
                  <label>Doctor Name *</label>
                  <input value={form.doctorName} onChange={handleChange("doctorName")} placeholder="Dr. Jane Smith, DDS" />
                </div>
                <div className="rai-field">
                  <label>Practice Name *</label>
                  <input value={form.practiceName} onChange={handleChange("practiceName")} placeholder="Smith Family Dentistry" />
                </div>
                <div className="rai-field">
                  <label>Office Phone *</label>
                  <input type="tel" value={form.doctorPhone} onChange={handleChange("doctorPhone")} placeholder="(916) 555-0000" />
                </div>
                <div className="rai-field">
                  <label>Office Email *</label>
                  <input type="email" value={form.doctorEmail} onChange={handleChange("doctorEmail")} placeholder="office@example.com" />
                </div>
                <div className="rai-field">
                  <label>NPI Number</label>
                  <input value={form.doctorNPI} onChange={handleChange("doctorNPI")} placeholder="Optional" />
                </div>
              </div>
              <div className="rai-known-doctors">
                <h4>Quick Select - Known Referring Doctors</h4>
                <div className="rai-doctor-chips">
                  {MOCK_REFERRING_DOCTORS.slice(0, 6).map(d => (
                    <button type="button" className="rai-doctor-chip" key={d.id} onClick={() => setForm(f => ({ ...f, doctorName: d.name, practiceName: d.practice, doctorPhone: d.phone, doctorEmail: d.email }))}>
                      <span className={`rai-tier-dot ${d.tier}`} /> {d.name.replace("Dr. ", "")}
                    </button>
                  ))}
                </div>
              </div>
              <button type="button" className="rai-btn primary" onClick={() => setStep(2)}>Continue to Patient Info</button>
            </div>
          )}

          {step === 2 && (
            <div className="rai-card">
              <h3>Patient Information</h3>
              <div className="rai-form-grid">
                <div className="rai-field">
                  <label>Patient Full Name *</label>
                  <input value={form.patientName} onChange={handleChange("patientName")} placeholder="John Smith" />
                </div>
                <div className="rai-field">
                  <label>Date of Birth</label>
                  <input type="date" value={form.patientDob} onChange={handleChange("patientDob")} />
                </div>
                <div className="rai-field">
                  <label>Patient Phone</label>
                  <input type="tel" value={form.patientPhone} onChange={handleChange("patientPhone")} placeholder="(916) 555-0000" />
                </div>
                <div className="rai-field">
                  <label>Patient Email</label>
                  <input type="email" value={form.patientEmail} onChange={handleChange("patientEmail")} placeholder="patient@email.com" />
                </div>
                <div className="rai-field full">
                  <label>Insurance Information</label>
                  <input value={form.patientInsurance} onChange={handleChange("patientInsurance")} placeholder="Insurance carrier and member ID" />
                </div>
              </div>
              <div className="rai-step-nav">
                <button type="button" className="rai-btn secondary" onClick={() => setStep(1)}>Back</button>
                <button type="button" className="rai-btn primary" onClick={() => setStep(3)}>Continue to Clinical Details</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="rai-card">
              <h3>Clinical Details</h3>
              
              <div className="rai-field full">
                <label>Reason for Referral *</label>
                <div className="rai-procedure-grid">
                  {REFERRAL_REASONS.map(proc => (
                    <button type="button" key={proc}
                      className={`rai-proc-btn ${form.procedures.includes(proc) ? "selected" : ""}`}
                      onClick={() => toggleProcedure(proc)}>
                      {proc}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rai-field full">
                <label>Urgency Level</label>
                <div className="rai-urgency-grid">
                  {URGENCY_LEVELS.map(u => (
                    <button type="button" key={u.value}
                      className={`rai-urgency-btn ${form.urgency === u.value ? "selected" : ""}`}
                      style={{ "--urg-color": u.color }}
                      onClick={() => setForm(f => ({ ...f, urgency: u.value }))}>
                      <strong>{u.label}</strong>
                      <span>{u.time}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="rai-form-grid">
                <div className="rai-field full">
                  <label>Clinical Notes</label>
                  <textarea value={form.notes} onChange={handleChange("notes")} rows={4} placeholder="Include relevant clinical findings, radiograph details, medications, allergies..." />
                </div>
                <div className="rai-field full">
                  <label>Relevant Medical History</label>
                  <textarea value={form.medicalHistory} onChange={handleChange("medicalHistory")} rows={3} placeholder="Medications, allergies, medical conditions relevant to surgery..." />
                </div>
                <div className="rai-field full">
                  <label className="rai-checkbox-label">
                    <input type="checkbox" checked={form.radiographs} onChange={handleChange("radiographs")} />
                    Radiographs / imaging attached or will be sent separately
                  </label>
                  <p className="rai-hint">Send to {PRACTICE.referralEmail} or via your PMS</p>
                </div>
              </div>
              <div className="rai-step-nav">
                <button type="button" className="rai-btn secondary" onClick={() => setStep(2)}>Back</button>
                <button type="button" className="rai-btn primary" onClick={() => setStep(4)}>Review Referral</button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="rai-card">
              <h3>Review & Submit</h3>
              <div className="rai-review">
                <div className="rai-review-section">
                  <h4>Referring Doctor</h4>
                  <p><strong>{form.doctorName || "Not specified"}</strong></p>
                  <p>{form.practiceName}</p>
                  <p>{form.doctorPhone} | {form.doctorEmail}</p>
                </div>
                <div className="rai-review-section">
                  <h4>Patient</h4>
                  <p><strong>{form.patientName || "Not specified"}</strong></p>
                  <p>DOB: {form.patientDob || "N/A"} | Phone: {form.patientPhone || "N/A"}</p>
                  <p>Insurance: {form.patientInsurance || "N/A"}</p>
                </div>
                <div className="rai-review-section">
                  <h4>Clinical</h4>
                  <p><strong>Procedures:</strong> {form.procedures.join(", ") || "Not specified"}</p>
                  <p><strong>Urgency:</strong> <span className={`rai-urgency-tag ${form.urgency}`}>{form.urgency}</span></p>
                  <p><strong>Notes:</strong> {form.notes || "None"}</p>
                  <p><strong>Medical History:</strong> {form.medicalHistory || "None"}</p>
                  <p><strong>Radiographs:</strong> {form.radiographs ? "Will be provided" : "Not included"}</p>
                </div>
              </div>
              <div className="rai-step-nav">
                <button type="button" className="rai-btn secondary" onClick={() => setStep(3)}>Edit Details</button>
                <button type="submit" className="rai-btn primary large">Submit Referral</button>
              </div>
            </div>
          )}
        </form>
      )}
    </div>
  );
}

// ==================== REFERRAL TRACKER ====================
function ReferralTracker() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = MOCK_REFERRALS.filter(r => {
    if (filter !== "all" && r.status !== filter) return false;
    if (search && !r.patientName.toLowerCase().includes(search.toLowerCase()) && !r.referringDoctor.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const statusColors = { pending: "#f59e0b", scheduled: "#3b82f6", consultation: "#8b5cf6", "in-progress": "#14b8a6", completed: "#10b981" };

  return (
    <div className="rai-tracker">
      <div className="rai-page-header">
        <h2>Referral Tracker</h2>
        <p>Track every referral from submission to completion with AI-powered status updates</p>
      </div>

      <div className="rai-card">
        <div className="rai-tracker-controls">
          <input className="rai-search" placeholder="Search patients or doctors..." value={search} onChange={(e) => setSearch(e.target.value)} />
          <div className="rai-filter-tabs">
            {["all", "pending", "scheduled", "consultation", "in-progress", "completed"].map(f => (
              <button key={f} className={`rai-filter-btn ${filter === f ? "active" : ""}`} onClick={() => setFilter(f)}>
                {f === "all" ? "All" : f.charAt(0).toUpperCase() + f.slice(1).replace("-", " ")}
              </button>
            ))}
          </div>
        </div>

        <div className="rai-table-wrap">
          <table className="rai-table">
            <thead>
              <tr>
                <th>Ref #</th>
                <th>Patient</th>
                <th>Procedure</th>
                <th>Referring Doctor</th>
                <th>Status</th>
                <th>Urgency</th>
                <th>Date</th>
                <th>Scheduled</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(r => (
                <tr key={r.id}>
                  <td className="rai-ref-num">{r.id}</td>
                  <td><strong>{r.patientName}</strong></td>
                  <td>{r.procedure}</td>
                  <td>{r.referringDoctor}</td>
                  <td><span className="rai-status-badge" style={{ background: `${statusColors[r.status]}22`, color: statusColors[r.status], border: `1px solid ${statusColors[r.status]}44` }}>{r.status}</span></td>
                  <td><span className={`rai-urgency-tag ${r.urgency}`}>{r.urgency}</span></td>
                  <td>{r.date}</td>
                  <td>{r.scheduledDate || "---"}</td>
                  <td>
                    <div className="rai-action-btns">
                      <button className="rai-action-btn" title="View details">&#128065;</button>
                      <button className="rai-action-btn" title="Send follow-up">&#9993;</button>
                      <button className="rai-action-btn" title="Call patient">&#128222;</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ==================== DOCTOR CRM ====================
function DoctorCRM() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [view, setView] = useState("grid");

  const outreach = AI_ENGINE.suggestOutreach(MOCK_REFERRING_DOCTORS);

  return (
    <div className="rai-crm">
      <div className="rai-page-header">
        <h2>Referring Doctor CRM</h2>
        <p>AI-powered relationship management to grow and nurture your referral network</p>
      </div>

      {!selectedDoctor ? (
        <>
          <div className="rai-card">
            <div className="rai-crm-summary">
              <div className="rai-crm-stat"><strong>48</strong><span>Total Referring Doctors</span></div>
              <div className="rai-crm-stat"><strong>5</strong><span>Platinum Partners</span></div>
              <div className="rai-crm-stat"><strong>12</strong><span>Gold Partners</span></div>
              <div className="rai-crm-stat"><strong>8</strong><span>Need Outreach</span></div>
              <div className="rai-crm-stat"><strong>3</strong><span>At Risk</span></div>
            </div>
          </div>

          {outreach.length > 0 && (
            <div className="rai-card ai-glow">
              <h3>AI Outreach Recommendations</h3>
              <div className="rai-outreach-list">
                {outreach.map((o, i) => (
                  <div className={`rai-outreach-item ${o.priority}`} key={i}>
                    <div className="rai-outreach-priority">{o.priority.toUpperCase()}</div>
                    <div className="rai-outreach-content">
                      <strong>{o.doctor.name}</strong> - {o.doctor.practice}, {o.doctor.city}
                      <p className="rai-outreach-reason">{o.reason}</p>
                      <p className="rai-outreach-action">Suggested: {o.suggestedAction}</p>
                    </div>
                    <button className="rai-btn small primary">Take Action</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="rai-card">
            <h3>All Referring Doctors</h3>
            <div className="rai-doctors-grid">
              {MOCK_REFERRING_DOCTORS.map(d => {
                const score = AI_ENGINE.scoreDoctorRelationship(d);
                return (
                  <div className="rai-doctor-card" key={d.id} onClick={() => setSelectedDoctor(d)}>
                    <div className="rai-doctor-card-header">
                      <div className="rai-doctor-avatar large">{d.name.split(" ")[1][0]}{d.name.split(" ")[2]?.[0] || ""}</div>
                      <span className={`rai-tier-badge ${d.tier}`}>{d.tier}</span>
                    </div>
                    <h4>{d.name}</h4>
                    <p>{d.practice}</p>
                    <p className="rai-hint">{d.city} | {d.specialty}</p>
                    <div className="rai-doctor-card-stats">
                      <div><strong>{d.totalReferrals}</strong><span>Referrals</span></div>
                      <div><strong>{d.monthlyAvg}</strong><span>Monthly Avg</span></div>
                      <div><strong>{score}%</strong><span>Health Score</span></div>
                    </div>
                    <div className="rai-health-bar">
                      <div className="rai-health-fill" style={{ width: `${score}%`, background: score > 70 ? "#10b981" : score > 40 ? "#f59e0b" : "#ef4444" }} />
                    </div>
                    {d.lastReferralDaysAgo > 60 && <span className="rai-risk-badge">At Risk</span>}
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <div className="rai-doctor-detail">
          <button className="rai-btn secondary" onClick={() => setSelectedDoctor(null)} style={{ marginBottom: 16 }}>Back to All Doctors</button>
          <div className="rai-card">
            <div className="rai-doctor-profile">
              <div className="rai-doctor-avatar xlarge">{selectedDoctor.name.split(" ")[1][0]}{selectedDoctor.name.split(" ")[2]?.[0] || ""}</div>
              <div>
                <h2>{selectedDoctor.name}</h2>
                <p>{selectedDoctor.practice} | {selectedDoctor.city}</p>
                <p>{selectedDoctor.phone} | {selectedDoctor.email}</p>
                <span className={`rai-tier-badge ${selectedDoctor.tier}`}>{selectedDoctor.tier} Partner</span>
              </div>
            </div>
          </div>
          <div className="rai-detail-grid">
            <div className="rai-card">
              <h3>Relationship Metrics</h3>
              <div className="rai-metric"><span>Total Referrals</span><strong>{selectedDoctor.totalReferrals}</strong></div>
              <div className="rai-metric"><span>Monthly Average</span><strong>{selectedDoctor.monthlyAvg}</strong></div>
              <div className="rai-metric"><span>Response Rate</span><strong>{Math.round(selectedDoctor.responseRate * 100)}%</strong></div>
              <div className="rai-metric"><span>Satisfaction</span><strong>{"&#9733;".repeat(selectedDoctor.satisfactionScore)}</strong></div>
              <div className="rai-metric"><span>Last Referral</span><strong>{selectedDoctor.lastReferralDaysAgo} days ago</strong></div>
              <div className="rai-metric"><span>Health Score</span><strong>{AI_ENGINE.scoreDoctorRelationship(selectedDoctor)}%</strong></div>
            </div>
            <div className="rai-card">
              <h3>Top Procedures Referred</h3>
              {selectedDoctor.topProcedures.map((p, i) => (
                <div className="rai-proc-bar" key={i}>
                  <span>{p}</span>
                  <div className="rai-proc-bar-bg"><div className="rai-proc-bar-fill" style={{ width: `${90 - i * 25}%` }} /></div>
                </div>
              ))}
              <h3 style={{ marginTop: 24 }}>AI Recommended Actions</h3>
              <div className="rai-ai-rec">
                <p>Based on referral patterns, consider sending Dr. {selectedDoctor.name.split(" ")[1]} a case study on {selectedDoctor.topProcedures[0]} outcomes.</p>
                <button className="rai-btn small primary">Generate Personalized Report</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ==================== FOLLOW-UP ENGINE ====================
function FollowUpEngine() {
  const [selectedSequence, setSelectedSequence] = useState(null);

  const sequences = [
    { id: 1, name: "New Referral Welcome", triggers: "On new referral received", steps: 8, active: true, enrolled: 23, converted: 19 },
    { id: 2, name: "No-Show Recovery", triggers: "Patient misses appointment", steps: 5, active: true, enrolled: 4, converted: 3 },
    { id: 3, name: "Post-Op Follow-Up", triggers: "After procedure completion", steps: 6, active: true, enrolled: 15, converted: 15 },
    { id: 4, name: "Implant Nurture", triggers: "Implant consultation completed", steps: 10, active: true, enrolled: 8, converted: 5 },
    { id: 5, name: "Referring Doctor Check-In", triggers: "Every 30 days per doctor", steps: 4, active: true, enrolled: 48, converted: 42 },
    { id: 6, name: "Inactive Doctor Re-Engagement", triggers: "No referral in 60+ days", steps: 6, active: true, enrolled: 5, converted: 2 },
    { id: 7, name: "Review Request", triggers: "7 days post procedure", steps: 3, active: true, enrolled: 12, converted: 9 },
    { id: 8, name: "Annual Recall", triggers: "12 months since last visit", steps: 4, active: true, enrolled: 45, converted: 28 },
  ];

  const pendingFollowUps = [
    { patient: "Lisa Chen", type: "call", action: "Initial outreach call for scheduling", due: "Today", referral: "REF-2026-006", priority: "high" },
    { patient: "Anna Petrova", type: "sms", action: "Appointment scheduling text", due: "Today", referral: "REF-2026-008", priority: "high" },
    { patient: "Emily Watson", type: "email", action: "Pre-appointment information packet", due: "Tomorrow", referral: "REF-2026-002", priority: "medium" },
    { patient: "David Lee", type: "call", action: "Treatment plan follow-up", due: "Tomorrow", referral: "REF-2026-003", priority: "medium" },
    { patient: "James Wilson", type: "email", action: "Appointment reminder + directions", due: "Apr 8", referral: "REF-2026-007", priority: "low" },
  ];

  return (
    <div className="rai-followup">
      <div className="rai-page-header">
        <h2>AI Follow-Up Engine</h2>
        <p>Automated multi-channel follow-up sequences that never let a referral fall through the cracks</p>
      </div>

      <div className="rai-stats-grid small">
        {[
          { label: "Active Sequences", value: "8", color: "#3b82f6" },
          { label: "Patients Enrolled", value: "160", color: "#10b981" },
          { label: "Follow-Ups Today", value: "12", color: "#f59e0b" },
          { label: "Conversion Rate", value: "87%", color: "#8b5cf6" },
        ].map((s, i) => (
          <div className="rai-stat-card small" key={i}>
            <span className="rai-stat-label">{s.label}</span>
            <div className="rai-stat-value" style={{ color: s.color }}>{s.value}</div>
          </div>
        ))}
      </div>

      <div className="rai-card">
        <h3>Pending Follow-Ups - Action Required</h3>
        <div className="rai-followup-list">
          {pendingFollowUps.map((f, i) => (
            <div className={`rai-followup-item ${f.priority}`} key={i}>
              <span className={`rai-followup-type ${f.type}`}>{f.type.toUpperCase()}</span>
              <div className="rai-followup-content">
                <strong>{f.patient}</strong> - {f.action}
                <p>{f.referral} | Due: {f.due}</p>
              </div>
              <div className="rai-followup-actions">
                <button className="rai-btn small primary">Complete</button>
                <button className="rai-btn small secondary">Snooze</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rai-card">
        <h3>Automation Sequences</h3>
        <p className="rai-hint">AI-powered follow-up sequences run automatically across email, SMS, and phone channels</p>
        <div className="rai-sequences-grid">
          {sequences.map(s => (
            <div className="rai-sequence-card" key={s.id}>
              <div className="rai-sequence-header">
                <h4>{s.name}</h4>
                <span className={`rai-sequence-status ${s.active ? "active" : ""}`}>{s.active ? "Active" : "Paused"}</span>
              </div>
              <p className="rai-hint">Trigger: {s.triggers}</p>
              <div className="rai-sequence-stats">
                <div><strong>{s.steps}</strong><span>Steps</span></div>
                <div><strong>{s.enrolled}</strong><span>Enrolled</span></div>
                <div><strong>{s.converted}</strong><span>Converted</span></div>
                <div><strong>{s.enrolled > 0 ? Math.round(s.converted / s.enrolled * 100) : 0}%</strong><span>Rate</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ==================== ANALYTICS DASHBOARD ====================
function AnalyticsDashboard() {
  const growthData = AI_ENGINE.predictReferralGrowth();

  const procedureBreakdown = [
    { name: "Wisdom Teeth", count: 89, pct: 28, revenue: 156000 },
    { name: "Dental Implants", count: 67, pct: 21, revenue: 268000 },
    { name: "All-on-4", count: 23, pct: 7, revenue: 575000 },
    { name: "Extractions", count: 52, pct: 16, revenue: 78000 },
    { name: "Bone Grafting", count: 35, pct: 11, revenue: 105000 },
    { name: "Expose & Bond", count: 28, pct: 9, revenue: 56000 },
    { name: "Other", count: 25, pct: 8, revenue: 62500 },
  ];

  return (
    <div className="rai-analytics">
      <div className="rai-page-header">
        <h2>Referral Analytics</h2>
        <p>Data-driven insights to grow your referral base with AI-powered predictions</p>
      </div>

      <div className="rai-stats-grid">
        {[
          { label: "Total Referrals YTD", value: "319", change: "+24% vs last year", color: "#3b82f6" },
          { label: "Estimated Revenue", value: "$1.3M", change: "+31% vs last year", color: "#10b981" },
          { label: "New Doctors Added", value: "12", change: "This quarter", color: "#8b5cf6" },
          { label: "Avg. Referral Value", value: "$4,075", change: "+8% vs last year", color: "#f59e0b" },
          { label: "Patient Conversion", value: "94%", change: "+3% vs last year", color: "#14b8a6" },
          { label: "Avg. Days to Schedule", value: "1.8", change: "-40% vs last year", color: "#ec4899" },
        ].map((s, i) => (
          <div className="rai-stat-card" key={i}>
            <span className="rai-stat-label">{s.label}</span>
            <div className="rai-stat-value" style={{ color: s.color }}>{s.value}</div>
            <span className="rai-stat-change" style={{ color: "#10b981" }}>{s.change}</span>
          </div>
        ))}
      </div>

      <div className="rai-dashboard-grid">
        <div className="rai-card">
          <h3>Referral Growth - AI Forecast</h3>
          <div className="rai-chart-area">
            <div className="rai-bar-chart">
              {growthData.map((d, i) => (
                <div className="rai-bar-group" key={i}>
                  <div className="rai-bar-container">
                    <div className="rai-bar current" style={{ height: `${d.current}%` }} title={`Current: ${d.current}`} />
                    <div className="rai-bar predicted" style={{ height: `${d.predicted}%` }} title={`AI Predicted: ${d.predicted}`} />
                  </div>
                  <span className="rai-bar-label">{d.month}</span>
                </div>
              ))}
            </div>
            <div className="rai-chart-legend">
              <span><i style={{ background: "#3b82f6" }} /> Current Trajectory</span>
              <span><i style={{ background: "#10b981" }} /> AI-Optimized Prediction</span>
            </div>
          </div>
        </div>

        <div className="rai-card">
          <h3>Procedure Breakdown</h3>
          <div className="rai-procedure-breakdown">
            {procedureBreakdown.map((p, i) => (
              <div className="rai-proc-row" key={i}>
                <div className="rai-proc-info">
                  <strong>{p.name}</strong>
                  <span>{p.count} referrals</span>
                </div>
                <div className="rai-proc-bar-bg">
                  <div className="rai-proc-bar-fill" style={{ width: `${p.pct * 3}%` }} />
                </div>
                <span className="rai-proc-revenue">${(p.revenue / 1000).toFixed(0)}K</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rai-card">
        <h3>Conversion Funnel</h3>
        <div className="rai-funnel">
          {[
            { stage: "Referrals Received", count: 319, pct: 100 },
            { stage: "Patient Contacted", count: 312, pct: 97.8 },
            { stage: "Appointment Scheduled", count: 305, pct: 95.6 },
            { stage: "Consultation Attended", count: 298, pct: 93.4 },
            { stage: "Treatment Accepted", count: 285, pct: 89.3 },
            { stage: "Treatment Completed", count: 275, pct: 86.2 },
            { stage: "Post-Op Report Sent", count: 275, pct: 86.2 },
          ].map((f, i) => (
            <div className="rai-funnel-step" key={i}>
              <div className="rai-funnel-bar" style={{ width: `${f.pct}%` }}>
                <span className="rai-funnel-label">{f.stage}</span>
                <span className="rai-funnel-count">{f.count} ({f.pct}%)</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ==================== TERRITORY MAP ====================
function TerritoryMap() {
  const sorted = [...TERRITORY_DATA].sort((a, b) => b.referrals - a.referrals);
  const maxReferrals = Math.max(...sorted.map(t => t.referrals));

  return (
    <div className="rai-territory">
      <div className="rai-page-header">
        <h2>Territory Growth Map</h2>
        <p>Identify untapped markets, track geographic penetration, and plan expansion with AI</p>
      </div>

      <div className="rai-stats-grid small">
        {[
          { label: "Markets Active", value: String(TERRITORY_DATA.filter(t => t.referrals > 0).length), color: "#3b82f6" },
          { label: "Untapped Markets", value: String(TERRITORY_DATA.filter(t => t.penetration < 10).length), color: "#ef4444" },
          { label: "Total Territory Potential", value: "1,100+", color: "#10b981" },
          { label: "Overall Penetration", value: "28%", color: "#f59e0b" },
        ].map((s, i) => (
          <div className="rai-stat-card small" key={i}>
            <span className="rai-stat-label">{s.label}</span>
            <div className="rai-stat-value" style={{ color: s.color }}>{s.value}</div>
          </div>
        ))}
      </div>

      <div className="rai-dashboard-grid">
        <div className="rai-card">
          <h3>Market Penetration by City</h3>
          <div className="rai-territory-list">
            {sorted.map((t, i) => (
              <div className="rai-territory-row" key={i}>
                <div className="rai-territory-info">
                  <strong>{t.city}</strong>
                  <span>{t.doctors} referring doctors | {t.referrals} referrals</span>
                </div>
                <div className="rai-territory-bar-wrap">
                  <div className="rai-territory-bar">
                    <div className="rai-territory-fill current" style={{ width: `${t.penetration}%` }} />
                    <div className="rai-territory-fill potential" style={{ width: `${Math.min(100, t.penetration + 30)}%`, opacity: 0.3 }} />
                  </div>
                  <span className="rai-territory-pct">{t.penetration}%</span>
                </div>
                <span className="rai-territory-potential">Potential: {t.potential}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rai-card">
          <h3>AI Growth Opportunities</h3>
          <div className="rai-opportunities">
            {[
              { city: "Sacramento", opportunity: "Massive untapped market", action: "Launch targeted outreach to 185 general dentists", impact: "Could add 50+ referrals/month", priority: "critical" },
              { city: "Elk Grove", opportunity: "Growing community, low penetration", action: "Host CE dinner for local dentists", impact: "Potential 20+ new referral sources", priority: "high" },
              { city: "Reno, NV", opportunity: "Cross-state referral corridor", action: "Partner with Reno dental societies", impact: "Capture NV patients seeking CA specialists", priority: "high" },
              { city: "Davis / Woodland", opportunity: "University town with unmet need", action: "Connect with UC Davis dental clinics", impact: "Student + faculty referral pipeline", priority: "medium" },
              { city: "Citrus Heights / Carmichael", opportunity: "Proximity advantage underutilized", action: "Direct mail campaign to 45 practices", impact: "15-20 new referring doctors possible", priority: "medium" },
              { city: "West Sacramento", opportunity: "Zero current referral sources", action: "Identify top 10 practices for outreach", impact: "New territory establishment", priority: "medium" },
              { city: "Chico / Redding", opportunity: "Rural areas lack OMS access", action: "Telemedicine consultation program", impact: "Serve underserved Northern CA communities", priority: "low" },
            ].map((o, i) => (
              <div className={`rai-opportunity-card ${o.priority}`} key={i}>
                <div className="rai-opp-header">
                  <strong>{o.city}</strong>
                  <span className={`rai-opp-priority ${o.priority}`}>{o.priority}</span>
                </div>
                <p className="rai-opp-desc">{o.opportunity}</p>
                <p className="rai-opp-action"><strong>Action:</strong> {o.action}</p>
                <p className="rai-opp-impact"><strong>Impact:</strong> {o.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== AI INSIGHTS ====================
function AIInsights() {
  const insights = [
    { category: "Growth", title: "Implant referrals trending up 31%", detail: "Dental implant referrals have increased 31% quarter-over-quarter. Dr. Chen and Dr. Patel are driving most of the growth. AI recommends creating an implant-specific CE event to attract more periodontists and general dentists.", impact: "high", actionable: true },
    { category: "Risk", title: "3 referring doctors showing disengagement", detail: "Dr. Nguyen (95 days), Dr. Adams (120 days), and Dr. Wright (55 days) have shown declining referral activity. AI recommends a personalized re-engagement campaign for each with specific case studies matching their referral history.", impact: "high", actionable: true },
    { category: "Revenue", title: "All-on-4 cases generating 44% of revenue", detail: "Despite being only 7% of referral volume, All-on-4 cases generate 44% of revenue ($575K YTD). AI recommends increasing All-on-4 marketing to referring doctors, especially those currently referring only for extractions.", impact: "high", actionable: true },
    { category: "Operations", title: "Average scheduling time decreased to 4.2 hours", detail: "AI-powered automated outreach has reduced the average time from referral receipt to scheduled appointment by 40%. Emergency cases are now scheduled within 15 minutes on average.", impact: "medium", actionable: false },
    { category: "Satisfaction", title: "Patient satisfaction at all-time high of 4.9/5", detail: "Post-procedure surveys show 4.9/5.0 average satisfaction. Key drivers: 1) Same-day communication with referring doctor, 2) Seamless scheduling experience, 3) Follow-up care quality.", impact: "medium", actionable: false },
    { category: "Prediction", title: "Q2 projected to exceed 250 referrals", detail: "Based on current growth trends, seasonal patterns, and planned outreach campaigns, AI predicts Q2 2026 will see 250-270 referrals, a 22% increase over Q1. Key growth drivers: Sacramento market expansion and pediatric referral increase.", impact: "high", actionable: false },
    { category: "Competitive", title: "Market share opportunity in Folsom-EDH corridor", detail: "Analysis of referral patterns shows an underserved corridor between Folsom and El Dorado Hills with 15+ dental practices currently referring to competing OMS. AI recommends targeted outreach with competitive advantages (3D imaging, same-day scheduling, PRF therapy).", impact: "high", actionable: true },
    { category: "Innovation", title: "Telemedicine referral pathway potential", detail: "12% of referral inquiries come from 50+ miles away. Implementing a telemedicine initial consultation could capture patients from Reno, Chico, Redding, and rural NorCal who currently travel for consultations. Could add 8-12 referrals monthly.", impact: "medium", actionable: true },
  ];

  return (
    <div className="rai-insights">
      <div className="rai-page-header">
        <h2>AI Insights & Predictions</h2>
        <p>Machine learning-powered analysis of your referral ecosystem with actionable recommendations</p>
      </div>

      <div className="rai-card ai-glow">
        <div className="rai-ai-summary">
          <div className="rai-ai-brain">AI</div>
          <div>
            <h3>AI Executive Summary</h3>
            <p>Your referral network is in strong health with 94% conversion and 24% YoY growth. Three priority areas need attention: <strong>1)</strong> Re-engage 3 at-risk referring doctors before relationships are lost, <strong>2)</strong> Expand Sacramento market penetration (currently only 18% of potential), <strong>3)</strong> Increase All-on-4 awareness among referring doctors to boost high-value referrals. Implementing these three actions could add an estimated $200K-$350K in annual revenue.</p>
          </div>
        </div>
      </div>

      <div className="rai-insights-grid">
        {insights.map((insight, i) => (
          <div className={`rai-insight-card ${insight.impact}`} key={i}>
            <div className="rai-insight-header">
              <span className={`rai-insight-category ${insight.category.toLowerCase()}`}>{insight.category}</span>
              <span className={`rai-insight-impact ${insight.impact}`}>{insight.impact} impact</span>
            </div>
            <h4>{insight.title}</h4>
            <p>{insight.detail}</p>
            {insight.actionable && (
              <button className="rai-btn small primary" style={{ marginTop: 12 }}>Take Action</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ==================== CHATBOT ====================
function ChatbotWidget({ show, onToggle }) {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello! I'm the Galleria Oral Surgery AI assistant. I can help referring doctors submit referrals, check referral status, or answer questions about our services. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const messagesEnd = useRef(null);

  useEffect(() => {
    messagesEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages(m => [...m, { from: "user", text: userMsg }]);
    setInput("");

    setTimeout(() => {
      let reply = "";
      const lower = userMsg.toLowerCase();
      if (lower.includes("refer") && (lower.includes("submit") || lower.includes("new") || lower.includes("send"))) {
        reply = "I can help you submit a referral right now! You can either:\n\n1. **Describe the referral** in natural language and I'll extract all the details using AI\n2. **Use the structured form** by clicking 'New Referral' in the navigation\n\nJust tell me the patient's name, procedure needed, and any urgency, and I'll get started!";
      } else if (lower.includes("status") || lower.includes("check") || lower.includes("track")) {
        reply = "I can check referral status for you! Here are some recent referrals:\n\n- **REF-2026-002** Emily Watson (Implants) - Scheduled for Apr 10\n- **REF-2026-006** Lisa Chen (Extraction) - Pending scheduling\n- **REF-2026-003** David Lee (Expose & Bond) - In progress\n\nWhich referral would you like details on?";
      } else if (lower.includes("implant")) {
        reply = "Dr. Antipov offers the full spectrum of dental implant services:\n\n- **Single tooth implants** - from $3,500\n- **Multiple implants** - custom pricing\n- **All-on-4 full arch** - comprehensive pricing at consultation\n- **All-on-6 full arch** - for maximum stability\n\nAll implant cases include 3D CBCT imaging, computer-guided planning, and PRF therapy. Would you like to refer a patient for an implant consultation?";
      } else if (lower.includes("wisdom") || lower.includes("third molar")) {
        reply = "We see wisdom teeth patients of all ages! Dr. Antipov offers:\n\n- All levels of sedation (local, nitrous, IV, general)\n- Same-week scheduling for urgent cases\n- Detailed post-op reports sent to your office within 24 hours\n\nWould you like to submit a wisdom teeth referral?";
      } else if (lower.includes("schedule") || lower.includes("appointment") || lower.includes("availability")) {
        reply = "Our current scheduling availability:\n\n- **Emergency cases**: Same day\n- **Urgent**: Within 24-48 hours\n- **Routine consultations**: Within 3-5 business days\n- **Surgical appointments**: Within 1-2 weeks of consultation\n\nCall us directly at **(916) 783-2110** for immediate scheduling or I can initiate the process here.";
      } else if (lower.includes("insurance") || lower.includes("cost") || lower.includes("price") || lower.includes("payment")) {
        reply = "We accept most major dental and medical insurance plans. We also offer:\n\n- **CareCredit financing**\n- **In-office payment plans**\n- **Complimentary implant consultations**\n- Insurance verification before appointments\n\nFor specific cost estimates, we recommend a consultation where Dr. Antipov can provide a detailed treatment plan with transparent pricing.";
      } else if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
        reply = "Hello! Welcome to Galleria Oral Surgery's AI assistant. I'm here to help with:\n\n- Submitting patient referrals\n- Checking referral status\n- Answering questions about our services\n- Scheduling information\n\nHow can I assist you today?";
      } else {
        reply = "I'd be happy to help! I can assist with:\n\n- **Submit a referral** - Tell me about the patient and I'll process it\n- **Check referral status** - Track any existing referral\n- **Services info** - Learn about our procedures\n- **Scheduling** - Check availability\n- **Insurance/costs** - Payment information\n\nWhat would you like to know more about?";
      }
      setMessages(m => [...m, { from: "bot", text: reply }]);
    }, 800);
  };

  return (
    <>
      <button className="rai-chat-toggle" onClick={onToggle}>
        {show ? "\u2715" : "\u{1F4AC}"}
      </button>
      {show && (
        <div className="rai-chatbot">
          <div className="rai-chat-header">
            <div className="rai-chat-avatar">AI</div>
            <div>
              <h4>Galleria AI Assistant</h4>
              <span>Online - Powered by AI</span>
            </div>
          </div>
          <div className="rai-chat-messages">
            {messages.map((m, i) => (
              <div className={`rai-chat-msg ${m.from}`} key={i}>
                <div className="rai-msg-bubble">{m.text.split("\n").map((line, j) => <span key={j}>{line}<br/></span>)}</div>
              </div>
            ))}
            <div ref={messagesEnd} />
          </div>
          <div className="rai-chat-input">
            <input value={input} onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask about referrals, services, scheduling..." />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}

// ==================== STYLES ====================
const REFERRAL_STYLES = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --navy:#0B1D3A;--navy-light:#132d54;--gold:#C9A96E;--gold-light:#d4ba8a;
  --white:#fff;--gray-50:#F8F9FA;--gray-100:#f0f1f3;--gray-200:#e2e4e8;
  --gray-400:#9ca3af;--gray-600:#4b5563;--gray-800:#1f2937;
  --font-heading:'Playfair Display',Georgia,serif;
  --font-body:'Inter',system-ui,-apple-system,sans-serif;
  --radius:12px;--shadow:0 4px 20px rgba(0,0,0,.08);
}
html{scroll-behavior:smooth}
body{font-family:var(--font-body);color:var(--gray-800);line-height:1.6;-webkit-font-smoothing:antialiased;background:var(--gray-50)}

.rai-app{min-height:100vh;display:flex;flex-direction:column}

/* HEADER */
.rai-header{background:var(--navy);color:var(--white);position:sticky;top:0;z-index:100}
.rai-header-top{display:flex;align-items:center;justify-content:space-between;padding:16px 24px;border-bottom:1px solid rgba(255,255,255,.1)}
.rai-brand{display:flex;align-items:center;gap:12px}
.rai-logo{width:42px;height:42px;border-radius:10px;background:var(--gold);color:var(--navy);display:flex;align-items:center;justify-content:center;font-family:var(--font-heading);font-weight:700;font-size:1.3rem}
.rai-brand h1{font-family:var(--font-heading);font-size:1.15rem;font-weight:700;color:var(--gold)}
.rai-brand p{font-size:.72rem;color:rgba(255,255,255,.5);letter-spacing:1px}
.rai-header-info{display:flex;align-items:center;gap:16px}
.rai-live-badge{background:rgba(16,185,129,.2);color:#10b981;padding:4px 12px;border-radius:20px;font-size:.72rem;font-weight:600;border:1px solid rgba(16,185,129,.3);animation:pulse 2s infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.6}}
.rai-doctor-name{font-size:.85rem;color:rgba(255,255,255,.7)}
.rai-nav{display:flex;gap:2px;padding:0 16px;overflow-x:auto;-webkit-overflow-scrolling:touch}
.rai-tab{display:flex;align-items:center;gap:6px;padding:12px 16px;background:none;border:none;color:rgba(255,255,255,.6);font-size:.78rem;font-weight:500;cursor:pointer;transition:all .2s;border-bottom:2px solid transparent;white-space:nowrap;font-family:var(--font-body)}
.rai-tab:hover{color:var(--white);background:rgba(255,255,255,.05)}
.rai-tab.active{color:var(--gold);border-bottom-color:var(--gold);background:rgba(201,169,110,.08)}
.rai-tab-icon{font-size:1rem}
.rai-tab-label{letter-spacing:.3px}

/* MAIN */
.rai-main{flex:1;padding:24px;max-width:1400px;margin:0 auto;width:100%}

/* PAGE HEADER */
.rai-page-header{margin-bottom:24px}
.rai-page-header h2{font-family:var(--font-heading);font-size:1.8rem;color:var(--navy);margin-bottom:4px}
.rai-page-header p{color:var(--gray-600);font-size:.9rem}

/* CARDS */
.rai-card{background:var(--white);border:1px solid var(--gray-200);border-radius:var(--radius);padding:24px;margin-bottom:20px;box-shadow:var(--shadow)}
.rai-card h3{font-family:var(--font-heading);font-size:1.15rem;color:var(--navy);margin-bottom:16px}
.rai-card.ai-glow{border-color:rgba(201,169,110,.4);box-shadow:0 4px 20px rgba(201,169,110,.12)}

/* STATS */
.rai-stats-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:16px;margin-bottom:20px}
.rai-stats-grid.small{grid-template-columns:repeat(auto-fill,minmax(160px,1fr))}
.rai-stat-card{background:var(--white);border:1px solid var(--gray-200);border-radius:var(--radius);padding:20px;box-shadow:var(--shadow)}
.rai-stat-card.small{padding:16px}
.rai-stat-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:4px}
.rai-stat-label{font-size:.78rem;color:var(--gray-600);font-weight:500;text-transform:uppercase;letter-spacing:.5px}
.rai-stat-value{font-size:1.8rem;font-weight:700;margin:4px 0}
.rai-stat-change{font-size:.75rem;font-weight:600}
.rai-stat-bar{height:4px;background:var(--gray-100);border-radius:2px;margin-top:8px;overflow:hidden}
.rai-stat-bar-fill{height:100%;border-radius:2px;transition:width .5s}

/* DASHBOARD GRID */
.rai-dashboard-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px}

/* URGENT LIST */
.rai-urgent-list{display:flex;flex-direction:column;gap:12px}
.rai-urgent-item{display:flex;gap:12px;padding:14px;border-radius:8px;border-left:4px solid}
.rai-urgent-item.emergency{background:rgba(239,68,68,.06);border-color:#ef4444}
.rai-urgent-item.warning{background:rgba(245,158,11,.06);border-color:#f59e0b}
.rai-urgent-item.info{background:rgba(59,130,246,.06);border-color:#3b82f6}
.rai-urgent-badge{font-size:.65rem;font-weight:700;padding:3px 8px;border-radius:4px;background:#ef4444;color:var(--white);align-self:flex-start;white-space:nowrap}
.rai-urgent-badge.warn{background:#f59e0b}
.rai-urgent-badge.info{background:#3b82f6}
.rai-urgent-item strong{font-size:.88rem;color:var(--navy);display:block;margin-bottom:2px}
.rai-urgent-item p{font-size:.8rem;color:var(--gray-600)}

/* ACTIVITY FEED */
.rai-activity-feed{display:flex;flex-direction:column;gap:4px}
.rai-activity-item{display:flex;gap:12px;padding:10px 0;border-bottom:1px solid var(--gray-100);align-items:flex-start}
.rai-activity-item:last-child{border-bottom:none}
.rai-activity-dot{width:8px;height:8px;border-radius:50%;margin-top:6px;flex-shrink:0}
.rai-activity-dot.schedule{background:#3b82f6}
.rai-activity-dot.followup{background:#f59e0b}
.rai-activity-dot.referral{background:#10b981}
.rai-activity-dot.ai{background:#8b5cf6}
.rai-activity-dot.report{background:#14b8a6}
.rai-activity-item p{font-size:.84rem;color:var(--gray-800)}
.rai-activity-time{font-size:.72rem;color:var(--gray-400)}

/* PIPELINE */
.rai-pipeline{display:flex;justify-content:space-around;align-items:flex-end;height:200px;padding:20px 0;gap:8px}
.rai-pipeline-stage{display:flex;flex-direction:column;align-items:center;gap:6px;flex:1}
.rai-pipeline-bar{width:100%;border-radius:6px 6px 0 0;min-height:20px;transition:height .5s}
.rai-pipeline-count{font-weight:700;font-size:.9rem}
.rai-pipeline-label{font-size:.7rem;color:var(--gray-600);text-align:center}

/* TOP DOCTORS */
.rai-top-doctors{display:flex;flex-direction:column;gap:4px}
.rai-top-doctor{display:flex;align-items:center;gap:12px;padding:10px;border-radius:8px;transition:background .2s}
.rai-top-doctor:hover{background:var(--gray-50)}
.rai-rank{font-weight:700;color:var(--gold);font-size:.85rem;width:24px}
.rai-doctor-avatar{width:36px;height:36px;border-radius:50%;background:var(--navy);color:var(--gold);display:flex;align-items:center;justify-content:center;font-weight:600;font-size:.75rem;flex-shrink:0}
.rai-doctor-avatar.large{width:48px;height:48px;font-size:.9rem}
.rai-doctor-avatar.xlarge{width:64px;height:64px;font-size:1.1rem}
.rai-doctor-info{flex:1;min-width:0}
.rai-doctor-info strong{display:block;font-size:.85rem;color:var(--navy)}
.rai-doctor-info span{font-size:.75rem;color:var(--gray-600)}
.rai-doctor-stats{display:flex;align-items:center;gap:8px}
.rai-tier-badge{font-size:.65rem;padding:2px 8px;border-radius:10px;font-weight:600;text-transform:uppercase;letter-spacing:.5px}
.rai-tier-badge.platinum{background:rgba(139,92,246,.12);color:#7c3aed}
.rai-tier-badge.gold{background:rgba(201,169,110,.15);color:#b08d4f}
.rai-tier-badge.silver{background:rgba(156,163,175,.15);color:#6b7280}
.rai-tier-badge.bronze{background:rgba(180,130,80,.12);color:#92622e}
.rai-tier-badge.new{background:rgba(59,130,246,.1);color:#3b82f6}
.rai-ref-count{font-size:.75rem;color:var(--gray-600);font-weight:500}

/* BUTTONS */
.rai-btn{padding:10px 20px;border-radius:8px;font-weight:600;font-size:.85rem;cursor:pointer;transition:all .2s;border:none;font-family:var(--font-body);letter-spacing:.3px}
.rai-btn.primary{background:var(--gold);color:var(--navy)}
.rai-btn.primary:hover{background:var(--gold-light);transform:translateY(-1px)}
.rai-btn.secondary{background:var(--gray-50);color:var(--navy);border:1px solid var(--gray-200)}
.rai-btn.secondary:hover{background:var(--gray-100)}
.rai-btn.small{padding:6px 14px;font-size:.78rem}
.rai-btn.large{padding:14px 32px;font-size:.95rem}

/* MODE TOGGLE */
.rai-mode-toggle{display:flex;gap:8px;margin-bottom:20px}
.rai-mode-btn{flex:1;padding:16px 24px;border:2px solid var(--gray-200);border-radius:var(--radius);background:var(--white);cursor:pointer;font-family:var(--font-body);font-size:.9rem;font-weight:500;color:var(--gray-600);transition:all .2s;display:flex;align-items:center;justify-content:center;gap:8px}
.rai-mode-btn.active{border-color:var(--gold);background:rgba(201,169,110,.05);color:var(--navy)}
.rai-mode-btn:hover{border-color:var(--gold)}
.rai-mode-icon{font-size:1.2rem}

/* AI ENTRY */
.rai-ai-textarea{width:100%;padding:16px;border:2px solid var(--gray-200);border-radius:var(--radius);font-family:var(--font-body);font-size:.9rem;resize:vertical;min-height:140px;transition:border-color .2s;line-height:1.6}
.rai-ai-textarea:focus{outline:none;border-color:var(--gold);box-shadow:0 0 0 3px rgba(201,169,110,.12)}
.rai-hint{font-size:.8rem;color:var(--gray-400);margin-top:4px}

/* AI RESULTS */
.rai-ai-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px}
.rai-confidence{background:rgba(16,185,129,.1);color:#059669;padding:4px 12px;border-radius:20px;font-size:.78rem;font-weight:600}
.rai-ai-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px}
.rai-ai-section{margin-bottom:12px}
.rai-ai-section.full{grid-column:1/-1}
.rai-ai-section h4{font-size:.82rem;color:var(--navy);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;font-weight:600}
.rai-tag-group{display:flex;flex-wrap:wrap;gap:6px}
.rai-ai-tag{padding:4px 12px;border-radius:6px;font-size:.8rem;font-weight:500}
.rai-ai-tag.procedure{background:rgba(59,130,246,.1);color:#3b82f6;border:1px solid rgba(59,130,246,.2)}
.rai-ai-tag.empty{background:rgba(245,158,11,.1);color:#d97706}
.rai-urgency-tag{padding:3px 10px;border-radius:6px;font-size:.75rem;font-weight:600;text-transform:uppercase;letter-spacing:.5px}
.rai-urgency-tag.routine{background:rgba(16,185,129,.1);color:#059669}
.rai-urgency-tag.soon{background:rgba(245,158,11,.1);color:#d97706}
.rai-urgency-tag.urgent{background:rgba(239,68,68,.1);color:#dc2626}
.rai-urgency-tag.emergency{background:rgba(220,38,38,.15);color:#dc2626;animation:pulse 1.5s infinite}
.rai-ai-alerts{display:flex;flex-direction:column;gap:8px}
.rai-ai-alert{display:flex;gap:8px;padding:10px 14px;background:rgba(245,158,11,.06);border:1px solid rgba(245,158,11,.15);border-radius:8px;font-size:.84rem;color:var(--gray-800);align-items:flex-start}
.rai-alert-icon{color:#f59e0b;font-size:1rem;flex-shrink:0}
.rai-ai-actions{display:flex;gap:10px;margin-top:20px}

/* STEP INDICATOR */
.rai-step-indicator{display:flex;gap:4px;margin-bottom:24px}
.rai-step{flex:1;display:flex;align-items:center;gap:8px;padding:12px 16px;background:var(--gray-50);border-radius:8px;cursor:pointer;transition:all .2s;border:1px solid var(--gray-200)}
.rai-step.active{background:rgba(201,169,110,.08);border-color:var(--gold)}
.rai-step.done{background:rgba(16,185,129,.06);border-color:rgba(16,185,129,.3)}
.rai-step-num{width:28px;height:28px;border-radius:50%;background:var(--gray-200);display:flex;align-items:center;justify-content:center;font-size:.8rem;font-weight:700;color:var(--gray-600);flex-shrink:0}
.rai-step.active .rai-step-num{background:var(--gold);color:var(--navy)}
.rai-step.done .rai-step-num{background:#10b981;color:var(--white)}
.rai-step-label{font-size:.78rem;font-weight:500;color:var(--gray-600)}
.rai-step.active .rai-step-label{color:var(--navy);font-weight:600}

/* FORMS */
.rai-form-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:20px}
.rai-field{display:flex;flex-direction:column;gap:6px}
.rai-field.full{grid-column:1/-1}
.rai-field label{font-size:.8rem;font-weight:600;color:var(--navy);text-transform:uppercase;letter-spacing:.5px}
.rai-field input,.rai-field textarea,.rai-field select{padding:10px 14px;border:1px solid var(--gray-200);border-radius:8px;font-size:.88rem;font-family:var(--font-body);transition:border-color .2s;background:var(--white)}
.rai-field input:focus,.rai-field textarea:focus,.rai-field select:focus{outline:none;border-color:var(--gold);box-shadow:0 0 0 3px rgba(201,169,110,.1)}
.rai-field textarea{resize:vertical;min-height:80px}
.rai-checkbox-label{display:flex;align-items:center;gap:8px;cursor:pointer;font-size:.88rem}
.rai-checkbox-label input[type="checkbox"]{width:18px;height:18px;accent-color:var(--gold)}
.rai-step-nav{display:flex;gap:10px;justify-content:flex-end;margin-top:12px}

/* PROCEDURE GRID */
.rai-procedure-grid{display:flex;flex-wrap:wrap;gap:8px;margin:8px 0}
.rai-proc-btn{padding:8px 16px;border:1px solid var(--gray-200);border-radius:8px;background:var(--white);font-family:var(--font-body);font-size:.82rem;cursor:pointer;transition:all .2s;color:var(--gray-600)}
.rai-proc-btn:hover{border-color:var(--gold);color:var(--navy)}
.rai-proc-btn.selected{background:rgba(201,169,110,.1);border-color:var(--gold);color:var(--navy);font-weight:600}

/* URGENCY GRID */
.rai-urgency-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin:8px 0}
.rai-urgency-btn{padding:12px;border:2px solid var(--gray-200);border-radius:8px;background:var(--white);cursor:pointer;text-align:center;transition:all .2s;font-family:var(--font-body)}
.rai-urgency-btn strong{display:block;font-size:.85rem;color:var(--navy);margin-bottom:2px}
.rai-urgency-btn span{font-size:.72rem;color:var(--gray-400)}
.rai-urgency-btn.selected{border-color:var(--urg-color);background:color-mix(in srgb,var(--urg-color) 6%,white)}
.rai-urgency-btn:hover{border-color:var(--urg-color)}

/* KNOWN DOCTORS */
.rai-known-doctors{margin:20px 0;padding:16px;background:var(--gray-50);border-radius:8px}
.rai-known-doctors h4{font-size:.82rem;color:var(--navy);margin-bottom:10px;text-transform:uppercase;letter-spacing:.5px}
.rai-doctor-chips{display:flex;flex-wrap:wrap;gap:8px}
.rai-doctor-chip{display:flex;align-items:center;gap:6px;padding:6px 14px;border:1px solid var(--gray-200);border-radius:20px;background:var(--white);font-size:.8rem;cursor:pointer;transition:all .2s;font-family:var(--font-body);color:var(--gray-600)}
.rai-doctor-chip:hover{border-color:var(--gold);background:rgba(201,169,110,.05)}
.rai-tier-dot{width:8px;height:8px;border-radius:50%}
.rai-tier-dot.platinum{background:#7c3aed}
.rai-tier-dot.gold{background:var(--gold)}
.rai-tier-dot.silver{background:#9ca3af}
.rai-tier-dot.bronze{background:#b4824f}
.rai-tier-dot.new{background:#3b82f6}

/* REVIEW */
.rai-review{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px}
.rai-review-section{padding:16px;background:var(--gray-50);border-radius:8px;border-left:3px solid var(--gold)}
.rai-review-section h4{font-size:.82rem;color:var(--gold);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px}
.rai-review-section p{font-size:.85rem;color:var(--gray-600);margin-bottom:4px}

/* SUCCESS */
.rai-submitted{max-width:800px;margin:0 auto}
.rai-success-card{background:var(--white);border:1px solid rgba(16,185,129,.3);border-radius:var(--radius);padding:40px;text-align:center;box-shadow:var(--shadow)}
.rai-success-icon{width:64px;height:64px;border-radius:50%;background:rgba(16,185,129,.1);color:#059669;display:flex;align-items:center;justify-content:center;font-size:2rem;margin:0 auto 16px}
.rai-success-card h2{font-family:var(--font-heading);color:var(--navy);margin-bottom:8px}
.rai-ref-id{color:var(--gold);font-weight:600;font-size:.9rem;margin-bottom:24px}
.rai-success-details{text-align:left;max-width:400px;margin:0 auto 24px;padding:16px;background:var(--gray-50);border-radius:8px}
.rai-success-row{padding:6px 0;font-size:.88rem;border-bottom:1px solid var(--gray-100)}
.rai-success-row:last-child{border:none}
.rai-success-actions{display:flex;gap:10px;justify-content:center;flex-wrap:wrap}
.rai-ai-schedule{text-align:left;margin:20px 0;padding:20px;background:rgba(201,169,110,.04);border:1px solid rgba(201,169,110,.15);border-radius:8px}
.rai-ai-schedule h3{font-family:var(--font-heading);color:var(--navy);font-size:1rem;margin-bottom:12px}
.rai-schedule-timeline{display:flex;flex-direction:column;gap:6px}
.rai-schedule-item{display:flex;align-items:center;gap:10px;padding:8px;border-radius:6px;background:var(--white);font-size:.82rem}
.rai-schedule-type{padding:2px 8px;border-radius:4px;font-size:.68rem;font-weight:700;min-width:48px;text-align:center}
.rai-schedule-type.email{background:rgba(59,130,246,.1);color:#3b82f6}
.rai-schedule-type.sms{background:rgba(16,185,129,.1);color:#059669}
.rai-schedule-type.call{background:rgba(245,158,11,.1);color:#d97706}
.rai-schedule-day{font-weight:600;color:var(--navy);min-width:48px}
.rai-schedule-action{color:var(--gray-600);flex:1}

/* TABLE */
.rai-tracker-controls{display:flex;gap:16px;align-items:center;flex-wrap:wrap;margin-bottom:20px}
.rai-search{padding:10px 16px;border:1px solid var(--gray-200);border-radius:8px;font-size:.88rem;width:300px;font-family:var(--font-body)}
.rai-search:focus{outline:none;border-color:var(--gold)}
.rai-filter-tabs{display:flex;gap:4px;flex-wrap:wrap}
.rai-filter-btn{padding:6px 14px;border:1px solid var(--gray-200);border-radius:6px;background:var(--white);font-size:.78rem;cursor:pointer;transition:all .2s;font-family:var(--font-body);color:var(--gray-600)}
.rai-filter-btn.active{background:var(--navy);color:var(--white);border-color:var(--navy)}
.rai-filter-btn:hover{border-color:var(--gold)}
.rai-table-wrap{overflow-x:auto}
.rai-table{width:100%;border-collapse:collapse;font-size:.84rem}
.rai-table th{background:var(--gray-50);padding:10px 14px;text-align:left;font-size:.75rem;font-weight:600;color:var(--gray-600);text-transform:uppercase;letter-spacing:.5px;border-bottom:2px solid var(--gray-200)}
.rai-table td{padding:12px 14px;border-bottom:1px solid var(--gray-100);color:var(--gray-800)}
.rai-table tr:hover{background:var(--gray-50)}
.rai-ref-num{font-family:monospace;font-weight:600;color:var(--gold);font-size:.8rem}
.rai-status-badge{padding:3px 10px;border-radius:6px;font-size:.72rem;font-weight:600;text-transform:uppercase;letter-spacing:.3px}
.rai-action-btns{display:flex;gap:4px}
.rai-action-btn{width:28px;height:28px;border:1px solid var(--gray-200);border-radius:6px;background:var(--white);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:.85rem;transition:all .2s}
.rai-action-btn:hover{background:var(--gray-50);border-color:var(--gold)}

/* CRM */
.rai-crm-summary{display:flex;gap:24px;justify-content:center;flex-wrap:wrap}
.rai-crm-stat{text-align:center;padding:12px 20px}
.rai-crm-stat strong{display:block;font-size:1.6rem;color:var(--navy);font-family:var(--font-heading)}
.rai-crm-stat span{font-size:.78rem;color:var(--gray-600)}

/* OUTREACH */
.rai-outreach-list{display:flex;flex-direction:column;gap:10px}
.rai-outreach-item{display:flex;gap:14px;padding:14px;border-radius:8px;border-left:4px solid;align-items:center}
.rai-outreach-item.high{background:rgba(239,68,68,.04);border-color:#ef4444}
.rai-outreach-item.medium{background:rgba(245,158,11,.04);border-color:#f59e0b}
.rai-outreach-item.low{background:rgba(59,130,246,.04);border-color:#3b82f6}
.rai-outreach-priority{font-size:.65rem;font-weight:700;padding:3px 8px;border-radius:4px;background:var(--gray-100);color:var(--gray-600);white-space:nowrap}
.rai-outreach-content{flex:1}
.rai-outreach-content strong{font-size:.88rem;color:var(--navy)}
.rai-outreach-reason{font-size:.82rem;color:#dc2626;font-weight:500;margin-top:2px}
.rai-outreach-action{font-size:.8rem;color:var(--gray-600);margin-top:2px}

/* DOCTOR CARDS */
.rai-doctors-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px}
.rai-doctor-card{background:var(--gray-50);border:1px solid var(--gray-200);border-radius:var(--radius);padding:20px;cursor:pointer;transition:all .2s;position:relative}
.rai-doctor-card:hover{transform:translateY(-2px);box-shadow:var(--shadow);border-color:var(--gold)}
.rai-doctor-card-header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px}
.rai-doctor-card h4{font-family:var(--font-heading);font-size:1rem;color:var(--navy);margin-bottom:2px}
.rai-doctor-card>p{font-size:.82rem;color:var(--gray-600);margin-bottom:2px}
.rai-doctor-card-stats{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin:12px 0 8px;text-align:center}
.rai-doctor-card-stats div{padding:6px;background:var(--white);border-radius:6px}
.rai-doctor-card-stats strong{display:block;font-size:.95rem;color:var(--navy)}
.rai-doctor-card-stats span{font-size:.68rem;color:var(--gray-400)}
.rai-health-bar{height:4px;background:var(--gray-200);border-radius:2px;overflow:hidden}
.rai-health-fill{height:100%;border-radius:2px;transition:width .5s}
.rai-risk-badge{position:absolute;top:12px;right:12px;font-size:.65rem;padding:2px 8px;background:rgba(239,68,68,.1);color:#ef4444;border-radius:4px;font-weight:600}

/* DOCTOR DETAIL */
.rai-doctor-profile{display:flex;gap:20px;align-items:center}
.rai-doctor-profile h2{font-family:var(--font-heading);color:var(--navy)}
.rai-doctor-profile p{color:var(--gray-600);font-size:.9rem}
.rai-detail-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px}
.rai-metric{display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--gray-100);font-size:.88rem}
.rai-metric span{color:var(--gray-600)}
.rai-metric strong{color:var(--navy)}
.rai-proc-bar{margin-bottom:10px}
.rai-proc-bar span{font-size:.82rem;color:var(--gray-600);display:block;margin-bottom:4px}
.rai-proc-bar-bg{height:8px;background:var(--gray-100);border-radius:4px;overflow:hidden}
.rai-proc-bar-fill{height:100%;background:var(--gold);border-radius:4px}
.rai-ai-rec{padding:14px;background:rgba(201,169,110,.06);border:1px solid rgba(201,169,110,.15);border-radius:8px;margin-top:8px}
.rai-ai-rec p{font-size:.85rem;color:var(--gray-600);margin-bottom:10px}

/* FOLLOW-UP */
.rai-followup-list{display:flex;flex-direction:column;gap:8px}
.rai-followup-item{display:flex;gap:12px;padding:14px;border-radius:8px;border-left:3px solid var(--gray-200);align-items:center;background:var(--gray-50)}
.rai-followup-item.high{border-color:#ef4444;background:rgba(239,68,68,.03)}
.rai-followup-item.medium{border-color:#f59e0b;background:rgba(245,158,11,.03)}
.rai-followup-item.low{border-color:#3b82f6;background:rgba(59,130,246,.03)}
.rai-followup-type{padding:3px 8px;border-radius:4px;font-size:.68rem;font-weight:700;min-width:42px;text-align:center}
.rai-followup-type.call{background:rgba(245,158,11,.15);color:#d97706}
.rai-followup-type.sms{background:rgba(16,185,129,.15);color:#059669}
.rai-followup-type.email{background:rgba(59,130,246,.15);color:#3b82f6}
.rai-followup-content{flex:1}
.rai-followup-content strong{font-size:.88rem;color:var(--navy)}
.rai-followup-content p{font-size:.78rem;color:var(--gray-400);margin-top:2px}
.rai-followup-actions{display:flex;gap:6px}

/* SEQUENCES */
.rai-sequences-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;margin-top:12px}
.rai-sequence-card{padding:20px;background:var(--gray-50);border:1px solid var(--gray-200);border-radius:var(--radius)}
.rai-sequence-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px}
.rai-sequence-header h4{font-size:.92rem;color:var(--navy)}
.rai-sequence-status{font-size:.68rem;padding:2px 8px;border-radius:10px;background:var(--gray-200);color:var(--gray-600)}
.rai-sequence-status.active{background:rgba(16,185,129,.12);color:#059669}
.rai-sequence-stats{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:8px;margin-top:12px;text-align:center}
.rai-sequence-stats div{padding:6px;background:var(--white);border-radius:6px}
.rai-sequence-stats strong{display:block;font-size:.95rem;color:var(--navy)}
.rai-sequence-stats span{font-size:.65rem;color:var(--gray-400)}

/* ANALYTICS CHARTS */
.rai-chart-area{padding:12px 0}
.rai-bar-chart{display:flex;gap:8px;align-items:flex-end;height:220px;padding:0 8px}
.rai-bar-group{flex:1;display:flex;flex-direction:column;align-items:center;gap:4px}
.rai-bar-container{display:flex;gap:3px;align-items:flex-end;height:180px}
.rai-bar{width:18px;border-radius:4px 4px 0 0;min-height:4px;transition:height .5s}
.rai-bar.current{background:#3b82f6}
.rai-bar.predicted{background:#10b981}
.rai-bar-label{font-size:.68rem;color:var(--gray-400)}
.rai-chart-legend{display:flex;gap:20px;justify-content:center;margin-top:16px;font-size:.78rem;color:var(--gray-600)}
.rai-chart-legend i{display:inline-block;width:12px;height:12px;border-radius:3px;margin-right:6px;vertical-align:middle}

/* PROCEDURE BREAKDOWN */
.rai-procedure-breakdown{display:flex;flex-direction:column;gap:10px}
.rai-proc-row{display:flex;align-items:center;gap:12px}
.rai-proc-info{min-width:120px}
.rai-proc-info strong{font-size:.84rem;color:var(--navy);display:block}
.rai-proc-info span{font-size:.72rem;color:var(--gray-400)}
.rai-proc-row .rai-proc-bar-bg{flex:1;height:10px;background:var(--gray-100);border-radius:5px;overflow:hidden}
.rai-proc-row .rai-proc-bar-fill{height:100%;background:linear-gradient(90deg,var(--gold),var(--gold-light));border-radius:5px}
.rai-proc-revenue{font-weight:600;color:var(--navy);font-size:.84rem;min-width:60px;text-align:right}

/* FUNNEL */
.rai-funnel{display:flex;flex-direction:column;gap:4px;padding:12px 0}
.rai-funnel-step{display:flex;justify-content:center}
.rai-funnel-bar{background:linear-gradient(90deg,var(--navy),var(--navy-light));padding:12px 20px;border-radius:6px;display:flex;justify-content:space-between;align-items:center;min-width:200px;transition:width .5s}
.rai-funnel-label{color:var(--white);font-size:.82rem;font-weight:500}
.rai-funnel-count{color:var(--gold);font-size:.8rem;font-weight:600}

/* TERRITORY */
.rai-territory-list{display:flex;flex-direction:column;gap:10px;max-height:500px;overflow-y:auto}
.rai-territory-row{display:flex;align-items:center;gap:12px;padding:8px 0;border-bottom:1px solid var(--gray-100)}
.rai-territory-info{min-width:140px}
.rai-territory-info strong{font-size:.88rem;color:var(--navy);display:block}
.rai-territory-info span{font-size:.72rem;color:var(--gray-400)}
.rai-territory-bar-wrap{flex:1;display:flex;align-items:center;gap:8px}
.rai-territory-bar{flex:1;height:10px;background:var(--gray-100);border-radius:5px;overflow:hidden;position:relative}
.rai-territory-fill{height:100%;border-radius:5px;position:absolute;top:0;left:0}
.rai-territory-fill.current{background:var(--gold);z-index:2}
.rai-territory-fill.potential{background:var(--navy)}
.rai-territory-pct{font-weight:600;font-size:.82rem;color:var(--navy);min-width:40px}
.rai-territory-potential{font-size:.75rem;color:var(--gray-400);min-width:80px;text-align:right}

/* OPPORTUNITIES */
.rai-opportunities{display:flex;flex-direction:column;gap:10px;max-height:500px;overflow-y:auto}
.rai-opportunity-card{padding:16px;border-radius:8px;border-left:4px solid;background:var(--gray-50)}
.rai-opportunity-card.critical{border-color:#ef4444;background:rgba(239,68,68,.03)}
.rai-opportunity-card.high{border-color:#f59e0b;background:rgba(245,158,11,.03)}
.rai-opportunity-card.medium{border-color:#3b82f6;background:rgba(59,130,246,.03)}
.rai-opportunity-card.low{border-color:#10b981;background:rgba(16,185,129,.03)}
.rai-opp-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:6px}
.rai-opp-header strong{font-size:.92rem;color:var(--navy)}
.rai-opp-priority{font-size:.68rem;padding:2px 8px;border-radius:4px;font-weight:700;text-transform:uppercase}
.rai-opp-priority.critical{background:rgba(239,68,68,.15);color:#dc2626}
.rai-opp-priority.high{background:rgba(245,158,11,.15);color:#d97706}
.rai-opp-priority.medium{background:rgba(59,130,246,.15);color:#3b82f6}
.rai-opp-priority.low{background:rgba(16,185,129,.15);color:#059669}
.rai-opp-desc{font-size:.84rem;color:var(--gray-800);font-weight:500;margin-bottom:4px}
.rai-opp-action,.rai-opp-impact{font-size:.8rem;color:var(--gray-600);margin-bottom:2px}

/* AI INSIGHTS */
.rai-ai-summary{display:flex;gap:16px;align-items:flex-start}
.rai-ai-brain{width:48px;height:48px;border-radius:12px;background:var(--navy);color:var(--gold);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:1rem;flex-shrink:0}
.rai-ai-summary h3{font-family:var(--font-heading);color:var(--navy);margin-bottom:8px;font-size:1rem}
.rai-ai-summary p{font-size:.88rem;color:var(--gray-600);line-height:1.7}
.rai-insights-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:16px}
.rai-insight-card{background:var(--white);border:1px solid var(--gray-200);border-radius:var(--radius);padding:20px;transition:all .2s;box-shadow:var(--shadow)}
.rai-insight-card:hover{transform:translateY(-2px);box-shadow:0 8px 30px rgba(0,0,0,.1)}
.rai-insight-card.high{border-left:4px solid #ef4444}
.rai-insight-card.medium{border-left:4px solid #f59e0b}
.rai-insight-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px}
.rai-insight-category{font-size:.68rem;padding:2px 8px;border-radius:4px;font-weight:700;text-transform:uppercase}
.rai-insight-category.growth{background:rgba(16,185,129,.1);color:#059669}
.rai-insight-category.risk{background:rgba(239,68,68,.1);color:#dc2626}
.rai-insight-category.revenue{background:rgba(139,92,246,.1);color:#7c3aed}
.rai-insight-category.operations{background:rgba(59,130,246,.1);color:#3b82f6}
.rai-insight-category.satisfaction{background:rgba(245,158,11,.1);color:#d97706}
.rai-insight-category.prediction{background:rgba(20,184,166,.1);color:#0d9488}
.rai-insight-category.competitive{background:rgba(236,72,153,.1);color:#db2777}
.rai-insight-category.innovation{background:rgba(99,102,241,.1);color:#4f46e5}
.rai-insight-impact{font-size:.68rem;padding:2px 8px;border-radius:4px;font-weight:600}
.rai-insight-impact.high{background:rgba(239,68,68,.08);color:#dc2626}
.rai-insight-impact.medium{background:rgba(245,158,11,.08);color:#d97706}
.rai-insight-card h4{font-size:.95rem;color:var(--navy);margin-bottom:8px}
.rai-insight-card p{font-size:.84rem;color:var(--gray-600);line-height:1.6}

/* CHATBOT */
.rai-chat-toggle{position:fixed;bottom:24px;right:24px;width:56px;height:56px;border-radius:50%;background:var(--navy);color:var(--white);border:none;font-size:1.5rem;cursor:pointer;box-shadow:0 4px 20px rgba(0,0,0,.2);z-index:1000;display:flex;align-items:center;justify-content:center;transition:all .2s}
.rai-chat-toggle:hover{transform:scale(1.05);background:var(--navy-light)}
.rai-chatbot{position:fixed;bottom:90px;right:24px;width:380px;max-height:520px;background:var(--white);border-radius:var(--radius);box-shadow:0 10px 40px rgba(0,0,0,.2);z-index:1000;display:flex;flex-direction:column;overflow:hidden;border:1px solid var(--gray-200)}
.rai-chat-header{background:var(--navy);padding:16px;display:flex;gap:12px;align-items:center}
.rai-chat-avatar{width:36px;height:36px;border-radius:50%;background:var(--gold);color:var(--navy);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.8rem;flex-shrink:0}
.rai-chat-header h4{color:var(--white);font-size:.9rem}
.rai-chat-header span{color:rgba(255,255,255,.5);font-size:.72rem}
.rai-chat-messages{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px;max-height:340px;min-height:200px}
.rai-chat-msg{display:flex}
.rai-chat-msg.bot{justify-content:flex-start}
.rai-chat-msg.user{justify-content:flex-end}
.rai-msg-bubble{max-width:85%;padding:10px 14px;border-radius:12px;font-size:.84rem;line-height:1.5}
.rai-chat-msg.bot .rai-msg-bubble{background:var(--gray-50);color:var(--gray-800);border-bottom-left-radius:4px}
.rai-chat-msg.user .rai-msg-bubble{background:var(--navy);color:var(--white);border-bottom-right-radius:4px}
.rai-chat-input{display:flex;border-top:1px solid var(--gray-200);padding:12px}
.rai-chat-input input{flex:1;padding:10px;border:1px solid var(--gray-200);border-radius:8px 0 0 8px;font-size:.85rem;font-family:var(--font-body)}
.rai-chat-input input:focus{outline:none;border-color:var(--gold)}
.rai-chat-input button{padding:10px 18px;background:var(--gold);color:var(--navy);border:none;border-radius:0 8px 8px 0;font-weight:600;cursor:pointer;font-family:var(--font-body);font-size:.85rem}

/* RESPONSIVE */
@media(max-width:1024px){
  .rai-dashboard-grid,.rai-detail-grid,.rai-review,.rai-ai-grid{grid-template-columns:1fr}
  .rai-nav{padding:0 8px}
  .rai-tab-label{display:none}
  .rai-tab{padding:12px}
  .rai-urgency-grid{grid-template-columns:1fr 1fr}
}
@media(max-width:640px){
  .rai-main{padding:12px}
  .rai-stats-grid{grid-template-columns:1fr 1fr}
  .rai-form-grid{grid-template-columns:1fr}
  .rai-step-indicator{flex-direction:column}
  .rai-chatbot{width:calc(100vw - 32px);right:16px;bottom:80px}
  .rai-mode-toggle{flex-direction:column}
  .rai-urgency-grid{grid-template-columns:1fr}
  .rai-tracker-controls{flex-direction:column}
  .rai-search{width:100%}
  .rai-insights-grid{grid-template-columns:1fr}
}
`;
