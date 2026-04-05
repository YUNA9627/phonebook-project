import React from "react";
import "../ContactForm.css";

const ContactItem = ({ item, index }) => {
  const profileText = item.name ? item.name.slice(0, 2) : "";

  const profileColors = [
    "#1e90ff",
    "#22c55e",
    "#f59e0b",
    "#a855f7",
    "#ef4444",
    "#14b8a6",
  ];

  const profileColor = profileColors[index % profileColors.length];

  return (
    <div className="contact-item">
      <div className="contact-item-left">
        <div
          className="contact-profile"
          style={{ backgroundColor: profileColor }}
        >
          {profileText}
        </div>

        <div className="contact-info">
          <div className="contact-name">{item.name}</div>
          <div className="contact-phone">{item.phoneNumber}</div>
        </div>
      </div>
    </div>
  );
};

export default ContactItem;