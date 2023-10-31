import React from "react";
import "./style.css";

export const ContactUs = (): JSX.Element => {
  return (
    <div className="contact-us">
      <div className="div">
        <div className="overlap">
          <div className="overlap-group">
            <div className="overlap-group-2">
              <div className="ellipse" />
              <div className="text-wrapper">Contact Us</div>
              <div className="menu-bar">
                <div className="logo">
                  <img
                    className="element"
                    alt="Element"
                    src="/img/377552544-122100322256037422-5305598451218448045-n-2.png"
                  />
                  <div className="text-wrapper-2">iVision</div>
                </div>
                <div className="text-wrapper-3">Products</div>
                <div className="text-wrapper-4">About</div>
                <div className="text-wrapper-5">Contact Us</div>
              </div>
            </div>
            <div className="ellipse-2" />
          </div>
          <p className="if-you-were">
            <span className="span">
              If you were interested in our work,
              <br />
              you are more than welcome to
              <br />
            </span>
            <span className="text-wrapper-6">contact </span>
            <span className="span">
              us to get more details!
              <br />
              You can contact us through:
            </span>
          </p>
          <div className="options">
            <img className="icon-whatsapp" alt="Icon whatsapp" src="/img/icon-whatsapp-1.png" />
            <img className="icon-facebook" alt="Icon facebook" src="/img/icon-facebook-1.png" />
            <img className="icon-gmail" alt="Icon gmail" src="/img/icon-gmail-1.png" />
            <div className="text-wrapper-7">iVision - Virtual Tours</div>
            <a
              className="text-wrapper-8"
              href="mailto:ivisionvtours@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              ivisionvtours@gmail.com
            </a>
            <p className="yahel">
              Yahel - +972-539643829
              <br />
              Rotem - +972-546159092
            </p>
          </div>
        </div>
        <div className="overlap-2">
          <div className="group" />
          <img className="img" alt="Icon whatsapp" src="/img/icon-whatsapp.png" />
          <img className="icon-facebook-2" alt="Icon facebook" src="/img/icon-facebook.png" />
          <img className="icon-gmail-2" alt="Icon gmail" src="/img/icon-gmail.png" />
        </div>
      </div>
    </div>
  );
};
