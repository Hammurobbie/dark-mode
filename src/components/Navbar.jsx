import React from "react";
import useDarkMode from "./hooks/useDarkMode";
import styled from "styled-components";

const TogDiv = styled.div`
  display: flex;
  width: 15%;
  justify-content: space-around;
`;

const Navbar = props => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <a
        className={darkMode ? "dark-mode-link" : "light-mode-link"}
        href="./index.js"
      >
        <h1>Crypto Tracker</h1>
      </a>
      <input
        className={darkMode ? "dark-mode-input" : "light-mode-input"}
        placeholder="Search"
        onChange={props.handleChanges}
        value={props.search}
      />
      <TogDiv>
        <h4>{darkMode ? "Light Mode" : "Dark Mode"}</h4>
        <div className="dark-mode__toggle">
          <div
            onClick={toggleMode}
            className={darkMode ? "toggle toggled" : "toggle"}
          />
        </div>
      </TogDiv>
    </nav>
  );
};

export default Navbar;
