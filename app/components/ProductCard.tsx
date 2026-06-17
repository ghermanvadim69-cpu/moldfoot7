type ProductProps = {
  name: string;
  price: string;
  image: string;
};

export default function ProductCard({
  name,
  price,
  image,
}: ProductProps) {
  return (
    <div className="bg-zinc-900 rounded-xl p-5 border border-zinc-800">

      <img
        src={image}
        alt={name}
        className="w-full h-80 object-cover rounded-lg"
      />

      <h2 className="text-xl font-bold mt-4">
        {name}
      </h2>

      <p className="text-yellow-500 mt-2">
        {price} MDL
      </p>

      <button className="mt-4 w-full bg-yellow-500 text-black py-3 rounded-lg font-bold">
        Adaugă în coș
      </button>

    </div>
  );
}