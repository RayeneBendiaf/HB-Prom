"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Smartphone, Menu, X } from "lucide-react";

export default function Navbar() {
  const [showTopBar, setShowTopBar] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  // 🔹 Détection du scroll
  useEffect(() => {
    const handleScroll = () => setShowTopBar(window.scrollY < 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === "ACCUEIL") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setMenuOpen(false);
      return;
    }

    if (id === "CONTACT") {
      const footer = document.querySelector("footer");
      if (footer) {
        const yOffset = -25;
        const y = footer.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
      setMenuOpen(false);
      return;
    }

    const section = document.getElementById(id);
    if (section) {
      const yOffset = -25;
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* 🔹 Top Bar Desktop */}
      <div
        className={`hidden lg:flex bg-[var(--primary)] cursor-default text-white justify-between items-center px-10 lg:px-20 py-3 transition-all duration-500 ${
          showTopBar
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full h-0 overflow-hidden"
        }`}
      >
        <p className="text-white/60 tracking-wide text-lg lg:text-xl">
          Bâtisseur de père en fils
        </p>
        <div className="flex items-center gap-5 text-white/70">
          <Smartphone className="w-7 h-7" />
          <span className="text-white/50">
            Appelez-nous pour plus d&apos;informations
          </span>
          <span className="font-bold text-xl border-l-3 border-white/40 pl-4">
            0555.12.34.56
          </span>
        </div>
      </div>

      {/* 🔹 Navbar principale */}
      <nav
        className={`fixed left-0 w-full bg-[var(--primary)] shadow-md transition-all duration-500 ${
          showTopBar ? "lg:top-[52px]" : "top-0"
        }`}
      >
        <div className="flex items-center justify-between md:px-20 px-6 py-3">
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo/logo2.png"
              alt="Logo HB Prom"
              width={220}
              height={60}
              className="w-40 sm:w-52 md:w-60 h-auto cursor-pointer"
            />
          </Link>

          {/* 🔹 Menu Desktop */}
          <div className="hidden lg:flex bg-[var(--primary)] rounded-full  gap-8">
            {[
              "ACCUEIL",
              "QUI SOMMES NOUS",
              "PROJETS RÉALISÉS",
              "PROJETS EN COURS",
              "CONTACT",
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-white cursor-pointer font-medium capitalize hover:text-[var(--secondary)] transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </div>

          {/* 🔹 Burger Menu (mobile) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white "
          >
            {<Menu size={32} />}
          </button>
        </div>

        {/* 🔹 Menu Mobile (slide depuis la droite) */}
        <div
          className={`fixed top-0 right-0 h-screen w-3/4 sm:w-2/3 bg-[var(--primary)] flex flex-col pt-20 pb-10 px-6 transition-transform duration-500 ease-in-out md:hidden shadow-xl ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {<X size={40} className="fixed top-0 left-0 m-5 text-white" />}
          </button>

          {[
            "ACCUEIL",
            "QUI SOMMES NOUS",
            "PROJETS RÉALISÉS",
            "PROJETS EN COURS",
            "CONTACT",
          ].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-white text-lg py-4 border-b border-white/20 text-left font-medium hover:text-[var(--secondary)] transition-colors duration-300"
            >
              {item}
            </button>
          ))}
        </div>

        {/* 🔹 Overlay pour fermer le menu quand on clique à côté */}
        {menuOpen && (
          <div
            className="inset-0 md:hidden"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}
      </nav>
    </header>
  );
}
