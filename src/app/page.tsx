import { fetchProducts } from "@/lib/api"
import ProductExplorer from "@/components/ProductExplorer"

export default async function HomePage() {
  const products = await fetchProducts()

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        Product Explorer
      </h1>

      {products.length === 0 ? (
        <p className="text-gray-500">
          Unable to load products at the moment.
        </p>
      ) : (
        <ProductExplorer products={products} />
      )}
    </main>
  )
}
