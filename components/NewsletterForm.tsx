"use client";

import { useState } from "react";
export default function NewsletterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      await fetch("https://api.sheetmonkey.io/form/3MzFZttDTsxDmqadYmCqwd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
        mode: "no-cors",
      });

      setStatus({
        type: "success",
        message: "Success! You are on the list.",
      });
      setName("");
      setEmail("");
    } catch (err) {
      console.error("Submission failed:", err);
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-3 max-w-sm" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="First & Last Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 text-sm focus:outline-none focus:border-[#2675F8] focus:ring-1 focus:ring-[#2675F8]"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Your Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 text-sm focus:outline-none focus:border-[#2675F8] focus:ring-1 focus:ring-[#2675F8]"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto px-6 py-3 rounded-full text-sm font-bold bg-[#E2FF3E] text-black border border-black/20 hover:scale-[1.02] hover:shadow-lg transition-all duration-200 cursor-pointer disabled:opacity-50"
      >
        {loading ? "Subscribing..." : "Subscribe"}
      </button>
      {status.message && (
        <p
          className={`text-xs mt-2 font-medium ${
            status.type === "success" ? "text-[#E2FF3E]" : "text-red-400"
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
}
