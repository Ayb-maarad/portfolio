import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, CreditCard } from "lucide-react";

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
            Disponible pour un stage en developpement web de 4 à 6 mois à partir d'Avril 
          </p>

          <div className="inline-flex flex-col gap-4 text-left bg-secondary/40 border border-border rounded-xl px-8 py-6 w-full max-w-md">
            <h3 className="font-bold text-foreground text-lg mb-2">Me contacter :</h3>

            <a
              href="mailto:aybmaarad@gmail.com"
              className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-md bg-primary/20 text-primary shrink-0">
                <Mail size={18} />
              </span>
              <span className="text-sm font-medium">aybmaarad@gmail.com</span>
            </a>

            <div className="flex items-center gap-3 text-foreground">
              <span className="flex items-center justify-center w-9 h-9 rounded-md bg-red-500/20 text-red-500 shrink-0">
                <MapPin size={18} />
              </span>
              <span className="text-sm font-medium">Adresse : 39 rue de l'ouest, Roubaix</span>
            </div>

            <a
              href="tel:+33688726595"
              className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-md bg-secondary text-foreground shrink-0">
                <Phone size={18} />
              </span>
              <span className="text-sm font-medium">Téléphone : +33 6 88 72 65 95</span>
            </a>

            <a
              href="https://github.com/Ayb-maarad"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-md bg-secondary text-foreground shrink-0">
                <Github size={18} />
              </span>
              <span className="text-sm font-medium">GitHub : @Ayb-maarad</span>
            </a>

            <div className="flex items-center gap-3 text-foreground">
              <span className="flex items-center justify-center w-9 h-9 rounded-md bg-secondary text-foreground shrink-0">
                <CreditCard size={18} />
              </span>
              <span className="text-sm font-medium">Permis : B</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-32 border-t border-border">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <p className="text-xs text-muted-foreground font-mono">
           
          </p>
          <p className="text-xs text-muted-foreground font-mono">
         
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
