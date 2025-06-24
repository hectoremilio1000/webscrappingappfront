export function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="slick-arrow slick-next !right-0 z-10 bg-gray-200 hover:bg-gray-300 rounded-full p-2 -mr-4"
    >
      ›
    </button>
  );
}

export function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="slick-arrow slick-prev !left-0 z-10 bg-gray-200 hover:bg-gray-300 rounded-full p-2 -ml-4"
    >
      ‹
    </button>
  );
}
