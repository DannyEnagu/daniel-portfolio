import type { Metadata } from 'next';
import './styles/css/globals.css';
import './styles/scss/style.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
