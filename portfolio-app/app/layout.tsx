
import type { Metadata } from 'next';
import './styles/css/globals.css';
import './styles/scss/style.scss';

export const metadata: Metadata = {
  title: 'Daniel Enagu',
  description: 'Daniel Portfolio Website'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
