import React from 'react';

const Options = ({ options, title, toggle }) => {
    return (
        <div className="options-list">
            <span className="options-list__header">{ title }</span>
            <ul className="options-list__items">
                {Object.values(options)
                    .map((option) => (
                        <li
                            key={option.id}
                            className="options-list__item"
                            onClick={() => toggle(option.id)}
                        >
                            {option.text}
                        </li>
                    ))}
            </ul>
        </div>
    );
};


export default Options;
