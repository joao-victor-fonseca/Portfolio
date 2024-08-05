import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <motion.header
      className="fixed top-0 left-0 w-full p-4 bg-gray-900 backdrop-blur-md shadow-md z-50 flex justify-between items-center transition-colors duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavLink
        to="/"
        className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold shadow-lg mr"
      >
        <motion.p
          className="text-2xl text-gradient bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        >
          JV
        </motion.p>
      </NavLink>
      <nav className="flex text-lg gap-8 font-medium ml-6">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 border-b-4 border-blue-500 transition-transform transform translate-y-1"
              : "text-white hover:text-blue-500 transition-colors duration-300"
          }
        >
          Sobre
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 border-b-4 border-blue-500 transition-transform transform translate-y-1"
              : "text-white hover:text-blue-500 transition-colors duration-300"
          }
        >
          Projetos
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 border-b-4 border-blue-500 transition-transform transform translate-y-1"
              : "text-white hover:text-blue-500 transition-colors duration-300"
          }
        >
          Contato
        </NavLink>
      </nav>
    </motion.header>
  );
};
