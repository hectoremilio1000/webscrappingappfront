import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect, useState } from "react";
import CategorySelect from "./components/CategorySelect";
import CategorySection from "./components/CategorySection";

const API = import.meta.env.VITE_API;

export default function App() {
  const [sections, setSections] = useState([]); // [{category, products}]
  const [categories, setCategories] = useState(["Todas"]);
  const [selected, setSelected] = useState("Todas");

  // Fetch inicial
  useEffect(() => {
    fetch(`${API}/mas-vendidos`)
      .then((r) => r.json())
      .then((data) => {
        setSections(data);
        setCategories(["Todas", ...data.map((sec) => sec.category)]);
      })
      .catch(console.error);
  }, []);

  // Helper para filtrar
  const sectionsToShow =
    selected === "Todas"
      ? sections
      : sections.filter((sec) => sec.category === selected);

  return (
    <main className="max-w-6xl mx-auto p-6 font-sans">
      <h1 className="text-2xl font-bold mb-6">
        Más vendidos – Mercado Libre 🇵🇪
      </h1>

      <CategorySelect
        categories={categories}
        value={selected}
        onChange={setSelected}
      />

      {/* Renderiza 1 o N secciones con slider */}
      {sectionsToShow.map((sec) => (
        <CategorySection key={sec.category} section={sec} />
      ))}
    </main>
  );
}
