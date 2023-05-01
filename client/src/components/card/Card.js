import React from 'react';

import './Card.css';

const Card = ({ content }) => {
    const { title, p } = content;

    return (
        <div className='card'>
            <h3 className='title card-title'>{title}</h3>
            <p className='card-p'>{p}</p>
        </div>
    );
};

export default Card;