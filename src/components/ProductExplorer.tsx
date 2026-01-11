"use client"

import { useMemo, useState } from "react"
import { Product } from "@/types/product"
import ProductGrid from "./ProductGrid"
import SearchBar from "./SearchBar"
import CategoryFilter from "./CategoryFilter"
import FavoritesFilter from "./FavoritesFilter"
import { useFavorites } from "@/hooks/useFavorites"

interface Props {
  products: Product[]
}

export default function ProductExplorer({ products }: Props) {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("all")
  const [showFavorites, setShowFavorites] = useState(false)

  const { favorites } = useFavorites()

  const categories = useMemo(() => {
    if (!products.length) return ["all"]
    return ["all", ...Array.from(new Set(products.map(p => p.category)))]
  }, [products])

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(search.toLowerCase())

      const matchesCategory =
        category === "all" || product.category === category

      const matchesFavorites =
        !showFavorites || favorites.includes(product.id)

      return matchesSearch && matchesCategory && matchesFavorites
    })
  }, [products, search, category, showFavorites, favorites])

  return (
    <>
      <div className="flex flex-wrap gap-4 mb-6">
        <SearchBar value={search} onChange={setSearch} />

        <CategoryFilter
          categories={categories}
          value={category}
          onChange={setCategory}
        />

        <FavoritesFilter
          enabled={showFavorites}
          onToggle={() => setShowFavorites(prev => !prev)}
        />
      </div>

      {filteredProducts.length === 0 ? (
        <p className="text-gray-500">
          No products found.
        </p>
      ) : (
        <ProductGrid products={filteredProducts} />
      )}
    </>
  )
}
