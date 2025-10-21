import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CreditCard,
  Globe2,
  Lock,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
  Mail,
  Phone,
  MapPin,
  Landmark,
  Newspaper,
  ExternalLink,
} from "lucide-react";

const cn = (...s) => s.filter(Boolean).join(" ");

function Button({ asChild, variant = "default", className = "", children, href, ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const styles = {
    default: "bg-blue-700 text-white hover:bg-blue-800 focus:ring-blue-300",
    outline: "border border-slate-300 text-slate-800 hover:bg-slate-50 focus:ring-blue-300",
    ghost: "text-slate-800 hover:bg-slate-100 focus:ring-blue-300",
  };
  if (asChild && href) {
    return (
      <a href={href} className={cn(base, styles[variant], className)} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button className={cn(base, styles[variant], className)} {...props}>
      {children}
    </button>
  );
}

function Card({ className = "", children }) {
  return <div className={cn("rounded-2xl border bg-white shadow-sm", className)}>{children}</div>;
}
function CardHeader({ className = "", children }) {
  return <div className={cn("p-4", className)}>{children}</div>;
}
function CardTitle({ className = "", children }) {
  return <h3 className={cn("text-lg font-semibold", className)}>{children}</h3>;
}
function CardContent({ className = "", children }) {
  return <div className={cn("px-4 pb-4", className)}>{children}</div>;
}
function Input({ className = "", ...props }) {
  return (
    <input
      className={cn(
        "w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300",
        className
      )}
      {...props}
    />
  );
}
function Textarea({ className = "", rows = 4, ...props }) {
  return (
    <textarea
      rows={rows}
      className={cn(
        "w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300",
        className
      )}
      {...props}
    />
  );
}

const Section = ({ id, eyebrow, title, subtitle, children }) => (
  <section id={id} data-testid={id} className="snap-start mx-auto w-full max-w-7xl px-4 md:px-6 py-20">
    <div className="mb-10">
      {eyebrow && (
        <p className="mb-2 text-sm font-medium tracking-widest uppercase text-blue-700">{eyebrow}</p>
      )}
      {title && <h2 className="text-3xl md:text-4xl font-bold leading-tight text-slate-900">{title}</h2>}
      {subtitle && <p className="mt-3 max-w-3xl text-base md:text-lg text-slate-600">{subtitle}</p>}
    </div>
    {children}
  </section>
);

const IconCapsule = ({ children }) => (
  <div className="rounded-2xl p-2 shadow-sm border border-blue-200 bg-blue-50 text-blue-700">{children}</div>
);

const BANKS = [
  { name: "KB국민은행", website: "https://www.kbstar.com" },
  { name: "신한은행", website: "https://www.shinhan.com" },
  { name: "하나은행", website: "https://www.hanabank.com" },
  { name: "우리은행", website: "https://www.wooribank.com" },
  { name: "NH농협은행", website: "https://banking.nonghyup.com" },
  { name: "IBK기업은행", website: "https://www.ibk.co.kr" },
  { name: "SC제일은행", website: "https://www.sc.co.kr" },
  { name: "카카오뱅크", website: "https://www.kakaobank.com" },
  { name: "토스뱅크", website: "https://www.tossbank.com" },
  { name: "부산은행", website: "https://www.busanbank.co.kr" },
];

function PartnersGridStatic() {
  return (
    <div className="grid md:grid-cols-4 gap-4">
      {BANKS.map((b) => (
        <Card key={b.name} className="h-full border-blue-100/60">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-3">
              <IconCapsule>
                <Landmark className="h-5 w-5 text-blue-700" />
              </IconCapsule>
              <CardTitle className="text-base text-slate-900">{b.name}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-slate-600">
            <p>공식 로고는 사용 허가 확인 후 적용됩니다.</p>
            {b.website ? (
              <div className="mt-2">
                <a
                  href={b.website}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1 underline hover:text-blue-700"
                >
                  공식 사이트 방문
                </a>
              </div>
            ) : null}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div
      data-testid="scroll-root"
      className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth bg-[radial-gradient(40%_50%_at_70%_-10%,rgba(13,38,84,0.10),transparent_60%)]"
      style={{ backgroundColor: "white" }}
    >
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-blue-100">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-6 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 grid place-items-center rounded-xl border border-blue-200 shadow-sm">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="font-bold text-xl text-slate-900">AllPay</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {[
              ["회사 소개", "about"],
              ["파트너 은행", "banks"],
              ["서비스 개요", "overview"],
              ["주요 기능", "features"],
              ["기술 구조", "architecture"],
              ["차별성 & 장점", "advantage"],
              ["뉴스룸", "news"],
              ["활용 시나리오", "scenarios"],
              ["운영 체계", "operations"],
              ["로드맵", "roadmap"],
              ["비전 & 가치", "vision"],
              ["문의", "contact"],
            ].map(([label, id]) => (
              <a key={id} href={`#${id}`} className="hover:text-blue-700 transition-colors text-slate-700">
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild href="#contact">
              <span className="inline-flex items-center gap-2">
                데모 문의 <ArrowRight className="h-4 w-4" />
              </span>
            </Button>
          </div>
        </div>
      </header>

      <section id="home" className="snap-start relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-60 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent" />
        <div className="mx-auto w-full max-w-7xl px-4 md:px-6 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold leading-[1.15] bg-gradient-to-r from-blue-800 to-indigo-700 text-transparent bg-clip-text"
            >
              Global Payment & Virtual Account Solutions
            </motion.h1>
            <p className="mt-4 text-lg text-slate-600">
              Connecting the World Through Payments — AllPay는 전 세계 결제와 가상계좌를 하나의 플랫폼으로 통합해 해외 비즈니스 확장을 가속화합니다.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button asChild href="#overview">제품 살펴보기</Button>
              <Button asChild variant="outline" href="#contact">세일즈와 상담</Button>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" />PCI-DSS & ISO 27001
              </div>
              <div className="flex items-center gap-2">
                <Globe2 className="h-4 w-4" />150+ 국가 커버리지
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-blue-100 bg-white shadow-sm grid place-items-center p-6">
              <div className="grid grid-cols-3 gap-4 w-full">
                {[CreditCard, Lock, Server, Workflow, Globe2, ShieldCheck].map((Ico, i) => (
                  <div key={i} className="rounded-xl border border-blue-100 p-6 grid place-items-center">
                    <Ico className="h-8 w-8 text-slate-800" />
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-600">다양한 결제 수단, 보안, 정산, 오케스트레이션을 한 번에</p>
            </div>
          </div>
        </div>
      </section>

      <Section id="about" eyebrow="회사 소개" title="AllPay는 글로벌 결제 인프라를 표준화합니다" subtitle="복잡한 국가별 결제망을 단일 API와 가상계좌로 연결합니다.">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="h-full border-blue-100/60"><CardHeader className="pb-3"><CardTitle>글로벌 네트워크</CardTitle></CardHeader><CardContent className="text-sm text-slate-600">현지 PSP/은행 파트너십으로 다양한 결제 수단 제공.</CardContent></Card>
          <Card className="h-full border-blue-100/60"><CardHeader className="pb-3"><CardTitle>규제/보안 준수</CardTitle></CardHeader><CardContent className="text-sm text-slate-600">KYC/AML, PCI-DSS, ISO 27001 준수.</CardContent></Card>
          <Card className="h-full border-blue-100/60"><CardHeader className="pb-3"><CardTitle>간편한 통합</CardTitle></CardHeader><CardContent className="text-sm text-slate-600">단일 SDK와 웹훅으로 라우팅·환율·정산 자동화.</CardContent></Card>
        </div>
      </Section>

      <Section id="banks" eyebrow="파트너/은행 네트워크" title="전 세계 금융 파트너와 연결" subtitle="다양한 통화와 수납/정산을 지원합니다.">
        <PartnersGridStatic />
      </Section>

      <Section id="overview" eyebrow="서비스 개요" title="결제 수납부터 정산, 가상계좌까지 올인원" subtitle="엔드투엔드 결제 플랫폼">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-blue-100/60">
            <CardHeader><CardTitle>수납(Checkout) & 라우팅</CardTitle></CardHeader>
            <CardContent className="text-sm text-slate-600">
              <ul className="list-disc pl-5 space-y-1">
                <li>카드/계좌/월렛/현지결제 자동 라우팅</li>
                <li>재시도 규칙, 3DS/리스크 스코어링</li>
                <li>구독/정기결제, BNPL 지원</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-blue-100/60">
            <CardHeader><CardTitle>가상계좌 & 글로벌 정산</CardTitle></CardHeader>
            <CardContent className="text-sm text-slate-600">
              <ul className="list-disc pl-5 space-y-1">
                <li>국가/통화별 Virtual IBAN 발급</li>
                <li>자동 매핑/리콘, 수수료 투명화</li>
                <li>멀티통화 지갑, 환전/헤지 옵션</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section id="contact" eyebrow="문의 & 맺음말" title="도입 상담/데모 신청">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-blue-100/60">
            <CardHeader><CardTitle>연락처</CardTitle></CardHeader>
            <CardContent className="space-y-2 text-sm text-slate-600">
              <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> sales@allpay.example</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +82-02-1234-5678</p>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 서울특별시 ○○구 ○○로 00</p>
            </CardContent>
          </Card>
          <Card className="border-blue-100/60">
            <CardHeader><CardTitle>문의하기</CardTitle></CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-3">
                  <Input placeholder="회사명" />
                  <Input placeholder="담당자명" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Input type="email" placeholder="이메일" />
                  <Input type="tel" placeholder="연락처" />
                </div>
                <Textarea placeholder="도입 목적/요청 사항" rows={4} />
                <Button type="submit" className="w-full">제출하기</Button>
                <p className="text-xs text-slate-500">※ 실제 전송 기능은 데모에 포함되지 않습니다.</p>
              </form>
            </CardContent>
          </Card>
        </div>
      </Section>

      <footer className="border-t border-blue-100 py-10">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} AllPay. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-blue-700">회사 소개</a>
            <a href="#overview" className="hover:text-blue-700">서비스</a>
            <a href="#contact" className="hover:text-blue-700">문의</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
