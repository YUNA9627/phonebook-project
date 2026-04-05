import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import "../ContactForm.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();

  const formatPhoneNumber = (value) => {
    const onlyNumber = value.replace(/[^0-9]/g, "");

    if (onlyNumber.length < 4) return onlyNumber;
    if (onlyNumber.length < 8) {
      return `${onlyNumber.slice(0, 3)}-${onlyNumber.slice(3)}`;
    }
    return `${onlyNumber.slice(0, 3)}-${onlyNumber.slice(3, 7)}-${onlyNumber.slice(7, 11)}`;
  };

  const handlePhoneNumber = (event) => {
    const formattedNumber = formatPhoneNumber(event.target.value);
    setPhoneNumber(formattedNumber);
  };

  const addContact = (event) => {
    event.preventDefault();

    const phoneRegex = /^010-\d{4}-\d{4}$/;

    if (!phoneRegex.test(phoneNumber)) {
      alert("전화번호 형식은 010-0000-0000 입니다.");
      return;
    }

    if (!name.trim()) {
      alert("이름을 입력하세요.");
      return;
    }

    dispatch({
      type: "ADD_CONTACT",
      payload: { name, phoneNumber },
    });

    setName("");
    setPhoneNumber("");
  };

  return (
    <div className="contact-form-section">
      <h1 className="contact-title">연락처</h1>

      <Form onSubmit={addContact}>
        <div className="contact-form-card">
          <p className="section-title">연락처 추가</p>

          <div className="form-row-box">
            <label className="form-label">이름</label>
            <Form.Control
              type="text"
              placeholder="홍길동"
              value={name}
              className="contact-input"
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div className="form-row-box">
            <label className="form-label">전화번호</label>
            <Form.Control
              type="text"
              placeholder="010-0000-0000"
              value={phoneNumber}
              className="contact-input"
              onChange={handlePhoneNumber}
              maxLength={13}
            />
          </div>
        </div>

        <Button type="submit" className="contact-submit-btn">
          추가
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;