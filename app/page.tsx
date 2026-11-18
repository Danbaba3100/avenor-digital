import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Code2, Compass, Globe2, Layers3, Menu, Search, ShieldCheck, Sparkles, Workflow } from "lucide-react";

const services = [
  { number: "01", title: "AVENOR Web", description: "High-performing websites, e-commerce experiences and web applications designed to move your business forward.", icon: Code2 },
  { number: "02", title: "AVENOR Technologies", description: "Purpose-built software, business systems, APIs and dependable digital infrastructure.", icon: Layers3 },
  { number: "03", title: "AVENOR Growth", description: "Search engine optimisation and digital visibility strategies that help the right customers find you.", icon: Search },
  { number: "04", title: "AVENOR Consulting", description: "Clear technology direction, digital transformation guidance and practical technical strategy.", icon: Compass },
  { number: "05", title: "AVENOR Partnerships", description: "Long-term development, maintenance and technology support built around your business goals.", icon: Workflow },
];

const locations = ["Lagos", "Ibadan", "Ogun State", "Abuja", "Osogbo"];

export default function HomePage() {
  return (
    <main>
      <header className="site-header sticky top-0 z-50">
        <div className="container flex h-[78px] items-center justify-between">
          <Link href="/" aria-label="AVENOR Digital home" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center border border-[#c5a46d]/70 text-xl font-semibold text-[#c5a46d]">A</span>
            <span className="leading-none"><span className="block text-[19px] font-semibold tracking-[.22em]">AVENOR</span><span className="mt-1 block text-[9px] tracking-[.48em] text-[#c5a46d]">DIGITAL</span></span>
          </Link>
          <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
            <Link className="nav-link" href="#about">About</Link>
            <Link className="nav-link" href="#services">Services</Link>
            <Link className="nav-link" href="#work">Our approach</Link>
            <Link className="nav-link" href="#locations">Locations</Link>
          </nav>
          <Link href="#contact" className="button-primary hidden md:inline-flex">Start a project <ArrowUpRight size={15} /></Link>
          <Link href="#contact" aria-label="Go to contact section" className="text-[#c5a46d] md:hidden"><Menu size={25} /></Link>
        </div>
      </header>

      <section className="hero-grid hero-glow relative overflow-hidden">
        <div className="container grid min-h-[680px] items-center gap-14 py-24 lg:grid-cols-[1.05fr_.95fr]">
          <div className="relative z-10">
            <div className="eyebrow mb-7 flex items-center gap-3"><span className="h-px w-9 bg-[#c5a46d]" /> Digital solutions. Forward thinking.</div>
            <h1 className="max-w-[720px] text-5xl font-semibold leading-[1.08] tracking-[-.045em] sm:text-6xl lg:text-[76px]">Technology that moves <span className="gold-text">business</span> forward.</h1>
            <p className="mt-8 max-w-[540px] text-base leading-8 text-[#aeb8c6]">We build purposeful digital experiences, intelligent software and growth-focused strategies that help ambitious businesses take their next step.</p>
            <div className="mt-10 flex flex-wrap gap-3"><Link href="#contact" className="button-primary">Let's build together <ArrowUpRight size={16} /></Link><Link href="#services" className="button-outline">Explore our services</Link></div>
            <div className="mt-16 flex items-center gap-4 text-xs tracking-[.12em] text-[#aeb8c6]"><span className="h-px w-10 bg-[#c5a46d]" /> BUILT FOR WHAT'S NEXT</div>
          </div>
          <div className="relative mx-auto w-full max-w-[510px]">
            <div className="absolute -inset-8 rounded-full bg-[#c5a46d]/10 blur-3xl" />
            <div className="relative border border-[#c5a46d]/30 bg-[#111d2d]/90 p-5 shadow-2xl shadow-black/40">
              <div className="flex items-center justify-between border-b border-white/10 pb-4"><div className="flex gap-2"><i className="h-2 w-2 rounded-full bg-[#c5a46d]" /><i className="h-2 w-2 rounded-full bg-white/25" /><i className="h-2 w-2 rounded-full bg-white/25" /></div><span className="text-[9px] tracking-[.3em] text-[#8793a4]">AVENOR / DIGITAL SYSTEMS</span></div>
              <div className="grid grid-cols-[1fr_1fr] gap-3 py-5">
                <div className="col-span-2 bg-[#1b2a3d] p-5"><span className="eyebrow">Digital direction</span><div className="mt-4 text-3xl font-semibold">Move with <span className="gold-text">purpose.</span></div><div className="mt-5 h-1 w-full bg-white/10"><div className="h-1 w-[72%] bg-[#c5a46d]" /></div></div>
                <div className="min-h-32 border border-white/10 p-4"><Globe2 className="text-[#c5a46d]" size={21} /><p className="mt-5 text-sm font-medium">Web experiences</p><p className="mt-1 text-[10px] text-[#8793a4]">Designed to connect</p></div>
                <div className="min-h-32 border border-white/10 p-4"><Sparkles className="text-[#c5a46d]" size={21} /><p className="mt-5 text-sm font-medium">Smart solutions</p><p className="mt-1 text-[10px] text-[#8793a4]">Built to perform</p></div>
                <div className="col-span-2 flex items-center justify-between bg-[#c5a46d] p-4 text-[#101827]"><span className="text-xs font-bold tracking-[.12em]">IDEAS INTO IMPACT</span><ArrowUpRight size={19} /></div>
              </div>
              <div className="flex justify-between border-t border-white/10 pt-4 text-[9px] tracking-[.2em] text-[#8793a4]"><span>STRATEGY</span><span>DESIGN</span><span>ENGINEERING</span></div>
            </div>
            <div className="absolute -bottom-7 -left-7 hidden border border-[#c5a46d]/40 bg-[#0a111d] px-5 py-4 sm:block"><ShieldCheck className="mb-2 text-[#c5a46d]" size={20} /><span className="text-[10px] tracking-[.16em] text-[#dce1e8]">BUILT AROUND YOUR GOALS</span></div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#c5a46d]/60 to-transparent" />
      </section>

      <section id="about" className="bg-[#f5f1e8] py-24 text-[#101827]">
        <div className="container grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div><p className="eyebrow">A partner in progress</p><h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-.04em] sm:text-5xl">Good technology should create <span className="text-[#a9854d]">real momentum.</span></h2></div>
          <div className="max-w-2xl lg:pt-8"><p className="text-lg leading-8 text-[#4c5665]">AVENOR Digital is a digital solutions and technology agency focused on helping businesses work smarter, connect better and grow with confidence.</p><p className="mt-5 leading-8 text-[#687181]">From the first idea to ongoing technical partnership, we bring strategy, thoughtful design and reliable engineering together to make technology useful.</p><Link href="#contact" className="mt-8 inline-flex items-center gap-3 text-xs font-bold tracking-[.12em] text-[#8b6c3e]">GET TO KNOW AVENOR <ArrowRight size={16} /></Link></div>
        </div>
      </section>

      <section id="services" className="bg-[#0d1624] py-24">
        <div className="container">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="eyebrow">What we do</p><h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-.04em] sm:text-5xl">Technology for every stage of <span className="gold-text">your next move.</span></h2></div><p className="max-w-sm text-sm leading-7 text-[#9aa5b5]">Connected services. Clear thinking. Solutions shaped around the work your business needs to do.</p></div>
          <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map(({ number, title, description, icon: Icon }) => <article key={number} className="service-card min-h-[250px] p-7"><div className="flex items-center justify-between"><Icon className="text-[#c5a46d]" size={25} strokeWidth={1.5} /><span className="text-xs tracking-[.2em] text-[#738094]">{number}</span></div><h3 className="mt-9 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-[#9aa5b5]">{description}</p></article>)}
            <div className="flex min-h-[250px] flex-col justify-between bg-[#c5a46d] p-7 text-[#101827]"><div><p className="text-xs font-bold tracking-[.2em]">HAVE A PROJECT IN MIND?</p><h3 className="mt-5 text-3xl font-semibold leading-tight">Let's make your next move count.</h3></div><Link href="#contact" className="mt-8 inline-flex items-center gap-3 text-xs font-extrabold tracking-[.12em]">TALK TO OUR TEAM <ArrowUpRight size={17} /></Link></div>
          </div>
        </div>
      </section>

      <section id="work" className="bg-[#101827] py-24">
        <div className="container grid gap-14 lg:grid-cols-2 lg:items-center">
          <div><p className="eyebrow">How we work</p><h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-.04em] sm:text-5xl">A thoughtful process. <span className="gold-text">A better outcome.</span></h2><p className="mt-6 max-w-lg text-sm leading-8 text-[#9aa5b5]">Every engagement starts with understanding your goals. We define the right approach, build with care and stay focused on the outcome that matters to your business.</p></div>
          <div className="space-y-0">{[["01","Discover","Understand your goals, audience and challenges."],["02","Plan","Shape a clear scope and practical direction."],["03","Build","Design, develop and test with attention to detail."],["04","Support","Launch confidently and keep improving."]].map(([n,t,d])=><div key={n} className="flex gap-6 border-b border-white/10 py-6"><span className="gold-text text-sm tracking-widest">{n}</span><div><h3 className="font-semibold">{t}</h3><p className="mt-2 text-sm text-[#9aa5b5]">{d}</p></div></div>)}</div>
        </div>
      </section>

      <section id="locations" className="border-y border-white/10 bg-[#0b1320] py-20">
        <div className="container flex flex-col justify-between gap-8 lg:flex-row lg:items-center"><div><p className="eyebrow">Where we work</p><h2 className="mt-4 text-3xl font-semibold tracking-[-.03em]">Rooted in Nigeria. <span className="gold-text">Open to the world.</span></h2><p className="mt-4 max-w-xl text-sm leading-7 text-[#9aa5b5]">We aim to support businesses across Nigeria and beyond through flexible digital services and remote collaboration.</p></div><div className="grid grid-cols-2 gap-x-10 gap-y-4 sm:grid-cols-3">{locations.map((location)=><div key={location} className="flex items-center gap-2 text-sm text-[#d5dbe3]"><span className="h-1.5 w-1.5 rounded-full bg-[#c5a46d]" />{location}</div>)}</div></div>
      </section>

      <section id="contact" className="bg-[#f5f1e8] py-24 text-[#101827]">
        <div className="container flex flex-col items-start justify-between gap-10 md:flex-row md:items-end"><div className="max-w-2xl"><p className="eyebrow">Your next chapter starts here</p><h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-.045em] sm:text-6xl">Let's build something <span className="text-[#a9854d]">that moves you forward.</span></h2><p className="mt-6 max-w-xl leading-8 text-[#687181]">Tell us what you're working towards. Let's explore how the right technology can help you get there.</p></div><Link href="mailto:hello@avenordigital.com" className="button-primary shrink-0">Start a conversation <ArrowUpRight size={17} /></Link></div>
      </section>

      <footer className="bg-[#090f19] py-12">
        <div className="container"><div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-10 md:flex-row md:items-center"><Link href="/" className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center border border-[#c5a46d]/70 text-xl text-[#c5a46d]">A</span><span><span className="block text-lg tracking-[.2em]">AVENOR</span><span className="text-[9px] tracking-[.45em] text-[#c5a46d]">DIGITAL</span></span></Link><p className="text-sm text-[#9aa5b5]">Technology That Moves Business Forward.</p><Link href="#contact" className="nav-link inline-flex items-center gap-2">Let's talk <ArrowUpRight size={14} /></Link></div><div className="flex flex-col justify-between gap-3 pt-7 text-xs text-[#738094] sm:flex-row"><span>© {new Date().getFullYear()} AVENOR Digital. All rights reserved.</span><span>Designed with purpose. Built for progress.</span></div></div>
      </footer>
    </main>
  );
}