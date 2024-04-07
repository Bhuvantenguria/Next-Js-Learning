import { Inter } from "next/font/google";
import "./globals.css";
import SessionProvider from './Componenets/SessionGiver'
import { getServerSession } from "next-auth";
import Navbar from "./Componenets/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const session = getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session = {session}>
          <Navbar/>
          {children}
        </SessionProvider></body>
    </html>
  );
}
