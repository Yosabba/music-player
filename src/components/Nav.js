import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const Nav = ({ setShowLibary, showLibary }) => {

    function handleClick() {
        if (!showLibary){
            setShowLibary(!showLibary)
        } else {
            setShowLibary(!showLibary)
        }
    }

    return (
        <header>
            <div></div>
            <h1>Dom's Music Player</h1>
            <button onClick={handleClick}>
                Library 
                <FontAwesomeIcon icon={faMusic} size="1x" />
            </button>
            
        </header>
    );
}

export default Nav;