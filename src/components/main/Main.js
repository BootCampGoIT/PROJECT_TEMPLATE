import React from "react";
import AuthPage from "../../pages/AuthPage";
import HomePage from "../../pages/HomePage";
import ProductsPage from "../../pages/ProductsPage";

const currentPage = "productsPage";

const Main = () => {
  return (
    <main>
      {/* {currentPage === "homePage" && <HomePage />} */}
      {currentPage === "productsPage" && <ProductsPage />}
      {/* {currentPage === "authPage" && <AuthPage />} */}
    </main>
  );
};

export default Main;
