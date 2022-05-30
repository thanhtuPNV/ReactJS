import React, { Component } from "react";

class Vd4 extends Component{
    constructor (props){
        super (props);
        this.state = {
           hk1: 0,
           hk2: 0,
           MediumScore: '',
           academicPower: '',
           KQ: ''
       };
    }
    myChangeHandler=(event) => {
        let key = event.target.name; // lay gia tri cua the input
        let value = event.target.value; // lay gia tri cua the input
        this.setState ({
            //firstName: event.target.value,
            //password: event.target.value // cho phep lay gia tri cacoinput type=text
            [key]: value
        });
    }
    mySubmitHandler=(event) => {
            event.preventDefault();
            let hk1 = this.state.hk1;
            let hk2 = this.state.hk2;
            let Medium = 0;
            if (!Number (hk1) || !Number (hk2)){
                alert ("Score semester must beanumber");
            }else{
                Medium= (parseFloat(hk1) + parseFloat(hk2))/2;
                this.setState ({MediumScore:Medium});
            if (Medium >= 9){
                this.setState ({KQ: "HSG"});
                this.setState ({academicPower: "Được lên lớp"});
            }
            else if (Medium>=7 && Medium<9){
                this.setState ({KQ: "HSK"});
                this.setState ({academicPower: "Được lên lớp"});
            }
            else if (Medium>=5 && Medium<7){
                this.setState ({KQ: "HSTB"});
                this.setState ({academicPower: "Được lên lớp"});
            }
            else{
                this.setState({KQ: "HSY"});
                this.setState({academicPower: "Không được lên lớp"});
            }
        }
        console.log (event);
    }
    render(){
        return(
            <form name="forml" onSubmit={this.mySubmitHandler}>
                <table width={670} height={177} border={0} align="center" bgcolor="#ffcccc">
                    <tbody>
                        <tr bgcolor>
                            <td colSpan={2} align="center" bgcolor="ff0099">
                                <font color size={5}>
                                    <b>KẾT QUẢ HỌC TẬP</b>
                                </font>
                            </td>
                        </tr>
                        <tr>
                            <td width={125}><span>Điểm HK1: </span></td>
                            <td width={261}>
                                <label>
                                    <input name="hk1" type="number" min="0" max="10" size={20} onChange={this.myChangeHandler} />
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td width={125}><span>Điểm HK2: </span></td>
                            <td width={261}>
                                <label>
                                    <input name="hk2" type="number" min="0" max="10" onChange={this.myChangeHandler} />
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td><span>Điểm trung bình: </span></td>
                            <td width={261}>
                                <label>
                                    <input name="MediumScore" type="text" readOnly value={this.state.MediumScore} onChange={this.myChangeHandler} />
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td><span>Kết quả: </span></td>
                            <td>
                                <label>
                                    <input name="ketqua" type="text" value={this.state.KQ} />
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td><span>Xếp loại học lực</span></td>
                            <td>
                                <label>
                                    <input name="x" type="text" value={this.state.academicPower} />
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} align="center">
                                <input type="submit" defaultValue="Xem kết quả" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        );
    }
}

export default Vd4;