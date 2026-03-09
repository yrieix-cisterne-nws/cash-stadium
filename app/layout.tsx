import type { Metadata } from "next";
import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cash Stadium",
  description: "Stadium cash generation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div className="flex flex-col min-h-screen bg-[#0D1117]">
          <Header />
          <main className="flex justify-center min-h-auto grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}