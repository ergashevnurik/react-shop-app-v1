import React from 'react'

export default function Product(props) {
    const {product, onAdd} = props;
    return (
        <div>
            <img className="small" src={product.img} alt={product.alt}></img>
            <h3>{product.name}</h3>
            <div>{product.price} UZS</div>
            <div>
                <button onClick={() => onAdd(product)} className="btn btn-success">Add To Cart</button>
            </div>
        </div>
    )
}