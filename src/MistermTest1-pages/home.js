import React, { useState, useEffect } from "react";
import { CategoryNews } from "../MistermTest1/news";
import '../assets/css/style.css';
// import "./../assets/css/Product.css";
// import swal from "sweetalert";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState({
    newsList: [],
    categoryList: [],
    adsList: [],
    isLoaded: false,
  });

  useEffect(() => {
    const getData = async () => {
        var res = await axios(
            "https://627b0cc6b54fe6ee008187ed.mockapi.io/categoriesNews"
        );
        // console.log(353);

        var categoryList = await res.data;
    
        res = await axios(
            "https://627b0cc6b54fe6ee008187ed.mockapi.io/news"
        );
        var newsList = await res.data;

        res = await axios(
          "https://61bc10c4d8542f0017824541.mockapi.io/advertisement"
        );
        var adsList = await res.data;
            
        setData({ categoryList, newsList, adsList, isLoaded: true });
        // console.log(333);
      };
      if (!data.isLoaded) getData(); // eslint-disable-next-line
  }, [data]);

    return (
        <div className="container-fluid">
        {data.isLoaded ? (
            <div className="row">
                <div className="col-10">
                    {data.categoryList.map((categories) => (
                        <CategoryNews
                            key={categories.id}
                            category={categories.name}
                            listNews={data.newsList.filter((news) => news.IdCategoriesNews === categories.id)}
                        />
                    ))}
                </div>
            </div>
        ) : (
            <div className="d-flex justify-content-center align-items-center h-100">
                Loading...
            </div>
        )}
    </div>
    );
}
export default Home;