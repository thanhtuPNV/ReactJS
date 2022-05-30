import React, { Component } from "react";
// import "./style.css";

const ShowPro = (props) => {
  return (
    <div className="container">
      <div id="product">
        <img src={props.img} alt="" />
        <p>{props.name}</p>
        <p>{props.detail}</p>
      </div>
    </div>
  );
}

export default ShowPro;