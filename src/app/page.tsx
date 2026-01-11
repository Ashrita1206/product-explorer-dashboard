"use client"

import { useEffect, useState } from "react"
import ProductExplorer from "@/components/ProductExplorer"
import { Product } from "@/types/product"

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products")
        const data = await res.json()
        setProducts(data)
      } catch {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  if (loading) return <p className="p-6">Loading products...</p>

  if (error)
    return (
      <p className="p-6 text-red-500">
        Failed to load products.
      </p>
    )

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        Product Explorer
      </h1>
      <ProductExplorer products={products} />
    </main>
  )
}
