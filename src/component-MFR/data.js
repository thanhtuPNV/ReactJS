import React, { useState } from "react";
import ReactDOM from "react-dom";
import Total from "./components/Total";

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3
      }
    ]
  };

  return (
    <div>
      <Total parts={course.parts} />
    </div>
  );
};

const arr=products.filter(pro=>pro.name.includes("2"))
const arr1=products.filter(product=>product.detail ==="AAA");          
const arr2 = [{AAAA:1},{BBB:2}].filter(ele=>"AAAA"in ele);
// const arr3= products.filter(ele=>"name"in ele);

export default App;