import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-black text-white border-b border-zinc-800">

      <Link 
        href="/"
        className="text-3xl font-bold text-yellow-500"
      >
        MoldFoot
      </Link>

      <div className="flex gap-8">
        <Link href="/">
          Acasă
        </Link>

        <Link href="/products">
          Produse
        </Link>

        <Link href="/contact">
          Contact
        </Link>
      </div>

    </nav>
  );
}