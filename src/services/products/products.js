import axios from "axios";

export const addNewProduct = async (product) => {
  return await axios.post(
    process.env.REACT_APP_BASE_URL + "/products.json",
    product
  );
};

export const getProducts = async () => {
  try {
    return await axios
      .get(process.env.REACT_APP_BASE_URL + "/products.json")
      .then((response) =>
        Object.keys(response.data).map((item) => ({
          id: item,
          ...response.data[item],
        }))
      );
  } catch (error) {
    throw new Error(error);
  }
};
