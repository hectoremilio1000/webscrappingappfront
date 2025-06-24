export default function ProductCard({ p }) {
  return (
    <article className="border rounded-xl p-3 m-2 shadow hover:shadow-md">
      <img
        src={p.image}
        alt={p.title}
        className="h-32 mx-auto object-contain"
      />

      <h3 className="mt-2 text-xs font-medium line-clamp-2">{p.title}</h3>

      <p className="text-green-700 font-semibold text-sm">{p.price}</p>
      {p.old_price && (
        <p className="text-xs line-through text-gray-500">{p.old_price}</p>
      )}

      <a
        href={p.link}
        target="_blank"
        rel="noreferrer"
        className="block mt-2 text-blue-600 underline text-xs text-center"
      >
        Ver en ML
      </a>
    </article>
  );
}
