import React from "react";
import Slider from "react-slick";
import "./slider.css";

export class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true
    };
    return (
      <div className="sliderContainer">
        <Slider {...settings}>
          {this.props.listings.map(listing => {
            return (
              <div className="photoContainer">
                <div className="image">
                  <img src={listing.url} />
                  <div className="listingText">
                    <p className="heading">{listing.caption}</p>
                    <p className="address">{listing.address}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default SimpleSlider;
