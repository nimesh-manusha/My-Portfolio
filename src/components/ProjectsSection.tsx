import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Network Monitoring Tool',
    description: 'A comprehensive tool for monitoring network traffic and detecting anomalies using machine learning algorithms.',
    tech: ['Python', 'TensorFlow', 'Flask', 'React'],
    github: 'https://github.com/nimesh-manusha',
  },
  {
    title: 'Mobile Commerce App',
    description: 'Full-stack e-commerce mobile application with payment integration and real-time inventory management.',
    tech: ['React Native', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/nimesh-manusha',
  },
  {
    title: 'DevOps Dashboard',
    description: 'Real-time monitoring dashboard for CI/CD pipelines with deployment analytics and notifications.',
    tech: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind'],
    github: 'https://github.com/nimesh-manusha',
  },
  {
    title: 'AI Chatbot Platform',
    description: 'Intelligent chatbot system with natural language processing for customer support automation.',
    tech: ['Python', 'PyTorch', 'FastAPI', 'React'],
    github: 'https://github.com/nimesh-manusha',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A selection of projects I've worked on. Visit my GitHub for more.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group p-6 rounded-2xl bg-gradient-card border border-border shadow-card hover:border-primary/50 hover:shadow-glow transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                  <Folder size={24} />
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs rounded-md bg-secondary/50 text-muted-foreground font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/nimesh-manusha?tab=repositories" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
