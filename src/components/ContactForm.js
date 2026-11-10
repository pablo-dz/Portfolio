import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzeenrzo";
const RECAPTCHA_SITE_KEY = "6LcwExkuAAAAAEZVRJuQHcI3XHSXpq2EVOdMriCJ";

let recaptchaLoadPromise;

function loadRecaptcha() {
  if (window.grecaptcha?.execute) {
    return Promise.resolve();
  }

  if (!recaptchaLoadPromise) {
    recaptchaLoadPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        if (!window.grecaptcha) {
          reject(new Error("reCAPTCHA no se pudo inicializar."));
          return;
        }

        window.grecaptcha.ready(resolve);
      };
      script.onerror = () => reject(new Error("No se pudo cargar reCAPTCHA."));
      document.head.appendChild(script);
    }).catch((error) => {
      recaptchaLoadPromise = undefined;
      throw error;
    });
  }

  return recaptchaLoadPromise;
}

function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");
  const { isEnglish } = useLanguage();

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    setFeedback("");
    let isSubmitting = false;

    try {
      await loadRecaptcha();
      const recaptchaToken = await window.grecaptcha.execute(
        RECAPTCHA_SITE_KEY,
        { action: "submit" }
      );

      if (!recaptchaToken) {
        throw new Error("reCAPTCHA did not return a valid token.");
      }

      const formData = new FormData(form);
      formData.set("g-recaptcha-response", recaptchaToken);
      isSubmitting = true;

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        let errorMessage = isEnglish
          ? `Formspree rejected the submission (HTTP ${response.status}).`
          : `Formspree rechazó el envío (HTTP ${response.status}).`;

        try {
          const responseBody = await response.text();
          const result = JSON.parse(responseBody);
          const messages = Array.isArray(result?.errors)
            ? result.errors
                .map((error) =>
                  typeof error?.message === "string" ? error.message : ""
                )
                .filter(Boolean)
            : [];
          const detail =
            messages.join(" ") ||
            (typeof result?.message === "string" && result.message) ||
            (typeof result?.error === "string" && result.error);

          if (detail) {
            errorMessage = detail;
          }
        } catch (error) {
          if (!(error instanceof SyntaxError)) {
            throw error;
          }
        }

        setStatus("error");
        setFeedback(errorMessage);
        return;
      }

      form.reset();
      setStatus("success");
      setFeedback(
        isEnglish
          ? "Thank you! Your message has been sent."
          : "¡Gracias! Tu mensaje fue enviado."
      );
    } catch (error) {
      setStatus("error");
      setFeedback(
        isSubmitting
          ? isEnglish
            ? "There was a connection problem with Formspree. Please try again."
            : "Hubo un problema de conexión con Formspree. Inténtalo nuevamente."
          : isEnglish
            ? "reCAPTCHA verification failed. Check your connection and try again."
            : "No se pudo verificar reCAPTCHA. Revisa la conexión e inténtalo nuevamente."
      );
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="contact-name">{isEnglish ? "Name" : "Nombre"}</label>
      <input
        id="contact-name"
        name="name"
        type="text"
        autoComplete="name"
        required
      />

      <label htmlFor="contact-email">
        {isEnglish ? "Email address" : "Correo electrónico"}
      </label>
      <input
        id="contact-email"
        name="email"
        type="email"
        autoComplete="email"
        required
      />

      <label htmlFor="contact-message">
        {isEnglish ? "Message" : "Mensaje"}
      </label>
      <textarea id="contact-message" name="message" rows="5" required />

      <button
        className="contact-button"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending"
          ? isEnglish
            ? "Sending..."
            : "Enviando..."
          : isEnglish
            ? "Send message"
            : "Enviar mensaje"}
      </button>

      {feedback && (
        <p
          className={`contact-form-feedback ${status}`}
          role={status === "error" ? "alert" : "status"}
          aria-live="polite"
        >
          {feedback}
        </p>
      )}
    </form>
  );
}

export default ContactForm;
