import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { Fox } from "../models/Fox";
import { useAlert } from "../hooks/useAlert";
import { Alert } from "../components/Alert";
import { Loader } from "../components/Loader";
import {
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";

export const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Obrigado pela sua mensagem 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setCurrentAnimation("idle");
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, [2000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setCurrentAnimation("idle");

          showAlert({
            show: true,
            text: "Não recebi sua mensagem 😢",
            type: "danger",
          });
        }
      );
  };

  return (
    <section className="relative flex flex-col lg:flex-row h-screen bg-gradient-to-br from-purple-800 to-blue-500 text-white overflow-hidden">
      {alert.show && <Alert {...alert} />}

      <div className="flex-1 flex flex-col items-center justify-center p-8 lg:p-16 relative z-10">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Entre em <span className="text-yellow-400">Contato</span>
        </h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white text-black p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105"
        >
          <label className="block mb-4">
            Nome
            <input
              type="text"
              name="name"
              className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors"
              placeholder="Seu Nome"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="block mb-4">
            Email
            <input
              type="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors"
              placeholder="Seu Email"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="block mb-6">
            Mensagem
            <textarea
              name="message"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors"
              placeholder="Sua Mensagem"
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>

        <div className="mt-8 flex flex-col items-center">
          <p className="text-lg mb-4">Ou entre em contato diretamente:</p>
          <div className="flex gap-4 mb-4">
            <LinkedinShareButton
              url={"https://www.linkedin.com/in/joaovictorfonsecaassis/"}
            >
              <LinkedinIcon size={42} round />
            </LinkedinShareButton>
            <WhatsappShareButton
              url={"https://api.whatsapp.com/send?phone=5531971772211"}
            >
              <WhatsappIcon size={42} round />
            </WhatsappShareButton>
          </div>
          <div className="text-lg">
            <p>joaovictorfosecaassis@gmail.com</p>
            <p>(31) 97177-2211</p>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 w-full bg-gray-200 relative z-0 overflow-hidden">
        <Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}>
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};
