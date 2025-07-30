// components/values/ValueCard.tsx
import { ReactNode } from "react";

interface ValueCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const ValueCard = ({ icon, title, description }: ValueCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col items-center text-center space-y-4">
      <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full text-blue-600">
        {icon}
      </div>
      <h4 className="font-semibold text-gray-900 text-lg">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};
