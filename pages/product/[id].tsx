import { GetStaticPaths, GetStaticProps } from 'next'

type Product = {
  id: number
  name: string
  description: string
  price: number
}

export default function ProductPage({ product }: { product: Product | null }) {
  if (!product) return <p className="p-6">Product not found</p>
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="mt-2 text-gray-700">{product.description}</p>
      <p className="mt-4 font-medium">Price: ${(product.price / 100).toFixed(2)}</p>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('http://localhost:3000/api/products')
  const products: Product[] = await res.json()
  const paths = products.map((p) => ({ params: { id: String(p.id) } }))
  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id
  const res = await fetch(`http://localhost:3000/api/products`)
  const products: Product[] = await res.json()
  const product = products.find((p) => String(p.id) === String(id)) || null
  return { props: { product } }
}
