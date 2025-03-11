"use client";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const Support = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormState & { message?: string }>>({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const validateForm = (): boolean => {
    let newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Valid email is required";
    if (!form.message.trim()) newErrors.message = "Message cannot be empty";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setSuccessMessage(null);

    try {
      const response = await fetch("/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setSuccessMessage("Your ticket has been submitted successfully!");
      setForm({ name: "", email: "", message: "" });
      setErrors({});
    } catch (error: any) {
      setErrors({ message: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-[#00C6FF] sm:text-5xl">Need Help? Open a Ticket</h2>
          <p className="mt-4 text-lg text-gray-300">
            Our support team will get back to you ASAP via email.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white bg-opacity-10 backdrop-blur-xl p-10 rounded-xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-base font-medium text-white mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                className={`w-full rounded-lg px-4 py-3 text-gray-900 bg-gray-100 focus:ring-2 focus:ring-[#00C6FF] focus:outline-none border ${errors.name ? "border-red-500" : "border-transparent"}`}
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-base font-medium text-white mb-2">Your Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                className={`w-full rounded-lg px-4 py-3 text-gray-900 bg-gray-100 focus:ring-2 focus:ring-[#00C6FF] focus:outline-none border ${errors.email ? "border-red-500" : "border-transparent"}`}
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-base font-medium text-white mb-2">Your Message</label>
              <textarea
                name="message"
                rows={5}
                placeholder="Enter your message"
                value={form.message}
                onChange={handleChange}
                className={`w-full rounded-lg px-4 py-3 text-gray-900 bg-gray-100 focus:ring-2 focus:ring-[#00C6FF] focus:outline-none border ${errors.message ? "border-red-500" : "border-transparent"}`}
              ></textarea>
              {/* {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>} */}
            </div>

            {successMessage && <p className="text-green-400 text-base">{successMessage}</p>}
            {errors.message && <p className="text-red-400 text-base">{errors.message}</p>}

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-[#00C6FF] px-6 py-3 text-gray-900 font-bold text-lg shadow-lg transition duration-300 hover:bg-[#0090CC] focus:ring-2 focus:ring-[#00C6FF]"
              >
                {loading ? "Submitting..." : "Submit Ticket"}
              </button>
            </div>
          </form>
        </div>

        <h2 className="text-3xl font-bold text-white mt-14 mb-6 text-center">Frequently Asked Questions (FAQs)</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="bg-gray-800 p-5 rounded-lg shadow-md transition duration-300 hover:bg-gray-700 cursor-pointer">
              <summary className="text-white text-lg font-semibold">{faq.question}</summary>
              <p className="mt-3 text-gray-300 text-base">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Support;
const faqs = [
  {
    question: "How do I download my purchased PDFs?",
    answer:
      "Once you complete your purchase, you will receive an instant download link via email. You can download the PDF twice using this link. If you exceed the download limit, raise a support ticket using your purchase email to request an extension.",
  },
  {
    question: "Why is my download showing progress and not completing?",
    answer:
      "Your PDF is being prepared, and it may take a few minutes to a few hours to be available. If you experience long delays, please contact support.",
  },
  {
    question: "What if I don’t receive my download link?",
    answer:
      "If you haven’t received the email within a few minutes: 1. Check your spam/junk folder. 2. If you still don’t find it, contact us at support@prepbundles.in with your purchase email.",
  },
  {
    question: "I am unable to download my PDF. It says 'Download Limit Exceeded.'",
    answer:
      "Each purchase allows two downloads. If you exceed this limit, raise a support ticket with your purchase email to request an extension.",
  },
  {
    question: "Can I get a refund if I’m not satisfied?",
    answer:
      "We do not offer refunds for digital products, except in specific cases like: Duplicate payment, Technical issues preventing access, Incorrect product delivery. Please check our Refund Policy for details.",
  },
  {
    question: "Do you offer live interview coaching?",
    answer:
      "Currently, we provide structured PDF guides for self-paced learning. We may introduce additional resources in the future!",
  },
];