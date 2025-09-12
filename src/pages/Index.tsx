import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import travoraLogo from "@/assets/travora-logo.png";
import cityscapeBackground from "@/assets/cityscape-background.jpg";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-navigate to welcome page after 3 seconds
    const timer = setTimeout(() => {
      navigate('/welcome');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cityscapeBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-heritage opacity-60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <div className="animate-fade-in">
          <img 
            src={travoraLogo} 
            alt="Travora - Heritage Explorer" 
            className="w-48 h-48 mx-auto mb-8 drop-shadow-2xl animate-scale-in"
          />
          <h1 className="text-heritage-title text-white mb-4">
            Travora
          </h1>
          <p className="text-heritage-subtitle text-white/90 mb-8">
            Discover India's Rich Heritage
          </p>
          <div className="flex justify-center">
            <div className="animate-pulse">
              <div className="w-2 h-2 bg-primary rounded-full mx-1 inline-block"></div>
              <div className="w-2 h-2 bg-primary rounded-full mx-1 inline-block animation-delay-200"></div>
              <div className="w-2 h-2 bg-primary rounded-full mx-1 inline-block animation-delay-400"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;