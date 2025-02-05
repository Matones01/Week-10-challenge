import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import phone from "../images/BasicPhone.jpeg"
import old from "../images/OldPhone.jpeg"
import phone2 from "../images/Phone2.jpeg"
import brickold from "../images/BrickPhone.jpeg"
import brick from "../images/NewBrick.png"
import { Link } from "react-router-dom";

function Home() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 250,
    arrows: true,
    prevArrow: <button type="button" className="slick-prev">Previous</button>,
    nextArrow: <button type="button" className="slick-next">Next</button>,
    responsive: [{
        breakpoint: 375,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }
    ]
  };

  return (
    <div className="home-all">
    <div className="home-banner">
        <Link to={`/products`}>
            <div className="home-banner-inside">
                <div>
                <h3>
                    You won't find better deals anywhere else.
                </h3>
                </div>
                <div>
                <h3>
                    We'll price match it. 
                </h3>
                </div>
                <div>
                <h3>
                And take another £3 off.
                </h3>
                </div>
            </div>
        </Link>
    </div>
    <div className="home-carousel" style={{ width: '100%', maxWidth: '100vw', overflowX: 'hidden' }}>
      <div className="home-title">
      <h2>New Stock</h2>
      </div>
      <Slider {...settings}>
        <Link to={`/products/101`}>
        <div>
          <img className="carousel-image" src={phone}/>
        </div>
        </Link>
        <Link to={`/products/109`}>
        <div>
          <img  className="carousel-image" src={old}/>
        </div>
        </Link>
        <Link to={`/products/103`}>
        <div>
            <img  className="carousel-image" src={phone2}/>
        </div>
        </Link>
        <Link to={`/products/104`}>
        <div>
          <img className="carousel-image" src={brick}/>
        </div>
        </Link>
      </Slider>
    </div>
    <div className="home-extras">
        <div className="home-disclaimer">
            <h3>
                Please note
            </h3>
            <p>
                All item's prices are displayed before tax.
            </p>
        </div>
        <div className="home-disclaimer">
            <Link to={`/products/124`}>
            <div className="disclaimer-fix">
            <div className="center">
                <h3>
                    Popular Near You
                </h3>
            </div>
            <div className="center">
                <h4>
                    BrickPhon3
                </h4>
            </div>
            <div className="center">
                <img className="home-popular-image" src={brickold}/>
            </div>
            </div>
            </Link>
        </div>
        <div className="home-disclaimer">
            <h3>
                Now delivering outside of the Uk
            </h3>
        </div>
    </div>
    <div className="home-extras">
        <div className="home-win">
            <h3>
                Enter the Summer Competition and Win Big!!
            </h3>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit rerum, dolorum veritatis voluptate deleniti omnis velit quaerat eligendi delectus illum a culpa ab earum temporibus accusamus hic quam nulla similique.
            </p>
        </div>
    </div>

    </div>
  );
}

export default Home;
