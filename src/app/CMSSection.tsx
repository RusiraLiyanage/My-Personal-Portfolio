import React from "react";
import { motion } from "motion/react";
import Chip from "@mui/material/Chip";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FadeUp, RevealLeft } from "./shared";
import profileImage from "../imports/personalized_Image.jpeg";
import thushalPhoto from "../imports/thushal.jpeg";
import eishanPhoto from "../imports/Eishan.jpeg";
import kishenPhoto from "../imports/kishen.jpeg";
import cmsLanding from "../imports/Screenshot_2023-10-15_152308.jpg";
import cmsRegistration from "../imports/Screenshot_2023-10-15_152426.jpg";
import cmsLogin from "../imports/Screenshot_2023-10-15_152453.jpg";
import cmsWorkshopReg from "../imports/Screenshot_2023-10-15_152519.jpg";

export const CMS_INDIGO = "#4338CA";
export const CMS_DARK = "#1E1B4B";

function CMSBrowserFrame({ src, alt, delay = 0, zoom = 1, originY = "top" }: { src: string; alt: string; delay?: number; zoom?: number; originY?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay }}
      style={{ borderRadius: 14, overflow: "hidden", boxShadow: "0 20px 56px rgba(0,0,0,0.14)", border: "1px solid rgba(0,0,0,0.07)", background: "#fff" }}
    >
      <div style={{ background: "#F1F3F5", padding: "9px 12px", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ display: "flex", gap: 5 }}>
          {["#FF5F57","#FFBD2E","#28C840"].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />)}
        </div>
        <div style={{ flex: 1, background: "#fff", borderRadius: 5, padding: "2px 9px", fontSize: "0.6rem", color: "#9CA3AF", fontFamily: '"Inter", sans-serif', border: "1px solid rgba(0,0,0,0.07)" }}>jcaf2021.conference.lk</div>
      </div>
      <div style={{ overflow: "hidden", ...(zoom > 1 ? { height: 340 } : {}) }}>
        <img src={src} alt={alt} style={{ width: "100%", display: "block", ...(zoom > 1 ? { transform: `scale(${zoom})`, transformOrigin: `center ${originY}` } : {}) }} />
      </div>
    </motion.div>
  );
}

function CMSTeamSection() {
  const members = [
    { name: "Thushal Kulathileka", role: "Team Leader · Full-Stack", photo: thushalPhoto },
    { name: "Eishan",              role: "Full-Stack Developer",      photo: eishanPhoto  },
    { name: "Kishen",              role: "Full-Stack Developer",      photo: kishenPhoto  },
  ];
  return (
    <div style={{ background: `${CMS_INDIGO}07`, borderTop: `1px solid ${CMS_INDIGO}14`, padding: "56px 20px" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <FadeUp>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
            <div style={{ width: 28, height: 2, background: CMS_INDIGO, borderRadius: 2 }} />
            <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.65rem", fontWeight: 700, color: CMS_INDIGO, letterSpacing: "0.2em", textTransform: "uppercase" }}>Project Team</span>
          </div>
          <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "1.2rem", color: "#0C0C0C", marginBottom: 32 }}>Our Team</h4>

          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20, paddingBottom: 20, borderBottom: `1px solid ${CMS_INDIGO}15` }}>
            <div style={{ position: "relative", flexShrink: 0 }}>
              <img src={profileImage} alt="Rusira Liyanage" style={{ width: 72, height: 72, borderRadius: "50%", objectFit: "cover", border: `3px solid ${CMS_INDIGO}` }} />
              <div style={{ position: "absolute", bottom: -2, right: -2, background: CMS_INDIGO, borderRadius: "50%", width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid white" }}>
                <span style={{ fontSize: "0.6rem", color: "#fff" }}>★</span>
              </div>
            </div>
            <div>
              <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "1.05rem", color: "#0C0C0C", marginBottom: 3 }}>Rusira Liyanage</div>
              <div style={{ fontSize: "0.78rem", color: CMS_INDIGO, fontWeight: 700, marginBottom: 3 }}>Full-Stack Contributor</div>
              <div style={{ fontSize: "0.73rem", color: "#6B7280", fontWeight: 500 }}>React.js frontend components · Node.js / Express.js API routes · MongoDB data modelling</div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {members.map((m, i) => (
              <motion.div key={m.name}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                style={{ display: "flex", alignItems: "center", gap: 12, background: "#fff", borderRadius: 12, padding: "14px 18px", border: `1px solid ${CMS_INDIGO}18`, flex: "1 1 220px" }}
              >
                <img src={m.photo} alt={m.name} style={{ width: 68, height: 68, borderRadius: "50%", objectFit: "cover", border: `2px solid ${CMS_INDIGO}35`, flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.82rem", color: "#0C0C0C", lineHeight: 1.2 }}>{m.name}</div>
                  <div style={{ fontSize: "0.7rem", color: "#6B7280", marginTop: 3 }}>{m.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </FadeUp>
      </div>
    </div>
  );
}

function CMSPublicFeatures() {
  return (
    <div style={{ background: "#F8F9FA", padding: "80px 20px" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <FadeUp>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
            <div style={{ width: 28, height: 2, background: CMS_INDIGO, borderRadius: 2 }} />
            <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.65rem", fontWeight: 700, color: CMS_INDIGO, letterSpacing: "0.2em", textTransform: "uppercase" }}>Public Portal</span>
          </div>
          <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "1.5rem", color: "#0C0C0C", marginBottom: 64 }}>Conference Website & Registration</h4>
        </FadeUp>

        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 48, alignItems: "center", marginBottom: 80 }}>
          <CMSBrowserFrame src={cmsLanding} alt="JCAF2021 conference landing page" zoom={1.05} originY="top" />
          <FadeUp delay={0.1}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: `${CMS_INDIGO}12`, border: `1px solid ${CMS_INDIGO}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem" }}>🌐</div>
              <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.68rem", fontWeight: 700, color: CMS_INDIGO, textTransform: "uppercase", letterSpacing: "0.12em" }}>01</span>
            </div>
            <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "1.1rem", color: "#0C0C0C", marginBottom: 14 }}>Conference Landing Page</h4>
            <p style={{ color: "#52525B", fontSize: "0.9rem", lineHeight: 1.8, margin: "0 0 14px" }}>
              The public-facing site presents JCAF2021 - hosted at SLIIT - with the conference date range, venue, and navigation to all major sections including For Authors, Workshops, Special Sessions, Registrations, Committee, Past Proceedings, and Contact Us.
            </p>
            <p style={{ color: "#52525B", fontSize: "0.9rem", lineHeight: 1.8, margin: 0 }}>
              A technology-themed watermark hero sets the tone for an academic web frameworks conference, targeting researchers, practitioners, and attendees.
            </p>
          </FadeUp>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 48, alignItems: "center", marginBottom: 80 }}>
          <FadeUp delay={0.1}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: `${CMS_INDIGO}12`, border: `1px solid ${CMS_INDIGO}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem" }}>📝</div>
              <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.68rem", fontWeight: 700, color: CMS_INDIGO, textTransform: "uppercase", letterSpacing: "0.12em" }}>02</span>
            </div>
            <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "1.1rem", color: "#0C0C0C", marginBottom: 14 }}>Role-Based Registration</h4>
            <p style={{ color: "#52525B", fontSize: "0.9rem", lineHeight: 1.8, margin: "0 0 14px" }}>
              Three distinct registration paths - Researcher, Attendee, and Workshop Presenter - each with its own form and payment flow. Each maps to a dedicated backend model and controller.
            </p>
          </FadeUp>
          <CMSBrowserFrame src={cmsRegistration} alt="Role-based registration" zoom={1.1} originY="center" />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 48, alignItems: "center" }}>
          <CMSBrowserFrame src={cmsWorkshopReg} alt="Workshop presenter registration modal" zoom={1.1} originY="center" />
          <FadeUp delay={0.1}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: `${CMS_INDIGO}12`, border: `1px solid ${CMS_INDIGO}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem" }}>🎤</div>
              <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.68rem", fontWeight: 700, color: CMS_INDIGO, textTransform: "uppercase", letterSpacing: "0.12em" }}>03</span>
            </div>
            <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "1.1rem", color: "#0C0C0C", marginBottom: 14 }}>Workshop Proposal Submission</h4>
            <p style={{ color: "#52525B", fontSize: "0.9rem", lineHeight: 1.8, margin: 0 }}>
              Workshop presenters register via a modal form collecting full name, address, email, mobile number, and a cloud-hosted proposal link. Submitting creates a MongoDB record and triggers an email notification via the mail controller.
            </p>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}

function CMSAdminFeatures() {
  return (
    <div style={{ background: "#fff", padding: "80px 20px" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <FadeUp>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
            <div style={{ width: 28, height: 2, background: CMS_INDIGO, borderRadius: 2 }} />
            <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.65rem", fontWeight: 700, color: CMS_INDIGO, letterSpacing: "0.2em", textTransform: "uppercase" }}>Admin Panel</span>
          </div>
          <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "1.5rem", color: "#0C0C0C", marginBottom: 64 }}>Editor, Reviewer & Admin Access</h4>
        </FadeUp>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 48, alignItems: "center" }}>
          <FadeUp delay={0.1}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: `${CMS_INDIGO}12`, border: `1px solid ${CMS_INDIGO}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem" }}>🔐</div>
              <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.68rem", fontWeight: 700, color: CMS_INDIGO, textTransform: "uppercase", letterSpacing: "0.12em" }}>01</span>
            </div>
            <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "1.1rem", color: "#0C0C0C", marginBottom: 14 }}>Secure Admin & Editor Login</h4>
            <p style={{ color: "#52525B", fontSize: "0.9rem", lineHeight: 1.8, margin: "0 0 20px" }}>
              Separate login portals for admins, editors, and reviewers gate privileged access behind authentication. Each role&apos;s dashboard is only accessible after a successful credential check against the respective MongoDB collection.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {[
                { icon: "👑", role: "Admin",     desc: "Full platform oversight" },
                { icon: "✏️", role: "Editor",    desc: "Paper & proposal management" },
                { icon: "🔍", role: "Reviewer",  desc: "Paper review & scoring" },
                { icon: "📊", role: "Dashboard", desc: "Lists, stats, inquiries" },
              ].map(r => (
                <div key={r.role} style={{ background: `${CMS_INDIGO}07`, border: `1px solid ${CMS_INDIGO}15`, borderRadius: 10, padding: "10px 12px" }}>
                  <div style={{ fontSize: "1rem", marginBottom: 4 }}>{r.icon}</div>
                  <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.75rem", color: CMS_INDIGO }}>{r.role}</div>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.68rem", color: "#6B7280", marginTop: 2 }}>{r.desc}</div>
                </div>
              ))}
            </div>
          </FadeUp>
          <CMSBrowserFrame src={cmsLogin} alt="Admin and editor login portal" zoom={1.05} originY="top" />
        </div>
      </div>
    </div>
  );
}

export function CMSProjectSection() {
  return (
    <div style={{ background: "#fff" }}>
      <FadeUp>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "48px 28px 40px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ width: 36, height: 2, background: CMS_INDIGO, borderRadius: 2 }} />
            <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.72rem", fontWeight: 700, color: CMS_INDIGO, letterSpacing: "0.2em", textTransform: "uppercase" }}>Featured Project · 05</span>
          </div>
          <h3 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "clamp(1.15rem, 2vw, 1.5rem)", color: "#0C0C0C", lineHeight: 1.2, marginBottom: 16, letterSpacing: "-0.01em" }}>
            JCAF2021,{" "}
            <span style={{ background: `linear-gradient(135deg, ${CMS_INDIGO}, #7C3AED)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Conference Management System
            </span>
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
            {["React.js", "Node.js", "Express.js", "MongoDB", "SLIIT IWT"].map(tag => (
              <Chip key={tag} label={tag} size="small" sx={{ background: `${CMS_INDIGO}0F`, color: CMS_INDIGO, border: `1px solid ${CMS_INDIGO}28`, fontWeight: 600, fontSize: "0.75rem" }} />
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              { icon: "🎓", label: "Sri Lanka Institute of Information Technology", sub: "BSc (Hons) IT - Software Engineering", bg: "#EFF6FF", border: "#BFDBFE", color: "#1D4ED8", delay: 0 },
              { icon: "📚", label: "Internet & Web Technologies", sub: "3rd Year · 2nd Semester", bg: `${CMS_INDIGO}0C`, border: `${CMS_INDIGO}30`, color: CMS_INDIGO, delay: 0.07 },
              { icon: "💻", label: "Full-Stack Contributor", sub: "React · Node.js · MongoDB", bg: "#F0FDF4", border: "#BBF7D0", color: "#15803D", delay: 0.14 },
              { icon: "✅", label: "Completed", sub: "2021", bg: "#F8F9FA", border: "rgba(0,0,0,0.1)", color: "#374151", delay: 0.21 },
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
        <div style={{ position: "sticky", top: 88, display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            { src: cmsLanding, alt: "JCAF2021 conference landing page", zoom: 1.05, originY: "top" },
            { src: cmsLogin,   alt: "Admin / Editor login",             zoom: 1.05, originY: "top" },
          ].map((item, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: i * 0.15 }}
            >
              <div style={{ borderRadius: 14, overflow: "hidden", boxShadow: "0 20px 56px rgba(0,0,0,0.14)", border: "1px solid rgba(0,0,0,0.07)" }}>
                <div style={{ background: "#F1F3F5", padding: "9px 12px", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                  <div style={{ display: "flex", gap: 5 }}>
                    {["#FF5F57","#FFBD2E","#28C840"].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />)}
                  </div>
                  <div style={{ flex: 1, background: "#fff", borderRadius: 5, padding: "2px 9px", fontSize: "0.6rem", color: "#9CA3AF", fontFamily: '"Inter", sans-serif', border: "1px solid rgba(0,0,0,0.07)" }}>jcaf2021.conference.lk</div>
                </div>
                <div style={{ height: 280, overflow: "hidden" }}>
                  <img src={item.src} alt={item.alt} style={{ width: "100%", display: "block", transform: `scale(${item.zoom})`, transformOrigin: `center ${item.originY}` }} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
          {[
            { icon: "🎯", label: "Problem Solved", text: "Academic conferences involve complex coordination - researchers submit papers, reviewers assess them, editors manage submissions, attendees register, and workshop presenters propose sessions. JCAF2021 centralises all of this into one web platform, giving every role a dedicated flow while admins maintain oversight from a single dashboard." },
            { icon: "🏗️", label: "How I Built It", text: "Built as a MERN stack application - React.js frontend with role-specific dashboards, and a Node.js + Express.js REST API backed by MongoDB. The backend exposes controllers for seven distinct roles: admin, attendee, editor, researcher, reviewer, workshop, and workshop presenter. I contributed across both frontend components and backend API routes." },
            { icon: "💡", label: "What I Learned", text: "This project was my first experience building a multi-role system from scratch - designing separate auth flows, dashboards, and data models for each user type taught me how to think in terms of role-based access control. Working in a four-person team on a shared codebase sharpened my Git collaboration and component reuse skills." },
          ].map((block, i) => (
            <RevealLeft key={block.label} delay={i * 0.12}>
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: `${CMS_INDIGO}10`, border: `1px solid ${CMS_INDIGO}22`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", flexShrink: 0, marginTop: 1 }}>{block.icon}</div>
                <div>
                  <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.95rem", color: "#0C0C0C", marginBottom: 8 }}>{block.label}</h4>
                  <p style={{ color: "#52525B", fontSize: "0.88rem", lineHeight: 1.82, margin: 0 }}>{block.text}</p>
                </div>
              </div>
            </RevealLeft>
          ))}
        </div>
      </div>

      <div style={{ background: "#fff", padding: "64px 20px" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <FadeUp>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
              <div style={{ width: 28, height: 2, background: CMS_INDIGO, borderRadius: 2 }} />
              <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.65rem", fontWeight: 700, color: CMS_INDIGO, letterSpacing: "0.2em", textTransform: "uppercase" }}>Full Project Stack</span>
            </div>
            <h4 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "1.5rem", color: "#0C0C0C", marginBottom: 40 }}>Technologies Used</h4>
          </FadeUp>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              { group: "Frontend", color: "#61DAFB", items: [{ slug: "react", name: "React.js", color: "#61DAFB" }, { slug: "javascript", name: "JavaScript", color: "#F7DF1E" }, { slug: "html5", name: "HTML5", color: "#E34F26" }, { slug: "css3", name: "CSS3", color: "#1572B6" }] },
              { group: "Backend",  color: "#339933", items: [{ slug: "nodedotjs", name: "Node.js", color: "#339933" }, { slug: "express", name: "Express.js", color: "#000000" }, { slug: "mongodb", name: "MongoDB", color: "#47A248" }] },
              { group: "DevOps",   color: "#F05032", items: [{ slug: "git", name: "Git", color: "#F05032" }, { slug: "github", name: "GitHub", color: "#181717" }] },
            ].map((group, gi) => (
              <motion.div key={group.group}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: gi * 0.06 }}
                style={{ background: "#F8F9FA", border: "1px solid rgba(0,0,0,0.07)", borderRadius: 16, padding: "18px 22px", display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}
              >
                <div style={{ minWidth: 130, flexShrink: 0 }}>
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

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 28px 64px" }}>
        <FadeUp>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            <motion.a href="https://github.com/RusiraLiyanage/Conference-Management-System-Frontend-" target="_blank" rel="noopener noreferrer"
              whileHover={{ y: -3 }} transition={{ duration: 0.2 }}
              style={{ display: "flex", alignItems: "center", gap: 14, background: `linear-gradient(135deg, ${CMS_DARK}, ${CMS_INDIGO})`, color: "#fff", borderRadius: 14, padding: "18px 28px", textDecoration: "none", flex: "1 1 280px" }}>
              <GitHubIcon sx={{ fontSize: 28 }} />
              <div>
                <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.88rem" }}>Frontend Source</div>
                <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.6)", marginTop: 2 }}>React.js · JavaScript</div>
              </div>
            </motion.a>
            <motion.a href="https://github.com/RusiraLiyanage/Conference-Management-System-Backend-" target="_blank" rel="noopener noreferrer"
              whileHover={{ y: -3 }} transition={{ duration: 0.2 }}
              style={{ display: "flex", alignItems: "center", gap: 14, background: "#0C0C0C", color: "#fff", borderRadius: 14, padding: "18px 28px", textDecoration: "none", flex: "1 1 280px" }}>
              <GitHubIcon sx={{ fontSize: 28 }} />
              <div>
                <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.88rem" }}>Backend Source</div>
                <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.5)", marginTop: 2 }}>Node.js · Express.js · MongoDB</div>
              </div>
            </motion.a>
          </div>
        </FadeUp>
      </div>

      <CMSTeamSection />
      <CMSPublicFeatures />
      <CMSAdminFeatures />
    </div>
  );
}
