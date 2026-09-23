import { motion } from 'framer-motion';
import { siteInfo } from '../data/site.js';
import { WhatsappIcon, EmailIcon, GithubIcon, LinkedinIcon } from './icons.jsx';

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
});

const contactMethods = [
  {
    name: 'WhatsApp',
    url: siteInfo.whatsapp,
    icon: <WhatsappIcon className="w-6 h-6" />,
    color: 'hover:border-green-500/50 hover:text-green-400',
    detail: '+62 851-8287-9771',
  },
  {
    name: 'Email',
    url: siteInfo.emailMailto,
    icon: <EmailIcon className="w-6 h-6" />,
    color: 'hover:border-primary/50 hover:text-primary',
    detail: siteInfo.email,
  },
  {
    name: 'GitHub',
    url: siteInfo.github,
    icon: <GithubIcon className="w-6 h-6" />,
    color: 'hover:border-white/50 hover:text-white',
    detail: 'github.com/Najla-cloud27',
  },
  {
    name: 'LinkedIn',
    url: siteInfo.linkedin,
    icon: <LinkedinIcon className="w-6 h-6" />,
    color: 'hover:border-blue-500/50 hover:text-blue-400',
    detail: 'in/najla-haura-mumtazah',
  },
];

function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div {...fadeUp(0)} className="relative text-center">
          <div className="absolute -inset-10 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-3xl blur-3xl opacity-50" />

          <div className="relative bg-[#10162E]/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-text-secondary text-xs md:text-sm font-medium mb-4">
              Get In Touch
            </span>

            <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mt-4 mb-4">
              Have a project{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                in mind?
              </span>
            </h2>

            <p className="text-text-secondary text-sm md:text-base max-w-lg mx-auto mb-10">
              I'm open to internship opportunities, freelance work, collaborations, and
              professional networking. Whether it's a website, a Flutter UI, or simply a
              conversation about technology — feel free to reach out.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactMethods.map((method, i) => (
                <motion.a
                  key={method.name}
                  href={method.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...fadeUp(i + 1)}
                  className={`group relative inline-flex items-center gap-4 px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-text-secondary ${method.color} transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(79,124,255,0.15)] text-left`}
                >
                  <span className="absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded-xl transition-all duration-300" />
                  <span className="relative shrink-0">{method.icon}</span>
                  <span className="relative min-w-0">
                    <span className="block font-medium text-sm">{method.name}</span>
                    <span className="block text-xs text-text-secondary/60 truncate">
                      {method.detail}
                    </span>
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;