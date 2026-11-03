import { createFileRoute } from "@tanstack/react-router";
import { BikeCard, PageIntro } from "@/components/site-chrome";
import { bikes, contact } from "@/lib/site";

export const Route = createFileRoute("/e-bikes")({
  head: () => ({
    meta: [
      { title: "E-bikes: Flyer, Advanced en Gocycle | Visser Tweewielers" },
      { name: "description", content: "Bekijk ons aanbod e-bikes van Flyer, Advanced en Gocycle. Proefrijden in Santpoort-Noord." },
      { property: "og:title", content: "E-bikes | Visser Tweewielers" },
      { property: "og:description", content: "Flyer, Advanced en Gocycle e-bikes in Santpoort-Noord." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const brands = ["Flyer", "Advanced", "Gocycle"];

function Page() {
  return (
    <>
      <PageIntro eyebrow="Assortiment" title="E-bikes">
        Een selectie uit onze showroom. Niet elk model en elke maat staat altijd op voorraad — bel{" "}
        <a href={contact.phoneHref} className="font-semibold text-foreground underline">{contact.phone}</a> voor actuele beschikbaarheid.
      </PageIntro>
      {brands.map((brand) => (
        <section key={brand} className="container-site mt-14">
          <h2 className="border-b pb-3 text-2xl font-bold">{brand}</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bikes.filter((b) => b.brand === brand).map((b) => <BikeCard key={b.name} bike={b} />)}
          </div>
        </section>
      ))}
    </>
  );
}
