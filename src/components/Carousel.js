import React, { useEffect, useState } from "react";
import "../App.css";

import img1 from "../images/carouselImages/1.png";
import img2 from "../images/carouselImages/2.png";
import img3 from "../images/carouselImages/3.png";
import img4 from "../images/carouselImages/4.png";
// import img5 from "../images/carouselImages/5.png";
import img6 from "../images/carouselImages/6.png";
import img7 from "../images/carouselImages/7.png";
import img8 from "../images/carouselImages/8.png";
import img9 from "../images/carouselImages/9.png";
import img10 from "../images/carouselImages/10.png";
import img11 from "../images/carouselImages/11.png";
import img12 from "../images/carouselImages/12.png";
import img13 from "../images/carouselImages/13.png";
import img14 from "../images/carouselImages/14.png";
import img15 from "../images/carouselImages/15.png";
import img16 from "../images/carouselImages/16.png";
import img17 from "../images/carouselImages/17.png";
import img18 from "../images/carouselImages/18.png";
import img19 from "../images/carouselImages/19.png";
import img20 from "../images/carouselImages/20.png";
import img21 from "../images/carouselImages/21.png";
import img22 from "../images/carouselImages/22.png";
import img23 from "../images/carouselImages/23.png";
import img24 from "../images/carouselImages/24.png";
import img25 from "../images/carouselImages/25.png";
import img26 from "../images/carouselImages/26.png";
import img27 from "../images/carouselImages/27.png";
import img28 from "../images/carouselImages/27.png";

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
    // {
    //   src: img5,
    //   altText: "Image 5",
    //   caption: "Image 5",
    // },
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
      src: img8,
      altText: "Image 8",
      caption: "Image 8",
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
    {
      src: img14,
      altText: "Image 14",
      caption: "Image 14",
    },
    {
      src: img15,
      altText: "Image 15",
      caption: "Image 15",
    },
    {
      src: img16,
      altText: "Image 16",
      caption: "Image 16",
    },
    {
      src: img17,
      altText: "Image 17",
      caption: "Image 17",
    },
    {
      src: img18,
      altText: "Image 18",
      caption: "Image 18",
    },
    {
      src: img19,
      altText: "Image 19",
      caption: "Image 19",
    },
    {
      src: img20,
      altText: "Image 20",
      caption: "Image 20",
    },
    {
      src: img21,
      altText: "Image 21",
      caption: "Image 21",
    },
    {
      src: img22,
      altText: "Image 22",
      caption: "Image 22",
    },
    {
      src: img23,
      altText: "Image 23",
      caption: "Image 23",
    },
    {
      src: img24,
      altText: "Image 24",
      caption: "Image 24",
    },
    {
      src: img25,
      altText: "Image 25",
      caption: "Image 25",
    },
    {
      src: img26,
      altText: "Image 26",
      caption: "Image 26",
    },
    {
      src: img27,
      altText: "Image 27",
      caption: "Image 27",
    },
    {
      src: img28,
      altText: "Image 28",
      caption: "Image 28",
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
            style={{
              transform: `translate(-${currentIndex * 100}%)`,
              zIndex: "-1",
            }}
            key={index}
          >
            {index === 1 ? (
              <img alt="" style={{ display: "none" }}></img>
            ) : (
              <img
                alt=""
                className="carouselImage"
                src={item.src}
                loading="lazy"
              ></img>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Carousel;
