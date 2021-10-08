import "./Programs.css";
import React, { useEffect } from "react";
import Program from "./Program";
import { useDispatch, useSelector } from "react-redux";

//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";

const Programs = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="programs_section">
      <h2 className="programs__title">Latest Products</h2>
      <div className="program__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Program
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Programs;
