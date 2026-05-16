import { motion } from "framer-motion";

const navItems = [
  { label: "Research", href: "#research" },
  { label: "Repositories", href: "#repositories" },
  { label: "People", href: "#people" },
  { label: "GitHub", href: "https://github.com/viniruggeri", external: true }
];

export default function Header() {
  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-nova-bg/70 backdrop-blur-2xl"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between gap-5 px-5 sm:px-8">
        <a className="group flex min-w-0 items-center gap-3" href="#top" aria-label="NOVA home">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-nova-light/20 bg-white/[0.03] shadow-glow">
            <span className="nova-spark h-4 w-4" />
          </span>
          <span className="flex flex-col">
            <span className="text-sm font-medium uppercase text-nova-light">NOVA</span>
            <span className="text-xs uppercase text-white/45">Research Systems</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              className="text-xs font-medium uppercase text-white/55 transition hover:text-nova-light focus-visible:text-nova-light focus-visible:outline-none"
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
