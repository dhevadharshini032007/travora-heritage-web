import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Sparkles } from "lucide-react";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <div className="animate-scale-in mb-8">
          <div className="relative">
            <CheckCircle className="w-24 h-24 text-primary mx-auto mb-6" />
            <Sparkles className="w-8 h-8 text-heritage-gold absolute -top-2 -right-2 animate-pulse" />
          </div>
        </div>

        <div className="animate-fade-in space-y-6">
          <h1 className="text-heritage-title text-secondary mb-4">
            Welcome to Travora!
          </h1>
          
          <p className="text-heritage-subtitle leading-relaxed mb-8">
            Your account has been created successfully. 
            Get ready to explore India's magnificent heritage sites 
            and embark on an unforgettable cultural journey.
          </p>

          <div className="card-heritage p-8 mb-8">
            <h2 className="text-xl font-bold text-secondary mb-4">What's Next?</h2>
            <div className="space-y-3 text-left">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">1</span>
                </div>
                <span className="text-muted-foreground">Browse heritage categories</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">2</span>
                </div>
                <span className="text-muted-foreground">Discover nearby heritage sites</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-heritage-gold rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">3</span>
                </div>
                <span className="text-muted-foreground">Start your AR exploration</span>
              </div>
            </div>
          </div>

          <Button 
            onClick={() => navigate('/categories')}
            className="btn-primary-glow text-lg px-12 py-6"
          >
            Explore Heritage Sites
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Success;