import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Phone, ArrowUpRight, Wrench, Bike, Zap, CircleDot, MapPin } from "lucide-react";
import { HoursTable, OpenBadge } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { contact } from "@/lib/site";
import workshopImg from "@/assets/werkplaats.jpg";

export const Route = createFileRoute("/werkplaats")({
  head: () => ({
    meta: [
      { title: "Werkplaats: fietsonderhoud en reparatie | Visser Tweewielers" },
      { name: "description", content: "Fiets of e-bike laten onderhouden in Santpoort-Noord? Bekijk onze werkplaatsdiensten, praktische voorbereiding en contactgegevens." },
      { property: "og:title", content: "Fietsonderhoud en reparatie | Visser Tweewielers" },
      { property: "og:description", content: "Onderhoud, e-bike diagnose en reparatie. Neem contact op met de werkplaats in Santpoort-Noord." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const services = [
  { icon: Wrench, title: "Onderhoudsbeurt", text: "Aandacht voor de onderdelen die dagelijks het meeste werk doen.", checks: ["Remmen en versnellingen", "Banden en bandenspanning", "Ketting, verlichting en bevestigingen"] },
  { icon: Zap, title: "E-bike diagnose", text: "Ondersteuning die uitvalt of een foutmelding op het display? Bespreek het met onze werkplaats.", checks: ["Motor en accu controleren", "Foutmeldingen onderzoeken", "Software en systeemafstelling"] },
  { icon: CircleDot, title: "Reparatie & onderdelen", text: "Van een lekke band tot een fiets die niet meer soepel schakelt.", checks: ["Banden en binnenbanden", "Remmen, spaken en aandrijving", "Versleten onderdelen vervangen"] },
];

const faqs = [
  ["Moet ik een afspraak maken?", "Bel de werkplaats om uw klacht en een geschikt moment te bespreken. Zo kunt u ook direct vragen wanneer u de fiets kunt brengen."],
  ["Wat kost een onderhoudsbeurt of reparatie?", "Dat hangt af van de fiets, de werkzaamheden en eventuele onderdelen. Vraag de werkplaats naar de verwachte kosten voor uw fiets; er staan daarom geen vaste tarieven op deze pagina."],
  ["Wat neem ik mee voor een e-bike reparatie?", "Neem de fiets, de accusleutel en een afneembaar display mee. Vraag bij het maken van de afspraak of ook de oplader nodig is. Noteer een eventuele foutcode en wanneer de storing optreedt."],
  ["Hoe lang ben ik mijn fiets kwijt?", "Dat hangt af van de werkzaamheden, de planning en de beschikbaarheid van onderdelen. Vraag bij het maken van de afspraak naar de verwachte duur en de beschikbaarheid van een leenfiets."],
];

function Page() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
        <img src={workshopImg} alt="Illustratieve foto van onderhoud aan de aandrijving van een e-bike" width={1536} height={1024} className="absolute inset-0 -z-20 h-full w-full object-cover object-[65%_center]" />
        <div className="absolute inset-0 -z-10 bg-ink/65 md:hero-overlay" />
        <div className="container-site py-16 md:py-24">
          <p className="text-sm font-bold uppercase">Visser Tweewielers · Werkplaats</p>
          <h1 className="mt-4 max-w-xl text-4xl leading-tight md:text-5xl">Weer soepel op weg.</h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed">Onderhoud en reparatie voor uw fiets of e-bike. Van een lekke band tot een grondige onderhoudsbeurt.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-12 px-6 font-bold"><a href={contact.phoneHref}><Phone /> Bel voor een afspraak</a></Button>
            <Button asChild variant="outline" size="lg" className="h-12 border-ink-foreground/50 bg-transparent px-6 text-ink-foreground hover:bg-ink-foreground/10 hover:text-ink-foreground"><a href="#werkzaamheden">Onze werkzaamheden <ArrowUpRight /></a></Button>
          </div>
        </div>
      </section>

      <div className="border-b bg-paper">
        <div className="container-site flex flex-wrap gap-x-10 gap-y-3 py-5 text-sm font-medium">
          <span className="flex items-center gap-2"><Bike className="size-5 text-primary" /> Fietsen & e-bikes</span>
          <span className="flex items-center gap-2"><Wrench className="size-5 text-primary" /> Eigen werkplaats</span>
          <span className="flex items-center gap-2"><MapPin className="size-5 text-primary" /> Santpoort-Noord</span>
        </div>
      </div>

      <section id="werkzaamheden" className="container-site scroll-mt-56 py-16 md:py-20">
        <p className="eyebrow">Goed voor uw fiets</p>
        <h2 className="mt-3 text-3xl md:text-4xl">Waar kunnen we u mee helpen?</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="border-t-2 border-primary pt-6">
              <service.icon className="size-8 text-primary" strokeWidth={1.5} />
              <h3 className="mt-4 text-xl">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.text}</p>
              <ul className="mt-5 space-y-3 text-sm">{service.checks.map((item) => <li key={item} className="flex gap-3"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y bg-paper">
        <div className="container-site grid gap-12 py-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <p className="eyebrow">Een goede voorbereiding</p>
            <h2 className="mt-3 text-3xl">Vertel ons wat er speelt.</h2>
            <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">Een geluid, een foutmelding of een versleten band? Met een korte omschrijving kunnen we uw vraag beter beoordelen.</p>
            <ol className="mt-7 space-y-5">
              {[["Bel de werkplaats", "Vertel welk merk en type fiets u heeft en wat u merkt."], ["Bespreek uw bezoek", "Vraag naar de planning, verwachte kosten en wat u mee moet nemen."], ["Breng uw fiets", "Noteer de klacht of foutcode, zodat u niets vergeet."]].map(([title, text], i) => (
                <li key={title} className="flex gap-4"><span className="text-2xl font-bold text-primary">0{i + 1}</span><div><p className="font-bold">{title}</p><p className="mt-1 text-sm text-muted-foreground">{text}</p></div></li>
              ))}
            </ol>
          </div>
          <aside className="border-l-2 border-primary pl-6 lg:pl-10">
            <OpenBadge />
            <h3 className="mt-3 text-2xl">Direct contact</h3>
            <a href={contact.phoneHref} className="mt-3 block text-2xl font-bold text-accent">{contact.phone}</a>
            <p className="mt-2 text-sm text-muted-foreground">{contact.street} · {contact.city}</p>
            <HoursTable className="mt-5" />
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild><a href={contact.phoneHref}><Phone /> Bel de werkplaats</a></Button>
              <Button asChild variant="outline"><a href={contact.mapsHref} target="_blank" rel="noreferrer"><MapPin /> Route</a></Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="container-site grid gap-8 py-16 md:grid-cols-[1fr_1.5fr] md:gap-16">
        <div><p className="eyebrow">Praktische vragen</p><h2 className="mt-3 text-3xl">Voor u langskomt.</h2><p className="mt-4 text-muted-foreground">Een andere vraag? Neem gerust contact op.</p><Button asChild variant="link" className="mt-3 px-0"><Link to="/contact">Alle contactgegevens <ArrowUpRight /></Link></Button></div>
        <Accordion type="single" collapsible>{faqs.map(([question, answer], i) => <AccordionItem key={question} value={`vraag-${i}`}><AccordionTrigger className="py-5 text-base font-bold">{question}</AccordionTrigger><AccordionContent className="max-w-xl leading-relaxed text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}</Accordion>
      </section>
    </>
  );
}
