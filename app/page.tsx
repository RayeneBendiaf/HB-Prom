import ImageCarousel from "@/components/accuiel/ImageCarousel";
import NosProjets from "@/components/Projects-realises/page";
import ProjetCard from "@/components/Projets-en-cours/page";

import About from "@/components/qui-sommes-nous/About";
import projets from "@/data/projets";

export default function Home() {
  const images = [
    "/images/caroussel1.jpg",
    "/images/caroussel2.jpg",
    "/images/caroussel3.jpg",
    // ajoute autant d'images que tu veux ici
  ];

  return (
    <main className=" mt-15 md:mt-30">
      <ImageCarousel
        images={images}
        autoPlay={true}
        autoPlayInterval={4000}
        height="h-[95vh] lg:h-[85vh]"
      />
      <About />
      <NosProjets />
      <div
        id="PROJETS EN COURS"
        className="py-16 bg-white flex flex-col items-center overflow-x-hidden"
      >
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold cursor-default text-[var(--primary)] uppercase tracking-wide">
            Projets en cours
          </h2>
          <div className="w-24 h-1 bg-[var(--primary)] mx-auto mt-4 rounded-full"></div>
        </div>
        <div className=" flex flex-col gap-16">
          {projets.map((projet) => (
            <ProjetCard key={projet.slug} projet={projet} />
          ))}
        </div>
      </div>
    </main>
  );
}
