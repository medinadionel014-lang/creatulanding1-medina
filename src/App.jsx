function App() {
  return (
    <BrowserRouter>
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