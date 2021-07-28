import React, { Component } from "react";
import { addNewProduct, getProducts } from "../../services/products/products";
import ProductForm from "./productForm/ProductForm";
import ProductList from "./productList/ProductList";

class Products extends Component {
  state = {
    products: [],
    error: "",
  };

  componentDidMount() {
    getProducts().then((data) => this.setState({ products: [...data] }));
  }

  addProduct = async (product) => {
    try {
      const response = await addNewProduct(product);
      this.setState((prev) => ({
        products: [...prev.products, { id: response.data.name, ...product }],
      }));
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  render() {
    return (
      <>
        <ProductForm addProduct={this.addProduct} error={this.state.error}/>
        <ProductList products={this.state.products} />
      </>
    );
  }
}

export default Products;
