import { useState } from "react";

const images = [
  "/images/events/Mini-talkshow.svg",
  "/images/events/Mini-talkshow.svg",
  "/images/events/Mini-talkshow.svg",
  "/images/events/Mini-talkshow.svg",
  "/images/events/Mini-talkshow.svg",
];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const goToIndex = (index: number) => {
      setCurrentIndex(index);
    };
  
    const getPosition = (index: number) => {
      const totalImages = images.length;
      const offset = (index - currentIndex + totalImages) % totalImages;
  
      if (offset === totalImages - 1) {
        return -1;
      } else if (offset === 1) {
        return 1;
      } else if (offset === 0) {
        return 0;
      } else {
        return null;
      }
    };
  
    return (
      <div className="relative w-full h-64 overflow-hidden flex justify-center items-center my-20">
        <div className="relative h-full aspect-video flex justify-center items-center">
          {images.map((image, index) => {
            const position = getPosition(index);
            const isCenter = position === 0;
            const zIndex = isCenter ? 30 : 10;

            return (
              <div
                key={index}
                className={`absolute h-full aspect-video transition-all duration-500 ease-out ${
                    position === null ? "opacity-0 invisible" : "opacity-100 visible"
                } ${isCenter ? "z-30" : "z-10"}`}
                style={{
                    transform: `translateX(${position ? position * 75 : 0}%) scale(${
                    isCenter ? 1 : 0.8
                  })`,
                  zIndex,
                  cursor: isCenter ? "default" : "pointer",
                }}
                onClick={() => position !== null && goToIndex(index)}
              >
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover rounded-[20px] shadow-lg"
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }