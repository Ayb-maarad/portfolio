import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="font-mono text-sm text-primary tracking-widest uppercase mb-4">04 — Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Travaillons <span className="text-gradient">ensemble</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            Disponible pour des stages, projets et collaborations dans les domaines des systèmes embarqués et des systèmes d'informations.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="mailto:ayoub.maarad@email.com"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <Mail size={16} />
              Email
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-semibold text-sm hover:bg-secondary transition-colors"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-semibold text-sm hover:bg-secondary transition-colors"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-32 border-t border-border">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <p className="text-xs text-muted-foreground font-mono">
            © 2026 Ayoub MAARAD
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            Ingénieur Systèmes Embarqués
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
