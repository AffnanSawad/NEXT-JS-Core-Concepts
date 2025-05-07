import React from 'react';

const ProducrCard = ({product}) => {
    return (
        <div>
            <h1> {product.name} </h1>
            <h1> {product.brand} </h1>
            <h1> {product.model} </h1>
        </div>
    );
};

export default ProducrCard;