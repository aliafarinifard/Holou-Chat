// ** Next
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// ** Toaster Context
import ToasterContext from "./context/ToasterContext";

// ** Auth Context
import AuthContext from "./context/AuthContext";

// ** Components
import ActiveStatus from "./components/ActiveStatus";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Holou Chat",
  description: "Messenger Chat App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <ToasterContext />
          <ActiveStatus />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
