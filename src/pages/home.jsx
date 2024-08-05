import "react-vertical-timeline-component/style.min.css";
import Type from "../components/Type";
import { motion } from "framer-motion";
import { projects } from "../constants";
import { FaInfoCircle, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "../assets/images/homeMain.json";

export const Home = () => {
  const navigate = useNavigate();

  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const handleProjectClick = () => {
    navigate("/projects");
  };

  return (
    <section className="relative flex lg:flex-row flex-col h-[100vh] bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient text-white">
      <div className="container mx-auto py-16 px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeLeft}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-4xl md:text-6xl pb-4">
              Olá{" "}
              <span role="img" aria-label="waving hand" className="wave">
                👋🏻
              </span>
            </h1>
            <h2 className="text-3xl md:text-5xl">
              Meu nome é{" "}
              <span className="text-yellow-300 font-bold drop-shadow-lg">
                João Victor{" "}
              </span>
            </h2>
            <div className="pt-8 text-xl">
              <Type />
            </div>
            <div className="pt-8 flex space-x-4">
              <a
                href="/about"
                className="btn-primary bg-yellow-300 text-gray-800 hover:bg-yellow-400 transition duration-300 rounded-full px-6 py-3 text-lg font-semibold shadow-lg flex items-center space-x-2"
              >
                <FaInfoCircle />
                <span>Sobre Mim</span>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeRight}
            transition={{ duration: 0.5 }}
            className="flex justify-center md:justify-end mt-12 md:mt-0"
          >
            <Lottie
              animationData={animationData}
              style={{ width: "600px", height: "auto" }}
              className="rounded-3xl shadow-2xl border-4 border-yellow-300 transform transition duration-500 hover:scale-105 hover:shadow-xl mt-9"
            />
          </motion.div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl md:text-2xl">
            Desenvolvedor de software apaixonado por criar soluções inovadoras.
          </p>
        </div>

        <div className="mt-16 flex flex-col items-center">
          <h3 className="text-2xl md:text-3xl mb-8">Projetos em Destaque</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <motion.div
                key={project.name}
                className="bg-white p-6 rounded-xl shadow-lg cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-xl hover:border-yellow-500 border-2 border-transparent"
                onClick={handleProjectClick}
              >
                <img
                  src={project.iconUrl}
                  alt={project.name}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <h4 className="text-xl font-bold mt-4 text-gray-800">
                  {project.name}
                </h4>
                <p className="text-gray-700 mt-2">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="/contact"
            className="btn-primary bg-yellow-300 text-gray-800 hover:bg-yellow-400 transition duration-300 rounded-full px-6 py-3 text-lg font-semibold shadow-lg mb-10 flex items-center space-x-2"
          >
            <FaEnvelope />
            <span>Entre em Contato</span>
          </a>
        </div>
      </div>
    </section>
  );
};
