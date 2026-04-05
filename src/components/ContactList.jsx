import React, { useState } from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contactList = useSelector((state) => state.contactList);
  const [inputValue, setInputValue] = useState("");

  const filteredList = contactList.filter((item) => {
    const keyword = inputValue.toLowerCase();

    return (
      item.name.toLowerCase().includes(keyword) ||
      item.phoneNumber.includes()
    );
  });

  return (
    <div className="contact-list-wrap">
      <SearchBox
        inputValue={inputValue}
        setInputValue={setInputValue}
      />

      <p className="section-title list-title">연락처 목록</p>

      <div className="contact-items-card">
        {filteredList.map((item, index) => (
          <ContactItem key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ContactList;