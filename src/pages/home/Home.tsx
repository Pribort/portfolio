import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Briefcase,
  User,
  Coffee,
  Palette,
} from "lucide-react";

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950 to-violet-900">
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-violet-950/80 backdrop-blur-lg shadow-lg" : ""
        }`}
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center justify-between h-20">
            <button
              onClick={() => scrollToSection("top")}
              className="text-2xl font-bold text-white hover:text-violet-300 transition-colors"
            >
              Pri<span className="text-violet-400">.dev</span>
            </button>
            <div className="hidden md:flex gap-8">
              {[
                { id: "about", label: "Sobre" },
                { id: "portfolio", label: "Projetos" },
                { id: "contact", label: "Contato" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-violet-200 hover:text-white transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <header id="top" className="relative overflow-hidden py-32 pt-40">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/80 to-violet-900/80"></div>
        <div className="container mx-auto px-4 max-w-5xl relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block px-4 py-2 bg-violet-800/30 rounded-full text-violet-200 mb-6 backdrop-blur-sm">
                Desenvolvedora Full Stack
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                Priscila <span className="text-violet-300">Bortniuk</span>
              </h1>
              <p className="text-lg text-violet-200 mb-8 max-w-2xl">
                Construindo experiências digitais intuitivas com boas práticas e
                um toque de design
              </p>
              <div className="flex gap-6 justify-center md:justify-start">
                <a
                  href="https://github.com/Pribort"
                  className="text-violet-200 hover:text-white transition-colors"
                >
                  <Github className="w-7 h-7" />
                </a>
                <a
                  href="https://www.linkedin.com/in/priscilabortniuk/"
                  className="text-violet-200 hover:text-white transition-colors"
                >
                  <Linkedin className="w-7 h-7" />
                </a>
                <a
                  href="mailto:pribortniuk@gmail.com"
                  className="text-violet-200 hover:text-white transition-colors"
                >
                  <Mail className="w-7 h-7" />
                </a>
              </div>
            </div>
            <div className="flex-1 flex justify-center relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-400 to-violet-600 rounded-full blur-3xl opacity-20"></div>
                <img
                  src="https://i.imgur.com/boEuaDa.jpg"
                  alt="Profile"
                  className="relative w-72 h-72 object-cover rounded-3xl border-2 border-violet-400/20 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="about" className="py-32 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-2 mb-12">
            <User className="w-6 h-6 text-violet-400" />
            <h2 className="text-3xl font-bold text-white">Sobre Mim</h2>
          </div>
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-violet-400/10">
            <p className="text-lg text-violet-100 mb-12 leading-relaxed">
              Em transição para a área de tecnologia, sou desenvolvedora full
              stack Java com um carinho especial pelo front-end. Estudo Análise
              e Desenvolvimento de Sistemas e estou sempre buscando aprender
              mais para criar interfaces modernas, intuitivas e bem
              estruturadas. Além de desenvolver, sou mãe e apaixonada por gatos,
              equilibrando a rotina entre família, estudos e código. 💻❤️🐱
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group bg-violet-950/50 p-8 rounded-2xl border border-violet-400/10 hover:border-violet-400/20 transition-all duration-300">
                <Code2 className="w-10 h-10 text-violet-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Frontend
                </h3>
                <p className="text-violet-200">
                  React, TypeScript, Tailwind CSS
                </p>
              </div>
              <div className="group bg-violet-950/50 p-8 rounded-2xl border border-violet-400/10 hover:border-violet-400/20 transition-all duration-300">
                <Coffee className="w-10 h-10 text-violet-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Backend
                </h3>
                <p className="text-violet-200">Java, Spring Boot, PostgreSQL</p>
              </div>
              <div className="group bg-violet-950/50 p-8 rounded-2xl border border-violet-400/10 hover:border-violet-400/20 transition-all duration-300">
                <Palette className="w-10 h-10 text-violet-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-white mb-2">UI/UX</h3>
                <p className="text-violet-200">Figma e Prototipação</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-32 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 max-w-5xl relative">
          <div className="flex items-center gap-2 mb-12">
            <Briefcase className="w-6 h-6 text-violet-400" />
            <h2 className="text-3xl font-bold text-white">Projetos</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                id: 1,
                image: "https://i.imgur.com/QUzxjf4.jpg",
                title: "Projeto CRM",
                description:
                  "Desenvolvemos um CRM para consultórios médicos, com cadastro de pacientes, agendamentos e controle financeiro. Utilizamos React, TypeScript e Tailwind no front-end, e no back-end, Java com Spring Boot, Spring Security e PostgreSQL. O projeto inclui autenticação segura, documentação com Swagger, consumo de APIs e deploy no Vercel.",
                codeLink:
                  "https://github.com/Projeto-Integrador-grupo-4-Modelo/inovamed_frontend",
                demoLink: "https://inovamed-xi.vercel.app/",
              },
              {
                id: 2,
                image: "https://i.imgur.com/hjIf43P.png",
                title: "Blog Pessoal",
                description:
                  "Projeto fullstack desenvolvido com Java, Spring Boot e SQL no back-end, e React, TypeScript e Tailwind no front-end. Focado na criação de APIs RESTful, inclui funcionalidades de autenticação e autorização com Spring Security Basic, documentação automatizada com Swagger e deploy realizado na Vercel para acesso online.",
                codeLink: "https://github.com/Pribort/blogpessoal_react",
                demoLink: "https://blogpessoal-react-snowy.vercel.app/",
              },
              {
                id: 3,
                image: "https://i.imgur.com/5yQnUh4.png",
                title: "Sistema RH",
                description:
                  "Front-end da aplicação desenvolvida no backend, focado exclusivamente na parte de estilização e design da interface. Este projeto implementa a aparência visual e a experiência do usuário, integrando com a API para apresentar os dados de forma intuitiva e atraente.",
                codeLink:
                  "https://github.com/Projeto-Integrador-grupo-4-Modelo/rh-frontend",
                demoLink: "",
              },
              {
                id: 4,
                image: "https://i.imgur.com/b0oXOND.png",
                title: "Sistema e-commerce para Farmácia",
                description:
                  "Sistema de e-commerce para farmácia, desenvolvido como projeto final do bootcamp, com o objetivo de validar o aprendizado adquirido. O projeto consiste na integração com o CRUD do backend, além da criação de um design moderno e funcional, visando proporcionar uma experiência de compra intuitiva e eficiente para o usuário.",
                codeLink: "https://github.com/Pribort/projeto_final_bloco_03",
                demoLink: "",
              },
            ].map((project) => (
              <div
                key={project.id}
                className="group bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-violet-400/10 hover:border-violet-400/20 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-violet-950 to-transparent opacity-0 group-hover:opacity-60 transition-opacity"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-violet-200 mb-6">{project.description}</p>
                  <div className="flex gap-4">
                    <a
                      href={project.codeLink}
                      className="inline-flex items-center gap-2 text-violet-400 hover:text-white transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      Código
                    </a>

                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        className="inline-flex items-center gap-2 text-violet-400 hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Demonstração
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-2 mb-12">
            <Mail className="w-6 h-6 text-violet-400" />
            <h2 className="text-3xl font-bold text-white">Contato</h2>
          </div>
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-12 border border-violet-400/10">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Vamos conversar!
              </h3>
              <p className="text-violet-200 mb-12 max-w-2xl mx-auto">
                Estou sempre aberta a novas oportunidades e colaborações. Entre
                em contato comigo através das redes sociais.
              </p>
              <div className="flex justify-center gap-8">
                <a
                  href="https://github.com/Pribort"
                  className="group flex flex-col items-center gap-3 text-violet-400 hover:text-white transition-colors"
                >
                  <div className="p-4 rounded-2xl bg-violet-950/50 group-hover:bg-violet-900/50 transition-colors">
                    <Github className="w-8 h-8" />
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/priscilabortniuk/"
                  className="group flex flex-col items-center gap-3 text-violet-400 hover:text-white transition-colors"
                >
                  <div className="p-4 rounded-2xl bg-violet-950/50 group-hover:bg-violet-900/50 transition-colors">
                    <Linkedin className="w-8 h-8" />
                  </div>
                </a>
                <a
                  href="mailto:pribortniuk@gmail.com"
                  className="group flex flex-col items-center gap-3 text-violet-400 hover:text-white transition-colors"
                >
                  <div className="p-4 rounded-2xl bg-violet-950/50 group-hover:bg-violet-900/50 transition-colors">
                    <Mail className="w-8 h-8" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <p className="text-violet-300">
            © 2025 Priscila Bortniuk. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
