import React, {Component} from "react";
import Item from "./item/item";
import Product_data from "../../../data";
import './right.css';

class Right extends Component{
    render(){
        var rows = [];
        for (var i = 0; i < Product_data().length; i++){
            rows.push(
                <Item
                    tenSP={Product_data()[i].name}
                    anh={Product_data()[i].img}
                    chitiet={Product_data()[i].detail}>
                </Item>
            );
        }
        return(
            <div id="right-content">
                <h2>Product:</h2>
                <div id="products">
                    {rows}
                </div>
            </div>
        );
    }
}
export default Right;