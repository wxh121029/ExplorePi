import './globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Head from './head'

config.autoAddCss = false

export default function RootLayout({ children }) {
  
  return (
    <html>
      <Head />
      
      <body>{children}</body>
    </html>
  )
}