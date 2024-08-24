"use client"

import EventsSection from "./components/Landing/EventsSection";
import HeroSection from "./components/Landing/HeroSection";
import PartnersSection from "./components/Landing/PartnersSection";
import TrailerSection from "./components/Landing/TrailerSection";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-transparent">
      <div className="relative w-full flex flex-col gap-20">
        <svg className="absolute bottom-0 w-full h-auto"viewBox="0 0 1440 3400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_778_2944)">
          <path d="M1243.67 856.408C1113.53 935.218 1202.38 1219.32 1263.07 1351.51C1460.52 1572.16 1471.69 1436.36 1787.21 1276.94C2102.73 1117.52 1501.39 1281.2 1573.84 734.259C1646.28 187.318 1406.33 757.895 1243.67 856.408Z" fill="#023662"/>
          </g>
          <g filter="url(#filter1_f_778_2944)">
          <path d="M252.965 1622.4C278.325 1495.95 275.975 1288.63 275.975 1288.63C275.975 1288.63 235.868 615.493 157.071 939.482C58.5747 1344.47 90.7013 1313.86 -173.07 1108.28C-436.841 902.71 -153.502 1628.8 11.6919 1815.27C143.847 1964.44 227.605 1748.84 252.965 1622.4Z" fill="#F4AE09"/>
          </g>
          <g filter="url(#filter2_f_778_2944)">
          <path d="M475.107 1023.75C421.288 550.665 419.964 926.947 204.245 1072.58C259.094 1097.55 326.177 1204.23 155.719 1431.18C-9.97818 1651.79 255.64 2202.12 364.817 2052.9C473.995 1903.69 453.433 1906.94 561.13 1992.66C906.54 2267.59 483.714 1553.2 601.133 1492.19C718.552 1431.18 490.548 1159.48 475.107 1023.75Z" fill="#F8C13D"/>
          </g>
          <g filter="url(#filter3_f_778_2944)">
          <path d="M1020.87 1485.33C945.058 1565.56 1049.93 1616.09 1082.35 1685.91C1223.18 1989.25 1485.19 1725.65 1679.67 1685.91C1922.77 1636.22 1715.77 1212.07 1578.71 1239.67C1441.64 1267.28 1224.49 1298.56 1269.05 1029.9C1313.61 761.238 1001.12 729.956 875.907 779.64C750.689 829.324 931.747 1130.19 1082.35 1239.67C1232.95 1349.16 1115.63 1385.05 1020.87 1485.33Z" fill="#004B8B"/>
          </g>
          <g filter="url(#filter4_f_778_2944)">
          <path d="M-149.65 1999.12C-362.383 1964.85 -298.971 2254.03 -175.118 2457.61C-51.2659 2661.2 146.977 2312.89 412.893 2916.1C678.808 3519.32 525.251 3056.2 950.717 2361.51C1376.18 1666.83 450.346 2404.35 206.902 2090.59C-36.5425 1776.82 116.265 2041.96 -149.65 1999.12Z" fill="#1D7901"/>
          </g>
          <g filter="url(#filter5_f_778_2944)">
          <path d="M1396.77 2209.33C1727.67 2106.04 1671.65 2475.55 1601.3 2418.31C1530.95 2361.08 1296.71 2565.27 1576.55 2796.35C1926.34 3085.19 842.438 2776.38 570.158 2685.86C352.335 2613.45 529.121 2259.91 672.426 2309.16C815.731 2358.41 1065.86 2312.62 1396.77 2209.33Z" fill="#249B00"/>
          </g>
          <defs>
          <filter id="filter0_f_778_2944" x="676.615" y="0.372559" width="1702.8" height="1966.54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_778_2944"/>
          </filter>
          <filter id="filter1_f_778_2944" x="-780.752" y="351.309" width="1556.78" height="2014.61" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_778_2944"/>
          </filter>
          <filter id="filter2_f_778_2944" x="-397.32" y="292.66" width="1597.23" height="2285.54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_778_2944"/>
          </filter>
          <filter id="filter3_f_778_2944" x="334" y="260" width="1958" height="2070" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_778_2944"/>
          </filter>
          <filter id="filter4_f_778_2944" x="-789" y="1435" width="2350" height="2260" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_778_2944"/>
          </filter>
          <filter id="filter5_f_778_2944" x="-32" y="1691" width="2187" height="1726" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_778_2944"/>
          </filter>
          </defs>
        </svg>
        <HeroSection/>
        <TrailerSection/>
        <EventsSection/>
        <PartnersSection/>
      </div>
    </main>
  );
}
