"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `onefortheworld.uw@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Contact from OFTW UW Website"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.assign(mailto);
    setStatus("Thank you for your message! Opening your email client...");
  };

  return (
    <div className="bg-white border border-neutral-200 rounded-2xl p-8 sm:p-12 shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2"
          >
            Full Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="e.g. Jane Badger"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            required
            className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:border-[#2675F8] focus:ring-1 focus:ring-[#2675F8]"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="e.g. jbadger@wisc.edu"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
            className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:border-[#2675F8] focus:ring-1 focus:ring-[#2675F8]"
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2"
          >
            Subject
          </label>
          <input
            id="subject"
            type="text"
            placeholder="e.g. Chapter Membership / Question"
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
            required
            className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:border-[#2675F8] focus:ring-1 focus:ring-[#2675F8]"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="How can we help you?"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
            className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:border-[#2675F8] focus:ring-1 focus:ring-[#2675F8] resize-vertical"
          ></textarea>
        </div>

        <button type="submit" className="btn-primary w-full text-center">
          <span>Send Message</span>
        </button>

        {status && (
          <p className="text-sm text-green-700 font-semibold text-center bg-green-50 p-3 rounded-lg border border-green-200">
            {status}
          </p>
        )}
      </form>
    </div>
  );
}
