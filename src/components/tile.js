import React from 'react';

export function Tile({ value }) {
    const values = Object.values(value);
    return (
        <div className="tile-container">
            {values.map((value, index) => {
                if (index === 0) {
                    return <p className='tile-title' key={index}>{value}</p>
                } else {
                    return <p className='tile' key={index}>{value}</p>
                }
            })}
        </div>
    );
}