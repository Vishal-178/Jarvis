"use client";
import { useRequiredData } from "@/provider/MainDataProvider";
import { useState } from "react";

const Buy = () => {
  const { data, timeframe, setTimeframe } = useRequiredData();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [quantity, setQuantity] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<any>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    let newErrors: any = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format";
    }
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d+$/.test(phone)) {
      newErrors.phone = "Phone number must be numeric";
    }
    if (!quantity.trim()) {
      newErrors.quantity = "Quantity is required";
    } else if (!/^\d+$/.test(quantity)) {
      newErrors.quantity = "Quantity must be numeric";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    setIsSubmitting(true);

    const formData = { name, email, phone, quantity, message, buyOrSell: "Buy" };
    try {
      const response = await fetch("/api/update-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const responseData = await response.json();
        alert(`Error: ${responseData.error}`);
      }
    } catch (error) {
      alert("Failed to update sheet");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2 className="text-lg font-semibold">{data.detail.Name}</h2>
      <p className="text-gray-500 text-medium py-2">
        {timeframe === "monthly"
          ? `${Object.entries(data.monthly).pop()[1]}`
          : timeframe === "weekly"
          ? `${Object.entries(data.Weekly).pop()[1]}`
          : timeframe === "daily"
          ? `${Object.entries(data.Daily).pop()[1]}`
          : `${Object.entries(data.monthly).pop()[1]}`}
      </p>

      {isSubmitted ? (
        <div className="bg-green-500 text-white text-center font-semibold py-4 px-6 rounded-lg">
          You'll receive a Whatsapp shortly for the next steps
        </div>
      ) : (
        <>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 mb-2 border border-gray-300 rounded-lg outline-none"
          />
          {errors.name && <p className="text-red-500 text-sm mb-2">{errors.name}</p>}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-2 border border-gray-300 rounded-lg outline-none"
          />
          {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}

          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 mb-2 border border-gray-300 rounded-lg outline-none"
          />
          {errors.phone && <p className="text-red-500 text-sm mb-2">{errors.phone}</p>}

          <input
            type="text"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full p-3 mb-2 border border-gray-300 rounded-lg outline-none"
          />
          {errors.quantity && <p className="text-red-500 text-sm mb-2">{errors.quantity}</p>}

          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 h-20 border border-gray-300 rounded-lg outline-none"
          ></textarea>

          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`w-full bg-green-600 text-white font-bold py-3 rounded-full mt-4 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? "Processing..." : "Buy"}
          </button>
        </>
      )}
    </div>
  );
};

export default Buy;
