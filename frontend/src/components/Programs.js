import React, { useEffect } from "react";
import Program from "./Program";
import { useDispatch, useSelector } from "react-redux";
import Col from "react-bootstrap/Col";

//Components
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

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
    <>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger"> {error} </MessageBox>
      ) : (
        products.map((product) => (
          <Col>
            <Program
              key={product._id}
              name={product.name}
              calories={product.calories}
              additionalInfo={product.additionalInfo}
              cpfc={product.cpfc}
              imageUrl={product.imageUrl}
              productId={product._id}
            />
          </Col>
        ))
      )}
    </>
  );
};

export default Programs;
