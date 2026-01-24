import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Linkedin, Github, Send, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';
import MatrixRain from './MatrixRain';

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/pushkaran23' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/pushkaran' },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Message sent successfully!', {
      description: "I'll get back to you as soon as possible.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Matrix Background */}
      <div className="absolute inset-0 opacity-20">
        <MatrixRain />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Terminal-style header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p 
            className="text-muted-foreground font-mono text-lg mb-6"
            style={{ textShadow: '0 0 10px hsl(var(--muted-foreground) / 0.3)' }}
          >
            Ready to build. Ready to deliver. Welcome to the Blockchain.
          </p>
        </motion.div>

        {/* Contact Protocol Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div 
            className="relative p-8 rounded-xl border-2 border-neon-cyan/30 bg-background/80 backdrop-blur-sm"
            style={{
              boxShadow: '0 0 30px hsl(var(--neon-cyan) / 0.1), inset 0 0 30px hsl(var(--neon-cyan) / 0.05)',
            }}
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-neon-cyan font-mono text-lg">{'>'}</span>
              <span 
                className="text-neon-cyan font-mono font-semibold tracking-wider"
                style={{ textShadow: '0 0 10px hsl(var(--neon-cyan) / 0.5)' }}
              >
                CONTACT_PROTOCOL_INITIATED
              </span>
            </div>
            
            {/* Email display */}
            <a 
              href="mailto:pushprakash23@gmail.com"
              className="flex items-center gap-4 p-4 rounded-lg bg-neon-cyan/5 border border-neon-cyan/20 hover:border-neon-cyan/50 transition-all group"
              style={{
                boxShadow: '0 0 15px hsl(var(--neon-cyan) / 0.1)',
              }}
            >
              <Mail className="w-6 h-6 text-neon-cyan" />
              <span className="text-foreground font-mono text-lg group-hover:text-neon-cyan transition-colors">
                pushprakash23@gmail.com
              </span>
            </a>
            
            {/* Additional info */}
            <p className="text-neon-cyan/60 font-mono text-sm mt-6 text-center">
              Follow @pushkaran_dev for daily Web3 insights
            </p>
            <p className="text-muted-foreground font-mono text-sm mt-2 text-center">
              Open to collaboration and opportunities
            </p>
          </div>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center gap-6 mb-12"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="group p-5 border-2 border-neon-cyan/40 rounded-xl hover:border-neon-cyan transition-all duration-300 bg-background/50"
              style={{
                boxShadow: '0 0 20px hsl(var(--neon-cyan) / 0.15)',
              }}
              whileHover={{
                boxShadow: '0 0 40px hsl(var(--neon-cyan) / 0.4), 0 0 80px hsl(var(--neon-cyan) / 0.2)',
                scale: 1.05,
              }}
            >
              <social.icon className="w-7 h-7 text-neon-cyan" />
            </motion.a>
          ))}
        </motion.div>

        {/* Get More Info Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center mb-12"
        >
          <Button
            variant="neon"
            size="lg"
            className="font-mono tracking-wider px-8"
            asChild
          >
            <a href="#about">
              <MessageSquare className="w-5 h-5 mr-2" />
              GET MORE INFO
            </a>
          </Button>
        </motion.div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center text-muted-foreground font-mono text-sm flex items-center justify-center gap-2"
        >
          <span>💡</span>
          DM me on LinkedIn - Let's build something impactful together
        </motion.p>

        {/* Contact Form - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="max-w-xl mx-auto mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-2 font-mono">
              {'>'} SEND_DIRECT_MESSAGE
            </h3>
          </div>
          
          <form onSubmit={handleSubmit} className="glass-card p-6 space-y-4 border border-neon-cyan/20">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input
                name="name"
                placeholder="Your name"
                required
                className="bg-background/50 border-neon-cyan/20 focus:border-neon-cyan/50 font-mono"
              />
              <Input
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="bg-background/50 border-neon-cyan/20 focus:border-neon-cyan/50 font-mono"
              />
            </div>

            <Input
              name="subject"
              placeholder="Subject"
              required
              className="bg-background/50 border-neon-cyan/20 focus:border-neon-cyan/50 font-mono"
            />

            <Textarea
              name="message"
              placeholder="Your message..."
              rows={4}
              required
              className="bg-background/50 border-neon-cyan/20 focus:border-neon-cyan/50 resize-none font-mono"
            />

            <Button
              type="submit"
              variant="neonFilled"
              size="lg"
              className="w-full font-mono tracking-wider"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                  />
                  SENDING...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  EXECUTE_SEND
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
