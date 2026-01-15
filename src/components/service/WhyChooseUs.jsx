"use client";

const cards = [
  {
    number: "01",
    title: "Expertise & Experience",
    desc: "Our team of IT professionals possesses extensive expertise and years of experience.",
  },
  {
    number: "02",
    title: "Proactive Approach",
    desc: "We take a proactive approach to IT support, continuously monitoring your systems.",
  },
  {
    number: "03",
    title: "Robust Security Measures",
    desc: "We prioritize the security of your sensitive data and systems with evolving security solutions.",
  },
  {
    number: "04",
    title: "Solutions and Scalability",
    desc: "We understand that every business is unique, and one-size-fits-all solutions may not meet your requirements.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-[#031225] text-white py-10 sm:py-14 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* ===== TOP SECTION ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center mb-8 sm:mb-10 md:mb-14">
          {/* TEXT */}
          <div>
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#FF5100] tracking-wide font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#FF5100]"></span>
              WHY CHOOSE US
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-snug mt-3 sm:mt-4">
              We do things differently <br /> at Reliable Technology Services
            </h2>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center md:justify-end">
            <div
              className="
                w-full max-w-[520px]
                h-[180px] sm:h-[220px] md:h-[270px]
                rounded-2xl
                shadow-lg
                bg-cover bg-center
              "
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop')",
              }}
            />
          </div>
        </div>

        {/* ===== CARD GRID ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
          {cards.map((c, i) => (
            <div
              key={i}
              className="
                p-5 sm:p-6 rounded-2xl 
                bg-linear-to-br from-[#0d1f3a] to-[#142c54]
                border border-white/10
                shadow-[0_0_25px_rgba(0,0,0,0.3)]
                hover:scale-[1.02] transition-all duration-300
              "
            >
              <p className="text-[#FF5100] text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">
                {c.number}
              </p>

              <h3 className="font-bold text-base sm:text-lg mb-2">{c.title}</h3>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {c.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ===== BOTTOM TEXT ===== */}
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-center max-w-4xl mx-auto px-2">
          We collaborate with innovative companies across various industries,
          ranging from 20 to 1,000 seats, who highly value technology and
          prioritize strong security measures.
        </p>
      </div>
    </section>
  );
}
