import React from "react";
import { Link } from "react-router-dom";
import "./Favs.css";
import useCart from "../../customHooks/useCart";
// import { useDispatch, useSelector } from "react-redux";
// import { deleteFav, getFavs } from "../../redux/actions/actions.js";
import { CardsFav } from "./CardsFavs/CardsFav";

const Favs = () => {
  //Hook del carrito
  const { add } = useCart();

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getFavs());
  // }, [dispatch]);

  // const favs = useSelector((state) => state.favs);
  // //console.log("soy favs", favs);

  return (
    <div>
      <div className="containerFavAll">
        <h1>Favs</h1>
        <div className="containerFav">
          <div className="divPrecioFav">
            <h5>Price</h5>
          </div>
         <CardsFav />
          <div className="divContainerTotal">
            {/* <p>USD$</p> */}
          </div>
          <div className="divButtons">
            <Link to="/gallery">
              <button>See more paintings</button>
            </Link>
            <Link to='/under'>
            <button
              onClick={() => {
                add();
              }}
            >
              Add to cart
            </button>
            </Link>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favs;