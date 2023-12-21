import { Link } from "react-router-dom";
export const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Algum projeto em mente? <br className="sm:block hidden" />
        Vamos construir algo juntos!
      </p>
      <Link to="/contact" className="btn">
        {" "}
        Contato
      </Link>
    </section>
  );
};
