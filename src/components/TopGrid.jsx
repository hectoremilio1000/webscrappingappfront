export default function TopGrid({ products }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
      {products.map((p) => (
        <article key={p.id} className="border rounded-xl p-3 shadow-sm">
          <img
            src={p.thumbnail}
            alt={p.title}
            className="h-28 mx-auto object-contain"
          />
          <h3 className="mt-1 text-xs font-medium line-clamp-2">{p.title}</h3>
          <p className="text-green-700 font-semibold text-sm">
            ${p.price.toLocaleString()}
          </p>
        </article>
      ))}
    </div>
  );
}
