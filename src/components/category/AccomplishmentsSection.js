"use client";
import Image from "next/image";

export default function AccomplishmentsSection() {
  return (
    <section className="bg-[#031225] py-14">
      <div className="max-w-7xl mx-auto px-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
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

          <button
            className="
            mt-10 bg-[#FF5100] text-white font-semibold rounded-md
            hover:bg-white hover:text-black transition px-8 py-[18px]
          "
          >
            Schedule a Call
          </button>
        </div>

        {/* RIGHT SIDE — STATS STACK */}
        <div className="space-y-6">
          {/* TOP GREY CARD */}
          <div className="flex items-center bg-[#e5e7eb]/70 rounded-xl overflow-hidden">
            <div className="w-20 h-20">
              <Image
                src="/images/projects.png" // CHANGE WITH REAL IMAGE
                alt=""
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="flex-1 px-6 py-4 flex justify-between items-center">
              <span className="text-lg font-medium text-[#031225]">
                Projects <br /> Completed
              </span>
              <span className="text-xl font-bold text-[#031225]">250 +</span>
            </div>
          </div>

          {/* MIDDLE WHITE CARD */}
          <div className="flex items-center bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="w-20 h-20">
              <Image
                src="/images/happy.png" // CHANGE IMAGE
                alt=""
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="flex-1 px-6 py-4 flex justify-between items-center">
              <span className="text-lg font-medium text-[#031225]">
                Happy <br /> Clients
              </span>
              <span className="text-xl font-bold text-[#031225]">200 +</span>
            </div>
          </div>

          {/* BOTTOM GREY CARD */}
          <div className="flex items-center bg-[#e5e7eb]/70 rounded-xl overflow-hidden">
            <div className="w-20 h-20">
              <Image
                src="/images/years.png" // CHANGE
                alt=""
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="flex-1 px-6 py-4 flex justify-between items-center">
              <span className="text-lg font-medium text-[#031225]">
                Years of <br /> Experience
              </span>
              <span className="text-xl font-bold text-[#031225]">10 +</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
