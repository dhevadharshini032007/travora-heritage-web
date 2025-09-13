import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";

const About = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Button
                variant="ghost"
                onClick={() => navigate(-1)}
                className="mr-4 p-2 hover:bg-secondary/10"
              >
                <ArrowLeft className="w-6 h-6" />
              </Button>
              <h1 className="text-heritage-title text-secondary">{t('about.title')}</h1>
            </div>
            <LanguageToggle />
          </div>

          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="card-heritage">
              <h2 className="text-2xl font-bold text-secondary mb-4">{t('about.mission')}</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {t('about.mission.desc')}
              </p>
            </div>

            <div className="card-heritage">
              <h2 className="text-2xl font-bold text-secondary mb-4">{t('about.whatWeDo')}</h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">🏰</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{t('about.heritage.discovery')}</h3>
                    <p>{t('about.heritage.discovery.desc')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">📱</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{t('about.ar.experience')}</h3>
                    <p>{t('about.ar.experience.desc')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-heritage-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">🎓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{t('about.educational.content')}</h3>
                    <p>{t('about.educational.content.desc')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold text-white">🤝</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{t('about.community.contribution')}</h3>
                    <p>{t('about.community.contribution.desc')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-heritage">
              <h2 className="text-2xl font-bold text-secondary mb-4">{t('about.vision')}</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {t('about.vision.desc')}
              </p>
            </div>

            <div className="text-center pt-8">
              <Button 
                onClick={() => navigate('/login')}
                className="btn-primary-glow text-lg px-12 py-6"
              >
                {t('common.joinToday')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;