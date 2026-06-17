export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="flex items-center justify-between p-6 border-b border-zinc-800">
        <h1 className="text-3xl font-bold text-yellow-500">
          MoldFoot
        </h1>

        <div className="flex gap-6">
          <a href="/">Acasă</a>
          <a href="/products">Produse</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h2 className="text-6xl font-bold mb-6">
          Tricouri de Fotbal pentru Adevărații Fani
        </h2>

        <p className="text-zinc-400 text-xl mb-10">
          Descoperă cele mai noi tricouri de club și echipe naționale.
        </p>

        <button className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold">
          Vezi Produsele
        </button>
      </section>
    </main>
  );
}