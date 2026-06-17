export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold text-yellow-500 mb-8">
        Produse
      </h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="border border-zinc-700 p-4 rounded-lg">
          <h2 className="text-xl font-bold">Real Madrid 2025</h2>
          <p className="text-zinc-400">799 MDL</p>
        </div>

        <div className="border border-zinc-700 p-4 rounded-lg">
          <h2 className="text-xl font-bold">Barcelona 2025</h2>
          <p className="text-zinc-400">799 MDL</p>
        </div>

        <div className="border border-zinc-700 p-4 rounded-lg">
          <h2 className="text-xl font-bold">Argentina 2025</h2>
          <p className="text-zinc-400">899 MDL</p>
        </div>
      </div>
    </main>
  );
}