"use client";
import Link from "next/link";

export default function AccomplishmentsSection() {
  return (
    <section className="bg-[#031225] py-14">
      <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl font-bold text-white leading-snug">
            A Recap of Our <br /> Accomplishments
          </h2>

          <p className="text-white mt-6 leading-relaxed text-[14px] pr-6">
            Embtel Solutions leads innovation through modern technology, which
            provides advanced digital solutions to drive business success while
            advancing IT strategies toward a smarter connected future.
          </p>

          {/* CTA */}
          <Link
            href="/contact"
            className="
              inline-block mt-10 bg-[#FF5100] text-white font-semibold rounded-md
              hover:bg-white hover:text-black transition px-8 py-[18px]
            "
          >
            Schedule a Call
          </Link>
        </div>

        {/* RIGHT SIDE — STATS STACK */}
        <div className="space-y-6">
          {/* PROJECTS */}
          <div className="flex items-center bg-[#e5e7eb]/70 rounded-xl overflow-hidden">
            <div className="w-24 h-24">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=200&auto=format&fit=crop"
                alt="Projects Completed"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <div className="flex-1 px-6 py-4 flex justify-between items-center">
              <span className="text-lg font-medium text-[#031225]">
                Projects Completed
              </span>
              <span className="text-xl font-bold text-[#031225]">250 +</span>
            </div>
          </div>

          {/* HAPPY CLIENTS */}
          <div className="flex items-center bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="w-24 h-24">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=200&auto=format&fit=crop"
                alt="Happy Clients"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <div className="flex-1 px-6 py-4 flex justify-between items-center">
              <span className="text-lg font-medium text-[#031225]">
                Happy Clients
              </span>
              <span className="text-xl font-bold text-[#031225]">200 +</span>
            </div>
          </div>

          {/* EXPERIENCE */}
          <div className="flex items-center bg-[#e5e7eb]/70 rounded-xl overflow-hidden">
            <div className="w-24 h-24">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=200&auto=format&fit=crop"
                alt="Years of Experience"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <div className="flex-1 px-6 py-4 flex justify-between items-center">
              <span className="text-lg font-medium text-[#031225]">
                Years of Experience
              </span>
              <span className="text-xl font-bold text-[#031225]">10 +</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
