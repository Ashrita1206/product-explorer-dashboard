"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Product } from "@/types/product"
import Image from "next/image"

export default function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {
    async function loadProduct() {
      const res = await fetch(
        `https://fakestoreapi.com/products/${id}`
      )
      const data = await res.json()
      setProduct(data)
    }

    loadProduct()
  }, [id])

  if (!product) return <p className="p-6">Loading...</p>

 return (
  <div className="p-6 max-w-3xl mx-auto">
    <Image
      src={product.image}
      alt={product.title}
      width={300}
      height={300}
      className="mx-auto h-64 object-contain"
      priority
    />

    <h1 className="text-2xl font-bold mt-4">
      {product.title}
    </h1>

    <p className="mt-2">{product.description}</p>

    <p className="font-semibold mt-2">
      ${product.price}
    </p>
  </div>
)
}
