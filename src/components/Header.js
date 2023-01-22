import React from "react";

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div>
      <h1>Notes</h1>
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
