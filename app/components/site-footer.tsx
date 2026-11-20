import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return <footer className="site-footer"><div className="container">
    <div className="footer-main">
      <Link href="/" className="brand" aria-label="AVENOR Digital home"><span className="brand-symbol" aria-hidden="true"><span>A</span><i /></span><span className="brand-type"><strong>AVENOR</strong><small>DIGITAL</small></span></Link>
      <nav aria-label="Footer navigation"><Link href="/about">About</Link><Link href="/services">Services</Link><Link href="/projects">Projects</Link><Link href="/case-studies">Case studies</Link><Link href="/blog">Blog</Link><Link href="/contact">Contact</Link></nav>
      <Link href="/contact" className="footer-contact">Let's talk <ArrowUpRight size={14}/></Link>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} AVENOR Digital. All rights reserved.</span><span>Technology That Moves Business Forward.</span></div>
  </div></footer>;
}
