import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import image from "../../images/video-game-icon-png.webp";
export default function Navbar() {
  
  function active() {
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        document
          .querySelector(".navbar-nav .active")
          ?.classList.remove("active");
        link.classList.add("active");
      });
    });
  }

  useEffect(() => {
    active();
  }, []);

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg  bg-black  ">
        <div className="container ">
          <Link className="navbar-brand text-white" to="/">
            <img className="logo" src={image} alt="" />
            GAME REVIEWS
          </Link>
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item  ">
                <Link
                  className="nav-link active hover1 "
                  aria-current="page"
                  to={"/"}
                >
                  MMORPG
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link hover1 " to="/shooter">
                  SHOOTER
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link hover1 " to="/zombie">
                  ZOMBIE
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link hover1 " to="/sports">
                  SPORTS
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link hover1 " to="/action">
                  ACTION
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link hover1 " to="/sailing">
                  SAILING
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
