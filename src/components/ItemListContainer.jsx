import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAutos } from "../data/autos";
import ItemList from "./ItemList";

function ItemListContainer() {
  const [autos, setAutos] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getAutos().then(data => {
      if (categoryId) {
        setAutos(data.filter(a => a.categoria === categoryId));
      } else {
        setAutos(data);
      }
    });
  }, [categoryId]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Catálogo de Autos</h2>
      <ItemList items={autos} />
    </div>
  );
}

export default ItemListContainer;