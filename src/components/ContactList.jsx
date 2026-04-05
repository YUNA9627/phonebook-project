import React, { useState } from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contactList = useSelector((state) => state.contactList);
  const [inputValue, setInputValue] = useState("");

  const filteredList = contactList.filter((item) => {
    const keyword = inputValue.toLowerCase().trim();
    const phoneKeyword = inputValue.replace(/-/g, "").trim();
    const itemPhone = item.phoneNumber.replace(/-/g, "");

    return (
      item.name.toLowerCase().includes(keyword) ||
      itemPhone.includes(phoneKeyword)
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
        {filteredList.length > 0 ? (
          filteredList.map((item, index) => (
            <ContactItem key={index} item={item} index={index} />
          ))
        ) : (
          <div className="empty-contact">검색 결과가 없습니다.</div>
        )}
      </div>
    </div>
  );
};

export default ContactList;