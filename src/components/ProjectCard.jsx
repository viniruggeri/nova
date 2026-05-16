import { motion } from "framer-motion";

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 shadow-nova transition-colors hover:border-nova-mid/40"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -6 }}
    >
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-nova-mid/80 to-transparent" />
      <p className="text-xs font-medium uppercase text-nova-mid">{project.label}</p>
      <h3 className="mt-5 text-2xl font-light text-white">{project.title}</h3>
      <p className="mt-4 text-sm leading-7 text-white/60">{project.summary}</p>

      <div className="mt-6 border-t border-white/10 pt-5">
        <p className="text-xs uppercase text-white/40">Authors</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.authors.map((author) => (
            <a
              key={author.href}
              className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-xs text-white/60 transition hover:border-nova-mid/40 hover:text-nova-light"
              href={author.href}
              target="_blank"
              rel="noreferrer"
            >
              {author.name}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-7 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs uppercase text-white/55"
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-nova-light transition group-hover:text-white"
        href={project.href}
        target="_blank"
        rel="noreferrer"
      >
        Open repository
        <span aria-hidden="true">-&gt;</span>
      </a>
    </motion.article>
  );
}
