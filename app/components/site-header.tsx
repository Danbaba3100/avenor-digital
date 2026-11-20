import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";

const links = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Projects", "/projects"],
  ["Blog", "/blog"],
  ["Locations", "/locations"],
];

export function SiteHeader() {
  return <header className="site-header"><div className="container header-inner">
    <Link href="/" className="brand" aria-label="AVENOR Digital home"><span className="brand-symbol" aria-hidden="true"><span>A</span><i /></span><span className="brand-type"><strong>AVENOR</strong><small>DIGITAL</small></span></Link>
    <nav className="desktop-nav" aria-label="Main navigation">{links.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav>
    <Link href="/contact" className="button button-gold header-cta">Start a project <ArrowUpRight size={15}/></Link>
    <details className="mobile-menu"><summary aria-label="Open navigation"><Menu size={23}/></summary><nav aria-label="Mobile navigation">{links.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}<Link href="/contact">Contact</Link></nav></details>
  </div></header>;
}
