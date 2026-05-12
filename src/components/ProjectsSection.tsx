import { Link } from "react-router";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard, ProjectCardProps } from "./ProjectCard";
import { MONO, MUTED } from "../lib/constants";

interface ProjectsSectionProps {
  projects: ProjectCardProps[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="works" className="px-6 md:px-12 py-16 flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <SectionHeading label="projects" withLine />
        <Link
          to="/projects"
          style={{ fontFamily: MONO, fontSize: 16, color: MUTED }}
          className="hover:text-white transition-colors shrink-0 ml-4"
        >
          View all →
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => <ProjectCard key={i} {...p} />)}
      </div>
    </section>
  );
}
