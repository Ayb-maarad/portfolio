import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  github?: string;
  link?: string;
};

const projects: Project[] = [
  {
    id: "1",
    number: "01",
    title: "Système de Surveillance Intelligent",
    description: "Conception et développement d'un système embarqué de surveillance basé sur des capteurs IoT avec traitement de données en temps réel et alertes automatiques.",
    tags: ["STM32", "IoT", "MQTT", "Python"],
  },
  {
    id: "2",
    number: "02",
    title: "Robot Autonome Navigation",
    description: "Développement d'un robot autonome utilisant des algorithmes de navigation et d'évitement d'obstacles avec communication sans fil.",
    tags: ["Arduino", "ROS", "C++", "LIDAR"],
  },
  {
    id: "3",
    number: "03",
    title: "Application de Gestion SI",
    description: "Application web full-stack pour la gestion des systèmes d'informations, incluant tableaux de bord, gestion des utilisateurs et reporting.",
    tags: ["React", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    id: "4",
    number: "04",
    title: "Système Domotique Connecté",
    description: "Plateforme domotique complète pour le contrôle de la maison intelligente avec interface mobile et automatisation des scénarios.",
    tags: ["Raspberry Pi", "MQTT", "React Native", "Firebase"],
  },
  {
    id: "5",
    number: "05",
    title: "Traitement de Signal Embarqué",
    description: "Implémentation d'algorithmes de traitement du signal sur microcontrôleur pour l'analyse de données capteurs en temps réel.",
    tags: ["DSP", "FPGA", "VHDL", "MATLAB"],
  },
  {
    id: "6",
    number: "06",
    title: "Plateforme Cloud IoT",
    description: "Architecture cloud pour la collecte, le stockage et la visualisation de données provenant de capteurs IoT distribués.",
    tags: ["AWS", "Grafana", "InfluxDB", "Python"],
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ProjectsSection = () => {
  return (
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
            <motion.article
              key={project.id}
              variants={cardVariants}
              className="group relative rounded-xl border border-border bg-card p-6 hover:border-primary/30 transition-all duration-500 shadow-card hover:shadow-glow"
            >
              {/* Number */}
              <span className="absolute top-4 right-4 font-mono text-xs text-muted-foreground">
                {project.number}
              </span>

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-gradient transition-all duration-300 mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 mt-5 pt-4 border-t border-border">
                {project.github && (
                  <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                    <Github size={16} />
                  </a>
                )}
                {project.link && (
                  <a href={project.link} className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink size={16} />
                  </a>
                )}
                {!project.github && !project.link && (
                  <span className="text-xs text-muted-foreground font-mono">Projet académique</span>
                )}
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl bg-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
