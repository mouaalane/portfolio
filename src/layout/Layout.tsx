import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BG } from "../lib/constants";

// ── Root layout ───────────────────────────────────────────────────────────────
export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: BG }}>
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
