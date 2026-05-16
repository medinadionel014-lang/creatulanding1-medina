import { useContext, useState } from "react";

import {
  collection,
  addDoc
} from "firebase/firestore";

import { CartContext } from "../context/CartContext";

import { db } from "../firebase/config";

import CheckoutForm from "./CheckoutForm";

import CartItem from "./CartItem";

function Cart() {

  const {
    cart,
    clearCart
  } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  if (
    cart.length === 0 &&
    !orderId
  ) {

    return (
      <h2>
        Carrito vacío
      </h2>
    );

  }

  const total = cart.reduce(

    (acc, item) =>

      acc + (
        item.precio *
        item.quantity
      ),

    0

  );

  const createOrder = (

    buyer

  ) => {

    const order = {

      buyer,

      items: cart,

      total

    };

    const ordersRef = collection(
      db,
      "orders"
    );

    addDoc(
      ordersRef,
      order
    )

      .then((doc) => {

        setOrderId(
          doc.id
        );

        clearCart();

      })

      .catch((error) => {

        console.log(
          error
        );

      });

  };

  if (orderId) {

    return (

      <div
        style={{
          padding: "20px"
        }}
      >

        <h2>

          Compra realizada 🎉

        </h2>

        <h3>

          ID:
          {" "}
          {orderId}

        </h3>

      </div>

    );

  }

  return (

    <div
      style={{
        padding: "20px"
      }}
    >

      <h2>

        Mi carrito

      </h2>

      {

        cart.map(

          (item) => (

            <CartItem
              key={item.id}
              item={item}
            />

          )

        )

      }

      <h2>

        Total:
        {" "}
        ${total}

      </h2>

      <button
        onClick={clearCart}
      >

        Vaciar carrito

      </button>

      <hr />

      <CheckoutForm
        onConfirm={
          createOrder
        }
      />

    </div>

  );

}

export default Cart;