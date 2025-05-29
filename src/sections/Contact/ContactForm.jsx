import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import NeonBlueButton from "../../components/ButtonNeonBlue";
import smileIcon from "../../assets/images/contact/smile-icon2.png";
import icon from "../../assets/images/global/arabesque-blue.png";
import ButtonLoadingAnimation from "../../components/ButtonLoadingAnimation";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const newErrors = {};
    if (!name.trim()) newErrors.name = "Nome é obrigatório";
    if (!email.trim()) newErrors.email = "Email é obrigatório";
    else if (!validateEmail(email))
      newErrors.email = "Digite um endereço de email válido";
    if (!message.trim()) newErrors.message = "Digite uma mensagem";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: name,
          email: email,
          message: message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          setErrors({});
          setIsSent(true);
          setTimeout(() => setIsSent(false), 1500);
        },
        () => {
          alert("Falha ao enviar a mensagem. Por favor tente novamente.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleReset = () => {
    setIsSubmitting(false);
    setErrors({});
    setIsSent(false);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div
      className="max-w-lg p-8 rounded-lg relative bg-[#000]/20 backdrop-blur-sm shadow-[-0px_-0px_10px_5px_#013880] 
      sm:shadow-[-0px_-0px_20px_0px_#013880] animate-[pulse-glow-about_3.0s_ease-in-out_infinite] 
      border-[0.5px] border-transparent transition-all "
    >
      <div className="flex justify-center items-center text-center gap-2 mb-6">
        <h4 className="T2 font-medium text-[var(--light-cyan)] text-[1.4rem] sm:text-2xl">
          Vamos conversar?{" "}
        </h4>

        <img
          src={smileIcon}
          alt=":)"
          className="w-5 h-5 sm:w-5 sm:h-5 rounded-full"
        />
      </div>
      <img
        src={icon}
        alt={"arabesque"}
        className="w-[100%] ml-0 transition duration-300 drop-shadow-[0_0_10px_var(--neon-cyan)]"
      />{" "}
      <form
        onSubmit={handleSubmit}
        className="mt-4 BODY1 text-sm md:text-[1rem] sm:text-lg"
      >
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Digite seu nome"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (errors.name) {
              setErrors((prev) => ({ ...prev, name: undefined }));
            }
          }}
          autoComplete="name"
          className={`w-full p-2 border ${
            errors.name
              ? "border-[var(--red-error)] placeholder-[var(--red-error)]/80 shadow-[-0px_-0px_20px_5px_var(--red-error)]/50 sm:shadow-[-0px_-0px_13px_2px_var(--red-error)]/50"
              : "border-[#00ffff]/50 placeholder-cyan-500/90 shadow-[-0px_-0px_8px_4px_#013880] sm:shadow-[-0px_-0px_13px_2px_#013880]"
          }  focus:outline-none focus:ring-1 focus:ring-[var(--neon-cyan)] 
          focus:shadow-[-0px_-0px_13px_5px_#00b5b5]/60 hover:shadow-[-0px_-0px_13px_5px_#013880] transition-all 
          duration-300 rounded-lg 
          bg-[#0f1f40]/20 backdrop-blur-sm text-[var(--light-cyan)]
          `}
        />

        {errors.name ? (
          <p className="text-[var(--red-error)] text-[0.75rem] T2 font-semibold ml-1">
            {errors.name}
          </p>
        ) : null}

        <input
          id="email"
          name="email"
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email) {
              setErrors((prev) => ({ ...prev, email: undefined }));
            }
          }}
          autoComplete="email"
          className={`w-full p-2 border ${
            errors.email
              ? "border-[var(--red-error)] placeholder-[var(--red-error)]/80 shadow-[-0px_-0px_20px_5px_var(--red-error)]/50 sm:shadow-[-0px_-0px_13px_2px_var(--red-error)]/50"
              : "border-[#00ffff]/50 placeholder-cyan-500/90 shadow-[-0px_-0px_8px_4px_#013880] sm:shadow-[-0px_-0px_13px_2px_#013880]"
          }  focus:outline-none focus:ring-1 focus:ring-[var(--neon-cyan)] mt-4
          focus:shadow-[-0px_-0px_13px_5px_#00b5b5]/60 hover:shadow-[-0px_-0px_13px_5px_#013880] transition-all 
          duration-300 rounded-lg bg-[#0f1f40]/20 backdrop-blur-sm text-[var(--light-cyan)]
          `}
        />

        {errors.email ? (
          <p className="text-[var(--red-error)] text-[0.75rem] T2 font-semibold ml-1">
            {errors.email}
          </p>
        ) : null}

        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder="Mensagem"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            if (errors.message) {
              setErrors((prev) => ({ ...prev, message: undefined }));
            }
          }}
          autoComplete="off"
          className={`w-full p-2 border ${
            errors.message
              ? "border-[var(--red-error)] placeholder-[var(--red-error)]/80 shadow-[-0px_-0px_20px_5px_var(--red-error)]/50 sm:shadow-[-0px_-0px_13px_2px_var(--red-error)]/50"
              : "border-[#00ffff]/50 placeholder-cyan-500/90 shadow-[-0px_-0px_8px_4px_#013880] sm:shadow-[-0px_-0px_13px_2px_#013880]"
          }  focus:outline-none focus:ring-1 focus:ring-[var(--neon-cyan)] mt-4
          focus:shadow-[-0px_-0px_13px_5px_#00b5b5]/60 hover:shadow-[-0px_-0px_13px_5px_#013880] transition-all 
          duration-300 rounded-lg 
          bg-[#0f1f40]/20 backdrop-blur-sm text-[var(--light-cyan)]
          `}
        ></textarea>

        {errors.message ? (
          <p className="text-[var(--red-error)] text-[0.75rem] T2 font-semibold ml-1">
            {errors.message}
          </p>
        ) : null}

        <div
          className="flex flex-row justify-center text-lg sm:text-sm md:text-md gap-3 sm:gap-7 
        BODY1 mt-4"
        >
          <NeonBlueButton
            type="button"
            width={`w-full h-[40px] text-sm md:text-md sm:w-full sm:h-[45px] relative`}
            paddingY="py-3"
            text="Limpar"
            onClick={handleReset}
          />
          <NeonBlueButton
            type="submit"
            width={`w-full h-[40px] text-sm md:text-md sm:w-full sm:h-[45px] relative
              ${isSent ? "bg-[var(--neon-cyan)] text-black" : ""} `}
            paddingY="py-3"
            text={
              isSubmitting && Object.keys(errors).length === 0 ? (
                <ButtonLoadingAnimation text={"Enviando"} />
              ) : isSent ? (
                "Enviado!"
              ) : (
                "Enviar"
              )
            }
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
