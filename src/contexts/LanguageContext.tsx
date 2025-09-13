import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'ta';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.categories': 'Categories',
    'nav.search': 'Search',
    'nav.login': 'Login',
    
    // Common
    'common.next': 'Next',
    'common.explore': 'Explore',
    'common.search': 'Search',
    'common.viewDetails': 'View Details',
    'common.back': 'Back',
    'common.close': 'Close',
    'common.send': 'Send',
    
    // Landing
    'landing.title': 'Travora',
    'landing.subtitle': "Discover India's Rich Heritage",
    
    // Welcome
    'welcome.title': 'Welcome to Travora',
    'welcome.subtitle': 'Explore the magnificent heritage sites of India through our interactive AR experience',
    
    // About
    'about.title': 'About Travora',
    'about.description': 'Travora is your gateway to exploring India\'s incredible heritage. Using cutting-edge AR technology, we bring ancient monuments, temples, and forts to life, offering immersive experiences that connect you with the rich cultural history of our nation.',
    
    // Categories
    'categories.title': 'Explore Heritage Categories',
    'categories.search.placeholder': 'Search heritage sites...',
    'categories.temples': 'Temples',
    'categories.forts': 'Forts',
    'categories.monasteries': 'Monasteries',
    
    // Login
    'login.title': 'Welcome Back',
    'login.email.placeholder': 'Email or Phone',
    'login.password.placeholder': 'Password',
    'login.button': 'Login',
    'login.createAccount': 'Create Account',
    'login.googleLogin': 'Login with Google',
    'login.facebookLogin': 'Login with Facebook',
    
    // Chatbot
    'chatbot.title': 'Heritage Assistant',
    'chatbot.placeholder': 'Ask me about Indian heritage sites...',
    'chatbot.greeting': 'Hello! I\'m your heritage guide. Ask me about Indian temples, forts, monasteries, or any heritage site!',
  },
  ta: {
    // Navigation
    'nav.home': 'முகப்பு',
    'nav.about': 'எங்களைப் பற்றி',
    'nav.categories': 'வகைகள்',
    'nav.search': 'தேடல்',
    'nav.login': 'உள்நுழைவு',
    
    // Common
    'common.next': 'அடுத்து',
    'common.explore': 'ஆராயுங்கள்',
    'common.search': 'தேடுங்கள்',
    'common.viewDetails': 'விவரங்களைப் பார்க்கவும்',
    'common.back': 'பின்',
    'common.close': 'மூடு',
    'common.send': 'அனுப்பு',
    
    // Landing
    'landing.title': 'ட்ராவோரா',
    'landing.subtitle': 'இந்தியாவின் பல்லாயிரம் ஆண்டு பழமையான பாரம்பரியத்தை கண்டறியுங்கள்',
    
    // Welcome
    'welcome.title': 'ட்ராவோராவிற்கு வரவேற்கிறோம்',
    'welcome.subtitle': 'எங்கள் ஊடாடும் AR அனுபவத்தின் மூலம் இந்தியாவின் அற்புதமான பாரம்பரிய தளங்களை ஆராயுங்கள்',
    
    // About
    'about.title': 'ட்ராவோரா பற்றி',
    'about.description': 'ட்ராவோரா இந்தியாவின் நம்பமுடியாத பாரம்பரியத்தை ஆராய்வதற்கான உங்கள் நுழைவாயில். அதிநவீன AR தொழில்நுட்பத்தைப் பயன்படுத்தி, நாங்கள் பண்டைய நினைவுச்சின்னங்கள், கோயில்கள் மற்றும் கோட்டைகளுக்கு உயிர் கொடுக்கிறோம்.',
    
    // Categories
    'categories.title': 'பாரம்பரிய வகைகளை ஆராயுங்கள்',
    'categories.search.placeholder': 'பாரம்பரிய தளங்களைத் தேடுங்கள்...',
    'categories.temples': 'கோயில்கள்',
    'categories.forts': 'கோட்டைகள்',
    'categories.monasteries': 'மடாலயங்கள்',
    
    // Login
    'login.title': 'மீண்டும் வரவேற்கிறோம்',
    'login.email.placeholder': 'மின்னஞ்சல் அல்லது தொலைபேசி',
    'login.password.placeholder': 'கடவுச்சொல்',
    'login.button': 'உள்நுழைவு',
    'login.createAccount': 'கணக்கை உருவாக்கவும்',
    'login.googleLogin': 'Google உடன் உள்நுழைவு',
    'login.facebookLogin': 'Facebook உடன் உள்நுழைவு',
    
    // Chatbot
    'chatbot.title': 'பாரம்பரிய உதவியாளர்',
    'chatbot.placeholder': 'இந்திய பாரம்பரிய தளங்களைப் பற்றி என்னிடம் கேளுங்கள்...',
    'chatbot.greeting': 'வணக்கம்! நான் உங்கள் பாரம்பரிய வழிகாட்டி. இந்திய கோயில்கள், கோட்டைகள், மடாலயங்கள் அல்லது எந்த பாரம்பரிய தளத்தைப் பற்றியும் என்னிடம் கேளுங்கள்!',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};