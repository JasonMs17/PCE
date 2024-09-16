import React from "react";
import Image from "next/image"; // Jika Anda menggunakan Next.js

const PartnersSection = () => {
  // Array untuk menyimpan path logo partner
  const partnerLogos = [
    "images/sponsor/image 217.svg"
  ];

  // Array untuk menyimpan path logo media partner
//   const mediaLogos = [
//     // Tambah lebih banyak logo sesuai kebutuhan
//   ];

  return (
    <section className="w-full h-full px-5 lg:px-20 relative text-white">
      <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 py-6 sm:py-8 md:py-10 w-full h-fit bg-gradient-to-tr from-[#023662] to-[#004B8B] mb-10 sm:mb-16 md:mb-20 rounded-lg md:rounded-[20px]">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-white text-center">
          PARTNERSHIP WITH
        </h1>
        <div className="flex flex-wrap justify-center items-center md:gap-x-8 md:gap-y-4 sm:gap-x-4 sm:gap-y-2 gap-x-2 gap-y-1">
          {partnerLogos.map((src, index) => (
            <div
              className="w-[20%] h-[100px] items-center relative"
              key={index}
            >
              <Image
                src={src}
                layout="fill"
                objectFit="contain"
                alt={`logo${index}`}
              />
            </div>
          ))}
        </div>
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-white text-center">
          MEDIA PARTNERS
        </h1>
        {/* <div className="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 sm:gap-7 md:gap-10 text-center">
          {mediaLogos.map((src, index) => (
            <div className="flex justify-center items-center w-full max-w-[100px]" key={index}>
              <Image
                src={src}
                alt={`Media Partner Logo ${index + 1}`}
                width={100}
                height={100}
                objectFit="contain"
                layout="responsive" // Membuat gambar responsif
              />
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default PartnersSection;
