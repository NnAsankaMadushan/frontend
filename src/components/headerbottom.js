import { useRef } from "react";
import React from "react";
import { FaHeart } from "react-icons/fa";

import "./headerbottom.css";
function Headerbottom() {
  const navRef = useRef();

  return (
    <div class="header-bottom">
      <div className="nav">
        <nav ref={navRef}>
          <a href="/#"><i class="fa fa-car"></i>Home</a>
        </nav>
      </div>
      <p></p>
    </div>
  );
}
export default Headerbottom;
