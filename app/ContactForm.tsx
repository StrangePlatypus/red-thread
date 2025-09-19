"use client";

import emailjs from "@emailjs/browser";
import Input from "@/ui/input";
import Button from "@/ui/button";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Form from "next/form";

export default function ContactForm() {
  const [submitText, setSubmitText] = useState("Envoyer");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const validEmail = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}$/;
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (
      userInput.name.length > 1 &&
      userInput.email.length > 1 &&
      userInput.message.length > 1
    ) {
      if (validEmail.test(userInput.email)) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    }
  }, [userInput]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.currentTarget;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  }

  async function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSubmitText("Envoi en cours...");

    try {
      const emailParams = {
        name: userInput.name,
        email: userInput.email,
        message: userInput.message,
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        emailParams,
        process.env.NEXT_PUBLIC_PUBLIC_KEY!
      );
      toast.success("Votre message a bien été envoyé !");
      setUserInput({
        name: "",
        email: "",
        message: "",
      });
      setDisabled(true);
    } catch (error) {
      toast.error("Erreur lors de l'envoi, veuillez réessayer plus tard");
    } finally {
      console.log(userInput);
      setSubmitText("Envoyer");
      setLoading(false);
    }
  }

  return (
    <Form onSubmit={sendEmail} action="" className="flex flex-col gap-6 w-fit mx-auto">
      <div className="flex flex-wrap gap-6 mb-4">
        <Input
          name="name"
          aria-label="name"
          variant="primary"
          placeholder="Nom"
          required
          value={userInput.name}
          onChange={handleChange}
          disabled={loading}
        />
        <Input
          name="email"
          aria-label="email"
          variant="primary"
          placeholder="Email"
          required
          value={userInput.email}
          onChange={handleChange}
          disabled={loading}
        />
      </div>
      <textarea
        className="py-2 px-4 rounded-sm border border-gray-100 hover:border-(--red) bg-white text-black w-full min-h-25 max-h-50 resize-none"
        name="message"
        aria-label="message"
        placeholder="Saisissez votre message ici..."
        required
        value={userInput.message}
        onChange={handleChange}
        disabled={loading}
      />
      <Button
        disabled={disabled}
        loading={loading}
        variant="primary"
        position="right"
        type="submit"
      >
        {submitText}
      </Button>
      <Toaster />
    </Form>
  );
}
