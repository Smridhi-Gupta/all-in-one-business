"use client";
import Link from "next/link";

export default function AccomplishmentsSection() {
  return (
    <section className="bg-[#031225] py-12 sm:py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug">
            A Recap of Our <br /> Accomplishments
          </h2>

          <p className="text-gray-200 mt-4 sm:mt-6 leading-relaxed text-sm sm:text-base max-w-lg">
            Embtel Solutions leads innovation through modern technology, which
            provides advanced digital solutions to drive business success while
            advancing IT strategies toward a smarter connected future.
          </p>

          {/* CTA */}
          <Link
            href="/contact"
            className="
              inline-block mt-6 sm:mt-8 bg-[#FF5100] text-white font-semibold rounded-md
              hover:bg-white hover:text-black transition 
              px-6 sm:px-8 py-3 sm:py-4
            "
          >
            Schedule a Call
          </Link>
        </div>

        {/* RIGHT SIDE — STATS STACK */}
        <div className="space-y-4 sm:space-y-6">
          {/* CARD */}
          {[
            {
              title: "Projects Completed",
              value: "250 +",
              img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=200&auto=format&fit=crop",
              bg: "bg-gray-200/80",
            },
            {
              title: "Happy Clients",
              value: "200 +",
              img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=200&auto=format&fit=crop",
              bg: "bg-white shadow-lg",
            },
            {
              title: "Years of Experience",
              value: "10 +",
              img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=200&auto=format&fit=crop",
              bg: "bg-gray-200/80",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`flex items-center rounded-xl overflow-hidden ${item.bg}`}
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
                <span className="text-sm sm:text-base font-medium text-[#031225]">
                  {item.title}
                </span>
                <span className="text-lg sm:text-xl font-bold text-[#031225]">
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
