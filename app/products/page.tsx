import ProductCard from "../components/ProductCard";

export default function ProductsPage() {

  const products = [
    {
      name: "Real Madrid 2025",
      price: "799",
      image: "/real.jpg",
    },
    {
      name: "Barcelona 2025",
      price: "799",
      image: "/barca.jpg",
    },
    {
      name: "Argentina 2025",
      price: "899",
      image: "/argentina.jpg",
    },
  ];


  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold text-yellow-500 mb-10">
        Produse
      </h1>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {products.map((product) => (
          <ProductCard
            key={product.name}
            {...product}
          />
        ))}

      </div>

    </main>
  );
}