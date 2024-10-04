import React from "react";
import Image from "next/image"; // Jika Anda menggunakan Next.js

const PartnersSection = () => {
  // Array untuk menyimpan path logo partner
  const partnerLogos = [
    "/images/sponsor/PTKAI.png"
  ];

  // Array untuk menyimpan path logo media partner
  const mediaLogos = [
    "/images/medpart/logo commitee info by humas.png",
    "/images/medpart/Logo DIVIA TV.png",
    "/images/medpart/logo hifi.png",
    "/images/medpart/logo hima akuntansi.png",
    "/images/medpart/Logo Himagro.png",
    "/images/medpart/LOGO HIMAKA.png",
    "/images/medpart/Logo HIMATEIN.jpg",
    "/images/medpart/Logo HMJ.png",
    "/images/medpart/logo hmte.PNG",
    "/images/medpart/logo humas.png",
    "/images/medpart/logo mankom.png",
    "/images/medpart/Logo Radio Unpad.png",
    "/images/medpart/logo_bem_faperta.png",
    "/images/medpart/Logo_Himpunan_Geofisika__PEDRA.png"
  ];

  // Kelompokkan logo ke dalam baris-baris sesuai keinginan
  const mediaRows = [
    mediaLogos.slice(0, 5), // 6 logo di baris pertama
    mediaLogos.slice(5, 9), // 5 logo di baris kedua
    mediaLogos.slice(9, 13) // 6 logo di baris ketiga
  ];

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
        <div className="flex flex-col gap-6">
          {mediaRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`flex justify-center items-center gap-4 ${row.length === 5 ? 'gap-5' : ''}`} // Penyesuaian jarak untuk 5 logo
            >
              {row.map((src, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center w-full h-auto sm:w-[150px] sm:h-[150px] md:w-[175px] md:h-[175px]"
                >
                  <Image
                    src={src}
                    alt={`Media Partner Logo ${index + 1}`}
                    layout="responsive" // Membuat gambar responsif
                    width={175} // Memberikan width default untuk responsivitas
                    height={175} // Memberikan height default untuk responsivitas
                    objectFit="contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
