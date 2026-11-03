import { createFileRoute } from "@tanstack/react-router";
import { HoursTable, PageIntro } from "@/components/site-chrome";
import { contact } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact en openingstijden | Visser Tweewielers" },
      { name: "description", content: "Visser Tweewielers, Hoofdstraat 214, Santpoort-Noord. Telefoon en openingstijden." },
      { property: "og:title", content: "Contact | Visser Tweewielers" },
      { property: "og:description", content: "Adres, telefoon en openingstijden van Visser Tweewielers." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageIntro eyebrow="Contact" title="Kom langs of bel ons" />
      <section className="container-site mt-14 grid gap-8 md:grid-cols-3">
        <div className="border bg-card p-6">
          <p className="eyebrow">Adres</p>
          <p className="mt-3 text-lg font-semibold">{contact.street}<br />{contact.city}</p>
          <a href={contact.mapsHref} target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm font-semibold text-primary underline underline-offset-4">Open in Google Maps →</a>
        </div>
        <div className="border bg-card p-6">
          <p className="eyebrow">Telefoon</p>
          <a href={contact.phoneHref} className="mt-3 block text-2xl font-bold text-primary">{contact.phone}</a>
          <p className="mt-2 text-sm text-muted-foreground">Voor advies, reserveringen en werkplaatsafspraken.</p>
        </div>
        <div className="border bg-card p-6">
          <p className="eyebrow">Openingstijden</p>
          <HoursTable className="mt-3" />
        </div>
      </section>
      <section className="container-site mt-8">
        <iframe
          title="Kaart Visser Tweewielers"
          src="https://www.google.com/maps?q=Hoofdstraat+214,+Santpoort-Noord&output=embed"
          className="h-96 w-full border"
          loading="lazy"
        />
      </section>
    </>
  );
}
