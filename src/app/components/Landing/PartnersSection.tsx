import React from "react";
import Image from "next/image";

const PartnersSection = () => {
  const partnerLogos = [
    "/images/sponsor/PTKAI.png",
    "/images/sponsor/paragon.png"
  ];

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
    "/images/medpart/Logo_Himpunan_Geofisika__PEDRA.png",
    "/images/medpart/Badan-Eksekutif-Mahasiswa-Kema-FK-Unpad2.png",
    "/images/medpart/BEM-FISIP-Unpad.png",
    "/images/medpart/BEM-UNPAD-Photoroom.png",
    "/images/medpart/info_jatinangor.PNG",
    "/images/medpart/Kelautan.png",
    "/images/medpart/LOGO-BEM-KEMA-FEB-UNPAD.png",
    "/images/medpart/logo-bi.png",
    "/images/medpart/Logo-GENERA.png",
    "/images/medpart/LOGO-HIMA-ILKOM-UNPAD.png",
    "/images/medpart/Logo-Metro-TV.png",
    "/images/medpart/LOGO-MPM.png"
  ];

  // Organize logos into responsive grid layouts
  const chunk = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  // Dynamic chunking based on screen size using CSS grid instead of manual rows
  const mediaPartners = chunk(mediaLogos, 5); // Default chunk size, CSS grid will handle responsive layout

  return (
    <section className="w-full min-h-screen px-4 md:px-8 lg:px-20 py-8 md:py-12">
      <div className="bg-gradient-to-tr from-[#023662] to-[#004B8B] rounded-lg md:rounded-[20px] p-6 md:p-10">
        {/* Sponsors Section */}
        <div className="mb-12 md:mb-16">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl text-white text-center mb-8">
            PARTNERSHIP WITH
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8 justify-items-center">
            {partnerLogos.map((src, index) => (
              <div
                key={index}
                className="relative w-full aspect-[3/2] max-w-[200px] md:max-w-[300px]"
              >
                <Image
                  src={src}
                  alt={`Partner ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 150px, (max-width: 1200px) 200px, 300px"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Media Partners Section */}
        <div>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl text-white text-center mb-8">
            MEDIA PARTNERS
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
            {mediaLogos.map((src, index) => (
              <div
                key={index}
                className="relative w-full aspect-square max-w-[120px] md:max-w-[150px] lg:max-w-[175px] mx-auto"
              >
                <Image
                  src={src}
                  alt={`Media Partner ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 120px, (max-width: 768px) 150px, 175px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;