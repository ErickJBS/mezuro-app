import React, { useState } from 'react';

import './Dropdown.scss';

const Dropdown = ({ options = [], message, onSelectionChanged }) => {

    const [displayOptions, setDisplayOptions] = useState(options);
    const [selected, setSelected] = useState({
        label: message || 'Select One'
    });
    const [expanded, setExpanded] = useState(false);

    const onOptionSelected = (option) => {
        setExpanded(false);
        setSelected(option);
        if (onSelectionChanged)
            onSelectionChanged(option.value);
    }

    const filterDisplayOptions = (filter) => {
        setDisplayOptions(
            options.filter(
                option => option.label.toLowerCase().includes(filter.toLowerCase())
            )
        );
    }

    return (
        <div className="dropdown">
            <div data-testid="dropdown" className="dropdown-container" onClick={() => setExpanded(!expanded)}>
                <div className="icon-container">
                    <i className={`icon ${expanded ? 'reverse' : ''}`}>&#9660;</i>
                </div>
                <input className="select" type="text" value={selected.label} readOnly />
            </div>
            <div data-testid="container" className={`options ${expanded ? 'unfolded' : 'folded'}`}>
                <div className="search-bar">
                    <input className="search-input" type="text" placeholder="Filter"
                        onChange={e => filterDisplayOptions(e.target.value)} />
                </div>
                {
                    displayOptions.map((option, idx) => (
                        <div data-testid={`option-${idx}`} className="option" key={option.label} onClick={() => onOptionSelected(option)}>
                            <p className="option-title">{option.label}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Dropdown;