import "./ProductScreen.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Actions
import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";

//Components
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

const ProductScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const [total, setTotal] = useState([0]);
  const [active, setActive] = useState({ price: 0, days: 0 });

  const showData = (item) => {
    setActive(item);
    setTotal(item.price * item.days);
  };

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);

  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, match, product]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty, total));
    history.push(`/cart`);
  };
  return (
    <div className="productscreen">
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger"> {error} </MessageBox>
      ) : (
        <>
          <div className="productscreen__left">
            <div className="left__image">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="left__info">
              <p className="left__name">
                {product.name}
                {product.calories}
              </p>
              <p>Additional info: {product.cpfc}</p>
              <p>Description: {product.description}</p>
            </div>
          </div>
          <div className="productscreen__right">
            <div className="right__info">
              <div className="button_section">
                {product.prices &&
                  product.prices.map((item) => (
                    <button
                      className="button_prices"
                      key={item.id}
                      id={item.id}
                      onClick={() => showData(item)}
                    >
                      <span className="price_perday">
                        <i class="fas fa-euro-sign">{item.price} </i>/ per day
                      </span>
                      <br />
                      <span>
                        <strong>{item.days} days </strong>
                      </span>
                    </button>
                  ))}
              </div>
              <p>
                {product.additionalInfo} for {active.price} €
              </p>
              <p>
                Total {active.days} days: {total} €
              </p>
              <p>
                Qty
                <select
                  value={qty}
                  onChange={(e) => setQty(Number(e.target.value))}
                >
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type="button" onClick={addToCartHandler}>
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductScreen;
