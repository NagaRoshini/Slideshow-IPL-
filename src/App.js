import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const slides = [
    {
      image: "MI.avif",
      caption: "MI",
    },
    {
      image: "CSK.webp",
      caption: "CSK",
    },
    {
      image: "RCBSquadWeb.jpg",
      caption: "RCB",
    },
    {
      image: "pbks.jpg",
      caption: "PBKS",
    },
    {
      image: "dc.avif",
      caption: "DC",
    },
    {
      image: "GT.webp",
      caption: "GT",
    },
    {
      image: "lsg.jpg",
      caption: "LSG",
    },
    {
      image: "RR-Live.webp",
      caption: "RR",
    },
    {
      image: "kkr.webp",
      caption: "KKR",
    },
    {
      image: "srh.webp",
      caption: "SRH",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
      <div className="App" style={{ width: "800px", margin: "auto", paddingTop: "50px" }}>
        <h2>Image Slideshow</h2>
        <Slider {...settings}>
          {slides.map((slide, index) => (
              <div key={index}>
                <img
                    src={slide.image}
                    alt={slide.caption}
                    style={{ width: "100%", height: "400px", objectFit: "cover" }}
                />
                <p style={{ textAlign: "center" }}>{slide.caption}</p>
              </div>
          ))}
        </Slider>
      </div>
  );
};

export default App;
