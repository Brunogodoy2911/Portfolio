import { useEffect, useRef, useState } from "react";
import type { Project } from "@/utils/projects";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import {
  ArrowSquareOut,
  GithubLogo,
  MagnifyingGlassPlus,
} from "phosphor-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "./ui/carousel";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";

export function ProjectCard({
  imgs,
  title,
  tecnologies,
  description,
  link_rep,
  link_demo,
}: Project) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  useEffect(() => {
    if (!api) {
      return;
    }
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const hasMultipleImages = imgs.length > 1;

  return (
    <Card className="flex w-full max-w-5xl flex-col overflow-hidden p-0 sm:flex-row">
      <div className="relative flex items-center justify-center sm:w-2/5 bg-black/5">
        <Gallery>
          {hasMultipleImages ? (
            <Carousel
              setApi={setApi}
              plugins={[plugin.current]}
              className="h-full w-full"
              onMouseEnter={() => plugin.current.stop()}
              onMouseLeave={() => plugin.current.play()}
            >
              <CarouselContent>
                {imgs.map((url, index) => (
                  <CarouselItem key={index}>
                    <Item
                      original={url}
                      thumbnail={url}
                      width="1920"
                      height="1080"
                    >
                      {({ ref, open }) => (
                        <div
                          ref={ref}
                          onClick={open}
                          className="group relative flex h-full w-full cursor-pointer items-center justify-center overflow-hidden"
                        >
                          <img
                            src={url}
                            loading="lazy"
                            alt={`Imagem ${index + 1} do projeto ${title}`}
                            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <MagnifyingGlassPlus
                              size={48}
                              className="text-white"
                            />
                          </div>
                        </div>
                      )}
                    </Item>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          ) : (
            <Item
              original={imgs[0]}
              thumbnail={imgs[0]}
              width="1920"
              height="1080"
            >
              {({ ref, open }) => (
                <div
                  ref={ref}
                  onClick={open}
                  className="group relative flex h-full w-full cursor-pointer items-center justify-center overflow-hidden"
                >
                  <img
                    src={imgs[0]}
                    loading="lazy"
                    alt={`Imagem do projeto ${title}`}
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <MagnifyingGlassPlus size={48} className="text-white" />
                  </div>
                </div>
              )}
            </Item>
          )}
        </Gallery>
        {hasMultipleImages && (
          <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2">
            {imgs.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  index === current
                    ? "w-4 bg-primary"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Ir para a imagem ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col justify-between gap-5 p-6 md:p-8">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <h3 className="text-2xl font-bold">{title}</h3>
            <div className="flex flex-wrap gap-2">
              {tecnologies.map((tech, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <img
                      src={tech.img}
                      loading="lazy"
                      className="h-7 w-7 object-cover"
                      alt={`Ícone da tecnologia ${tech.name}`}
                    />
                  </TooltipTrigger>
                  <TooltipContent className="flex justify-center items-center bg-background p-2 rounded-lg text-foreground">
                    {tech.name}
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
          <p className="text-foreground text-lg">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          {link_demo && (
            <Button asChild className="w-full sm:w-auto">
              <a href={link_demo} target="_blank" rel="noopener noreferrer">
                Ver Projeto
                <ArrowSquareOut className="ml-2 size-5" />
              </a>
            </Button>
          )}
          <Button variant="outline" asChild className="w-full sm:w-auto">
            <a href={link_rep} target="_blank" rel="noopener noreferrer">
              <GithubLogo className="mr-2 size-5" />
              Repositório
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
}
