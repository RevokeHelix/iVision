import React from "react";
import "./style.css";

export const Products = (): JSX.Element => {
  return (
    <div className="products">
      <div className="div">
        <div className="overlap">
          <div className="ellipse" />
          <div className="group">
            <div className="menu-bar">
              <div className="logo">
                <img
                  className="element"
                  alt="Element"
                  src="/img/377552544-122100322256037422-5305598451218448045-n-2.png"
                />
                <div className="text-wrapper">iVision</div>
              </div>
              <div className="text-wrapper-2">Products</div>
              <div className="text-wrapper-3">About</div>
              <div className="text-wrapper-4">Contact Us</div>
            </div>
            <div className="who-are-we">
              <div className="text-wrapper-5">Virtual Staging</div>
              <p className="virtual-staging-is-a">
                Virtual staging is a digital technique used to furnish and decorate empty spaces in property listings,
                helping buyers visualize a property&#39;s potential without physical staging.
              </p>
            </div>
            <div className="who-are-we-2">
              <div className="overlap-group">
                <div className="text-wrapper-6">Virtual Walkthrough</div>
                <p className="certainly-here-s-a">
                  A virtual walkthrough, or virtual tour, provides an immersive, 360-degree view of a property through
                  digital imagery, allowing viewers to explore it from their own devices.
                </p>
              </div>
              <div className="overlap-2">
                <div className="text-wrapper-7">3D Floorplans</div>
                <p className="p">
                  3D floorplans are detailed, three-dimensional representations of property layouts, helping buyers
                  understand room dimensions and spatial relationships.
                </p>
              </div>
              <div className="overlap-group-2">
                <div className="text-wrapper-7">Virtual Tours</div>
                <p className="certainly-here-s-a-2">
                  Virtual tours offer comprehensive property exploration through interactive digital experiences,
                  enhancing buyers&#39; understanding of a property&#39;s features and layout.
                </p>
              </div>
              <div className="text-wrapper-8">Earth Zoom</div>
              <p className="certainly-here-s-a-3">
                Earth Zoom is a addon to a Virtual Walkthrough video where the video starts with a zoom shot of the
                location from earth.
              </p>
            </div>
            <div className="iframe" />
            <div className="iframe-2" />
            <div className="iframe-3" />
            <div className="iframe-4" />
            <div className="iframe-5" />
            <div className="text-wrapper-9">Our Services</div>
          </div>
          <img className="line" alt="Line" src="/img/line-7.svg" />
          <img className="img" alt="Line" src="/img/line-8.svg" />
          <img className="line-2" alt="Line" src="/img/line-13.svg" />
          <img className="line-3" alt="Line" src="/img/line-12.svg" />
          <img className="line-4" alt="Line" src="/img/line-13.svg" />
        </div>
        <div className="overlap-3">
          <img className="monitor-XDR" alt="Monitor XDR" src="/img/monitor-xdr.png" />
          <div className="about-us">
            <div className="see-our-products">
              <div className="div-wrapper">
                <div className="text-wrapper-10">Contact Us</div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-4">
          <div className="group-2" />
          <img className="icon-whatsapp" alt="Icon whatsapp" src="/img/icon-whatsapp.png" />
          <img className="icon-facebook" alt="Icon facebook" src="/img/icon-facebook.png" />
          <img className="icon-gmail" alt="Icon gmail" src="/img/icon-gmail.png" />
        </div>
      </div>
    </div>
  );
};
