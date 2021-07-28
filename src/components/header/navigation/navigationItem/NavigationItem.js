import React from "react";

const NavigationItem = ({ path, name }) => {
  return (
    <li>
      <a href={path}>{name}</a>
    </li>
  );
};

export default NavigationItem;
