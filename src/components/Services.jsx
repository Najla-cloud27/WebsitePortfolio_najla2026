import { motion } from 'framer-motion';

const services = [
  {
    title: 'Website Development',
    description: 'Membangun website modern, responsif, dan performa tinggi menggunakan teknologi terkini seperti React, Laravel, dan Tailwind CSS.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: 'Flutter UI Development',
    description: 'Mendesain dan mengembangkan antarmuka pengguna yang elegan dan responsif untuk aplikasi mobile menggunakan Flutter.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    title: 'Website Support',
    description: 'Memberikan layanan perawatan, optimasi, dan dukungan teknis untuk website agar tetap berjalan optimal dan aman.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.854 5.855a2.25 2.25 0 01-3.182-3.182l5.855-5.854M16.5 12l1.5-1.5a4.5 4.5 0 00-6.364-6.364L9 6.75M12 16.5l-1.5 1.5a4.5 4.5 0 106.364 6.364L21 18" />
      </svg>
    ),
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: 'easeOut' },
  }),
};

function Services() {
  return (
    <section id="services" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-text-secondary text-xs md:text-sm font-medium mb-4">
            What I Do
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mt-3">
            My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 1}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-[#10162E]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 flex items-center justify-center text-primary mb-5 group-hover:scale-110 group-hover:text-accent group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
