// Simple API route returning sample products
import type { NextApiRequest, NextApiResponse } from 'next'

const products = [
  { id: 1, name: 'Classic T-Shirt', description: 'Comfortable cotton t-shirt', price: 1999 },
  { id: 2, name: 'Sneakers', description: 'Stylish everyday sneakers', price: 5999 },
  { id: 3, name: 'Coffee Mug', description: 'Ceramic mug, 350ml', price: 999 }
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(products)
}
