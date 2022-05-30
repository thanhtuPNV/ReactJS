import React, {Component} from "react";
import './item.css';

// function Alert(){
    
// }

class Item extends Component{
    render(){
        const shoot = () => {
            alert("Thank you!");
        }
        return(
            <div className="product">
                <div className="text">
                    <div className="p-name">
                    {/* <a href="item.html">LUMIX DMC-G2</a> */}
                    <a href="item.html">{this.props.chitiet}</a>
                    </div>
                </div>
                <div className="p-img">
                    <img src={this.props.anh} width={200} height={200} alt="" />
                </div>
                <div className="text">
                    <div className="p-cat">{this.props.tenSP} </div>
                    <div className="p-price">Please Call</div>
                    {/* <input onClick={this.props.shoot} type="button" className="button" name="add" defaultValue="Add to cart" /> */}
                    <button onClick={shoot} className="button">Add to cart</button>
                </div>
                <div className="clear" />
            </div>
        );
    }
}
export default Item;