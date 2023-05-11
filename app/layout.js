import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '../app/components/navbar';

const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: 'Home',
//   description: 'My Web | Home',
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
