import { fetchProducts } from "@/lib/api"
import ProductExplorer from "@/components/ProductExplorer"

export default async function HomePage() {
  const products = await fetchProducts()

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        Product Explorer
      </h1>

      <ProductExplorer products={products} />
    </main>
  )
}
