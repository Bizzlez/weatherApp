import React from "react";
import "./Footer.css"; 

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {

  const attribution = (
    <p>
      Created By Reisya Bagus. Icons from{" "}
      <a href="https://www.flaticon.com/" target="_blank" rel="noopener noreferrer">
        Flaticon
      </a>{" "}
      and Animated Weather SVGs by{" "}
      <a href="https://www.amcharts.com/free-animated-svg-weather-icons/" target="_blank" rel="noopener noreferrer">
        amCharts
      </a>
    </p>
  );

  return (
    <footer className="footer">
      {attribution}
    </footer>
  );
};

export default Footer;