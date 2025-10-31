import React, { useState } from "react";
import Swal from "sweetalert2";

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = { ...form, token: "9876543210" }; // Token to match Apps Script

    try {
      await fetch("https://script.google.com/macros/s/AKfycbxaxmtlKyZMuMUY9Wc_oqbN7GoYQK6fdyOgJr5G8UaP8c62E5I33qspE4syn96_o5PW/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      Swal.fire({
        icon: "success",
        title: "Message sent",
        toast: true,
        position: "top-end",
        timer: 2500,
        showConfirmButton: false,
      });

      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      Swal.fire({ icon: "error", title: "Send failed", text: "Please try again." });
    }
  };

  return (
    <section style={{ padding: 30 }}>
      <h3>Contact Us</h3>
      <form onSubmit={handleSubmit} style={{ maxWidth: 600 }}>
        <div style={{ marginBottom: 10 }}>
          <label>Your name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: 8 }}
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: 8 }}
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={4}
            style={{ width: "100%", padding: 8 }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "10px 18px",
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: 6,
          }}
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;