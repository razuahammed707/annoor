import Link from "next/link";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import ReelsSection from "@/components/ReelsSection";
import Footer from "@/components/Footer";

// Summaries of /laksho-uddesho — keep in sync with that page.
const PILLARS = [
  {
    title: "সুন্নাহভিত্তিক শিক্ষা",
    text: "রাসূল (সা.)-এর নীতি ও আদর্শের উপর ভিত্তি করে কুরআন, হাদীস ও আকাঈদের শিক্ষা।",
  },
  {
    title: "চরিত্র ও আত্মশুদ্ধি",
    text: "মেধার বিকাশের পাশাপাশি নৈতিক চরিত্র গঠন ও আধ্যাত্মিক পরিবেশে বেড়ে ওঠা।",
  },
  {
    title: "বহুভাষিক দক্ষতা",
    text: "আরবীর পাশাপাশি ইংরেজি শিক্ষা, যাতে ছাত্ররা দেশ-বিদেশে দ্বীনি খিদমতে অংশ নিতে পারে।",
  },
];

// Summaries of /bibhag — keep in sync with that page.
const DEPARTMENTS = [
  { title: "Pre-School & Care", text: "আলিফ-বা-তা, অক্ষর চেনা, ছোট দোআ, সূরা ও আদব-কায়দা।" },
  { title: "আদর্শ নূরানী বিভাগ", text: "নূরানী পদ্ধতিতে তাজবীদসহ কুরআন এবং প্রাথমিক আকীদা ও ফিকহ।" },
  { title: "নাযেরা বিভাগ", text: "সাবলীল ও শুদ্ধভাবে কুরআন তিলাওয়াতের প্রশিক্ষণ।" },
  { title: "হিফজুল কুরআন", text: "নিবিড় তত্ত্বাবধানে পূর্ণকালীন হিফজ কোর্স।" },
  { title: "কিতাব বিভাগ", text: "প্রাথমিক কিতাব থেকে দাওরায়ে হাদীস পর্যন্ত পাঠ্যক্রম।" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <HeroSection />

        <section className="section">
          <div className="container narrow center">
            <p className="eyebrow">আমাদের লক্ষ্য</p>
            <h2>শুধু একটি মাদরাসা নয়, একটি আধ্যাত্মিক সংস্কার কেন্দ্র</h2>
            <p className="lead">
              ছাত্রদের মেধা ও যোগ্যতার সঠিক বিকাশের পাশাপাশি নৈতিক চরিত্র গঠনে আমরা সদা সচেষ্ট।
              দ্বীনের সঠিক শিক্ষা প্রচারের মাধ্যমে দেশ ও জাতির সেবায় একনিষ্ঠ একদল যোগ্য কারিগর
              গড়ে তোলাই আমাদের প্রধান লক্ষ্য।
            </p>
          </div>
          <div className="container card-grid cols-3">
            {PILLARS.map((p) => (
              <article key={p.title} className="card">
                <span className="star" aria-hidden="true" />
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
          <p className="center">
            <Link href="/laksho-uddesho" className="text-link">লক্ষ্য ও উদ্দেশ্য বিস্তারিত পড়ুন →</Link>
          </p>
        </section>

        <section className="section section-tint">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">বিভাগসমূহ</p>
              <h2>শিশু থেকে দাওরায়ে হাদীস পর্যন্ত</h2>
            </div>
            <ol className="dept-list">
              {DEPARTMENTS.map((d) => (
                <li key={d.title}>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </li>
              ))}
            </ol>
            <p>
              <Link href="/bibhag" className="text-link">সব বিভাগ দেখুন →</Link>
            </p>
          </div>
        </section>

        <GallerySection />
        <ReelsSection />

        <section className="donate-band pattern-bg-dark">
          <div className="container narrow center">
            <h2>আপনার দানে চলে এই প্রতিষ্ঠান</h2>
            <p>
              জামিআর মূলনীতি অনুযায়ী, শুভানুধ্যায়ীদের শর্তহীন দানই এই দ্বীনি প্রতিষ্ঠানের
              উন্নতি ও টিকে থাকার প্রধান সহায়।
            </p>
            <Link href="/onudan" className="btn btn-light">অনুদান দিন</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
