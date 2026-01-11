"use client"
interface Props {
  enabled: boolean
  onToggle: () => void
}

export default function FavoritesFilter({ enabled, onToggle }: Props) {
  return (
    <button
      onClick={onToggle}
      aria-pressed={enabled}
      className={`
        border rounded-md px-3 py-2 text-sm font-medium
        transition-colors
        ${
          enabled
            ? "bg-red-500 text-white border-red-500"
            : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
        }
      `}
    >
      ❤️ Favorites
    </button>
  )
}
