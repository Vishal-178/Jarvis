"use client"
import { useState } from "react";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [source, setSource] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="flex justify-center items-center min-h-screen text-dark px-4">
      <div className="max-w-2xl w-full">
        <h2 className="text-6xl font-bold text-center text-black">Get in touch</h2>
        <p className="text-gray-500 text-center mt-2">
          We’d love to hear from you. Please fill out this form.
        </p>
        <form className="mt-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="border rounded-lg p-3 w-full outline-none focus:ring-2 "
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-lg p-3 w-full outline-none focus:ring-2 "
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="phone"
              placeholder="Phone No"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border rounded-lg p-3 w-full outline-none focus:ring-2 "
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="border rounded-lg p-3 w-full outline-none focus:ring-2 "
            />
          </div>
          <select
            name="source"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            className="border rounded-lg p-3 w-full outline-none focus:ring-2 "
          >
            <option value="">Where did you find us?</option>
            <option value="google">Facebook</option>
            <option value="social_media">Twitter</option>
            <option value="referral">Instagram</option>
            <option value="other">Other</option>
          </select>
          <textarea
            name="message"
            rows={4}
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border rounded-lg p-3 w-full outline-none focus:ring-2 "
          ></textarea>
          <button
            type="submit"
            className="w-full bg-green-500 text-white font-semibold py-3 rounded-full hover:bg-green-600 transition-all"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
