import Sidebar from "../_components/sidebar";
import Navbar from "../_components/navbar";

export default function SaasLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <div className="w-full bg-[#0A0F1D] text-white">
          {children}
          </div>
        </div>
      </body>
    </html>
  );
}
