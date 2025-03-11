import Image from "next/image";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/1234567890", "_blank"); // Replace with a real number
  };

  return (
    <button
      className="fixed bottom-6 right-6 flex items-center px-6 py-4 bg-[#25D366] text-white font-semibold rounded-full shadow-lg hover:bg-[#128C7E] transition duration-300"
      onClick={handleClick}
    >
      <Image
        src="/images/whatsapp.svg" // Make sure the image exists in the public folder
        alt="WhatsApp"
        width={24}
        height={24}
        className="mr-2"
      />
      Chat on WhatsApp
    </button>
  );
};

export default WhatsAppButton;
