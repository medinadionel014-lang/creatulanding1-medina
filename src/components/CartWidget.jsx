import { useContext } from "react";

import { Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";

function CartWidget() {

  const { totalQuantity } =
    useContext(CartContext);

  return (

    <Link to="/cart">

      <span>

        🛒 {totalQuantity()}

      </span>

    </Link>

  );

}

export default CartWidget;