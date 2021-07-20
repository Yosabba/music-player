import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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
            <nav>
                <FontAwesomeIcon icon={faBars} size="2x" onClick={handleClick}/>
            </nav>
            <h1>Library</h1>
        </header>
    );
}

export default Nav;