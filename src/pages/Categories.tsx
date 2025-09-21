import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, MapPin, Heart, Camera, List, Settings, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import monasteryImage from "@/assets/monastery.jpg";
import fortImage from "@/assets/fort.jpg";
import templeImage from "@/assets/temple.jpg";

const Categories = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useLanguage();

  const categories = [
    {
      id: "monasteries",
      title: t('categories.monasteries'),
      image: monasteryImage,
      description: t('categories.monasteries.desc'),
      count: "120+ Sites"
    },
    {
      id: "forts",
      title: t('categories.forts'), 
      image: fortImage,
      description: t('categories.forts.desc'),
      count: "250+ Sites"
    },
    {
      id: "temples",
      title: t('categories.temples'),
      image: templeImage,
      description: t('categories.temples.desc'),
      count: "500+ Sites"
    }
  ];

  const menuItems = [
    { icon: Heart, label: "Saved Places", path: "/saved" },
    { icon: Camera, label: "Reviews", path: "/reviews" },
    { icon: Camera, label: "Photos", path: "/photos" },
    { icon: List, label: "Lists", path: "/lists" },
    { icon: MapPin, label: "Contribute", path: "/contribute" },
    { icon: Settings, label: "Settings", path: "/settings" },
    { icon: Globe, label: "Language", path: "/language" },
  ];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-card shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-secondary">{t('landing.title')}</h1>
            <div className="flex items-center gap-4">
              <LanguageToggle />
              <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-secondary/10">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="text-secondary">Menu</SheetTitle>
                  <SheetDescription>
                    Access your profile and app settings
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-8 space-y-4">
                  {menuItems.map((item) => (
                    <Button
                      key={item.label}
                      variant="ghost"
                      onClick={() => navigate(item.path)}
                      className="w-full justify-start text-left hover:bg-secondary/10"
                    >
                      <item.icon className="w-5 h-5 mr-3" />
                      {item.label}
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-4 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder={t('categories.search.placeholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              className="input-heritage pl-12 pr-16"
            />
            <Button
              onClick={handleSearch}
              className="absolute right-2 top-2 btn-heritage"
            >
              {t('common.search')}
            </Button>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-secondary mb-8 text-center">
            Explore Heritage Categories
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className="card-heritage group cursor-pointer overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => navigate(`/category/${category.id}`)}
              >
                <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-heritage opacity-40 group-hover:opacity-30 transition-opacity"></div>
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {category.count}
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-secondary mb-3">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-lg mb-4">
                    {category.description}
                  </p>
                  <Button className="btn-outline-heritage group-hover:bg-secondary group-hover:text-secondary-foreground transition-all">
                    Explore {category.title}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="card-heritage">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">3,842</div>
                <div className="text-lg text-muted-foreground">Heritage Sites</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">28</div>
                <div className="text-lg text-muted-foreground">States Covered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-heritage-gold mb-2">2.5M+</div>
                <div className="text-lg text-muted-foreground">Happy Travelers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;