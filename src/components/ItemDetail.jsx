import ItemCount from "./ItemCount";

function ItemDetail({ auto }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>{auto.nombre}</h2>
      <img src={auto.img} width="300" />
      <p>{auto.descripcion}</p>
      <h3>${auto.precio}</h3>

      <ItemCount />
    </div>
  );
}

export default ItemDetail;