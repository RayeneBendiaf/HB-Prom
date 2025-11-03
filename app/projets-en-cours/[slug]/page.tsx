import Image from "next/image";
import { notFound } from "next/navigation";

// Données simulées (plus tard tu pourras les importer d'une DB)
const projets = [
  {
    slug: "residence-nesrine",
    titre: "Résidence Nesrine",
    description:
      "Appartements haut standing à Oran, livraison prévue en 2026. Les appartements sont modernes, spacieux et lumineux, avec des finitions de qualité supérieure.",
    image: "/images/caroussel1.jpg",
    details: [
      "Appartements F3, F4 et F5 disponibles",
      "Vue mer et montagnes",
      "Ascenseurs, parkings et espaces verts",
      "Accès sécurisé 24h/24",
    ],
  },
];

// ✅ Fichier Server Component — pas besoin de "use client"
export default async function ProjetDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ✅ Next.js 16 : on doit attendre la Promise
  const { slug } = await params;

  const projet = projets.find((p) => p.slug === slug);
  if (!projet) return notFound();

  return (
    <section className=" bg-white">
      {/* Image principale */}
      <div className="relative w-full h-[80vh] md:h-[80vh] overflow-hidden ">
        <Image
          src={projet.image}
          alt={projet.titre}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-3xl md:text-7xl font-bold text-white uppercase tracking-wide">
            {projet.titre}
          </h1>
        </div>
      </div>

      {/* Détails du projet */}
      <div className="mt-10 pb-20 md:mt-16 px-6 md:max-w-4xl mx-auto text-gray-700">
        <p className="text-lg mb-6 leading-relaxed">{projet.description}</p>

        <ul className="space-y-3 list-disc pl-5">
          {projet.details.map((detail, i) => (
            <li key={i} className="text-gray-600">
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
