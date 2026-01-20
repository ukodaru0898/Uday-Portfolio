import { motion } from 'framer-motion';
import { profile } from './data/profile';
import { useMemo, useState } from 'react';

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.08 * i, duration: 0.6 } })
};

const tiltProps = {
  whileHover: { rotateX: 4, rotateY: -4, translateY: -4 },
  whileTap: { rotateX: 0, rotateY: 0, translateY: 0 },
  transition: { type: 'spring', stiffness: 180, damping: 16 }
};

function SectionShell({
  id,
  eyebrow,
  title,
  children
}: {
  id?: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative overflow-hidden rounded-3xl border border-border/70 bg-card p-8 shadow-card">
      <div className="absolute inset-0 bg-field opacity-80" />
      <div className="grain" />
      <div className="relative flex flex-col gap-3 mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
        <h2 className="text-3xl font-semibold font-display leading-tight text-text">{title}</h2>
      </div>
      <div className="relative">{children}</div>
    </section>
  );
}

function Hero() {
  const [hasPhoto, setHasPhoto] = useState(true);
  return (
    <header className="relative overflow-hidden rounded-3xl border border-border/70 bg-card px-8 pb-16 pt-10 shadow-card">
      <div className="absolute inset-0 bg-field opacity-80" />
      <div className="grain" />
      <div className="relative flex flex-col gap-10">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="text-sm font-semibold tracking-[0.12em] text-accent">Automation · Quality · Delivery</div>
          <div className="flex items-center gap-2 text-sm text-muted">
            <span className="hidden sm:block">{profile.location}</span>
            <a className="rounded-full border border-border px-3 py-1" href={`mailto:${profile.email}`}>
              Let’s talk
            </a>
          </div>
        </div>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.14em] text-accent">Automation Test Engineer · SDET · Mentor</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold leading-[1.05] text-text">
              I build resilient test systems that keep releases <span className="text-accent">unbreakable</span>.
            </h1>
            <p className="max-w-3xl text-base text-muted">{profile.summary}</p>
            <div className="flex flex-wrap gap-3">
              <a
                className="rounded-xl bg-gradient-to-r from-accent to-accent2 px-4 py-3 font-semibold text-[#081018] shadow-lg"
                href={`tel:${profile.phone.replace(/[^\d+]/g, '')}`}
              >
                📞 Call {profile.phone}
              </a>
              <a
                className="rounded-xl border border-border px-4 py-3 font-semibold text-text hover:border-accent"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn Profile
              </a>
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-muted">
              {profile.heroTags.map((tag) => (
                <span key={tag} className="rounded-full border border-border px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="relative overflow-hidden rounded-full border border-border/80 bg-card/90 shadow-card h-64 w-64">
              {hasPhoto ? (
                <img
                  src={profile.photo}
                  alt={`${profile.name} portrait`}
                  className="h-full w-full object-cover"
                  onError={() => setHasPhoto(false)}
                />
              ) : (
                <div className="flex h-64 w-full items-center justify-center bg-white/5 text-3xl font-semibold text-muted">
                  {profile.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}

function Metrics() {
  return (
    <SectionShell id="work" eyebrow="Impact Numbers" title="Release insurance backed by proof.">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {profile.metrics.map((m, idx) => (
          <motion.div
            key={m.label}
            className="card-tilt rounded-2xl border border-border/80 bg-gradient-to-b from-white/5 to-transparent p-4 shadow-card"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            custom={idx}
            {...tiltProps}
          >
            <p className="text-sm text-muted">{m.label}</p>
            <p className="text-3xl font-bold">{m.value}</p>
            <p className="text-xs text-muted">{m.detail}</p>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}

function Skills() {
  return (
    <SectionShell id="skills" eyebrow="Stacks I Operate" title="Automation, performance, data, delivery.">
      <div className="flex flex-wrap gap-3 mb-5 text-sm text-muted">
        {profile.stackChips.map((chip) => (
          <span key={chip} className="rounded-full border border-border px-3 py-1">
            {chip}
          </span>
        ))}
      </div>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {profile.skills.map((skill, idx) => (
          <motion.div
            key={skill.title}
            className="card-tilt rounded-2xl border border-border/80 bg-white/5 p-4 shadow-card"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={idx}
            {...tiltProps}
          >
            <p className="text-base font-semibold">{skill.title}</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {skill.bullets.map((b) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}

function Experience() {
  return (
    <SectionShell id="projects" eyebrow="Selected Work" title="From migrations to data-heavy validation.">
      <div className="grid gap-4 lg:grid-cols-3">
        {profile.experience.map((exp, idx) => (
          <motion.article
            key={exp.company}
            className="card-tilt rounded-2xl border border-border/80 bg-white/5 p-5 shadow-card"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            custom={idx}
            {...tiltProps}
          >
            <div className="flex flex-col gap-1 mb-3">
              <p className="text-sm font-semibold">{exp.company} · {exp.role}</p>
              <span className="rounded-full border border-border px-3 py-1 text-xs text-muted w-fit">{exp.period}</span>
            </div>
            <ul className="space-y-2 text-sm text-muted">
              {exp.bullets.map((b) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted">
              {exp.tags.map((t) => (
                <span key={t} className="rounded-full border border-border px-2 py-1">
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}

function CaseStudy() {
  const nodes = useMemo(() => profile.caseStudy.sections, []);
  return (
    <SectionShell eyebrow="Case Highlight" title={profile.caseStudy.title}>
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-sm text-muted">
        {profile.caseStudy.tech}
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        {nodes.map((sec, idx) => (
          <motion.div
            key={sec.title}
            className="card-tilt rounded-2xl border border-border/80 bg-white/5 p-4 shadow-card"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={idx}
            {...tiltProps}
          >
            <h3 className="text-lg font-semibold mb-2">{sec.title}</h3>
            {sec.body && <p className="text-sm text-muted">{sec.body}</p>}
            {sec.list && (
              <ul className="mt-2 space-y-2 text-sm text-muted">
                {sec.list.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}

function Certifications() {
  return (
    <SectionShell eyebrow="Certifications & Awards" title="Credibility earned in production.">
      <div className="flex flex-wrap gap-3 mb-4">
        {profile.certifications.map((c, idx) => (
          <motion.span
            key={c.label}
            className="rounded-full border border-border bg-white/5 px-3 py-2 text-sm text-muted"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            custom={idx}
          >
            {c.label}
          </motion.span>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        {profile.awards.map((a, idx) => (
          <motion.span
            key={a.label}
            className="rounded-full border border-border bg-white/5 px-3 py-2 text-sm text-muted hover:border-accent hover:text-text"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            custom={idx}
          >
            {a.href ? (
              <a href={a.href} target="_blank" rel="noreferrer">
                {a.label} ↗
              </a>
            ) : (
              a.label
            )}
          </motion.span>
        ))}
      </div>
    </SectionShell>
  );
}

function Contact() {
  return (
    <SectionShell id="contact" eyebrow="Let’s build reliable releases" title="Need someone who treats automation like product quality insurance?">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_auto] items-center">
        <div className="space-y-4 text-muted">
          <p>I’ll map risk, modernize suites, and wire CI/CD so your team ships with confidence.</p>
          <div className="grid gap-3 sm:grid-cols-3 text-sm">
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-accent">Email</p>
              <a className="text-text" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-accent">Phone</p>
              <a className="text-text" href={`tel:${profile.phone.replace(/[^\d+]/g, '')}`}>
                {profile.phone}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-accent">Location</p>
              <span className="text-text/80">{profile.location}</span>
            </div>
          </div>
        </div>
        <div className="flex gap-3 flex-wrap justify-end">
          <a
            className="rounded-xl bg-gradient-to-r from-accent to-accent2 px-4 py-3 font-semibold text-[#081018] shadow-lg"
            href={`mailto:${profile.email}`}
          >
            Book a call
          </a>
          <a className="rounded-xl border border-border px-4 py-3 font-semibold text-text hover:border-accent" href="#top">
            Back to top
          </a>
        </div>
      </div>
    </SectionShell>
  );
}

export default function App() {
  return (
    <div className="bg-base text-text">
      <div className="fixed inset-0 bg-field opacity-70" />
      <div className="grain" />
      <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-10 md:px-6 lg:px-10">
        <Hero />
        <Metrics />
        <Skills />
        <Experience />
        <CaseStudy />
        <Certifications />
        <Contact />
        <footer className="pt-4 text-center text-sm text-muted">
          Built with intent—automation as a craft. © {profile.name}
        </footer>
      </main>
    </div>
  );
}
