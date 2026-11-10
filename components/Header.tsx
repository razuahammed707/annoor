import Image from "next/image";
import Link from "next/link";

export const NAV_LINKS = [
  { href: "/porichiti", label: "পরিচিতি" },
  { href: "/laksho-uddesho", label: "লক্ষ্য ও উদ্দেশ্য" },
  { href: "/mulniti", label: "মূলনীতি" },
  { href: "/bibhag", label: "বিভাগসমূহ" },
  { href: "/chhatro-karjokrom", label: "কার্যক্রম" },
  { href: "/jogajog", label: "যোগাযোগ" },
];

export default function Header() {
  return (
    <>
      <a href="#main" className="skip-link">মূল বিষয়বস্তুতে যান</a>
      <header className="site-header">
        <div className="container site-header-inner">
          <Link href="/" className="brand">
            <Image src="/logo/logo.jpeg" alt="" width={48} height={48} priority />
            <span className="brand-text">
              <span className="brand-name">জামিআ&apos;তুন নূর আস সিরাজিয়া আল ইসলামিয়া</span>
              <span className="brand-sub">তেজগাঁও, ঢাকা ১২১৫</span>
            </span>
          </Link>

          <nav className="site-nav" aria-label="প্রধান মেনু">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href}>{l.label}</Link>
            ))}
          </nav>

          <Link href="/onudan" className="btn btn-primary btn-sm header-donate">অনুদান দিন</Link>

          {/* Native disclosure: works without JS, keyboard accessible */}
          <details className="mobile-menu">
            <summary aria-label="মেনু খুলুন">
              <span aria-hidden="true" className="burger" />
            </summary>
            <nav className="mobile-nav" aria-label="মোবাইল মেনু">
              {NAV_LINKS.map((l) => (
                <Link key={l.href} href={l.href}>{l.label}</Link>
              ))}
              <Link href="/onudan" className="btn btn-primary">অনুদান দিন</Link>
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}
