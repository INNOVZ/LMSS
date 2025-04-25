import React from "react";

interface PageData {
  title: string;
  description: string;
}

const SectionCard = ({ title, description }: PageData) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center p-4 bg-[#eef2ff] duration-700 rounded-lg shadow border hover:border-[#4338ca] hover:border-1 pointer">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-center mt-5">{description}</p>
      </div>
    </div>
  );
};

export default SectionCard;
