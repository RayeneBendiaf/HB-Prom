"use client";

import { useRouter } from "next/navigation";

export default function ProjetCard({ projet }: { projet: any }) {
  const router = useRouter();

  return (
    <div className="grid md:grid-cols-2 mx-6 gap-5 md:gap-20 cursor-default bg-white overflow-hidden">
      <div className="pb-20 relative flex flex-col justify-between">
        <div>
          <h3 className="text-4xl font-semibold text-[var(--primary)] mb-7">
            {projet.nom}
          </h3>
          <p className="text-gray-700 text-md">
            {projet.description.substring(0, 60)}...
          </p>
        </div>

        <span
          onClick={() => router.push(`/projets-en-cours/${projet.slug}`)}
          className="px-6 py-3 bg-[var(--primary)] absolute bottom-0 right-0 rounded hover:bg-white hover:text-[var(--primary)] cursor-pointer border-3 border-white transition-all hover:border-gray-100 duration-500 text-xs font-bold text-white uppercase"
        >
          Plus d&apos;information
        </span>
      </div>

      <img
        src={projet.image}
        alt={projet.nom}
        className="w-full h-[35vh] rounded md:h-[50vh] object-cover"
      />
    </div>
  );
}
