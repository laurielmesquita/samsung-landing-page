import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Samsung Teresina | Produtos com Desconto Exclusivo - Autorizada Samsung",
  description: "Compre produtos Samsung com desconto exclusivo na autorizada de Teresina. Galaxy S25 Ultra, tablets, smartwatches e mais. Garantia oficial Samsung.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
