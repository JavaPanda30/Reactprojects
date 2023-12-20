import React, { useState, useEffect } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = (data) => {
  const [expand, setExpand] = useState(false); 
  const [icon, setIcon] = useState(<AiOutlinePlus />);

  const handleClick = () => {
    if (icon.type === AiOutlineMinus) {
      setExpand(false);
      setIcon(<AiOutlinePlus />);
    } else {
      setExpand(true);
      setIcon(<AiOutlineMinus />);
    }
  };

  const ButtonIcon = () => {
    return icon;
  };

  return (
    <div>
      <section className="question">
        <header>
          <h4>{data.title}</h4>
          <button className="btn" onClick={handleClick}>
            <ButtonIcon />
          </button>
        </header>
        <div>{expand && <p>{data.info}</p>}</div>
      </section>
    </div>
  );
};

export default Question;
