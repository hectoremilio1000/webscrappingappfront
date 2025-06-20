export default function CategorySelect({ categories, value, onChange }) {
  return (
    <div className="flex gap-4">
      <select
        className="border p-2 rounded-md"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">-- Categoría --</option>
        {categories.map((c) => (
          <option key={c.codigo} value={c.codigo}>
            {c.name}
          </option>
        ))}
      </select>
    </div>
  );
}
