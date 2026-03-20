import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lalwn3d",
        "template_4yxri0f",
        form.current,
        "M3ZMuRnS-ayM3Zcmj"
      )
      .then(() => {
        alert("Message sent successfully ✅");
        form.current.reset();
      })
      .catch(() => {
        alert("Failed to send ❌");
      });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Let’s Work Together 🚀
          </h2>

          <p className="text-gray-400 mb-6">
            I’m a passionate Full Stack Developer who loves building modern,
            responsive web applications. If you have a project idea, job
            opportunity, or just want to connect — feel free to reach out.
          </p>

          <p className="text-gray-400 mb-6">
            I’m always open to learning, collaborating, and creating impactful
            digital experiences.
          </p>

          <div className="space-y-3">
            <p>📧 gayathrirajavel99@gmail.com</p>
            <p>📱 8248183811</p>
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-gray-900 p-8 rounded-2xl shadow-lg space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:outline-none focus:border-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:outline-none focus:border-blue-500"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:outline-none focus:border-blue-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-3 rounded-lg hover:opacity-90 transition font-semibold"
          >
            Send Message ✉️
          </button>
        </motion.form>

      </div>
    </section>
  );
}