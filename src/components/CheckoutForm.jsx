import { useState } from "react";

function CheckoutForm({ onConfirm }) {

  const [nombre, setNombre] = useState("");

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    onConfirm({
      nombre,
      email
    });

  };

  return (

    <form onSubmit={handleSubmit}>

      <h3>Finalizar compra</h3>

      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) =>
          setNombre(e.target.value)
        }
      />

      <br /><br />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <br /><br />

      <button type="submit">

        Finalizar compra

      </button>

    </form>

  );

}

export default CheckoutForm;