import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600"],
  display: "swap",
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hillel Access | Fundación Hillel Argentina",
  description:
    "Accedé con prioridad a las mejores oportunidades de Hillel Argentina. Programa de membresía con donación mensual.",
  openGraph: {
    title: "Hillel Access",
    description:
      "Accedé con prioridad a las mejores oportunidades de Hillel Argentina.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" className={`${serif.variable} ${sans.variable}`}>
      <body className="antialiased min-h-screen">{children}</body>
    </html>
  );
}
