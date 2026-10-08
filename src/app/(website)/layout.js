import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Header/Navbar";

export default function RootLayout({ children }) {
  return (
    <div className="min-h-full flex flex-col">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
