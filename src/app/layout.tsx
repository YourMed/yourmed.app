import './globals.css'

export const metadata = {
  title: 'YourMed App',
  description: 'A Secure Platform for Managing Your Personal Medical Information and Assistance.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
