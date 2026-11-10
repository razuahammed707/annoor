import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OnudanForm from "@/components/OnudanForm";

export const metadata = {
  title: "অনুদান | জামিআ'তুন নূর আস সিরাজিয়া আল ইসলামিয়া",
  description:
    "বিকাশ বা ব্যাংকের মাধ্যমে জামিআ'তুন নূর আস সিরাজিয়া আল ইসলামিয়ায় অনুদান দিন।",
};

export default function OnudanPage() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="page-hero pattern-bg">
          <div className="container narrow">
            <p className="eyebrow">অনুদান</p>
            <h1>অনুদান দিয়ে দ্বীনের খেদমতে শরীক হোন</h1>
            <p className="lead">
              তিনটি সহজ ধাপ: পরিমাণ বেছে নিন, বিকাশ বা ব্যাংকে টাকা পাঠান, তারপর ট্রানজেকশন আইডি
              হোয়াটসঅ্যাপে জানিয়ে দিন।
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container donate-layout">
            <OnudanForm />

            <aside className="donate-aside">
              <h2>আপনার অনুদান কোথায় যায়</h2>
              <p>
                জামিআর মূলনীতি অনুযায়ী, শর্তহীন দানই এই দ্বীনি প্রতিষ্ঠানের উন্নতি ও টিকে থাকার
                প্রধান সহায়। আপনার অনুদান সহায়তা করে:
              </p>
              <ul className="check-list">
                <li>ছাত্রভর্তি ও ছাত্রদের খাদ্যের যোগান</li>
                <li>Pre-School থেকে কিতাব বিভাগ পর্যন্ত পাঁচটি বিভাগের শিক্ষা কার্যক্রম</li>
                <li className="placeholder">[অন্যান্য খাত যোগ করুন — যেমন শিক্ষক ভাতা, আবাসন, ভবন]</li>
              </ul>

              <h3>স্বচ্ছতা</h3>
              <p>প্রতিটি অনুদান ট্রানজেকশন আইডি দিয়ে যাচাই করা হয়।</p>
              <p className="placeholder">[বার্ষিক আয়-ব্যয়ের হিসাব বা রশিদ প্রদানের নিয়ম এখানে যোগ করুন]</p>

              <h3>প্রশ্ন আছে?</h3>
              <p>
                ফোন / হোয়াটসঅ্যাপ: <a href="tel:+8801729165479" className="text-link">০১৭২৯-১৬৫৪৭৯</a>
              </p>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
