import './globals.css'

export const metadata = {
  title: 'KCS',
  description: 'An online shoping app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
