import React from 'react';

import './CardContainer.css';

import Card from '../card/Card';

const CardContainer = ({ contents }) => {
    return (
        <div className='card-container'>
            <h2 className='title card-container-title'>{contents.title}</h2>
            <div className='card-container-flex'>
                {contents.cards.map(element => {
                    return (
                        <a className='a-nostyle' href={element.link} target='_Blank' rel='noreferrer' key={element.title}>
                            <Card content={element} />
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default CardContainer;