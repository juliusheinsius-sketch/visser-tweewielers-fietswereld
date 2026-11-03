import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Check, Phone, MapPin, Clock } from "lucide-react";
import { contact, hours } from "@/lib/site";
import type { Bike } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/e-bikes", label: "E-bikes" },
  { to: "/verhuur", label: "Verhuur" },
  { to: "/werkplaats", label: "Werkplaats" },
  { to: "/contact", label: "Contact" },
] as const;

const usps = ["Officieel Flyer-dealer", "Altijd gratis proefrit", "Eigen werkplaats, alle merken", "Leenfiets bij reparatie"];

function toMin(t: string) {
  const [h, m] = t.split(":").map(Number);
  return (h ?? 0) * 60 + (m ?? 0);
}

export function useOpenStatus() {
  const [status, setStatus] = useState<{ open: boolean; label: string } | null>(null);
  useEffect(() => {
    const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Europe/Amsterdam" }));
    const idx = (now.getDay() + 6) % 7;
    const today = hours[idx]?.[1] ?? "Gesloten";
    const cur = now.getHours() * 60 + now.getMinutes();
    const ranges = today === "Gesloten" ? [] : today.split(" · ").map((r) => r.split("–").map(toMin));
    const active = ranges.find(([a, b]) => cur >= (a ?? 0) && cur < (b ?? 0));
    if (active) {
      const end = today.split(" · ").find((r) => toMin(r.split("–")[0]!) === active[0])!.split("–")[1];
      setStatus({ open: true, label: `Nu open tot ${end}` });
    } else setStatus({ open: false, label: "Nu gesloten" });
  }, []);
  return status;
}

export function OpenBadge() {
  const s = useOpenStatus();
  return (
    <span className="inline-flex items-center gap-2 text-sm">
      <span className={`h-2.5 w-2.5 rounded-full ${s?.open ? "bg-primary" : "bg-destructive"} ${s ? "" : "opacity-0"}`} />
      {s?.label ?? "\u00a0"}
    </span>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 shadow-sm">
      <div className="hidden bg-ink-2 text-ink-foreground md:block">
        <div className="container-site flex h-10 items-center justify-between text-sm">
          {usps.map((u) => (
            <span key={u} className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" strokeWidth={3} />{u}</span>
          ))}
        </div>
      </div>
      <div className="bg-ink text-ink-foreground">
        <div className="container-site flex h-20 items-center justify-between gap-6">
          <Link to="/" className="leading-none">
            <span className="block text-2xl font-black italic tracking-tight">VISSER<span className="text-primary">.</span></span>
            <span className="text-xs uppercase tracking-[0.25em] opacity-70">Tweewielers · Santpoort</span>
          </Link>
          <div className="flex items-center gap-6">
            <div className="hidden lg:block"><OpenBadge /></div>
            <a href={contact.mapsHref} target="_blank" rel="noreferrer" className="hidden items-center gap-2 text-sm hover:text-primary sm:flex">
              <MapPin className="h-5 w-5 text-primary" /> Route
            </a>
            <a href={contact.phoneHref} className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground hover:bg-accent">
              <Phone className="h-4 w-4" /> <span className="hidden sm:inline">{contact.phone}</span><span className="sm:hidden">Bel</span>
            </a>
          </div>
        </div>
      </div>
      <nav className="border-b bg-card">
        <div className="container-site flex gap-1 overflow-x-auto">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="whitespace-nowrap border-b-[3px] border-transparent px-4 py-3.5 text-[15px] text-foreground/80 hover:text-accent"
              activeProps={{ className: "!border-primary font-medium !text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export { Clock };

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
