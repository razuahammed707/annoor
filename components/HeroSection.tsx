import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="hero pattern-bg">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="eyebrow">স্থাপিত ২০২০ · তেজগাঁও, ঢাকা</p>
          <h1>জামিআ&apos;তুন নূর আস সিরাজিয়া আল ইসলামিয়া</h1>
          <Image
            className="hero-calligraphy"
            src="/logo/caligraphy.png"
            alt="جامعة النور السراجية الإسلامية تيجغاؤن - ١٢١٥"
            lang="ar"
            width={4214}
            height={992}
            priority
          />
          <p className="lead">
            কুরআন, সুন্নাহ এবং সমকালীন প্রয়োজনীয় শিক্ষার সমন্বয়ে আগামী দিনের দক্ষ ও
            আদর্শবান আলেম গড়ে তোলার একটি দ্বীনি শিক্ষা প্রতিষ্ঠান।
          </p>
          <div className="hero-actions">
            <Link href="/onudan" className="btn btn-primary">অনুদান দিন</Link>
            <Link href="/porichiti" className="btn btn-ghost">আমাদের পরিচিতি</Link>
          </div>
        </div>

        <figure className="hero-figure">
          <Image
            src="/hero/image.png"
            alt="একটি কনফারেন্সে জামিআর ছাত্র ও শিক্ষক"
            width={2048}
            height={922}
            sizes="(max-width: 900px) 100vw, 50vw"
            priority
          />
        </figure>
      </div>
    </section>
  );
}
