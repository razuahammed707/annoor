// Public reels from the Facebook page. Add/remove IDs here (from facebook.com/reel/<ID>).
const REEL_IDS = [
  "26581421654892161",
  "903070005458672",
  "1835261833861497",
  "820203681067360",
  "830051266569692",
  "1494221088537017",
];

// Facebook lays the player out for this exact size; the iframe must match it or the video sits off-center.
const W = 267;
const H = 476;

const embedSrc = (id: string) =>
  `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
    `https://www.facebook.com/reel/${id}/`
  )}&show_text=false&width=${W}&height=${H}`;

export default function ReelsSection() {
  return (
    <section className="video-section" id="reels">
      <div className="container">
        <div className="section-title-alt">ভিডিও</div>
        <div className="reel-grid">
          {REEL_IDS.map((id) => (
            <iframe
              key={id}
              src={embedSrc(id)}
              title="ফেসবুক রিল"
              className="reel-frame"
              width={W}
              height={H}
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            />
          ))}
        </div>
      </div>
    </section>
  );
}
