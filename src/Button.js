import React, { useState } from 'react';

const Button = ({ onClick, children }) => {
    const [clicked, setClicked] = useState(false);

    return (
        <button onClick={() => {
            setClicked(!clicked);
            onClick();
        }}>
            {clicked ? 'Clicked' : children}
        </button>
    );
}

export default Button;
