import { fetchProduct } from "@/lib/api"
import { notFound } from "next/navigation"

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export default async function ProductDetail({ params }: PageProps) {
  try {
    const { id } = await params

    const product = await fetchProduct(id)
    if (!product) notFound()

    return (
      <div className="p-6 max-w-3xl mx-auto">
        <img
          src={product.image}
          alt={product.title}
          className="h-64 mx-auto object-contain"
        />

        <h1 className="text-2xl font-bold mt-4">
          {product.title}
        </h1>

        <p className="text-gray-500">{product.category}</p>

        <p className="mt-3">{product.description}</p>

        <p className="text-xl font-semibold mt-4">
          ${product.price}
        </p>
      </div>
    )
  } catch (error) {
    console.error("Product page error:", error)
    notFound()
  }
}
