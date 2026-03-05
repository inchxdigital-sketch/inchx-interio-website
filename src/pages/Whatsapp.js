import React from "react";
import "./Whatsapp.css";
import { FaWhatsapp } from "react-icons/fa";

function Whatsapp() {
  const phoneNumber = "918688379789";
  const message = "Hello, I would like to know more about your Interior Products and Services.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
}

export default Whatsapp;