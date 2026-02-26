import Card from "./Card";

const products = [
  { id: 1, name: "Widget", price: 9.99 },
  { id: 2, name: "Gadget", price: 14.99 },
  { id: 3, name: "Thingamajig", price: 4.99 }
];

export default function ProductList() {
  return (
    <>
      {products.map(product => (
        <Card key={product.id} title={product.name}>
          <p>Price: ${product.price}</p>
        </Card>
      ))}
    </>
  );
}