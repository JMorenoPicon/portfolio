import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Locale = "es" | "en";

interface Translations {
  navbar: {
    home: string;
    about: string;
    projects: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string[];
    buttonCv: string;
    buttonContact: string;
    avatarAlt: string;
  };
  about: {
    title: string;
    description: string;
  };
  skills: {
    title: string;
  };
  experience: {
    title: string;
  };
  education: {
    title: string;
  };
  projects: {
    title: string;
    githubButton: string;
  };
  contact: {
    title: string;
    description: string;
    name: string;
    email: string;
    message: string;
    sendMessage: string;
    messageSent: string;
  };
  footer: {
    developedBy: string;
    rightsReserved: string;
  };
}

interface LocaleContextType {
  locale: Locale;
  translations: Translations;
  switchLocale: () => void;
}

const translationsData: Record<Locale, Translations> = {
  es: {
    navbar: {
      home: "Inicio",
      about: "Sobre mí",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      title: "Programando con precisión",
      subtitle: [
        "Backend Developer",
        "Apasionado de la Tecnología",
        "Creador de Soluciones",
        "Desarrollador Web",
      ],
      buttonCv: "Mi CV",
      buttonContact: "Contacto",
      avatarAlt: "Avatar de Javier",
    },
    about: {
      title: "Sobre mí",
      description:
        "Soy un desarrollador backend apasionado por la tecnología y la innovación. Me encanta crear soluciones eficientes y optimizar el rendimiento de las aplicaciones. Siempre estoy en busca de nuevos desafíos y oportunidades para seguir aprendiendo.",
    },
    skills: {
      title: "Habilidades",
    },
    experience: {
      title: "Experiencia Profesional",
    },
    education: {
      title: "Educación",
    },
    projects: {
      title: "Proyectos Destacados",
      githubButton: "Ver en GitHub",
    },
    contact: {
      title: "¡Hablemos!",
      description:
        "¿Tienes alguna pregunta o quieres colaborar en un proyecto? Escríbeme y estaré encantado de responder.",
      name: "Nombre",
      email: "Correo Electrónico",
      message: "Mensaje",
      sendMessage: "Enviar Mensaje",
      messageSent: "¡Mensaje enviado correctamente!",
    },
    footer: {
      developedBy: "Desarrollado por",
      rightsReserved: "Todos los derechos reservados.",
    },
  },
  en: {
    navbar: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      title: "Coding with Precision",
      subtitle: [
        "Backend Developer",
        "Technology Enthusiast",
        "Solution Creator",
        "Web Developer",
      ],
      buttonCv: "My Resume",
      buttonContact: "Contact",
      avatarAlt: "Javier's Avatar",
    },
    about: {
      title: "About Me",
      description:
        "I am a backend developer passionate about technology and innovation. I love creating efficient solutions and optimizing application performance. I am always looking for new challenges and opportunities to continue learning.",
    },
    skills: {
      title: "Skills",
    },
    experience: {
      title: "Professional Experience",
    },
    education: {
      title: "Education",
    },
    projects: {
      title: "Featured Projects",
      githubButton: "View on GitHub",
    },
    contact: {
      title: "Let's Talk!",
      description:
        "Do you have any questions or want to collaborate on a project? Send me a message and I'll be happy to respond.",
      name: "Name",
      email: "Email",
      message: "Message",
      sendMessage: "Send Message",
      messageSent: "Message sent successfully!",
    },
    footer: {
      developedBy: "Developed by",
      rightsReserved: "All rights reserved.",
    },
  },
};

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("es");

  // Cargar idioma guardado en localStorage
  useEffect(() => {
    const storedLocale = localStorage.getItem("locale") as Locale | null;
    if (storedLocale && (storedLocale === "es" || storedLocale === "en")) {
      setLocale(storedLocale);
    }
  }, []);

  // Cambiar idioma y guardarlo en localStorage
  const switchLocale = () => {
    setLocale((prevLocale) => {
      const newLocale = prevLocale === "es" ? "en" : "es";
      localStorage.setItem("locale", newLocale);
      return newLocale;
    });
  };

  return (
    <LocaleContext.Provider
      value={{
        locale,
        translations: translationsData[locale],
        switchLocale,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}
