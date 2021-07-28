import React from "react";
import NavigationItem from "./navigationItem/NavigationItem";

const routes = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
];
const Navigation = () => {
  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <NavigationItem {...route} key={route.path} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
