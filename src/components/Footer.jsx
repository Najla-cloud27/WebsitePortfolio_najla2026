import { siteInfo } from '../data/site.js';
import { GithubIcon, LinkedinIcon, EmailIcon, WhatsappIcon } from './icons.jsx';

const socials = [
  { name: 'GitHub', url: siteInfo.github, icon: <GithubIcon className="w-4 h-4" /> },
  { name: 'LinkedIn', url: siteInfo.linkedin, icon: <LinkedinIcon className="w-4 h-4" /> },
  { name: 'Email', url: siteInfo.emailMailto, icon: <EmailIcon className="w-4 h-4" /> },
  { name: 'WhatsApp', url: siteInfo.whatsapp, icon: <WhatsappIcon className="w-4 h-4" /> },
];

function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#060B1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="text-center md:text-left">
            <div className="font-heading font-bold text-white text-sm md:text-base">
              {siteInfo.name}
            </div>
            <div className="text-[11px] text-text-secondary tracking-wide mt-0.5">
              {siteInfo.role}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-white hover:bg-primary/20 hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-white/5 text-center">
          <p className="text-text-secondary/50 text-xs">
            &copy; {new Date().getFullYear()} {siteInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;