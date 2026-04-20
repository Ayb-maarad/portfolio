import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, ChevronLeft, ChevronRight, Eye } from "lucide-react";

import timemanager1 from "@/assets/timemanager-1.png";
import timemanager2 from "@/assets/timemanager-2.png";
import timemanager3 from "@/assets/timemanager-3.png";
import timemanager4 from "@/assets/timemanager-4.png";
import timemanager5 from "@/assets/timemanager-5.png";
import timemanager6 from "@/assets/timemanager-6.png";
import timemanager7 from "@/assets/timemanager-7.png";
import budgetTracker from "@/assets/budget-tracker.png";
import queueSystem from "@/assets/queue-system.png";

type Project = {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  screenshots?: string[];
  github?: string;
  link?: string;
  type?: "académique" | "personnel";
};

const projects: Project[] = [
  {
    id: "1",
    number: "01",
    title: "Time Manager",
    description: "Application web de suivi de pointage développée à Epitech. Gestion des temps de travail avec authentification JWT, gestion des rôles (Admin / Manager / Employee), interface moderne et pipeline CI/CD complète.",
    tags: ["React.js", "Spring Boot", "PostgreSQL", "Docker", "CI/CD", "GitHub Actions", "JWT", "Rôles & Permissions", "REST API"],
    screenshots: [timemanager1, timemanager2, timemanager3, timemanager4, timemanager5, timemanager6, timemanager7],
    github: "https://github.com/Ayb-maarad/Time-manager",
    type: "académique",
  },
  {
    id: "2",
    number: "02",
    title: "Personal Budget Tracker",
    description: "Application de suivi budgétaire personnel développée selon l'architecture microservices.",
    tags: ["React", "TypeScript", "Express.js", "PostgreSQL", "Jest", "REST API", "Microservices", "Docker compose", "JWT", "Nginx"],
    screenshots: [budgetTracker],
    github: "https://github.com/Ayb-maarad/Personal-budget",
    type: "personnel",
  },
  {
    id: "3",
    number: "03",
    title: "Système Intelligent d'Irrigation",
    description: "Système embarqué d'irrigation automatisé utilisant des capteurs pour optimiser l'arrosage, avec interface de monitoring en JavaFX.",
    tags: ["Arduino", "C", "JavaFX", "MySQL", "Capteurs"],
    type: "académique",
  },
  {
    id: "4",
    number: "04",
    title: "Gestion de File d'Attente",
    description: "Système IoT de gestion de file d'attente avec interface web et communication entre microcontrôleurs et serveur via Node-RED.",
    tags: ["ESP32", "Raspberry Pi", "Node-RED", "JavaScript", "HTML/CSS"],
    screenshots: [queueSystem],
    type: "académique",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  const openModal = (project: Project) => {
    if (project.screenshots && project.screenshots.length > 0) {
      setSelectedProject(project);
      setCurrentScreenshot(0);
    }
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentScreenshot(0);
  };

  const nextScreenshot = () => {
    if (selectedProject?.screenshots) {
      setCurrentScreenshot((prev) => (prev + 1) % selectedProject.screenshots!.length);
    }
  };

  const prevScreenshot = () => {
    if (selectedProject?.screenshots) {
      setCurrentScreenshot((prev) =>
        prev === 0 ? selectedProject.screenshots!.length - 1 : prev - 1
      );
    }
  };

  return (
    <>
      <section id="projets" className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="font-mono text-sm text-primary tracking-widest uppercase mb-4">02 — Projets</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Projets <span className="text-gradient">Réalisés</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project) => (
              <motion.div key={project.id} variants={cardVariants} className="flex flex-col gap-3">
              <motion.article
                onClick={() => openModal(project)}
                className={`group relative flex flex-col rounded-xl border border-border bg-card p-6 hover:border-primary/30 transition-all duration-500 shadow-card hover:shadow-glow overflow-hidden ${
                  project.screenshots ? "cursor-pointer" : ""
                }`}
              >
                {/* Screenshot hover overlay */}
                {project.screenshots && (
                  <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl overflow-hidden">
                    <img
                      src={project.screenshots[0]}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-background/70" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg">
                        <Eye size={16} />
                        Afficher les captures
                      </span>
                    </div>
                  </div>
                )}

                {/* Number */}
                <span className="absolute top-4 right-4 font-mono text-xs text-muted-foreground z-0">
                  {project.number}
                </span>

                {/* Preview badge */}
                {project.screenshots && (
                  <div className="flex items-center gap-1.5 mb-4 text-primary">
                    <Eye size={14} />
                    <span className="text-xs font-mono">{project.screenshots.length} capture{project.screenshots.length > 1 ? "s" : ""}</span>
                  </div>
                )}

                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-gradient transition-all duration-300 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-xl bg-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.article>

              {/* Links — outside the card to stay accessible on hover */}
              <div className="flex items-center gap-3 px-1">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    title="Voir sur GitHub"
                  >
                    <Github size={16} />
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
                <span className="text-xs text-muted-foreground font-mono ml-auto">
                  Projet {project.type ?? "académique"}
                </span>
              </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && selectedProject.screenshots && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-md p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{selectedProject.title}</h3>
                  <p className="text-sm text-muted-foreground font-mono">
                    {currentScreenshot + 1} / {selectedProject.screenshots.length}
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="w-10 h-10 rounded-lg border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Screenshot */}
              <div className="relative rounded-xl overflow-hidden border border-border shadow-card">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentScreenshot}
                    src={selectedProject.screenshots[currentScreenshot]}
                    alt={`${selectedProject.title} - Capture ${currentScreenshot + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-full h-auto max-h-[75vh] object-contain bg-card"
                  />
                </AnimatePresence>
              </div>

              {/* Navigation */}
              {selectedProject.screenshots.length > 1 && (
                <div className="flex items-center justify-center gap-4 mt-4">
                  <button
                    onClick={prevScreenshot}
                    className="w-10 h-10 rounded-lg border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <div className="flex gap-2">
                    {selectedProject.screenshots.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentScreenshot(i)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          i === currentScreenshot
                            ? "bg-primary w-6"
                            : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextScreenshot}
                    className="w-10 h-10 rounded-lg border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectsSection;
