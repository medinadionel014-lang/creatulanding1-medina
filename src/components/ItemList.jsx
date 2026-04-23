import Item from "./Item";

function ItemList({ items }) {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {items.map(auto => (
        <Item key={auto.id} auto={auto} />
      ))}
    </div>
  );
}

export default ItemList;