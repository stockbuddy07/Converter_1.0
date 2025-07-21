// app/layout.js
import '/styles/globals.css'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Converter_1.0',
  description: 'Free online tools',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}