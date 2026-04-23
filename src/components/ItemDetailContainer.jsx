import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAutoById } from "../data/autos";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [auto, setAuto] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    getAutoById(itemId).then(setAuto);
  }, [itemId]);

  return auto ? <ItemDetail auto={auto} /> : <p>Cargando...</p>;
}

export default ItemDetailContainer;