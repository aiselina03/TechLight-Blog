import React from "react";
import "./style.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="foot">
        <img
          src="https://demo.templatesjungle.com/techlight/images/logo-light.png"
          alt=""
        />
        <p className="info">
          Vel non nibh vestibulum massa ullamcorper. Bibendum ultrices
          venenatis, id id sed mass commodo eros duis ut cras neque.
        </p>
        <p>@ 2024 TechLigh by Aisel</p>
      </div>
      <div className="foot">
        <h3>MORE FROM US</h3>
        <p>iPhones</p>
        <p>MacBook</p>
        <p>Best Laptop</p>
        <p>Best TV Deal</p>
        <p>Best Macbook Deals</p>
        <p>eBay Coupons</p>
      </div>
      <div className="foot">
        <h3>ABOUT US</h3>
        <p>Advertise</p>
        <p>More About Us</p>
        <p>Newsletter</p>
        <p>Careers</p>
        <p>Help Center</p>
        <p>Contact</p>
      </div>
      <div className="foot">
        <h3>POLICIES</h3>
        <p>Privacy Policy</p>
        <p>Terms of Use</p>
        <p>Information</p>
        <p>Cookies</p>
        <p>Compliancer</p>
        <p>Copyright</p>
      </div>
    </div>
  );
}

export default Footer;
