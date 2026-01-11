"use client"

import { useTheme } from "@/hooks/useTheme"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="
        border
        rounded-md
        px-3
        py-2
        text-sm
        hover:bg-gray-100
        dark:hover:bg-gray-800
      "
    >
      {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
    </button>
  )
}
