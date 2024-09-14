import React from "react";
import { useGetProductsQuery } from "../../redux/api/productsApi";

const Products = () => {
  const { data } = useGetProductsQuery();

  console.log(data);
  return (
    <div>
      {data &&
        data.payload &&
        data.payload.map((product) => (
          <div>
            <img src={product.product_images[0]} alt="" />
            <p key={product._id}>{product.product_name}</p>
          </div>
        ))}
    </div>
  );
};

export default Products;
