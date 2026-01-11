import { Product } from "@/types/product"

const BASE_URL = "https://fakestoreapi.com"

/** Get ALL products */
export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/products`, {
    cache: "no-store"
  })

  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }

  return res.json()
}

/** Get SINGLE product */
export async function fetchProduct(id: string): Promise<Product> {
  if (!id) {
    throw new Error("Product ID is missing")
  }

  const res = await fetch(
    `https://fakestoreapi.com/products/${id}`,
    { cache: "no-store" }
  )

  const text = await res.text()

  if (!res.ok) {
    console.error("API error response:", text)
    throw new Error(`Failed to fetch product: ${res.status}`)
  }

  if (!text) {
    throw new Error("Empty response from API")
  }

  return JSON.parse(text) as Product
}

