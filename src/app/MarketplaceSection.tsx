import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Button from "@mui/material/Button";
import ButtonBase from "@mui/material/ButtonBase";
import Chip from "@mui/material/Chip";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Code2,
  Github,
  ShieldCheck,
  ShoppingCart,
  Store,
  Users,
  X,
} from "lucide-react";
import { BrowserChrome, FadeUp, TechRow } from "./shared";
import innomenteLogo from "../imports/Screenshot_2026-07-12_at_12.01.58_pm.png";
import sampleAssistLogo from "../imports/sampleassist.png";
import customerShop from "../imports/marketplace-customer-shop.jpg";
import customerProduct from "../imports/marketplace-customer-product.jpg";
import customerCart from "../imports/marketplace-customer-cart.jpg";
import customerCheckout from "../imports/marketplace-customer-checkout.jpg";
import customerOrder from "../imports/marketplace-customer-order.jpg";
import sellerDashboard from "../imports/marketplace-seller-dashboard.jpg";
import sellerFulfilment from "../imports/marketplace-seller-fulfilment.jpg";
import sellerCatalogue from "../imports/marketplace-seller-catalogue.jpg";
import sellerProduct from "../imports/marketplace-seller-product.jpg";
import adminSuppliers from "../imports/marketplace-admin-suppliers.jpg";
import adminReview from "../imports/marketplace-admin-review.jpg";
import adminOrders from "../imports/marketplace-admin-orders.jpg";

export const MKT_BLUE = "#0958D9";
export const MKT_DARK = "#0B1F4D";
const SELLER_ORANGE = "#D96C00";
const ADMIN_PURPLE = "#722ED1";
const GITHUB_URL = "https://github.com/RusiraLiyanage/SA-MarketPlace";

type GalleryItem = {
  src: string;
  route: string;
  title: string;
  caption: string;
};

const GALLERIES: {
  label: string;
  shortLabel: string;
  accent: string;
  host: string;
  icon: React.ReactNode;
  items: GalleryItem[];
}[] = [
  {
    label: "Buyer marketplace",
    shortLabel: "Buyer",
    accent: MKT_BLUE,
    host: "localhost:5173",
    icon: <ShoppingCart size={17} />,
    items: [
      {
        src: customerShop,
        route: "/shop",
        title: "Product discovery",
        caption: "Search, category, price, sorting and paging combine while unpublished listings stay hidden.",
      },
      {
        src: customerProduct,
        route: "/shop/products/:id",
        title: "Product detail",
        caption: "GST-inclusive pricing, verified supplier details, stock and specifications in one view.",
      },
      {
        src: customerCart,
        route: "/cart",
        title: "Multi-supplier cart",
        caption: "Live quantities and GST totals before checkout splits the cart into supplier-specific orders.",
      },
      {
        src: customerCheckout,
        route: "/checkout/delivery",
        title: "Guided checkout",
        caption: "Delivery details lead into a mock payment flow that never stores card data.",
      },
      {
        src: customerOrder,
        route: "/orders/:orderNumber",
        title: "Order and invoice",
        caption: "A complete order timeline, delivery summary and downloadable stored tax invoice.",
      },
    ],
  },
  {
    label: "Seller portal",
    shortLabel: "Seller",
    accent: SELLER_ORANGE,
    host: "localhost:5174",
    icon: <Store size={17} />,
    items: [
      {
        src: sellerDashboard,
        route: "/",
        title: "Supplier overview",
        caption: "Orders requiring dispatch, SLA countdowns and live operational totals.",
      },
      {
        src: sellerFulfilment,
        route: "/orders/:orderNumber",
        title: "Order fulfilment",
        caption: "A staged pick-and-dispatch workflow keeps every item accountable.",
      },
      {
        src: sellerCatalogue,
        route: "/catalogue",
        title: "Catalogue management",
        caption: "Search, stock signals, status filters and publishing controls for the supplier catalogue.",
      },
      {
        src: sellerProduct,
        route: "/catalogue/:id",
        title: "Product editor",
        caption: "Structured product details, categories, images, drafts and publishing in one focused form.",
      },
    ],
  },
  {
    label: "SA Admin",
    shortLabel: "Admin",
    accent: ADMIN_PURPLE,
    host: "localhost:5175",
    icon: <ShieldCheck size={17} />,
    items: [
      {
        src: adminSuppliers,
        route: "/suppliers",
        title: "Supplier verification queue",
        caption: "Sample Assist staff can search, filter and review every supplier application.",
      },
      {
        src: adminReview,
        route: "/suppliers/:id",
        title: "Guarded approval",
        caption: "Approval unlocks only after the required business checks have been completed.",
      },
      {
        src: adminOrders,
        route: "/orders",
        title: "Marketplace oversight",
        caption: "Read-only visibility across suppliers, payment states and fulfilment statuses.",
      },
    ],
  },
];

const IMPACT = [
  ["3", "APIs on one database"],
  ["63", "API operations"],
  ["42", "screens across three apps"],
  ["1,600+", "automated tests"],
  ["46", "architecture decisions"],
  ["20", "database migrations"],
  ["0", "axe violations on checked pages"],
  ["100%", "schema changes via migrations"],
];

const HARD_PARTS = [
  ["One person, many roles", "A single account can hold buyer, seller and admin roles, while audience-bound tokens keep each API isolated."],
  ["One cart, many suppliers", "Checkout creates one order per supplier because fulfilment, dispatch SLAs and tax invoices belong to that supplier."],
  ["Immutable financial history", "Prices, buyer details and seller details are frozen at checkout so later profile changes never rewrite an invoice."],
  ["Safe concurrent checkout", "A database transaction and row locks prevent overselling, while declined payments leave the cart untouched."],
  ["Verification before visibility", "A supplier must pass staff review before any of its published listings can appear to customers."],
  ["Payment data minimisation", "The Stripe-style test gateway models payment outcomes without storing card number, expiry or CVC."],
];

const DECISIONS = [
  ["Monorepo with shared packages", "Three NestJS APIs share entities, authentication, validation, mail and PDF packages through pnpm workspaces and Turborepo.", "One rule, one implementation"],
  ["One system, one database", "Buyer, supplier and Collection Manager identities use the same account and records, avoiding fragile synchronisation jobs.", "Single source of truth"],
  ["Migrations only", "TypeORM synchronize is disabled; every schema change is reviewable and can rebuild the database from zero.", "Schema as versioned code"],
  ["Secure by default", "Audience-bound JWTs, revocation, ownership checks, rate limiting, Helmet and hashed reset tokens protect every boundary.", "Least privilege"],
  ["Exact, immutable money", "Database numerics and API strings avoid floating-point errors, while order and invoice snapshots preserve history.", "Financial auditability"],
  ["Real contracts, not mocks", "Every screen talks to the real API and is backed by unit, component and end-to-end contract tests.", "Test the integration"],
  ["Accessible design tokens", "Each app has its own theme, but all three share component patterns and were checked route-by-route with axe.", "WCAG 2.1 AA"],
  ["Decisions live with the code", "Forty-six concise ADRs capture why the architecture works this way and make handover reviewable.", "Documentation as code"],
];

const BUILD_STEPS = [
  ["01", "Recon and data model", "Studied the existing Sample Assist backend and unified the account model around one user with multiple roles."],
  ["02", "Monorepo foundations", "Created shared TypeScript, lint, entity and common packages with pnpm workspaces and Turborepo."],
  ["03", "Three secure APIs", "Built customer, supplier and admin NestJS applications against one PostgreSQL schema."],
  ["04", "Customer marketplace first", "Delivered catalogue, product, cart, checkout, order and invoice journeys against the real API before the operational apps."],
  ["05", "Seller and admin operations", "Added fulfilment, catalogue management, supplier verification and marketplace oversight."],
  ["06", "Quality and handover", "Completed accessibility checks, browser walkthroughs, automated tests, ADRs and a delivery report."],
];

const LEARNINGS = [
  ["Model the data before the screens", "Solving shared identity and role ownership in the schema prevented three front ends from inventing incompatible rules."],
  ["Keep business rules in the backend", "GST, status transitions, visibility and authorisation remain consistent regardless of which interface calls the API."],
  ["Money and time are domain problems", "Frozen prices, immutable invoices and dispatch SLAs came from operational needs rather than framework conventions."],
  ["Real APIs expose hidden assumptions", "Replacing temporary mocks uncovered timing and stale-record issues that unit-level front-end tests had missed."],
  ["Accessibility is cheaper early", "Checking every route while building made contrast, labelling and keyboard fixes small and repeatable."],
  ["Write decisions down", "Short ADRs made review and handover faster because each trade-off had context, options and a clear outcome."],
];

function SectionTitle({ eyebrow, title, intro, dark = false }: { eyebrow: string; title: string; intro?: string; dark?: boolean }) {
  return (
    <FadeUp>
      <div style={{ marginBottom: 34 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
          <div style={{ width: 30, height: 2, borderRadius: 2, background: MKT_BLUE }} />
          <span style={{ color: MKT_BLUE, fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase" }}>
            {eyebrow}
          </span>
        </div>
        <h4 style={{ margin: 0, color: dark ? "#FFFFFF" : "#0C0C0C", fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "clamp(1.55rem, 3vw, 2.15rem)", lineHeight: 1.15, letterSpacing: "-0.03em" }}>
          {title}
        </h4>
        {intro && <p style={{ maxWidth: 780, margin: "12px 0 0", color: dark ? "#B7C2D6" : "#5F6470", fontSize: "0.92rem", lineHeight: 1.75 }}>{intro}</p>}
      </div>
    </FadeUp>
  );
}

function Gallery() {
  const [tab, setTab] = useState(0);
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const gallery = GALLERIES[tab];
  const current = gallery.items[active];
  const showPrevious = () => setActive(index => (index - 1 + gallery.items.length) % gallery.items.length);
  const showNext = () => setActive(index => (index + 1) % gallery.items.length);

  useEffect(() => {
    if (lightbox === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") setLightbox(current => current === null ? null : (current - 1 + gallery.items.length) % gallery.items.length);
      if (event.key === "ArrowRight") setLightbox(current => current === null ? null : (current + 1) % gallery.items.length);
      if (event.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [gallery.items.length, lightbox]);

  return (
    <>
      <Tabs
        value={tab}
        onChange={(_, value) => { setTab(value); setActive(0); setLightbox(null); }}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="SA Marketplace application gallery"
        sx={{
          mb: 4,
          minHeight: 0,
          "& .MuiTabs-indicator": { display: "none" },
          "& .MuiTabs-flexContainer": { gap: 1 },
          "& .MuiTab-root": { minHeight: 44, borderRadius: 99, border: "1px solid rgba(0,0,0,0.1)", px: 2.2, textTransform: "none", fontWeight: 700 },
          "& .Mui-selected": { color: `${gallery.accent} !important`, borderColor: gallery.accent, background: `${gallery.accent}0D` },
        }}
      >
        {GALLERIES.map(item => <Tab key={item.label} icon={item.icon as React.ReactElement} iconPosition="start" label={item.label} />)}
      </Tabs>

      <motion.div key={gallery.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.48 }}>
        <div style={{ position: "relative", maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ position: "absolute", inset: "10% 8% -5%", borderRadius: 40, background: `radial-gradient(circle, ${gallery.accent}2A 0%, ${gallery.accent}00 68%)`, filter: "blur(24px)", pointerEvents: "none" }} />
          <AnimatePresence mode="wait">
            <motion.div
              key={`${gallery.label}-${current.title}`}
              initial={{ opacity: 0, x: 34, scale: 0.985 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -34, scale: 0.985 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              style={{ position: "relative" }}
            >
              <ButtonBase
                aria-label={`Open ${current.title} screenshot full screen`}
                onClick={() => setLightbox(active)}
                sx={{ display: "block", width: "100%", borderRadius: 3.5, textAlign: "initial" }}
              >
                <BrowserChrome url={`${gallery.host}${current.route}`} height={560}>
                  <img loading="lazy" decoding="async" src={current.src} alt={`${gallery.label}: ${current.title}`} style={{ display: "block", width: "100%", height: "100%", objectFit: "contain", objectPosition: "top", background: "#F7F8FA" }} />
                </BrowserChrome>
              </ButtonBase>
            </motion.div>
          </AnimatePresence>

          <IconButton
            aria-label="Previous screenshot"
            onClick={showPrevious}
            sx={{ position: "absolute", left: { xs: 8, md: -22 }, top: "46%", zIndex: 3, color: MKT_DARK, background: "#fff", border: "1px solid rgba(11,31,77,0.12)", boxShadow: "0 10px 30px rgba(11,31,77,0.16)", "&:hover": { background: "#fff", transform: "translateX(-2px)" } }}
          >
            <ChevronLeft />
          </IconButton>
          <IconButton
            aria-label="Next screenshot"
            onClick={showNext}
            sx={{ position: "absolute", right: { xs: 8, md: -22 }, top: "46%", zIndex: 3, color: MKT_DARK, background: "#fff", border: "1px solid rgba(11,31,77,0.12)", boxShadow: "0 10px 30px rgba(11,31,77,0.16)", "&:hover": { background: "#fff", transform: "translateX(2px)" } }}
          >
            <ChevronRight />
          </IconButton>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`caption-${gallery.label}-${current.title}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            style={{ maxWidth: 760, margin: "22px auto 0", textAlign: "center" }}
          >
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 9, flexWrap: "wrap" }}>
              <Chip label={`${active + 1} / ${gallery.items.length}`} size="small" sx={{ color: gallery.accent, background: `${gallery.accent}10`, border: `1px solid ${gallery.accent}28`, fontWeight: 800 }} />
              <div style={{ color: "#111827", fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "1.05rem", fontWeight: 800 }}>{current.title}</div>
            </div>
            <p style={{ margin: "8px 0 0", color: "#6B7280", fontSize: "0.84rem", lineHeight: 1.65 }}>{current.caption}</p>
          </motion.div>
        </AnimatePresence>

        <div className="marketplace-thumbnails" style={{ marginTop: 28, display: "flex", gap: 10, overflowX: "auto", padding: "4px 4px 14px", scrollbarWidth: "thin" }}>
          {gallery.items.map((item, index) => (
            <ButtonBase
              key={item.title}
              aria-label={`Show ${item.title}`}
              aria-current={active === index ? "true" : undefined}
              onClick={() => setActive(index)}
              sx={{
                display: "block",
                minWidth: { xs: 170, md: 210 },
                width: { xs: 170, md: 210 },
                borderRadius: 2.5,
                overflow: "hidden",
                border: `2px solid ${active === index ? gallery.accent : "transparent"}`,
                background: "#fff",
                boxShadow: active === index ? `0 10px 28px ${gallery.accent}22` : "0 5px 16px rgba(11,31,77,0.08)",
                opacity: active === index ? 1 : 0.7,
                transition: "opacity 180ms ease, transform 180ms ease, box-shadow 180ms ease",
                "&:hover": { opacity: 1, transform: "translateY(-3px)" },
              }}
            >
              <img loading="lazy" decoding="async" src={item.src} alt="" style={{ display: "block", width: "100%", aspectRatio: "16 / 10", objectFit: "cover", objectPosition: "top" }} />
              <div style={{ padding: "9px 10px", color: "#1F2937", fontSize: "0.7rem", fontWeight: 750, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.title}</div>
            </ButtonBase>
          ))}
        </div>
      </motion.div>

      <Dialog
        open={lightbox !== null}
        onClose={() => setLightbox(null)}
        maxWidth={false}
        PaperProps={{ sx: { width: "min(94vw, 1500px)", maxWidth: "94vw", background: "#070A12", borderRadius: 3, overflow: "hidden" } }}
      >
        {lightbox !== null && (
          <div style={{ position: "relative", padding: "54px 18px 18px" }}>
            <IconButton aria-label="Close screenshot" onClick={() => setLightbox(null)} sx={{ position: "absolute", top: 8, right: 8, color: "#fff" }}><X /></IconButton>
            <IconButton aria-label="Previous screenshot" onClick={() => setLightbox((lightbox - 1 + gallery.items.length) % gallery.items.length)} sx={{ position: "absolute", left: 12, top: "50%", zIndex: 2, color: "#fff", background: "rgba(0,0,0,0.5)", "&:hover": { background: "rgba(0,0,0,0.72)" } }}><ChevronLeft /></IconButton>
            <img loading="lazy" decoding="async" src={gallery.items[lightbox].src} alt={gallery.items[lightbox].title} style={{ display: "block", width: "100%", maxHeight: "80vh", objectFit: "contain" }} />
            <IconButton aria-label="Next screenshot" onClick={() => setLightbox((lightbox + 1) % gallery.items.length)} sx={{ position: "absolute", right: 12, top: "50%", zIndex: 2, color: "#fff", background: "rgba(0,0,0,0.5)", "&:hover": { background: "rgba(0,0,0,0.72)" } }}><ChevronRight /></IconButton>
            <div style={{ color: "#fff", textAlign: "center", fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, paddingTop: 14 }}>
              {gallery.items[lightbox].title} · {lightbox + 1} of {gallery.items.length}
            </div>
          </div>
        )}
      </Dialog>
    </>
  );
}

export function MarketplaceProjectSection() {
  return (
    <div style={{ background: "#fff", color: "#0C0C0C" }}>
      <style>{`
        .marketplace-stats { display:grid; grid-template-columns:repeat(4,1fr); gap:10px; }
        .marketplace-three { display:grid; grid-template-columns:repeat(3,1fr); gap:14px; }
        .marketplace-two { display:grid; grid-template-columns:repeat(2,1fr); gap:14px; }
        .marketplace-flow { display:grid; grid-template-columns:repeat(3,1fr); gap:14px; }
        @media (max-width: 900px) {
          .marketplace-stats { grid-template-columns:repeat(2,1fr); }
          .marketplace-three, .marketplace-flow { grid-template-columns:1fr; }
        }
        @media (max-width: 720px) {
          .marketplace-two { grid-template-columns:1fr; }
        }
      `}</style>

      <div style={{ background: `radial-gradient(circle at 90% 5%, ${MKT_BLUE}18, transparent 30%), linear-gradient(180deg,#F7FAFF 0%,#fff 100%)`, borderBottom: "1px solid #E7ECF5" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "54px 28px 64px" }}>
          <FadeUp>
            <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 18 }}>
              <div style={{ width: 36, height: 2, background: MKT_BLUE }} />
              <span style={{ color: MKT_BLUE, fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.19em", textTransform: "uppercase" }}>Featured Project · 01</span>
            </div>
            <h3 style={{ maxWidth: 920, margin: 0, fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "clamp(1.6rem, 3vw, 2.8rem)", lineHeight: 1.1, letterSpacing: "-0.04em", fontWeight: 800 }}>
              SA Marketplace<br />
              <span style={{ background: `linear-gradient(120deg, ${MKT_BLUE}, ${ADMIN_PURPLE})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Workplace testing consumables</span>
            </h3>
            <p style={{ maxWidth: 820, margin: "22px 0 26px", color: "#566174", fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)", lineHeight: 1.75 }}>
              One shared backend and three focused web apps: a buyer marketplace, a seller portal and an admin console for verified supplier onboarding.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: 26 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, background: "#fff", border: "1px solid #E2E8F0", borderRadius: 12, padding: "8px 12px", boxShadow: "0 8px 24px rgba(11,31,77,0.06)" }}>
                <img loading="lazy" decoding="async" src={innomenteLogo} alt="Innomente" style={{ height: 28, maxWidth: 100, objectFit: "contain" }} />
                <div>
                  <div style={{ fontSize: "0.73rem", fontWeight: 800 }}>Associated with Innomente Pty Ltd</div>
                  <div style={{ color: "#7A8291", fontSize: "0.66rem", marginTop: 2 }}>Sister company of Sample Assist</div>
                </div>
              </div>
              <img loading="lazy" decoding="async" src={sampleAssistLogo} alt="Sample Assist" style={{ height: 38, maxWidth: 120, objectFit: "contain" }} />
            </div>
            <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
              {["Marketplace", "NestJS", "React", "PostgreSQL", "TypeScript", "RBAC", "Tax invoices", "WCAG AA"].map(tag => (
                <Chip key={tag} label={tag} size="small" sx={{ background: `${MKT_BLUE}0C`, border: `1px solid ${MKT_BLUE}24`, color: MKT_DARK, fontWeight: 650 }} />
              ))}
            </div>
            <Button
              component="a"
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              startIcon={<Github size={17} />}
              sx={{ mt: 2.5, px: 2.2, py: 1, background: MKT_DARK, "&:hover": { background: MKT_BLUE } }}
            >
              View source on GitHub
            </Button>
          </FadeUp>

          <div className="marketplace-stats" style={{ marginTop: 38 }}>
            {IMPACT.map(([number, label], index) => (
              <FadeUp key={label} delay={index * 0.04}>
                <div style={{ height: "100%", background: "#fff", border: "1px solid #E3E9F2", borderRadius: 14, padding: "17px 18px", boxShadow: "0 10px 30px rgba(11,31,77,0.045)" }}>
                  <div style={{ color: MKT_BLUE, fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "1.4rem", fontWeight: 800 }}>{number}</div>
                  <div style={{ color: "#687183", fontSize: "0.72rem", lineHeight: 1.45, marginTop: 3 }}>{label}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>

      <section style={{ padding: "88px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 20px" }}>
          <SectionTitle eyebrow="The challenge" title="Three groups, one trusted order journey" intro="Workplace testing depends on specialised consumables, but buyers, suppliers and Sample Assist staff had no shared place to move an order from product discovery to a stored tax invoice." />
          <div className="marketplace-flow">
            {[
              [<ShoppingCart size={21} />, "Buyer", "Browse, compare, cart, checkout, orders and invoices", MKT_BLUE],
              [<Store size={21} />, "Seller", "Listings, stock, pick lists, dispatch and business profile", SELLER_ORANGE],
              [<ShieldCheck size={21} />, "SA Admin", "Supplier verification and marketplace-wide oversight", ADMIN_PURPLE],
            ].map(([icon, label, text, color]) => (
              <div key={label as string} style={{ borderTop: `3px solid ${color}`, background: "#F9FAFC", borderRadius: 14, padding: 22 }}>
                <div style={{ color: color as string }}>{icon}</div>
                <div style={{ marginTop: 12, fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800 }}>{label}</div>
                <p style={{ margin: "7px 0 0", color: "#687183", fontSize: "0.82rem", lineHeight: 1.65 }}>{text}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 20, border: `1px solid ${MKT_BLUE}25`, borderRadius: 14, background: `${MKT_BLUE}08`, padding: "17px 20px", color: "#334155", fontSize: "0.82rem", lineHeight: 1.65 }}>
            Built for Bindi MedSupply as the planned first enterprise supplier. All data shown in the case study is fictional.
          </div>
          <div className="marketplace-two" style={{ marginTop: 34 }}>
            {HARD_PARTS.map(([title, text], index) => (
              <FadeUp key={title} delay={(index % 2) * 0.06}>
                <div style={{ height: "100%", border: "1px solid #E5E9F0", borderRadius: 14, padding: 22 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <CheckCircle2 size={17} color={MKT_BLUE} />
                    <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "0.88rem" }}>{title}</div>
                  </div>
                  <p style={{ color: "#687183", fontSize: "0.8rem", lineHeight: 1.7, margin: "9px 0 0" }}>{text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "88px 0", background: "#08152F", color: "#fff" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 20px" }}>
          <SectionTitle dark eyebrow="System design" title="Architecture with explicit boundaries" intro="Each application has its own audience and responsibilities, while shared packages keep the schema and cross-cutting rules consistent." />
          <div className="marketplace-three">
            {[
              ["Buyer marketplace", "React · :5173", MKT_BLUE],
              ["Seller portal", "React · :5174", SELLER_ORANGE],
              ["SA Admin", "React · :5175", ADMIN_PURPLE],
            ].map(([title, subtitle, color]) => (
              <div key={title} style={{ border: `1px solid ${color}88`, background: `${color}20`, borderRadius: 13, padding: 18, textAlign: "center" }}>
                <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800 }}>{title}</div>
                <div style={{ color: "#B8C3D8", fontSize: "0.72rem", marginTop: 5 }}>{subtitle}</div>
              </div>
            ))}
          </div>
          <div style={{ height: 30, width: 1, background: "#53627D", margin: "0 auto" }} />
          <div className="marketplace-three">
            {[
              ["Customer API", ":8001", MKT_BLUE],
              ["Supplier API", ":8002", SELLER_ORANGE],
              ["Admin API", ":8003", ADMIN_PURPLE],
            ].map(([title, subtitle, color]) => (
              <div key={title} style={{ border: `1px solid ${color}88`, background: "#111F3C", borderRadius: 13, padding: 17, textAlign: "center" }}>
                <div style={{ fontWeight: 800 }}>{title}</div><div style={{ color: "#91A1BD", fontSize: "0.7rem", marginTop: 4 }}>{subtitle}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 14, border: "1px solid #43516A", background: "#111F3C", borderRadius: 13, padding: 17, textAlign: "center", color: "#D9E2F0", fontSize: "0.8rem" }}>
            Shared packages · TypeORM entities · auth and guards · validation · mail · PDF · TypeScript · ESLint
          </div>
          <div style={{ width: "min(520px, 100%)", margin: "14px auto 0", border: `1px solid ${MKT_BLUE}88`, background: `${MKT_BLUE}22`, borderRadius: 99, padding: "14px 20px", textAlign: "center", fontWeight: 800 }}>
            PostgreSQL 16 · migration-managed schema
          </div>

          <div className="marketplace-two" style={{ marginTop: 42 }}>
            {DECISIONS.map(([title, text, practice], index) => (
              <FadeUp key={title} delay={(index % 2) * 0.05}>
                <div style={{ height: "100%", border: "1px solid #2D3C58", background: "#0E1C36", borderRadius: 14, padding: 22 }}>
                  <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "0.9rem" }}>{title}</div>
                  <p style={{ color: "#B7C2D6", fontSize: "0.79rem", lineHeight: 1.7, margin: "9px 0 14px" }}>{text}</p>
                  <Chip label={practice} size="small" sx={{ background: `${MKT_BLUE}28`, border: `1px solid ${MKT_BLUE}66`, color: "#BFD7FF", fontSize: "0.66rem" }} />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "88px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 20px" }}>
          <SectionTitle eyebrow="Delivery" title="How I built it" />
          <div className="marketplace-two">
            {BUILD_STEPS.map(([number, title, text]) => (
              <FadeUp key={number}>
                <div style={{ display: "grid", gridTemplateColumns: "44px 1fr", gap: 14, height: "100%", borderBottom: "1px solid #E5E9F0", padding: "8px 0 22px" }}>
                  <div style={{ width: 38, height: 38, display: "grid", placeItems: "center", borderRadius: 11, background: MKT_DARK, color: "#fff", fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.72rem", fontWeight: 800 }}>{number}</div>
                  <div>
                    <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800 }}>{title}</div>
                    <p style={{ margin: "7px 0 0", color: "#687183", fontSize: "0.8rem", lineHeight: 1.7 }}>{text}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "88px 0", background: "#F7F9FC" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 20px" }}>
          <SectionTitle eyebrow="Features in action" title="The customer journey comes first" intro="The gallery leads with the customer marketplace, followed by the seller and Sample Assist operational tools. Only the screens that explain the core workflow are included." />
          <Gallery />
          <div style={{ marginTop: 28, borderTop: "1px solid #DDE3EC", paddingTop: 16, color: "#7A8291", fontSize: "0.72rem" }}>Screens captured from the running applications against fictional seed data.</div>
        </div>
      </section>

      <section style={{ padding: "88px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 20px" }}>
          <SectionTitle eyebrow="Retrospective" title="What I learned" />
          <div className="marketplace-three">
            {LEARNINGS.map(([title, text], index) => (
              <FadeUp key={title} delay={(index % 3) * 0.05}>
                <div style={{ height: "100%", background: "#F8FAFC", border: "1px solid #E6EAF1", borderRadius: 14, padding: 22 }}>
                  <div style={{ color: MKT_BLUE, fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.7rem", fontWeight: 800, marginBottom: 8 }}>0{index + 1}</div>
                  <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "0.88rem" }}>{title}</div>
                  <p style={{ color: "#687183", fontSize: "0.78rem", lineHeight: 1.7, margin: "8px 0 0" }}>{text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "88px 0", background: "#F7F9FC" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 20px" }}>
          <SectionTitle eyebrow="Technology" title="A typed, testable full-stack system" />
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <TechRow group="Frontend" color={MKT_BLUE} items={[
              { slug: "react", name: "React", color: "#087EA4" },
              { slug: "vite", name: "Vite", color: "#646CFF" },
              { slug: "typescript", name: "TypeScript", color: "#3178C6" },
              { slug: "antdesign", name: "Ant Design", color: "#0170FE" },
              { slug: "redux", name: "RTK Query", color: "#764ABC" },
            ]} />
            <TechRow group="Backend" color="#E0234E" items={[
              { slug: "nestjs", name: "NestJS", color: "#E0234E" },
              { slug: "typeorm", name: "TypeORM", color: "#FE0803" },
              { slug: "postgresql", name: "PostgreSQL", color: "#4169E1" },
              { slug: "swagger", name: "OpenAPI", color: "#85EA2D" },
              { slug: "puppeteer", name: "Puppeteer", color: "#40B5A4" },
            ]} />
            <TechRow group="Tooling" color={MKT_DARK} items={[
              { slug: "pnpm", name: "pnpm", color: "#F69220" },
              { slug: "turborepo", name: "Turborepo", color: "#EF4444" },
              { slug: "docker", name: "Docker", color: "#2496ED" },
              { slug: "vitest", name: "Vitest", color: "#6E9F18" },
              { slug: "jest", name: "Jest", color: "#C21325" },
            ]} />
          </div>
          <FadeUp>
            <div style={{ marginTop: 34, borderRadius: 18, padding: "26px 28px", color: "#fff", background: `linear-gradient(135deg, ${MKT_DARK}, ${MKT_BLUE})`, display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap" }}>
              <div style={{ width: 46, height: 46, borderRadius: 13, background: "rgba(255,255,255,0.12)", display: "grid", placeItems: "center" }}><Code2 /></div>
              <div style={{ flex: 1, minWidth: 240 }}>
                <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: "1rem" }}>Explore the complete implementation</div>
                <div style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.78rem", lineHeight: 1.6, marginTop: 4 }}>Source code, architecture decision records and project documentation are available in the public repository. The application runs locally with fictional data; no real payments are processed.</div>
              </div>
              <Button
                component="a"
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                startIcon={<Github size={16} />}
                sx={{ color: "#fff", borderColor: "rgba(255,255,255,0.45)", "&:hover": { color: MKT_DARK, borderColor: "#fff", background: "#fff" } }}
              >
                GitHub repository
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
