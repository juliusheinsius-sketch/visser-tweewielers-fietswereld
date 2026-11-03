import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site-chrome";
import { contact } from "@/lib/site";

export const Route = createFileRoute("/werkplaats")({
  head: () => ({
    meta: [
      { title: "Onderhoud en reparatie | Visser Tweewielers" },
      { name: "description", content: "Onderhoud en reparatie van fietsen en e-bikes van alle merken in Santpoort-Noord. Leenfiets beschikbaar." },
      { property: "og:title", content: "Werkplaats | Visser Tweewielers" },
      { property: "og:description", content: "Onderhoud en reparatie van fietsen en e-bikes." },
    ],
  }),
  component: Page,
});

const items = [
  ["Onderhoudsbeurt", "Remmen, versnellingen, banden en verlichting nagelopen en afgesteld."],
  ["E-bike diagnose", "Uitlezen van motor en accu, software-updates en foutcodes verhelpen."],
  ["Reparaties", "Lekke band, kapotte spaak of vastgelopen naaf: alle merken welkom."],
  ["Banden & onderdelen", "Ruime voorraad onderdelen, banden en accessoires."],
  ["Leenfiets", "Duurt een reparatie langer? Dan krijgt u een leenfiets mee."],
  ["Verzekering", "U kunt bij ons ook een fietsverzekering afsluiten."],
];

function Page() {
  return (
    <>
      <PageIntro eyebrow="Werkplaats" title="Onderhoud en reparatie">
        Onze monteurs werken aan fietsen en e-bikes van alle merken. Regelmatig onderhoud houdt uw fiets veilig en uw accu langer gezond.
      </PageIntro>
      <section className="container-site mt-14">
        <dl className="grid gap-px border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {items.map(([t, d]) => (
            <div key={t} className="bg-card p-6">
              <dt className="text-lg font-bold">{t}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-l-4 border-accent bg-paper p-6 md:flex-row md:items-center">
          <p className="font-medium">Afspraak maken voor onderhoud? Bel ons, dan plannen we een moment dat u uitkomt.</p>
          <a href={contact.phoneHref} className="inline-flex h-11 shrink-0 items-center rounded-sm bg-primary px-5 font-semibold text-primary-foreground hover:bg-primary/90">Bel {contact.phone}</a>
        </div>
      </section>
    </>
  );
}
