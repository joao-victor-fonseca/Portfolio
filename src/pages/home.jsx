import "react-vertical-timeline-component/style.min.css";
import { homeMain } from "../assets/images";
import Type from "../components/Type";

export const Home = () => {
  return (
    <section className="w-full h-screen relative">
      <div className="container mx-auto py-16 px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl pb-4">
              Olá{" "}
              <span role="img" aria-label="waving hand" className="wave">
                👋🏻
              </span>
            </h1>
            <h2 className="text-3xl md:text-5xl">
              Meu nome é{" "}
              <span className="blue-gradient_text font-bold drop-shadow">
                João Victor{" "}
              </span>
            </h2>
            <div className="pt-8 text-xl">
              <Type />
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src={homeMain}
              alt="Home main"
              className="max-w-xs md:max-w-full w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
