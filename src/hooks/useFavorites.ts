"use client"

import { useEffect, useState } from "react"

const STORAGE_KEY = "favorites"

export function useFavorites() {
  const [favorites, setFavorites] = useState<number[]>([])

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      setFavorites(JSON.parse(stored))
    }
  }, [])

  const toggleFavorite = (id: number) => {
    const updated = favorites.includes(id)
      ? favorites.filter(f => f !== id)
      : [...favorites, id]

    setFavorites(updated)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
  }

  return { favorites, toggleFavorite }
}
