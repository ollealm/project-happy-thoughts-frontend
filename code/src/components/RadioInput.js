import React from "react";
import "./radioInput.css";

export const RadioInput = ({ setPostedTag }) => {
  return (
    <div>
      <div className="radiocontainer">
        <input
          type="radio"
          id="thought"
          name="tag"
          value="thought"
          onChange={(event) => setPostedTag(event.target.value)}
        />
        <label htmlFor="thought">Thought</label>
        <span className="checkmark"></span>
      </div>
      <div className="radiocontainer">
        <input
          type="radio"
          id="joke"
          name="tag"
          value="joke"
          onChange={(event) => setPostedTag(event.target.value)}
        />
        <label htmlFor="joke">Joke</label>
        <span className="checkmark"></span>
      </div>
      <div className="radiocontainer">
        <input
          type="radio"
          id="wisdom"
          name="tag"
          value="wisdom"
          onChange={(event) => setPostedTag(event.target.value)}
        />
        <label htmlFor="wisdom">Wisdom</label>
        <span className="checkmark"></span>
      </div>
    </div>
  );
};
