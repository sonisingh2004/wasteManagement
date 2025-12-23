// src/layouts/MainLayout.jsx
import { Outlet } from "react-router-dom";
import FloatingChat from "../components/FloatingChat";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className="min-h-screen ">
        <Outlet />
      </main>
      <FloatingChat/>
      <Footer />
    </>
  );
}
