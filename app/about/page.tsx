import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Compass, Lightbulb, ShieldCheck, Users } from "lucide-react";
import { PageLayout } from "../components/page-layout";
import { PageIntro } from "../components/page-intro";

export const metadata: Metadata = { title: "About AVENOR Digital", description: "Learn about AVENOR Digital, our approach, values and commitment to purposeful technology." };

const values = [
  { icon: Lightbulb, title: "Thoughtful innovation", text: "We choose technology with purpose, focusing on solutions that address real business needs." },
  { icon: ShieldCheck, title: "Quality and integrity", text: "We value clear expectations, careful work and honest communication throughout each engagement." },
  { icon: Users, title: "Client partnership", text: "We listen, collaborate and keep the people using the solution at the centre of decisions." },
  { icon: Compass, title: "Continuous progress", text: "We build with the future in mind and support practical improvement beyond launch." },
];

export default function AboutPage() {
  return <PageLayout><PageIntro eyebrow="About AVENOR" title="Good technology should create" accent="real momentum." description="AVENOR Digital is a digital solutions and technology agency focused on helping businesses work smarter, connect better and grow with confidence."/>
    <section className="content-section"><div className="container split-content"><div><p className="eyebrow"><span/> Our perspective</p><h2>Technology is most valuable when it moves people and businesses forward.</h2></div><div className="prose"><p>From the first idea to ongoing technical partnership, our approach brings strategy, thoughtful design and dependable engineering together. We aim to make technology useful, understandable and aligned with the goals it is meant to serve.</p><p>We work across websites, custom software, search visibility and technology consulting. Each engagement begins with understanding the challenge before recommending a solution.</p><Link className="text-link" href="/services">Explore our services <ArrowUpRight size={15}/></Link></div></div></section>
    <section className="content-section soft-section"><div className="container"><div className="section-title"><p className="eyebrow"><span/> What guides us</p><h2>Principles behind the work.</h2></div><div className="value-grid">{values.map(({icon:Icon,title,text})=><article className="detail-card" key={title}><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="content-section"><div className="container split-content"><div><p className="eyebrow"><span/> Our ambition</p><h2>Rooted in Nigeria. Open to working with the world.</h2></div><div className="prose"><p>We are building an agency that can support organisations locally and internationally through flexible collaboration, responsible delivery and long-term thinking.</p><p>As the company grows, our focus remains the same: understand the need, do careful work and build relationships based on trust.</p><Link className="button button-gold" href="/contact">Talk about your goals <ArrowUpRight size={15}/></Link></div></div></section>
  </PageLayout>;
}
