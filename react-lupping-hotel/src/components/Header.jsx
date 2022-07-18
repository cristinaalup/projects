import React from "react";
import "./css/Header.css";
import { useState } from "react";
// window.onscroll = function () {
//   myFunction();
// };

// // Get the header
// var header = document.getElementById("myHeader");

// // Get the offset position of the navbar
// var sticky = header.offsetTop;

// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }

const Header = () => {
  return (
    <header>
      <div className="max-width-1200 block-center flex content-between items-center ">
        <h1 className="hover-underline font-PT blue-gradient">Lupping Hotel</h1>
        <nav>
          <ul className="flex font-classic gap-8 font-medium font-bold blue-gradient font-poppins ">
            <li>
              <a
                className="no-decoration color-default hover-text-blue"
                href="#sectionOne"
              >
                Our Hotels
              </a>
            </li>
            <li>
              <a
                className="no-decoration color-default hover-text-blue"
                href="#sectionTwo"
              >
                Why Book With Us?
              </a>
            </li>
            <li>
              <a
                className="no-decoration color-default hover-text-blue"
                href="#sectionThree"
              >
                Book Now
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
