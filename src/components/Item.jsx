import { Link } from "react-router-dom";

function Item({ auto }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", width: "250px" }}>
      <img src={auto.img} alt={auto.nombre} width="100%" />
      <h3>{auto.nombre}</h3>
      <p>${auto.precio}</p>

      <Link to={`/item/${auto.id}`}>
        <button>Ver detalle</button>
      </Link>
    </div>
  );
}

export default Item;