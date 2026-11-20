import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function PageIntro({ eyebrow, title, accent, description }: { eyebrow: string; title: string; accent?: string; description: string }) {
  return <section className="page-intro"><div className="container page-intro-inner"><p className="eyebrow"><span/>{eyebrow}</p><h1>{title} {accent && <em>{accent}</em>}</h1><p className="page-intro-description">{description}</p><Link className="button button-gold" href="/contact">Start a conversation <ArrowUpRight size={16}/></Link></div></section>;
}
