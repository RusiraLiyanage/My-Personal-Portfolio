import React from "react";
import Chip from "@mui/material/Chip";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FadeUp, BrowserChrome, SectionHeader } from "./shared";

import profileImage from "../imports/personalized_Image.jpeg";
import vincentPhoto from "../imports/vincent.jpeg";
import lamiaPhoto from "../imports/lamia.jpeg";
import authCustomerExpiry from "../imports/Screenshot_2026-07-12_at_1.44.47_pm.png";
import authAdminExpiry from "../imports/Screenshot_2026-07-12_at_1.45.04_pm.png";
import authCustomerLogin from "../imports/Screenshot_2026-07-12_at_1.47.33_pm.png";
import authAdminLogin from "../imports/Screenshot_2026-07-12_at_2.17.51_pm.png";
import awsCICDScreenshot from "../imports/Screenshot_2026-07-12_at_2.30.01_pm.png";
import monorepoScreenshot from "../imports/Screenshot_2026-07-12_at_8.14.34_pm.png";
import awsECSScreenshot from "../imports/Screenshot_2026-06-28_at_8.09.33_am.png";
import redisWsAdminScreenshot from "../imports/Screenshot_2026-07-12_at_3.09.59_pm.png";
import redisHairHistoryScreenshot from "../imports/Screenshot_2026-07-12_at_3.10.22_pm.png";

// ── Auth ──────────────────────────────────────────────────────────────────────

const AUTH_PURPLE = "#5B4DFF";
const AUTH_DARK   = "#1E1045";

const AUTH_FEATURES = [
  { icon: "🔐", text: "JWT-based login for customer accounts" },
  { icon: "🛡️", text: "JWT-based admin login for protected dashboard access" },
  { icon: "🔵", text: "Google OAuth SSO for customer sign-in" },
  { icon: "🗓️", text: "Remember-me support for longer sessions" },
  { icon: "🚪", text: "Secure logout and session cleanup" },
  { icon: "⏱️", text: "Session expiry detection from backend responses" },
  { icon: "🔄", text: "Extend-session flow during the allowed grace period" },
  { icon: "🔒", text: "Forced re-login once the session can no longer be extended" },
];

const AUTH_SCREENSHOTS = [
  { src: authCustomerExpiry, url: "localhost:7311/new-appointment", caption: "Customer session expiry with extend/logout options during grace period" },
  { src: authAdminExpiry,    url: "localhost:7311/admin-console",   caption: "Admin dashboard blocked behind session expiry modal for staff protection" },
  { src: authCustomerLogin,  url: "localhost:7311",                 caption: "Customer login: JWT email/password, Google OAuth SSO, remember-me" },
  { src: authAdminLogin,     url: "localhost:7311/admin-console/login", caption: "Admin Console protected login with session-expired redirect banner" },
];

function AuthCaseStudy() {
  return (
    <FadeUp>
      <div style={{ background: "#fff", borderRadius: 20, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.07)", border: "1px solid rgba(0,0,0,0.06)", marginBottom: 18 }}>
        <div style={{ background: `linear-gradient(135deg, ${AUTH_DARK} 0%, ${AUTH_PURPLE} 100%)`, padding: "22px 32px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, right: 0, width: "50%", height: "100%", background: "radial-gradient(circle at 100% 50%, rgba(255,255,255,0.08) 0%, transparent 65%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: 14, right: 44, opacity: 0.06, display: "grid", gridTemplateColumns: "repeat(6,10px)", gap: 5, pointerEvents: "none" }}>
            {Array(24).fill(0).map((_, i) => <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: "#fff" }} />)}
          </div>
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 9, flexWrap: "wrap" }}>
              <div style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)", borderRadius: 6, padding: "4px 12px" }}>
                <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.72rem", color: "#fff", letterSpacing: "0.06em", textTransform: "uppercase" as const }}>Case Study</span>
              </div>
              <div style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.22)", borderRadius: 6, padding: "4px 12px" }}>
                <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.75rem", color: "#fff" }}>✂️ {"Cooper's"} Barber Shop Booking Platform</span>
              </div>
              <div style={{ background: "rgba(167,243,208,0.2)", border: "1px solid rgba(167,243,208,0.4)", borderRadius: 6, padding: "4px 12px" }}>
                <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.75rem", color: "#A7F3D0" }}>Live · Production Feature</span>
              </div>
            </div>
            <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "clamp(1.05rem, 2vw, 1.28rem)", color: "#fff", margin: "0 0 5px", letterSpacing: "-0.01em" }}>
              Secure Authentication and Session Management
            </h2>
            <p style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.76rem", color: "rgba(255,255,255,0.6)", margin: 0 }}>
              JWT login, Google OAuth SSO, and backend-driven session expiry with grace-period extension for both customer and admin apps
            </p>
          </div>
        </div>
        <div style={{ padding: "24px 32px 28px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, marginBottom: 28 }}>
            <div>
              <p style={{ color: "#52525B", fontSize: "0.83rem", lineHeight: 1.65, marginBottom: 16 }}>
                Built end-to-end authentication for two separate apps in the {"Cooper's"} platform: the customer-facing booking site and the staff admin console. Both share the same backend-driven session contract where expiry is signalled through response codes. The grace period lets users extend without losing progress, then forces re-login once the window closes.
              </p>
              <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.67rem", color: "#9CA3AF", textTransform: "uppercase" as const, letterSpacing: "0.1em", marginBottom: 8 }}>Tech</div>
              <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 5 }}>
                {["JWT", "Google OAuth 2.0", "NestJS", "React", "TypeScript", "Redis Sessions", "HTTP-only Cookies"].map(t => (
                  <Chip key={t} label={t} size="small" sx={{ background: `${AUTH_PURPLE}0D`, color: AUTH_PURPLE, border: `1px solid ${AUTH_PURPLE}22`, fontSize: "0.66rem" }} />
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.67rem", color: "#9CA3AF", textTransform: "uppercase" as const, letterSpacing: "0.1em", marginBottom: 8 }}>What Was Built</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5 }}>
                {AUTH_FEATURES.map(f => (
                  <div key={f.text} style={{ display: "flex", alignItems: "flex-start", gap: 7, background: `${AUTH_PURPLE}06`, border: `1px solid ${AUTH_PURPLE}12`, borderRadius: 8, padding: "6px 10px" }}>
                    <span style={{ fontSize: "0.85rem", flexShrink: 0 }}>{f.icon}</span>
                    <span style={{ fontSize: "0.82rem", color: "#374151", lineHeight: 1.45 }}>{f.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {AUTH_SCREENSHOTS.map(s => (
              <div key={s.caption} style={{ display: "flex", flexDirection: "column" as const, gap: 8 }}>
                <BrowserChrome url={s.url} height={360}>
                  <img src={s.src} alt={s.caption} style={{ width: "115%", height: "115%", objectFit: "cover", objectPosition: "top center", display: "block", transform: "scale(1.12)", transformOrigin: "top center" }} />
                </BrowserChrome>
                <p style={{ fontSize: "0.82rem", color: "#6B7280", lineHeight: 1.5, margin: 0 }}>{s.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FadeUp>
  );
}

// ── AWS ───────────────────────────────────────────────────────────────────────

const AWS_ORANGE = "#FF9900";
const AWS_DARK = "#1A2332";

const AWS_SCREENSHOTS = [
  { src: awsCICDScreenshot, url: "github.com/RusiraLiyanage/Coopers_Barber_Shop/actions", caption: "GitHub Actions CI/CD pipeline - deploy-staging.yml: Resolve affected apps + ECS deploy job completing in 3m 55s" },
  { src: awsECSScreenshot, url: "ap-southeast-2.console.aws.amazon.com/ecs", caption: "AWS ECS Fargate - coopers-booking-guard-staging task running ACTIVE on Fargate (0.25 vCPU / 1GB RAM)" },
];

const AWS_SERVICES = [
  { icon: "🚀", label: "ECS Fargate", desc: "Containerised app deployment" },
  { icon: "📦", label: "ECR", desc: "Private Docker image registry" },
  { icon: "⚖️", label: "ALB", desc: "Application Load Balancer" },
  { icon: "🌐", label: "CloudFront", desc: "Global CDN distribution" },
  { icon: "🗄️", label: "RDS PostgreSQL", desc: "Managed relational database" },
  { icon: "⚡", label: "ElastiCache Valkey", desc: "Redis-compatible session cache" },
  { icon: "🔧", label: "AppConfig", desc: "Feature flags & runtime config" },
  { icon: "🔐", label: "Secrets Manager", desc: "Secure credential management" },
  { icon: "📊", label: "CloudWatch Logs", desc: "Centralised log monitoring" },
  { icon: "🔔", label: "Slack Alerts", desc: "Real-time deployment notifications" },
];

function AWSCaseStudy() {
  return (
    <FadeUp>
      <div style={{ background: "#fff", borderRadius: 20, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.07)", border: "1px solid rgba(0,0,0,0.06)", marginBottom: 18 }}>
        <div style={{ background: `linear-gradient(135deg, ${AWS_DARK} 0%, #2C3E60 100%)`, padding: "22px 32px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: `${AWS_ORANGE}18` }} />
          <div style={{ position: "absolute", bottom: -20, right: 80, width: 100, height: 100, borderRadius: "50%", background: `${AWS_ORANGE}10` }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, flexWrap: "wrap" }}>
              <span style={{ background: AWS_ORANGE, color: "#000", borderRadius: 6, padding: "3px 10px", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.04em" }}>AWS + CI/CD</span>
              <span style={{ background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.85)", borderRadius: 6, padding: "3px 10px", fontSize: "0.72rem", fontWeight: 600 }}>{"Cooper's"} Barber Shop</span>
              <span style={{ background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.85)", borderRadius: 6, padding: "3px 10px", fontSize: "0.72rem", fontWeight: 600 }}>Solo Project</span>
              <span style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)", borderRadius: 6, padding: "3px 10px", fontSize: "0.72rem", fontWeight: 600 }}>Professional</span>
            </div>
            <h3 style={{ color: "#fff", fontSize: "clamp(1.05rem, 2vw, 1.35rem)", fontWeight: 700, margin: 0, lineHeight: 1.25 }}>
              AWS Cloud Deployment & CI/CD Automation
            </h3>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.82rem", margin: "6px 0 0", lineHeight: 1.5 }}>
              Designed and implemented the full cloud infrastructure and automated deployment pipeline for {"Cooper's"} Barber Shop - a production multi-app system hosted on AWS, deployed via GitHub Actions.
            </p>
          </div>
        </div>
        <div style={{ padding: "22px 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 20 }}>
            <div>
              <h4 style={{ fontSize: "0.8rem", fontWeight: 700, color: "#374151", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 10px" }}>What Was Built</h4>
              <p style={{ fontSize: "0.84rem", color: "#4B5563", lineHeight: 1.65, margin: "0 0 12px" }}>
                Architected and provisioned a complete AWS cloud environment from scratch for the {"Cooper's"} Barber Shop booking platform - covering compute, networking, data, caching, and observability layers.
              </p>
              <p style={{ fontSize: "0.84rem", color: "#4B5563", lineHeight: 1.65, margin: "0 0 12px" }}>
                Built a GitHub Actions CI/CD pipeline with matrix deploy jobs that automatically resolve affected apps, build Docker images, push to ECR, and deploy to ECS Fargate on every push to staging. Full pipeline runs complete in under 4 minutes.
              </p>
              <p style={{ fontSize: "0.84rem", color: "#4B5563", lineHeight: 1.65 }}>
                Configured Slack webhook alerts for deployment status, CloudWatch log groups for runtime observability, and AWS Secrets Manager to keep credentials out of source code entirely.
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: "0.8rem", fontWeight: 700, color: "#374151", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 10px" }}>Cloud Architecture</h4>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 10px" }}>
                {AWS_SERVICES.map((s) => (
                  <div key={s.label} style={{ display: "flex", alignItems: "flex-start", gap: 7, padding: "7px 9px", borderRadius: 8, background: "#F9FAFB", border: "1px solid #E5E7EB" }}>
                    <span style={{ fontSize: "0.85rem", lineHeight: 1.3 }}>{s.icon}</span>
                    <div>
                      <div style={{ fontSize: "0.76rem", fontWeight: 700, color: "#1F2937", lineHeight: 1.2 }}>{s.label}</div>
                      <div style={{ fontSize: "0.69rem", color: "#6B7280", lineHeight: 1.3 }}>{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
            {["AWS ECS", "GitHub Actions", "Docker", "ECR", "CloudFront", "RDS", "ElastiCache", "CloudWatch", "Terraform-style IaC"].map((t) => (
              <span key={t} style={{ background: "#FFF7ED", color: "#92400E", border: "1px solid #FED7AA", borderRadius: 20, padding: "3px 10px", fontSize: "0.72rem", fontWeight: 600 }}>{t}</span>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {AWS_SCREENSHOTS.map((s) => (
              <div key={s.url}>
                <BrowserChrome url={s.url} height={360}>
                  <img src={s.src} alt={s.caption} style={{ width: "115%", height: "115%", objectFit: "cover", objectPosition: "top left", display: "block", transform: "scale(1.12)", transformOrigin: "top left" }} />
                </BrowserChrome>
                <p style={{ fontSize: "0.82rem", color: "#6B7280", margin: "6px 0 0", lineHeight: 1.4, textAlign: "center" }}>{s.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FadeUp>
  );
}

// ── Monorepo ──────────────────────────────────────────────────────────────────

const MONO_ORANGE = "#F69220";
const MONO_DARK   = "#1C1917";

function ArchNode({ label, sub, color, wide = false }: { label: string; sub: string; color: string; wide?: boolean }) {
  return (
    <div style={{ background: "#fff", border: `1.5px solid ${color}40`, borderRadius: 10, padding: wide ? "8px 16px" : "8px 12px", minWidth: wide ? "100%" : 0 }}>
      <div style={{ fontSize: "0.74rem", fontWeight: 700, color, lineHeight: 1.2 }}>{label}</div>
      <div style={{ fontSize: "0.62rem", color: "#94A3B8", marginTop: 2, lineHeight: 1.3 }}>{sub}</div>
    </div>
  );
}

function Arrow({ vertical = false }: { vertical?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#CBD5E1", fontSize: vertical ? "0.7rem" : "1rem", transform: vertical ? "rotate(90deg)" : undefined }}>
      →
    </div>
  );
}

function MonorepoArchDiagram() {
  return (
    <div style={{ background: "#F8FAFC", borderRadius: 14, border: "1px solid #E2E8F0", padding: "18px 20px" }}>
      {/* Main flow */}
      <div style={{ display: "grid", gridTemplateColumns: "auto 24px auto 24px auto 24px auto", alignItems: "center", gap: "6px 0" }}>
        {/* Col 1: Frontends */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <ArchNode label="Customer Frontend" sub="React + Vite" color="#3B82F6" />
          <ArchNode label="Admin Frontend"    sub="React + Vite" color="#8B5CF6" />
        </div>

        {/* Arrow 1 */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6, height: "100%" }}>
          <span style={{ color: "#CBD5E1", fontSize: "1rem", lineHeight: 1 }}>→</span>
          <span style={{ color: "#CBD5E1", fontSize: "1rem", lineHeight: 1 }}>→</span>
        </div>

        {/* Col 2: Guard */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
          <div style={{ background: "#fff", border: "2px solid #F59E0B60", borderRadius: 12, padding: "12px 14px", textAlign: "center" }}>
            <div style={{ fontSize: "0.8rem", fontWeight: 800, color: "#F59E0B", lineHeight: 1.2 }}>Booking Guard</div>
            <div style={{ fontSize: "0.62rem", color: "#94A3B8", marginTop: 3 }}>Public Gateway</div>
          </div>
        </div>

        {/* Arrow 2 */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, height: "100%" }}>
          <span style={{ color: "#CBD5E1", fontSize: "1rem" }}>→</span>
          <span style={{ color: "#CBD5E1", fontSize: "1rem" }}>→</span>
          <span style={{ color: "#CBD5E1", fontSize: "1rem" }}>→</span>
        </div>

        {/* Col 3: APIs */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <ArchNode label="Auth API"    sub="JWT · OAuth · Sessions"     color="#10B981" />
          <ArchNode label="Booking API" sub="Appointments · Consultation" color="#10B981" />
          <ArchNode label="Admin API"   sub="Admin Operations"            color="#10B981" />
        </div>

        {/* Arrow 3 */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, height: "100%" }}>
          <span style={{ color: "#CBD5E1", fontSize: "1rem" }}>→</span>
          <span style={{ color: "#CBD5E1", fontSize: "1rem" }}>→</span>
          <span style={{ color: "#CBD5E1", fontSize: "1rem" }}>→</span>
        </div>

        {/* Col 4: Data */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6, justifyContent: "center" }}>
          <ArchNode label="PostgreSQL"   sub="Shared Database"    color="#6366F1" />
          <div style={{ height: 6 }} />
          <ArchNode label="Redis / Valkey" sub="AI Context Cache" color="#EF4444" />
        </div>
      </div>

      {/* Shared packages bar */}
      <div style={{ marginTop: 14, borderTop: "2px dashed #CBD5E1", paddingTop: 12, display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ background: "#fff", border: "1.5px dashed #94A3B8", borderRadius: 8, padding: "6px 14px", flex: 1, display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "#64748B" }}>📦 Shared Packages</span>
          <span style={{ fontSize: "0.62rem", color: "#94A3B8" }}>Database · Auth · Redis · Config · DTOs</span>
        </div>
        <span style={{ fontSize: "0.62rem", color: "#94A3B8", whiteSpace: "nowrap" }}>consumed by all APIs ↑</span>
      </div>
    </div>
  );
}

const MONO_APPS = [
  { icon: "🌐", label: "customer-frontend", desc: "Customer booking app" },
  { icon: "🛡️", label: "admin-frontend",    desc: "Protected admin console" },
  { icon: "🔀", label: "booking-guard",     desc: "Public gateway & router" },
  { icon: "📅", label: "booking-api",       desc: "Appointments, consultation, matching" },
  { icon: "🔐", label: "auth-api",          desc: "JWT, OAuth, sessions" },
  { icon: "⚙️", label: "admin-api",         desc: "Admin data, briefs, hair history" },
  { icon: "📦", label: "packages/",         desc: "Shared DB, auth, Redis, config" },
];

function MonorepoCaseStudy() {
  return (
    <FadeUp>
      <div style={{ background: "#fff", borderRadius: 20, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.07)", border: "1px solid rgba(0,0,0,0.06)", marginBottom: 18 }}>

        {/* Header */}
        <div style={{ background: `linear-gradient(135deg, ${MONO_DARK} 0%, #2D2416 100%)`, padding: "22px 32px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: `${MONO_ORANGE}18` }} />
          <div style={{ position: "absolute", bottom: -20, right: 100, width: 90, height: 90, borderRadius: "50%", background: `${MONO_ORANGE}10` }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, flexWrap: "wrap" }}>
              {/* PNPM icon */}
              <span style={{ background: MONO_ORANGE, borderRadius: 6, padding: "3px 10px", fontSize: "0.72rem", fontWeight: 700, color: "#fff", letterSpacing: "0.04em", display: "flex", alignItems: "center", gap: 5 }}>
                <img src="https://cdn.simpleicons.org/pnpm/ffffff" alt="pnpm" width={12} height={12} style={{ display: "inline" }} onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                PNPM + Turborepo
              </span>
              <span style={{ background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.85)", borderRadius: 6, padding: "3px 10px", fontSize: "0.72rem", fontWeight: 600 }}>{"Cooper's"} Barber Shop</span>
              <span style={{ background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.85)", borderRadius: 6, padding: "3px 10px", fontSize: "0.72rem", fontWeight: 600 }}>Solo Project</span>
              <span style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)", borderRadius: 6, padding: "3px 10px", fontSize: "0.72rem", fontWeight: 600 }}>Professional</span>
            </div>
            <h3 style={{ color: "#fff", fontSize: "clamp(1.05rem, 2vw, 1.35rem)", fontWeight: 700, margin: 0, lineHeight: 1.25 }}>
              Monorepo Architecture with PNPM Workspaces and Turborepo
            </h3>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.82rem", margin: "6px 0 0", lineHeight: 1.5 }}>
              Multiple frontend and backend apps in one codebase - developed, tested, and deployed independently via PNPM Workspaces and Turborepo-coordinated workflows.
            </p>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: "22px 32px" }}>

          {/* Top: narrative + apps list */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 20 }}>
            <div>
              <h4 style={{ fontSize: "0.8rem", fontWeight: 700, color: "#374151", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 10px" }}>Why a Monorepo</h4>
              <p style={{ fontSize: "0.84rem", color: "#4B5563", lineHeight: 1.65, margin: "0 0 10px" }}>
                The apps are separate, but they share contracts, entities, configuration, and deployment logic. Rather than duplicating code across multiple repos, common logic lives in reusable packages consumed by the services that need it.
              </p>
              <p style={{ fontSize: "0.84rem", color: "#4B5563", lineHeight: 1.65, margin: "0 0 10px" }}>
                PNPM Workspaces link internal packages locally so any service can import shared database entities, auth utilities, or Redis helpers as if they were published npm packages. Turborepo coordinates builds and dev tasks across all apps, and the CI/CD pipeline detects which apps were affected to deploy only what changed.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 12 }}>
                {["Monorepo", "PNPM Workspaces", "Turborepo", "NestJS", "React", "Docker", "GitHub Actions"].map(t => (
                  <span key={t} style={{ background: `${MONO_ORANGE}12`, color: "#92400E", border: `1px solid ${MONO_ORANGE}30`, borderRadius: 20, padding: "3px 10px", fontSize: "0.71rem", fontWeight: 600 }}>{t}</span>
                ))}
              </div>
            </div>

            {/* Apps list */}
            <div>
              <h4 style={{ fontSize: "0.8rem", fontWeight: 700, color: "#374151", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 10px" }}>Repository Structure</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                {MONO_APPS.map(app => (
                  <div key={app.label} style={{ display: "flex", alignItems: "center", gap: 9, padding: "7px 10px", borderRadius: 8, background: "#F9FAFB", border: "1px solid #E5E7EB" }}>
                    <span style={{ fontSize: "0.85rem", flexShrink: 0 }}>{app.icon}</span>
                    <div>
                      <code style={{ fontSize: "0.72rem", fontWeight: 700, color: "#1F2937", fontFamily: "monospace" }}>{app.label}</code>
                      <div style={{ fontSize: "0.67rem", color: "#6B7280", marginTop: 1 }}>{app.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Architecture diagram */}
          <div style={{ marginBottom: 20 }}>
            <h4 style={{ fontSize: "0.8rem", fontWeight: 700, color: "#374151", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 10px" }}>Communication Architecture</h4>
            <MonorepoArchDiagram />
            <p style={{ fontSize: "0.82rem", color: "#9CA3AF", margin: "8px 0 0", lineHeight: 1.5, textAlign: "center" }}>
              Frontends never call backend APIs directly — all traffic flows through the Booking Guard, which routes to the correct service.
            </p>
          </div>

          {/* Screenshot */}
          <BrowserChrome url="SA-FULLSTACK-CHALLENGE-RUSIRA — auth-service.ts" height={340}>
            <img src={monorepoScreenshot} alt="Monorepo structure in VS Code" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top left", display: "block" }} />
          </BrowserChrome>
          <p style={{ fontSize: "0.82rem", color: "#6B7280", margin: "8px 0 0", lineHeight: 1.4, textAlign: "center" }}>
            Monorepo in VS Code - apps and shared packages visible in the sidebar alongside the auth service implementation
          </p>

        </div>
      </div>
    </FadeUp>
  );
}

// ── Redis + WebSockets ────────────────────────────────────────────────────────

const REDIS_GREEN = "#DC382D";
const REDIS_DARK = "#1A2C1A";
const WS_TEAL = "#0891B2";

const REDIS_SCREENSHOTS = [
  { src: redisWsAdminScreenshot,    url: "localhost:7311/admin-console", caption: "WebSocket-based freshness alerts notify admins when new data is available, while keeping refresh control in the user's hands." },
  { src: redisHairHistoryScreenshot, url: "localhost:7311/admin-console", caption: "Customer hair history is cached as short-lived AI context, helping consultations consider previous treatments and safety concerns efficiently." },
];

const REDIS_CACHED_DATA = [
  { icon: "⚙️", label: "Service AI Config", desc: "Active service rules for questionnaire generation" },
  { icon: "🛡️", label: "Safety Rules", desc: "Active rules checked during consultation flow" },
  { icon: "✂️", label: "Barber Profiles", desc: "Capability profiles for AI barber matching" },
  { icon: "💇", label: "Hair History", desc: "Recent customer treatments, sensitivities & reactions" },
];

function RedisWsCaseStudy() {
  return (
    <FadeUp>
      <div style={{ background: "#fff", borderRadius: 20, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.07)", border: "1px solid rgba(0,0,0,0.06)", marginBottom: 18 }}>
        <div style={{ background: `linear-gradient(135deg, ${REDIS_DARK} 0%, #1E3A2F 50%, #0F3D45 100%)`, padding: "22px 32px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -40, right: -40, width: 180, height: 180, borderRadius: "50%", background: `${REDIS_GREEN}18` }} />
          <div style={{ position: "absolute", bottom: -20, right: 100, width: 90, height: 90, borderRadius: "50%", background: `${WS_TEAL}15` }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, flexWrap: "wrap" }}>
              <span style={{ background: REDIS_GREEN, color: "#fff", borderRadius: 6, padding: "3px 10px", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.04em" }}>Redis + WebSockets</span>
              <span style={{ background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.85)", borderRadius: 6, padding: "3px 10px", fontSize: "0.72rem", fontWeight: 600 }}>{"Cooper's"} Barber Shop</span>
              <span style={{ background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.85)", borderRadius: 6, padding: "3px 10px", fontSize: "0.72rem", fontWeight: 600 }}>Solo Project</span>
              <span style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)", borderRadius: 6, padding: "3px 10px", fontSize: "0.72rem", fontWeight: 600 }}>Professional</span>
            </div>
            <h3 style={{ color: "#fff", fontSize: "clamp(1.05rem, 2vw, 1.35rem)", fontWeight: 700, margin: 0, lineHeight: 1.25 }}>
              WebSocket Real-Time Admin Updates & Redis-Backed AI Context
            </h3>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.82rem", margin: "6px 0 0", lineHeight: 1.5 }}>
              Redis/Valkey caches short-lived AI consultation context to reduce repeated PostgreSQL reads, while WebSockets keep admins aware of data changes without disruptive auto-refreshes.
            </p>
          </div>
        </div>
        <div style={{ padding: "22px 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 20 }}>
            <div>
              <h4 style={{ fontSize: "0.8rem", fontWeight: 700, color: "#374151", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 10px" }}>What Was Built</h4>
              <p style={{ fontSize: "0.84rem", color: "#4B5563", lineHeight: 1.65, margin: "0 0 10px" }}>
                Implemented Redis (ElastiCache Valkey) as a short-lived cache layer for the AI consultation flow. During questionnaire generation, safety checks, and barber matching, the system reads service config, safety rules, barber profiles, and customer hair history from cache rather than hitting PostgreSQL on every AI call.
              </p>
              <p style={{ fontSize: "0.84rem", color: "#4B5563", lineHeight: 1.65, margin: "0 0 10px" }}>
                The admin dashboard uses WebSockets to detect when backend data has changed. When bookings, briefs, hair history, service config, or barber profiles are updated, a dismissible "Updated information available" banner appears. Admins refresh intentionally rather than silently seeing stale data.
              </p>
              <p style={{ fontSize: "0.84rem", color: "#4B5563", lineHeight: 1.65 }}>
                PostgreSQL remains the permanent source of truth. Redis holds only short-lived context windows - keeping consistency guarantees while improving read performance during AI-heavy workflows.
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: "0.8rem", fontWeight: 700, color: "#374151", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 10px" }}>What Gets Cached</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
                {REDIS_CACHED_DATA.map((item) => (
                  <div key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "10px 12px", borderRadius: 10, background: "#F9FAFB", border: "1px solid #E5E7EB" }}>
                    <span style={{ fontSize: "1rem", lineHeight: 1.2, flexShrink: 0 }}>{item.icon}</span>
                    <div>
                      <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#1F2937", lineHeight: 1.25 }}>{item.label}</div>
                      <div style={{ fontSize: "0.72rem", color: "#6B7280", lineHeight: 1.4, marginTop: 2 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ padding: "10px 12px", borderRadius: 10, background: "#EFF6FF", border: "1px solid #BFDBFE" }}>
                <div style={{ fontSize: "0.76rem", fontWeight: 700, color: "#1E40AF", marginBottom: 3 }}>WebSocket Events Monitored</div>
                <div style={{ fontSize: "0.72rem", color: "#3B82F6", lineHeight: 1.5 }}>
                  Bookings - Appointment briefs - Hair history - Service AI config - Barber profiles - Admin invites
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
            {["Redis / Valkey", "ElastiCache", "WebSockets", "Node.js", "PostgreSQL", "React", "TypeScript"].map((t) => (
              <span key={t} style={{ background: "#FFF1F2", color: "#9F1239", border: "1px solid #FECDD3", borderRadius: 20, padding: "3px 10px", fontSize: "0.72rem", fontWeight: 600 }}>{t}</span>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {REDIS_SCREENSHOTS.map((s) => (
              <div key={s.url + s.caption}>
                <BrowserChrome url={s.url} height={360}>
                  <img src={s.src} alt={s.caption} style={{ width: "115%", height: "115%", objectFit: "cover", objectPosition: "top left", display: "block", transform: "scale(1.12)", transformOrigin: "top left" }} />
                </BrowserChrome>
                <p style={{ fontSize: "0.82rem", color: "#6B7280", margin: "6px 0 0", lineHeight: 1.4, textAlign: "center" }}>{s.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FadeUp>
  );
}

// ── Idempotency ───────────────────────────────────────────────────────────────

const IDEM_BLUE = "#2563EB";
const IDEM_DARK = "#1E3A8A";

function IdempotencyDiagram() {
  const box = (label: string, color: string, sub?: string) => (
    <div style={{ background: "#fff", border: `2px solid ${color}`, borderRadius: 8, padding: "8px 12px", fontSize: "0.68rem", fontWeight: 700, color: "#1F2937", textAlign: "center" as const, lineHeight: 1.25, minWidth: 110 }}>
      {label}
      {sub && <div style={{ fontSize: "0.6rem", fontWeight: 500, color: "#6B7280", marginTop: 2 }}>{sub}</div>}
    </div>
  );

  const outcome = (emoji: string, title: string, color: string, desc: string) => (
    <div style={{ background: `${color}10`, border: `1.5px solid ${color}`, borderRadius: 8, padding: "10px 12px", textAlign: "center" as const }}>
      <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#1F2937" }}>{emoji} {title}</div>
      <div style={{ fontSize: "0.64rem", color: "#6B7280", marginTop: 4, lineHeight: 1.4 }}>{desc}</div>
    </div>
  );

  return (
    <div style={{ background: "#F9FAFB", borderRadius: 12, padding: "18px 20px", border: "1px solid #E5E7EB" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
        {box("Frontend", IDEM_BLUE, "Creates UUID")}
        <span style={{ color: "#9CA3AF", fontSize: "1rem" }}>→</span>
        {box("Booking Guard", "#10B981", "Forwards key")}
        <span style={{ color: "#9CA3AF", fontSize: "1rem" }}>→</span>
        {box("Booking API", IDEM_BLUE, "Interceptor")}
        <span style={{ color: "#9CA3AF", fontSize: "1rem" }}>→</span>
        {box("PostgreSQL", "#1F2937", "Check key")}
      </div>
      <div style={{ borderTop: "1.5px dashed #D1D5DB", paddingTop: 12, marginTop: 4 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
          {outcome("✓", "New", "#10B981", "Reserve → Run → Store")}
          {outcome("⟳", "Retry", IDEM_BLUE, "Return saved response")}
          {outcome("⚠", "Changed", "#EF4444", "Reject unsafe reuse")}
        </div>
      </div>
    </div>
  );
}

function IdempotencyCaseStudy() {
  return (
    <FadeUp>
      <div style={{ background: "#fff", borderRadius: 20, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.07)", border: "1px solid rgba(0,0,0,0.06)", marginBottom: 18 }}>
        <div style={{ background: `linear-gradient(135deg, ${IDEM_DARK} 0%, ${IDEM_BLUE} 100%)`, padding: "22px 32px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -40, right: -40, width: 180, height: 180, borderRadius: "50%", background: "rgba(255,255,255,0.1)" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, flexWrap: "wrap" }}>
              <span style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)", borderRadius: 6, padding: "4px 12px", fontSize: "0.72rem", fontWeight: 700, color: "#fff", letterSpacing: "0.06em", textTransform: "uppercase" }}>Case Study</span>
              <span style={{ background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.85)", borderRadius: 6, padding: "3px 10px", fontSize: "0.72rem", fontWeight: 600 }}>✂️ Cooper's Barber Shop</span>
              <span style={{ background: "rgba(167,243,208,0.2)", border: "1px solid rgba(167,243,208,0.4)", borderRadius: 6, padding: "3px 10px", fontSize: "0.75rem", fontWeight: 700, color: "#A7F3D0" }}>Live · Production Feature</span>
            </div>
            <h3 style={{ color: "#fff", fontSize: "clamp(1.05rem, 2vw, 1.35rem)", fontWeight: 700, margin: 0, lineHeight: 1.25 }}>
              Duplicate-Safe Booking With Idempotency
            </h3>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.82rem", margin: "6px 0 0", lineHeight: 1.5 }}>
              Prevents duplicate bookings when users double-click, retry, or experience network issues during appointment create/update/cancel actions.
            </p>
          </div>
        </div>
        <div style={{ padding: "22px 32px" }}>
          <p style={{ fontSize: "0.84rem", color: "#4B5563", lineHeight: 1.65, marginBottom: 16 }}>
            Implemented an idempotency layer for Cooper's booking platform. Each appointment mutation receives a stable UUID from the frontend. The booking guard forwards it to the API, where an interceptor checks PostgreSQL before running the mutation. New requests execute normally; retries return the saved response; changed requests are rejected.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
            {["NestJS", "PostgreSQL", "TypeScript", "Idempotency Pattern", "UUID"].map((t) => (
              <span key={t} style={{ background: "#DBEAFE", color: "#1E40AF", border: "1px solid #BFDBFE", borderRadius: 20, padding: "3px 10px", fontSize: "0.72rem", fontWeight: 600 }}>{t}</span>
            ))}
          </div>
          <IdempotencyDiagram />
        </div>
      </div>
    </FadeUp>
  );
}

// ── Tourism ───────────────────────────────────────────────────────────────────

const TOURISM_TEAL = "#0369A1";
const TOURISM_DARK = "#0C2D48";

const TOURISM_TEAM = [
  { name: "Rusira Liyanage",    initials: "RL",  photo: profileImage,  role: "Team Leader",  me: true  },
  { name: "Vincent Paul",       initials: "VP",  photo: vincentPhoto,  role: "Group Member", me: false },
  { name: "Lamia Rahman",       initials: "LR",  photo: lamiaPhoto,    role: "Group Member", me: false },
  { name: "Ammad Aslam",        initials: "AA",  photo: null,          role: "Group Member", me: false },
  { name: "Le Shi",             initials: "LS",  photo: null,          role: "Group Member", me: false },
  { name: "Akhil Ayilavajjula", initials: "AK",  photo: null,          role: "Group Member", me: false },
];

function TourismCaseStudy() {
  return (
    <FadeUp>
      <div style={{ background: "#fff", borderRadius: 20, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.07)", border: "1px solid rgba(0,0,0,0.06)", marginBottom: 18 }}>
        <div style={{ background: `linear-gradient(135deg, ${TOURISM_DARK} 0%, ${TOURISM_TEAL} 100%)`, padding: "22px 32px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, right: 0, width: "50%", height: "100%", background: "radial-gradient(circle at 100% 50%, rgba(255,255,255,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: 12, right: 40, opacity: 0.06, display: "grid", gridTemplateColumns: "repeat(8,9px)", gap: 4, pointerEvents: "none" }}>
            {Array(32).fill(0).map((_, i) => <div key={i} style={{ width: 9, height: 9, borderRadius: "50%", background: "#fff" }} />)}
          </div>
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 9, flexWrap: "wrap" }}>
              <div style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)", borderRadius: 6, padding: "4px 12px" }}>
                <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.72rem", color: "#fff", letterSpacing: "0.06em", textTransform: "uppercase" as const }}>Case Study</span>
              </div>
              <div style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.22)", borderRadius: 6, padding: "4px 12px" }}>
                <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.75rem", color: "#fff" }}>🎓 UOW · CSCI927 Service Oriented Software Engineering</span>
              </div>
              <div style={{ background: "rgba(167,243,208,0.2)", border: "1px solid rgba(167,243,208,0.4)", borderRadius: 6, padding: "4px 12px" }}>
                <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.75rem", color: "#A7F3D0" }}>University Assignment · Group of 6</span>
              </div>
            </div>
            <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "clamp(1.05rem, 2vw, 1.28rem)", color: "#fff", margin: "0 0 5px", letterSpacing: "-0.01em" }}>
              Tourism Ecosystem, Service Oriented Architecture Assessment
            </h2>
            <p style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.76rem", color: "rgba(255,255,255,0.6)", margin: 0 }}>
              Three independent Flask microservices simulating a real-world tourism platform with process mining and event logging
            </p>
          </div>
        </div>
        <div style={{ padding: "24px 32px", display: "grid", gridTemplateColumns: "1fr 272px", gap: 32 }}>
          <div>
            {[
              { label: "Problem",  color: "#EF4444", text: "Tourism services such as events, transport, and dining operate in silos with no integrated platform, forcing tourists to navigate multiple disconnected systems and causing fragmented data and poor provider coordination." },
              { label: "Solution", color: TOURISM_TEAL, text: "Built three independent Flask microservices (Event Scheduling, Ride Booking, Table Reservation) each with its own data store, communicating via REST APIs. Followed SOA principles of loose coupling and high cohesion across services." },
              { label: "Outcome",  color: "#10B981", text: "Delivered a working SOA deployment with process simulation generating structured CSV event logs for audit. Each microservice ran independently, validating the separate-databases pattern for a scalable tourism platform." },
            ].map(r => (
              <div key={r.label} style={{ marginBottom: 13 }}>
                <div style={{ fontSize: "0.63rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase" as const, color: r.color, marginBottom: 3 }}>{r.label}</div>
                <p style={{ color: "#52525B", fontSize: "0.83rem", lineHeight: 1.62, margin: 0 }}>{r.text}</p>
              </div>
            ))}
            <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 6, margin: "14px 0" }}>
              {["🗓 Event Scheduling", "🚗 Ride Booking", "🍽 Table Reservation"].map(s => (
                <div key={s} style={{ background: `${TOURISM_TEAL}08`, border: `1px solid ${TOURISM_TEAL}20`, borderRadius: 8, padding: "5px 11px", fontSize: "0.75rem", fontWeight: 600, color: TOURISM_TEAL, fontFamily: '"Plus Jakarta Sans", sans-serif' }}>{s}</div>
              ))}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 4, marginBottom: 14 }}>
              {["Python", "Flask", "REST APIs", "Microservices", "SOA", "Process Mining"].map(t => (
                <Chip key={t} label={t} size="small" sx={{ background: `${TOURISM_TEAL}0D`, color: TOURISM_TEAL, border: `1px solid ${TOURISM_TEAL}22`, fontSize: "0.66rem" }} />
              ))}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 8 }}>
              <a href="https://github.com/RusiraLiyanage/Tourism-Ecosystem" target="_blank" rel="noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#0C0C0C", color: "#fff", borderRadius: 8, padding: "7px 13px", fontSize: "0.76rem", fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 600, textDecoration: "none" }}>
                <GitHubIcon sx={{ fontSize: 14 }} />
                GitHub Repository
              </a>
              <a href="https://docs.google.com/presentation/d/14ft1hjXOP5HgydBd8_6FpmGfUiGQzaDzSBmafOBbMAQ/edit?usp=sharing" target="_blank" rel="noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 6, background: `${TOURISM_TEAL}12`, color: TOURISM_TEAL, border: `1px solid ${TOURISM_TEAL}30`, borderRadius: 8, padding: "7px 13px", fontSize: "0.76rem", fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 600, textDecoration: "none" }}>
                <span style={{ fontSize: "0.82rem" }}>🎤</span>
                View Presentation
              </a>
            </div>
          </div>
          <div>
            <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.67rem", color: "#9CA3AF", textTransform: "uppercase" as const, letterSpacing: "0.1em", marginBottom: 10 }}>Project Team</div>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: 7 }}>
              {TOURISM_TEAM.map(member => (
                <div key={member.name} style={{ display: "flex", alignItems: "center", gap: 10,
                  background: member.me ? `${TOURISM_TEAL}08` : "#F9FAFB",
                  border: member.me ? `1px solid ${TOURISM_TEAL}22` : "1px solid rgba(0,0,0,0.06)",
                  borderRadius: 10, padding: "8px 11px" }}>
                  {member.photo
                    ? <img src={member.photo} alt={member.name} style={{ width: 34, height: 34, borderRadius: "50%", objectFit: "cover", flexShrink: 0, border: `2px solid ${member.me ? TOURISM_TEAL : "rgba(0,0,0,0.1)"}` }} />
                    : <div style={{ width: 34, height: 34, borderRadius: "50%", background: `${TOURISM_TEAL}12`, border: `1px solid ${TOURISM_TEAL}25`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.62rem", color: TOURISM_TEAL }}>{member.initials}</span>
                      </div>
                  }
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.78rem", color: "#0C0C0C", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{member.name}</div>
                    <div style={{ fontSize: "0.66rem", color: member.me ? TOURISM_TEAL : "#9CA3AF", fontWeight: member.me ? 700 : 500, marginTop: 1 }}>{member.role}</div>
                  </div>
                  {member.me && <span style={{ fontSize: "0.7rem", marginLeft: "auto" }}>⭐</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </FadeUp>
  );
}

// ── Software Testing ──────────────────────────────────────────────────────────

const TEST_INDIGO = "#4F46E5";
const TEST_DARK   = "#1E1B4B";

const TESTING_TEAM = [
  { name: "Rusira Liyanage", photo: profileImage, role: "Team Leader",  me: true  },
  { name: "Vincent Paul",    photo: vincentPhoto,  role: "Group Member", me: false },
];

const TESTING_TOOLS = [
  { name: "JUnit",        desc: "Unit testing"            },
  { name: "TestNG",       desc: "Test suite structure"    },
  { name: "Rest Assured", desc: "REST API testing"        },
  { name: "Allure",       desc: "Test reporting"          },
  { name: "Faker",        desc: "Synthetic test data"     },
  { name: "aShot",        desc: "Visual/screenshot tests" },
  { name: "EvoSuite",     desc: "Auto test generation"    },
  { name: "Maven",        desc: "Build tool"              },
];

function SoftwareTestingCaseStudy() {
  return (
    <FadeUp delay={0.08}>
      <div style={{ background: "#fff", borderRadius: 20, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.07)", border: "1px solid rgba(0,0,0,0.06)", marginBottom: 18 }}>
        <div style={{ background: `linear-gradient(135deg, ${TEST_DARK} 0%, ${TEST_INDIGO} 100%)`, padding: "22px 32px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, right: 0, width: "50%", height: "100%", background: "radial-gradient(circle at 100% 50%, rgba(255,255,255,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: 10, right: 40, opacity: 0.06, display: "flex", flexDirection: "column", gap: 5, pointerEvents: "none" }}>
            {[100, 70, 85, 55, 90, 65].map((w, i) => <div key={i} style={{ width: w, height: 3, background: "#fff", borderRadius: 2 }} />)}
          </div>
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 9, flexWrap: "wrap" }}>
              <div style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)", borderRadius: 6, padding: "4px 12px" }}>
                <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.72rem", color: "#fff", letterSpacing: "0.06em", textTransform: "uppercase" as const }}>Case Study</span>
              </div>
              <div style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.22)", borderRadius: 6, padding: "4px 12px" }}>
                <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.75rem", color: "#fff" }}>🎓 UOW · CSCI926 Software Testing and Analysis</span>
              </div>
              <div style={{ background: "rgba(167,243,208,0.2)", border: "1px solid rgba(167,243,208,0.4)", borderRadius: 6, padding: "4px 12px" }}>
                <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.75rem", color: "#A7F3D0" }}>University Assignment · Pair Project</span>
              </div>
            </div>
            <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "clamp(1.05rem, 2vw, 1.28rem)", color: "#fff", margin: "0 0 5px", letterSpacing: "-0.01em" }}>
              j2html Library, Comprehensive Software Testing Suite
            </h2>
            <p style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.76rem", color: "rgba(255,255,255,0.6)", margin: 0 }}>
              Multi-framework test suite covering unit, API, visual, and automated test generation for the j2html Java HTML library
            </p>
          </div>
        </div>
        <div style={{ padding: "24px 32px", display: "grid", gridTemplateColumns: "1fr 240px", gap: 32 }}>
          <div>
            {[
              { label: "Problem",  color: "#EF4444", text: "Validate the correctness, reliability, and edge-case behaviour of the j2html open-source Java library used for programmatic HTML generation, covering unit logic, REST API responses, visual rendering, and auto-generated test paths." },
              { label: "Solution", color: TEST_INDIGO, text: "Built a multi-framework Java test suite using JUnit and TestNG for unit tests, Rest Assured for API endpoint verification against a Spring Boot server, aShot for visual screenshot comparison via Chrome WebDriver, and EvoSuite for automated test case generation. Allure provided structured reporting across all suites." },
              { label: "Outcome",  color: "#10B981", text: "Delivered a comprehensive test report with Allure visualisations covering all major library functions, demonstrating practical application of diverse testing methodologies and meeting the CSCI926 assessment criteria for test depth, tool variety, and reporting quality." },
            ].map(r => (
              <div key={r.label} style={{ marginBottom: 13 }}>
                <div style={{ fontSize: "0.63rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase" as const, color: r.color, marginBottom: 3 }}>{r.label}</div>
                <p style={{ color: "#52525B", fontSize: "0.83rem", lineHeight: 1.62, margin: 0 }}>{r.text}</p>
              </div>
            ))}
            <div style={{ marginTop: 14, marginBottom: 14 }}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.67rem", color: "#9CA3AF", textTransform: "uppercase" as const, letterSpacing: "0.1em", marginBottom: 8 }}>Testing Tools</div>
              <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 5 }}>
                {TESTING_TOOLS.map(t => (
                  <Chip key={t.name} label={`${t.name} · ${t.desc}`} size="small"
                    sx={{ background: `${TEST_INDIGO}0D`, color: TEST_INDIGO, border: `1px solid ${TEST_INDIGO}22`, fontSize: "0.66rem" }} />
                ))}
              </div>
            </div>
            <a href="https://github.com/RusiraLiyanage/Software-Testing-Task-2" target="_blank" rel="noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#0C0C0C", color: "#fff", borderRadius: 8, padding: "7px 13px", fontSize: "0.76rem", fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 600, textDecoration: "none" }}>
              <GitHubIcon sx={{ fontSize: 14 }} />
              GitHub Repository
            </a>
          </div>
          <div>
            <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.67rem", color: "#9CA3AF", textTransform: "uppercase" as const, letterSpacing: "0.1em", marginBottom: 10 }}>Project Team</div>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: 7 }}>
              {TESTING_TEAM.map(member => (
                <div key={member.name} style={{ display: "flex", alignItems: "center", gap: 10,
                  background: member.me ? `${TEST_INDIGO}08` : "#F9FAFB",
                  border: member.me ? `1px solid ${TEST_INDIGO}22` : "1px solid rgba(0,0,0,0.06)",
                  borderRadius: 10, padding: "9px 12px" }}>
                  <img src={member.photo} alt={member.name} style={{ width: 36, height: 36, borderRadius: "50%", objectFit: "cover", flexShrink: 0, border: `2px solid ${member.me ? TEST_INDIGO : "rgba(0,0,0,0.1)"}` }} />
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: "0.8rem", color: "#0C0C0C" }}>{member.name}</div>
                    <div style={{ fontSize: "0.66rem", color: member.me ? TEST_INDIGO : "#9CA3AF", fontWeight: member.me ? 700 : 500, marginTop: 1 }}>{member.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </FadeUp>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export function CaseStudiesSection() {
  return (
    <section id="casestudies" style={{ padding: "88px 0", background: "#F8F9FA" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 20px" }}>
        <SectionHeader number="07" title="Case Studies" />
        <div style={{ margin: "0 20px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <AuthCaseStudy />
          <AWSCaseStudy />
          <MonorepoCaseStudy />
          <RedisWsCaseStudy />
          <IdempotencyCaseStudy />
          <TourismCaseStudy />
          <SoftwareTestingCaseStudy />
          </div>
        </div>
      </div>
    </section>
  );
}
