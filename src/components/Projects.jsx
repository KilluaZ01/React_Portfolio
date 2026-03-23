import { PROJECTS } from "../constants";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { useEffect, useState } from "react";

const categoryFilters = ["Python", "React", "Full Stack"];

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [slideIndices, setSlideIndices] = useState({});

  const toggleExpandedProject = (projectTitle) => {
    setExpandedProject((currentProject) =>
      currentProject === projectTitle ? null : projectTitle,
    );
  };

  const changeSlide = (projectTitle, direction, totalSlides) => {
    if (totalSlides <= 1) {
      return;
    }

    setSlideIndices((currentSlides) => {
      const currentIndex = currentSlides[projectTitle] ?? 0;
      const nextIndex =
        direction === "next"
          ? (currentIndex + 1) % totalSlides
          : (currentIndex - 1 + totalSlides) % totalSlides;

      return {
        ...currentSlides,
        [projectTitle]: nextIndex,
      };
    });
  };

  const toggleCategory = (category) => {
    setActiveCategory((currentCategory) =>
      currentCategory === category ? null : category,
    );
  };

  const pinnedProjects = PROJECTS.filter((project) => project.pinned);
  const featuredProjects = pinnedProjects.length
    ? pinnedProjects
    : PROJECTS.slice(0, 2);

  const categoryProjects = activeCategory
    ? PROJECTS.filter(
        (project) =>
          Array.isArray(project.categories) &&
          project.categories.includes(activeCategory),
      )
    : [];

  const visibleProjects = activeCategory ? categoryProjects : featuredProjects;
  const spotlightProject = visibleProjects.find(
    (project) => project.title === expandedProject,
  );
  const displayProjects = spotlightProject
    ? [spotlightProject]
    : visibleProjects;

  useEffect(() => {
    if (
      expandedProject &&
      !visibleProjects.some((project) => project.title === expandedProject)
    ) {
      setExpandedProject(null);
    }
  }, [expandedProject, visibleProjects]);

  const renderCarousel = (
    project,
    heightClassName,
    showBackButton = false,
    onBack = null,
  ) => {
    const screenshots =
      Array.isArray(project.screenshots) && project.screenshots.length
        ? project.screenshots
        : [project.image];
    const activeSlideIndex = slideIndices[project.title] ?? 0;
    const activeSlide = screenshots[activeSlideIndex] || project.image;

    return (
      <div className={`relative overflow-hidden ${heightClassName}`}>
        <img
          className="h-full w-full object-cover"
          src={activeSlide}
          alt={`${project.title} screenshot ${activeSlideIndex + 1}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,20,28,0.78)] via-[rgba(7,20,28,0.1)] to-transparent"></div>

        {showBackButton && (
          <button
            type="button"
            onClick={onBack}
            className="absolute top-4 left-4 flex h-10 w-10 font-bold items-center justify-center rounded-full border border-white/20 bg-black/40 text-white transition hover:border-white/35 hover:bg-black/60"
            aria-label="Back to projects"
          >
            X
          </button>
        )}

        {screenshots.length > 1 && (
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <button
              type="button"
              onClick={() =>
                changeSlide(project.title, "prev", screenshots.length)
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-sm text-white transition hover:border-white/35"
              aria-label="Previous screenshot"
            >
              <FaChevronLeft />
            </button>

            <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.22em] text-white/90">
              {activeSlideIndex + 1}/{screenshots.length}
            </span>

            <button
              type="button"
              onClick={() =>
                changeSlide(project.title, "next", screenshots.length)
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-sm text-white transition hover:border-white/35"
              aria-label="Next screenshot"
            >
              <FaChevronRight />
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <section
      className="section-shell px-6 py-10 sm:px-8 lg:px-10"
      id="projects"
    >
      <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <span className="eyebrow">Projects</span>
          <h2 className="section-title mt-5">
            Projects Demonstrating Problem Solving and Automation
          </h2>
        </div>
        <p className="max-w-lg text-sm leading-7 text-[var(--color-muted)]">
          These are my highlighted projects. Choose a category to replace these
          cards with filtered projects.
        </p>
      </div>

      <div className="mb-8 rounded-[1.6rem] border border-white/10 bg-[rgba(255,255,255,0.03)] p-5 sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
            {activeCategory
              ? `${activeCategory} projects`
              : "Explore by category"}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {spotlightProject && (
              <button
                type="button"
                onClick={() => setExpandedProject(null)}
                className="self-start text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]"
              >
                Back to project grid
              </button>
            )}
            {activeCategory && (
              <button
                type="button"
                onClick={() => {
                  setActiveCategory(null);
                  setExpandedProject(null);
                }}
                className="self-start text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]"
              >
                Back to pinned projects
              </button>
            )}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          {categoryFilters.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => toggleCategory(category)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  isActive
                    ? "border-[var(--color-accent)] bg-[rgba(242,184,109,0.12)] text-[var(--color-accent)]"
                    : "border-white/15 bg-white/5 text-[var(--color-muted)] hover:border-white/25 hover:text-[var(--color-text)]"
                }`}
              >
                {category} Projects
              </button>
            );
          })}
        </div>
      </div>

      <div
        className={`grid gap-6 ${spotlightProject ? "grid-cols-1" : "lg:grid-cols-3"}`}
      >
        <AnimatePresence mode="wait">
          {displayProjects.map((project, index) => (
            <motion.article
              key={`${project.title}-${spotlightProject ? "spotlight" : index}`}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className={`group overflow-hidden rounded-[1.8rem] border border-white/10 bg-[rgba(255,255,255,0.04)] ${
                spotlightProject
                  ? "grid gap-0 lg:grid-cols-[1.05fr_0.95fr]"
                  : "flex h-full flex-col"
              }`}
            >
              {spotlightProject ? (
                <>
                  {renderCarousel(
                    project,
                    "aspect-[16/10] lg:aspect-auto lg:h-full",
                    true,
                    () => setExpandedProject(null),
                  )}
                  <motion.div className="flex flex-col p-6 sm:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]">
                          Project spotlight
                        </p>
                        <h3 className="mt-2 text-3xl font-medium leading-tight sm:text-4xl">
                          {project.title}
                        </h3>
                      </div>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:-translate-y-0.5 hover:border-white/20"
                      >
                        <FaGithub className="text-xl" />
                      </a>
                    </div>

                    <p className="mt-5 text-sm leading-7 text-[var(--color-muted)]">
                      {project.description}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                      {project.fullDescription}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          className="pill text-sm text-[var(--color-muted)]"
                          key={techIndex}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={() => setExpandedProject(null)}
                        className="link-pill link-pill-secondary"
                      >
                        Close spotlight
                      </button>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-pill link-pill-primary"
                      >
                        View source on GitHub
                      </a>
                    </div>
                  </motion.div>
                </>
              ) : (
                <>
                  {renderCarousel(project, "aspect-[16/10]")}
                  <motion.div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-medium leading-tight">
                        {project.title}
                      </h3>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:-translate-y-0.5 hover:border-white/20"
                      >
                        <FaGithub className="text-xl" />
                      </a>
                    </div>
                    <p className="mt-4 flex-1 text-sm leading-7 text-[var(--color-muted)]">
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          className="pill text-sm text-[var(--color-muted)]"
                          key={techIndex}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleExpandedProject(project.title)}
                      className="mt-6 inline-flex items-center gap-2 self-start text-sm uppercase tracking-[0.18em] text-[var(--color-accent)]"
                    >
                      View details <FiArrowUpRight />
                    </button>
                  </motion.div>
                </>
              )}
            </motion.article>
          ))}
        </AnimatePresence>

        {!visibleProjects.length && (
          <div className="rounded-[1.2rem] border border-dashed border-white/20 bg-white/[0.02] p-5 text-sm leading-7 text-[var(--color-muted)] lg:col-span-3">
            No {activeCategory} projects are published yet.
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
