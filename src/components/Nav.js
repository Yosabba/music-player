import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ setShowLibary, showLibary }) => {
  function handleClick() {
    if (!showLibary) {
      setShowLibary(!showLibary);
    } else {
      setShowLibary(!showLibary);
    }
  }

  return (
    <header>
      <div></div>
      <h1>Music Player</h1>
      <button onClick={handleClick}>
        <FontAwesomeIcon icon={faMusic} />
        &nbsp;
        <span>Library</span>
      </button>
    </header>
  );
};

export default Nav;
