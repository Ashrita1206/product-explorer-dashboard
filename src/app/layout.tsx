import "./globals.css"
import ThemeToggle from "@/components/ThemeToggle"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function () {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  }
})();
`,
          }}
        />
      </head>

      <body
        className="
          bg-white
          text-black
          dark:bg-gray-900
          dark:text-gray-100
          transition-colors
        "
      >
        <header className="p-4 border-b dark:border-gray-700 flex justify-end">
          <ThemeToggle />
        </header>

        {children}
      </body>
    </html>
  )
}
