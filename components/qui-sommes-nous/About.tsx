"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Page() {
  return (
    <main
      id="QUI SOMMES NOUS"
      className="bg-white cursor-default px-5 py-15 md:px-0 grid grid-cols-1 md:grid-cols-2 items-center justify-center pt-20  "
    >
      <div className="flex flex-col gap-5 text-5xl md:text-7xl md:px-20 font-bold mb-6 mx-auto  ">
        <h1 className="text-[var(--primary)]">
          HB <span className="font-medium text-[var(--secondary)]">PROM</span>
        </h1>
        <p className="text-xl text-[var(--primary)]">
          HB PROM est une société de promotion immobilière basée à Oran.
        </p>
        <p className="text-xl text-[var(--primary)]">
          Nous concevons, construisons et commercialisons des résidences
          modernes et haut standing, pensées pour offrir confort et qualité de
          vie à nos clients.
        </p>
      </div>

      <div className="md:pr-20">
        <Accordion
          type="single"
          collapsible
          className="text-[var(--primary)]"
          defaultValue=""
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl cursor-pointer md:text-3xl">
              Architecture-Design
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                L’architecture extérieure ainsi qu’intérieure fait partie des
                facteurs que l’on ne voit pas, mais que l’on vit
                quotidiennement. Optimisation des rangements et plans de travail
                pour libérer de l’espace, Nos architectes s’attardent sur la
                qualité de vie.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl md:text-3xl cursor-pointer">
              Formule sur-mesure
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                Nous vous proposons la formule sur-mesure: agencement de
                cuisine,qui peuvent être réalisés selon vos choix.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl md:text-3xl cursor-pointer">
              Assistance clients
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <ul>
                <li>-Une assistance téléphonique dédiée.</li>
                <li>-Une équipe à votre écoute.</li>
                <li>-Un suivi personnalisé.</li>
                <li>
                  De part sa vocation de prestataire, l’équipe HB PROM vous doit
                  une assistance tout au long de la réalisation de votre projet.
                  Pour cela, nous avons créé un service assistance clients, basé
                  au siège social, et qui a pour mission d’être à votre écoute
                  et de prendre en compte toutes vos demandes.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
}
