// // components/ImageCard.tsx
// import React, { useState } from "react";

// interface ImageCardProps {
//   images: string[];
// }

// const ImageCard: React.FC<ImageCardProps> = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToPreviousImage = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const goToNextImage = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className="relative w-80 h-60 mx-auto overflow-hidden rounded-lg shadow-lg">
//       <img
//         src={images[currentIndex]}
//         alt={`Image ${currentIndex + 1}`}
//         className="w-full h-full object-cover"
//       />

//       <button
//         className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full"
//         onClick={goToPreviousImage}
//       >
//         &#8592;
//       </button>
//       <button
//         className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full"
//         onClick={goToNextImage}
//       >
//         &#8594;
//       </button>
//     </div>
//   );
// };

// export default ImageCard;





import React, { useState } from 'react';

interface ImageCardProps {
  images: string[];
}

const ImageCard: React.FC<ImageCardProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-80 h-60 mx-auto overflow-hidden rounded-lg shadow-lg">
      <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} className="w-full h-full object-cover" />

      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-900 bg-opacity-70 text-white p-1 rounded-full text-sm"
        onClick={goToPreviousImage}
      >
        &#8592;
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-900 bg-opacity-70 text-white p-1 rounded-full text-sm"
        onClick={goToNextImage}
      >
        &#8594;
      </button>

      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
        {images.map((_, index) => (
          <span
            key={index}
            className={`block w-2 h-2 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;







// import React, { useState } from 'react';

// interface ImageCardProps {
//   images: string[];
// }

// const ImageCard: React.FC<ImageCardProps> = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToPreviousImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//   };

//   const goToNextImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-lg shadow-lg">
//       <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} className="w-full h-64 sm:h-80 md:h-96 object-cover" />

//       <button
//         className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-900 bg-opacity-70 text-white p-1 rounded-full text-sm sm:p-2 sm:text-base md:p-3 md:text-lg"
//         onClick={goToPreviousImage}
//       >
//         &#8592;
//       </button>
//       <button
//         className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-900 bg-opacity-70 text-white p-1 rounded-full text-sm sm:p-2 sm:text-base md:p-3 md:text-lg"
//         onClick={goToNextImage}
//       >
//         &#8594;
//       </button>

//       <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
//         {images.map((_, index) => (
//           <span
//             key={index}
//             className={`block w-2 h-2 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
//           ></span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageCard;
