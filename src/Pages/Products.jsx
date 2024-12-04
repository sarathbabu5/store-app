import React from "react";
import { customFetch } from "../utils";
import ProductList from "../components/ProductList";

const url = "/products";

export const loader = async ({ request }) => {
  const response = await customFetch(url);
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta };
};

const Products = () => {
  return (
    <>
      {/* filter */}
      {/* productcontainer */}
      <ProductList />
      {/* pagination */}
    </>
  );
};

export default Products;
