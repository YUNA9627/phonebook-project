import React from "react";
import { Form } from "react-bootstrap";

const SearchBox = ({ inputValue, setInputValue, handleSearch }) => {
  return (
    <div className="search-box-wrap">
      <Form.Control
        type="text"
        placeholder="검색"
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