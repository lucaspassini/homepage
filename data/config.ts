type Data = {
  title: string;
  desc: string;
};

type Projects = {
  title: string;
  desc: string;
  project: Object[];
};

type Contact = {
  title: string;
  email: string;
  github: string;
  twitter: string;
  linkedin: string;
};

export const meta: Data = {
  title: 'Lucas Passini',
  desc: "Hey there, I'm Lucas. I'm a front-end developer."
};

export const hero: Data = {
  title: "Hey, I'm Lucas 👋 ",
  desc: "I'm a front-end developer and designer, crafting clean and functional solutions."
};

export const projects: Projects = {
  title: 'Projects',
  desc: "Here are some of my favorite projects that I've worked on.",
  project: [
    {
      title: 'homepage',
      description: 'This personal homepage.',
      link: 'https://lucaspassini.dev',
      github: 'lucaspassini/homepage'
    },
    {
      title: 'react-meals',
      description: 'A food ordering front-end.',
      link: 'https://passini-reactmeals.vercel.app',
      github: 'lucaspassini/react-meals'
    },
    {
      title: 'react-tracker',
      description: 'Expense tracker front-end.',
      link: 'https://passini-expensetracker.vercel.app',
      github: 'lucaspassini/react-tracker'
    }
  ]
};

export const technologies: Data = {
  title: 'Technologies',
  desc: 'I use a wide range of tools to resolve each problem in the most efficient way.'
};

export const contact: Contact = {
  title: 'Contact 📪',
  email: 'passini@proton.me',
  github: 'lucaspassini',
  twitter: 'lucaspassini_',
  linkedin: 'lucaspassini'
};
