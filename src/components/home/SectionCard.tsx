import React from "react";

interface PageData {
  title: string;
  description: string;
}

const SectionCard = React.memo(({ title, description }: PageData) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-10 px-4 bg-gray-100 duration-700 rounded-lg shadow border hover:border hover:border-1 pointer bg-gradient-to-b from-gray-100 to-white">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-center mt-5">{description}</p>
      </div>
    </div>
  );
});

// Add a display name for better debugging in React DevTools
SectionCard.displayName = "SectionCard";

export default SectionCard;
