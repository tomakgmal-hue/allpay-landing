export const metadata = {
  title: "AllPay — Global Payments",
  description: "AllPay English Homepage",
};
import "./globals.css";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
