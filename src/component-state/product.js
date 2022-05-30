// import React, { Component } from 'react';
// // import React, { Component,useState } from 'react';
// // import product_data from './data';
// // import productdata from './data';
// import './style.css';
// import Products_data from './data';
// import ShowProCate from './showPro-Cate';

// class Product extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             home: <div>Trang chủ</div>
//         };
//     }

//     Pots = () => {
//         let data = Products_data("products");
//         data = data.filter((product) => product.IdCategories === 1).map(ele => {
//             return <ShowProCate name={ele.name} img={ele.img} detail={ele.detail}></ShowProCate>
//         })
//         this.setState({home:data})
//     }

//     Clothes = () => {
//         let data = Products_data("products");
//         data = data.filter((product) => product.IdCategories === 2).map(ele => {
//             return <ShowProCate name={ele.name} img={ele.img} detail={ele.detail}></ShowProCate>
//         })
//         this.setState({home:data})
//     }

//     Furniture = () => {
//         let data = Products_data("products");
//         data = data.filter((product=>product.IdCategories === 3)).map(ele => {
//             return <ShowProCate name={ele.name} img={ele.img} detail={ele.detail}></ShowProCate>
//         })
//         this.setState({home:data})
//     }

//     Home = () => {
//         this.setState({home:<div>Trang chủ</div>})
//     }

//     render() {
//         return (
//             <div className="container">
//                 {this.state.home}
//                 <div>
//                     <button onClick={this.Home}>Home</button>
//                     <button onClick={this.Pots}>Bình</button>
//                     <button onClick={this.Clothes}>Quần áo</button>
//                     <button onClick={this.Furniture}>Đồ nội thất</button>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Product;

// import ShowPro from './showPro';
import React, { useState, useEffect } from "react";
// import "./../assets/css/Product.css";
import swal from "sweetalert";
const axios = require("axios").default;

const successAlert = (name) => {
  swal({
    title: "Thank you!",
    text: `You bought a ${name}! Your order is processing!`,
    icon: "success",
  });
};


const Product = (props) => {
  return (
    <>
    <div className="product">
      <img src={props.imgLink} alt="" />
      <p>Product name: {props.name}</p>
      <p>
        Price: <span className="text-danger">${props.price}</span>
      </p>
      <button
        className="btn btn-primary"
        onClick={() => successAlert(props.name)}
      >
        Add to cart
      </button>
      <button
        className="btn btn-primary"
        onClick={() => props.successUpdate(props.id)}
      >
        Update
      </button>
    </div>
    </>
  );
};
// const NavBar = () => {
//   return (
//     <nav className="nav flex-column">
//       <a className="nav-link" aria-current="page" href="#">
//         Active
//       </a>
//       <a className="nav-link" href="#">
//         Link
//       </a>
//       <a className="nav-link" href="#">
//         Link
//       </a>
//       <a className="nav-link disabled">Disabled</a>
//     </nav>
//   );
// }
// form
const Create = (props) => (
  <div className="product">
      {/* onSubmit={this.onSave} */}
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input
              type="text"
              name="name"
              value={props.name}
              // onChange = {props.onChangee}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter name"
            />
          </div>
          {/* <div className="form-group">
            <label htmlFor="exampleInputPassword1">Quantity</label>
            <input
              type="text"
              name="quantity"
              // onChange = {this.onChange}
              // value={this.state.quantity}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Quantity"
            />
          </div> */}
          <div className="form-group">
            <label htmlFor="exampleInputEmail2">Price</label>
            <input
              type="text"
              name="price"
              // onChange = {props.onChangee}
              value={props.price}
              className="form-control"
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
              placeholder="Enter price"
            />
          </div>
          <div className="form-group">
            <label>Image</label>
            <input
              type="file"
              name="image"
              // onChange = {this.onChangeImage}
              className="form-control"
              placeholder="image"
            />
          </div>
          <div className="form-group" id = "image-edit" style={{ display: "none" }}>
            <label>Image</label>
              <img src={props.image} style={{ width: "100px" }}/>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
)
// form

const NewProducts = () => {
  const [data, setData] = useState({
    productList: [],
    categoryList: [],
    isLoaded: false
  });
  const [product, setProduct] = useState({
      id: "",
      name: "",
      image: "",
      price: "",
  });
  // const [isLoaded, setIsLoaded] = useState(false);
  const [categoryId, setCategoryId] = useState("all");
  const getData = async () => {
    if (!data.isLoaded) {
      var res = await axios(
        "https://627b0cc6b54fe6ee008187ed.mockapi.io/categories"
      );
      var categoryList = await res.data;

      res = await axios(
        "https://627b0cc6b54fe6ee008187ed.mockapi.io/products"
      );
      var productList = await res.data;

      setData({ categoryList, productList, isLoaded: true });
    }
  };

  const successUpdate = (id) => {
    var product = getProductUpdate(id);
    setProduct(pre=>({
      id: product.id,
      name: product.name,
      image: product.img,
      price: product.price,
    }));
    document.getElementById('image-edit').style.display = 'block';
    alert(id);
  }

  // onChange
  const onChange = (event) => {
    setProduct({
      ...product,[event.target.name]: event.target.value,
    });
  }
  // const changeHandler = e => {
  //   let name = e.target.name
  //   let value = e.target.value
  //   //change to  get ending file
  //   if(name === "image"){
  //     value = "images/"+ document.querySelector("#image").files.item(0).name;
  //     // value = URL.createObjectURL(file)
  //   }
  //    setStudent({...student, [name]: value})
  // }

  // getIDProductUpdate
  var getProductUpdate = (id) => {
    return data.productList.find(product => product.id === id);
  }

  useEffect(() => {
    getData(); // eslint-disable-next-line
  }, []);

  if (data.isLoaded) {
    console.log(categoryId)
    console.log(data.productList)
    // newProductComponents
    var newProductComponents =
      categoryId === "all"
        ? data.productList.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              imgLink={product.img}
              name={product.name}
              price={product.price}
              successUpdate = {successUpdate}
              // onChange = {onChange}
            />
          ))
        : data.productList
            .filter((product) => product.IdCategories === categoryId)
            .map((product) => (
              <Product
                key={product.id}
                id={product.id}
                imgLink={product.img}
                name={product.name}
                price={product.price}
                successUpdate = {successUpdate}
                // onChange = {onChange}
              />
            ));
    // onchangeUpdate
    var onChangePro = () => (
      <Create
        onChangee = {onChange}
      />
    );
    // categoryComponents
    var categoryComponents = data.categoryList.map(category => 
          <button key={category.id} onClick={() => setCategoryId(category.id)}>{category.name}</button>
        )
    return (
      <section className="new-products">
        {/* <h1 className="text-center mb-3">New Products in My Shop</h1> */}
        {/* <NavBar/> */}
        <div className="button-nav">
          <button key="all" onClick={() => setCategoryId("all")}>
            All
          </button>
          {categoryComponents}
        </div>
        <div className="row">
          {/* <div className="product col-4">{formCoponents}</div> */}
          <div className="product col">{newProductComponents}</div>
        </div>
        {/* <div className="form"></div> */}
      </section>
    );
  }
  return <div>Loading...</div>;
};
export { Product, Create, NewProducts as default };


// class Product extends Component {
//     constructor(props){
//         var arr = Product_data();
//         super(props);
//         this.state = {arr};
//     }
//     // changeInf = () => {
//     //     this.setState.arr({name: "Hieu"});
//     //     this.setState.arr({img: 21});
//     //     this.setState.arr({detail: "Red"});
//     //   }
//     render() {
//         return (
//             <div className='container'>
//                 {
//                     this.state.arr.map(key =>
//                         <div id='product'>
//                             <img src={key.img} alt=""/>
//                             <p>{key.name}</p>
//                             <p>{key.detail}</p>
//                         </div>
//                     )
//                 }
//                 {/* <p>Em tên là {this.state.name}, {this.state.age} tuổi rất thích màu {this.state.color}.</p> */}
//                 {/* <button type='button' onClick={this.changeInf}>Change Inf</button> */}
//             </div>
//         );
//     }
// }


// class Product extends Component {
//     constructor(){
//         super();
//         this.state = product_data();
//     }
//     // changeInf = () => {
//     //     this.setState.arr({name: "Hieu"});
//     //     this.setState.arr({img: 21});
//     //     this.setState.arr({detail: "Red"});
//     //   }
//     render() {
//         return (
//             <div className="container">
//                     {
//                         this.state.map(value => {
//                             return (
//                             <div id="product">
//                                 <ShowPro name={value.name} img={value.img} detail={value.detail}></ShowPro>
//                             </div>
//                             )
//                         }
//                         )
//                     }
//                     {/* <p>Em tên là {this.state.name}, {this.state.age} tuổi rất thích màu {this.state.color}.</p> */}
//                     {/* <button type='button' onClick={this.changeInf}>Change Inf</button> */}
//             </div>
//         );
//     }
// }

// phat
// class Product extends Component {
//     constructor(){
//         super();
//         this.state =
//             Product_data();
//     }

    

//     render() {
//         // console.log(this.state);
//         return (
//             <>
//             <h1>{this.state && this.state[1].detail}</h1>
//             </>
//             // <div className="container">
//             //         {
//             //             this.state.map(value => {
//             //                 return (
//             //                 <div id="product">
//             //                     <ShowPro name={value.name} img={value.img} detail={value.detail}></ShowPro>
//             //                 </div>
//             //                 )
//             //             }
//             //             )
//             //         }
//             //         {/* <p>Em tên là {this.state.name}, {this.state.age} tuổi rất thích màu {this.state.color}.</p> */}
//             //         {/* <button type='button' onClick={this.changeInf}>Change Inf</button> */}
//             // </div>
//         );
//     }
// }

// function Example() {
//     // Khai báo 1 biến trạng thái mới đặt tên là "count"
//     const [count, setCount] = useState(0);
  
//     return (
//       <div>
//         <p>Bạn đã click {count} lần</p>
//         <button onClick={() => setCount(count + 1)}>
//           Click vào tôi
//         </button>
//       </div>
//     );
//   }

// class Profile extends Component {
//     constructor(props){
//         super(props)
//         this.state = {"show_technologies": false}
//         this.see_our_technologies = this.see_our_technologies.bind(this);
//     }
//     see_our_technologies(){
//         this.setState({"show_technologies": true})
//     }
//     render(){
//         console.log(this.state)
//         const style = {
//             padding: '10px',
//             border: '1px solid green',
//             display: 'block',
//             marginLeft: 'auto',
//             marginRight: 'auto',
//             width: '50%',
//             color: '#4db1e8',
//             textAlign: 'center',
//             fontFamily: 'sans-serif'
//         }
//         const tech = {
//             background: '#4db1e8',
//             color: '#fff',
//             padding: '5px',
//             marginRight: '5px'
//         }
//         return (
//             <div style={style}>
//                 <img src={this.props.img_url} height="250px"/>
//                 <h1>{this.props.title}</h1>
//                 {this.state.show_technologies ?
//                     <p>
//                         <span style={tech}>Python</span>
//                         <span style={tech}>Django</span>
//                         <span style={tech}>Django REST</span>
//                         <span style={tech}>ReactJS</span>
//                         <span style={tech}>Angular</span>
//                         <span style={tech}> and More</span>
//                     </p>
//                     :
//                     <button onClick={this.see_our_technologies}>Click to see Our Technologies</button>
//                 }
//             </div>
//         );
//     }
// }

// export default Product;