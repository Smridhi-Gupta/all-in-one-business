import { Phone, Mail, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">

      {/* ================= LEFT CONTENT ================= */}
      <div>
        <h1 className="text-4xl font-bold leading-tight mb-6">
          Embtel Solutions Digital <br /> Marketing Agency
        </h1>

        <p className="text-sm text-gray-600 mb-8 max-w-md">
          Embtel Solutions is your one-stop destination for comprehensive
          solutions that drive business growth. We empower you with innovative
          technology, security, and digital expertise to ensure success in
          today’s competitive landscape.
        </p>

        {/* CONTACT DETAILS */}
        <div className="space-y-6 text-sm text-gray-800">

          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-[#FF5100]" />
            <span>(510) 962-7900</span>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-[#FF5100]" />
            <span>info@embtelsolutions.com</span>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#FF5100]" />
            <span>
              39159, Paseo Padre Pkwy, Suite #119, Fremont, CA 94538
            </span>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#FF5100]" />
            <span>
              SCO-12, A-Block, 2nd Floor, CCC, VIP Road, Zirakpur, Punjab,
              India - 140603
            </span>
          </div>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex gap-4 mt-8">
          <div className="w-8 h-8 flex items-center justify-center border rounded-full cursor-pointer">
            X
          </div>
          <div className="w-8 h-8 flex items-center justify-center border rounded-full cursor-pointer">
            f
          </div>
          <div className="w-8 h-8 flex items-center justify-center border rounded-full cursor-pointer">
            in
          </div>
        </div>
      </div>

      {/* ================= RIGHT FORM (REUSED COMPONENT) ================= */}
      <div>
        <ContactForm />
      </div>

    </section>
  );
};

export default Contact;
