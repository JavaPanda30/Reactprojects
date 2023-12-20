import React from "react";

const Categories = ({categories, filterItems}) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <div className="">
            <button
              type="button"
              className="filter-btn"
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
