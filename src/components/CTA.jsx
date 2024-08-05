import { Link } from "react-router-dom";

export const CTA = () => {
  return (
    <section className="cta bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-center rounded-lg shadow-lg mt-16">
      <p className="text-white text-3xl font-semibold mb-4">
        Tem um projeto em mente? <br />
        Vamos construir algo incrível juntos!
      </p>
      <Link
        to="/contact"
        className="btn bg-white text-blue-600 hover:bg-gray-200 transition duration-300 rounded-lg px-6 py-3 font-semibold"
      >
        Contato
      </Link>
    </section>
  );
};
