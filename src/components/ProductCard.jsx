export default function ProductCard({ p }) {
  return (
    <article className="border rounded-xl p-4 shadow hover:shadow-md transition">
      <img
        src={p.thumbnail}
        alt={p.title}
        className="h-40 object-contain mx-auto"
      />
      <h3 className="mt-2 text-sm font-medium line-clamp-2">{p.title}</h3>
      <p className="text-green-700 font-semibold">
        ${p.price.toLocaleString()}
      </p>
      <p className="text-xs text-gray-500">Vendidos: {p.sold_quantity}</p>
      <a
        href={p.permalink}
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-2 text-blue-600 underline"
      >
        Ver en ML
      </a>
    </article>
  );
}
