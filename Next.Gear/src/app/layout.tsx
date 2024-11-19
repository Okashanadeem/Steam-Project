import Navbar from '@/components/Navbar';
import { AuthProvider } from './context/AuthProvider'; // Import the AuthProvider
import './globals.css';
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Wrap the entire app in AuthProvider */}
        <AuthProvider>
          <Navbar />
          {children}
          <Footer/>
        </AuthProvider>
      </body>
    </html>
  );
}
