import React from "react";
import "./Navbar.css"


function Navmain() {
  return (
    <div id="nav-main" className="nav-sprite">
     
      <div className="nav-left">
        <div className="nav-roomIcon" />
        <div className="nav__option1">
          <span className="nav__optionlineOne">Deliver to</span>
          <span className="nav__optionlineTwo">Pakistan</span>
        </div>
      </div>

      <div className="nav__xshop ">
        <span className="nav__shop-a  ">Today's Deals </span>
        <span className="nav__shop-b  ">Customer Service</span>
        <span className="nav__shop-c  ">Gift Cards</span>
        <span className="nav__shop-d  ">Registry</span>
        <span className="nav__shop-e  ">Sell</span>
      </div>
    </div>
  );
}

export default Navmain;
