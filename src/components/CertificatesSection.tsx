import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const certificates = [
  {
    name: 'AWS Certified Cloud Practitioner',
    organization: 'Amazon Web Services',
    date: 'December 2024',
    credentialId: 'ABC123XYZ',
    link: 'https://aws.amazon.com/verification',
    color: 'from-orange-500/20 to-yellow-500/20',
  },
  {
    name: 'Meta Front-End Developer',
    organization: 'Meta (Coursera)',
    date: 'November 2024',
    credentialId: 'META-FE-2024',
    link: 'https://coursera.org/verify',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    name: 'Google IT Support Professional',
    organization: 'Google (Coursera)',
    date: 'October 2024',
    credentialId: 'GOOGLE-IT-2024',
    link: 'https://coursera.org/verify',
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    name: 'Cisco Certified Network Associate (CCNA)',
    organization: 'Cisco',
    date: 'September 2024',
    credentialId: 'CSCO12345678',
    link: 'https://cisco.com/verify',
    color: 'from-purple-500/20 to-pink-500/20',
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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Certificates</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional certifications and credentials that validate my expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full">
                {/* Certificate Icon */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                    <Award size={24} />
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Button variant="ghost" size="icon" asChild>
                      <a href={cert.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={18} />
                      </a>
                    </Button>
                  </motion.div>
                </div>

                {/* Certificate Details */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {cert.name}
                </h3>
                
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Building2 size={16} />
                  <span className="text-sm">{cert.organization}</span>
                </div>
                
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Calendar size={16} />
                  <span className="text-sm">{cert.date}</span>
                </div>

                {/* Credential ID */}
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    Credential ID: <span className="text-foreground font-mono">{cert.credentialId}</span>
                  </p>
                </div>

                {/* Verify Button */}
                <div className="mt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    asChild
                  >
                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={14} className="mr-2" />
                      Verify Certificate
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};