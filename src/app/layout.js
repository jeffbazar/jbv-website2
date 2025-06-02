import './globals.css'

export const metadata = {
  title: 'JBV Capital',
  description: 'Backing Tomorrow\'s Software Leaders Today',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
