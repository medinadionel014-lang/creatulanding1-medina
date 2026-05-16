import { useState, useContext } from "react";

import { Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";

import ItemCount from "./ItemCount";

function ItemDetail({ auto }) {

  const [agregado, setAgregado] = useState(false);

  const { addItem } = useContext(CartContext);

  const onAdd = (cantidad) => {

    addItem(auto, cantidad);

    setAgregado(true);

  };

  return (

    <div style={{ padding: "20px" }}>

      <h2>{auto.nombre}</h2>

      <img
        src={auto.img}
        alt={auto.nombre}
        width="300"
      />

      <p>{auto.descripcion}</p>

      <h3>${auto.precio}</h3>

      {

        !agregado

        ?

        <ItemCount
          stock={auto.stock}
          onAdd={onAdd}
        />

        :

        <Link to="/cart">

          <button>
            Ir al carrito
          </button>

        </Link>

      }

    </div>

  );
}

export default ItemDetail;