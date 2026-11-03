import { createFileRoute, Link } from "@tanstack/react-router";
import { BikeCard, HoursTable, OpenBadge } from "@/components/site-chrome";
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

const quick = [
  { to: "/e-bikes", label: "E-bikes", sub: "Bekijk het aanbod", img: advancedImg },
  { to: "/verhuur", label: "Verhuur", sub: "Huur een e-bike", img: starlyImg },
  { to: "/werkplaats", label: "Werkplaats", sub: "Onderhoud & reparatie", img: heroImg },
] as const;

function Index() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <img src={heroImg} alt="Fietsers op Flyer e-bikes" className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="container-site relative py-20 md:py-28">
          <div className="max-w-xl text-ink-foreground">
            <h1 className="text-4xl leading-[1.08] md:text-6xl">De e-bike specialist van Santpoort.</h1>
            <p className="mt-5 text-lg opacity-90">
              Officieel Flyer-dealer met eigen werkplaats. Kom langs voor advies, een proefrit of onderhoud — u bent welkom zonder afspraak.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/e-bikes" className="inline-flex h-12 items-center rounded-full bg-primary px-7 font-bold text-primary-foreground hover:bg-accent">
                Bekijk de e-bikes
              </Link>
              <Link to="/verhuur" className="inline-flex h-12 items-center rounded-full border-2 border-ink-foreground/70 px-7 font-bold hover:bg-ink-foreground/10">
                E-bike huren
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-site relative z-10 -mt-10">
        <div className="grid gap-4 bg-card p-4 shadow-lg sm:grid-cols-3 md:p-6">
          {quick.map((q) => (
            <Link key={q.to} to={q.to} className="group relative block aspect-[16/9] overflow-hidden">
              <img src={q.img} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-ink/45 transition-colors group-hover:bg-ink/30" />
              <span className="absolute inset-x-0 top-4 text-center text-2xl font-bold italic text-ink-foreground">{q.label}</span>
              <span className="absolute inset-x-0 bottom-3 text-center text-sm text-ink-foreground/90">{q.sub} →</span>
            </Link>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm">
          <OpenBadge />
          <a href={contact.mapsHref} target="_blank" rel="noreferrer" className="font-medium text-accent hover:underline">
            {contact.street}, Santpoort-Noord →
          </a>
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
          {[0, 9, 11].map((i) => bikes[i]).filter((b) => b !== undefined).map((b) => <BikeCard key={b.name} bike={b} />)}
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
              <a href={contact.mapsHref} target="_blank" rel="noreferrer" className="inline-flex h-11 items-center rounded-full bg-accent px-5 font-semibold text-accent-foreground hover:bg-accent/90">Routebeschrijving</a>
              <Link to="/contact" className="inline-flex h-11 items-center rounded-full border px-5 font-semibold hover:bg-secondary">Contact</Link>
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
