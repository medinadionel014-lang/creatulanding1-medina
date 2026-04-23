import { useState } from "react";

function ItemCount() {
  const [cantidad, setCantidad] = useState(1);

  return (
    <div>
      <button onClick={() => setCantidad(cantidad - 1)}>-</button>
      <span style={{ margin: "10px" }}>{cantidad}</span>
      <button onClick={() => setCantidad(cantidad + 1)}>+</button>
    </div>
  );
}

export default ItemCount;
