export const metadata = {
  title: "NiveshMitra",
  description: "AI Investment Companion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          background: "#0f172a", // 🔥 DARK BACKGROUND FIX
          color: "white",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}