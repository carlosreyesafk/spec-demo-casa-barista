export const metadata = {
  title: 'Casa Barista & Co | Café de especialidad',
  description: 'Casa Barista & Co: café de especialidad con tostaduría propia, métodos artesanales y cocina 100% gluten free. Dos sedes: Plaza LMP y Zona Colonial.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
