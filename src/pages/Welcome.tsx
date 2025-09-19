import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heritageSites from "@/assets/heritage-sites.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";

const Welcome = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-subtle relative overflow-hidden">
      {/* Language Toggle */}
      <div className="absolute top-6 right-6 z-20">
        <LanguageToggle />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-heritage-gold/20 rounded-full translate-x-24 translate-y-24"></div>
      
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-heritage-title text-secondary mb-6">
              {t('welcome.title')}
            </h1>
            <p className="text-heritage-subtitle mb-12 leading-relaxed">
              {t('welcome.subtitle')}
            </p>
          </div>

          <div className="animate-scale-in mb-12">
            <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-heritage)] mb-8">
              <img 
                src={heritageSites} 
                alt="Indian Heritage Sites" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
            </div>
          </div>

          <div className="animate-fade-in space-y-6">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="card-heritage text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏛️</span>
                </div>
                <h3 className="font-bold text-xl mb-2">{t('common.explore')}</h3>
                <p className="text-muted-foreground">Discover thousands of heritage sites across India</p>
              </div>
              
              <div className="card-heritage text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="font-bold text-xl mb-2">Learn</h3>
                <p className="text-muted-foreground">Rich historical information and cultural insights</p>
              </div>
              
              <div className="card-heritage text-center">
                <div className="w-16 h-16 bg-heritage-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-bold text-xl mb-2">Experience</h3>
                <p className="text-muted-foreground">Interactive AR features and virtual tours</p>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <Button 
                onClick={() => navigate('/explore')}
                className="btn-primary-glow text-lg px-8 py-4"
              >
                {t('common.explore')}
              </Button>
              <Button 
                onClick={() => navigate('/learn')}
                className="btn-primary-glow text-lg px-8 py-4"
              >
                Learn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;