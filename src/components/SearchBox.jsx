import React from "react";
import { Form } from "react-bootstrap";

const SearchBox = ({ inputValue, setInputValue, handleSearch }) => {
  return (
    <div className="search-box-wrap">
      <Form.Control
        type="text"
        placeholder="전화번호 또는 이름을 검색하세요."
        className="search-box-input"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleSearch();
          }
        }}
      />
    </div>
  );
};

export default SearchBox;