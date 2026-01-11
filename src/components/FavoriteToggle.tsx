"use client"
import { useFavorites } from "@/hooks/useFavorites"

export default function FavoriteToggle({ id }: { id: number }) {
  const { favorites, toggleFavorite } = useFavorites()
  const isFav = favorites.includes(id)

  return (
    <button
      aria-label="Toggle favorite"
      onClick={() => toggleFavorite(id)}
      className={isFav ? "text-red-500" : "text-gray-400"}
    >
      ♥
    </button>
  )
}
