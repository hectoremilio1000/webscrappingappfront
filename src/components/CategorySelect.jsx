export default function CategorySelect({ categories, value, onChange }) {
  return (
    <select
      className="border p-2 rounded-md"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {categories.map((c) => (
        <option key={c}>{c}</option>
      ))}
    </select>
  );
}
