import { Link } from "@tanstack/react-router";
import { contact, hours } from "@/lib/site";
import type { Bike } from "@/lib/site";

const nav = [
  { to: "/e-bikes", label: "E-bikes" },
  { to: "/verhuur", label: "Verhuur" },
  { to: "/werkplaats", label: "Werkplaats" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  return (
    <header className="border-b bg-background">
      <div className="bg-ink text-ink-foreground text-xs">
        <div className="container-site flex h-8 items-center justify-between gap-4">
          <span className="hidden sm:inline">Flyer e-bike specialist · Santpoort-Noord</span>
          <a href={contact.phoneHref} className="font-semibold hover:underline">Bel {contact.phone}</a>
        </div>
      </div>
      <div className="container-site flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-2xl font-bold tracking-tight text-primary">VISSER</span>
          <span className="font-display text-sm uppercase tracking-[0.2em] text-muted-foreground">Tweewielers</span>
        </Link>
        <nav className="flex gap-1 overflow-x-auto text-sm font-medium">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-sm px-3 py-2 text-foreground/80 hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "text-primary underline underline-offset-8 decoration-2 decoration-accent" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 bg-ink text-ink-foreground">
      <div className="container-site grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold">Visser Tweewielers</p>
          <p className="mt-3 text-sm opacity-75">
            Verkoop, verhuur, onderhoud en reparatie van fietsen en e-bikes voor de regio IJmond.
          </p>
        </div>
        <div className="text-sm">
          <p className="eyebrow">Adres</p>
          <p className="mt-3">{contact.street}<br />{contact.city}</p>
          <a href={contact.phoneHref} className="mt-2 inline-block font-semibold hover:underline">{contact.phone}</a>
        </div>
        <div className="text-sm">
          <p className="eyebrow">Openingstijden</p>
          <HoursTable className="mt-3 opacity-90" />
        </div>
      </div>
      <div className="border-t border-ink-foreground/15">
        <div className="container-site py-4 text-xs opacity-60">© {new Date().getFullYear()} Visser Tweewielers</div>
      </div>
    </footer>
  );
}

export function HoursTable({ className = "" }: { className?: string }) {
  return (
    <table className={`w-full text-sm ${className}`}>
      <tbody>
        {hours.map(([d, t]) => (
          <tr key={d} className="border-b border-current/10 last:border-0">
            <td className="py-1.5 pr-4">{d}</td>
            <td className={`py-1.5 text-right tabular-nums ${t === "Gesloten" ? "opacity-60" : ""}`}>{t}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function BikeCard({ bike }: { bike: Bike }) {
  return (
    <article className="group flex flex-col border bg-card">
      <div className="aspect-[4/3] overflow-hidden bg-card p-4">
        <img src={bike.img} alt={bike.name} loading="lazy" className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]" />
      </div>
      <div className="flex flex-1 flex-col border-t p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{bike.brand}</p>
        <h3 className="mt-1 text-lg font-bold">{bike.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{bike.text}</p>
      </div>
    </article>
  );
}

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <section className="border-b bg-paper">
      <div className="container-site py-14">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold md:text-5xl">{title}</h1>
        {children && <div className="mt-4 max-w-2xl text-lg text-muted-foreground">{children}</div>}
      </div>
    </section>
  );
}
