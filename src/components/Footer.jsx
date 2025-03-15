import React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#000", color: "#fff", textAlign: "center", padding: "10px" }}>
      <p>&copy; {new Date().getFullYear()} CopsGate. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
