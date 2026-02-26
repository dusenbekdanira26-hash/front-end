import FragmentLayout from "./FragmentLayout";
import Combined from "./Combined";
import Section from "./Section";
import ProductList from "./ProductList";

function App() {
  return (
    <>
      {/* Task 1 */}
      <FragmentLayout />
      <Combined />

      {/* Task 2 */}
      <Section title="Products">
        <ProductList />
      </Section>
    </>
  );
}

export default App;
