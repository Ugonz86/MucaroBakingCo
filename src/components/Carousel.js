import React, { useEffect, useState } from "react";
import "../App.css";
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
            style={{ transform: `translate(-${currentIndex * 100}%)` }}
            key={index}
          >
            <img alt="" className="carouselImage" src={item.src} ></img>
          </div>
        );
      })}
    </div>
  );
}

export default Carousel;
