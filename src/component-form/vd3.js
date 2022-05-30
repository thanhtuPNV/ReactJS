import React, { Component } from 'react';

class Vd3 extends Component {
    constructor(props) {
        super (props);
        this.state = {
          data: 'Initial data...'
        }
          this.updatestate=this.updatestate.bind(this);
    }
   updatestate(e){
      this.setstate({data: e.target.value});
   }
   render(){
      return(
         <div>
            <Content myDataProp={this.state.data}
               updatestateProp={this.updatestate}></Content>
         </div>
      );
   }
}
class Content extends Component{
    render (){
       return(
          <div>
             <input type="text" value={this.props.myDataProp}
                onchange={this.props.updatestateProp} />
             <h3>{this.props.myDataProp}</h3>
          </div>
       );
    }
}
export default Vd3;