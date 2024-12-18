import React from "react";
import { customFetch } from "../utils";
import { ProductsContainer, Filter } from "../components";
import PaginationContainer from "../components/PaginationContainer";

const url = "/products";

const allProductsQuery = (queryParams) => {
  const { search, category, company, sort, price, shipping, page } =
    queryParams;
  return {
    queryKey: [
      "products",
      search ?? "",
      category ?? "all",
      company ?? "all",
      sort ?? "a-z",
      price ?? 100000,
      shipping ?? true,
      page ?? 1,
    ],
    queryFn: () =>
      customFetch(url, {
        params: queryParams,
      }),
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    // const params = new URL(request.url).searchParams.get("search");
    // console.log(params);
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const response = await queryClient.ensureQueryData(
      allProductsQuery(params)
    );
    const products = response.data.data;
    const meta = response.data.meta;

    return { products, meta, params };
  };

const Products = () => {
  return (
    <>
      <Filter />

      <ProductsContainer />

      <PaginationContainer />
    </>
  );
};

export default Products;
