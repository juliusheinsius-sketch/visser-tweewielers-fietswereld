import { createFileRoute } from "@tanstack/react-router";
import { BikeCard, PageIntro } from "@/components/site-chrome";
import { contact, rentals } from "@/lib/site";

export const Route = createFileRoute("/verhuur")({
  head: () => ({
    meta: [
      { title: "E-bike huren in Santpoort-Noord | Visser Tweewielers" },
      { name: "description", content: "Huur een elektrische fiets en verken Kennemerland en de duinen. Reserveer telefonisch." },
      { property: "og:title", content: "E-bike huren | Visser Tweewielers" },
      { property: "og:description", content: "Elektrische huurfietsen in Santpoort-Noord." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageIntro eyebrow="Verhuur" title="E-bike huren">
        Ideaal voor een dag door Nationaal Park Zuid-Kennemerland, of om een e-bike eerst uitgebreid te proberen voordat u koopt.
      </PageIntro>
      <section className="container-site mt-14 grid gap-10 lg:grid-cols-[1fr_20rem]">
        <div className="grid gap-6 sm:grid-cols-2">
          {rentals.map((b) => <BikeCard key={b.name} bike={b} />)}
        </div>
        <aside className="h-fit border bg-card p-6 lg:sticky lg:top-6">
          <h2 className="text-xl font-bold">Reserveren</h2>
          <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li><span className="font-semibold text-foreground">1.</span> Bel ons met de gewenste datum en het aantal fietsen.</li>
            <li><span className="font-semibold text-foreground">2.</span> Neem bij ophalen een geldig legitimatiebewijs mee.</li>
            <li><span className="font-semibold text-foreground">3.</span> We stellen de fiets voor u af en leggen de bediening uit.</li>
          </ol>
          <a href={contact.phoneHref} className="mt-6 flex h-11 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground hover:bg-primary/90">
            Bel {contact.phone}
          </a>
        </aside>
      </section>
    </>
  );
}
