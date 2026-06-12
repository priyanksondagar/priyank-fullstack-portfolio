import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
})
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
})
const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrains.variable} scroll-smooth`}>
      <body className="bg-[#0a0a0f] text-slate-200 font-body antialiased">
        {children}
      </body>
    </html>
  )
}