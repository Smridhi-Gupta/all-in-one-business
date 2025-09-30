import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#031225] text-white py-28 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-snug text-[#FF5100]">
            Discover how the world <br /> works with ServiceNow
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-lg">
            We help organizations of every size, in every industry, put AI to
            work for people.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#"
              className="bg-[#FF5100] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#e14a00] transition"
            >
              Get Started
            </Link>
            <Link
              href="#"
              className="border border-[#FF5100] text-[#FF5100] px-6 py-3 rounded-full hover:bg-[#FF5100] hover:text-white transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Grey Placeholder */}
        <div className="flex justify-center md:justify-end">
          <div className="w-100 md:w-[36rem] h-96 md:h-[32rem] bg-gray-700 rounded-2xl flex items-center justify-center"></div>
        </div>
      </div>
    </section>
  );
}
