import { Phone, Mail, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
      {/* ================= LEFT CONTENT ================= */}
      <div>
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
          Embtel Solutions Digital <br /> Marketing Agency
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-600 mb-8 max-w-md leading-relaxed">
          Embtel Solutions is your one-stop destination for comprehensive
          solutions that drive business growth. We empower you with innovative
          technology, security, and digital expertise to ensure success in
          today’s competitive landscape.
        </p>

        {/* CONTACT DETAILS */}
        <div className="space-y-6 text-sm sm:text-base text-gray-800">
          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-[#FF5100] mt-0.5" />
            <span>(510) 962-7900</span>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-[#FF5100] mt-0.5" />
            <span>info@embtelsolutions.com</span>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#FF5100] mt-0.5" />
            <span>39159, Paseo Padre Pkwy, Suite #119, Fremont, CA 94538</span>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#FF5100] mt-0.5" />
            <span>
              SCO-12, A-Block, 2nd Floor, CCC, VIP Road, Zirakpur, Punjab, India
              - 140603
            </span>
          </div>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex gap-3 mt-10">
          {["X", "f", "in"].map((icon, i) => (
            <div
              key={i}
              className="w-9 h-9 flex items-center justify-center border rounded-full cursor-pointer 
              hover:bg-[#FF5100] hover:text-white transition-all duration-300"
            >
              {icon}
            </div>
          ))}
        </div>
      </div>

      {/* ================= RIGHT FORM ================= */}
      <div className="w-full">
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
