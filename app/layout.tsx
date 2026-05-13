// Root layout simply passes children through to locale-specific layouts
// The actual HTML structure is in app/[locale]/layout.tsx

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
