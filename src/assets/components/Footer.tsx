import React from "react";
import "./Footer.css"; // Import your CSS file

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} My Website</p>
    </footer>
  );
};

export default Footer;
