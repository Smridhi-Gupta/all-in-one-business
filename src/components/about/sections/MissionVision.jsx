import Link from "next/link";

const MissionVision = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
      {/* LEFT IMAGE */}
      <div
        className="
          w-full 
          h-[260px] sm:h-[360px] md:h-[520px] lg:h-[620px]
          rounded-tl-[40px] sm:rounded-tl-[60px] md:rounded-tl-[80px]
          rounded-br-[40px] sm:rounded-br-[60px] md:rounded-br-[80px]
          bg-cover bg-center
        "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop')",
        }}
      ></div>

      {/* RIGHT CONTENT */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
          Our Mission and Vision
        </h2>

        <p className="text-sm sm:text-base leading-relaxed text-gray-700 mb-4">
          Embtel Solutions dedicates itself to enabling businesses to use
          advanced digital solutions that advance their virtual exposure while
          stimulating business expansion. Our mission is to provide innovative
          websites with excellent user experiences that enable successful
          brand-audience connections. We offer superior web design solutions and
          development and digital marketing services that match individual
          client business needs to achieve enduring achievements. Our company
          makes customer satisfaction the central focus of all operations
          because we promise specialised assistance along with expert advice at
          every stage of the process.
        </p>

        <p className="text-sm sm:text-base leading-relaxed text-gray-700 mb-6 sm:mb-8">
          Our company strives to become an industry-leading digital solutions
          company known for its superior quality, innovative creativity, and
          dependable performance. Our mission is to assist organisations of
          different sizes through modern technologies and proven industry
          practices for achieving digital excellence. Our operation aims to
          develop enduring client relationships while supporting the lasting
          expansion of our customers.
        </p>

        <Link
          href="/service"
          className="inline-block bg-[#FF5100] text-white font-semibold 
            px-6 sm:px-8 py-2.5 sm:py-3 rounded-md 
            hover:bg-[#e44900] transition"
        >
          See What We Offer!
        </Link>
      </div>
    </section>
  );
};

export default MissionVision;
