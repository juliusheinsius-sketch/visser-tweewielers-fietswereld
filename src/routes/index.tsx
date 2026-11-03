import { createFileRoute, Link } from "@tanstack/react-router";
import { BikeCard, HoursTable } from "@/components/site-chrome";
import { advancedImg, bikes, contact, heroImg, starlyImg } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Visser Tweewielers | Flyer e-bike specialist in Santpoort-Noord" },
      { name: "description", content: "E-bikes van Flyer, Advanced en Gocycle. Verkoop, verhuur, onderhoud en reparatie aan de Hoofdstraat in Santpoort-Noord." },
      { property: "og:title", content: "Visser Tweewielers | Flyer e-bike specialist" },
      { property: "og:description", content: "Verkoop, verhuur en reparatie van e-bikes in Santpoort-Noord." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Index,
});

const services = [
  { n: "01", t: "Advies & proefrit", d: "We nemen de tijd om te kijken welke fiets bij u past. Een proefrit maakt u altijd zonder afspraak." },
  { n: "02", t: "Verkoop", d: "Nieuwe e-bikes van Flyer, Advanced, Gocycle, Reany en Starly. Ook occasions en tweedehands fietsen." },
  { n: "03", t: "Verhuur", d: "Elektrische huurfietsen voor een dag of langer, om de duinen en de IJmond te verkennen." },
  { n: "04", t: "Werkplaats", d: "Onderhoud en reparatie van alle merken fietsen en e-bikes. Leenfiets beschikbaar." },
];

function Index() {
  return (
    <>
      <section className="border-b bg-paper">
        <div className="container-site grid items-center gap-10 py-12 md:grid-cols-[1.1fr_1fr] md:py-20">
          <div>
            <p className="eyebrow">Santpoort-Noord · regio IJmond</p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.05] md:text-6xl">
              De e-bike specialist van Santpoort.
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">
              Officieel Flyer-dealer met eigen werkplaats. Kom langs voor advies, een proefrit of onderhoud — u bent welkom zonder afspraak.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/e-bikes" className="inline-flex h-12 items-center rounded-sm bg-primary px-6 font-semibold text-primary-foreground hover:bg-primary/90">
                Bekijk de e-bikes
              </Link>
              <a href={contact.phoneHref} className="inline-flex h-12 items-center rounded-sm border border-foreground/25 px-6 font-semibold hover:bg-secondary">
                Bel {contact.phone}
              </a>
            </div>
          </div>
          <img src={heroImg} alt="Flyer e-bikes in de showroom" className="aspect-square w-full border object-cover" />
        </div>
      </section>

      <section className="container-site py-20">
        <div className="grid gap-px overflow-hidden border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.n} className="bg-card p-6">
              <p className="font-display text-sm font-semibold text-accent">{s.n}</p>
              <h2 className="mt-3 text-xl font-bold">{s.t}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-site">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Uit de showroom</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Populaire modellen</h2>
          </div>
          <Link to="/e-bikes" className="text-sm font-semibold text-primary underline underline-offset-4">Alle modellen →</Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[bikes[0], bikes[9], bikes[11]].map((b) => <BikeCard key={b.name} bike={b} />)}
        </div>
      </section>

      <section className="container-site mt-20 grid gap-6 md:grid-cols-2">
        <Link to="/e-bikes" className="group relative block overflow-hidden border">
          <img src={advancedImg} alt="Advanced Tour Pro e-bike" className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
          <div className="bg-card p-5">
            <h3 className="text-xl font-bold">Advanced e-bikes</h3>
            <p className="text-sm text-muted-foreground">Tour Plus en Tour Pro, met ketting of riem.</p>
          </div>
        </Link>
        <Link to="/e-bikes" className="group relative block overflow-hidden border">
          <img src={starlyImg} alt="Starly fiets" className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
          <div className="bg-card p-5">
            <h3 className="text-xl font-bold">Starly & Reany</h3>
            <p className="text-sm text-muted-foreground">Mooi, betrouwbaar en licht. Ride in style.</p>
          </div>
        </Link>
      </section>

      <section className="container-site mt-20">
        <div className="grid gap-10 border bg-card p-8 md:grid-cols-2 md:p-12">
          <div>
            <p className="eyebrow">Bezoek de winkel</p>
            <h2 className="mt-2 text-3xl font-bold">{contact.street}, Santpoort-Noord</h2>
            <p className="mt-4 text-muted-foreground">
              Parkeren kan voor de deur. Wilt u een specifieke fiets proefrijden? Bel even, dan zorgen we dat hij klaarstaat met een volle accu.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={contact.mapsHref} target="_blank" rel="noreferrer" className="inline-flex h-11 items-center rounded-sm bg-accent px-5 font-semibold text-accent-foreground hover:bg-accent/90">Routebeschrijving</a>
              <Link to="/contact" className="inline-flex h-11 items-center rounded-sm border px-5 font-semibold hover:bg-secondary">Contact</Link>
            </div>
          </div>
          <div>
            <p className="eyebrow">Openingstijden</p>
            <HoursTable className="mt-3" />
          </div>
        </div>
      </section>
    </>
  );
}
