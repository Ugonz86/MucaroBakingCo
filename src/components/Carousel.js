import React, { useEffect, useState } from "react";
import "../App.css";





// export const CarouselItem = ({ children, width }) => {
//   return (
//     <div className="carousel-item" style={{ width: width}}>
//       {children}
//     </div>
//   );
// };

// const Carousel = ({ children }) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [paused, setPaused] = useState(false);

//   const updateIndex = (newIndex) => {
//     if (newIndex < 0) {
//       newIndex = React.Children.count(children) - 1;
//     } else if (newIndex >= React.Children.count(children)) {
//       newIndex = 0;
//     }
//     setActiveIndex(newIndex);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!paused) {
//         updateIndex(activeIndex + 1);
//       }
//     }, 1000);
//     return () => {
//       if (interval) {
//         clearInterval(interval);
//       }
//     };
//   });

//   return (
//     <div
//       className="carousel"
//       onMouseEnter={() => setPaused(true)}
//       onMouseLeave={() => setPaused(false)}
//     >
//       <div
//         className="inner"
//         style={{ transform: `translateX(-${activeIndex * 100}%)` }}
//       >
//         {React.Children.map(children, (child, index) => {
//           return React.cloneElement(child, { width: "100%" });
//         })}
//       </div>
//       <div className="indicators">
//         <button
//           onClick={() => {
//             updateIndex(activeIndex - 1);
//           }}
//         >
//           Prev
//         </button>
//         {React.Children.map(children, (child, index) => {
//           return (
//             <button
//               className={`${index === activeIndex ? "active" : ""}`}
//               onClick={() => {
//                 updateIndex(index);
//               }}
//             >
//               {index + 1}
//             </button>
//           );
//         })}
//         <button
//           onClick={() => {
//             updateIndex(activeIndex + 1);
//           }}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Carousel;

///////////////////////////////

import img1 from "../images/carouselImages/1.jpeg";
import img2 from "../images/carouselImages/2.jpeg";
import img3 from "../images/carouselImages/3.jpeg";
import img4 from "../images/carouselImages/4.jpeg";
import img5 from "../images/carouselImages/5.jpeg";
import img6 from "../images/carouselImages/6.jpeg";
import img7 from "../images/carouselImages/7.jpeg";
// import img8 from "../images/carouselImages/8.jpeg";
import img9 from "../images/carouselImages/9.jpeg";
import img10 from "../images/carouselImages/10.jpeg";
import img11 from "../images/carouselImages/11.jpeg";
import img12 from "../images/carouselImages/12.jpeg";
import img13 from "../images/carouselImages/13.jpeg";

function Carousel() {
  const data = [
    {
      src: img1,
      altText: "Image 1",
      caption: "Image 1",
    },
    {
      src: img2,
      altText: "Image 2",
      caption: "Image 2",
    },
    {
      src: img3,
      altText: "Image 3",
      caption: "Image 3",
    },
    {
      src: img4,
      altText: "Image 4",
      caption: "Image 4",
    },
    {
      src: img5,
      altText: "Image 5",
      caption: "Image 5",
    },
    {
      src: img6,
      altText: "Image 6",
      caption: "Image 6",
    },
    {
      src: img7,
      altText: "Image 7",
      caption: "Image 7",
    },
    {
      src: img9,
      altText: "Image 9",
      caption: "Image 9",
    },
    {
        src: img10,
        altText: "Image 10",
        caption: "Image 10",
      },
      {
        src: img11,
        altText: "Image 11",
        caption: "Image 11",
      },
      {
        src: img12,
        altText: "Image 12",
        caption: "Image 12",
      },
      {
        src: img13,
        altText: "Image 13",
        caption: "Image 13",
      },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselInfiniteScroll = () => {
    if (currentIndex === data.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      carouselInfiniteScroll();
    }, 3000);

    return () => clearInterval(interval);
  });

  return (
    <div className="carousel-container">
      {data.map((item, index) => {
        return (
          <div
            className="carousel-item"
            style={{ transform: `translate(-${currentIndex * 100}%)`, zIndex: '-1' }}
            key={index}
          >
            <img alt="" className="carouselImage" src={item.src} loading="lazy" ></img>
          </div>
        );
      })}
    </div>
  );
}

export default Carousel;

