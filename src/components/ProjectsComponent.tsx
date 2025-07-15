"use client";

import * as React from "react";
import { ExternalLink, Calendar, Code } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface ProjectShowcaseDialogProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    timePeriod: string;
    link: string;
    imageUrl?: string;
    videoUrl?: string;
  };
}

export function ProjectShowcaseDialog({ project }: ProjectShowcaseDialogProps) {
  return (
    <div className="grid md:grid-cols-2 gap-5 h-full">
      {/* Left side - Media */}
      <div className="relative bg-muted/50 flex items-center justify-center min-h-[300px] md:min-h-[500px]">
        {project.videoUrl ? (
          <video
            src={project.videoUrl}
            controls
            className="w-full h-full object-contain"
            poster={project.imageUrl}
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            src={project.imageUrl || "/placeholder.svg?height=500&width=600"}
            alt={`${project.title} preview`}
            width={600}
            height={500}
            className="w-full h-full object-none"
          />
        )}
      </div>

      {/* Right side - Project Details */}
      <div className="flex flex-col p-6 space-y-6">
        <DialogHeader className="space-y-3">
          <DialogTitle className="text-2xl font-bold leading-tight">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-base leading-relaxed">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <Separator />

        {/* Technologies */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <Code className="w-4 h-4" />
            Technologies Used
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <Separator />

        {/* Time Period */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <Calendar className="w-4 h-4" />
            Development Period
          </div>
          <p className="text-sm">{project.timePeriod}</p>
        </div>

        <Separator />

        {/* Project Link */}
        <div className="mt-auto pt-4">
          <Button asChild className="w-full">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              View Live Project
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
