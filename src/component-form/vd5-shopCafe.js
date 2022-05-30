// import { useState } from "react";
// import swal from "sweetalert";

// const Menu = () => {
//   const [choices, setChoices] = useState([]);
//   const [money, setMoney] = useState(0);
//   const products = [
//     { id: "1", name: "Cafe", price: 20000 },
//     { id: "2", name: "Milk", price: 8000 },
//     { id: "3", name: "Pessi", price: 12000 },
//     { id: "4", name: "7 Up", price: 15000 },
//   ];
//   const isChoice = (productId) => {
//     return choices.includes(productId);
//   };
//   const submitHandler = (e) => {
//     e.preventDefault();

//     const total = choices.reduce(
//       (total, choice) =>
//         total + products.filter((product) => product.id === choice)[0].price,0);
//     // console.log(total);
//     const extra = money - total;
//     var title = "Successful!";
//     var productChoosen = choices.map(
//       (choice) => products.filter((product) => product.id === choice)[0].name
//     ).join(", ");
//     var message = `You choose ${productChoosen}.\nYour extra money is ${new Intl.NumberFormat().format(extra)} VND`;
//     var type = "success"
//     if (total === 0) {
//       title = "Sorry!";
//       message = "Please choose an item at least!";
//       type = "warning";
//     }
//     else if (extra < 0) {
//       title = "Sorry!";
//       message = "Your money is not enough!\nPlease pay more money!";
//       type = "warning"
//     } else {
//       setChoices([])
//       setMoney(0)
//     }
//     swal(title, message, type);
//   };
//   const changeChoicesHandler = (e) => {
//     if (e.target.checked) {
//       setChoices([...choices, e.target.value]);
//     } else {
//       setChoices(choices.filter((id) => id !== e.target.value));
//     }
//     // console.log(choices);
//   };
//   const changeMoneyHandler = (e) => {
//     setMoney(e.target.value);
//   };
//   console.log(choices);
//   // console.log("re-reder");
//   const productComponents = products.map((product) => (
//     <tr>
//       <td>
//         <input
//           type="checkbox"
//           value={product.id}
//           checked={isChoice(product.id)}
//           className="me-3"
//           onChange={changeChoicesHandler}
//         />
//       </td>
//       <td>
//         {product.name} {new Intl.NumberFormat().format(product.price)} VND
//       </td>
//     </tr>
//   ));
//   return (
//     <div className="d-flex align-items-center justify-content-center">
//       <div className="w-50">
//         <form onSubmit={submitHandler} className="bg-dark text-light p-5">
//           <h1 className="text-center">Please choose your items</h1>
//           <div className="d-flex align-items-center justify-content-center">
//             <table>
//               <tbody>{productComponents}</tbody>
//             </table>
//           </div>
//           <div className="money-input">
//             <h1 className="text-center">Please enter your money</h1>
//             <input
//               className="form-control"
//               type="text"
//               onChange={changeMoneyHandler}
//               value={money}
//             />
//           </div>
//           <div className="text-center mt-5">
//             <button className="btn btn-primary" type="submit">
//               Buy now
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
// export default Menu;



// // import React, { Component,choices } from 'react'

// // const products = [
// //     {
// //         id: 1,
// //         name: "Cafe đen không đá",
// //         price: 10000,
// //     },
// //     {
// //         id: 2,
// //         name: "Cafe đen đá",
// //         price: 12000,
// //     },
// //     {
// //         id: 3,
// //         name: "Cafe sữa không đá",
// //         price: 18000,
// //     },
// //     {
// //         id: 4,
// //         name: "Cafe sữa đá",
// //         price: 20000,
// //     },
// // ];
// // const isChoice = (id) => {
// //     return choices.includes(id);
// // };

// // class ShopCafe extends Component {
// //     constructor (props) {
// //         super(props);
// //         this.state = {
// //             type: '',
// //             price: '',
// //             money: ''
// //         };
// //     }
    
//     // myChangeHandler=(event) => {
//     //     let key = event.target.name; // lay gia tri cua the input
//     //     let value = event.target.value; // lay gia tri cua the input
//     //     this.setState ({
//     //         //firstName: event.target.value,
//     //         //password: event.target.value // cho phep lay gia tri cacoinput type=text
//     //         [key]: value
//     //     });
//     // }

// //     typeProduct = products.map((product) => (
// //         <tr>
// //             <td width={261}>
// //             <input
// //             type='checkbox'
// //             value={product.id}
// //             checked={isChoice(product.id)}
// //             />
// //             </td>
// //             <td>
// //                 {products.name} {new Intl.NumberFormat().format(products.price)} VND
// //             </td>
// //         </tr>
// //     ));

// //   render() {
// //     return (
// //       <form name='form'>
// //           <table width={670} height={177} border={0} align="center" bgcolor="#ffcccc">
// //               <thead>
// //                   <th bgcolor>
// //                       <td colSpan={2} align="center" bgcolor="ff0099">
// //                           <font color size={5}>
// //                               <b>Menu ShopCafe của Thanh Tú</b>
// //                           </font>
// //                       </td>
// //                   </th>
// //               </thead>
// //               <tbody>
// //                   {typeProduct}
// //                   <tr>
// //                       <td><span>Nhập số tiền của bạn:</span></td>
// //                       <td width={261}>
// //                           <label>
// //                               <input name='money' type='number'/>
// //                           </label>
// //                       </td>
// //                   </tr>
// //                   <tr>
// //                       <td colSpan={2} align="center">
// //                           <input type='submit' defaultValue='Xem kết quả'/>
// //                       </td>
// //                   </tr>
// //               </tbody>
// //           </table>
// //       </form>
// //     )
// //   }
// // }
// // export default ShopCafe;