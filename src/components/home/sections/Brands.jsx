import React from "react";

const Brands = () => {
  // Dummy brand names
  const brands = ["Apple", "Google", "Microsoft", "Amazon", "Facebook"];

  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Trusted by Leading Brands</h2>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="w-52 h-16 flex items-center justify-center bg-white shadow-md rounded-lg p-4 text-lg font-semibold"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
