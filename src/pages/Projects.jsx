import { Link } from "react-router-dom";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import { CTA } from "../components/CTA";

export const Projects = () => {
  return (
    <section className="max-container py-20">
      <h1 className="text-4xl font-bold text-center mb-8">
        Meus <span className="text-gradient">Projetos</span>
      </h1>
      <p className="text-lg text-gray-700 text-center mb-16">
        Estes são alguns dos projetos que mais tenho orgulho. Muitos deles são
        de código aberto, então sinta-se à vontade para explorar e contribuir
        com suas ideias.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project) => (
          <div
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 flex flex-col justify-between"
            key={project.name}
            style={{
              backgroundImage: `url(${project.backgroundImageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className={`p-6 ${project.theme} flex-grow bg-white bg-opacity-75`}
            >
              <img
                src={project.iconUrl}
                alt={`Ícone do projeto ${project.name}`}
                className="w-24 h-24 mx-auto"
              />
              <h4 className="text-2xl font-semibold text-center mt-4">
                {project.name}
              </h4>
              <p className="text-gray-600 text-center mt-2">
                {project.description}
              </p>
            </div>
            <div className="text-center mt-4 p-6 bg-white bg-opacity-75">
              <Link
                to={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold flex items-center justify-center hover:text-blue-800"
              >
                Live Link{" "}
                <img
                  src={arrow}
                  alt="Seta indicando link"
                  className="w-4 h-4 ml-2"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <CTA />
    </section>
  );
};
