import type { Metadata } from "next";
import { NavBar } from "@/public/components/NavBar";
import "./globals.css";



export const metadata: Metadata = {
  title: "PWNContracting",
  description: "Get Contractor Advice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col  py-[2%]  items-center main-background`}
      >
        <div className="w-[80%] bg-white">
          <NavBar />
          {children}
          </div>
      </body>
    </html>
  );
}
