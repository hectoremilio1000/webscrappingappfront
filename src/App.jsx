import { useEffect, useState } from "react";
import CategorySelect from "./components/CategorySelect";
import ProductCard from "./components/ProductCard";
import TopGrid from "./components/TopGrid";

const API = import.meta.env.VITE_API;

export default function App() {
  // estado
  const [categories, setCategories] = useState([]);
  const [subcats, setSubcats] = useState([]);
  const [selectedCat, setSelectedCat] = useState("");
  const [items, setItems] = useState([]);
  const [top5, setTop5] = useState([]);

  // categorias raíz
  useEffect(() => {
    setCategories([
      { codigo: "MPE1051", name: "Celulares y telefonos" },
      { codigo: "MPE1648", name: "Computación" },
      { codigo: "MPE1747", name: "Accesorios para Vehículos" },
    ]);
  }, []);

  // cada vez que cambie categoría (o sub)
  useEffect(() => {
    if (!selectedCat) return;
    fetch(`${API}/mas-vendidos/${selectedCat}`)
      .then((r) => r.json())
      .then(setItems)
      .catch(console.error);
  }, [selectedCat]);

  return (
    <main className="max-w-6xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-bold mb-4">Tendencias Mercado Libre 🇲🇽</h1>

      {/* TOP-5 */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">🔥 Top 5 más vendidos</h2>
        {/* <TopGrid products={top5} /> */}
      </section>

      {/* Filtros */}
      <section className="mb-6">
        <CategorySelect
          categories={categories}
          value={selectedCat}
          onChange={setSelectedCat}
        />
      </section>

      {/* Grid de la categoría */}
      <section>
        <h2 className="text-xl font-semibold mb-2">
          {selectedCat
            ? "Tendencias de la categoría"
            : "Selecciona una categoría"}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </section>
    </main>
  );
}
