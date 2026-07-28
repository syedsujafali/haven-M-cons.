import { useParams, Link, Navigate } from 'react-router-dom';
import { projects } from '../../data/projectsData';
import { ArrowLeft } from 'lucide-react';

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) return <Navigate to="/portfolio" replace />;

  const others = projects.filter((p) => p.id !== id).slice(0, 2);

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0F2018]">
        <figure className="relative w-full aspect-[16/8] min-h-[480px] overflow-hidden">
          <img src={project.heroImage} alt={project.title} className="h-full w-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F2018] via-[#0F2018]/30 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-16 pt-44 sm:pt-48 text-linen">
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm text-linen/70 hover:text-linen mb-8 transition-colors w-fit">
              <ArrowLeft size={16} /> All Projects
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="glass-dark rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.28em]">{project.tag}</span>
            </div>
            <h1 className="font-display text-[clamp(2.5rem,7vw,7rem)] leading-[0.92] tracking-[-0.03em]">{project.title}</h1>
            <p className="mt-2 text-sm uppercase tracking-[0.24em] opacity-70">{project.location}</p>
          </div>
        </figure>
      </section>

      {/* Details */}
      <section className="bg-linen py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="col-span-1 lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              <div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-olive mb-2">Project</div>
                <div className="font-display text-2xl text-forest">{project.title}</div>
              </div>
              <dl className="grid gap-5 border-t border-forest/10 pt-6">
                {[
                  { label: 'Location', value: project.location },
                  { label: 'Area', value: `${project.sqft} sqft` },
                  { label: 'Duration', value: project.duration },
                  { label: 'Category', value: project.category },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <dt className="text-[10px] uppercase tracking-[0.22em] text-olive">{label}</dt>
                    <dd className="mt-1 text-sm text-forest font-medium">{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="border-t border-forest/10 pt-6">
                <div className="text-[10px] uppercase tracking-[0.22em] text-olive mb-2">Scope</div>
                <p className="text-sm leading-relaxed text-forest-deep">{project.scope}</p>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-medium text-linen transition-transform hover:scale-[1.02]">
                Start a similar project →
              </Link>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-8 space-y-10">
            <p className="text-[17px] leading-[1.8] text-forest-deep">{project.longDescription}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {project.galleryImages.map((img, i) => (
                <figure key={i} className={`overflow-hidden rounded-[20px] ${i === 0 ? 'sm:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'}`}>
                  <img src={img} alt={`${project.title} — view ${i + 1}`} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="bg-sand py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="mb-10 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-olive">
            <span className="inline-block h-px w-10 bg-olive/60" /> More work
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {others.map((p) => (
              <Link key={p.id} to={`/portfolio/${p.id}`} className="group relative overflow-hidden rounded-[24px]">
                <figure className="aspect-[4/3] overflow-hidden">
                  <img src={p.heroImage} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/70 to-transparent" />
                  <div className="absolute bottom-0 p-6 text-linen">
                    <div className="font-display text-xl">{p.title}</div>
                    <div className="text-xs uppercase tracking-[0.24em] opacity-70 mt-1">{p.location}</div>
                  </div>
                </figure>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-forest px-7 py-3 text-sm font-medium text-forest transition-all hover:bg-forest hover:text-linen">
              View all projects →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
