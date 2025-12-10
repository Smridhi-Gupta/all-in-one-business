import Link from "next/link";

const MissionVision = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

      {/* LEFT GREY DIV (Instead of Image) */}
      <div className="w-full h-[620px] bg-gray-300 rounded-tl-[80px] rounded-br-[80px]"></div>

      {/* RIGHT CONTENT */}
      <div>
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-6">
          Our Mission and Vision
        </h2>

        {/* Paragraphs */}
        <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-4">
          Embtel Solutions dedicates itself to enabling businesses to use advanced digital
          solutions that advance their virtual exposure while stimulating business expansion.
          Our mission is to provide innovative websites with excellent user experiences that
          enable successful brand-audience connections. We offer superior web design solutions
          and development and digital marketing services that match individual client business
          needs to achieve enduring achievements. Our company makes customer satisfaction the
          central focus of all operations because we promise specialised assistance along with
          expert advice at every stage of the process.
        </p>

        <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-8">
          Our company strives to become an industry-leading digital solutions company known
          for its superior quality, innovative creativity, and dependable performance. Our
          mission is to assist organisations of different sizes through modern technologies and
          proven industry practices for achieving digital excellence. Our operation aims to
          develop enduring client relationships while supporting the lasting expansion of our
          customers.
        </p>

        {/* BUTTON */}
        <Link
          href="/service"
          className="inline-block bg-[#FF5100] text-white font-semibold px-8 py-3 rounded-md hover:bg-[#e44900] transition"
        >
          See What We Offer!
        </Link>
      </div>
    </section>
  );
};

export default MissionVision;
