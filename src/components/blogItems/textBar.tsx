import React, { useState } from "react";
import "./blogStyles.css";

const TextBar: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [postDetails, setPostDetails] = useState<any[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const handlePostSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
    setPostDetails([...postDetails, { name, date, inputText }]);
    setInputText("");
    setName("");
    setDate("");
    console.log(postDetails);
  };

  return (
    <div className="TextBar">
      <form onSubmit={handlePostSubmit}>
        <div className="TextBar-content">
          <div className="InputContainer">
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Enter your name"
              className="NameInput"
            />
            <input
              type="text"
              value={date}
              onChange={handleDateChange}
              placeholder="Enter the date"
              className="DateInput"
            />
            <button type="submit" className="submitButton">
              Post
            </button>
          </div>
          <textarea
            value={inputText}
            onChange={handleInputChange}
            placeholder="Enter your text"
            className="TextArea"
          />
        </div>
      </form>
    </div>
  );
};

export default TextBar;
