"use client"
import Link from "next/link"
import { Product } from "@/types/product"
import FavoriteToggle from "./FavoriteToggle"

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-lg p-4 hover:shadow">
      <img src={product.image} alt={product.title} className="h-40 mx-auto object-contain" />
      <h2 className="font-semibold mt-2">{product.title}</h2>
      <p className="text-sm text-gray-500">{product.category}</p>
      <p className="font-bold">${product.price}</p>

      <div className="flex justify-between mt-2">
       <Link href={`/products/${product.id}`}>
  View Details
</Link>

        <FavoriteToggle id={product.id} />
      </div>
    </div>
  )
}
