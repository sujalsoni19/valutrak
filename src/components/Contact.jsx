import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import githubicon from "../assets/github.svg";
import linkedinicon from "../assets/linkedin.svg";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const formHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("access_key", "fe04194c-79bb-4bf5-84bd-c0f0305c14e6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
    }

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="mt-7">
      <div
        className="max-w-md mx-auto p-6 rounded-2xl 
                      bg-white/20 backdrop-blur-md 
                      border border-white/30 shadow-xl"
      >
        <form onSubmit={formHandler} className="flex flex-col items-center">
          <h1 className="text-2xl text-center mb-6 text-black font-semibold">
            Contact Form
          </h1>

          <div className="w-full flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-1 text-black/90">
                Full name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="border border-white/40 bg-white/10 text-black
                           placeholder:text-indigo-700  p-2 rounded w-full 
                           focus:outline-none focus:ring-2 focus:ring-indigo-300"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 text-black/90">
                Email id:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email-id"
                className="border border-white/40 bg-white/10 text-black
                           placeholder:text-indigo-700  p-2 rounded w-full 
                           focus:outline-none focus:ring-2 focus:ring-indigo-300"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-1 text-black/90">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border border-white/40 bg-white/10 text-black
                           placeholder:text-indigo-700  p-2 rounded w-full resize-none 
                           focus:outline-none focus:ring-2 focus:ring-indigo-300"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-2 px-4 py-2 rounded 
                         bg-white text-black 
                         hover:bg-indigo-600 transition"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-wrap gap-4 mt-10 mx-auto items-center justify-center">
        <h1 className="text-2xl whitespace-nowrap">Follow us on:</h1>

        <a href="https://github.com/sujalsoni19" target="_blank">
          <img src={githubicon} alt="GitHub" className="w-8 h-8 shrink-0" />
        </a>

        <a href="https://www.linkedin.com/in/sujal-soni19" target="_blank">
          <img src={linkedinicon} alt="LinkedIn" className="w-8 h-8 shrink-0" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
