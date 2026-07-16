import React from "react";
import { motion } from "motion/react";
import Chip from "@mui/material/Chip";
import { FadeUp, RevealLeft } from "./shared";
import profileImage from "../imports/personalized_Image.jpeg";
import metatechnoLogo from "../imports/metatechno.jpeg";

export const RPA_TEAL  = "#0891B2";
export const RPA_DARK  = "#083344";

// ── MetaLanka logo (inline, no image file needed) ─────────────────────────────

function MetaLankaLogo({ height = 36 }: { height?: number }) {
  return (
    <div style={{ background: "#fff", borderRadius: 6, border: "1px solid #E5E7EB", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", flexShrink: 0, padding: "3px 8px" }}>
      <img src={metatechnoLogo} alt="MetaTechno Lanka" style={{ height: height * 1.5, objectFit: "contain", display: "block" }} />
    </div>
  );
}

// ── Fake Redmine Bot Screen ────────────────────────────────────────────────────

function FakeRedmineScreen() {
  const rows = [
    { user: "Rusira L.",   project: "ERP Integration",      issue: "#2048 – API gateway refactor",    hours: "8.00", date: "2021-06-01", status: "read" },
    { user: "Hasith P.",   project: "Mobile App v2",         issue: "#2051 – Push notification fix",   hours: "6.50", date: "2021-06-01", status: "read" },
    { user: "Thilina R.",  project: "ERP Integration",       issue: "#2049 – DB migration script",     hours: "7.75", date: "2021-06-01", status: "read" },
    { user: "Kasun M.",    project: "Client Portal",         issue: "#2055 – Login UI rework",         hours: "5.00", date: "2021-06-01", status: "reading" },
    { user: "Nadeeka W.",  project: "Mobile App v2",         issue: "#2053 – Analytics dashboard",     hours: "9.00", date: "2021-06-01", status: "pending" },
    { user: "Chamara S.",  project: "Internal Tools",        issue: "#2060 – Reporting module",        hours: "8.00", date: "2021-06-01", status: "pending" },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 24px 64px rgba(0,0,0,0.18), 0 4px 16px rgba(8,145,178,0.1)", border: "1px solid rgba(0,0,0,0.08)", fontFamily: '"Inter", sans-serif' }}
    >
      {/* Browser chrome */}
      <div style={{ background: "#2D3748", padding: "8px 12px", display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ display: "flex", gap: 5 }}>
          {["#FF5F57","#FFBD2E","#28C840"].map(c => <div key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c }} />)}
        </div>
        <div style={{ flex: 1, background: "#4A5568", borderRadius: 4, padding: "2px 10px", fontSize: "0.58rem", color: "#CBD5E0", textAlign: "center" }}>
          metalanka.redmine.com/time_entries?project_id=all&period=this_month
        </div>
        {/* Bot indicator */}
        <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.2, repeat: Infinity }}
          style={{ display: "flex", alignItems: "center", gap: 4, background: "#38A169", borderRadius: 4, padding: "2px 7px" }}>
          <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#fff" }} />
          <span style={{ fontSize: "0.5rem", color: "#fff", fontWeight: 700 }}>BOT ACTIVE</span>
        </motion.div>
      </div>

      {/* Redmine toolbar */}
      <div style={{ background: "#B22222", padding: "0 12px", display: "flex", alignItems: "center", gap: 16, height: 28 }}>
        <span style={{ color: "#fff", fontWeight: 800, fontSize: "0.72rem", letterSpacing: "0.05em" }}>Redmine</span>
        {["Home","Projects","Help"].map(item => (
          <span key={item} style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.6rem" }}>{item}</span>
        ))}
        <div style={{ flex: 1 }} />
        <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.58rem" }}>Logged in as: uipath_bot</span>
      </div>

      {/* Redmine nav tabs */}
      <div style={{ background: "#4D94FF", display: "flex", gap: 0, padding: "0 12px" }}>
        {["Overview","Activity","Issues","Time","Spent Time","Files"].map((tab, i) => (
          <div key={tab} style={{ padding: "5px 10px", fontSize: "0.6rem", color: i === 4 ? "#1A365D" : "rgba(255,255,255,0.85)", background: i === 4 ? "#fff" : "transparent", fontWeight: i === 4 ? 700 : 400, borderRadius: "4px 4px 0 0", marginTop: 2 }}>{tab}</div>
        ))}
      </div>

      {/* Content */}
      <div style={{ background: "#F7FAFC", padding: "10px 12px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <div style={{ fontWeight: 700, fontSize: "0.68rem", color: "#2D3748" }}>Spent Time - June 2021</div>
          <motion.div animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 1.5, repeat: Infinity }}
            style={{ display: "flex", alignItems: "center", gap: 5, background: "#EBF8FF", borderRadius: 4, padding: "3px 8px", border: "1px solid #BEE3F8" }}>
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              style={{ width: 8, height: 8, borderRadius: "50%", border: "2px solid #0891B2", borderTopColor: "transparent" }} />
            <span style={{ fontSize: "0.55rem", color: "#0891B2", fontWeight: 700 }}>UiPath reading rows…</span>
          </motion.div>
        </div>

        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.58rem" }}>
          <thead>
            <tr style={{ background: "#EDF2F7" }}>
              {["Date","User","Project","Issue","Hours",""].map(h => (
                <th key={h} style={{ padding: "4px 6px", textAlign: "left", color: "#4A5568", fontWeight: 700, fontSize: "0.55rem", textTransform: "uppercase", letterSpacing: "0.04em", borderBottom: "1px solid #E2E8F0" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <motion.tr key={r.user + i}
                initial={{ background: "transparent" }}
                animate={r.status === "reading" ? { background: ["#EBF8FF", "#BEE3F8", "#EBF8FF"] } : {}}
                transition={{ duration: 1, repeat: Infinity }}
                style={{ borderBottom: "1px solid #EDF2F7", background: r.status === "read" ? "#fff" : r.status === "reading" ? "#EBF8FF" : "#F7FAFC" }}
              >
                <td style={{ padding: "4px 6px", color: "#718096" }}>{r.date}</td>
                <td style={{ padding: "4px 6px", fontWeight: 600, color: "#2D3748" }}>{r.user}</td>
                <td style={{ padding: "4px 6px", color: "#4A5568" }}>{r.project}</td>
                <td style={{ padding: "4px 6px", color: "#4A5568" }}>{r.issue}</td>
                <td style={{ padding: "4px 6px", fontWeight: 700, color: r.status === "read" ? "#276749" : "#2D3748" }}>{r.status !== "pending" ? r.hours : "—"}</td>
                <td style={{ padding: "4px 6px" }}>
                  {r.status === "read" && <span style={{ background: "#C6F6D5", color: "#276749", fontSize: "0.48rem", padding: "1px 5px", borderRadius: 3, fontWeight: 700 }}>✓ READ</span>}
                  {r.status === "reading" && (
                    <motion.span animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 0.8, repeat: Infinity }}
                      style={{ background: "#BEE3F8", color: "#0891B2", fontSize: "0.48rem", padding: "1px 5px", borderRadius: 3, fontWeight: 700 }}>● READING</motion.span>
                  )}
                  {r.status === "pending" && <span style={{ background: "#EDF2F7", color: "#718096", fontSize: "0.48rem", padding: "1px 5px", borderRadius: 3 }}>PENDING</span>}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8, paddingTop: 6, borderTop: "1px solid #E2E8F0" }}>
          <span style={{ fontSize: "0.55rem", color: "#718096" }}>Showing 6 of 142 entries - Page 1 / 24</span>
          <span style={{ fontSize: "0.55rem", color: "#0891B2", fontWeight: 600 }}>Total hours read this session: 22.25 hrs</span>
        </div>
      </div>
    </motion.div>
  );
}

// ── Fake Excel Report ──────────────────────────────────────────────────────────

function FakeExcelReport() {
  const employees = [
    { name: "Rusira L.",   mon: 8,   tue: 8,    wed: 8,   thu: 8,   fri: 8   },
    { name: "Hasith P.",   mon: 6.5, tue: 7,    wed: 8,   thu: 6.5, fri: 7   },
    { name: "Thilina R.",  mon: 7.75,tue: 8,    wed: 9.5, thu: 8,   fri: 7.5 },
    { name: "Kasun M.",    mon: 5,   tue: 5.5,  wed: 6,   thu: 7,   fri: 5   },
    { name: "Nadeeka W.",  mon: 9,   tue: 9.5,  wed: 9,   thu: 8.5, fri: 9   },
    { name: "Chamara S.",  mon: 8,   tue: 8,    wed: 8,   thu: 8,   fri: 8   },
  ];

  const cellColor = (h: number) => {
    if (h >= 9)   return { bg: "#FEE2E2", color: "#991B1B", label: "OT" };
    if (h === 8)  return { bg: "#DCFCE7", color: "#166534", label: "✓" };
    if (h >= 7)   return { bg: "#FEF9C3", color: "#854D0E", label: "~" };
    return { bg: "#FEE2E2", color: "#991B1B", label: "!" };
  };

  const total = (emp: typeof employees[0]) => emp.mon + emp.tue + emp.wed + emp.thu + emp.fri;
  const days = ["Mon 31 May", "Tue 01", "Wed 02", "Thu 03", "Fri 04"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 24px 64px rgba(0,0,0,0.18), 0 4px 16px rgba(8,145,178,0.1)", border: "1px solid rgba(0,0,0,0.08)", fontFamily: '"Inter", sans-serif' }}
    >
      {/* Excel chrome */}
      <div style={{ background: "#217346", padding: "6px 12px", display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ display: "flex", gap: 5 }}>
          {["#FF5F57","#FFBD2E","#28C840"].map(c => <div key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c }} />)}
        </div>
        <span style={{ color: "#fff", fontWeight: 700, fontSize: "0.62rem", flex: 1, textAlign: "center" }}>
          MetaLanka_WorkTime_June2021_UiPath_Generated.xlsx - Excel
        </span>
        <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.4, repeat: Infinity }}
          style={{ display: "flex", alignItems: "center", gap: 4, background: "#16A34A", borderRadius: 4, padding: "2px 7px" }}>
          <span style={{ fontSize: "0.5rem", color: "#fff", fontWeight: 700 }}>⚡ AUTO-FILL ACTIVE</span>
        </motion.div>
      </div>

      {/* Formula bar */}
      <div style={{ background: "#F3F3F3", padding: "3px 8px", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid #D1D5DB" }}>
        <div style={{ background: "#fff", border: "1px solid #D1D5DB", borderRadius: 3, padding: "1px 6px", fontSize: "0.55rem", color: "#374151", minWidth: 40, textAlign: "center" }}>H4</div>
        <span style={{ fontSize: "0.6rem", color: "#374151" }}>fx</span>
        <div style={{ flex: 1, background: "#fff", border: "1px solid #D1D5DB", borderRadius: 3, padding: "1px 8px", fontSize: "0.58rem", color: "#6B7280", fontFamily: "monospace" }}>
          =IF(G4&gt;=9,"OVERTIME",IF(G4&gt;=8,"ON TARGET",IF(G4&gt;=7,"REVIEW","UNDER")))
        </div>
      </div>

      {/* Sheet */}
      <div style={{ background: "#fff", overflowX: "auto" }}>
        {/* Column letters */}
        <div style={{ display: "flex", background: "#F3F4F6", borderBottom: "1px solid #D1D5DB" }}>
          {["", "A", "B", "C", "D", "E", "F", "G", "H"].map((l, i) => (
            <div key={i} style={{ minWidth: i === 0 ? 24 : i === 1 ? 90 : i === 7 ? 52 : i === 8 ? 70 : 46, textAlign: "center", fontSize: "0.52rem", color: "#6B7280", padding: "2px 0", borderRight: "1px solid #E5E7EB", fontWeight: 600 }}>{l}</div>
          ))}
        </div>

        {/* Header row */}
        <div style={{ display: "flex", background: "#1E3A5F", borderBottom: "2px solid #D1D5DB" }}>
          <div style={{ minWidth: 24, borderRight: "1px solid #2D4E6B", fontSize: "0.52rem", color: "#94A3B8", textAlign: "center", padding: "4px 0" }}>1</div>
          <div style={{ minWidth: 90, padding: "4px 6px", fontSize: "0.58rem", fontWeight: 700, color: "#fff", borderRight: "1px solid #2D4E6B" }}>Employee</div>
          {days.map(d => (
            <div key={d} style={{ minWidth: 46, padding: "4px 3px", fontSize: "0.52rem", fontWeight: 700, color: "#CBD5E1", borderRight: "1px solid #2D4E6B", textAlign: "center" }}>{d}</div>
          ))}
          <div style={{ minWidth: 52, padding: "4px 3px", fontSize: "0.52rem", fontWeight: 700, color: "#93C5FD", borderRight: "1px solid #2D4E6B", textAlign: "center" }}>Total</div>
          <div style={{ minWidth: 70, padding: "4px 3px", fontSize: "0.52rem", fontWeight: 700, color: "#FDE68A", textAlign: "center" }}>Status</div>
        </div>

        {/* Data rows */}
        {employees.map((emp, ri) => {
          const tot = total(emp);
          const { bg: sBg, color: sColor } = cellColor(tot / 5);
          return (
            <motion.div key={emp.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: ri * 0.12 }}
              style={{ display: "flex", borderBottom: "1px solid #E5E7EB", background: ri % 2 === 0 ? "#fff" : "#F9FAFB" }}
            >
              <div style={{ minWidth: 24, borderRight: "1px solid #E5E7EB", fontSize: "0.5rem", color: "#9CA3AF", textAlign: "center", padding: "4px 0", alignSelf: "center" }}>{ri + 2}</div>
              <div style={{ minWidth: 90, padding: "4px 6px", fontSize: "0.6rem", fontWeight: 600, color: "#111827", borderRight: "1px solid #E5E7EB" }}>{emp.name}</div>
              {[emp.mon, emp.tue, emp.wed, emp.thu, emp.fri].map((h, di) => {
                const { bg, color } = cellColor(h);
                return (
                  <motion.div key={di}
                    initial={{ background: "#fff" }}
                    whileInView={{ background: bg }}
                    viewport={{ once: true }}
                    transition={{ delay: ri * 0.12 + di * 0.08 + 0.3 }}
                    style={{ minWidth: 46, padding: "4px 3px", fontSize: "0.6rem", fontWeight: 600, color, borderRight: "1px solid #E5E7EB", textAlign: "center" }}
                  >
                    {h}
                  </motion.div>
                );
              })}
              <div style={{ minWidth: 52, padding: "4px 3px", fontSize: "0.62rem", fontWeight: 800, color: "#1D4ED8", borderRight: "1px solid #E5E7EB", textAlign: "center" }}>{tot.toFixed(1)}</div>
              <motion.div
                initial={{ background: "#fff" }}
                whileInView={{ background: sBg }}
                viewport={{ once: true }}
                transition={{ delay: ri * 0.12 + 0.7 }}
                style={{ minWidth: 70, padding: "4px 3px", fontSize: "0.52rem", fontWeight: 700, color: sColor, textAlign: "center", alignSelf: "center" }}
              >
                {tot / 5 >= 9 ? "OVERTIME" : tot / 5 >= 8 ? "ON TARGET" : tot / 5 >= 7 ? "REVIEW" : "UNDER"}
              </motion.div>
            </motion.div>
          );
        })}

        {/* Footer */}
        <div style={{ padding: "6px 8px", background: "#F9FAFB", borderTop: "2px solid #D1D5DB", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", gap: 12 }}>
            {[{ color: "#DCFCE7", label: "On Target (8h)" }, { color: "#FEF9C3", label: "Review (7–7.9h)" }, { color: "#FEE2E2", label: "OT / Under" }].map(l => (
              <div key={l.label} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <div style={{ width: 10, height: 10, background: l.color, borderRadius: 2, border: "1px solid rgba(0,0,0,0.08)" }} />
                <span style={{ fontSize: "0.5rem", color: "#6B7280" }}>{l.label}</span>
              </div>
            ))}
          </div>
          <span style={{ fontSize: "0.5rem", color: "#9CA3AF", fontStyle: "italic" }}>⚡ Auto-coloured by UiPath RPA · MetaLanka HR</span>
        </div>
      </div>
    </motion.div>
  );
}

// ── RPA Project Section ────────────────────────────────────────────────────────

export function RPAProjectSection() {
  return (
    <div style={{ background: "#fff" }}>

      {/* Intro */}
      <FadeUp>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "48px 28px 40px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ width: 36, height: 2, background: RPA_TEAL, borderRadius: 2 }} />
            <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.72rem", fontWeight: 700, color: RPA_TEAL, letterSpacing: "0.2em", textTransform: "uppercase" }}>Featured Project · 07</span>
          </div>

          {/* Company association */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#F0FDFA", border: "1px solid #99F6E4", borderRadius: 10, padding: "8px 16px", marginBottom: 16 }}>
            <MetaLankaLogo size={34} />
            <div>
              <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.82rem", color: RPA_TEAL, lineHeight: 1.1 }}>MetaTechno Lanka Company</div>
              <div style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.68rem", color: "#6B7280", marginTop: 2 }}>Colombo, Sri Lanka · Mar 2021 – Aug 2021</div>
            </div>
            <motion.span animate={{ opacity: [1, 0.25, 1] }} transition={{ duration: 2.2, repeat: Infinity }}
              style={{ width: 7, height: 7, borderRadius: "50%", background: "#34D399", flexShrink: 0, marginLeft: 4 }} />
          </div>

          <h3 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "clamp(1.15rem, 2vw, 1.5rem)", color: "#0C0C0C", lineHeight: 1.2, marginBottom: 16, letterSpacing: "-0.01em" }}>
            MetaLanka,{" "}
            <span style={{ background: `linear-gradient(135deg, ${RPA_TEAL}, #2563EB)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              RPA Redmine Report Generation
            </span>
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
            {["UiPath", "UiPath Orchestrator", "MS Excel", "VMware", "RPA", "Redmine"].map(tag => (
              <Chip key={tag} label={tag} size="small" sx={{ background: `${RPA_TEAL}0F`, color: RPA_TEAL, border: `1px solid ${RPA_TEAL}28`, fontWeight: 600, fontSize: "0.75rem" }} />
            ))}
          </div>

          {/* Credential badges */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              { icon: "🏢", label: "MetaTechno Lanka Company", sub: "Mar 2021 – Aug 2021", bg: "#F0FDFA", border: "#99F6E4", color: RPA_TEAL, delay: 0 },
              { icon: "👑", label: "Project Leader", sub: "End-to-end ownership", bg: `${RPA_TEAL}0C`, border: `${RPA_TEAL}30`, color: RPA_TEAL, delay: 0.07 },
              { icon: "🤖", label: "Robotic Process Automation", sub: "UiPath · Orchestrator", bg: "#EFF6FF", border: "#BFDBFE", color: "#1D4ED8", delay: 0.14 },
              { icon: "📉", label: "85% Time Saved", sub: "Manual HR reporting reduced", bg: "#F0FDF4", border: "#BBF7D0", color: "#15803D", delay: 0.21 },
              { icon: "✅", label: "Completed", sub: "Delivered to HR dept", bg: "#F8F9FA", border: "rgba(0,0,0,0.1)", color: "#374151", delay: 0.28 },
            ].map(badge => (
              <motion.div key={badge.label}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: badge.delay }}
                style={{ display: "flex", alignItems: "center", gap: 10, background: badge.bg, border: `1px solid ${badge.border}`, borderRadius: 12, padding: "10px 16px" }}
              >
                <span style={{ fontSize: "1.2rem" }}>{badge.icon}</span>
                <div>
                  <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.78rem", color: badge.color, lineHeight: 1.2 }}>{badge.label}</div>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.7rem", color: "#6B7280", marginTop: 1 }}>{badge.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </FadeUp>

      {/* Screenshots showcase */}
      <div style={{ background: "#F0FDFA", padding: "56px 20px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <FadeUp>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
              <div style={{ width: 28, height: 2, background: RPA_TEAL, borderRadius: 2 }} />
              <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.65rem", fontWeight: 700, color: RPA_TEAL, letterSpacing: "0.2em", textTransform: "uppercase" }}>Live Automation</span>
            </div>
            <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "1.3rem", color: "#0C0C0C", marginBottom: 40 }}>Bot in Action</h4>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
            <div>
              <div style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.7rem", fontWeight: 700, color: RPA_TEAL, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>① Redmine - Bot Extracting Time Entries</div>
              <FakeRedmineScreen />
            </div>
            <div>
              <div style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.7rem", fontWeight: 700, color: "#217346", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>② Excel - Auto-Colour Work Analysis Report</div>
              <FakeExcelReport />
            </div>
          </div>
        </div>
      </div>

      {/* Narrative */}
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "64px 28px 80px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
        {[
          { icon: "🎯", label: "The Problem", text: "MetaTechno Lanka's HR department manually compiled monthly work-time analysis reports from Redmine time entries - a tedious, error-prone process that consumed several hours every reporting cycle. Each employee's logged hours had to be individually extracted, cross-referenced by project, and formatted into Excel with colour-coded status indicators." },
          { icon: "👑", label: "My Role as Project Leader", text: "As project leader, I owned the solution end-to-end - from requirement gathering with the HR team, through bot design in UiPath Studio, to deployment on UiPath Orchestrator and handover training. I designed the automation workflow, built the attended and unattended bot sequences, and ensured the output Excel reports matched the format the HR team needed." },
          { icon: "🤖", label: "How the Bot Works", text: "The UiPath bot logs into Redmine as a service account, navigates to the Spent Time report, iterates through all entries for the target period, extracts employee names, project codes, issue numbers, and hours, then writes structured data row-by-row into a pre-formatted Excel template. It then applies conditional colour-coding - green for on-target, yellow for review, red for overtime or under-hours - and saves the completed report." },
          { icon: "📉", label: "Impact", text: "The automation reduced the HR department's manual reporting time by 85%, cutting a multi-hour monthly task down to a fully automated run that completes in minutes. Errors caused by copy-paste mistakes were eliminated entirely. The bot ran on UiPath Orchestrator from a VMware-hosted environment, keeping it isolated from developer machines and schedulable by the HR team without technical assistance." },
        ].map((block, i) => (
          <RevealLeft key={block.label} delay={i * 0.1}>
            <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: `${RPA_TEAL}10`, border: `1px solid ${RPA_TEAL}22`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", flexShrink: 0, marginTop: 1 }}>{block.icon}</div>
              <div>
                <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.95rem", color: "#0C0C0C", marginBottom: 8 }}>{block.label}</h4>
                <p style={{ color: "#52525B", fontSize: "0.88rem", lineHeight: 1.82, margin: 0 }}>{block.text}</p>
              </div>
            </div>
          </RevealLeft>
        ))}
      </div>

      {/* Tech stack */}
      <div style={{ background: "#F8F9FA", padding: "64px 20px" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <FadeUp>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
              <div style={{ width: 28, height: 2, background: RPA_TEAL, borderRadius: 2 }} />
              <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.65rem", fontWeight: 700, color: RPA_TEAL, letterSpacing: "0.2em", textTransform: "uppercase" }}>Stack</span>
            </div>
            <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "1.5rem", color: "#0C0C0C", marginBottom: 40 }}>Technologies Used</h4>
          </FadeUp>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              { group: "RPA Platform", color: "#FA4616", items: [
                { slug: "uipath",    name: "UiPath Studio",       color: "#FA4616" },
                { slug: "uipath",    name: "UiPath Orchestrator", color: "#FA4616" },
              ]},
              { group: "Output & Infra", color: "#217346", items: [
                { slug: "microsoftexcel", name: "MS Excel",   color: "#217346" },
                { slug: "vmware",         name: "VMware",     color: "#607078" },
                { slug: "redmine",        name: "Redmine",    color: "#B22222" },
              ]},
            ].map((group, gi) => (
              <motion.div key={group.group}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: gi * 0.06 }}
                style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)", borderRadius: 16, padding: "18px 22px", display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}
              >
                <div style={{ minWidth: 160, flexShrink: 0 }}>
                  <div style={{ width: 24, height: 2, background: group.color, borderRadius: 2, marginBottom: 6 }} />
                  <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.72rem", fontWeight: 700, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.1em" }}>{group.group}</span>
                </div>
                <div style={{ width: 1, height: 36, background: "rgba(0,0,0,0.1)", flexShrink: 0 }} />
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, flex: 1 }}>
                  {group.items.map((item, ii) => (
                    <motion.div key={item.name + ii} whileHover={{ y: -3, scale: 1.06 }}
                      style={{ display: "flex", alignItems: "center", gap: 8, background: `${item.color}18`, border: `1px solid ${item.color}35`, borderRadius: 10, padding: "7px 13px", cursor: "default" }}
                      onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = `0 4px 16px ${item.color}40`; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
                    >
                      <img src={`https://cdn.simpleicons.org/${item.slug}/${item.color.replace("#","")}`} alt={item.name} style={{ width: 16, height: 16, flexShrink: 0 }} onError={e => { (e.target as HTMLImageElement).style.display = "none"; }} />
                      <span style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.75rem", fontWeight: 500, color: "#0C0C0C", whiteSpace: "nowrap" }}>{item.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Solo contributor note */}
      <div style={{ background: `${RPA_TEAL}07`, borderTop: `1px solid ${RPA_TEAL}14`, padding: "40px 20px 72px" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <FadeUp>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ position: "relative", flexShrink: 0 }}>
                <img src={profileImage} alt="Rusira Liyanage" style={{ width: 72, height: 72, borderRadius: "50%", objectFit: "cover", border: `3px solid ${RPA_TEAL}` }} />
                <div style={{ position: "absolute", bottom: -2, right: -2, background: RPA_TEAL, borderRadius: "50%", width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid white" }}>
                  <span style={{ fontSize: "0.6rem", color: "#fff" }}>👑</span>
                </div>
              </div>
              <div>
                <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "1.05rem", color: "#0C0C0C", marginBottom: 3 }}>Rusira Liyanage - Project Leader</div>
                <div style={{ fontSize: "0.78rem", color: RPA_TEAL, fontWeight: 700, marginBottom: 3 }}>Full Ownership · MetaTechno Lanka RPA Initiative</div>
                <div style={{ fontSize: "0.73rem", color: "#6B7280", fontWeight: 500 }}>Requirements · UiPath bot design · Orchestrator deployment · HR team handover</div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>

    </div>
  );
}
