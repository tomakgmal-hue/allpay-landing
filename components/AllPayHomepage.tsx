'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, ShieldCheck, CreditCard, ArrowRight, ChevronRight, Check, Building2, Boxes, Layers, Rocket, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

/**
 * AllPay – English Homepage (inspired by Zota.com layout)
 * - Single-file React component
 * - TailwindCSS for styling
 * - Framer Motion for animations
 * - Accessible, responsive
 */

const nav = [
  { label: "Products", items: [
    { label: "Payment Methods", href: "#payment-methods" },
    { label: "Virtual Accounts", href: "#virtual-accounts" },
    { label: "Payouts", href: "#payouts" },
    { label: "Fraud Prevention", href: "#security" },
  ]},
  { label: "Solutions", items: [
    { label: "By Industry", href: "#industries" },
    { label: "By Region", href: "#regions" },
  ]},
  { label: "Developers", items: [
    { label: "Docs", href: "/docs" },
    { label: "API", href: "/api" },
    { label: "SDKs", href: "/sdks" },
  ]},
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const features = [
  {
    icon: <CreditCard className="h-6 w-6" aria-hidden />,
    title: "1,000+ Local Payments",
    desc: "Cards, bank transfers, wallets, and more across emerging & established markets.",
  },
  {
    icon: <Layers className="h-6 w-6" aria-hidden />,
    title: "Virtual Accounts",
    desc: "Easy reconciliation with named accounts and multi-currency balances.",
  },
  {
    icon: <Boxes className="h-6 w-6" aria-hidden />,
    title: "Fast Global Payouts",
    desc: "Send funds to vendors & users in minutes, with transparent FX.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" aria-hidden />,
    title: "Risk & Compliance",
    desc: "Fraud tooling, KYC/KYB workflows, and enterprise-grade security.",
  },
];

const regions = [
  { key: "sea", title: "South East Asia", countries: "SG • MY • TH • VN • ID • PH" },
  { key: "easia", title: "East Asia", countries: "KR • JP • HK • TW" },
  { key: "mena", title: "MENA", countries: "AE • SA • EG • MA" },
  { key: "latam", title: "LATAM", countries: "BR • MX • AR • CL • CO" },
  { key: "eu", title: "Europe", countries: "EU • UK • EEA" },
  { key: "africa", title: "Africa", countries: "KE • NG • ZA • EG" },
];

const industries = [
  "eCommerce", "Digital Goods", "Financial Services", "Travel", "Retail", "Gaming"
];

const steps = [
  { n: 1, title: "Integrate", desc: "Use a single API for payments, virtual accounts, and payouts." },
  { n: 2, title: "Localize", desc: "Turn on the best local methods per region with one config." },
  { n: 3, title: "Optimize", desc: "Smart routing and risk controls improve approval & conversion." },
];

export default function AllPayHomepage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
        <LogoTicker />
        <Section id="why-allpay" headline="Why AllPay?" kicker="Designed for global scale">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="flex items-center gap-3 text-white/90">
                  <div className="rounded-xl bg-white/10 p-2">{f.icon}</div>
                  <h3 className="font-semibold">{f.title}</h3>
                </div>
                <p className="mt-3 text-sm text-neutral-300">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="regions" headline="Regions" kicker="Pay everywhere">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {regions.map((r, i) => (
              <motion.a
                key={r.key}
                href={`/#regions-${r.key}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-5 hover:border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-white">{r.title}</h3>
                    <p className="mt-1 text-sm text-neutral-300">{r.countries}</p>
                  </div>
                  <div className="rounded-full bg-white/10 p-2 group-hover:bg-white/20 transition"><ChevronRight className="h-5 w-5" aria-hidden /></div>
                </div>
              </motion.a>
            ))}
          </div>
        </Section>

        <Section id="custom-cashier" headline="Brandable checkout" kicker="Your cross‑border cashier page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <MockCheckout />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <ul className="space-y-3">
                {[
                  "Match your logo, colors, and typography",
                  "Localized payment methods per market",
                  "Campaign & holiday theming",
                  "A/B test flows to lift conversion",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <div className="mt-1 rounded-full bg-emerald-400/20 p-1"><Check className="h-4 w-4 text-emerald-400" aria-hidden /></div>
                    <span className="text-neutral-300">{t}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex gap-3">
                <Button href="#contact">Talk to sales</Button>
                <Button href="#docs" variant="ghost">View docs</Button>
              </div>
            </motion.div>
          </div>
        </Section>

        <Section id="industries" headline="Supported industries" kicker="We cover a wide range">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {industries.map((x, i) => (
              <motion.div key={x} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.03 }} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-center text-sm text-neutral-200">
                {x}
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="how-it-works" headline="How it works" kicker="From idea to global">
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {steps.map((s, i) => (
              <motion.li key={s.n} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm font-semibold">{s.n}</div>
                  <h3 className="font-semibold">{s.title}</h3>
                </div>
                <p className="mt-3 text-neutral-300 text-sm">{s.desc}</p>
              </motion.li>
            ))}
          </ol>
        </Section>

        <Section id="security" headline="Security & reliability" kicker="Built for trust">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {["Tokenized payments", "3DS / SCA support", "Data encryption", "Real-time risk scoring", "Manual review tooling", "Audit-friendly logs"].map((t, i) => (
              <motion.div key={t} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.04 }} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="rounded-lg bg-white/10 p-2"><ShieldCheck className="h-5 w-5" aria-hidden /></div>
                <span className="text-neutral-300 text-sm">{t}</span>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="company" headline="Company overview" kicker="AllPay at a glance">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <p className="text-neutral-300">AllPay provides global payment & virtual account solutions so you can connect with customers locally and internationally. From collection to payout, our platform unifies payment methods, account reconciliation, and risk tooling in a single API.</p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-300">
                {[
                  "Services overview: collection, virtual accounts, payouts",
                  "Key features: local methods, smart routing, reconciliation",
                  "Differentiators: coverage, reliability, and developer-first APIs",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2"><Check className="h-4 w-4 mt-1 text-emerald-400" aria-hidden /><span>{t}</span></li>
                ))}
              </ul>
              <div className="mt-5 flex gap-3">
                <Button href="#contact">Get started</Button>
                <Button href="#pricing" variant="ghost">View pricing</Button>
              </div>
            </div>
            <div>
              <InfoTiles />
            </div>
          </div>
        </Section>

        <Section id="cta" headline="Ready to go global?" kicker="Let’s talk">
          <div className="flex flex-col items-center text-center">
            <p className="max-w-2xl text-neutral-300">Our team can help you localize payments, accelerate approval rates, and simplify reconciliation with virtual accounts. Tell us about your use case and target regions.</p>
            <div className="mt-5 flex gap-3">
              <Button href="#contact">Contact sales</Button>
              <Button href="#sandbox" variant="ghost">Start in sandbox</Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

function Header({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (v: boolean) => void; }) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
            <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-sky-400 to-indigo-500" aria-hidden />
            AllPay
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            {nav.map((n) => (
              <div key={n.label} className="relative group">
                { // @ts-ignore
                  n.items ? (
                  <button className="hover:text-white">{n.label}</button>
                ) : (
                  <a className="hover:text-white" href={n.href as string}>{(n as any).label || (n as any).href}</a>
                )}
                { // @ts-ignore
                  n.items && (
                  <div className="invisible absolute left-0 mt-2 w-56 rounded-xl border border-white/10 bg-neutral-900 p-2 opacity-0 shadow-2xl transition group-hover:visible group-hover:opacity-100">
                    { // @ts-ignore
                      n.items.map((i) => (
                      <a key={i.label} href={i.href} className="block rounded-lg px-3 py-2 text-sm text-neutral-300 hover:bg-white/5 hover:text-white">{i.label}</a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <Button href="#contact" size="sm">Contact</Button>
            <Button href="#sandbox" size="sm" variant="ghost">Sign in</Button>
          </div>
          <button className="md:hidden rounded-xl border border-white/10 bg-white/5 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span className="sr-only">Toggle menu</span>
            <div className="h-0.5 w-5 bg-white mb-1" />
            <div className="h-0.5 w-5 bg-white mb-1" />
            <div className="h-0.5 w-5 bg-white" />
          </button>
        </div>
        {menuOpen && (
          <div className="mt-3 grid grid-cols-1 gap-2 md:hidden">
            {nav.map((n) => (
              <div key={n.label}>
                <div className="text-neutral-300">{n.label}</div>
                <div className="mt-1 grid grid-cols-2 gap-2">
                  {( // @ts-ignore
                    n.items ?? [n]).map((i: any) => (
                    <a key={i.label || i.href} href={i.href} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-neutral-200">{i.label || i.href?.replace('#','')}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        {/* Background gradient + orbs */}
        <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-500/30 blur-3xl" />
        <div className="absolute top-40 right-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -bottom-16 left-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-medium tracking-wide text-sky-300/90">A marketplace for payments – AllPay</p>
            <h1 className="mt-3 text-4xl/tight font-bold sm:text-5xl/tight">
              Global payments, <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">local experience</span>
            </h1>
            <p className="mt-4 max-w-xl text-neutral-300">
              Connect with customers worldwide through local payment methods and virtual accounts. Unify collections, reconciliation, and payouts in a single API.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="#contact">Start today</Button>
              <Button href="#why-allpay" variant="ghost">Explore our gateway</Button>
            </div>
            <div className="mt-6 flex items-center gap-3 text-xs text-neutral-400">
              <ShieldCheck className="h-4 w-4" aria-hidden />
              <span>Enterprise-grade security • Developer-first</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <GlobeCanvas />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function GlobeCanvas() {
  // Lightweight animated globe substitute (CSS + motion), no three.js required
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-500/20 to-indigo-500/10" />
      <motion.div
        className="absolute inset-4 rounded-full border-2 border-white/10"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-10 rounded-full border border-dashed border-white/20"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 36, ease: "linear" }}
      />
      <div className="absolute inset-0 grid place-items-center">
        <Globe className="h-24 w-24 text-white/80" aria-hidden />
      </div>
    </div>
  );
}

function LogoTicker() {
  return (
    <div className="border-y border-white/10 bg-neutral-900/40">
      <div className="mx-auto flex max-w-7xl items-center gap-10 overflow-hidden px-4 py-6">
        {["Visa", "Mastercard", "PayNow", "PIX", "Open Banking", "ACH", "PromptPay"].map((brand) => (
          <div key={brand} className="shrink-0 text-sm text-neutral-400">{brand}</div>
        ))}
      </div>
    </div>
  );
}

function Section({ id, headline, kicker, children }: any) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-4 py-14">
      <div className="mb-8">
        {kicker && <p className="text-sm font-medium tracking-wide text-sky-300/90">{kicker}</p>}
        {headline && <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">{headline}</h2>}
      </div>
      {children}
    </section>
  );
}

function MockCheckout() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="rounded-xl border border-white/10 bg-neutral-900 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-sky-400 to-indigo-500" />
            <span className="text-sm">Your Brand</span>
          </div>
          <span className="text-xs text-neutral-400">Order #3842</span>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-lg border border-white/10 bg-white/5 p-3">
            <div className="text-neutral-400">Amount</div>
            <div className="mt-1 text-white">$129.00</div>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-3">
            <div className="text-neutral-400">Currency</div>
            <div className="mt-1 text-white">USD</div>
          </div>
        </div>
        <div className="mt-4">
          <div className="text-sm text-neutral-300">Select a payment method</div>
          <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
            {["Card", "Bank Transfer", "eWallet", "Cash/Voucher"].map((m) => (
              <button key={m} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-left hover:border-white/20">{m}</button>
            ))}
          </div>
          <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-2 text-sm font-medium">
            Pay now
            <ArrowRight className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </div>
    </div>
  );
}

function InfoTiles() {
  const tiles = [
    { icon: <Building2 className="h-5 w-5" />, t: "Unified platform", s: "Collect, reconcile, and pay out with one API." },
    { icon: <Rocket className="h-5 w-5" />, t: "Higher approvals", s: "Local acquiring & smart routing improve conversion." },
    { icon: <CreditCard className="h-5 w-5" />, t: "More ways to pay", s: "1,000+ local methods across markets." },
    { icon: <ShieldCheck className="h-5 w-5" />, t: "Risk built-in", s: "Fraud tools, KYC/KYB workflows, and observability." },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {tiles.map((x) => (
        <div key={x.t} className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-center gap-2 font-medium">{x.icon}<span>{x.t}</span></div>
          <div className="mt-1 text-sm text-neutral-300">{x.s}</div>
        </div>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-8 border-t border-white/10 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-2 font-semibold">
              <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-sky-400 to-indigo-500" />
              AllPay
            </div>
            <p className="mt-3 text-neutral-400">Global Payment & Virtual Account Solutions.</p>
          </div>
          <div>
            <div className="font-semibold">Products</div>
            <ul className="mt-2 space-y-2 text-neutral-400">
              <li><a href="#payment-methods" className="hover:text-white">Payment Methods</a></li>
              <li><a href="#virtual-accounts" className="hover:text-white">Virtual Accounts</a></li>
              <li><a href="#payouts" className="hover:text-white">Payouts</a></li>
              <li><a href="#security" className="hover:text-white">Security</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Company</div>
            <ul className="mt-2 space-y-2 text-neutral-400">
              <li><a href="#company" className="hover:text-white">About</a></li>
              <li><a href="#industries" className="hover:text-white">Industries</a></li>
              <li><a href="#regions" className="hover:text-white">Regions</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Contact</div>
            <div className="mt-2 space-y-2 text-neutral-400">
              <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> +82 (0)2‑000‑0000</div>
              <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@allpay.example</div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Seoul, Republic of Korea</div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} AllPay. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-neutral-300">Privacy</a>
            <a href="#" className="hover:text-neutral-300">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Button({ href = '#', children, variant = 'solid', size = 'md' }: { href?: string; children: any; variant?: 'solid'|'ghost'; size?: 'sm'|'md'; }) {
  const base = "inline-flex items-center gap-2 rounded-xl font-medium transition";
  const variants = {
    solid: "bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400",
    ghost: "border border-white/10 bg-white/0 hover:bg-white/5",
  } as const;
  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
  } as const;
  return (
    <a href={href} className={`${base} ${variants[variant]} ${sizes[size]}`}>
      {children} <ArrowUpRight className="h-4 w-4" aria-hidden />
    </a>
  );
}
