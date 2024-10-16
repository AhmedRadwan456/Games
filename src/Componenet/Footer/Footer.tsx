import React, { useEffect } from "react";
import img from "../../images/video-game-icon-png.webp";
export default function Footer() {
  function removeIcon() {
    document.querySelector("#remove")?.classList.replace("d-block", "d-none");
  }

  return (
    <>
      <footer className="background-color2 text-white">
        <div className="container py-5">
          <div className="row border-bottom">
            <div className="col-md-3">
              <div className="p-2">
                <p className=" cursor-pointer">About Us</p>
                <p className=" cursor-pointer">API</p>
                <p className=" cursor-pointer">Contact Us</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-2">
                <p className=" cursor-pointer">Help/FAQ</p>
                <p className=" cursor-pointer">Support & Bugs</p>
                <p className=" cursor-pointer">Sitemap</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-2">
                <p className=" cursor-pointer">Privacy Policy</p>
                <p className=" cursor-pointer">Cookies Policy</p>
                <p className=" cursor-pointer">Terms of Use</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-2">
                <img className="w-50" src={img} alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div
        id="remove"
        className="py-3 border-0 d-block fixed-bottom background-color2 text-white "
      >
        <p className="mx-2 text-center p-0 m-0">
          We use cookies to make your browsing experience better.
        </p>
        <div className=" my-2 d-flex justify-content-center align-items-center">
          {" "}
          <button className="btn btn-outline-light mx-2">Accept</button>
          <button className="btn btn-outline-light ">Learn More</button>
          <button onClick={() => removeIcon()} className="btn text-white ">
            <i className="fa cursor-pointer fa-circle-xmark"></i>
          </button>
        </div>

        {/*  */}
      </div>

      <div className=" background-color2 mt-0 text-white border-0">
        <div className="container d-flex justify-content-between align-items-center ">
          <p className="footer-des">
            © 2024 Digiwalls Media, all rights reserved. All trademarks are
            property of their respective owners.
          </p>
          <div className=" d-flex justify-content-center align-items-center">
            <i className="fa-brands mx-2 fa-facebook-f"></i>
            <i className="fa-brands mx-2 fa-twitter"></i>
            <i className="fa-solid mx-2 fa-wifi"></i>
          </div>
        </div>
      </div>
    </>
  );
}
