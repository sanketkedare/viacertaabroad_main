import { useState } from "react";

const HeroSection = ({ artical }) => {
  const dummyImage =
    "https://www.rugtek.com/wp-content/uploads/2022/03/blogbanner-1.jpg";

  const imageUrl = artical.thumbnail ? artical.thumbnail : dummyImage;
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className="relative lg:w-full w-11/12 m-auto lg:min-h-[55vh] min-h-[200px] overflow-hidden flex items-center justify-center">
      {!isImageLoaded && <div>Loading...</div>}

      <img
        src={imageUrl}
        className={`w-full h-full rounded-xl shadow-lg object-contain transition-opacity duration-500 ${
          isImageLoaded ? "opacity-100" : "opacity-0"
        }`}
        alt="Service Banner"
        loading="lazy"
        title={artical.title}
        onLoad={() => setIsImageLoaded(true)}
        onError={() => setIsImageLoaded(true)} // Still hide loader even if image fails
      />
    </div>
  );
};

export default HeroSection;
