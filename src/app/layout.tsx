import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Melio',
  description: 'Melio Web App',
  icons: {
    icon: '/favicon.ico',
  },

  keywords: [
    "Melio",
    "melio login",
    "melio payments",
    "melio payment",
    "melio sign in",
    "melio app",
    "melio pay",
    "melio melio",
  ],

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
