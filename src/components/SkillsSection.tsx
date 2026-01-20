import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Backend / APIs',
    skills: ['Java', 'Python', 'Node.js', 'Express.js', 'REST APIs'],
  },
  {
    title: 'Frontend / UI',
    skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'HTML5/CSS3'],
  },
  {
    title: 'Databases / Storage',
    skills: ['MySQL', 'MongoDB', 'Firebase'],
  },
  {
    title: 'Machine Learning / AI',
    skills: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'Feature Extraction', 'Classification', 'Anomaly Detection'],
  },
  {
    title: 'Tools & Utilities',
    skills: ['Git', 'Postman', 'NPM', 'Stripe API', 'Jupyter Notebook'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Technologies and tools I work with to build modern applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="p-6 rounded-2xl bg-gradient-card border border-border shadow-card hover:border-primary/50 transition-all duration-300 group"
            >
              <h3 className="text-lg font-semibold mb-4 text-primary group-hover:text-gradient transition-all">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-secondary/50 text-foreground border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
