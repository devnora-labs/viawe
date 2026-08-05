import { nav, site, social } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-ink text-cloud">
      <div className="shell grid gap-12 pb-16 pt-24 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="text-base text-stone">Where to find us</p>
          <address className="mt-6 not-italic leading-relaxed text-cloud/80">
            {site.address}
          </address>
        </div>

        <div>
          <p className="text-base text-stone">Talk to a person</p>
          <div className="mt-6 flex flex-col gap-2">
            <a href={`tel:${site.phone}`} className="link w-fit">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="link w-fit">
              {site.email}
            </a>
          </div>
        </div>

        <div>
          <p className="text-base text-stone">Elsewhere</p>
          <div className="mt-6 flex flex-col gap-2">
            {social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="link w-fit"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="shell">
        <div className="rule flex flex-col justify-between gap-4 py-10 text-sm text-stone md:flex-row">
          <p>
            © {new Date().getFullYear()} Via-We Services Private Limited.
            Operating from {site.base}.
          </p>
          <nav className="flex gap-8">
            {nav.map((item) => (
              <a key={item.label} href={item.href} className="link">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
