import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  title: string;
  icon: LucideIcon;
  items: string[];
}

export const SkillCard = ({ title, icon: Icon, items }: SkillCardProps) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="relative group">
          <Icon className="w-6 h-6 text-[#2DD4BF] group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-bold text-[#1E3A8A] relative inline-block after:content-[''] after:block after:w-0 after:h-0.5 after:bg-[#2DD4BF] after:transition-all after:duration-300 hover:after:w-full">
          {title}
        </h3>
      </div>
      
      <div className="flex flex-wrap gap-3">
        {items.map((item, index) => (
          <span
            key={index}
            className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-[#2DD4BF]/20 to-[#60A5FA]/20 text-[#1E3A8A] border border-[#2DD4BF]/30 hover:bg-gradient-to-r hover:from-[#2DD4BF] hover:to-[#60A5FA] hover:text-white hover:border-transparent hover:scale-105 hover:shadow-md transition-all duration-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};