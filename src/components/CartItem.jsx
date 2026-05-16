function CartItem({ item }) {

  return (

    <div
      style={{
        borderBottom: "1px solid gray",
        marginBottom: "20px",
        paddingBottom: "10px"
      }}
    >

      <h3>

        {item.nombre}

      </h3>

      <p>

        Cantidad:
        {" "}
        {item.quantity}

      </p>

      <p>

        Subtotal:
        {" "}
        $

        {

          item.precio *
          item.quantity

        }

      </p>

    </div>

  );

}

export default CartItem;