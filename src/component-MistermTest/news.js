import React, { Component } from 'react';
import '../assets/css/style.css';

const LargeNews = ({ data }) => {
  // console.log(data.id);
  return(
    <div className="large">
			<div className="large-header">
				<img src={data.img} className="card-img-top" alt="..." />
				<div className="large-btn" style={{ paddingTop:"110px" }}>
					<button className="bg-white button1" style={{ border:"1px solid grey", outline:"none", padding:"5px" }}>Buy Now</button>
				</div>
			</div>
			<div className="card-body text-center">
				<h5 className="card-title">{data.name}</h5>
				<div className="text-muted">
					<span>Price: ${data.price}</span>
				</div>
			</div>
		</div>
  )
}
const SmallNews = ({ data }) => {
  return(
    <div className="small" >
			<div className="roww">
				<div className="col-md-5 d-flex align-items-center">
					<img src={data.img} className="img-fluid ms-3" alt="..." />
				</div>
				<div className="coll">
					<div className="card-body">
						<div className="card-title">
							<b>{data.name}</b>
						</div>
						<p className="card-text">
							<span>Price: ${data.price}</span>
						</p>
						<div className="card-title">
							<button className="bg-white button1" style={{ border:"1px solid grey", outline:"none", padding:"5px" }}>Buy Now</button>
						</div>
					</div>
				</div>
			</div>
		</div>
  )
}

const Advertisement = ({data}) => {
	return(
		<div>
			<img src={data.img} width={100} alt="..."/>
		</div>
	)
}

const CategoryNews = (props) => 
// { category, list }
{
  // console.log(props.list);
  return(
    <div>
			<h1>{props.category}</h1>
			<div className="row">
				{/* <LargeNews data={props.list.filter((news) => news.size == "large")} /> */}
        		<div className="col-6 mt-3">
					{props.listNews
						.filter((news) => news.size === "large")
						.map((news) => (
							<LargeNews key={news.id} data={news}/>
						))}
				</div>
				<div className="col-6 mt-3 smalll">
					{props.listNews
						.filter((news) => news.size === "small")
						.map((news) => (
							<SmallNews key={news.id} data={news} />
						))}
				</div>
			</div>
		</div>
  )
}

export { CategoryNews };
// import React, { useState, useEffect } from "react";
// // import "./../assets/css/Product.css";
// // import swal from "sweetalert";
// const axios = require("axios").default;

// const Product1 = (props) => {
//   return (
//     <>
//     <div className="product">
//         <h2>{props.nameCategory}</h2>
//         <img src={props.imageNews} alt="" />
//         <p>{props.nameNews}</p>
//     </div>
//     </>
//   );
// };

// // const Product2 = (props) => {
// //     return (
// //       <>
// //       <div className="product">
// //           <h2>{props.nameCategory}</h2>
// //           <img src={props.imageNews} alt="" />
// //           <p>{props.nameNews}</p>
// //       </div>
// //       </>
// //     );
// //   };

// const NewProducts = () => {
//   const [data, setData] = useState({
//     productList: [],
//     categoryList: [],
//     isLoaded: false
//   });
//   // const [isLoaded, setIsLoaded] = useState(false);
// //   const [categoryId, setCategoryId] = useState("all");
//   const getData = async () => {
//     if (!data.isLoaded) {
//       var res = await axios(
//         "https://627b0cc6b54fe6ee008187ed.mockapi.io/categoriesNews"
//       );
//       var categoryList = await res.data;

//       res = await axios(
//         "https://627b0cc6b54fe6ee008187ed.mockapi.io/news"
//       );
//       var productList = await res.data;

//       setData({ categoryList, productList, isLoaded: true });
//     }
//   };

//   useEffect(() => {
//     getData(); // eslint-disable-next-line
//   }, []);

//   if (data.isLoaded) {
//     var category1 = data.categoryList.filter((idCtegory) => idCtegory.id === 1).map((nameCategory) => (
//         <Product1
//         nameCategory={nameCategory.name}
//         />
//     ))

//     var news1 = data.productList.filter((idNews) => idNews.IdCategoriesNews === 1).map((news) => (
//         <Product1
//         nameNews={news.name}
//         imageNews={news.img}
//         />
//     ))

//     // var category2 = data.categoryList.filter((idCtegory) => idCtegory.id === 2).map((nameCategory) => (
//     //     <Product2
//     //     nameCategory={nameCategory.name}
//     //     />
//     // ))

//     // var news2 = data.productList.filter((idNews) => idNews.IdCategoriesNews === 2).map((news) => (
//     //     <Product2
//     //     nameNews={news.name}
//     //     imageNews={news.img}
//     //     />
//     // ))
//     return (
//       <>
//         <h1>Welcome</h1>
//         <div>
//             <div className="product col">{category1}</div>
//             <div className="product col">{news1}</div>
//         </div>
//         {/* <div>
//             <div className="product col">{category2}</div>
//             <div className="product col">{news2}</div>
//         </div> */}
//       </>
//     );
//   }
//   return <div>Loading...</div>;
// };
// export { Product1,  NewProducts as default };