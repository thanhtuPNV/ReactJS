import React, { Component } from 'react';
import './props.css';

function Show_pro(props) {
    return(
        <div className="products">
            <img src={props.img} className="img1" />
            <div>
                <p>{props.name}</p>
                <p>{props.price}</p>
            </div>
        </div>
    );
}

function Products() {
    return (
        <>
            <h1>Products</h1>
            <Show_pro img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTECNOQIVV_bl2r-of7mfzD-1Ml-6bGskkMcA&usqp=CAU" />
            <Show_pro name="ABC" />
            <Show_pro price="10000" />
            <Show_pro img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTECNOQIVV_bl2r-of7mfzD-1Ml-6bGskkMcA&usqp=CAU" />
            <Show_pro name="DEF" />
            <Show_pro price="20000" />
            <Show_pro img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTECNOQIVV_bl2r-of7mfzD-1Ml-6bGskkMcA&usqp=CAU" />
            <Show_pro name="MNL" />
            <Show_pro price="30000" />  
        </>
      );
}

export default Products;