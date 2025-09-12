import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="mr-4 p-2 hover:bg-secondary/10"
            >
              <ArrowLeft className="w-6 h-6" />
            </Button>
            <h1 className="text-heritage-title text-secondary">About Travora</h1>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="card-heritage">
              <h2 className="text-2xl font-bold text-secondary mb-4">Our Mission</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Travora is dedicated to preserving and showcasing India's incredible heritage for future generations. 
                Through cutting-edge AR technology and comprehensive cultural information, we bring ancient history 
                to life in the modern world.
              </p>
            </div>

            <div className="card-heritage">
              <h2 className="text-2xl font-bold text-secondary mb-4">What We Do</h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">🏰</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Heritage Site Discovery</h3>
                    <p>Explore over 1000+ monuments, temples, forts, and monasteries across India with detailed historical information.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">📱</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">AR Experience</h3>
                    <p>Use augmented reality to visualize historical reconstructions and interactive elements at heritage sites.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-heritage-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">🎓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Educational Content</h3>
                    <p>Rich multimedia content including stories, historical context, architectural details, and cultural significance.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold text-white">🤝</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Community Contribution</h3>
                    <p>Users can contribute photos, reviews, and local insights to build a comprehensive heritage database.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-heritage">
              <h2 className="text-2xl font-bold text-secondary mb-4">Our Vision</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                To make India's rich cultural heritage accessible to everyone, everywhere. We believe that technology 
                can bridge the gap between past and present, making historical sites more engaging and educational 
                for visitors of all ages.
              </p>
            </div>

            <div className="text-center pt-8">
              <Button 
                onClick={() => navigate('/login')}
                className="btn-primary-glow text-lg px-12 py-6"
              >
                Join Travora Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;