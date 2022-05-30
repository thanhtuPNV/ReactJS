import React, { Component } from 'react';
var ShowProCate = (props) => {
    return(
        <div>
            <div>
                <img src={props.img} alt=""/>
                <p>{props.name}</p>
                <p>{props.detail}</p>
            </div>
            <div>
                <button>Đặt mua</button>
            </div>
        </div>
    )
}
export default ShowProCate;