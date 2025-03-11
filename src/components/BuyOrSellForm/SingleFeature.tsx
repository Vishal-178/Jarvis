import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full group">
      <div className="wow fadeInUp transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl bg-[#282844] p-6 rounded-xl text-white">
        <div className="mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-opacity-10 text-pink-400 shadow-lg group-hover:scale-110 transition">
          {icon}
        </div>
        <h3 className="mb-4 text-xl font-bold text-[#E0E0FF] sm:text-2xl">
          {title}
        </h3>
        <p className="text-base font-medium text-gray-300">
          {paragraph}
        </p>
      </div>
    </div>
  );
  
};

export default SingleFeature;
