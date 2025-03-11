const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div className={`w-full ${center ? "mx-auto text-center" : ""}`} style={{ maxWidth: width, marginBottom: mb }}>
        <h2 className="mb-4 text-4xl font-extrabold text-[#E0E0FF] drop-shadow-lg sm:text-5xl md:text-[45px]">
          {title}
        </h2>
        <p className="text-lg text-gray-300 opacity-90">
          {paragraph}
        </p>
      </div>
    </>
  );
  
};

export default SectionTitle;
