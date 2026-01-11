const KEY = "favorites"

export const getFavorites = (): number[] =>
  JSON.parse(localStorage.getItem(KEY) || "[]")

export const saveFavorites = (ids: number[]) =>
  localStorage.setItem(KEY, JSON.stringify(ids))
