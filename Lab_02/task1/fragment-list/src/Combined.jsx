import ItemList from "./ItemList";

const items = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Cherry" }
];

export default function Combined() {
  return (
    <>
      <h2>Fruit List</h2>
      <ItemList />
      <p>Total: {items.length} items</p>
    </>
  );
}