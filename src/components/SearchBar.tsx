interface Props {
  value: string
  onChange: (value: string) => void
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={value}
      onChange={e => onChange(e.target.value)}
      className="border rounded-md px-3 py-2 w-full sm:w-64"
      aria-label="Search products"
    />
  )
}
