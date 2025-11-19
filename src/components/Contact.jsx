import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b6jn2qq",
        "template_jyd6z19",
        formRef.current,
        "uNZBEDrV0HOjjyr1k"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          formRef.current.reset();
        },
        () => {
          setStatus("Failed to send message.");
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-description">
          Feel free to reach out for collaborations or just a friendly hello!
        </p>

        <form ref={formRef} onSubmit={sendEmail} className="contact-card">
          <div className="form-group">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="contact-input"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              className="contact-input"
              required
            />
          </div>

          {/* Auto-generated time */}
          <input
            type="hidden"
            name="time"
            value={new Date().toLocaleString()}
          />

          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              className="contact-textarea"
              required
            ></textarea>
          </div>

          <button className="contact-button" type="submit">
            Send Message
          </button>

          {status && <p className="contact-status">{status}</p>}
        </form>
      </div>
    </section>
  );
};
