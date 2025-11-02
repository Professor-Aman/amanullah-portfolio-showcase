import { ExternalLink, Download, Sparkles } from "lucide-react";
import { App } from "@/data/portfolioApps";

interface AppCardProps {
  app: App;
}

export const AppCard = ({ app }: AppCardProps) => {
  const { title, desc, link, icon, downloads, isRecent } = app;
  
  const isComingSoon = link === null;
  const hasValidIcon = icon !== "Non" && icon !== "Coming soon";

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 h-full flex flex-col relative">
      {/* Downloads Badge */}
      <div className={`absolute top-3 right-3 text-xs font-medium px-2 py-1 rounded-full flex items-center ${!isComingSoon ? 'bg-accent/90 text-white' : 'bg-gray-600 text-gray-400'}`}>
        <Download className="w-3 h-3 mr-1" />
        {!isComingSoon ? (downloads || "N/A") : "Coming Soon"}
      </div>
      
      {/* Recent Badge */}
      {isRecent && (
        <div className="absolute top-3 left-3 text-xs font-medium px-2 py-1 rounded-full flex items-center bg-yellow-500 text-white">
          <Sparkles className="w-3 h-3 mr-1" />
          Recent
        </div>
      )}
      
      {/* App Icon */}
      {hasValidIcon ? (
        <img 
          src={icon} 
          alt={`${title} icon`} 
          className="w-20 h-20 rounded-xl object-cover border-2 border-white/20 shadow-md mb-4"
        />
      ) : (
        <div className="w-20 h-20 rounded-xl bg-gray-600 flex items-center justify-center border-2 border-white/20 shadow-md mb-4">
          <span className="text-xs text-gray-300 text-center">Coming Soon</span>
        </div>
      )}

      {/* App Info */}
      <h3 className="text-lg font-bold text-gray-900 dark:text-white truncate line-clamp-1 mb-2">{title}</h3>
      <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2 mb-4 flex-grow">{desc}</p>

      {/* Button */}
      {isComingSoon ? (
        <button 
          disabled 
          className="w-full py-2 px-4 rounded-lg bg-gray-600 text-gray-400 flex items-center justify-center"
        >
          Coming Soon
        </button>
      ) : (
        <a 
          href={link || "#"} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full py-2 px-4 rounded-lg bg-accent text-white flex items-center justify-center hover:bg-white hover:text-[#2DD4BF] transition-all duration-300"
        >
          View on Play Store
          <ExternalLink className="w-4 h-4 ml-2" />
        </a>
      )}
    </div>
  );
}