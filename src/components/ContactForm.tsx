import React, { useState } from "react";
import Swal from "sweetalert2";

// Define the shape of the form state
interface FormState {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  // Use FormState interface for type safety
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Payload for Google Apps Script
    const payload = { ...form, token: "9876543210" }; // Token to match Apps Script

    try {
      await fetch("https://script.google.com/macros/s/AKfycbxaxmtlKyZMuMUY9Wc_oqbN7GoYQK6fdyOgJr5G8UaP8c62E5I33qspE4syn96_o5PW/exec", {
        method: "POST",
        mode: "no-cors",
        // Note: Content-Type header is generally ignored in 'no-cors' mode,
        // but kept for completeness if the mode changes.
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // Success notification using SweetAlert2
      Swal.fire({
        icon: "success",
        title: "Message sent",
        toast: true,
        position: "top-end",
        timer: 2500,
        showConfirmButton: false,
      });

      // Clear the form
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      // Error notification
      Swal.fire({ 
        icon: "error", 
        title: "Send failed", 
        text: "There was an issue sending your message. Please try again." 
      });
    }
  };

  return (
    // Equivalent of <section style={{ padding: 30 }}>
    <section className="px-4 sm:px-6 lg:px-8">
      
      {/* Container for the form to apply shadow/background style */}
      <div className="max-w-xl mx-auto bg-white p-8 sm:p-10 rounded-xl shadow-card border border-gray-100">
        
        {/* Section Header - Styled to match Strategic Mandate header */}
        <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Contact Us
        </h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              // Tailwind classes for input styling
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 text-base"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              // Tailwind classes for input styling
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 text-base"
              placeholder="you@example.com"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              // Tailwind classes for textarea styling
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 text-base"
              placeholder="Type your message here..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            // Tailwind classes for button styling
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;