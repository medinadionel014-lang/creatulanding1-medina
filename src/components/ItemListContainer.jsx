import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";

import { db } from "../firebase/config";

import ItemList from "./ItemList";

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);

  const { categoria } = useParams();

  useEffect(() => {

    const productosRef = collection(
      db,
      "products"
    );

    getDocs(productosRef)

      .then((resp) => {

        let data = resp.docs.map(

          (doc) => ({

            ...doc.data(),

            id: doc.id

          })

        );

        if (categoria) {

          data = data.filter(

            (prod) =>

              prod.categoria === categoria

          );

        }

        setProductos(data);

      })

      .catch((error) => {

        console.log(error);

      });

  }, [categoria]);

  return (

    <div>

      <h2>

        {

          categoria

          ?

          categoria

          :

          "Todos los productos"

        }

      </h2>

      {

        productos.length > 0

        ?

        <ItemList
          items={productos}
        />

        :

        <h3>
          Cargando...
        </h3>

      }

    </div>

  );

};

export default ItemListContainer;