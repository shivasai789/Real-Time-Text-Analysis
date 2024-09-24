import React, { useState } from "react";
import CountContainers from "../CountContainers";
import "./index.css";



const TextEditor = () => {
  const [textareaText, setTextareaText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [spaceCount, setSpaceCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);
  const [searchString, setSearchString] = useState("");
  const [replaceString, setReplaceString] = useState("" );

  const countElements = [
    {
      countElement: "SENTENCES",
      countId: "Sentences",
      count: sentenceCount
      
    },
    {
      countElement: "WORDS",
      countId: "Words",
      count: wordCount
    },
    {
      countElement: "CHARACTERS",
      countId: "Characters",
      count: characterCount
    },
    {
      countElement: "WHITESPACES",
      countId: "Whitespaces",
      count: spaceCount
    },
  ];

  const handleChange = (event) => {
    const text = event.target.value;

    const wordsArray = text.split(/\s+/).filter(Boolean);

    const uniqueWords = new Set(wordsArray.map((word) => word.toLowerCase()));

    setTextareaText(text);
    setWordCount(uniqueWords.size); // Counts words
    setCharacterCount((text.match(/[a-zA-Z0-9]/g) || []).length); // Counts characters
    setSpaceCount((text.match(/\s/g) || []).length); // Counts whitespaces
    setSentenceCount((text.match(/[.!?]+/g) || []).length); // Counts sentences
  };

  const handleReplace = () => {
    if (searchString.trim() === "") return;

    // const updatedText = textareaText.split(searchString).join(replaceString);
    const updatedText = textareaText.replaceAll(searchString,replaceString)

    setTextareaText(updatedText);
    setSearchString('')
    setReplaceString('')
  };


  return (
    <div className="bg-container">
      <h1 className="main-heading">
        Real-Time Text Analysis and String Replacement
      </h1>
      <div className="box-cont">
        <ul className="count-containers">
          {countElements.map((eachItem) => (
            <CountContainers
              countItemDetails={eachItem}
              key={eachItem.countId}
            />
          ))}
        </ul>
        <textarea
          rows={15}
          className="textarea-container"
          placeholder="Copy and paste your text here to start real time analysis..."
          value={textareaText}
          onChange={handleChange}
        />
        <div className="replacement-container">
          <input
            type="text"
            placeholder="Search string"
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
            className="replacement-input"
          />
          <input
            type="text"
            placeholder="Replace with"
            value={replaceString}
            onChange={(e) => setReplaceString(e.target.value)}
            className="replacement-input"
          />
          <button className="replace-button" onClick={handleReplace}>
            Replace All
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
