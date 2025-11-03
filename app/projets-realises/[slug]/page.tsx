// app/projets-realises/[slug]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";

const projets = [
  {
    slug: "residence-nour",
    titre: "Résidence Nour",
    description:
      "Un projet résidentiel moderne situé au cœur d'Oran, alliant confort et élégance.",
    image: "/images/caroussel1.jpg",
  },
  {
    slug: "residence-malek",
    titre: "Résidence Malak",
    description:
      "Des appartements spacieux et lumineux entourés d'espaces verts et d'équipements modernes.",
    image: "/images/caroussel2.jpg",
  },
];

export default async function ProjetPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ✅ On attend la résolution de params
  const projet = projets.find((p) => p.slug === slug);

  if (!projet) return notFound();

  return (
    <main className=" bg-white">
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
      <div className="mt-10 pb-20 md:mt-16 px-6 md:max-w-4xl mx-auto text-gray-700">
        <p className="text-lg mb-6 leading-relaxed">{projet.description}</p>
      </div>
    </main>
  );
}
