import React from "react";
import { motion } from "motion/react";
import Chip from "@mui/material/Chip";
import { FadeUp, RevealLeft } from "./shared";
import profileImage from "../imports/personalized_Image.jpeg";
import weifongPhoto from "../imports/weifong.jpeg";
import sampleAssistLogo from "../imports/Lz4lUXSU9geUQ7Shteza2ORUg5l1709176912817_200x200-1.png";

function SampleAssistInlineLogo() {
  return (
    <div style={{ borderRadius: 7, overflow: "hidden", background: "#fff", padding: "3px 7px", border: "1px solid #E5E7EB", display: "flex", alignItems: "center" }}>
      <img src={sampleAssistLogo} alt="Sample Assist" style={{ width: 140, objectFit: "contain", display: "block" }} />
    </div>
  );
}

export const PDF_BLUE  = "#1D4ED8";
export const PDF_DARK  = "#0F172A";
export const PDF_SLATE = "#1E3A5F";

function FakePDFReport() {
  const SA_LOGO_BLUE = "#2B5EA7";
  const rows = [
    { name: "John Carter",    dob: "14/03/1985", role: "Site Supervisor",    alcohol: "0.000", drug: "Negative", result: "PASS" },
    { name: "Sarah Mitchell", dob: "22/09/1990", role: "Equipment Operator", alcohol: "0.000", drug: "Negative", result: "PASS" },
    { name: "David Nguyen",   dob: "07/07/1978", role: "Safety Officer",     alcohol: "0.000", drug: "Negative", result: "PASS" },
    { name: "Emma Thompson",  dob: "30/11/1995", role: "Field Technician",   alcohol: "0.002", drug: "Negative", result: "REVIEW" },
    { name: "Mark Williams",  dob: "19/04/1982", role: "Team Lead",          alcohol: "0.000", drug: "Negative", result: "PASS" },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      style={{ background: "#fff", borderRadius: 6, boxShadow: "0 32px 80px rgba(0,0,0,0.22), 0 8px 24px rgba(0,0,0,0.1)", maxWidth: 760, margin: "0 auto", fontFamily: '"Inter", sans-serif', overflow: "hidden" }}
    >
      <div style={{ background: "#3C4043", padding: "7px 14px", display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ display: "flex", gap: 5 }}>
          {["#FF5F57","#FFBD2E","#28C840"].map(c => <div key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c }} />)}
        </div>
        <div style={{ flex: 1, background: "#5F6368", borderRadius: 4, padding: "2px 10px", fontSize: "0.58rem", color: "#E8EAED", textAlign: "center" }}>
          SampleAssist_FieldTest_WorkRecord_2024.pdf
        </div>
        <div style={{ fontSize: "0.58rem", color: "#9AA0A6" }}>🔒</div>
      </div>

      <div style={{ padding: "28px 36px 24px", background: "#fff" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20, paddingBottom: 16, borderBottom: `3px solid ${SA_LOGO_BLUE}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 32, height: 32, background: SA_LOGO_BLUE, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontWeight: 900, fontSize: "0.85rem", color: "#fff", letterSpacing: "-0.05em" }}>SA</span>
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: "0.85rem", color: SA_LOGO_BLUE, letterSpacing: "-0.01em", lineHeight: 1 }}>Sample Assist</div>
              <div style={{ fontSize: "0.55rem", color: "#6B7280", marginTop: 1 }}>Workplace Testing Solutions</div>
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontWeight: 700, fontSize: "0.72rem", color: "#0C0C0C" }}>ONSITE DRUG & ALCOHOL</div>
            <div style={{ fontWeight: 700, fontSize: "0.72rem", color: "#0C0C0C" }}>FIELD TESTING - WORK RECORD</div>
            <div style={{ fontSize: "0.58rem", color: "#6B7280", marginTop: 4 }}>Report #: SA-2024-07-0042</div>
            <div style={{ fontSize: "0.58rem", color: "#6B7280" }}>Generated: 12 Jul 2024, 09:14 AM</div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 18, background: "#F8FAFF", borderRadius: 6, padding: "12px 16px", border: `1px solid ${SA_LOGO_BLUE}18` }}>
          {[
            { label: "Collection Agency",  value: "Apex Safety Services Pty Ltd" },
            { label: "Site Location",      value: "Mackay, QLD - Mining Site 4" },
            { label: "Collection Officer", value: "T. Reynolds (COC-00512)" },
            { label: "Testing Method",     value: "Oral Fluid + Breathalyser" },
            { label: "Date of Testing",    value: "12 July 2024" },
            { label: "Shift",              value: "Morning - 06:00–08:30 AEST" },
          ].map(item => (
            <div key={item.label}>
              <div style={{ fontSize: "0.54rem", fontWeight: 700, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 2 }}>{item.label}</div>
              <div style={{ fontSize: "0.66rem", fontWeight: 600, color: "#0C0C0C" }}>{item.value}</div>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: 16 }}>
          <div style={{ fontWeight: 700, fontSize: "0.68rem", color: SA_LOGO_BLUE, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Test Results</div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.61rem" }}>
            <thead>
              <tr style={{ background: SA_LOGO_BLUE }}>
                {["Full Name","DOB","Role","BAC","Drug Screen","Result"].map(h => (
                  <th key={h} style={{ padding: "6px 8px", textAlign: "left", color: "#fff", fontWeight: 700, fontSize: "0.58rem", letterSpacing: "0.04em", textTransform: "uppercase" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.name} style={{ background: i % 2 === 0 ? "#fff" : "#F8FAFF", borderBottom: "1px solid #E5E7EB" }}>
                  <td style={{ padding: "5px 8px", fontWeight: 600, color: "#0C0C0C" }}>{r.name}</td>
                  <td style={{ padding: "5px 8px", color: "#374151" }}>{r.dob}</td>
                  <td style={{ padding: "5px 8px", color: "#374151" }}>{r.role}</td>
                  <td style={{ padding: "5px 8px", color: "#374151", fontFamily: "monospace" }}>{r.alcohol}</td>
                  <td style={{ padding: "5px 8px", color: "#374151" }}>{r.drug}</td>
                  <td style={{ padding: "5px 8px" }}>
                    <span style={{ background: r.result === "PASS" ? "#DCFCE7" : "#FEF3C7", color: r.result === "PASS" ? "#15803D" : "#92400E", fontWeight: 700, fontSize: "0.56rem", padding: "2px 7px", borderRadius: 4, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      {r.result}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
          {[
            { label: "Total Tested", value: "5", bg: "#EFF6FF", color: SA_LOGO_BLUE },
            { label: "Passed",       value: "4", bg: "#DCFCE7", color: "#15803D" },
            { label: "Under Review", value: "1", bg: "#FEF3C7", color: "#92400E" },
            { label: "Failed",       value: "0", bg: "#FEE2E2", color: "#B91C1C" },
          ].map(s => (
            <div key={s.label} style={{ flex: 1, background: s.bg, borderRadius: 6, padding: "8px 10px", textAlign: "center" }}>
              <div style={{ fontWeight: 800, fontSize: "1rem", color: s.color, lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: "0.55rem", color: s.color, fontWeight: 600, marginTop: 3, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div style={{ borderTop: "1px solid #E5E7EB", paddingTop: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "0.55rem", color: "#9CA3AF" }}>
            Generated by <span style={{ color: SA_LOGO_BLUE, fontWeight: 600 }}>Sample Assist PDF Engine</span> using Puppeteer + EJS templates.
          </div>
          <div style={{ fontSize: "0.55rem", color: "#9CA3AF", fontFamily: "monospace" }}>Page 1 of 1 · CONFIDENTIAL</div>
        </div>
      </div>
    </motion.div>
  );
}

function PDFTeamSection() {
  return (
    <div style={{ background: `${PDF_BLUE}07`, borderTop: `1px solid ${PDF_BLUE}14`, padding: "56px 20px" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <FadeUp>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
            <div style={{ width: 28, height: 2, background: PDF_BLUE, borderRadius: 2 }} />
            <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.65rem", fontWeight: 700, color: PDF_BLUE, letterSpacing: "0.2em", textTransform: "uppercase" }}>Contributors</span>
          </div>
          <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "1.2rem", color: "#0C0C0C", marginBottom: 32 }}>Project Team</h4>

          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20, paddingBottom: 20, borderBottom: `1px solid ${PDF_BLUE}15` }}>
            <div style={{ position: "relative", flexShrink: 0 }}>
              <img src={profileImage} alt="Rusira Liyanage" style={{ width: 72, height: 72, borderRadius: "50%", objectFit: "cover", border: `3px solid ${PDF_BLUE}` }} />
              <div style={{ position: "absolute", bottom: -2, right: -2, background: PDF_BLUE, borderRadius: "50%", width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid white" }}>
                <span style={{ fontSize: "0.6rem", color: "#fff" }}>★</span>
              </div>
            </div>
            <div>
              <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "1.05rem", color: "#0C0C0C", marginBottom: 3 }}>Rusira Liyanage</div>
              <div style={{ fontSize: "0.78rem", color: PDF_BLUE, fontWeight: 700, marginBottom: 3 }}>PDF Engine Contributor</div>
              <div style={{ fontSize: "0.73rem", color: "#6B7280", fontWeight: 500 }}>Puppeteer migration · EJS HTML template development · Dynamic report formatting</div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <motion.div
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              style={{ display: "flex", alignItems: "center", gap: 12, background: "#fff", borderRadius: 12, padding: "14px 18px", border: `1px solid ${PDF_BLUE}18`, flex: "1 1 220px", maxWidth: 340 }}
            >
              <img src={weifongPhoto} alt="Wei Fong" style={{ width: 68, height: 68, borderRadius: "50%", objectFit: "cover", border: `2px solid ${PDF_BLUE}35`, flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.82rem", color: "#0C0C0C", lineHeight: 1.2 }}>Wei Fong</div>
                <div style={{ fontSize: "0.7rem", color: "#6B7280", marginTop: 3 }}>Full-Stack Developer · Sample Assist</div>
              </div>
            </motion.div>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}

export function PDFProjectSection() {
  return (
    <div style={{ background: "#fff" }}>
      <FadeUp>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "48px 28px 40px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ width: 36, height: 2, background: PDF_BLUE, borderRadius: 2 }} />
            <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.72rem", fontWeight: 700, color: PDF_BLUE, letterSpacing: "0.2em", textTransform: "uppercase" }}>Featured Project · 06</span>
          </div>

          {/* Sample Assist association */}
          <motion.div
            initial={{ opacity: 0, y: -8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#EFF6FF", border: "1px solid #BFDBFE", borderRadius: 10, padding: "8px 16px", marginBottom: 16 }}
          >
            <SampleAssistInlineLogo />
            <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.95rem", color: "#374151" }}>Associated with Sample Assist</span>
            <motion.span animate={{ opacity: [1, 0.25, 1] }} transition={{ duration: 2.2, repeat: Infinity }}
              style={{ width: 7, height: 7, borderRadius: "50%", background: "#34D399", flexShrink: 0 }} />
          </motion.div>
          <h3 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "clamp(1.15rem, 2vw, 1.5rem)", color: "#0C0C0C", lineHeight: 1.2, marginBottom: 16, letterSpacing: "-0.01em" }}>
            Sample Assist,{" "}
            <span style={{ background: `linear-gradient(135deg, ${PDF_BLUE}, #7C3AED)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              HTML-to-PDF Generation Engine
            </span>
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
            {["Node.js", "Puppeteer", "EJS", "HTML/CSS", "Firebase", "html-pdf"].map(tag => (
              <Chip key={tag} label={tag} size="small" sx={{ background: `${PDF_BLUE}0F`, color: PDF_BLUE, border: `1px solid ${PDF_BLUE}28`, fontWeight: 600, fontSize: "0.75rem" }} />
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              { icon: "🏢", label: "Sample Assist", sub: "Nov 2023 – Present", bg: "#EFF6FF", border: "#BFDBFE", color: "#1D4ED8", delay: 0 },
              { icon: "⚙️", label: "Puppeteer Migration", sub: "HTML-PDF → Puppeteer", bg: `${PDF_BLUE}0C`, border: `${PDF_BLUE}30`, color: PDF_BLUE, delay: 0.07 },
              { icon: "📄", label: "Template Contributor", sub: "EJS · Dynamic HTML · CSS", bg: "#F0FDF4", border: "#BBF7D0", color: "#15803D", delay: 0.14 },
              { icon: "🚀", label: "Live Enterprise App", sub: "Delivered to Production", bg: "#F8F9FA", border: "rgba(0,0,0,0.1)", color: "#374151", delay: 0.21 },
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

      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 28px 80px", display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 48, alignItems: "start" }}>
        <div style={{ position: "sticky", top: 88 }}>
          <FakePDFReport />
          <motion.div
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ display: "flex", alignItems: "center", gap: 8, justifyContent: "center", marginTop: 14 }}
          >
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: PDF_BLUE, opacity: 0.5 }} />
            <span style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.65rem", color: "#9CA3AF", fontStyle: "italic" }}>
              Sample report - illustrative only. Real reports are client-confidential.
            </span>
          </motion.div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
          {[
            { icon: "🎯", label: "The Problem", text: "Sample Assist generates PDF collection reports for every onsite Drug & Alcohol testing session - records capturing test subjects, BAC readings, drug screen results, and chain-of-custody metadata. The legacy html-pdf library was brittle, produced inconsistent rendering across environments, and couldn't handle the formatting complexity required for new collection report templates." },
            { icon: "🏗️", label: "My Contribution", text: "I led the migration of the PDF generation pipeline from html-pdf to Puppeteer - a headless Chromium approach that gives pixel-perfect, browser-consistent output. I designed and built the dynamic EJS HTML templates that power the new report formats, wiring in conditional sections, summary tables, and per-row styling based on Firebase data. The templates handle variable row counts, multi-agency branding, and pass/fail colour coding." },
            { icon: "⚡", label: "Why Puppeteer", text: "Puppeteer renders templates through a real browser engine, so CSS grid, custom fonts, and print media queries all behave exactly as designed - no phantom layout bugs. It also opens the door to complex multi-page reports with page-break control, something html-pdf handled poorly. The switch dramatically reduced rendering failures in production." },
            { icon: "💡", label: "What I Learned", text: "This was my first deep dive into server-side PDF generation at production scale. I learned how to template-drive dynamic documents with EJS, how to tune Puppeteer's print options for consistent A4 output, and how to manage Firebase data queries efficiently to feed the report pipeline without impacting API latency." },
          ].map((block, i) => (
            <RevealLeft key={block.label} delay={i * 0.1}>
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: `${PDF_BLUE}10`, border: `1px solid ${PDF_BLUE}22`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", flexShrink: 0, marginTop: 1 }}>{block.icon}</div>
                <div>
                  <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.95rem", color: "#0C0C0C", marginBottom: 8 }}>{block.label}</h4>
                  <p style={{ color: "#52525B", fontSize: "0.88rem", lineHeight: 1.82, margin: 0 }}>{block.text}</p>
                </div>
              </div>
            </RevealLeft>
          ))}
        </div>
      </div>

      <div style={{ background: "#F8F9FA", padding: "64px 20px" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <FadeUp>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
              <div style={{ width: 28, height: 2, background: PDF_BLUE, borderRadius: 2 }} />
              <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.65rem", fontWeight: 700, color: PDF_BLUE, letterSpacing: "0.2em", textTransform: "uppercase" }}>Stack</span>
            </div>
            <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "1.5rem", color: "#0C0C0C", marginBottom: 40 }}>Technologies Used</h4>
          </FadeUp>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              { group: "PDF Engine", color: "#339933", items: [{ slug: "nodedotjs", name: "Node.js", color: "#339933" }, { slug: "puppeteer", name: "Puppeteer", color: "#40B5A4" }, { slug: "ejs", name: "EJS", color: "#B4CA65" }] },
              { group: "Templates", color: "#E34F26", items: [{ slug: "html5", name: "HTML5", color: "#E34F26" }, { slug: "css3", name: "CSS3", color: "#1572B6" }, { slug: "javascript", name: "JavaScript", color: "#F7DF1E" }] },
              { group: "Platform", color: "#FFCA28", items: [{ slug: "firebase", name: "Firebase", color: "#FFCA28" }, { slug: "git", name: "Git", color: "#F05032" }, { slug: "github", name: "GitHub", color: "#181717" }] },
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
                  {group.items.map(item => (
                    <motion.div key={item.name} whileHover={{ y: -3, scale: 1.06 }}
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

      <PDFTeamSection />
    </div>
  );
}
