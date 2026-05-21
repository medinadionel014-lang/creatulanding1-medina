import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function CartWidget() {
  const { totalQuantity } = useContext(CartContext);
  const total = totalQuantity();

  return (
    <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
      <span>
        🛒 {total > 0 && <strong>({total})</strong>}
      </span>
    </Link>
  );
}

export default CartWidget;