import React, { useState, useEffect } from "react";

const HeroSection = ({ artical }) => {
  const [isLightBackground, setIsLightBackground] = useState(null);
  const dummyImage =
    "https://www.rugtek.com/wp-content/uploads/2022/03/blogbanner-1.jpg";

  const imageUrl = artical.image ? artical.image : dummyImage;

  const getImageBrightness = (imageSrc) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.src = imageSrc;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0, img.width, img.height);

        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        const pixels = imageData.data;
        let brightnessSum = 0;
        let pixelCount = 0;

        for (let i = 0; i < pixels.length; i += 4) {
          const r = pixels[i];
          const g = pixels[i + 1];
          const b = pixels[i + 2];

          const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
          brightnessSum += brightness;
          pixelCount++;
        }

        const averageBrightness = brightnessSum / pixelCount;
        console.log("Average Brightness:", averageBrightness); // Check if brightness is being calculated
        resolve(averageBrightness > 127);
      };
      
      img.onerror = () => {
        console.error("Failed to load the image.");
        resolve(false); // Consider image dark if it can't be loaded
      };
    });
  };

  useEffect(() => {
    getImageBrightness(imageUrl).then((isLight) => setIsLightBackground(isLight));
  }, [imageUrl]);

  if (isLightBackground === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative lg:min-h-[85vh] h-[200px]  bg-black overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-r from-black">
        <img
          src={imageUrl}
          className={`w-full h-full object-cover  ${artical.image.length === 0  ? 'opacity-5' : 'lg:opacity-90 opacity-90'  } `}
          alt="Service Banner"
          loading="lazy"
          title={artical.title}
        />
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-3 lg:items-center items-end w-11/12 h-full z-10 space-y-4 p-1 lg:p-8">
        <div className="col-span-2 text-[#fff] w-full h-full flex flex-col lg:justify-center justify-center gap-10 lg:gap-14">
          <h1
            className={`lg:w-[70%] text-sm w-[50%] lg:mt-0 mt-10 lg:text-5xl font-bold lg:text-left
             `}
          >
            {artical.title}
          </h1>
         
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
