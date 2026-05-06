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
          background: "#020c1b",
          color: "white",
          fontFamily: "Arial",
        }}
      >
        {children}
      </body>
    </html>
  );
}