type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
    skills: TSection;
  };
};

export const config: TConfig = {
  html: {
    title: "Kailash Anand",
    fullName: "Kailash Anand",
    email: "kailashanand00@gmail.com",
  },
  hero: {
    name: "Kailash Anand",
    p: ["Systems Programmer,", "Full Stack Developer with Security Principles"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview",
      content: `I'm a passionate software developer with a strong foundation in systems programming,
       full-stack development, and security. With hands-on experience in Java, C, and Python, 
       I specialize in backend optimizations, scalable architectures, and secure software solutions. 
       I've built full-stack applications using React, Node.js, and PostgreSQL, and have explored 
       cybersecurity concepts through coursework in Web Security, Offensive Security, and System Fundamentals. 
       Currently, I'm delving deeper into advanced systems programming, distributed systems, and Unix-based development. 
       Always eager to learn and innovate, I strive to build efficient, secure, and user-friendly solutions that make an impact. 
       Let's create something remarkable together!`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience",
    },
    skills: {
      p: "What I can do",
      h2: "Skills",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials",
    },
    works: {
      p: "My work",
      h2: "Projects",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
