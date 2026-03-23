import { motion } from "framer-motion";
import { Cpu, Code, Wrench, Globe } from "lucide-react";

const skills = [
  { icon: Code, label: "Développement Web", detail: "React.js, Java Spring Boot, Express.js, PostgreSQL, JavaScript, Tailwind CSS, CI/CD, Docker, Figma" },
  { icon: Cpu, label: "Systèmes Embarqués", detail: "Arduino, Raspberry Pi, ESP32, Capteurs & Actionneurs, Node-RED, Programmation C" },
  { icon: Wrench, label: "Outils & Méthodologies", detail: "Git, GitHub, VS Code, AGILE, Cycle en V, UML/SysML, Proxmox VE, Linux & Bash" },
  { icon: Globe, label: "Divers", detail: "DevOps, Cybersécurité, Réseaux informatiques, Statistiques & Analyse de données, JavaFX" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-primary tracking-widest uppercase mb-4">03 — À propos</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Compétences <span className="text-gradient-accent">&amp; Expertise</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-start gap-4 p-6 rounded-xl border border-border bg-card hover:border-primary/20 transition-colors shadow-card"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <skill.icon size={20} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{skill.label}</h3>
                <p className="text-sm text-muted-foreground font-mono">{skill.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
