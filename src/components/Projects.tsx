import { useState, useEffect, useRef } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { projects } from "@/utils/projects";
import { ProjectCard } from "./ProjectCard";
import { Button } from "./ui/button";
import { filterOptions } from "@/utils/filterOptions";

import { useAnalyticsOnVisible } from "@/hooks/useAnalyticsOnVisible";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [currentPage, setCurrentPage] = useState(1);
  const PROJECTS_PER_PAGE = 3;

  const projectsSectionRef = useRef<HTMLDivElement>(null);

  useAnalyticsOnVisible(projectsSectionRef, {
    category: "Scroll",
    action: "View Section",
    label: "Projects",
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  const allFilteredProjects =
    activeFilter === "Todos"
      ? projects
      : projects.filter((project) =>
          project.tecnologies.some((tech) => tech.name === activeFilter)
        );

  const totalPages = Math.ceil(allFilteredProjects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const endIndex = startIndex + PROJECTS_PER_PAGE;
  const projectsToShow = allFilteredProjects.slice(startIndex, endIndex);

  return (
    <div
      ref={projectsSectionRef}
      id="projects"
      className="flex flex-col items-center justify-center gap-8 my-12 px-4"
    >
      <h1 className="text-3xl font-bold sm:text-4xl">Projetos</h1>

      <div className="flex flex-wrap justify-center gap-3">
        {filterOptions.map((option) => (
          <Button
            key={option}
            variant={activeFilter === option ? "default" : "outline"}
            onClick={() => setActiveFilter(option)}
          >
            {option}
          </Button>
        ))}
      </div>

      <div className="flex flex-col justify-center items-center w-full gap-12 pt-8 min-h-[500px]">
        {projectsToShow.length > 0 ? (
          projectsToShow.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))
        ) : (
          <p className="text-center text-muted-foreground">
            Nenhum projeto encontrado para a tecnologia "{activeFilter}".
          </p>
        )}
      </div>

      {totalPages > 1 && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage((prev) => Math.max(prev - 1, 1));
                }}
                className={
                  currentPage === 1 ? "pointer-events-none opacity-50" : ""
                }
              />
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, i) => (
              <PaginationItem key={i + 1}>
                <PaginationLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(i + 1);
                  }}
                  isActive={currentPage === i + 1}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                }}
                className={
                  currentPage === totalPages
                    ? "pointer-events-none opacity-50"
                    : ""
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
