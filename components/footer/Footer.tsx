"use client";

import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Youtube,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  // 🧭 Fonction de scroll fluide avec décalage comme dans la navbar
  const scrollToSection = (id: string) => {
    if (id === "ACCUEIL") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (id === "CONTACT") {
      const footer = document.querySelector("footer");
      if (footer) {
        const yOffset = -25;
        const y = footer.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
      return;
    }

    // 🔹 Pour les autres sections
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = window.innerWidth < 768 ? 70 : 100;
      const y =
        section.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer id="CONTACT">
      <div className="w-full mx-auto grid grid-cols-1">
        {/* === Contact === */}
        <div
          className="text-sm cursor-default text-white grid grid-cols-1 md:grid-cols-3 gap-10 px-5 md:px-10 py-10 md:py-15 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/banniere-contact.jpg')" }}
        >
          {[
            {
              icon: (
                <MapPin className="text-[var(--secondary)] w-12 h-12 shrink-0" />
              ),
              title: "Siège social",
              content: (
                <>
                  Adresse :{" "}
                  <span className="text-[var(--secondary)]">
                    Lot H6/01, Akid Lotfi (Près du CEM Zeche Tayeb), Oran
                  </span>
                </>
              ),
            },
            {
              icon: (
                <Phone className="text-[var(--secondary)] w-12 h-12 shrink-0" />
              ),
              title: "Téléphone",
              content: (
                <>
                  Pour plus d&apos;informations, appelez-nous au :{" "}
                  <span className="cursor-text text-[var(--secondary)]">
                    0550.92.56.44
                  </span>
                </>
              ),
            },
            {
              icon: (
                <Mail className="text-[var(--secondary)] w-12 h-12 shrink-0" />
              ),
              title: "Envoyez-nous un message",
              content: (
                <>
                  Si vous avez des questions, contactez-nous sur :{" "}
                  <span className="text-[var(--secondary)] cursor-text">
                    contact@hbprom.net
                  </span>
                </>
              ),
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 py-7 px-5 bg-[var(--primary)] opacity-80 rounded-sm h-[180px] sm:h-[200px] md:h-auto"
            >
              {item.icon}
              <div className="flex flex-col justify-center">
                <h1 className="text-xl font-semibold mb-1">{item.title}</h1>
                <p className="text-white text-sm leading-relaxed">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* === Google Maps === */}
        <div className="w-full h-90 overflow-hidden">
          <iframe
            title="Localisation HB Prom"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3150.2705426082644!2d-0.5874144!3d35.7233718!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7e62bbfcf840db%3A0xe9dbdd760d9d3acf!2sHB+PROM!5e0!3m2!1sfr!2sdz!4v0000000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* === Logo + Navigation + Réseaux === */}
        <div className="bg-[var(--primary)] text-white text-center pt-30 flex flex-col items-center">
          <Link href="/" className="flex items-center">
            <img
              src="/logo/logo-hb-sm.png"
              alt="HB Prom Logo"
              className="w-40 mb-10"
            />
          </Link>

          {/* Réseaux sociaux */}
          <div className="flex items-center gap-5 mb-10">
            <a
              href="https://www.facebook.com/HBPROMEURL/"
              className="hover:text-[var(--secondary)] transition"
            >
              <Facebook size={30} />
            </a>
            <a
              href="https://www.instagram.com/hbprom.eurl/"
              className="hover:text-[var(--secondary)] transition"
            >
              <Instagram size={30} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCvCCxqKuXaj_VvzlbRXIj6Q/featured"
              className="hover:text-[var(--secondary)] transition"
            >
              <Youtube size={30} />
            </a>
            <a
              href="mailto:contact@hbprom.net"
              className="hover:text-[var(--secondary)] transition"
            >
              <Mail size={30} />
            </a>
          </div>

          <div>
            <p className="text-[var(--secondary)] cursor-default mb-10 text-lg">
              041.87.02.56 / 0550.92.56.44
            </p>
          </div>

          {/* === Navigation du footer === */}
          <div className="mb-20">
            <ul className="md:flex md:space-x-7 space-y-5 text-sm">
              {[
                "ACCUEIL",
                "QUI SOMMES NOUS",
                "PROJETS RÉALISÉS",
                "PROJETS EN COURS",
                "CONTACT",
              ].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="hover:text-[var(--secondary)] cursor-pointer transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-[var(--secondary)] cursor-default py-5 text-center text-xs md:text-sm">
            © {new Date().getFullYear()} Copyrights HB Prom. Tous droits
            réservés.
          </div>
        </div>
      </div>
    </footer>
  );
}
