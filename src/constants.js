export const PROFILE = {
  name: 'Abror Bakhromov',
  title: 'Cybersecurity & MERN Developer',
  bio: 'Ethical hacker & full-stack engineer | 3 years software development | 2 years cybersecurity',
  description: 'I build secure full-stack applications and test them for vulnerabilities. Expert in MERN stack, ethical hacking, and secure system architecture.'
};

export const SKILLS_DEV = [
  "MongoDB",
  "Express.js",
  "React.js",
  "Node.js",
  "Tailwind CSS",
  "Redux",
  "WebSockets",
  "SQL",
  "PostgreSQL",
  "RESTful APIs"
];

export const SKILLS_HACKER = [
  "Linux",
  "Nmap",
  "Wireshark",
  "Metasploit",
  "Burp Suite",
  "Bash",
  "Python",
  "Penetration Testing",
  "Network Security",
  "Vulnerability Assessment"
];

export const CERTIFICATIONS = [
  {
    title: 'CEH (Certified Ethical Hacker)',
    issuer: 'EC-Council',
    year: '2024',
    link: '#'
  },
  {
    title: 'MERN Stack Developer',
    issuer: 'Advanced Development Institute',
    year: '2023',
    link: '#'
  },
  {
    title: 'Linux System Administration',
    issuer: 'Linux Foundation',
    year: '2023',
    link: '#'
  }
];

export const PROJECTS = [
  {
    title: 'E-Commerce Security Platform',
    description: 'Secure MERN stack e-commerce with OAuth, encryption, and payment integration',
    tech: ['React', 'Node.js', 'MongoDB', 'Security'],
    link: '#',
    github: '#'
  },
  {
    title: 'Penetration Testing Framework',
    description: 'Automated pentest tool for network vulnerability scanning and reporting',
    tech: ['Python', 'Linux', 'Bash', 'Metasploit'],
    link: '#',
    github: '#'
  },
  {
    title: 'Secure API Gateway',
    description: 'Rate-limited API with JWT auth, DDoS protection, and request validation',
    tech: ['Node.js', 'Express', 'MongoDB', 'Redis'],
    link: '#',
    github: '#'
  }
];

export const TERMINAL_COMMANDS = {
  about: 'Abror Bakhromov — Ethical hacker & MERN developer with 3 years development + 2 years cybersecurity expertise.',
  skills: 'MERN (React, Node, Express, Mongo) + Cyber (Nmap, Linux, Wireshark, Burp Suite, Pentesting)',
  projects: '-> Secure E-Commerce Platform [MERN]\n-> Penetration Testing Framework [Python/Linux]\n-> Secure API Gateway [Node.js]',
  contact: 'Email: abror@dev.com | GitHub: github.com/abror | LinkedIn: linkedin.com/in/abror'
};

export const TERMINAL_HELP = [
  { text: 'Available commands:', type: 'header' },
  { text: '  about        — Who am I', type: 'cmd' },
  { text: '  skills       — Tech stack & tools', type: 'cmd' },
  { text: '  projects     — My projects', type: 'cmd' },
  { text: '  contact      — Contact info', type: 'cmd' },
  { text: '  clear        — Clear terminal', type: 'cmd' }
];

export const THEME = {
  dev: {
    primary: 'blue-400',
    primaryHex: '#3b82f6',
    secondary: 'blue-500',
    border: 'border-blue-500',
    bg: 'bg-blue-500',
    text: 'text-blue-400',
    light: 'blue-500/5'
  },
  hacker: {
    primary: 'emerald-400',
    primaryHex: '#10b981',
    secondary: 'emerald-500',
    border: 'border-emerald-500',
    bg: 'bg-emerald-500',
    text: 'text-emerald-400',
    light: 'emerald-500/5'
  }
};
