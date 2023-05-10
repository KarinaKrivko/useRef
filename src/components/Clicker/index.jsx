import React, { useRef } from "react";

function Clicker(props) {
  let value = 0;
  let fontSize = 30;
  const count = useRef();
  const getColor = () => Math.round(Math.random() * 255);
  const clickHandler = () => (count.current.innerText = ++value);
  const fontHandler = () => (count.current.style.fontSize = ++fontSize + "px");
  const changeColor = () =>
    (count.current.style.color = `rgb(${getColor()}, ${getColor()}, ${getColor()})`);

  return (
    <div>
      <button onClick={clickHandler}>Click</button>
      <button onClick={fontHandler}>Size</button>
      <button onClick={changeColor}>Change Color</button>
      <p style={{ fontSize: fontSize + "px" }} ref={count}>
        {value}
      </p>
    </div>
  );
}

export default Clicker;
