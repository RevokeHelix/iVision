import React from "react";
import "./style.css";

export const HomePage = (): JSX.Element => {
  return (
    <div className="home-page">
      <div className="div">
        <div className="overlap">
          <img className="ellipse" alt="Ellipse" src="https://c.animaapp.com/nYXy61Oz/img/ellipse-1.svg" />
          <div className="group" />
          <div className="group-2">
            <div className="menu-bar">
              <div className="logo">
                <img
                  className="element"
                  alt="Element"
                  src="https://c.animaapp.com/nYXy61Oz/img/377552544-122100322256037422-5305598451218448045-n-2@2x.png"
                />
                <div className="text-wrapper">iVision</div>
              </div>
              <a className="text-wrapper-2" href = "/Products">Products</a>
              <a className="text-wrapper-3" href = "/about">About</a>
              <a className="text-wrapper-4" href = "/contactus">Contact Us</a>
            </div>
            <div className="who-are-we">
              <p className="p">
                <span className="span">
                  Who are we?
                  <br />
                </span>
                <span className="text-wrapper-5">
                  <br />
                </span>
              </p>
              <p className="we-are-your-virtual">
                We are your virtual real estate solution experts, offering virtual staging, immersive tours, and
                captivating home presentations. <br />
                Elevate your property marketing with our innovative solutions.
              </p>
            </div>
            <div className="overlap-group">
              <div className="who-are-we-2">
                <div className="what-do-we-offer">What Do We Offer?</div>
                <p className="certainly-here-s-a">
                  Our services encompass a range of real estate solutions, including virtual staging, immersive virtual
                  tours, and captivating virtual home presentations. We leverage cutting-edge technology to transform
                  your property marketing and engage potential buyers in innovative ways.
                </p>
              </div>
              <div className="iframe" />
            </div>
            <div className="iframe-2" />
          </div>
        </div>
        <div className="about-us">
          <div className="see-our-products">
            <div className="div-wrapper">
              <div className="text-wrapper-6">See Our Products</div>
            </div>
          </div>
        </div>
        <div className="see-our-products-wrapper">
          <div className="see-our-products">
            <div className="div-wrapper">
              <div className="text-wrapper-7">Contact Us</div>
            </div>
          </div>
        </div>
        <div className="about-us-2">
          <div className="see-our-products">
            <div className="div-wrapper">
              <div className="text-wrapper-8">About Us</div>
            </div>
          </div>
        </div>
        <div className="group-3">
          <img
            className="monitor-XDR"
            alt="Monitor XDR"
            src="https://c.animaapp.com/nYXy61Oz/img/monitor-xdr-2@2x.png"
          />
          <img className="img" alt="Monitor XDR" src="https://c.animaapp.com/nYXy61Oz/img/monitor-xdr-1@2x.png" />
        </div>
        <div className="overlap-2">
          <div className="group-4" />
          <img
            className="icon-whatsapp"
            alt="Icon whatsapp"
            src="https://c.animaapp.com/nYXy61Oz/img/---icon--whatsapp-@2x.png"
          />
          <img
            className="icon-facebook"
            alt="Icon facebook"
            src="https://c.animaapp.com/nYXy61Oz/img/---icon--facebook-@2x.png"
          />
          <img
            className="icon-gmail"
            alt="Icon gmail"
            src="https://c.animaapp.com/nYXy61Oz/img/---icon--gmail-@2x.png"
          />
        </div>
        <img className="monitor-XDR-2" alt="Monitor XDR" src="https://c.animaapp.com/nYXy61Oz/img/monitor-xdr@2x.png" />
      </div>
    </div>
  );
};
