import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import {
  doc,
  getDoc
} from "firebase/firestore";

import { db } from "../firebase/config";

import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {

  const [auto, setAuto] = useState(null);

  const { id } = useParams();

  useEffect(() => {

    const docRef = doc(
      db,
      "products",
      id
    );

    getDoc(docRef)

      .then((snapshot) => {

        if (
          snapshot.exists()
        ) {

          setAuto({

            id:
            snapshot.id,

            ...snapshot.data()

          });

        }

      })

      .catch((error) => {

        console.log(
          error
        );

      });

  }, [id]);

  if (!auto) {

    return (

      <h2>

        Cargando...

      </h2>

    );

  }

  return (

    <ItemDetail
      auto={auto}
    />

  );

}

export default ItemDetailContainer;