export const siteInfo = {
  name: 'Najla Haura Mumtazah',
  firstName: 'Najla',
  lastName: 'Mumtazah',
  title: 'Website Developer',
  subtitle: 'Flutter UI Developer',
  role: 'Website Developer • Flutter UI Developer',
  location: 'Karawang, West Java, Indonesia',
  email: 'najlahauramumtazah@gmail.com',
  emailMailto: 'mailto:najlahauramumtazah@gmail.com',
  github: 'https://github.com/Najla-cloud27',
  linkedin: 'https://www.linkedin.com/in/najla-haura-mumtazah-907564373/',
  whatsapp: 'https://wa.me/6285182879771',
  cv: '../assets/documents/certificates/cv/Cv_ATS_Najla_Haura_Mumtazah (2).pdf',
};

export const cvUrl = new URL(
  '../assets/documents/certificates/cv/Cv_ATS_Najla_Haura_Mumtazah (2).pdf',
  import.meta.url
).href;

export const profileImg = new URL('../assets/profile/najla-profile.jpeg', import.meta.url).href;

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
];