import React from "react";

const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h1>React {props.title}</h1>
    </div>
  );
};

export default Header;
