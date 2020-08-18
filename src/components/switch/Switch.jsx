import React, { useState } from 'react';

import './Switch.scss';

const Switch = ({ onChange, leftDescription, rightDescription }) => {
    const [status, setStatus] = useState(true);

    const onStatusChanged = () => {
        if (onChange) {
            onChange(!status);
        }
        setStatus(!status)
    }

    return (
        <div data-testid="switch" className="switch" onClick={onStatusChanged}>
            <div data-testid="left-side" className={`side left ${status? 'selected' : ''}`}>
                <p>{leftDescription}</p>
            </div>
            <div data-testid="right-side" className={`side right ${!status? 'selected' : ''}`}>
                <p>{rightDescription}</p>
            </div>
        </div>
    );
}

export default Switch;