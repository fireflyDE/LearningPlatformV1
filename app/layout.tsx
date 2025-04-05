import "./globals.css";
import NavBar from "@/components/NavBar"; // ✅ Import your NavBar
import FooterHome from "@/components/FooterHome";

export const metadata = {
  title: "LushAiTech",
  description: "Learn new skills and grow",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <FooterHome /> {/* ← footer goes here */}
      </body>
    </html>
  );
}
