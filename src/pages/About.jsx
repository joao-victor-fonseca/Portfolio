import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { skills, experiences } from "../constants";
import { CTA } from "../components/CTA";
import {
  FaGithub,
  FaOrcid,
  FaGraduationCap,
  FaResearchgate,
} from "react-icons/fa";

export const About = () => {
  return (
    <section className="max-container py-20">
      {/* Introdução */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">
          Sobre <span className="text-gradient">Mim</span>
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Sou João Victor Fonseca Assis, estudante de Ciência da Computação no
          Centro Universitário Una. Tenho uma forte paixão por desenvolvimento
          de software e tecnologias web, com experiência prática em diversas
          linguagens de programação, incluindo JavaScript, TypeScript, Java e
          C#. Minhas competências abrangem frameworks modernos como React,
          Next.js, Vue.js, e .NET, além de ferramentas essenciais como Node.js,
          Docker, Git e Prisma. Tenho também conhecimento em bancos de dados
          relacionais e não relacionais, incluindo PostgreSQL e MySQL.
          Desenvolvi vários projetos significativos e estou sempre em busca de
          novos desafios que me permitam aprimorar minhas habilidades e causar
          um impacto positivo através da tecnologia.
        </p>
        <div className="mt-6 flex flex-wrap justify-center space-x-6 gap-4">
          <a
            href="https://github.com/joao-victor-fonseca/"
            className="text-blue-600 hover:underline flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="mr-2" /> Meu GitHub
          </a>
          <a
            href="https://orcid.org/0009-0004-4616-6011"
            className="text-green-600 hover:underline flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaOrcid className="mr-2" /> Registro no ORCID
          </a>
          <a
            href="http://lattes.cnpq.br/6540329967602276"
            className="text-yellow-600 hover:underline flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGraduationCap className="mr-2" /> Currículo Lattes
          </a>
          <a
            href="https://www.researchgate.net/profile/Joao-Victor-Fonseca-Assis"
            className="text-blue-800 hover:underline flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaResearchgate className="mr-2" /> ResearchGate
          </a>
        </div>
      </div>

      {/* Artigo */}
      <div className="py-10">
        <h3 className="text-3xl font-semibold text-center mb-8">
          Artigo Publicado
        </h3>
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-4">
            Recentemente, apresentei meu artigo intitulado "Inova Lab Una -
            Economic Radar: Mobile Application to Enhance Investment
            Attractiveness in Small Cities" na 6ª Conferência Internacional
            sobre Futuro dos Negócios, Gestão e Economia, realizada virtualmente
            em Copenhague, Dinamarca 🇩🇰. O artigo explora como a tecnologia pode
            ser utilizada para aumentar a atratividade de investimentos em
            cidades menores, promovendo o desenvolvimento econômico local.
          </p>
        </div>
      </div>

      {/* Habilidades */}
      <div className="py-10">
        <h3 className="text-3xl font-semibold text-center mb-8">
          Minhas Habilidades
        </h3>
        <div className="flex flex-wrap justify-center gap-10">
          {skills.map((skill) => (
            <div
              className="w-24 h-24 bg-white shadow-lg rounded-full flex items-center justify-center transition-transform transform hover:scale-105"
              key={skill.name}
            >
              <img
                src={skill.imageUrl}
                alt={skill.name}
                className="w-12 h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Certificados */}
      <div className="py-10">
        <h3 className="text-3xl font-semibold text-center mb-8">
          Certificados
        </h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500"></div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain "
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.borderBottomModel,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-blue-950 text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-slate-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-slate-500 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <CTA />
    </section>
  );
};
