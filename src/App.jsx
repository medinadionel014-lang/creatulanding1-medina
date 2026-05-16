import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter basename="/creatulanding1-medina">
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />

        <Route
          path="/category/:categoria"
          element={<ItemListContainer />}
        />

        <Route
          path="/item/:id"
          element={<ItemDetailContainer />}
        />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;