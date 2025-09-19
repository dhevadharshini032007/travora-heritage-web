import { useNavigate } from "react-router-dom";
import travoraLogo from "@/assets/travora-logo.png";
import cityscapeBackground from "@/assets/cityscape-background.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Language Toggle */}
      <div className="absolute top-6 right-6 z-20">
        <LanguageToggle />
      </div>
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cityscapeBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-heritage opacity-60"></div>
      </div>
      
      {/* Content */}
      <div 
        className="relative z-10 text-center px-6 cursor-pointer h-full flex items-center justify-center"
        onClick={() => navigate('/welcome')}
      >
        <div className="animate-fade-in">
          <img 
            src={travoraLogo} 
            alt="Travora - Heritage Explorer" 
            className="w-48 h-48 mx-auto mb-8 drop-shadow-2xl animate-scale-in"
          />
          <h1 className="text-heritage-title text-white mb-4">
            {t('landing.title')}
          </h1>
          <p className="text-heritage-subtitle text-white/90 mb-8">
            {t('landing.subtitle')}
          </p>
          <p className="text-white/70 text-lg animate-pulse">
            {t('landing.clickAnywhere')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;