import React, { useState } from "react";
import './css/ToggleTheme.css';

const ToggleTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleButtonClicked = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const darkTheme = {
    backgroundColor: "#000000",
  };

  const lightTheme = {
    backgroundColor: "#ffffff",
  };

  return (
    <div>
      <div className="MainContainer" style={isDarkTheme ? darkTheme : lightTheme}>
        <button onClick={handleButtonClicked}>Change the Theme</button>
      </div>
    </div>
  );
};

export default ToggleTheme;
