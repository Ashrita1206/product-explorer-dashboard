interface Props {
  categories: string[]
  value: string
  onChange: (value: string) => void
}

export default function CategoryFilter({
  categories,
  value,
  onChange,
}: Props) {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      aria-label="Filter by category"
      className="
        border
        rounded-md
        px-3
        py-2
        w-full
        sm:w-48
        bg-white
        text-gray-900
        border-gray-300
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        dark:bg-gray-800
        dark:text-gray-100
        dark:border-gray-600
      "
    >
      {categories.map(category => (
        <option
          key={category}
          value={category}
          className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100"
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </option>
      ))}
    </select>
  )
}
