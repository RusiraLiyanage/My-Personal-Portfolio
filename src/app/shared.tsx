import React, { ReactNode, useRef } from "react";
import { motion, useInView } from "motion/react";
import Chip from "@mui/material/Chip";

export function FadeUp({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealLeft({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, x: -48 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay }}>
      {children}
    </motion.div>
  );
}

export function TechBadge({ slug, name, color, emoji }: { slug?: string; name: string; color: string; emoji?: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 7, minWidth: 64 }}>
      <div style={{ width: 44, height: 44, borderRadius: 12, background: `${color}18`, border: `1.5px solid ${color}35`, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {emoji ? (
          <span style={{ fontSize: "1.3rem" }}>{emoji}</span>
        ) : slug ? (
          <img src={`https://cdn.simpleicons.org/${slug}/${color.replace("#", "")}`} alt={name} style={{ width: 24, height: 24 }} onError={e => { (e.target as HTMLImageElement).style.display = "none"; }} />
        ) : null}
      </div>
      <span style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.65rem", fontWeight: 600, color: "#374151", textAlign: "center", lineHeight: 1.3 }}>{name}</span>
    </div>
  );
}

export function CredentialBadge({ icon, label, sub, bg, border, color, delay = 0 }: { icon: string; label: string; sub: string; bg: string; border: string; color: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay }}
      style={{ display: "flex", alignItems: "center", gap: 10, background: bg, border: `1px solid ${border}`, borderRadius: 12, padding: "10px 16px" }}
    >
      <span style={{ fontSize: "1.2rem" }}>{icon}</span>
      <div>
        <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.78rem", color, lineHeight: 1.2 }}>{label}</div>
        <div style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.7rem", color: "#6B7280", marginTop: 1 }}>{sub}</div>
      </div>
    </motion.div>
  );
}

export function TechRow({ group, color, items }: { group: string; color: string; items: { slug: string; name: string; color: string }[] }) {
  return (
    <div style={{ background: "#F8F9FA", border: "1px solid rgba(0,0,0,0.07)", borderRadius: 16, padding: "18px 22px", display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" as const }}>
      <div style={{ minWidth: 130, flexShrink: 0 }}>
        <div style={{ width: 24, height: 2, background: color, borderRadius: 2, marginBottom: 6 }} />
        <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.72rem", fontWeight: 700, color: "#6B7280", textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>{group}</span>
      </div>
      <div style={{ width: 1, height: 36, background: "rgba(0,0,0,0.1)", flexShrink: 0 }} />
      <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 10, flex: 1 }}>
        {items.map(item => (
          <motion.div key={item.name}
            whileHover={{ y: -3, scale: 1.06 }}
            style={{ display: "flex", alignItems: "center", gap: 8, background: `${item.color}18`, border: `1px solid ${item.color}35`, borderRadius: 10, padding: "7px 13px", cursor: "default" }}
            onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = `0 4px 16px ${item.color}40`; }}
            onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
          >
            <img src={`https://cdn.simpleicons.org/${item.slug}/${item.color.replace("#","")}`} alt={item.name} style={{ width: 16, height: 16, flexShrink: 0 }} onError={e => { (e.target as HTMLImageElement).style.display = "none"; }} />
            <span style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.75rem", fontWeight: 500, color: "#0C0C0C", whiteSpace: "nowrap" as const }}>{item.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <FadeUp className="mb-10">
      <div style={{ display: "flex", alignItems: "flex-end", gap: 14, marginBottom: 40 }}>
        <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', color: "#5B4DFF", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", paddingBottom: 3 }}>{number}</span>
        <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "clamp(1.6rem,3.5vw,2.2rem)", fontWeight: 800, color: "#0C0C0C", lineHeight: 1, margin: 0 }}>{title}</h2>
        <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(91,77,255,0.18), transparent)", marginBottom: 3 }} />
      </div>
    </FadeUp>
  );
}

export function BrowserChrome({ url, children, height = 340 }: { url: string; children: React.ReactNode; height?: number }) {
  return (
    <div style={{ borderRadius: 14, overflow: "hidden", boxShadow: "0 20px 56px rgba(0,0,0,0.14)", border: "1px solid rgba(0,0,0,0.07)", background: "#fff" }}>
      <div style={{ background: "#F1F3F5", padding: "9px 12px", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ display: "flex", gap: 5 }}>
          {["#FF5F57","#FFBD2E","#28C840"].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />)}
        </div>
        <div style={{ flex: 1, background: "#fff", borderRadius: 5, padding: "2px 9px", fontSize: "0.6rem", color: "#9CA3AF", fontFamily: '"Inter", sans-serif', border: "1px solid rgba(0,0,0,0.07)" }}>{url}</div>
      </div>
      <div style={{ height, overflow: "hidden" }}>{children}</div>
    </div>
  );
}
