import PropTypes from 'prop-types'
import React, { useState } from 'react';
import cx from 'classnames'


const Button = ({ cuandoClick, children }) => {
    const [clicked, setClicked] = useState(false);

	// Class logic
	const componentClasses = cx(
		'testComponentClasses',
		{'si': true },
        {'no': false }
	)

    return (
        <button
        className={componentClasses}
        onClick={(e) => {

            setClicked(!clicked);
            cuandoClick();
            console.log(e.target)

        }}>
            {clicked ? 'Clicked' : children}
        </button>
    );
}

Button.propTypes = {
    cuandoClick: PropTypes.func,
    children: PropTypes.string
}

export default Button;
