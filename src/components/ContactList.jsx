import React, { useState } from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contactList = useSelector((state) => state.contactList);
  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState("");

  const filteredList = contactList.filter((item) => {
    const keyword = search.toLowerCase();

    return (
      item.name.toLowerCase().includes(keyword) ||
      item.phoneNumber.includes(search)
    );
  });

  const handleSearch = () => {
    setSearch(inputValue);
  };

  return (
    <div className="contact-list-wrap">
      <SearchBox
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSearch={handleSearch}
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