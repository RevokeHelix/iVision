import React from "react";
import "./style.css";

export const About = (): JSX.Element => {
  return (
    <div className="about">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="ellipse" />
          <div className="div" />
          <div className="text-wrapper">About Us</div>
          <p className="at-ivision-we-re">
            At iVision, we&#39;re dedicated to revolutionizing the real estate industry with our expertise in virtual
            staging, immersive virtual tours, and 3D floorplans. We empower our clients to showcase properties
            effectively, connecting buyers with their dream homes. With a blend of creativity and technology, we&#39;re
            your partner in transforming property marketing and delivering outstanding results.
          </p>
          <div className="menu-bar">
            <div className="logo">
              <img
                className="element"
                alt="Element"
                src="/img/377552544-122100322256037422-5305598451218448045-n-2.png"
              />
              <a className="text-wrapper-2" href="/home">iVision</a>
            </div>
            <a className="text-wrapper-3" href="/Products">Products</a>
            <a className="text-wrapper-4" href = "/about">About</a>
            <a className="text-wrapper-5" href = "/contactus">Contact Us</a>
          </div>
          <div className="group" />
          <img className="icon-whatsapp" alt="Icon whatsapp" src="/img/icon-whatsapp.png" />
          <img className="icon-facebook" alt="Icon facebook" src="/img/icon-facebook.png" />
          <img className="icon-gmail" alt="Icon gmail" src="/img/icon-gmail.png" />
        </div>
      </div>
    </div>
  );
};
