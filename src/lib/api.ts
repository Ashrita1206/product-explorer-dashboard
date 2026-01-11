import { Product } from "@/types/product"

const BASE_URL = "https://fakestoreapi.com"

/** Get ALL products */
export async function fetchProducts(): Promise<Product[]> {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
      headers: {
        "User-Agent": "Mozilla/5.0",
        Accept: "application/json",
      },
    })

    if (!res.ok) {
      console.error("API response not OK:", res.status)
      return []
    }

    const data = await res.json()

    if (!Array.isArray(data)) return []

    return data
  } catch (error) {
    console.error("Fetch products failed:", error)
    return []
  }
}



/** Get SINGLE product */
export async function fetchProduct(id: string) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
      cache: "no-store",
      headers: {
        "User-Agent": "Mozilla/5.0",
        Accept: "application/json",
      },
    })

    if (!res.ok) return null
    return await res.json()
  } catch {
    return null
  }
}



