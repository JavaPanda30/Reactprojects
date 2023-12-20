import React from "react";

const Menu = (data) => {
  // console.log(Array.isArray(data.data)+ ' this is menu.js');
  const Product = ({ id, title, img, desc, price }) => {
    return (
      <>
        <article key={id} className="menu-item">
          <img src={img} alt={title} className="photo" />
          <div className="item-info">
            <header>
              <h4>{title}</h4>
              <h4 className="price">${price}</h4>
            </header>
            <p className="item-text">{desc}</p>
          </div>
        </article>
      </>
    );
  };
  return (
    <>
      <div className="section-center">
        {data.data.map((menuItem) => {
          const { id, title, img, desc, price } = menuItem;
          return <Product key={id} id={id} title={title} img={img} desc={desc} price={price} />;
        })}
      </div>
    </>
  );
};

export default Menu;
