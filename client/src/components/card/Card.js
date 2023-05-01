import React from 'react';

import './Card.css';

const Card = ({ content }) => {
    const { title, icon, p } = content;

    return (
        <div className='card'>
            <h3 className='title card-title'>{title}</h3>
            { icon }
            <p className='card-p'>{p}</p>
        </div>
    );
};

export default Card;