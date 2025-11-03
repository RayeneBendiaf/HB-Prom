"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const projets = [
  {
    id: 1,
    slug: "residence-nour",
    titre: "Résidence Nour",
    description:
      "Un projet résidentiel moderne situé au cœur d'Oran, alliant confort et élégance.",
    image: "/images/caroussel1.jpg",
  },
  {
    id: 2,
    slug: "residence-malek",
    titre: "Résidence Malak",
    description:
      "Des appartements spacieux et lumineux entourés d'espaces verts et d'équipements modernes.",
    image: "/images/caroussel2.jpg",
  },
];

export default function NosProjets() {
  const [isMobile, setIsMobile] = useState(false);

  // ✅ On attend le montage du client avant d’utiliser window
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="PROJETS RÉALISÉS"
      className="py-16 bg-gray-100 flex flex-col items-center overflow-x-hidden"
    >
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold cursor-default text-[var(--primary)] uppercase tracking-wide">
          Projets réalisés
        </h2>
        <div className="w-24 h-1 bg-[var(--primary)] mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 gap-16 px-6 md:px-20 w-full ">
        {projets.map((projet, index) => (
          <motion.a
            key={projet.id}
            href={`/projets-realises/${projet.slug}`}
            className="group block overflow-hidden shadow-md bg-white hover:bg-[var(--primary)] hover:shadow-xl transition-all duration-500 grid grid-cols-1 md:grid-cols-2"
            initial={{
              opacity: 0,
              x: !isMobile ? (index % 2 === 0 ? -180 : 180) : 0,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {/* Image */}
            <div className="w-full h-56 md:h-64 relative overflow-hidden">
              <Image
                src={projet.image}
                alt={projet.titre}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Texte */}
            <div className="p-6 flex flex-col justify-center text-center md:text-left">
              <h3 className="text-4xl font-semibold text-[var(--primary)] mb-7 group-hover:text-[var(--secondary)] transition-colors">
                {projet.titre}
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base group-hover:text-[var(--secondary)] transition-colors">
                {projet.description}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
