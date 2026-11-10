import Link from "next/link";
import { NAV_LINKS } from "@/components/Header";

const SOCIAL = [
  { href: "https://www.facebook.com/profile.php?id=61555232242818", label: "ফেসবুক" },
  { href: "https://www.youtube.com/channel/UCaf_Cj3LzK7T2YzuBuSqVwA", label: "ইউটিউব" },
  { href: "https://wa.me/8801729165479", label: "হোয়াটসঅ্যাপ" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-name">জামিআ&apos;তুন নূর আস সিরাজিয়া আল ইসলামিয়া</p>
          <p className="footer-muted">Jamiatun Noor As-Sirajia Al-Islamia</p>
          <p className="footer-muted">তেজগাঁও, ঢাকা ১২১৫, বাংলাদেশ · স্থাপিত ২০২০</p>
        </div>

        <nav aria-label="ফুটার মেনু" className="footer-links">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
          <Link href="/onudan">অনুদান</Link>
        </nav>

        <div className="footer-contact">
          <a href="tel:+8801729165479">ফোন / হোয়াটসঅ্যাপ: ০১৭২৯-১৬৫৪৭৯</a>
          <div className="footer-social">
            {SOCIAL.map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
            ))}
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} জামিআ&apos;তুন নূর আস সিরাজিয়া আল ইসলামিয়া। সর্বস্বত্ব সংরক্ষিত।</span>
      </div>
    </footer>
  );
}
