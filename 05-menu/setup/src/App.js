import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import data from "./data";
const allCategories = ["all", ...new Set(data.map((item) => item.category))];

function App() {
  // console.log(Array.isArray(data)+' this is app.js')
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <div className="section menu">
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
        <Categories categories ={categories} filterItems ={filterItems}/>
        <Menu data={menuItems} />
      </div>
    </div>
  );
}

export default App;
