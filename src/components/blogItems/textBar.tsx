import React, { useState } from "react";
import "./blogStyles.css";

const TextBar = () => {
  const [inputText, setInputText] = useState("");
  const [blogBlocks, setBlogBlocks] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleAddBlock = () => {
    if (inputText.trim() !== "") {
      setBlogBlocks((prevBlocks) => [...prevBlocks, inputText]);
      setInputText("");
    }
  };

  return (
    <div className="text-bar">
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter your text"
      />
      <button onClick={handleAddBlock}>Add Block</button>
      <div className="blog-area">
        {blogBlocks.map((block, index) => (
          <div key={index} className="blog-block">
            {block}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextBar;
