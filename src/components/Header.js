import React from "react";
import note from "./images/note.png";
const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>
        Notes App <img src={note} alt="note " className="header-img" />{" "}
      </h1>
      <button
        className="save"
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
      >
        Toggle Mode
      </button>
    </div>
  );
};
export default Header;

