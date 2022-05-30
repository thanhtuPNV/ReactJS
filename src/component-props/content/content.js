import React, {Component} from "react";
import Right from "./right/right";
import Left from "./left/left";
import './content.css';

class Contentt extends Component {
    render() {
        return (
            <div id="Contents">
                <Left />
                <Right />
            </div>
        );
    }
}

export default Contentt;