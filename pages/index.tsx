import Link from 'next/link'
import { GetStaticProps } from 'next'

type Product = {
  id: number
  name: string
  description: string
  price: number
}

export default function Home({ products }: { products: Product[] }) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">M-kard — Shop</h1>
        <p className="text-gray-600">Sample product listing</p>
      </header>

      <main>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {products.map((p) => (
            <li key={p.id} className="bg-white p-4 rounded shadow">
              <h2 className="font-semibold text-lg">{p.name}</h2>
              <p className="text-sm text-gray-600">{p.description}</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="font-medium">${(p.price / 100).toFixed(2)}</span>
                <Link href={`/product/${p.id}`} className="text-indigo-600">View</Link>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // For now read from the API route at build time
  const res = await fetch('http://localhost:3000/api/products')
  const products = await res.json()
  return { props: { products } }
}
